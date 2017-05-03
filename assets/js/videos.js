const videos = [
  'TklM2-lSby4', 'iPuTYsiLhzA', 'a0uQnWAmf-k', 'NghF4a58YI0', 'boDSEeGt8hg', 'b8HO6hba9ZE', '4hpEnLtqUDg', 'b8Qb3Kjsm6o',
  'y-wtAYBiO9g', 'MLPkKZS6q9k', 'EW86sEEPsTg', 'K5tVbVu9Mkg', 'JbepN4dKLbU', 'G7RgN9ijwE4', '1Bix44C1EzY', 'gnT8ra9a2eI',
  'Z8nD8N84Kds', 'SAxpAs1Iaec', 'tKNhPpUR0Pg', 'o2TO5atI4rU', 'TPYKwcAyb-o', '5IXQ6f6eMxQ', 'dvyZfa9x3UU', 'pnj9FAHmgL0',
  'NHO84rOp8FQ', 'OGbhJjXl9Rk', 'rY8DSFZ08JQ', '8HlqSrCazqo', '5cEL5mq-OOA', 'OW3q-fjIgAY', 'wsfg5aMRoTQ', 'u_zi6D0V9TI',
  'M3ruhqJBSug', 'lRkUQShOHnQ', 'Q2LMg7Mesrc', 'lMj-iyAoh30', '-y_1TmbMbi0', '0TvmP9S6Gy0', 'OWAgHF5ey6k', 'wdiJ5l30OBY',
  'h6nm5R-h0kQ', '_V2sBURgUBI'
];

if (!Date.now) {
  Date.now = function () {
    return new Date().getTime();
  }
}
const now = Date.now(),
function loooop() {
  document.getElementById("time").innerHTML = String(Math.floor((Date.now() - now) / 1000));
};
//setInterval(loooop, 100);

const randomVideo = videos[Math.floor(Math.random()*videos.length)];
const pushVideo = `https://www.youtube.com/embed/${randomVideo}?playlist=${randomVideo}&autoplay=1&loop=1&hd=1`

window.addEventListener("load", function() {
  document.getElementById("videolist").src = pushVideo;
  document.getElementById("time").innerHTML = setInterval(loooop, 100);
})