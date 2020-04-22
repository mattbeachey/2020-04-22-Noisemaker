const barOne = document.getElementById("bar1")
const barTwo = document.getElementById("bar2")
const barThree = document.getElementById("bar3")
const barFour = document.getElementById("bar4")
const barFive = document.getElementById("bar5")

let synth = new Tone.PolySynth().toDestination()



// document.getElementById("play").addEventListener("click", function(){
//     synth.triggerAttackRelease('C4', 2, 0)   
// })





barOne.addEventListener("click", function(){
    melodyOne()
})

barTwo.addEventListener("click", function(){
    melodyTwo()
})

barThree.addEventListener("click", function(){
    Tone.Transport.stop()
})

function melodyOne() {
    Tone.start()
    Tone.Transport.start();
    const loopOne = new Tone.Loop(function(time) {
        //triggered every eighth note.
        console.log(time);
        synth.triggerAttackRelease('C4', '4n', time)
        synth.triggerAttackRelease('G4', '4n', (time + 0.5))
        // // //rest
        synth.triggerAttackRelease('D4', Tone.Time('4n'), (time + 1.5))
        // // rest
        synth.triggerAttackRelease('A4', '4n', (time + 2.5))
        // // rest
        // // rest
      }, 4).start(0);
}

function melodyTwo() {
    Tone.start()
    Tone.Transport.start();
    const loopTwo = new Tone.Loop(function(time) {
        //triggered every eighth note.
        console.log(time);
        synth.triggerAttackRelease('C6', '4n', time)
        synth.triggerAttackRelease('A5', '4n', (time + 0.5))
        synth.triggerAttackRelease('G5', '4n', (time + 1))
        synth.triggerAttackRelease('A5', Tone.Time('4n'), (time + 1.5))
        // // rest
        synth.triggerAttackRelease('D6', '4n', (time + 2.5))
        // // rest
        synth.triggerAttackRelease('E6', '4n', (time + 3.5))
      }, 4).start(0);
}

