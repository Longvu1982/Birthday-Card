const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

// elements
const volumeBtn = $(".volume-btn");
const audio = $("audio");
const card = $(".card");
const checkBox = $("input[type='checkbox']");
const showBtn = $('.show-btn')
console.log(checkBox)

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
	isPlaying ? audio.play() : audio.pause();
	volumeBtn.innerHTML = volumeIcon;

  // show card
  isPlaying ? card.classList.add('show') : card.classList.remove('show')

};

const creatBubbles = () => {
	const bubbleSection = $(".bubble-section");
	const bubble = document.createElement("span");
	let size = Math.random() * 70;

	bubble.style.width = 35 + size + "px";
	bubble.style.height = 35 + size + "px";
	bubble.style.left = Math.random() * innerWidth + "px";

	console.log(innerWidth);
	bubbleSection.appendChild(bubble);
	setTimeout(() => {
		bubble.remove();
	}, 2200);
};

setInterval(creatBubbles, innerWidth < 800 ? 130 : 50);
volumeBtn.addEventListener("click", handleClickVolume);
card.addEventListener("touchstart", function () {}, true);
card.addEventListener('click', ()=> {
  if(checkBox.checked) card.classList.add("open")
  else card.classList.remove("open")
})
