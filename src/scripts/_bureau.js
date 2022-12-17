/* bureau video player */
import {mainPage} from './_vars'; 
const video = document.querySelector('.bureau__video');
const audio = document.querySelector('.bureau__audio');
const playButton = document.querySelector('.bureau__play-button');
const muteButton = document.querySelector('.bureau__mute-button');
const playButtonImg = document.querySelector('.bureau__play-svg');
const pauseButtonImg = document.querySelector('.bureau__pause-svg');
const overlay = document.querySelector('.bureau__overlay');

// Play and Pause video
if(mainPage){
  function videoStatus() {
    if (video.paused) {
      video.play();
      audio.play();
      playButtonImg.style.display = 'none';
      pauseButtonImg.style.display = 'block';
      overlay.style.display = 'none';
      playButton.style.opacity = '0.4';
      playButton.addEventListener('mouseenter', function () {
        playButton.style.opacity = '1';
      });
      playButton.addEventListener('mouseleave', function () {
        playButton.style.opacity = '0.4';
      });
    } else {
      video.pause();
      audio.pause();
      playButtonImg.style.display = 'block';
      pauseButtonImg.style.display = 'none';
      overlay.style.display = 'block';
      playButton.style.opacity = '1';
      playButton.addEventListener('mouseenter', function () {
        playButton.style.opacity = '1';
      });
      playButton.addEventListener('mouseleave', function () {
        playButton.style.opacity = '1';
      });
    }
  }
  // mute function
  function muteSound() {
    if (audio.play()) {
      audio.pause();
    }
  }
  playButton.addEventListener('click', videoStatus);
  video.addEventListener('click', videoStatus);
  muteButton.addEventListener('click', muteSound);
}
