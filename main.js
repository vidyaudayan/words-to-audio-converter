
let audio = new SpeechSynthesisUtterance();
let voices = [];

window.speechSynthesis.onvoiceschanged = () => {
    voices = window.speechSynthesis.getVoices();
    audio.voice = voices[0];

    let voiceSelect = document.querySelector("select"); 

    voices.forEach((voice, i) => (voiceSelect.options[i] = new Option(voice.name, i)));
}

document.querySelector("button").addEventListener('click', () => {
    let voiceSelect = document.querySelector("select"); 
    audio.voice = voices[voiceSelect.value];
    audio.text = document.querySelector("textarea").value;
    window.speechSynthesis.speak(audio);
});

