"use client";
import React from "react";
import Image from "next/image";

interface DevicesProps {
  desktopImage?: string;
  mobileImage?: string;
  desktopAlt?: string; // Alt-Tag für das MacBook
  mobileAlt?: string;  // Alt-Tag für das iPhone
}

const Devices: React.FC<DevicesProps> = ({ 
  desktopImage, 
  mobileImage, 
  desktopAlt = "Desktop Ansicht der Referenz", 
  mobileAlt 
}) => {
  // Falls kein spezieller mobiler Alt-Tag übergeben wird, nutzen wir den Desktop-Tag als Basis
  const finalMobileAlt = mobileAlt || `${desktopAlt} (Mobile Ansicht)`;

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
                  alt={desktopAlt} // Nutzt jetzt den übergebenen Prop
                  className="inner-image"
                  width={1024}
                  height={1024}
                  sizes="(max-width: 360px) 90vw, (max-width: 480px) 85vw, (max-width: 576px) 80vw, (max-width: 768px) 75vw, (max-width: 992px) 70vw, (max-width: 1360px) 65vw, 1024px"
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
                alt={finalMobileAlt} // Nutzt den spezifischen oder den generierten Alt-Tag
                className="inner-image"
                width={1024}
                height={1024}
                sizes="(max-width: 360px) 90vw, (max-width: 480px) 85vw, (max-width: 576px) 80vw, (max-width: 768px) 75vw, (max-width: 992px) 70vw, (max-width: 1360px) 65vw, 1024px"
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