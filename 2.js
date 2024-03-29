
const nav_bar_set = `
<a onclick="NavBar('Folder')" ><img class="nav-icon" src="img/folder.png" alt=""></a>
<a onclick="NavBar('Music')" ><img class="nav-icon" src="img/music.png" alt=""></a>
<a onclick="NavBar('Playlist')" ><img class="nav-icon" src="img/playlist.png" alt=""></a>
<a onclick="NavBar('AddMusic')" ><img class="nav-icon" src="img/add.png" alt=""></a>
`

function FullNav(icon){
    htm = `
    <div>
        <button id="nav-back" onclick="NavBack()" ><img src="img/navback.png" alt=""></button>
        <button id="nav-full-icon" onclick="NavFullDefault('folder')"><img src="${icon}" alt=""></button>
    </div>
    <div id="system">
    </div>
    `
    return htm
}

function NavBack(){
    const nav = document.getElementById("nav-bar")
    FullPlayer("on")
    nav.className = "nav-bar-off"
    nav.innerHTML = nav_bar_set
}

function NavFullDefault(type){
    if (type == "folder"){
        SetFolder()
        return
    }
}

function FullPlayer(type){
    if (type == "on"){
        const player = document.getElementById("player")
        const bar = document.getElementById("bar")
        player.style.width = "95vw"
        bar.style.width = "80vw"
        return
    }
    if (type == "off"){
        const player = document.getElementById("player")
        const bar = document.getElementById("bar")
        player.style.width = "80vw"
        bar.style.width = "70vw"
        return
    }
    
}

function NavBar(type){
    
    const nav = document.getElementById("nav-bar")
    if (type == "Folder"){
        FullPlayer("off")
        nav.className = "nav-bar-on"
        nav.innerHTML = FullNav("img/folder.png")
        SetFolder()
        return 
    }
    if (type == "Music"){
        FullPlayer("off")
        nav.className = "nav-bar-on"
        nav.innerHTML = FullNav("img/music.png")
        return 
    }
    if (type == "Playlist"){
        FullPlayer("off")
        nav.className = "nav-bar-on"
        nav.innerHTML = FullNav("img/playlist.png")
        return 
    }
    if (type == "AddMusic"){
        FullPlayer("off")
        nav.className = "nav-bar-on"
        nav.innerHTML = FullNav("img/add.png")
        return 
    }
    if (type == "NowPlaylist"){
        FullPlayer("off")
        nav.className = "nav-bar-on"
        nav.innerHTML = FullNav("img/nowplaylist.png")
        SetFolder()
        return 
    }


}


function Setting(){
alert("settings")
}