var commander_name = "Douglas Hurley";

var engineer_name = "  Anousheh Ansari";

var pilot_name = "Victor Glover";

var specialist_name = "Mark Shuttleworth";

var commander_info = "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.";

var engineer_info = "  Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space. ";

var pilot_info = "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer. ";

var specialist_info = "  Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.";

var commander_img = "https://i.postimg.cc/J75MGhgN/image-douglas-hurley.png";

var engineer_img = "https://i.postimg.cc/T3p67JP0/image-anousheh-ansari.png";

var pilot_img = "https://i.postimg.cc/Z52h1vBS/image-victor-glover.png";

var specialist_img = "https://i.postimg.cc/tCrbNM97/image-mark-shuttleworth.png";

var europa_img = "https://i.postimg.cc/VN2MZXMt/image-europa.webp";

var moon_img = "https://i.postimg.cc/P5xwtSQZ/image-moon.png";

var titan_img = "https://i.postimg.cc/CLw82hZc/image-titan.png";

var mars_img = "https://i.postimg.cc/3NTGY7tJ/image-mars.webp";

var title = ['Space Capsule', 'Space Port', 'Vehicle' ];

var space_capsule = "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry  capsule to reenter the Earth's atmosphere without wings. Our capsule is where  you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.";

var space_port = "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.";

var vehicle = "  A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!";

var space_capsule_img = "https://i.postimg.cc/br9nrTqb/image-space-capsule-landscape.jpg";

var space_port_img = "https://i.postimg.cc/TP5WgGRT/image-spaceport-portrait.jpg";

var vehicle_img = "https://i.postimg.cc/NFcTQVvB/image-launch-vehicle-portrait.jpg";

  document.querySelector(".capsule").addEventListener('click', function() {
    document.querySelector('.technology_h5').innerHTML = space_capsule ;
    document.querySelector('.technology_img').src = space_capsule_img;
  })

document.querySelector(".vehicle").addEventListener('click', function() {
    document.querySelector('.technology_h5').innerHTML = vehicle ;
    document.querySelector('.technology_img').src = vehicle_img;
  })

document.querySelector(".port").addEventListener('click', function() {
    document.querySelector('.technology_h5').innerHTML = space_port ;
    document.querySelector('.technology_img').src = space_port_img;
  })

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

document.querySelector(".girl").addEventListener("click", function() {
  document.querySelector(".crew_img").src = engineer_img;
  document.querySelector(".crew_info_h4").innerHTML = engineer_name;
  document.querySelector(".crew_info_h2").innerHTML = "Chief Engineer";
  document.querySelector(".crew_info_h6").innerHTML = engineer_info ;
})

document.querySelector(".tech").addEventListener("click", function() {
  document.querySelector(".crew_img").src = specialist_img;
  document.querySelector(".crew_info_h4").innerHTML = specialist_name;
  document.querySelector(".crew_info_h2").innerHTML = "CEO";
  document.querySelector(".crew_info_h6").innerHTML = specialist_info ;
})

document.querySelector(".white").addEventListener("click", function() {
  document.querySelector(".crew_img").src = commander_img;
  document.querySelector(".crew_info_h4").innerHTML = commander_name;
  document.querySelector(".crew_info_h2").innerHTML = "Commander";
  document.querySelector(".crew_info_h6").innerHTML = commander_info ;
})

document.querySelector(".black").addEventListener("click", function() {
   document.querySelector(".crew_img").src = pilot_img;
  document.querySelector(".crew_info_h4").innerHTML = pilot_name;
  document.querySelector(".crew_info_h2").innerHTML = "Pilot";
  document.querySelector(".crew_info_h6").innerHTML = pilot_info ;
})
