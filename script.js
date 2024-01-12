// Slider-------------------
const swiper = new Swiper('.swiper', {
 
  loop: true,

  pagination: {
    el: '.swiper-pagination',
  },
  
});


//Copy menu for mobile------------
function copyMenu() {
  var dptCategory = document.querySelector('.dpt-cat');
  var dptPlace = document.querySelector('.departments');
  dptPlace.innerHTML = dptCategory.innerHTML;

  var mainNav = document.querySelector('.header-nav nav');
  var navPlace = document.querySelector('.off-canvas nav');
  navPlace.innerHTML = mainNav.innerHTML;

  var topNav = document.querySelector('.header-top .wrapper');
  var topPlace = document.querySelector('.off-canvas .thetop-nav');
  topPlace.innerHTML = topNav.innerHTML;
}
copyMenu()
/*
Search Button-------------------------
*/
const menuButton = document.querySelector('.trigger'),
      closeButton = document.querySelector('.t-close'),
      addclass = document.querySelector('.site');
menuButton.addEventListener('click', function() {
      addclass.classList.toggle('showmenu')
})
closeButton.addEventListener('click', function(){
      addclass.classList.remove('showmenu')
})

/*Show submenu on mobile--------------------------*/
const submenu = document.querySelectorAll('.has-child .icon-small');
submenu.forEach((menu) => menu.addEventListener('click', toggle));
  
function toggle(e) {
  e.preventDefault();
  submenu.forEach((item) => item !=this ? item.closest('.has-child').classList.remove('expand') : null);
  if (this.closest('.has-child').classList != 'expand');
  this.closest('.has-child').classList.toggle('expand');
}

//show search------------
const searchButton = document.querySelector('.t-search'),
      tClose = document.querySelector('.search-close'),
      showClass = document.querySelector('.site');
searchButton.addEventListener('click', function() {
    showClass.classList.toggle('showsearch')
})
tClose.addEventListener('click', function() {
  showClass.classList.remove('showsearch')
})

/*Show modal on load */
window.onload = function () {
  document.querySelector('.site').classList.toggle('showmodal')
}
document.querySelector('.modalclose').addEventListener('click', function () {
  document.querySelector('.site').classList.remove('showmodal')
})








