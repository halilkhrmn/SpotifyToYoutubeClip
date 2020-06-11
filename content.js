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
                    let button = `<a href="https://www.youtube.com/results?search_query=`+tracksList[i].artist+` `+tracksList[i].name+`" target="_blank" style="text-decoration: none;color: #fff; position: absolute;top: 17px;right: 160px !important;"><svg height="19pt" viewBox="0 -77 512.00213 512" width="19pt" xmlns="http://www.w3.org/2000/svg"><path d="m501.453125 56.09375c-5.902344-21.933594-23.195313-39.222656-45.125-45.128906-40.066406-10.964844-200.332031-10.964844-200.332031-10.964844s-160.261719 0-200.328125 10.546875c-21.507813 5.902344-39.222657 23.617187-45.125 45.546875-10.542969 40.0625-10.542969 123.148438-10.542969 123.148438s0 83.503906 10.542969 123.148437c5.90625 21.929687 23.195312 39.222656 45.128906 45.128906 40.484375 10.964844 200.328125 10.964844 200.328125 10.964844s160.261719 0 200.328125-10.546875c21.933594-5.902344 39.222656-23.195312 45.128906-45.125 10.542969-40.066406 10.542969-123.148438 10.542969-123.148438s.421875-83.507812-10.546875-123.570312zm0 0" fill="#f00"/><path d="m204.96875 256 133.269531-76.757812-133.269531-76.757813zm0 0" fill="#fff"/></svg></a>`;
                    elms[i].insertAdjacentHTML('afterbegin', button);
                }
            }
        }, 2000);
}
document.addEventListener("DOMSubtreeModified", function(e) {
    if(e.target.lastChild && e.target.lastChild != null){
        if(e.target.lastChild.classList){
            if(e.target.lastChild.classList.contains('react-contextmenu-wrapper')) setButtons();
        }
    }
});

setButtons();