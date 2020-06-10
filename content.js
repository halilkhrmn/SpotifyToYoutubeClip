
function setButtons() {
    setTimeout(function() {
        let tracks = document.querySelectorAll('.tracklist div.react-contextmenu-wrapper .tracklist-col.name .track-name-wrapper')
        let tracksList = [];
        for(let i = 0;i<tracks.length;i++){
            let artistname = "";
            let songname = "";
            if(tracks[i].querySelector('.tracklist-name') !== undefined){
                songname = tracks[i].querySelector('.tracklist-name').innerText;
            }
            if(tracks[i].querySelector('.tracklist-row__artist-name-link') !== undefined){
                artistname = tracks[i].querySelector('.tracklist-row__artist-name-link').innerText;
            }

            tracksList.push({'name':songname,'artist':artistname})
        }
        let elms = document.querySelectorAll('.tracklist div.react-contextmenu-wrapper .tracklist-col.more .tracklist-top-align')
        for(let i = 0;i<elms.length;i++){
            if(elms[i].childNodes.length === 1){
                let button = `<a href="https://www.youtube.com/results?search_query=`+tracksList[i].artist+` `+tracksList[i].name+`" target="_blank" style="text-decoration: none;color: #fff; position: absolute;top: 17px;right: 160px !important;">YT</a>`;
                elms[i].insertAdjacentHTML('afterbegin', button);
            }
        }
    }, 2000);
}

setButtons();