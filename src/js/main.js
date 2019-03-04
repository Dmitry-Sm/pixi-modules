import '../css/style.scss'
import * as PIXI from 'pixi.js'
import { init_pixi } from './pixi-engine';


import { load_textures, sprites } from './textures';

let app



const main = async () => {
  app = init_pixi()
  await load_textures()
  console.log('Textures loaded')
  

  const cat = sprites.cat
  cat.width = 60
  cat.height = 60
  cat.position.set(10, 200)

  app.stage.addChild(sprites.cat)
}


main()


