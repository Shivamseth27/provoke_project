
const apiKey = 'YOUR_API_KEY';
const videoId = 'https://www.youtube.com/watch?v=sExVaCnF20k'; // Replace with your unlisted YouTube video ID

let player;

function onYouTubeIframeAPIReady() {
  player = new YT.Player('player', {
    height: '360',
    width: '640',
    videoId: videoId,
    events: {
      'onReady': onPlayerReady,
      'onStateChange': onPlayerStateChange
    }
  });
}

function onPlayerReady(event) {
  event.target.playVideo();
}

function onPlayerStateChange(event) {
  // You can add custom logic here based on the player's state
}

// Load the YouTube API script
function loadYouTubeAPI() {
  const tag = document.createElement('script');
  tag.src = 'https://www.youtube.com/iframe_api';
  const firstScriptTag = document.getElementsByTagName('script')[0];
  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
}

// Load the YouTube API and initialize the player
loadYouTubeAPI();

