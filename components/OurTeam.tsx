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
import SbButton from '../components/SbButton';

const Team: NextPage = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
  };

  return (
    <div className={styles.team}>
      <h2 className={styles.ourTeam}>Our Team</h2>
      <div className={styles.teamMembersParent}>
        <div className={styles.teamMembers}>
          {[{img: Matt, name: "Matt", description: "Owner"}, 
            {img: Ken, name: "Ken", description: "Director of Technology"}, 
            {img: Beth, name: "Beth", description: "Client Manager"}, 
            {img: Micheal, name: "Micheal", description: "Marketing Director"}, 
            {img: Alex, name: "Alex", description: "Creative Director"}].map(member => (
            <div key={member.name} className={styles.teamMember}>
              <Image alt={member.name} src={member.img} layout="fill" objectFit="cover" />
              <div className={styles.infoContainer}>
                <div className={styles.name}>{member.name}</div>
                <div className={styles.description}>{member.description}</div>
              </div>
            </div>
          ))}
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
            <div className={styles.OurTeamBtn}>
              <SbButton href='/'>JOIN US</SbButton>
            </div>
          </div>
        </div>
        <div className={styles.teamMembersSlider}>
          <Slider {...settings}>
            {[{img: Matt, name: "Matt", description: "Owner"}, 
              {img: Ken, name: "Ken", description: "Director of Technology"}, 
              {img: Beth, name: "Beth", description: "Client Manager"}, 
              {img: Micheal, name: "Micheal", description: "Marketing Director"}, 
              {img: Alex, name: "Alex", description: "Creative Director"}].map(member => (
              <div key={member.name} className={styles.teamMember}>
                <Image alt={member.name} src={member.img} layout="fill" objectFit="cover" />
                <div className={styles.infoContainer}>
                  <div className={styles.name}>{member.name}</div>
                  <div className={styles.description}>{member.description}</div>
                </div>
              </div>
            ))}
            <div>
              <div className={styles.join}>
                <div className={styles.joinChild} />
                <div className={styles.becomeAPartContainer}>
                  <p className={styles.becomeAPartOfThe}>
                    <span className={styles.becomeAPart}>Become a part</span> <br></br>
                    <span className={styles.ofThe}>{` of the SolutionBuilt team.`}</span>
                  </p>
                </div>
                <div className={styles.OurTeamBtn}>
                  <SbButton href='/'>JOIN US</SbButton>
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
