(function() {
  'use strict';
  const gridToggleClass = (e) => {
    const gridSystem = document.querySelector('.gridSystem');
    if (e.keyCode === 27) gridSystem.classList.toggle('isActive');
  }
  window.addEventListener('keyup', gridToggleClass);
})(window);