

let synth = new Tone.Synth().toMaster()



document.getElementById("play").addEventListener("click", function(){
    synth.triggerAttackRelease('C4', 2, 0)   
})