import React from 'react';
import profile from '../img/CHETHAN.jpeg';
const Home = () => {
	return (
		<div className="aboutme">
			<div className="aboutme__left">
				<img className="aboutme__image" src={profile} alt="chethan" />
				<h1>I am Chethan</h1>
			</div>
			<div className="aboutme__right">
				<p className="aboutme__info">
					A cadet by nature and a developer by passion, a tech
					enthusiast, a full-stack JavaScript developer, tech blogger,
					self-help blogger, writer, motivator and mentor for those
					who want to learn programming, development and recent
					technologies, Madhav has been continuously helping the youth
					of India to become better at programming. Madhav has a
					vision to make each and every individual of this world
					proficient in at least one programming language
					(irrespective of that person's background and experience in
					tech/non-tech).
				</p>
			</div>
		</div>
	);
};

export default Home;
