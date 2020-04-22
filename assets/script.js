const barOne = document.getElementById("bar1")
const barTwo = document.getElementById("bar2")
const barThree = document.getElementById("bar3")
const barFour = document.getElementById("bar4")
const barFive = document.getElementById("bar5")

let synth = new Tone.PolySynth().toDestination()



// document.getElementById("play").addEventListener("click", function(){
//     synth.triggerAttackRelease('C4', 2, 0)   
// })



// Tone.Transport.stop()

barOne.addEventListener("click", function(){
    melodyOne()
})

barTwo.addEventListener("click", function(){
    melodyTwo()
})

barThree.addEventListener("click", function(){
    melodyThree()
    
})

barFour.addEventListener("click", function(){
    melodyFour()
    
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

function melodyThree() {
    Tone.start()
    Tone.Transport.start();
    const loopThree = new Tone.Loop(function(time) {
        //triggered every eighth note.
        console.log(time);
        //rest
        synth.triggerAttackRelease('E3', '8n', (time + 0.25))
        synth.triggerAttackRelease('F3', '8n', (time + .5))
        synth.triggerAttackRelease('G3', '8n', (time + .75))
        synth.triggerAttackRelease('A3', '8n', (time + 1))
        synth.triggerAttackRelease('C4', '8n', (time + 1.25))
        synth.triggerAttackRelease('A3', '16n', (time + 1.5))
        synth.triggerAttackRelease('G3', '16n', (time + 1.62))
        //rest
        synth.triggerAttackRelease('F3', '4n', (time + 2.25))
      }, 4).start(0);
}

function melodyFour() {
    Tone.start()
    Tone.Transport.start();
    const loopThree = new Tone.Loop(function(time) {
        //triggered every eighth note.
        console.log(time);
        //rest
        synth.triggerAttackRelease('E6', '8n', (time + 0.75))
        synth.triggerAttackRelease('G6', '8n', (time + 1))
        //rest
        synth.triggerAttackRelease('F6', '8n', (time + 2))
        synth.triggerAttackRelease('G6', '8n', (time + 2.25))
        //rest
        // synth.triggerAttackRelease('F6', '8n', (time + 2.25))
        // synth.triggerAttackRelease('G6', '8n', (time + 2.5))
        //rest
        //rest
      }, 4).start(0);
}
