function main()
{
  console.log("TV_MAIN")

  //-- Obtener parrafo
  parrafo = document.getElementById('parrafo')
  //-- Obtener videos
  video1 = document.getElementById("video1")
  video2 = document.getElementById("video2")
  video3 = document.getElementById("video3")
  //-- Boton de Play
  ver1 = document.getElementById('play1')
  ver2 = document.getElementById('play2')
  ver3 = document.getElementById('play3')
  
  //-- Detectar pasada por encima
  parrafo.onmouseover = () => {
    console.log("Mouse over!!")
  }
  //-- Al apretar el boton de ver video
  ver1.onclick = () => {
    console.log("Play1")
    //-- Indicar la fuente del vídeo
    video1.src ="https://gsyc.urjc.es/jmplaza/csaai/realizador-fuente1.mp4"
  }
  ver2.onclick = () => {
    console.log("Play2")
    //-- Indicar la fuente del vídeo
    video2.src ="https://gsyc.urjc.es/jmplaza/csaai/realizador-fuente2.mp4"
  }
  ver3.onclick = () => {
    console.log("Play2")
    //-- Indicar la fuente del vídeo
    video3.src ="https://gsyc.urjc.es/jmplaza/csaai/realizador-fuente3.mp4"
  }
}
