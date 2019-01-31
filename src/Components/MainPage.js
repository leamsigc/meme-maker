import React, { Component } from 'react';
import Header from './Header';
import ImageCard from './ImageCard';
import Modal from './Modal';

const imagesSrc = ['one ', 'two', 'ttres'];

export default class MainPage extends Component {
	constructor() {
		super();
		this.state = {
			currentImage: 0,
			modalIsOpen: 'close',
			currentImageBase64: null
		};
	}
	HandleClick = () => {
		console.log('click was made');
		this.setState(prevState => ({
			modalIsOpen: 'open'
		}));
	};

	render() {
		return (
			<div>
				<Header />
				<div style={CardContainer}>
					{imagesSrc.map((text, index) => {
						return <ImageCard key={index} text={text} handleClick={this.HandleClick} />;
					})}
				</div>
				{this.state.modalIsOpen === 'close' ? null : <Modal />}
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
