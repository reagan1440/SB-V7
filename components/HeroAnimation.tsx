import React, { useState } from 'react';
import Image from 'next/image';
import logoSkinbones from '../components/images/logo-skinbones.png';
import skinbonesLaptop from '../components/images/skinbones-laptop-comp.png';
import skinbonesPhone from '../components/images/skinbones-phone-comp.png';
import aaaProjectComp from '../components/images/aaa-project-comp.png';
import logoImage from '../components/images/aaa-logo.png';
import ethosPhoneA from '../components/images/ethos-phone-a-comp.png';
import ethosIcon from '../components/images/ethos-icon-comp.png';
import ethosPhoneB from '../components/images/ethos-phone-b-comp.png';

export const HeroAnimatedSection = () => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      style={{
        position: 'relative',
        width: '100%',
        height: '100%',
        background: hovered ? 'linear-gradient(82deg, #52287E 0%, #52C4C7 100%)' : '#eee',
        overflow: 'hidden',
        transition: 'background 0.5s ease',
        borderRadius: '10px',
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div style={{
        position: 'absolute',
        bottom: '0',
        left: hovered ? '-20%' : '0',
        width: '100%',
        height: '100%',
        transition: 'left 0.8s ease-out',
        zIndex: 1,
      }}>
        <Image
          src={skinbonesLaptop}
          alt="SkinBones Laptop"
          layout="fill"
          objectFit="contain"
        />
      </div>
      <div style={{
        position: 'absolute',
        top: hovered ? '10%' : '-50%',
        left: '10%',
        width: '300px',
        height: 'auto',
        transition: 'top 0.8s ease-out',
        zIndex: 2,
      }}>
        <Image
          src={logoSkinbones}
          alt="SkinBones Logo"
          layout="intrinsic"
          width={300}
        />
      </div>
      <div style={{
        position: 'absolute',
        bottom: hovered ? '-10%' : '-40%',
        right: hovered ? '-5%' : '-40%',
        width: '200px',
        height: 'auto',
        transition: 'bottom 0.8s ease-out, right 0.8s ease-out',
        zIndex: 3,
      }}>
        <Image
          src={skinbonesPhone}
          alt="SkinBones Phone"
          layout="intrinsic"
          width={200}
        />
      </div>
    </div>
  );
};

export const SecondContainer = () => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      style={{
        position: 'relative',
        width: '100%',
        height: '100%',
        background: hovered ? '#F498D1' : '#ddd',
        overflow: 'hidden',
        transition: 'background 0.5s ease',
        borderRadius: '10px',
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div style={{
        position: 'absolute',
        top: '0',
        left: '0',
        width: '100%',
        height: '100%',
        transition: 'transform 0.5s ease',
        transform: hovered ? 'scale(1.2)' : 'scale(1)',
      }}>
        <Image
          src={aaaProjectComp}
          alt="Project Image"
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div style={{
        position: 'absolute',
        bottom: hovered ? '130px' : '-200px',
        left: hovered ? '25px' : '-200px',
        width: '200px',
        height: 'auto',
        transition: 'bottom 0.8s ease-out, left 0.8s ease-out',
        zIndex: 2,
        display: hovered ? 'block' : 'none',
      }}>
        <Image
          src={logoImage}
          alt="Logo"
          layout="intrinsic"
          width={200}
        />
      </div>
    </div>
  );
};

export const ThirdContainer = () => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      style={{
        position: 'relative',
        width: '100%',
        height: '100%',
        background: hovered ? '#F498D1' : '#ddd',
        overflow: 'hidden',
        transition: 'background 0.5s ease',
        borderRadius: '10px',
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div style={{
        position: 'absolute',
        top: '0',
        right: hovered ? '10%' : '0',
        width: '50%',
        height: '100%',
        transition: 'right 0.5s ease',
        zIndex: 2,
      }}>
        <Image
          src={ethosPhoneA}
          alt="Ethos Phone A"
          layout="fill"
          objectFit="contain"
        />
      </div>
      <div style={{
        position: 'absolute',
        top: hovered ? '10px' : '-100px',
        left: hovered ? '10px' : '-100px',
        width: '100px',
        height: 'auto',
        transition: 'top 0.8s ease-out, left 0.8s ease-out',
        zIndex: 3,
      }}>
        <Image
          src={ethosIcon}
          alt="Ethos Icon"
          layout="intrinsic"
          width={150}
        />
      </div>
      <div style={{
        position: 'absolute',
        bottom: hovered ? '10px' : '-30%',
        left: hovered ? '5%' : '-50%',
        width: '60%',
        height: '70%',
        transition: 'bottom 0.8s ease-out, left 0.8s ease-out',
        zIndex: 1,
      }}>
        <Image
          src={ethosPhoneB}
          alt="Ethos Phone B"
          layout="fill"
          objectFit="contain"
        />
      </div>
    </div>
  );
};


const PageLayout = () => {
  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
      gridTemplateRows: '300px 500px',
      gap: '20px',
      margin: '0 22%',
    }}>
      <div style={{
        gridColumn: '1 / 3',
        gridRow: '1 / 2',
        backgroundColor: '#ddd',
        position: 'relative',
        height: '300px',
      }}>
        <HeroAnimatedSection />
      </div>
      <div style={{
        gridColumn: '3 / 5',
        gridRow: '1 / 3',
        backgroundColor: '#ddd',
        position: 'relative',
        height: '500px',
      }}>
        <SecondContainer />
      </div>
      <div style={{
        gridColumn: '1 / 3',
        gridRow: '2 / 3',
        backgroundColor: '#ddd',
        position: 'relative',
        height: '500px',
      }}>
        <ThirdContainer />
      </div>
      <div style={{
        gridColumn: '3 / 5',
        gridRow: '2 / 3',
        backgroundColor: '#ddd',
        position: 'relative',
        height: '300px',
        marginTop: '200px',
      }}>
      </div>
    </div>
  );
};

export default PageLayout;
