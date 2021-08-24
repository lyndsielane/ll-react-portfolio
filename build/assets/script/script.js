$(document).ready(function() {
  $(window).on('scroll', function() {
    if($(window).scrollTop() < 1000) {
      $('.hero').css('background-size', 130 + parseInt($(window).scrollTop() / 5) + '%');
      $('.hero h1').css('top', 50 + ($(window).scrollTop() * .1) + '%');
      $('.hero h1').css('opacity', 1 - ($(window).scrollTop() * .003));
    }
    
    if($(window).scrollTop() >= $('.content-wrapper').offset().top - 300) {
      $('.nav-bg').removeClass('bg-hidden');
      $('.nav-bg').addClass('bg-visible');
    } else {
      $('.nav-bg').removeClass('bg-visible');
      $('.nav-bg').addClass('bg-hidden');
    }
  });
});

const hamburger = document.getElementById('hamburger')
const navUl = document.getElementById('nav-ul')

hamburger.addEventListener('click', () => {
  navUl.classList.toggle('show');
});

colors = {
  html5: "#F16529",
  "css3-alt": "#2199F8",
  "js-square": "#FFE270",
  angular: "#DC0230",
  react: "#61DBFB",
  "node-js": "#80BD01",
  sass: "#CF649A",
  less: "#244A7A",
  wordpress: "#20759B",
  gulp: "#DB4446",
  grunt: "#F4A419",
  npm: "#C53635",
  gem: "#671110",
  'github-square': 'black',
};
  
document.querySelectorAll(".skillicons li i").forEach((item,index) => {
  item.style.color = colors[item.className.substr(7, item.className.length)]})
                            
document.addEventListener("click",() => {
  animateSkills = anime({
  targets: ".skillicons li",
  translateY: [70, 0],
  opacity: [0, 1],
  autoplay: true,
  duration: 1500,
  delay: anime.stagger(600)
  })
})
  
document.querySelectorAll(".skillicons li i").forEach((item,index) => {
  (function(counter) {
    setTimeOut(function() {
      item.style.color = colors[item.className.substr(7, item.className.length)]
    },
    100*counter);
  })(index);
});
