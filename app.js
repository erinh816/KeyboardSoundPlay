//first listen up for a key event
window.addEventListener("keydown", function (e) {
  //   console.log(e.keyCode); test
  //now we are searching/query for a matching data-key <audio> tag in html
  //and get the audio element <audio>
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  //   console.log(audio);
  if (!audio) return; //stop running if wrong key hit
  //   audio.currentTime = 0;
  //rewind to the start, can keep hitting the same key otherwise won't play until the last hit key finishes playing
  audio.play();
});
