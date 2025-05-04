import * as React from "react";

import videojs from '../../../node_modules/video.js';
import '../../../node_modules/video.js/dist/video-js.css';

interface IVideoPlayerProps {
    options: videojs.PlayerOptions;
}
  
const initialOptions: videojs.PlayerOptions = {
    controls: true,
    fluid: true,
    controlBar: {
        volumePanel: {
        inline: false
        }
    }
};
  
const VideoPlayer: React.FC<IVideoPlayerProps> = ({ options }) => {
    const videoNode = React.useRef<HTMLVideoElement>();
    const player = React.useRef<videojs.Player>();

    React.useEffect(() => {
        player.current = videojs(videoNode.current, {
        ...initialOptions,
        ...options
        }).ready(function() {
        });
        return () => {
        if (player.current) {
            player.current.dispose();
        }
        };
    }, [options]);

    return <video ref={videoNode} className="video-js" />;
};

export default VideoPlayer;