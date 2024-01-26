// ==UserScript==
// @name         Playlist videos
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://www.youtube.com/*
// @grant        none
// ==/UserScript==


// (\&list=PLTJyOS5T7KeBxy6r2npkn8IeAY2c-NFLn&index=[0-9]+\&pp=iAQB)

async function showPlaylistData() {
  console.log('showPlaylistData called')
  const videosSelector = 'ytd-playlist-panel-renderer#playlist div.playlist-items ytd-playlist-panel-video-renderer';

  const videoElements = document.querySelectorAll(videosSelector);
  console.log(`videos count: ${videoElements.length}`)
  let links = ''
  for(let i=0;i<videoElements.length;i++) {
    let link = `https://youtube.com${videoElements[i].querySelector('a#thumbnail').getAttribute('href').replace(/&list=[^&]+&index=[^&]+&pp=[^&]+/, '')}`
    let title = videoElements[i].querySelector('span#video-title').textContent.trim()
    links = `${links}${link} ${title}\n`
  }
  console.log(links)
}

async function waitFor(durationInSeconds) {
   console.log(`Waiting for ${durationInSeconds} seconds`);

  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      console.log('Wait over');
      resolve("anything");
    }, durationInSeconds*1000);
  });
}


async function perform() {
   await waitFor(9);
   await showPlaylistData();
}

window.onload = perform;
