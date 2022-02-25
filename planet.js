var europa_img = "https://i.postimg.cc/VN2MZXMt/image-europa.webp";

var moon_img = "https://i.postimg.cc/P5xwtSQZ/image-moon.png";

var titan_img = "https://i.postimg.cc/CLw82hZc/image-titan.png";

var mars_img = "https://i.postimg.cc/3NTGY7tJ/image-mars.webp";

document.querySelector('.moon').addEventListener('click' , function () {
 document.querySelector('.destination_img_10').src = moon_img;
})

document.querySelector('.mars').addEventListener('click' , function () {
  document.querySelector('.destination_img_10').src = mars_img;
})

document.querySelector('.europa').addEventListener('click' , function () {
  document.querySelector('.destination_img_10').src = europa_img;
})

document.querySelector('.titan').addEventListener('click' , function () {
 document.querySelector('.destination_img_10').src = titan_img;
})

var moon_discription = "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.";

var mars_discription = "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!";

var europa_discription = "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.";

var titan_discription = "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.";

var moon_stats = "384,400 km";

var mars_stats = "225 mil. km";

var europa_stats = "628 mil. km";

var titans_stats = "1.6 bil. km";

var moon_years = "3 days";

var mars_years = "9 months";

var europa_years = "3 years";

var titan_years = "7 years";

document.querySelector(".moon").addEventListener("click", function () {
  //var x = document.querySelector(".moon").value;
  //alert(x);
  document.querySelector('.europa_h1').innerHTML = "Moon";
  document.querySelector('.europa_p').innerHTML = moon_discription;
  document.querySelector('.stats_h3').innerHTML = moon_stats;
  document.querySelector('.time_h3').innerHTML = moon_years;
});

document.querySelector(".mars").addEventListener("click", function () {
  //var x = document.querySelector(".mars").value;
  //alert(x);
  document.querySelector('.europa_h1').innerHTML = "Mars";
   document.querySelector('.europa_p').innerHTML = mars_discription;
   document.querySelector('.stats_h3').innerHTML = mars_stats;
  document.querySelector('.time_h3').innerHTML = mars_years;
});

document.querySelector(".europa").addEventListener("click", function () {
  //var x = document.querySelector(".europa").value;
  //alert(x);
  document.querySelector('.europa_h1').innerHTML = "Europa";
   document.querySelector('.europa_p').innerHTML = europa_discription;
   document.querySelector('.stats_h3').innerHTML = europa_stats;
  document.querySelector('.time_h3').innerHTML = europa_years;
});

document.querySelector(".titan").addEventListener("click", function () {
  //var x = document.querySelector(".titan").value;
  //alert(x);
  document.querySelector('.europa_h1').innerHTML = "Titan";
   document.querySelector('.europa_p').innerHTML = europa_discription;
   document.querySelector('.stats_h3').innerHTML = titans_stats;
  document.querySelector('.time_h3').innerHTML = titan_years;
});
