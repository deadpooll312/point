import React, {useState, useEffect} from "react";
import flvjs from "flv.js";
import {Spin} from "antd";

export const ClusterVideo = (props) => {
  const {link, fullScreen} = props;
  const [isLoading, setIsLoading] = useState(false);
  const [video, setVideo] = useState();
  let player = null;

  useEffect(() => {
    if (video) {
      video.addEventListener("loadeddata", () => {
        video.style.opacity = "1";
        if (fullScreen) {
          video.style.transform = "scale(1.2, 1.2)";
        } else {
          video.style.transform = "scale(1, 1)";
        }
        setIsLoading(false);
      });

      if (flvjs.isSupported()) {
        setIsLoading(true);
        const videoElement = video;
        const flvPlayer = flvjs.createPlayer({
          type: "flv",
          isLive: true,
          cors: true,
          url: link,
          hasAudio: false,
        });

        player = flvPlayer;

        if (player) {
          player.attachMediaElement(videoElement);
          player.load();
          player.play();
        }
      }
    }
    return () => {
      if (player) {
        player.destroy();
        player = undefined;
      }
    };
  }, [player, video]);

  return (
    <React.Fragment>
      {isLoading && (
        <div className="spin">
          <Spin />
        </div>
      )}
      <video width={"100%"} height={400} ref={(ref) => setVideo(ref)} autoPlay />
    </React.Fragment>
  );
};
