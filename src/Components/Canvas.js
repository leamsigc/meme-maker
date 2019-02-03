import React, { Component } from 'react';

export default class Canvas extends Component {
	componentDidMount() {
		const canvas = this.refs.canvas;
		const ctx = canvas.getContext('2d');
		const img = new Image();

		img.src = this.props.imgUrl;
		img.onload = () => {
			ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
		};
	}
	render() {
		return (
			<div>
				<canvas style={CanvasStyle} ref="canvas" id="canvasEl" width={300} height={400} />
			</div>
		);
	}
}
const CanvasStyle = {
	width: '100%',
	maxWidth: '400px',
	maxHeight: '550px',
	height: '400px',
	border: '1px solid #fff',
	boxShadow: '3px 2px 5px rgba(0,0,0,0.3)'
};
