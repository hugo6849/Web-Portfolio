const text = document.querySelector(".about-1");
const strText = text.textContent;

console.log(strText);
let about_description = document.getElementById('about-description');

$(function(){
$("#nav").load("navbar.html"); 
$("#contact").load("contact.html"); 
$("#photography").load("photography.html")
});

/**Document Listener Events*/
document.addEventListener('scroll', animate);