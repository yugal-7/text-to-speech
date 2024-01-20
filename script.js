const textInput = document.getElementById('text');
const speedInput = document.getElementById('speed');

const playButton = document.getElementById('play-button');
const pauseButton = document.getElementById('pause-button');
const stopButton = document.getElementById('stop-button');

playButton.addEventListener('click', () => {
    playText(textInput.value);
})

pauseButton.addEventListener('click', () => {
    pauseSpeech();
})

stopButton.addEventListener('click', () => {
    speechSynthesis.resume();
    speechSynthesis.cancel();
})
function playText(data){
    if(speechSynthesis.paused && speechSynthesis.speaking){
        return speechSynthesis.resume();
    }
    const utterence = new SpeechSynthesisUtterance(data);
    utterence.rate = speedInput.value || 1;
    utterence.addEventListener('end', ()=>{
        textInput.disabled = false;
    })
    textInput.disabled = true;
    speechSynthesis.speak(utterence);
}

function pauseSpeech(){
    if(speechSynthesis.speaking){
        speechSynthesis.pause();
    }
}

