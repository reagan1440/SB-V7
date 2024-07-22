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
import utilityLaptopComp from '../components/images/utility-laptop-comp.png';
import utilityLogo from '../components/images/utility-logo.png';
import utilityPhoneComp from '../components/images/utility-phone-comp.png';
import utilityTabletComp from '../components/images/utility-tablet-comp.png';

// Existing Components
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
        bottom: hovered ? '350px' : '-200px',
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
        background: hovered ? 'linear-gradient(54.76deg, #DF7344, #E03A44)' : '#eee',
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
        width: '70%',
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
        bottom: hovered ? '20px' : '-30%',
        left: hovered ? '-15%' : '-85%',
        width: '80%',
        height: '80%',
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

// FourthContainer Component
export const FourthContainer = () => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      style={{
        position: 'relative',
        width: '100%',
        height: '100%',
        background: hovered ? 'linear-gradient(76.35deg, #000000, #041C2C)' : '#eee',
        overflow: 'hidden',
        borderRadius: '10px',
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
  <div style={{
  position: 'absolute',
  top: hovered ? '45px' : '30px',  // Corrected property logic
  right: hovered ? '-20%' : '0',
  width: '100%',
  height: '90%',
  overflow: 'hidden',
  transition: 'right 0.8s ease-out, top 0.8s ease-out, transform 0.8s ease-out',  // Include transform in transition
  transform: hovered ? 'scale(0.9)' : 'scale(1)',  // Scale down when hovered
  zIndex: 1,
}}>
  <Image
    src={utilityLaptopComp}
    alt="Utility Laptop"
    layout="fill"
    objectFit="contain"
  />
</div>


      {/* Logo with Drop-in Animation */}
      <div style={{
        position: 'absolute',
        top: hovered ? '10px' : '-200px',
        right: '10px',
        width: '200px',
        height: 'auto',
        transition: 'top 0.8s ease-out',
        zIndex: 2,
      }}>
        <Image
          src={utilityLogo}
          alt="Utility Logo"
          layout="intrinsic"
          width={200}
        />
      </div>

      {/* Phone and Tablet Images Aligned */}
      <div style={{
        position: 'absolute',
        bottom: '0',
        right: hovered ? '380px' : '-500px',
        top: hovered ? '10px' : '-200px',
        display: 'flex',
        gap: '0px',
        transition: 'right 0.8s ease-out',
        zIndex: 1,
      }}>
        {/* Phone Image */}
        <div style={{
          width: '100px',
          height: 'auto',
        }}>
          <Image
            src={utilityPhoneComp}
            alt="Utility Phone"
            layout="intrinsic"
            width={200}
          />
        </div>

        {/* Tablet Image */}
        <div style={{
          width: '200px',
          height: 'auto',
        }}>
          <Image
            src={utilityTabletComp}
            alt="Utility Tablet"
            layout="intrinsic"
            width={200}
          />
        </div>
      </div>
    </div>
  );
};


// PageLayout Component
const PageLayout = () => {
  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
      gridTemplateRows: '350px 600px', // Increased heights here
      gap: '20px',
      margin: '0 22%',
    }}>
      <div style={{
        gridColumn: '1 / 3',
        gridRow: '1 / 2',
        backgroundColor: '#ddd',
        position: 'relative',
        height: '350px', // Increased height here
      }}>
        <HeroAnimatedSection />
      </div>
      <div style={{
        gridColumn: '3 / 5',
        gridRow: '1 / 3',
        backgroundColor: '#ddd',
        position: 'relative',
        height: '600px', // Increased height here
      }}>
        <SecondContainer />
      </div>
      <div style={{
        gridColumn: '1 / 3',
        gridRow: '2 / 3',
        backgroundColor: '#ddd',
        position: 'relative',
        height: '600px', // Increased height here
      }}>
        <ThirdContainer />
      </div>
      <div style={{
        gridColumn: '3 / 5',
        gridRow: '2 / 3',
        backgroundColor: '#ddd',
        position: 'relative',
        height: '350px', // Increased height here
        marginTop: '250px', // Adjusted margin to fit new height
      }}>
        <FourthContainer />
      </div>
    </div>
  );
};

export default PageLayout;

