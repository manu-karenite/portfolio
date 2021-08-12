'use strict';


//initially
const l1 = document.querySelector('.middleBox__links--link1');
const l2 = document.querySelector('.middleBox__links--link2');
const l3 = document.querySelector('.middleBox__links--link3');
const l4 = document.querySelector('.middleBox__links--link4');


//making initial opacity 0
l2.style.display="none";
l3.style.display="none";
l4.style.display="none";

window.setTimeout(function()
{
  l2.style.animationName="logo-transition";
  l2.style.animationDuration="1s";
  l2.style.display="block";
},500);

window.setTimeout(function()
{
  l3.style.animationName="logo-transition";
  l3.style.animationDuration="1s";
  l3.style.display="block";
},1000);



window.setTimeout(function()
{
  l4.style.animationName="logo-transition";
  l4.style.animationDuration="1s";
  l4.style.display="block";
},1500);
