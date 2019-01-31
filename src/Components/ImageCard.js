import React from 'react';
import '../App.css';
export default function ImageCard({ text, handleClick }) {
	return (
		<div style={CardStyle} className="card" onClick={handleClick}>
			<p>Card {text.toUpperCase()}</p>
		</div>
	);
}

const CardStyle = {
	background: 'tomato',
	flex: '1 1 20%',
	maxWidth: '200px',
	padding: '2rem 1rem',
	textAlign: 'center',
	cursor: 'pointer'
};
