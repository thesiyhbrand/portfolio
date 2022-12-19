// const scroll = new LocomotiveScroll({
//   el: document.querySelector('#main'),
//   smooth: true
// });

barba.init({
    // ...
})


$(document).ready(function() {
  $('.video-gallery').magnificPopup({
  delegate: 'a', 
  type: 'iframe',
  gallery:{
  enabled:true
  }
});
});