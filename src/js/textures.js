

const textures_list = [
  { name: 'cat',
    path: require('../assets/textures/cat.jpg')
  }
]

const sprites = {

}

const load_textures = async () => {
  const loader = PIXI.Loader.shared
  for (const texture of textures) {    
    loader.add(texture.name, texture.path)
  }

  return new Promise ((resolve) => {
    loader.load((loader, resources) => {
      resolve()
      for (const texture of textures) {    
        loader.add(texture.name, texture.path)
        sprite[texture.name] = new PIXI.Sprite(resources[texture.name].texture);
      }
    })
  })

}



PIXI.Loader.shared.add(
  'bunny', require('../assets/textures/cat.jpg')
  )
  .load((loader, resources) => {
    // This creates a texture from a 'bunny.png' image
    const bunny = new PIXI.Sprite(resources.bunny.texture);
});





export {load_textures, sprites}