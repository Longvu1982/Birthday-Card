const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

// elements
const volumeBtn = $(".volume-btn");
const audio = $("audio");
const card = $(".card")

// states
let isPlaying = false;

// functions
const handleClickVolume = () => {
  isPlaying = !isPlaying;
  console.log(isPlaying);
  // render icon 
  const volumeIcon = isPlaying
    ? ' <img src="./assets/imgs/von.png" alt="">'
    : ' <img src="./assets/imgs/voff.png" alt="">';
  console.log(volumeIcon);
  
  // play music
  isPlaying ? audio.play() : audio.pause()
  volumeBtn.innerHTML = volumeIcon;

};

volumeBtn.addEventListener("click", handleClickVolume);
card.addEventListener("touchstart", function() {}, true)
