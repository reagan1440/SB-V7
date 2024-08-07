// components/GoogleMap.tsx
import React from 'react';
import GoogleMapReact from 'google-map-react';
import { isMobile } from 'react-device-detect';

interface GoogleMapProps {
  width?: string;
  height?: string;
  src: string;
  // Add other props if needed
}

const GoogleMap: React.FC<GoogleMapProps> = ({ width = '100%', height = '400px', src }) => {
  const defaultProps = {
    center: {
      lat: isMobile ? 33.8459264 : 33.8459264, // Adjust based on needs
      lng: isMobile ? -84.4467693 : -84.5467693, // Adjust based on needs
    },
    zoom: isMobile ? 10 : 11,
  };

  const mapHeight = height;

  const createMapOptions = (maps: any) => {
    return {
      disableDoubleClickZoom: true,
      zoomTapEnabled: false,
      gestureHandling: 'none',
      zoomControl: false,
      panControl: false,
      mapTypeControl: false,
      scrollwheel: false,
      resetBoundsOnResize: true,
    };
  };

  return (
    <div className="mapWrapper" style={{ height: mapHeight, width }}>
      <iframe
        src={src}
        width="100%"
        height="100%"
        style={{ border: 'none' }}
        allowFullScreen
      />
    </div>
  );
};

export default GoogleMap;
