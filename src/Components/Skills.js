import React, { useState } from 'react';
import { Card } from 'react-bootstrap';
const Skills = () => {
	const [skills] = useState([
		'React Js',
		'JQuery',
		'HTML',
		'CSS',
		'JS',
		'Figma',
		'Sass',
		'Flutter(Basics)',
	]);
	return (
		<div className="container">
			<div className="skill__card">
				{skills.map((skill, index) => (
					<Card key={index} className="skillCard">
						<Card.Body>{skill}</Card.Body>
					</Card>
				))}
			</div>
		</div>
	);
};

export default Skills;
