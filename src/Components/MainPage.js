import React, { Component } from 'react';
import Header from './Header';
import ImageCard from './ImageCard';
import Modal from './Modal';

const imagesSrc = [
	'./images/boyMeme.png',
	'./images/batmanAndRobin.jpg',
	'./images/mouse-seco.jpg',
	'./images/nba-player.jpg',
	'./images/obama-meme.jpg',
	'./images/trump-meme.jpg',
	'./images/what.jpg',
	'./images/woman-hand.jpg',
	'./images/history-extraterrestres.jpg'
];

export default class MainPage extends Component {
	constructor() {
		super();
		this.state = {
			currentImage: 0,
			modalIsOpen: 'close',
			currentImageBase64: null,
			topText: '',
			bottomText: ''
		};
	}
	HandleClick = i => {
		this.setState(prevState => ({
			modalIsOpen: 'open',
			currentImage: i
		}));
	};
	handleTextChange = e => {
		this.setState({
			topText: e.target.value
		});
		this.updateCanvas();
	};
	handleTextChangeBottom = e => {
		this.setState({
			bottomText: e.target.value
		});
		this.updateCanvas();
	};
	ToggleModal = () => {
		console.log('toggle modal');
		this.setState(prevState => ({
			modalIsOpen: 'close'
		}));
	};

	HandleDownload = () => {
		const imageToDownload = document
			.querySelector('#canvasEl')
			.toDataURL('image/png')
			.replace('image/png', 'image/octet-stream');
		console.log(imageToDownload);
		const button = document.querySelector('#downloadButton');
		button.setAttribute('href', imageToDownload);
	};

	updateCanvas = () => {
		const canvas = document.querySelector('#canvasEl');
		const ctx = canvas.getContext('2d');
		const img = new Image();
		img.crossOrigin = 'anonymous';
		img.src = imagesSrc[this.state.currentImage];
		img.onload = () => {
			ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
			ctx.font = ' bold 40px Impact';
			ctx.textAlign = 'center';
			// ctx.fillRect(0, 50, canvas.width, 20);
			ctx.strokeStyle = '#333';
			ctx.lineWidth = 10;
			ctx.lineJoin = 'round';
			ctx.strokeText(this.state.topText, canvas.width / 2, 50, canvas.width / 1.3, canvas.height / 2);
			ctx.strokeText(
				this.state.bottomText,
				canvas.width / 2,
				canvas.height - 20,
				canvas.width / 1.3,
				canvas.height / 2
			);
			ctx.fillStyle = '#fff';
			ctx.fillText(this.state.topText, canvas.width / 2, 50, canvas.width / 1.3, canvas.height / 2);
			ctx.fillText(this.state.bottomText, canvas.width / 2, canvas.height - 20, canvas.width / 1.3, canvas.height / 2);
		};
	};
	render() {
		return (
			<div>
				<Header />
				<div style={CardContainer}>
					{imagesSrc.map((text, index) => {
						return <ImageCard key={index} text={text} handleClick={this.HandleClick} currentImg={index} />;
					})}
				</div>
				{this.state.modalIsOpen === 'close' ? null : (
					<Modal
						topText={this.state.topText}
						handleTextChange={this.handleTextChange}
						handleTextChangeBottom={this.handleTextChangeBottom}
						handleDownload={this.HandleDownload}
						ToggleModal={this.ToggleModal}
						currentImage={imagesSrc[this.state.currentImage]}
					/>
				)}
			</div>
		);
	}
}

const CardContainer = {
	display: 'flex',
	justifyContent: 'space-around',
	background: '#333',
	padding: '2rem 1rem',
	color: '#f4f4f4',
	flexWrap: 'wrap'
};
