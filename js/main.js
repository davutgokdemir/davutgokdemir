var hamiconMenu = document.getElementById("hamiconMenu");
console.log(hamiconMenu.src);


var menuBtn = document.getElementById("menuBtn");
if (menuBtn) {
  menuBtn.addEventListener('click', function () {
    var hamMenu = document.getElementById("hamiconMenu").src;
    var hamMenuLink = hamMenu.substring(hamMenu.indexOf("images"));
    var hamMenuStart = hamMenu.substring(0, hamMenu.indexOf("images"));

    if (hamMenuLink == 'images/graphics/hamicon.png') {
      document.getElementById("hamiconMenu").src = hamMenuStart + 'images/graphics/canicon.png';
      document.querySelector(".hiddenMenu").style.maxHeight = '500px';
      document.querySelector(".hiddenMenu").style.transition = 'max-height 0.2s ease-in';
    } else if (hamMenuLink == 'images/graphics/canicon.png') {
      document.getElementById("hamiconMenu").src = hamMenuStart + 'images/graphics/hamicon.png';
      document.querySelector(".hiddenMenu").style.maxHeight = '0px';
      document.querySelector(".hiddenMenu").style.transition = 'max-height 0.2s ease-out';
    }
  });
}