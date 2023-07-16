//Initializing the variables
let songIndex=0;
let audioElement= new Audio('song/1.mp3');
//The below variable is used for the action of pause/play button 
let masterPlay=document.getElementById('masterPlay');
let myProgressBar=document.getElementById('mysong');
let gif=document.getElementById('gif');
// The name which is displayed in the bottom 
let masterSongName=document.getElementById('masterSongName');
let songItems=Array.from(document.getElementsByClassName('songItem'));
//Firstly creating array of songs
let songs=[
    {songName:"Moon Rise",filePath:"song/1.mp3", coverpath:"covers/1.jpg"},
    {songName:"Infinity",filePath:"song/2.mp3", coverpath:"covers/2.jpg"},
    {songName:"Play Date",filePath:"song/3.mp3", coverpath:"covers/3.jpg"},
    {songName:"Falling",filePath:"song/4.mp3", coverpath:"covers/4.jpg"},
    {songName:"Spirits",filePath:"song/5.mp3", coverpath:"covers/5.jpg"},
    {songName:"High Rated Gabru",filePath:"song/6.mp3", coverpath:"covers/6.jpg"},
    {songName:"Stereo Hearts",filePath:"song/7.mp3", coverpath:"covers/7.jpg"},
    {songName:"Excuses",filePath:"song/8.mp3", coverpath:"covers/8.jpg"},
    {songName:"Heat Waves",filePath:"song/9.mp3", coverpath:"covers/9.jpg"},
    {songName:"Naah",filePath:"song/10.mp3", coverpath:"covers/10.jpg"},
]
songItems.forEach((element,i)=>{
    // console.log(element,i);
    element.getElementsByTagName("img")[0].src=songs[i].coverpath;
    element.getElementsByClassName("songName")[0].innerText=songs[i].songName;  
})
//Adding events 
   //Handling play/pause click
   masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity=1;
    }
        else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity=0;
    }
   })
   //updating time on audioelement
audioElement.addEventListener('timeupdate',()=>{
    //Updating seekbar
    progress=parseInt((audioElement.currentTime/audioElement.duration)*100);
    myProgressBar.value=progress;
})

//balancing the song progress with the seekbar
myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime=myProgressBar.value * audioElement.duration/100;
})

//Applying play and pause button in song list
const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })    
}

    Array.from(document.getElementsByClassName('songPlay')).forEach((element)=>{
         element.addEventListener('click',(e)=>{
            makeAllPlays();
            
            songIndex = parseInt(e.target.id);
            console.log(e.target);
            e.target.classList.remove('fa-play-circle');
            e.target.classList.add('fa-pause-circle');
            audioElement.src = `song/${songIndex+1}.mp3`;
            masterSongName.innerText=songs[songIndex].songName;
            audioElement.currentTime=0;
            audioElement.play();
            gif.style.opacity=1;
            masterPlay.classList.remove('fa-play-circle');
            masterPlay.classList.add('fa-pause-circle');
         })
    })
// For previous and next Button    
document.getElementById('next').addEventListener('click',()=>{
    if(songIndex>=9){
        songIndex=0;
    }
    else{
        songIndex += 1;
    }
    audioElement.src = `song/${songIndex+1}.mp3`;
    masterSongName.innerText=songs[songIndex].songName;
    audioElement.currentTime=0;
    audioElement.play();
    gif.style.opacity=1;
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})    
document.getElementById('pre').addEventListener('click',()=>{
    if(songIndex<=9){
        songIndex=0;
    }
    else{
        songIndex -= 1;
    }
    audioElement.src = `song/${songIndex+1}.mp3`;
    masterSongName.innerText=songs[songIndex].songName;
    audioElement.currentTime=0;
    audioElement.play();
    gif.style.opacity=1;
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})   
