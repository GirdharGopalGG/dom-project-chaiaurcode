const hex = '0123456789ABCDEF';
let color = '#';

const startThis = function () {
  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 17)];
  }
  // console.log(Math.floor(Math.random() * 17));
  // console.log(color);
};
let interval;
document.getElementById('start').addEventListener('click', function (e) {
  interval = setInterval(startThis, 1000);
});
document.getElementById('stop').addEventListener('click', function (e) {
  clearInterval(interval);
});
