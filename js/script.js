document.addEventListener("DOMContentLoaded", function() {
	var header = document.querySelector('.header');
	var profileinfo = document.querySelector('.profile-info');
	var toggleButton = document.getElementById('toggleButton');
	
	toggleButton.addEventListener('click', function() {
	  if (header.style.left === '-306px') {
		 header.style.left = '0px';
	  } else {
		 header.style.left = '-306px';
	  }
	
	});
	window.addEventListener('resize', function() {
		if (window.innerWidth >= 1358.98) {
		  header.style.left = '0px';
		} else {
		  header.style.left = '-306px';
		}
		
	 });
 });