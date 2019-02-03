import React from 'react';
import '../App.css';
export default function ImageCard({ text, handleClick, currentImg }) {
	return (
		<div style={CardStyle} className="card" onClick={() => handleClick(currentImg)}>
			<strong>Make your meme </strong>
			<img src={text} width="150" height="200" />
		</div>
	);
}

const CardStyle = {
	background: '#f3f3f3',
	flex: '1 0 30%',
	maxWidth: '200px',
	padding: '2rem 1rem',
	textAlign: 'center',
	cursor: 'pointer',
	marginTop: '0.5rem',
	color: '#333'
};
