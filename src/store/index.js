import { proxy } from 'valtio';

const state = proxy({
	intro: true,
	color: 'rgb(55, 66, 75)',
	isLogoTexture: true,
	isFullTexture: false,
	logoDecal: './threejs.png',
	fullDecal: './threejs.png',
});

export default state;
