import * as PIXI from 'pixi.js'



const init_pixi = () => {
  console.log(3131);
  
  let app = new PIXI.Application({ 
    width: 1280,         // default: 800
    height: 720,        // default: 600
    // antialias: true,    // default: false
    // transparent: false, // default: false
    // resolution: 1.5,       // default: 1
    // scale: 0.5
  })



  app.renderer.backgroundColor = 0x1363ab
  app.renderer.view.classList.add('main-canvas')

  const container = document.querySelector('.container')
  container.appendChild(app.view)

}


export {init_pixi}