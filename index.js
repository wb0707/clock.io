
setInterval(() => {
  
  var hour = document.querySelector('.hour');
  var minute = document.querySelector('.minute');
  var second = document.querySelector('.second');
  
  
  
  d = new Date();
  
  htime = d.getHours();
  mtime = d.getMinutes();
  stime = d.getSeconds();
  console.log(stime);
  console.log(mtime);
  hrot = 30 * htime + mtime/2;
  mrot = 6 * mtime;
  srot = 6 * stime;
  
  hour.style.transform = `rotate(${hrot}deg)`;
  minute.style.transform = `rotate(${mrot}deg)`;
  second.style.transform = `rotate(${srot}deg)`;
  
  //====digital clock====
  
  
},1000);



setInterval(() =>{
  let dh = document.querySelector(".d-h");
  let dm = document.querySelector(".d-m");
  let ds = document.querySelector(".d-s");
   
  d = new Date();
  
let  h = d.getHours();
let  m = d.getMinutes();
let  s = d.getSeconds();
   
  dh.innerHTML = h;
  dm.innerHTML = m;
  ds.innerHTML = s;
},1000
);