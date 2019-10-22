import '../css/style.scss'
import * as PIXI from 'pixi.js'
window.PIXI = PIXI
import { initPixi } from './pixi/engine';
import app from './app'

import { load_textures, sprites } from './pixi/textures';



window.onload = async () => {
  app.pixi = initPixi()
  await load_textures()
  console.log('Textures loaded')
  

  const cat = sprites.cat
  cat.width = 100
  cat.height = 100
  cat.position.set(10, 200)

  app.pixi.stage.addChild(sprites.cat)
}




