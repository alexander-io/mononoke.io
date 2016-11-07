// (function(){
//   document.getElementById("main").style.width += document.getElementById("mySidenav").style.width;
// })();

// console.log(document.getElementById("mySidenav").style.width);

// var sideNavElement = document.getElementById("mySidenav");
// var sideNavStyle = window.getComputedStyle(sideNavElement);
// var sideNavWidth = sideNavStyle.getPropertyValue('width');

// var element = document.getElementById("mySidenav"),
//   style = window.getComputedStyle(element),
//   top = style.getPropertyValue('width');

// console.log(document.getElementById("mySidenav"));
/* Set the width of the side navigation to 250px */
function openNav() {
    var navWidth = document.getElementById("mySidenav").style.width = "250px";
    console.log(document.getElementById("mySidenav").style.width);
    document.getElementById("main").style.left += navWidth;
    console.log(document.getElementById("mySidenav").style.width);

}

/* Set the width of the side navigation to 0 */
function closeNav() {
    var navWidth = document.getElementById("mySidenav").style.width = "0";
    console.log(document.getElementById("main").style.left);
    document.getElementById("main").style.left -= navWidth;
    console.log(document.getElementById("main").style.left);
}
