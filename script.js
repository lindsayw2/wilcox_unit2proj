// import module
import { MusicTools } from './MusicTools.js';

// convert midi function
document.getElementById('midiToFreq').addEventListener('click', () => {
    const midiPitch = parseFloat(document.getElementById('midiInput').value);
    if (!isNaN(midiPitch)) {
        document.getElementById('freqResult').textContent = MusicTools.midiPitchToFrequency(midiPitch).toFixed(2);
    } else {
        alert('Please enter a valid MIDI pitch number.');
    }
});

// frequency conversion
document.getElementById('freqToMidi').addEventListener('click', () => {
    const frequency = parseFloat(document.getElementById('freqInput').value);
    if (!isNaN(frequency) && frequency > 0) {
        document.getElementById('midiResult').textContent = MusicTools.frequencyToMidiPitch(frequency).toFixed(2);
    } else {
        alert('Please enter a valid frequency number greater than 0.');
    }
});

// dBFS to linear amplitude
document.getElementById('dbfsToLinear').addEventListener('click', () => {
    const dbfs = parseFloat(document.getElementById('dbfsInput').value);
    if (!isNaN(dbfs)) {
        document.getElementById('linearResult').textContent = MusicTools.dbfsToLinearAmplitude(dbfs).toFixed(5);
    } else {
        alert('Please enter a valid dBFS value.');
    }
});

// convert linear amplitude to dBFS
document.getElementById('linearToDbfs').addEventListener('click', () => {
    const linear = parseFloat(document.getElementById('linearInput').value);
    if (!isNaN(linear) && linear > 0) {
        document.getElementById('dbfsResult').textContent = MusicTools.linearAmplitudeTodBFS(linear).toFixed(2);
    } else {
        alert('Please enter a valid linear amplitude greater than 0.');
    }
});

//list: import module, set up event listeners, retrieves input vallues, conversions, 