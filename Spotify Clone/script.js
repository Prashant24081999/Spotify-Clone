console.log("Welcome to spotify");

// initialize the variables
let songIndex = 0;
let audioElement=new Audio('songs/1.mp3');
let masterplay=document.getElementById('masterplay');
let progressbar=document.getElementById('myprogressbar');
let gif=document.getElementById('gif');
let mastersongname=document.getElementById('mastersongname');
let songitems=Array.from(document.getElementsByClassName('songitem'));

let songs=[
    {songname:"Warriyo-Mortals",filepath:"songs/1.mp3",coverpath:"covers/1.jpg"},
    {songname:"Cielo-Huma-Huma",filepath:"songs/2.mp3",coverpath:"covers/2.jpg"},
    {songname:"DEAF KEV-Invincibles[NCS Release]",filepath:"songs/3.mp3",coverpath:"covers/3.jpg"},
    {songname:"Different Heaven & EHIDE",filepath:"songs/4.mp3",coverpath:"covers/4.jpg"},
    {songname:"Janji-Heroes-Tonight-feat-Johning-NCS-Release",filepath:"songs/5.mp3",coverpath:"covers/5.jpg"},
    {songname:"Heatwaves-GlassAnimals",filepath:"songs/6.mp3",coverpath:"covers/6.jpg"},
]

songitems.forEach((element,i)=>{
   element.getElementsByTagName('img')[0].src=songs[i].coverpath;
   element.getElementsByClassName('songname')[0].innerText=songs[i].songname;
})

//handle play/pause click
masterplay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterplay.classList.remove('fa-play-circle');
        masterplay.classList.add('fa-pause-circle');
        gif.style.opacity=1;
    }
    else
    {
        audioElement.pause();
        masterplay.classList.remove('fa-pause-circle');
        masterplay.classList.add('fa-play-circle');
        gif.style.opacity=0;
    }
})

// listen to events
audioElement.addEventListener('timeupdate',()=>{
    //update seekbar
    let progress=parseInt((audioElement.currentTime/audioElement.duration)*100);
    progressbar.value=progress;
})

progressbar.addEventListener('change',()=>{
    audioElement.currentTime=(progressbar.value*audioElement.duration)/100;
})
const makeAllplays = ()=>{
     Array.from(document.getElementsByClassName('songitemplay')).forEach((element)=>{
         element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}
Array.from(document.getElementsByClassName('songitemplay')).forEach((element)=>{
     element.addEventListener('click',(e)=>{
         makeAllplays();
         songindex=parseInt(e.target.id);
         e.target.classList.remove('fa-play-circle');
         e.target.classList.add('fa-pause-circle')
         audioElement.src=`songs/${songindex+1}.mp3`;
         mastersongname.innerText=songs[songindex].songname;
         audioElement.currentTime=0;
         audioElement.play();
         gif.style.opacity=1;
         masterplay.classList.remove('fa-play-circle');
         masterplay.classList.add('fa-pause-circle');
     })
})
document.getElementById('next').addEventListener('click',()=>{
    if(songindex>=5)
    {
        songindex=0;
    }
    else
    {
        songindex+=1;
    }
    audioElement.src=`songs/${songindex+1}.mp3`;
    mastersongname.innerText=songs[songindex].songname;
         audioElement.currentTime=0;
         audioElement.play();
         masterplay.classList.remove('fa-play-circle');
         masterplay.classList.add('fa-pause-circle');
})

document.getElementById('previous').addEventListener('click',()=>{
    if(songindex<=0)
    {
        songindex=0;
    }
    else
    {
        songindex-=1;
    }
        audioElement.src=`songs/${songindex+1}.mp3`;
        mastersongname.innerText=songs[songindex].songname;
         audioElement.currentTime=0;
         audioElement.play();
         masterplay.classList.remove('fa-play-circle');
         masterplay.classList.add('fa-pause-circle');
})