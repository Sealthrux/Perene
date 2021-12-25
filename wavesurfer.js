var PlayBtn_1 = document.getElementById("PlayBtn_1");
var wavesurfer_1 = WaveSurfer.create({
  container: "#waveform_1",
  waveColor: "white",
  progressColor: "#6fa550",
  barWidth: 3,
  barHeight: 0.6,
  responsive: true,
  hideScrollbar: true,
  cursorWidth: 0,
  maxCanvasWidth: 4,
  height: 120,
});
wavesurfer_1.load("audios/wave1test.mp3");

PlayBtn_1.onclick = function () {
  wavesurfer_1.playPause();
  if (PlayBtn_1.src.includes("play.png")) {
    PlayBtn_1.src = "imagens/pause.png";
  } else {
    PlayBtn_1.src = "imagens/play.png";
  }
};

var wavesurfer_2 = WaveSurfer.create({
  container: "#waveform_2",
  waveColor: "#white",
  progressColor: "#6fa550",
});
wavesurfer_2.load("audios/Scott Bradford.mp3");
