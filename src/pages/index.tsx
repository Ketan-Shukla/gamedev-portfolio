import {FC, memo} from 'react';

import Page from '../components/Layout/Page';
import {homePageMeta} from '../data/data';
import MainPage from './MainPage';

const Home: FC = memo(() => {
  const {title, description} = homePageMeta;
  return (
    <Page description={description} title={title}>
      <MainPage />
    </Page>
  );
});

export default Home;
