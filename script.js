// scroll to top
const scrollTotop = document.getElementById("scrollToTopBtn");

window.addEventListener("scroll",function(){
  if (this.window.pageYOffset>300) {
    scrollTotop.style.display="block";
  }else{
    scrollTotop.style.display="none";
  }
});

scrollTotop.addEventListener("click",function(){
  window.scrollTo({
    top:0,
    behavior: "smooth"
  });
});

const navigation =
  document.querySelector(".primary-navigation");

const navigationHeight =
  navigation.offsetHeight;

document.documentElement.style.setProperty(
  "--scroll-padding",
  navigationHeight + "px"
);