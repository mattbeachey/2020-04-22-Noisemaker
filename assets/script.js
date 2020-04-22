const barOne = document.getElementById("bar1")
const barTwo = document.getElementById("bar2")
const barThree = document.getElementById("bar3")
const barFour = document.getElementById("bar4")
const barFive = document.getElementById("bar5")

let synth = new Tone.Synth().toDestination()



// document.getElementById("play").addEventListener("click", function(){
//     synth.triggerAttackRelease('C4', 2, 0)   
// })

const loop = new Tone.Loop(function(time) {
    //triggered every eighth note.
    console.log(time);
    synth.triggerAttackRelease("C2", "2n");
    synth.triggerAttackRelease("D2", "2n", "2n");
  }, "2n").start(0);



barOne.addEventListener("click", function(){
    Tone.start()
    Tone.Transport.start();
    // melodyOne()


})

function melodyOne() {
    var loop = new Tone.Loop(function(time){
        //triggered every eighth note. 
        console.log(time);
        synth.triggerAttackRelease('C4', '4n', '4n')
        // synth.triggerAttackRelease('G4', '4n', (time + 0.5))
        // // //rest
        // synth.triggerAttackRelease('D4', Tone.Time('4n'), (time + 1.5))
        // // rest
        // synth.triggerAttackRelease('A4', '4n', (time + 2.5))
        // // rest
        // // rest
    }, "8n").start(0);

}

// synth.triggerAttackRelease('C4', '4n', '8n')
// synth.triggerAttackRelease('E4', '8n', Tone.Time('4n') + Tone.Time('8n'))
// synth.triggerAttackRelease('G4', '16n', '2n')
// synth.triggerAttackRelease('B4', '16n', Tone.Time('2n') + Tone.Time('8t'))
// synth.triggerAttackRelease('G4', '16', Tone.Time('2n') + Tone.Time('8t')*2)
// synth.triggerAttackRelease('E4', '2n', '0:3')