const colors=[
"#FFD166",
"#F4A261",
"#C77DFF",
"#8ECAE6",
"#FFB703"
];

const balloons=document.getElementById("balloons");

for(let i=0;i<14;i++){

    const b=document.createElement("div");

    b.className="balloon";

    b.style.left=(5+i*6.5)+"%";

    b.style.background=colors[Math.floor(Math.random()*colors.length)];

    b.style.transform=`scale(${0.8+Math.random()*0.35})`;

    balloons.appendChild(b);

    gsap.to(b,{

    y:-900,

    x:gsap.utils.random(-40,40),

    duration:5+Math.random()*2,

    repeat:-1,

    repeatDelay:0,

    delay:Math.random(),

    ease:"power1.out",

    onRepeat(){
        gsap.set(b,{
            y:0,
            opacity:1
        });
    }

});

}

for(let i=0;i<40;i++){

    const s=document.createElement("div");

    s.className="sparkle";

    s.style.left=Math.random()*100+"%";

    s.style.top=(20+Math.random()*35)+"%";

    document.getElementById("celebration").appendChild(s);

    gsap.to(s,{

        opacity:0.2,

        scale:0.3,

        repeat:-1,

        yoyo:true,

        duration:1+Math.random()*2,

        delay:Math.random()*2

    });

}

gsap.from(".celebration-text",{

    opacity:0,

    y:60,

    duration:1.4,

    scrollTrigger:{
        trigger:"#celebration",
        start:"top 70%"
    }

});


// ==========================
// CAKE CLICK
// ==========================

const cake=document.getElementById("cake");

cake.addEventListener("click",()=>{

    gsap.to(cake,{
        scale:1.05,
        duration:.25,
        repeat:1,
        yoyo:true
    });

    magicDust();

    for(let i=0;i<4;i++){

        setTimeout(createShootingStar,i*500);

    }

});

function magicDust(){

    const cake=document.getElementById("cake");

    const rect=cake.getBoundingClientRect();

    const x=rect.left+rect.width/2;
    const y=rect.top+20;

    for(let i=0;i<120;i++){

        const p=document.createElement("div");

        p.className="magicDust";

        p.style.left=x+"px";
        p.style.top=y+"px";

        document.body.appendChild(p);

        gsap.to(p,{

            x:gsap.utils.random(-120,120),

            y:gsap.utils.random(-350,-150),

            opacity:0,

            scale:gsap.utils.random(.5,2),

            duration:2+Math.random(),

            ease:"power2.out",

            onComplete(){

                p.remove();

            }

        });

    }

}

function sparkleExplosion(){

    for(let i=0;i<70;i++){

        const s=document.createElement("div");

        s.className="sparkleBurst";

        s.style.left=(window.innerWidth/2+Math.random()*240-120)+"px";

        s.style.top=(window.innerHeight/2+Math.random()*240-120)+"px";

        document.body.appendChild(s);

        gsap.fromTo(s,
        {
            opacity:1,
            scale:0
        },
        {
            opacity:0,
            scale:2,
            duration:1.2,
            ease:"power2.out",
            onComplete(){
                s.remove();
            }
        });

    }

}


const letter = `

Today isn't just another day.
It's the day someone truly special came into this world.
I just wanted this little website to remind you how grateful I am for all the memories we've shared.
May this year bring you endless smiles, happiness, peace, and every dream you're working towards.
Keep smiling...
Keep being yourself...
Because that's exactly who the world needs.
Happy Birthday ❤️

— Gourav

`;

const letterBox = document.getElementById("letterContent");

let i = 0;

function typeLetter(){

    if(i < letter.length){

        letterBox.textContent += letter.charAt(i);

        i++;

        setTimeout(typeLetter,35);

    }

}

ScrollTrigger.create({

    trigger:"#letterSection",

    start:"top 70%",

    once:true,

    onEnter:typeLetter

});