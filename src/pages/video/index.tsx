import React from 'react';
import Layout from '@theme/Layout';

import VideoPlayer from '../../../src/components/video/video';
import './index.css'

const videoJsOptions = {
    sources: [
        {
          src: "/video.mp4",
          type: "video/mp4"
        }
    ]
  };

export default function Index() {
  return (
    <Layout title="Hello" description="Hello React Page">
      <div className='video-div'>
        <h1 className='video-h1-text'>婚俗词视频展示</h1>
        <div style={{width: "50%", marginBottom: '20px'}}>
            <VideoPlayer options={videoJsOptions}/>
        </div>
      </div>
    </Layout>
  );
}