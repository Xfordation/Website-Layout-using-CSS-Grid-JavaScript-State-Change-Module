const statePattern = function () {
  let currentState = new Homestate(this);
  //On Initialization
  this.init = function () {
    this.change(new Homestate());
  };
  //Change State
  this.change = function (state) {
    currentState = state;
  };
};
//Home State
const Homestate = function (page) {
  document.getElementById("showcase").style.display = "block";
  document.getElementById("article").style.display = "grid";
  document.getElementById("about-us").style.display = "none";
  document.getElementById("title").innerHTML = `Rosesso | Home Page`;
};
//About State
const Aboutstate = function (page) {
  document.getElementById("about-us").style.display = "block";
  document.getElementById("article").style.display = "none";
  document.getElementById("title").innerHTML = `Rosesso | About Page`;
};

const page = new statePattern();
page.init();

const Home = document.getElementById("home"),
  about = document.getElementById("about");
//Event Listener(s)
Home.addEventListener("click", (e) => {
  e.preventDefault();
  page.change(new Homestate());
});
about.addEventListener("click", (e) => {
  e.preventDefault();
  page.change(new Aboutstate());
});

//Shrink Navbar on Scroll
window.onscroll = function () {
  shrinkNav();
};
function shrinkNav(e) {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("nav-container").style.padding = "0.3rem";
    document.getElementById("home").style.padding = "0.5rem";
    document.getElementById("about").style.padding = "0.5rem";
    document.getElementById("home-li").style.padding = "0.5rem";
    document.getElementById("about-li").style.padding = "0.5rem";
  } else {
    document.getElementById("nav-container").style.padding = "1rem";
    document.getElementById("home").style.padding = "1rem";
    document.getElementById("about").style.padding = "1rem";
    document.getElementById("home-li").style.padding = "1rem";
    document.getElementById("about-li").style.padding = "1rem";
  }
}
