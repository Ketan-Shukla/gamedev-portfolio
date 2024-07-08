import React, {useMemo} from 'react';
import {Image as KonvaImage, Layer, Stage} from 'react-konva';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px; /* Adjust the gap between items as needed */
  justify-content: center;
`;

const Item = styled.div`
  display: flex;
  align-items: center;
  width: calc(33.333% - 20px); /* Adjust width and subtract gap for proper spacing */
  max-width: 300px; /* Adjust based on your desired max width */
  margin-bottom: 0px; /* Add bottom margin to separate rows */

  &:hover .image-container {
    transform: scale(1.05);
    transition: transform 0.3s ease-in-out;
  }
`;

const ImageContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: transform 0.3s ease-in-out;
`;

interface Media {
  type: string;
  src: string | ImageSrcType;
}

interface ImageSrcType {
  blurDataURL: string;
  blurHeight: number;
  blurWidth: number;
  height: number;
  src: string;
  width: number;
}

interface ImageVideoPanelProps {
  media: Media[];
}

const ImageVideoPanel: React.FC<ImageVideoPanelProps> = React.memo(({media}) => {
  const [images, setImages] = React.useState<HTMLImageElement[]>([]);

  React.useEffect(() => {
    const loadedImages: HTMLImageElement[] = [];
    const imagePromises = media.map(
      item =>
        new Promise<void>(resolve => {
          if (item.type === 'image') {
            const img = new window.Image();
            img.src = typeof item.src === 'string' ? item.src : item.src.src;
            img.onload = () => {
              loadedImages.push(img);
              resolve();
            };
          } else {
            resolve();
          }
        }),
    );

    Promise.all(imagePromises).then(() => {
      setImages(loadedImages);
    });
  }, [media]);

  const memoizedMedia = useMemo(() => {
    return media.map((item, index) => {
      if (item.type === 'image' && images[index]) {
        return (
          <Stage height={500} key={index} width={300}>
            <Layer>
              <KonvaImage height={500} image={images[index]} width={300} />
            </Layer>
          </Stage>
        );
      }

      if (item.type === 'video') {
        return (
          <section key={index}>
            {/* <Suspense fallback={<p>Loading video...</p>}> */}
            <iframe
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              height={500}
              referrerPolicy="strict-origin-when-cross-origin"
              src={item.src as string}
              title="Video"
              width={300}></iframe>
            {/* </Suspense> */}
          </section>
        );
      }

      return null;
    });
  }, [media, images]);

  return (
    <Container>
      {memoizedMedia.map((content, index) => (
        <Item key={index}>
          <ImageContainer className="image-container">{content}</ImageContainer>
        </Item>
      ))}
    </Container>
  );
});

export default ImageVideoPanel;
