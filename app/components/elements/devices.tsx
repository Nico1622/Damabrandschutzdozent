"use client";
import React from "react";
import Image from "next/image";

interface DevicesProps {
  desktopImage?: string;
  mobileImage?: string;
}

const Devices: React.FC<DevicesProps> = ({ desktopImage, mobileImage }) => {
  return (
    <div className="devices-container">
      <div className="devices">
        {/* MACBOOK */}
        <div className="macbook">
          <div className="macbook-inner">
            <div className="screen">
              {desktopImage && (
                <Image
                  src={desktopImage}
                  alt="Desktop Preview"
                  className="inner-image"
                  width={1024}
                  height={1024}
                  sizes="
                    (max-width: 360px) 90vw,
                    (max-width: 480px) 85vw,
                    (max-width: 576px) 80vw,
                    (max-width: 768px) 75vw,
                    (max-width: 992px) 70vw,
                    (max-width: 1360px) 65vw,
                    1024px
                  "
                  style={{ width: "100%", height: "auto" }}
                />
              )}
            </div>
            <div className="base"></div>
            <div className="notch"></div>
          </div>
        </div>

        {/* IPHONE */}
        <div className="iphone">
          <div className="screen">
            {mobileImage && (
              <Image
                src={mobileImage}
                alt="Mobile Preview"
                className="inner-image"
                width={1024}
                height={1024}
                sizes="
                  (max-width: 360px) 90vw,
                  (max-width: 480px) 85vw,
                  (max-width: 576px) 80vw,
                  (max-width: 768px) 75vw,
                  (max-width: 992px) 70vw,
                  (max-width: 1360px) 65vw,
                  1024px
                "
                style={{ width: "100%", height: "auto" }}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Devices;
