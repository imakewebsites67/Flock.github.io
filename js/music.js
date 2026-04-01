const tracks = [
  { title: "Sample Track 1", src: "music/track1.mp3" }
];

const audio = document.getElementById("audio");
const playlistEl = document.getElementById("playlist");
const titleEl = document.getElementById("track-title");

tracks.forEach((track, i) => {
  const li = document.createElement("li");
  li.textContent = track.title;
  li.style.cursor = "pointer";
  li.onclick = () => playTrack(i);
  playlistEl.appendChild(li);
});

function playTrack(i) {
  const track = tracks[i];
  audio.src = track.src;
  titleEl.textContent = track.title;
  audio.play();
}
