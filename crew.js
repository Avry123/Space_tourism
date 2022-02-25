var girl_img = "https://i.postimg.cc/CKjxcmxx/image-anousheh-ansari.webp";

var nerd_img = "https://i.postimg.cc/qq7BMrXN/image-mark-shuttleworth.png";

var black_img = "https://i.postimg.cc/wTZxHStB/image-victor-glover.webp";

var white_img = "https://i.postimg.cc/BbwSjzMM/image-douglas-hurley.png";

var girl_info = "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.";

var nerd_info = "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.";

var white_info = "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon";

var black_info = "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer.";

var role = ["Flight Engineer", "Mission Specialist", "Commander", "Pilot"];

document.querySelector(".girl").addEventListener("click", function() {
  //alert("girl");
  document.querySelector('.crew_h3').innerHTML = role[0];
  document.querySelector('.crew_h2').innerHTML = 'Anousheh Ansari';
  document.querySelector('.crew_h4').innerHTML = girl_info;
  document.querySelector('.crew_img_10').src = girl_img;
  })

document.querySelector(".nerd").addEventListener('click', function() {
  //alert('nerd');
   document.querySelector('.crew_h3').innerHTML = role[1];
  document.querySelector('.crew_h2').innerHTML = 'Mark Richard Shuttleworth';
  document.querySelector('.crew_h4').innerHTML = nerd_info;
   document.querySelector('.crew_img_10').src = nerd_img;
})

document.querySelector(".black").addEventListener('click', function() {
  //alert('black');
   document.querySelector('.crew_h3').innerHTML = role[2];
  document.querySelector('.crew_h2').innerHTML = 'Douglas Gerald Hurley';
  document.querySelector('.crew_h4').innerHTML =  white_info;
   document.querySelector('.crew_img_10').src = white_img;
})

document.querySelector(".white").addEventListener('click', function() {
  //alert('white');
   document.querySelector('.crew_h3').innerHTML = role[3];
  document.querySelector('.crew_h2').innerHTML = 'Victor Glover';
  document.querySelector('.crew_h4').innerHTML = black_info;
   document.querySelector('.crew_img_10').src = black_img;
})
