const hex = '0123456789ABCDEF';

const startThis = function () {
  let color = '#';
  for (let i = 0; i < 6; i++) {
    const num = Math.floor(Math.random() * 16); //its 16 because Math.random() generates number between 0(inclusive) to 1(exclusive). so on multiplying it by 16 the range will be from 0(inclusive) to 16(exclusive). So number of elements in the array hex is 16 and we want it to iterate from 0 to 15(index of the array). so adding floor will result that
    color += hex[num];
    //   console.log( num);
  }
  //  console.log(color);
  document.body.style.backgroundColor = color;
};
// startThis()
let interval;
document.getElementById('start').addEventListener('click', function (e) {
  if(!interval)
  interval = setInterval(startThis, 1000);
});
document.getElementById('stop').addEventListener('click', function (e) {
  clearInterval(interval);
  interval = null   //setting 𝙞𝙣𝙩𝙚𝙧𝙫𝙖𝙡𝙄𝙙 = 𝙣𝙪𝙡𝙡 is mandatory because if we don't do that and by any chance click start button twice then it will get stuck in infinite loop which can never be stopped (can be stopped by reloading page)
});
