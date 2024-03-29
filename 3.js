
function FolderItem(name,id){
    
    const item = `
    <li onclick="SetArtistMusic('${id}')">${name}</li>
    `
    return item
}

function SetFolder(){
    var folderlist = ""
    

    fetch('https://normvgmusic.pythonanywhere.com/api/get-artist')
    .then(response => response.json())
    .then(data => {
      
        data.forEach((item) => {
          var artist_id = item.id
          var artist_name = item.name
          
            // console.log(artist_name,artist_id)
            folderlist = folderlist+FolderItem(artist_name,artist_id)
          });
          const home = `<div id="folder-element"><ul >${folderlist}</ul></div>`
          document.getElementById("system").innerHTML = home
    })
    .catch(error => {
      console.log('There was a problem with the fetch operation:', error.message);
    });
    
}



function SetArtistMusic(id){
  console.log(id)
    var artistlist = ""

    fetch('https://normvgmusic.pythonanywhere.com/api/audio-by-artist?id='+id)
    .then(response => response.json()) 
    .then(data => {
      console.log(data[0]['id'])
        var data = data[0][data[0]['name']]
        
        data.forEach((item) => {
            
            artistlist = artistlist+`<li onclick="SetPlayerAudio('${item.id}')" title="${item.name}"><span>${item.name}</span><img  src="img/playingoff.png"  ></li>`
            
          });
        
        const home = `<div id="artist-element"> <ul > ${artistlist} </ul></div>`
        document.getElementById("system").innerHTML = home
          
    })
    .catch(error => {
      console.log('There was a problem with the fetch operation:', error.message);
    });
}


function SetPlayerAudio(id){
  document.getElementById("audio-art").src = "img/common.png"
  // fetch('https://normvgmusic.pythonanywhere.com/api/album-art?id='+id)
  fetch('https://normvgmusic.pythonanywhere.com/api/audio-data?id='+id)
    .then(response => response.json()) 
    .then(data => {
        var data = data
        data.forEach((item) => {
            console.log(item.id,item.name)
            document.getElementById("audio-title").innerText = item.name
            document.getElementById("audio-art").src = "https://normvgmusic.pythonanywhere.com"+item.art
            document.getElementById("play-full").innerText = "00:00"
            document.getElementById("music").src = "https://normvgmusic.pythonanywhere.com/api/audio?id="+id
            

            document.getElementById("music").onloadstart = function (){
              barNow.style.width = "0%"
              playmusic()
              document.getElementById("play-full").innerText = "00:00"
              document.getElementById("play").disabled = true
            }

            document.getElementById("music").oncanplay = function (){
              document.getElementById("play").className = "off"
              document.getElementById("play").disabled = false
              playmusic()
            }
          });
          
    })
    .catch(error => {
      console.log('There was a problem with the fetch operation:', error.message);
    });
  
    
}