//Conexión con HTML (Seleccionar elementos)

const songForm = document.getElementById('song_form');
const playList = document.getElementById('play_list');

//Función para agregar canción a la lista
function addSong(songName, artistName, songUrl){
    const listSong = document.createElement('li');
    listSong.innerHTML = `
            <strong>${songName}</strong>
            - ${artistName}
            <a href="${songUrl}" target = "_blank" >Reproducción</a>
            <button class"delete-btn">Eliminar</button>
    `;
    //Agregar al HTML
    playList.appendChild(listSong)
}

//Manejo de envio de formularios (Eventos)

songForm.addEventListener('submit', (event) => {
    event.preventDefault();

    //Obtener los datos del formulario

    const songName = document.getElementById("song_name").value;
    const artistName = document.getElementById("artist_name").value;
    const songUrl = document.getElementById("url_song").value;

    addSong(songName, artistName, songUrl);

    songForm.reset();
})