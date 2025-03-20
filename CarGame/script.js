document.body.onclick = function () {
    let audio = document.createElement('audio');
    audio.setAttribute('src', 'sound.mp3');
    audio.loop = true;
    audio.play()
        .then(() => {
              play();
        })
        .catch(error => {
            console.error('Error playing audio:', error);
        });
    document.body.onclick = null; // Remove the event listener after playing
};
