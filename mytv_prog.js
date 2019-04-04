function main()
{
  console.log("TV_MAIN")

  var timer = null;
  //-- Obtener parrafo
  parrafo = document.getElementById('parrafo')
  //-- Obtener videos
  video1 = document.getElementById("video1")
  video2 = document.getElementById("video2")
  video3 = document.getElementById("video3")
  maincam = document.getElementById('maincam')
  //-- Boton de Play
  ver1 = document.getElementById('play1')
  ver2 = document.getElementById('play2')
  ver3 = document.getElementById('play3')

  video1.mediagroup = "grupo";
  video2.mediagroup = "grupo";
  video3.mediagroup = "grupo";

  video1.src ="https://gsyc.urjc.es/jmplaza/csaai/realizador-fuente1.mp4";
  video2.src ="https://gsyc.urjc.es/jmplaza/csaai/realizador-fuente2.mp4";
  video3.src ="https://gsyc.urjc.es/jmplaza/csaai/realizador-fuente3.mp4";

  video1.volume = 0.0;
  video2.volume = 0.0;
  video3.volume = 0.0;

  var timer = null;
  if(!timer) {
      timer = setInterval(() => {
        console.log("tic");
        video1.currentTime = video2.currentTime;
        video3.currentTime = video2.currentTime;
    },4000);
  }

  //-- Detectar pasada por encima
  video1.onmouseover = () => {
    video1.volume = 0.5;
  }
  video1.onmouseout = () => {
    video1.volume = 0.0;
  }
  video2.onmouseover = () => {
    video2.volume = 0.5;
  }
  video2.onmouseout = () => {
    video2.volume = 0.0;
  }
  video3.onmouseover = () => {
    video3.volume = 0.5;
  }
  video3.onmouseout = () => {
    video3.volume = 0.0;
  }
  //-- Al apretar el boton de ver video
  ver1.onclick = () => {
    console.log("Play1")
    //-- Indicar la fuente del vídeo
    maincam.src = video1.src;
    maincam.currentTime = video1.currentTime;
  }
  ver2.onclick = () => {
    console.log("Play2")
    //-- Indicar la fuente del vídeo
    maincam.src = video2.src;
    maincam.currentTime = video2.currentTime;

  }
  ver3.onclick = () => {
    console.log("Play2")
    //-- Indicar la fuente del vídeo
    maincam.src = video3.src;
    maincam.currentTime = video3.currentTime;
  }
}
