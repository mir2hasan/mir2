/*Show dpt menu----------------------------- */
const dptButton = document.querySelector('.dpt-cat .dpt-trigger'),
      dptClass = document.querySelector('.site');
dptButton.addEventListener('click', function() {
      dptClass.classList.toggle('showdpt')
})
