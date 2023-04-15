document.addEventListener('DOMContentLoaded', () => {
    const inputFile = document.getElementById('inputFile');
    const video = document.getElementById('video');
    const loadFileButton = document.getElementById('loadFile');
    const playButton = document.getElementById('play');
    const stopButton = document.getElementById('stop');
    const subirvolumenButton = document.getElementById('subirvolumen');
    const bajarvolumenButton = document.getElementById('bajarvolumen');
    const loading = document.getElementById('loading');

    loadFileButton.addEventListener('click', () => {
        inputFile.click();
    });

//Punto 2: asegurar que solo se carguen archivos de video

    inputFile.addEventListener('cambio', (event) => {
        const file = event.target.files[0];
        if (file.type.startsWith('video/')) {
            const fileURL = URL.createObjectURL(file);
            video.src = fileURL;
            loading.classList.remove('hidden');
        } else {
            alert('Archivo inválido, seleccione un archivo correcto.');
        }
    });

    video.addEventListener('loadeddata', () => {
        loading.classList.add('hidden');
    });

    playButton.addEventListener('click', () => {
        video.play();
    });

    stopButton.addEventListener('click', () => {
        video.pause();
        video.currentTime = 0;
    });

    subirvolumenButton.addEventListener('click', () => {
        video.volume = Math.min(video.volume + 0.1, 1);
    });

    bajarvolumenButton.addEventListener('click', () => {
        video.volume = Math.max(video.volume - 0.1, 0);
    });
});
