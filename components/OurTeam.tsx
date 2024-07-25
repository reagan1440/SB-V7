import type { NextPage } from 'next';
import styles from '../components/OurTeam.module.css';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';


const Team:NextPage = () => {
  	return (
    		<div className={styles.team}>
      			<b className={styles.ourTeam}>Our Team</b>
      			<div className={styles.teamMembersParent}>
        				<img className={styles.teamMembersIcon} alt="" src="Team Members.svg" />
        				<img className={styles.teamMembersIcon1} alt="" src="Team Members.svg" />
        				<img className={styles.teamMembersIcon2} alt="" src="Team Members.svg" />
        				<img className={styles.teamMembersIcon3} alt="" src="Team Members.svg" />
        				<img className={styles.teamMembersIcon4} alt="" src="Team Members.svg" />
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
            						<img className={styles.ringsIcon} alt="" src="rings.png" />
            						<img className={styles.linkButtonChild} alt="" src="Polygon 1.svg" />
            						<div className={styles.linkButtonItem} />
            						<div className={styles.linkButtonInner} />
            						<b className={styles.joinUs}>Join US</b>
          					</div>
        				</div>
      			</div>
      			<div className={styles.teamMembers4Slider} />
      			<div className={styles.weEmployAnd}>We employ and retain some of the area’s best and brightest web designers and app developers. Our average employee has been with us for seven years. All of our web and mobile app projects are created within an environment of love, purpose and attention. Our goal is to be an extension of your team for your web, mobile and digital marketing needs. We offer recurring services for strategy, maintenance and growth and provide our customers with senior, C-level talent to manage web and mobile app projects.</div>
    		</div>);
};

export default Team;
