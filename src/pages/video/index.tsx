import React from 'react';
import Layout from '@theme/Layout';

import VideoPlayer from '../../../src/components/video/video';

const videoJsOptions = {
    sources: [
        {
        src: "https://media.w3.org/2010/05/sintel/trailer_hd.mp4",
        type: "video/mp4"
        }
    ]
  };

export default function Hello() {
  return (
    <Layout title="Hello" description="Hello React Page">
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '50vh',
          fontSize: '20px',
        }}>
        <h1>Welcome to the New Page</h1>
        <p>This is a new page added to the app.</p>
        <div style={{width: "50%"}}>
        <VideoPlayer options={videoJsOptions}/>
      </div>
      </div>
    </Layout>
  );
}