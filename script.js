window.addEventListener("load", () => {
    const sounds = document.querySelectorAll(".sounds");
    const pads = document.querySelectorAll(".pads div");
    const visual = document.querySelector(".visual");
    const colors = [
        "#F08080",
        "#90EE90",
        "#87CEFA",
        "#9384E4",
        "#48D1CC",
        "#DDA0DD"
    ];

    pads.forEach((pad, index) => {
        pad.addEventListener("click", function(){
            sounds[index].currentTime = 0;
            sounds[index].play();

            createBubbles(index);
        });
    });

    const createBubbles = index => {
        const bubble = document.createElement("div");
        visual.appendChild(bubble);
        bubble.style.backgroundColor = colors[index];
        bubble.style.animation = 'jump 1s ease';
        bubble.addEventListener("animationend", function(){
            visual.removeChild(this);
        });
    };
});
