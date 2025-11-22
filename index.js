document.addEventListener("click", () => {
    const sound = new Audio("sound.mp3");
    sound.play();
}, { once: true });

function startSequence() {
    const scene = document.getElementById('scene');
    const strip = document.getElementById('tearStrip');
    const envelope = document.getElementById('envelopeBody');
    const letterAnchor = document.querySelector('.letter-anchor');

    // 1. Rip Strip
    strip.classList.add('rip-animation');

    // 2. Slide Envelope Left
    setTimeout(() => {
        envelope.classList.add('slide-left');
    }, 1000);

    // 3. Open Top Flap (Cover) UP
    setTimeout(() => {
        letterAnchor.classList.add('open-top');
    }, 2600);

    // 4. Open Bottom Flap (Inner) DOWN
    setTimeout(() => {
        letterAnchor.classList.add('open-bottom');
    }, 4600);

    // 5. Zoom
    setTimeout(() => {
        scene.classList.add('zoomed-in');
    }, 5100);

}
