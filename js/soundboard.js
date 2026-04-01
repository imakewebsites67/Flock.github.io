const sounds = [
  { label: "Airhorn", src: "sounds/airhorn.mp3" }
];

const board = document.getElementById("soundboard");

sounds.forEach(sound => {
  const btn = document.createElement("button");
  btn.textContent = sound.label;
  btn.style.padding = "12px";
  btn.style.background = "#22263a";
  btn.style.color = "#fff";
  btn.style.border = "none";
  btn.style.borderRadius = "8px";
  btn.style.cursor = "pointer";

  const audio = new Audio(sound.src);
  btn.onclick = () => {
    audio.currentTime = 0;
    audio.play();
  };

  const wrapper = document.createElement("div");
  wrapper.className = "card";
  wrapper.appendChild(btn);
  board.appendChild(wrapper);
});
