
import Player from "@vimeo/player";
import throttle from "lodash.throttle";

const currentTime = "videoplayer-current-time";

const iframe = document.querySelector("iframe");
const player = new Player(iframe);

player.on("timeupdate", throttle(videoPause, 1000));

function videoPause(event) {
  console.log(event.seconds);

  localStorage.setItem(currentTime, JSON.stringify(event.seconds));
}

const getCurrentTime = localStorage.getItem(currentTime);

player.setCurrentTime(getCurrentTime);

const onPlay = function (data) {
};
