import dynamic from 'next/dynamic';
import { FC, memo } from 'react';

import Page from '../components/Layout/Page';
import Contact from '../components/Sections/Contact';
import Footer from '../components/Sections/Footer';
import { homePageMeta, projects } from '../data/data';
import ProjectList from '../components/ProjectList';

// eslint-disable-next-line react-memo/require-memo
const Header = dynamic(() => import('../components/Sections/Header'), { ssr: false });

// interface Media {
//   type: string;
//   src: string;
// }

// interface Project {
//   title: string;
//   description: string;
//   readMoreLink: string;
//   marketplaces: string[];
//   media: Media[];
// }

const ProjectPage: FC = memo(() => {
  const { title, description } = homePageMeta;


  return (
    <Page description={description} title={title}>
      <Header />
      {/* <Hero />
      <About /> */}
      <br></br>
      <br></br>
      <br></br>
      <ProjectList projects={projects} />
      {/* <Resume />
      <Testimonials /> */}
      <Contact />
      <Footer />
    </Page>
  );
});

export default ProjectPage;
