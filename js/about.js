function showMobileMenu() {
  if (document.body.scrollWidth >= 768) {
    return;
  }
  document.getElementById('mobile-menu').style.display = 'block';
}

function hideMobileMenu() {
  document.getElementById('mobile-menu').style.display = 'none';
}

document.getElementById('nav').addEventListener('click', showMobileMenu);
document.querySelector('#mobile-menu > a').addEventListener('click', hideMobileMenu);