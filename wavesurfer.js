var PlayBtn_1 = document.getElementById("PlayBtn_1");
var wavesurfer_1 = WaveSurfer.create({
  container: "#waveform_1",
  waveColor: "white",
  progressColor: "#6fa550",
  barWidth: 3,
  barHeight: 0.6,
  cursorWidth: 0,
  maxCanvasWidth: 4000,
  height: 120,
  barMinHeight: 0.1,
  hideScrollbar: true,
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
//wave2
var PlayBtn_2 = document.getElementById("PlayBtn_2");
var wavesurfer_2 = WaveSurfer.create({
  container: "#waveform_2",
  waveColor: "white",
  progressColor: "#6fa550",
  barWidth: 3,
  barHeight: 0.6,
  cursorWidth: 0,
  maxCanvasWidth: 4000,
  height: 120,
  barMinHeight: 0.1,
  hideScrollbar: true,
});
wavesurfer_2.load("audios/wave1test.mp3");

PlayBtn_2.onclick = function () {
  wavesurfer_2.playPause();
  if (PlayBtn_2.src.includes("play.png")) {
    PlayBtn_2.src = "imagens/pause.png";
  } else {
    PlayBtn_2.src = "imagens/play.png";
  }
};
//wave3
var PlayBtn_3 = document.getElementById("PlayBtn_3");
var wavesurfer_3 = WaveSurfer.create({
  container: "#waveform_3",
  waveColor: "white",
  progressColor: "#6fa550",
  barWidth: 3,
  barHeight: 0.6,
  cursorWidth: 0,
  maxCanvasWidth: 4000,
  height: 120,
  barMinHeight: 0.1,
  hideScrollbar: true,
});
wavesurfer_3.load("audios/wave3test.mp3");

PlayBtn_3.onclick = function () {
  wavesurfer_3.playPause();
  if (PlayBtn_3.src.includes("play.png")) {
    PlayBtn_3.src = "imagens/pause.png";
  } else {
    PlayBtn_3.src = "imagens/play.png";
  }
};

//wave4

var PlayBtn_4 = document.getElementById("PlayBtn_4");
var wavesurfer_4 = WaveSurfer.create({
  container: "#waveform_4",
  waveColor: "white",
  progressColor: "#6fa550",
  barWidth: 3,
  barHeight: 0.6,
  cursorWidth: 0,
  maxCanvasWidth: 4000,
  height: 120,
  barMinHeight: 0.1,
  hideScrollbar: true,
});
wavesurfer_4.load("audios/wave4test.mp3");

PlayBtn_4.onclick = function () {
  wavesurfer_4.playPause();
  if (PlayBtn_4.src.includes("play.png")) {
    PlayBtn_4.src = "imagens/pause.png";
  } else {
    PlayBtn_4.src = "imagens/play.png";
  }
};