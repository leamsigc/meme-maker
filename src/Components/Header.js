import React from 'react';

export default function Header() {
	return (
		<div style={HeaderStyle}>
			<h1>Meme Maker </h1>
			<p>Make a meme here and shared whit your friends.</p>
		</div>
	);
}

const HeaderStyle = {
	padding: '2rem 0 ',
	background: 'red',
	textAlign: 'center',
	color: '#f3f3f3'
};
