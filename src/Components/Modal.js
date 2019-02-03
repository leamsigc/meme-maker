import React from 'react';
import Canvas from './Canvas';

export default function Modal({
	handleTextChangeBottom,
	topText,
	ToggleModal,
	currentImage,
	handleDownload,
	handleTextChange
}) {
	return (
		<div style={ModalStyle}>
			<div style={ModalCardStyle}>
				<h2>Meme Maker</h2>
				<br />
				<button style={ModalCardCloseStyle} onClick={ToggleModal}>
					X
				</button>
				<Canvas topText={topText} imgUrl={currentImage} />

				<a id="downloadButton" href="none.png" download="triangule.png">
					<button style ={downloadStyle} type="button" onClick={handleDownload}>
						Download
					</button>
				</a>
				<h2>Text for the meme</h2>
				<div style={FormContainerStyle}>
					<label htmlFor="topText">Top Text</label>
					<input type="text" name="topText" id="topText" placeholder="Text here" onChange={handleTextChange} />
					<label htmlFor="bottomText">Bottom Text</label>
					<input
						type="text"
						name="bottomText"
						id="bottomText"
						placeholder="Text here"
						onChange={handleTextChangeBottom}
					/>
				</div>
			</div>
		</div>
	);
}

const ModalStyle = {
	background: 'rgba(0,0,0,0.8)',
	position: 'fixed',
	top: '0',
	bottom: '0',
	left: '0',
	minHeight: '100vh',
	width: '100vw',
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center',
	textAlign: 'center'
};

const ModalCardStyle = {
	background: '#fefefe',
	padding: '1.5rem 1rem',
	position: 'relative',
	maxWidth: '800px',
	width: '80%',
	maxHeight: '900px'
};
const ModalCardCloseStyle = {
	background: 'tomato',
	width: '40px',
	height: '40px',
	color: '#fff',
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center',
	borderRadius: '50%',
	cursor: 'pointer',
	position: 'absolute',
	top: '-20px',
	right: '-20px',
	border: '0'
};
const FormContainerStyle = {
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center',
	flexDirection: 'column'
};
const downloadStyle ={
		padding: '1rem 1.5rem',
		textTransform: 'uppercase',
		display: 'inline-block',
		marginTop: '0.4rem',
		background: 'tomato',
		border: '1px solid transparent',
		borderRadius: '5px',
		fontWeight: '900',
		color: '#fefefe'
}