// Select Elements
const poseButton = document.getElementById("poseButton");
const movingImage = document.getElementById("movingImage");
const memeImage = document.getElementById("memeImage");
const memeMusic = document.getElementById("memeMusic");

// Get Window Size for Bouncing Effect
const maxX = window.innerWidth - 200; // Adjusted for bigger image
const maxY = window.innerHeight - 200; // Adjusted for bigger image

// 🔥 Strike a Pose Button Click Event
poseButton.addEventListener("click", () => {
    console.log("🔥 Pose Button Clicked!");

    // 🎶 Play Sassy Music
    memeMusic.currentTime = 0;
    memeMusic.play();

    // 🎭 Show Meme Image (Bouncing in Place)
    gsap.to(memeImage, {
        duration: 0.6,
        opacity: 1,
        scale: 1.5,
        rotation: 10,
        y: -30,
        ease: "elastic.out(1, 0.5)",
        repeat: -1,
        yoyo: true
    });

    // 🚀 Remove Button After Clicking
    gsap.to(poseButton, {
        duration: 0.4,
        opacity: 0,
        scale: 0,
        onComplete: () => poseButton.remove() // Removes button after animation
    });

    // 🌈 Start Flashing Colors
    flashColors();

    // 🎬 Show & Move the Image like a DVD Logo
    showAndMoveImage();
});

// 🌈 Flashing Background Colors Function
function flashColors() {
    const colors = ["hotpink", "cyan", "yellow", "lime", "purple"];
    let i = 0;
    setInterval(() => {
        document.body.style.background = colors[i % colors.length];
        memeImage.style.borderColor = colors[i % colors.length];
        memeImage.style.boxShadow = `0 0 40px ${colors[i % colors.length]}`;
        i++;
    }, 150); // Faster Flashing
}

// 🎬 DVD Logo Bounce Effect
function showAndMoveImage() {
    movingImage.style.opacity = "1"; // Make it visible

    let xSpeed = 5; // Speed in X direction
    let ySpeed = 5; // Speed in Y direction
    let posX = Math.random() * maxX; // Random start X
    let posY = Math.random() * maxY; // Random start Y

    function bounce() {
        posX += xSpeed;
        posY += ySpeed;

        // Reverse direction if hitting the screen edges
        if (posX <= 0 || posX >= maxX) xSpeed *= -1;
        if (posY <= 0 || posY >= maxY) ySpeed *= -1;

        gsap.to(movingImage, {
            x: posX,
            y: posY,
            duration: 0.03, // VERY FAST MOVEMENT (True DVD Bounce)
            onComplete: bounce // Keep bouncing
        });
    }

    bounce(); // Start bouncing
}