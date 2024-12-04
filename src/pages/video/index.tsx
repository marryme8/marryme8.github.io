import React from 'react';
import Layout from '@theme/Layout';

import VideoPlayer from '../../../src/components/video/video';
import './index.css'

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
      <div className='video-div'>
        <h1 className='video-h1-text'>婚俗词视频展示</h1>
        {/* <p>This is a new page added to the app.</p> */}
        <div style={{width: "50%"}}>
            <VideoPlayer options={videoJsOptions}/>
        </div>
      </div>
    </Layout>
  );
}