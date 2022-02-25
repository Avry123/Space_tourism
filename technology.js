var title = ['Space Capsule', 'Space Port', 'Vehicle' ];

var space_capsule = "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry  capsule to reenter the Earth's atmosphere without wings. Our capsule is where  you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.";

var space_port = "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.";

var vehicle = "  A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!";

var space_capsule_img = "https://i.postimg.cc/br9nrTqb/image-space-capsule-landscape.jpg";

var space_port_img = "https://i.postimg.cc/TP5WgGRT/image-spaceport-portrait.jpg";

var vehicle_img = "https://i.postimg.cc/NFcTQVvB/image-launch-vehicle-portrait.jpg";

  document.querySelector(".shuttle").addEventListener('click', function() {
    document.querySelector('.tech_h5').innerHTML = space_capsule ;
    document.querySelector('.tech_h2').innerHTML = 'Shuttle' ;
    document.querySelector('.tech_left_img').src = space_capsule_img;
  })

document.querySelector(".rocket").addEventListener('click', function() {
  document.querySelector('.tech_h5').innerHTML = vehicle;
    document.querySelector('.tech_h2').innerHTML = 'Launch Vehicle' ;
    document.querySelector('.tech_left_img').src =vehicle_img ;
  })

document.querySelector(".port").addEventListener('click', function() {
    document.querySelector('.tech_h5').innerHTML = space_port ;
   document.querySelector('.tech_h2').innerHTML = 'Space Port' ;
    document.querySelector('.tech_left_img').src = space_port_img;
  })
