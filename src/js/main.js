// import '../css/style.scss'
// import * as _PIXI from 'pixi.js'
import '../css/style.scss'

// window.PIXI = _PIXI

// import { init_pixi } from './pixi-engine';
// import { load_textures } from './textures';



// let app

// const main = async () => {
//   app = init_pixi()
//   await load_textures()

// }


document.querySelector('.container').style.backgroundImage = 'url(' + require('../assets/textures/cat.jpg') + ')'
console.log(document.querySelector('.container').style.backgroundImage)
