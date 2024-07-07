import React, { Suspense } from 'react';
import { Stage, Layer, Image as KonvaImage } from 'react-konva';
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

const Description = styled.div`
  flex: 1;
  padding: 20px;
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
  src: string;
}

interface ImageVideoPanelProps {
  media: Media[];
}

const ImageVideoPanel: React.FC<ImageVideoPanelProps> = ({ media }) => {
  const [images, setImages] = React.useState<HTMLImageElement[]>([]);

  React.useEffect(() => {
    const loadedImages: HTMLImageElement[] = [];
    const imagePromises = media.map(
      (item) =>
        new Promise<void>((resolve) => {
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
        })
    );

    Promise.all(imagePromises).then(() => {
      setImages(loadedImages);
    });
  }, [media]);

  return (
    <Container>
      {media.map((item, index) => (
        <Item key={index}>
          {/* <Description>
            <br></br>
          </Description> */}
          <ImageContainer className="image-container">
            {item.type === 'image' && images[index] && (
              <Stage width={300} height={500}>
                <Layer>
                  <KonvaImage image={images[index]} width={300} height={500} />
                </Layer>
              </Stage>
            )}
            {item.type === 'video' && (
              <section>
                <Suspense fallback={<p>Loading video...</p>}>
                  <iframe
                    width={300}
                    height={500}
                    src={item.src}
                    title="Video"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  ></iframe>
                </Suspense>
              </section>
            )}
          </ImageContainer>
        </Item>
      ))}
    </Container>
  );
};

export default ImageVideoPanel;
