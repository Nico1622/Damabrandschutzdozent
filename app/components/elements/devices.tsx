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
                  width={1536} height={1024}
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
                width={768} height={512}
                className="inner-image"
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Devices;
