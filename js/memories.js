const memories = [
{
image:"assets/photos/photo1.jpg",
caption:"Every story has a beginning."
},
{
image:"assets/photos/photo2.jpg",
caption:"Some moments become memories before we even realise it."
},
{
image:"assets/photos/photo3.jpg",
caption:"This smile deserves its own place in time."
},
{
image:"assets/photos/photo4.jpg",
caption:"One of those days I'll always be grateful for."
},
{
image:"assets/photos/photo5.jpg",
caption:"If I could relive one moment, this would be close to the top."
},
{
image:"assets/photos/photo6.jpg",
caption:"And hopefully... this is just the beginning of many more."
}
];

const container=document.getElementById("memories");

container.innerHTML="";

memories.forEach(memory=>{

container.innerHTML+=`

<section class="memory-section">

<div class="memory-card">

<img src="${memory.image}" loading="lazy">

<div class="memory-overlay">

<p class="memory-text">${memory.caption}</p>

</div>

</div>

</section>

`;

});

gsap.registerPlugin(ScrollTrigger);

gsap.utils.toArray(".memory-card").forEach(card=>{

gsap.from(card,{

opacity:0,
y:80,
duration:1,

scrollTrigger:{
trigger:card,
start:"top 75%"
}

});

});