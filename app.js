//Step 1first listen up for a key event
window.addEventListener("keydown", function (e) {
  //   console.log(e.keyCode); test
  //now we are searching/query for a matching data-key <audio> tag in html
  //and get the audio element <audio>
  //using querySelector based on attribute []
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  // console.log(audio);
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  // console.log(key);

  if (!audio) return; //stop running if wrong key hit
  audio.currentTime = 0; //rewind to the start, can keep hitting the same key otherwise won't play until the last hit key finishes playing. F is a good example, try!
  audio.play();

  key.classList.add("playing");
});
//key.classList.remove("playing");
//key.classList.toggle("playing");

// this.setTimeout(function () {
//   key.classList.remove("playing");
// }, 1000);
function removeTransition(e) {
  console.log(e);
  if (e.propertyName !== "transform") {
    return;
  }
  //skip it if it's not a transform
  // console.log(e.propertyName);
  // console.log(this);
  this.classList.remove("playing");
  // this equals to the actual keys
}

const keys = document.querySelectorAll(".key");
// console.log(keys);
// keys.addEventListener('transitionend') won't work because
// keys is a nodelist(arrayish),you can't listen to all of them
// has to loop through
keys.forEach((key) => key.addEventListener("transitionend", removeTransition));

//Step 2 Add animation when key is pressed line 9. .key is the class
// add the .playing css to the key when pressed, line 16 (but now animation on each key won't disappear when others get pressed later)
// next, we need to remove the class
//we can use a timeout function line 20 - line 22
//but not recommend, mess up transition timer????
//instead will use transitionend event line 41
