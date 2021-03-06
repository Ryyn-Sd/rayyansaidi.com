import { Helmet as Head } from 'react-helmet';
import * as React from 'react';
import Nav from '../navbar';
import NathanChuAd from '../ads/nathanchu';

const App = () => (
  <>
    <Head>
      <meta
        name="description"
        content="Click here for a bio and the projects about the author of the website."
      />
      <title>rayyansaidi.com</title>
      <html lang="en" />
    </Head>
    <Nav />
    <h1>Home</h1>
    <p>
    Welcome to Rayyansaidi.com! Here, where you can find info about the author, Rayyan Saidi, and some of the projects that I am working on that will hopefully go on this website soon!
    </p>
    <br />
    <hr />
    <br />
    <NathanChuAd />
  </>
);

export default App;
