
var music = document.getElementById("music")
var barFull = document.getElementById("bar-full")
const barNow = document.getElementById("bar-now")
var loop = document.getElementById("loop")


function formatTime(seconds) {
    if (isNaN(seconds) || seconds < 0) {
        return "Invalid input";
    }

    let minutes = Math.floor(seconds / 60);
    let remainingSeconds = seconds % 60;

    return `${minutes}:${Math.floor(remainingSeconds)}`;
}



music.ontimeupdate = function (e){
    document.getElementById("play-full").innerText = formatTime(music.duration) 
    document.getElementById("play-now").innerText = formatTime( music.currentTime)
    barNow.style.width = Math.floor(music.currentTime*100/music.duration)+"%";
    
}

barFull.onclick = function(e){
    
    music.currentTime = (e.offsetX/barFull.offsetWidth)*music.duration
}

music.onended = function(e){
    

        music.currentTime = 0
        var play_icon = document.getElementById("play-ico")
            
        music.pause()
        play_icon.src = "img/play.png"
        play.className = "off"    

    
}

function playmusic(){
    var play = document.getElementById("play")
    if (play.className == "on"){
        var play_icon = document.getElementById("play-ico")
        
        music.pause()
        play_icon.src = "img/play.png"
        play.className = "off"
        return
    }
    if (play.className == "off"){
        var play_icon = document.getElementById("play-ico")
        
        play_icon.src = "img/pause.png"
        play.className = "on"
        music.play()
        return
    }
}

function loopmusic(){
    
    if (loop.className == "on"){
        var loop_icon = document.getElementById("loop-ico")
        
        music.loop = false
        loop_icon.src = "img/loopoff.png"
        loop.className = "off"
        return
    }
    if (loop.className == "off"){
        var loop_icon = document.getElementById("loop-ico")
        
        music.loop = true
        loop_icon.src = "img/loopon.png"
        loop.className = "on"
        return
    }
}

function shuffmusic(){
    var shuffle = document.getElementById("shuff")
    if (shuffle.className == "on"){
        var shuffle_icon = document.getElementById("shuff-ico")
        
        
        shuffle_icon.src = "img/shuffoff.png"
        shuffle.className = "off"
        return
    }
    if (shuffle.className == "off"){
        var shuffle_icon = document.getElementById("shuff-ico")
        
        
        shuffle_icon.src = "img/shuffon.png"
        shuffle.className = "on"
        return
    }
}