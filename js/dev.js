// setTimeout(function(){
//   document.getElementById('developer').style.visibility = 'visible'
// }, 3000)

// setTimeout(function(){
//   document.getElementById('kodama').addEventListener("mouseover", function(){
//     document.getElementById('developer').style.visibility = 'visible'
//   })
// },2000)
// console.log(document.getElementById('kodama').)
document.getElementById('kodama').addEventListener("mouseover", function(){

  document.getElementById('developer').style.visibility = 'visible'
  
})
document.getElementById('kodama').addEventListener("mouseout", function(){

  setTimeout(function(){
    document.getElementById('developer').style.visibility = 'hidden'
  },2000)
})

// $("kodama").mouseenter(function(){
//     clearTimeout($(this).data('timeoutId'));
//     $(this).find(".tooltip").fadeIn("slow");
// }).mouseleave(function(){
//     var someElement = $(this),
//         timeoutId = setTimeout(function(){
//             someElement.find(".tooltip").fadeOut("slow");
//         }, 650);
//     //set the timeoutId, allowing us to clear this trigger if the mouse comes back over
//     someElement.data('timeoutId', timeoutId);
// });
