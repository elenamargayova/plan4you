// import MobileMenu from './modules/MobileMenu';
// import RevealOnScroll from './modules/RevealOnScroll';
import $ from 'jquery';
import StickyHeader from './modules/StickyHeader'
import Modal from './modules/Modal';
// var mobileMenu=new MobileMenu();
// new RevealOnScroll($(".feature-item"),"85%");
// new RevealOnScroll($(".testimonial"),"60%");
var stickyHeader=new StickyHeader();
var modal=new Modal();
var mySidenav=document.getElementById("openSidenav");
var closebtn=document.getElementById("closebtn");
var tog=false;
// mySidenav.addEventListener("click",openNav);
// closebtn.addEventListener("click",closeNav);

$("#toggleSidenav").click(function() {
  tog=!tog;
  return (tog) ? openNav() : closeNav();
});

$("#mySidenav a").click(function() {
    tog=!tog;
  return (tog) ? openNav() : closeNav();
});

function openNav() {
  document.getElementById("toggleSidenav").style.color = "#fff";
    document.getElementById("mySidenav").style.width = "30rem";
}

function closeNav() {
  document.getElementById("toggleSidenav").style.color = "#000";
    document.getElementById("mySidenav").style.width = "0";
}
