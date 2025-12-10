"use client";
import React, { useEffect } from "react";

interface DevicesProps {
  desktopVideo?: string;
  mobileVideo?: string;
  desktopPoster?: string;
  mobilePoster?: string;
}

const Devices: React.FC<DevicesProps> = ({ desktopVideo, mobileVideo, desktopPoster, mobilePoster }) => {
  useEffect(() => {
    const videos = document.querySelectorAll<HTMLVideoElement>(".macbook .inner-video, .iphone .inner-video");

    videos.forEach((videoEl) => {
      const parent = videoEl.closest<HTMLElement>(".macbook, .iphone");
      if (!parent) return;

      let isHovering = false;

      // Funktion zum sicheren Abspielen
      const playVideo = async () => {
        try {
          await videoEl.play();
        } catch (err) {
          // Ignoriere AbortError
        }
      };

      // Video neu starten, wenn es zu Ende ist
      videoEl.addEventListener("ended", () => {
        videoEl.currentTime = 0;
        if (isHovering) playVideo(); // Wenn noch Hover, wieder starten
        else videoEl.pause();
      });

      parent.addEventListener("mouseenter", () => {
        isHovering = true;
        playVideo();
      });

      parent.addEventListener("mouseleave", () => {
        isHovering = false;
        videoEl.pause();
      });
    });

    return () => {
      videos.forEach((videoEl) => {
        const parent = videoEl.closest<HTMLElement>(".macbook, .iphone");
        if (!parent) return;
        parent.replaceWith(parent.cloneNode(true));
      });
    };
  }, []);

  return (
    <div className="devices-container">
      <div className="devices">
        <div className="macbook">
          <div className="macbook-inner">
            <div className="screen">
              {desktopVideo && (
                <video className="inner-video" muted playsInline poster={desktopPoster}>
                  <source src={desktopVideo} type="video/mp4" />
                </video>
              )}
            </div>
            <div className="base"></div>
            <div className="notch"></div>
          </div>
        </div>

        <div className="iphone">
          <div className="notch"></div>
          <div className="screen">
            {mobileVideo && (
              <video className="inner-video" muted playsInline poster={mobilePoster}>
                <source src={mobileVideo} type="video/mp4" />
              </video>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Devices;
