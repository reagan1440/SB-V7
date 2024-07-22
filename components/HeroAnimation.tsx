import React, { useState } from 'react';
import Image from 'next/image';
import logoSkinbones from '../components/images/logo-skinbones.png';
import skinbonesLaptop from '../components/images/skinbones-laptop-comp.png';
import skinbonesPhone from '../components/images/skinbones-phone-comp.png';

const HeroAnimatedSection = () => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      style={{
        position: 'relative',
        width: '500px',  // Container width
        height: '300px', // Container height
        margin: '0 auto',
        background: hovered ? 'linear-gradient(82deg, #52287E 0%, #52C4C7 100%)' : '#eee',
        overflow: 'hidden',
        transition: 'background 0.5s ease',
        borderRadius: '10px', // Optional: For rounded corners
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Laptop Image */}
      <div style={{
        position: 'absolute',
        bottom: '0',
        left: hovered ? '-30%' : '0', // Slide left on hover
        width: '100%',
        height: '100%',
        transition: 'left 0.8s ease-out',
        zIndex: 1, // Ensure it stays below other images
      }}>
        <Image
          src={skinbonesLaptop}
          alt="SkinBones Laptop"
          layout="fill"
          objectFit="contain"
        />
      </div>

 {/* Logo Image */}
 <div style={{
        position: 'absolute',
        top: hovered ? '10%' : '-50%', // Slide down into view on hover
        left: '10%',
        width: '300px', // Increased size
        height: 'auto',
        transition: 'top 0.8s ease-out',
        zIndex: 2,
      }}>
        <Image
          src={logoSkinbones}
          alt="SkinBones Logo"
          layout="intrinsic"
          width={300} // Adjusted size
        />
      </div>

      {/* Phone Image */}
      <div style={{
        position: 'absolute',
        bottom: hovered ? '-15%' : '-40%', // Align bottom of phone with bottom of container
        right: hovered ? '-10%' : '-40%',
        width: '200px', // Increased size
        height: 'auto',
        transition: 'bottom 0.8s ease-out, right 0.8s ease-out',
        zIndex: 3,
      }}>
        <Image
          src={skinbonesPhone}
          alt="SkinBones Phone"
          layout="intrinsic"
          width={200} // Adjusted size
        />
      </div>
    </div>
  );
};

export default HeroAnimatedSection;
