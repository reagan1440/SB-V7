import type { NextPage } from 'next';
import styles from '../components/OurTeam.module.css';
import React from 'react';
import Image from 'next/image';
import Slider from "react-slick";
import Alex from '../components/images/team-alex.jpg';
import Beth from '../components/images/team-beth.jpg';
import Ken from '../components/images/team-ken.jpg';
import Micheal from '../components/images/team-michael.jpg';
import Matt from '../components/images/team-matt.jpg';

const Team: NextPage = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className={styles.team}>
      <h2 className={styles.ourTeam}>Our Team</h2>
      <div className={styles.teamMembersParent}>
        <div className={styles.teamMembers}>
          <div className={styles.teamMember}>
            <Image alt="Matt" src={Matt} layout="fill" objectFit="cover" />
            <div className={styles.nameContainer}>Matt</div>
          </div>
          <div className={styles.teamMember}>
            <Image alt="Ken" src={Ken} layout="fill" objectFit="cover" />
            <div className={styles.nameContainer}>Ken</div>
          </div>
          <div className={styles.teamMember}>
            <Image alt="Beth" src={Beth} layout="fill" objectFit="cover" />
            <div className={styles.nameContainer}>Beth</div>
          </div>
          <div className={styles.teamMember}>
            <Image alt="Micheal" src={Micheal} layout="fill" objectFit="cover" />
            <div className={styles.nameContainer}>Micheal</div>
          </div>
          <div className={styles.teamMember}>
            <Image alt="Alex" src={Alex} layout="fill" objectFit="cover" />
            <div className={styles.nameContainer}>Alex</div>
          </div>
          <div className={styles.join}>
            <div className={styles.joinChild} />
            <div className={styles.becomeAPartContainer}>
              <p className={styles.becomeAPartOfThe}>
                <span className={styles.becomeAPart}>Become a part</span>
                <span>{` of the `}</span>
              </p>
              <p className={styles.becomeAPartOfThe}>SolutionBuilt</p>
              <p className={styles.becomeAPartOfThe}>{`team. `}</p>
            </div>
            <div className={styles.linkButton}>
              <Image className={styles.ringsIcon} alt="Rings" src="/rings.png" width={100} height={70} />
              <Image className={styles.linkButtonChild} alt="Polygon" src="/Polygon1.svg" width={30} height={70} />
              <div className={styles.linkButtonItem} />
              <div className={styles.linkButtonInner} />
              <b className={styles.joinUs}>Join Us</b>
            </div>
          </div>
        </div>
        <div className={styles.teamMembersSlider}>
          <Slider {...settings}>
            <div>
              <Image alt="Matt" src={Matt} layout="fill" objectFit="cover" />
              <div className={styles.nameContainer}>Matt</div>
            </div>
            <div>
              <Image alt="Ken" src={Ken} layout="fill" objectFit="cover" />
              <div className={styles.nameContainer}>Ken</div>
            </div>
            <div>
              <Image alt="Beth" src={Beth} layout="fill" objectFit="cover" />
              <div className={styles.nameContainer}>Beth</div>
            </div>
            <div>
              <Image alt="Micheal" src={Micheal} layout="fill" objectFit="cover" />
              <div className={styles.nameContainer}>Micheal</div>
            </div>
            <div>
              <Image alt="Alex" src={Alex} layout="fill" objectFit="cover" />
              <div className={styles.nameContainer}>Alex</div>
            </div>
            <div>
              <div className={styles.join}>
                <div className={styles.joinChild} />
                <div className={styles.becomeAPartContainer}>
                  <p className={styles.becomeAPartOfThe}>
                    <span className={styles.becomeAPart}>Become a part</span>
                    <span>{` of the `}</span>
                  </p>
                  <p className={styles.becomeAPartOfThe}>SolutionBuilt</p>
                  <p className={styles.becomeAPartOfThe}>{`team. `}</p>
                </div>
                <div className={styles.linkButton}>
                  <Image className={styles.ringsIcon} alt="Rings" src="/rings.png" width={100} height={70} />
                  <Image className={styles.linkButtonChild} alt="Polygon" src="/Polygon1.svg" width={30} height={70} />
                  <div className={styles.linkButtonItem} />
                  <div className={styles.linkButtonInner} />
                  <b className={styles.joinUs}>Join Us</b>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </div>
      <div className={styles.weEmployAnd}>
        We employ and retain some of the area’s best and brightest web designers and app developers. Our average employee has been with us for seven years. All of our web and mobile app projects are created within an environment of love, purpose and attention. Our goal is to be an extension of your team for your web, mobile and digital marketing needs. We offer recurring services for strategy, maintenance and growth and provide our customers with senior, C-level talent to manage web and mobile app projects.
      </div>
    </div>
  );
};

export default Team;
