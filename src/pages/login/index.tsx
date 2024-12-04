import React from 'react';

import VideoPlayer from '../../../src/components/video/video';
import styles from './index.css';

const videoJsOptions = {
  sources: [
      {
      src: "https://media.w3.org/2010/05/sintel/trailer_hd.mp4",
      type: "video/mp4"
      }
  ]
};

const LoginPage: React.FC = () => {
  return (
    <div>
      <h1>Welcome to the New Page</h1>
      <p>This is a new page added to the app.</p>
      <div style={{width: "50%"}}>
        <VideoPlayer options={videoJsOptions}/>
      </div>
    </div>
  );
};
  
export default LoginPage;