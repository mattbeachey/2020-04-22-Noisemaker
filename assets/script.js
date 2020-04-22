const barOne = document.getElementById("bar1")
const barTwo = document.getElementById("bar2")
const barThree = document.getElementById("bar3")
const barFour = document.getElementById("bar4")
const barFive = document.getElementById("bar5")

let synth = new Tone.Synth().toMaster()



// document.getElementById("play").addEventListener("click", function(){
//     synth.triggerAttackRelease('C4', 2, 0)   
// })

barOne.addEventListener("click", function(){
    setInterval(()=>{
        melodyOne();
    }, 4);
})

function melodyOne(){
    synth.triggerAttackRelease('C4', '4n', 0)  
    synth.triggerAttackRelease('G4', '4n', 0.5)  
    // //rest
    synth.triggerAttackRelease('D4', Tone.Time('4n'), 1.5) 
    // rest
    synth.triggerAttackRelease('A4', '4n', 2.5)  
    // rest
    // rest
}

// synth.triggerAttackRelease('C4', '4n', '8n')
// synth.triggerAttackRelease('E4', '8n', Tone.Time('4n') + Tone.Time('8n'))
// synth.triggerAttackRelease('G4', '16n', '2n')
// synth.triggerAttackRelease('B4', '16n', Tone.Time('2n') + Tone.Time('8t'))
// synth.triggerAttackRelease('G4', '16', Tone.Time('2n') + Tone.Time('8t')*2)
// synth.triggerAttackRelease('E4', '2n', '0:3')