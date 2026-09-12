/* =========================================
   THE SISTER SHOW
   JAVASCRIPT
========================================= */


// =========================================
// START EXPERIENCE
// =========================================

function startExperience() {

    document
        .getElementById("episodes")
        .scrollIntoView({
            behavior: "smooth"
        });

}


// =========================================
// EPISODE DATA
// =========================================

const episodes = {

    1: {
        title: "The Origin Story",

        text:
        "Every legendary story has a beginning. Ours started with two girls who had absolutely no idea how many memories they were about to create.",

        memory:
        "From the very first day I came into this world, I opened my eyes and found you there. You were there from the beginning — my first memories, my childhood, and a part of almost every chapter of my life.",
memoryNumber: "MEMORY #001",

    quote: '"We had no idea..."',

    note:
    "And somehow, years later, here we are.",

        image: "ep1.png"
    },


    2: {
    title: "Her Era",

    text:
    "Classy when she wants to be, sporty when she feels like it, and effortlessly funny all the time. She loves cats, discovering new places, meeting people and, apparently, spending money like it's a competitive sport.",

    memory:
    "She likes everything to be just right — the outfit, the plans, the little details, everything. She can go from classy girl to sporty girl in seconds, somehow make everyone laugh, fall in love with every cat she sees, and turn a simple outing into a whole adventure. And yes... her bank account has definitely witnessed some things.",
memoryNumber: "MEMORY #002",

    quote: ' "Her rules, her era." ',

    note:
    "Good taste, big personality, and always somewhere to go.",

    image: "her era.png"
},


    3: {
        title: "Our Lore",

        text:
        "There are memories that only make sense to us. Random jokes, weird conversations, impossible situations and moments that somehow became our favorite memories.",

        memory:
        "Some memories would sound completely ridiculous if we tried to explain them to anyone else. But that's the thing about us — we have our own little world, filled with jokes, stories and moments that only we understand.",
        

images: [
        "ep3-1.png",
        "ep3-2.png",
        "ep3-3.png",
        "ep3-4.png",
        "ep3-5.png",
        "ep3-6.png"
    ]    },


    4: {
    title: "Camera Roll",
    text:
    "A collection of photographic evidence proving that we actually had a lot of fun, looked cute sometimes, and definitely took way too many pictures.",

    memory:
    "Our camera roll is basically a historical archive at this point. Hundreds of pictures, random selfies, blurry photos, screenshots and moments we absolutely had to capture.",

    memoryNumber: "CAMERA ROLL",
    quote: '"Proof that we were there."',
    note:
    "Some pictures were necessary. Most were absolutely not.",

    images: [
        "ep4-1.png",
        "ep4-2.png",
        "ep4-3.png",
        "ep4-4.png",
        "ep4-5.png",
        "ep4-6.png",
        "ep4-7.png",

    "ep4-8.png",
    "ep4-9.png",
    "ep4-10.png",

    "ep4-11.png",
    "ep4-12.png",
    "ep4-13.png",
    "ep4-14.png"
    ]
},

    5: {
        title: "Awards Night",

        text:
        "After years of research, observation and absolutely unbiased judging, the results are finally in...",

        memory:
        "After years of watching you steal my clothes, take forever to get ready, yell for absolutely no reason and somehow still be adorable... the jury has reached its final decision.",

        image: "ep5.png"
    },


    6: {
        title: "A Letter To You",

        text:
        "Okay. Enough jokes. This episode is for the part that matters most: telling you how much you mean to me.",

        memory:
        "Behind all the jokes and all the chaos, there is something I never want you to forget: I am so grateful that I got to grow up with you by my side.",

        image: "ep6.png"
    }

};


let currentEpisode = 1;


// =========================================
// OPEN EPISODE
// =========================================

function openEpisode(number) {

    currentEpisode = number;

    const episode = episodes[number];


    // =========================================
    // CHANGE EPISODE NUMBER
    // =========================================

    document.getElementById("episodeNumber").textContent =
        String(number).padStart(2, "0");


    // =========================================
    // CHANGE TITLE
    // =========================================

    document.getElementById("episodeTitle").textContent =
        episode.title;


    // =========================================
    // CHANGE MAIN TEXT
    // =========================================

    document.getElementById("episodeText").textContent =
        episode.text;


    // =========================================
    // CHANGE MEMORY TEXT
    // =========================================

    document.getElementById("episodeMemoryText").textContent =
        episode.memory;
        document.getElementById("memoryNumber").textContent =
    episode.memoryNumber;

document.getElementById("memoryQuote").textContent =
    episode.quote;

document.getElementById("memoryNoteText").textContent =
    episode.note;



    // =========================================
    // CHANGE PHOTO
    // =========================================

    const singlePhoto =
    document.getElementById("singlePhoto");

const gallery =
    document.getElementById("episodeGallery");

if (episode.images) {

    singlePhoto.style.display = "none";
    gallery.style.display = "grid";

    gallery.innerHTML = "";

    episode.images.forEach((image, index) => {

        const photo = document.createElement("div");

        photo.className = "gallery-photo";

        // Episode 4 :
        // les 4 dernières photos vont à gauche
        // les 6 premières restent dans la galerie principale
        if (number === 4) {

    // 6 grandes photos au centre
    if (index < 6) {
        photo.classList.add("main-photo");
    }

    // 4 petites photos à gauche
    else if (index >= 6 && index < 10) {
        photo.classList.add("left-photo");
    }

    // 4 petites photos à droite
    else if (index >= 10) {
        photo.classList.add("right-photo");
    }

}

        photo.innerHTML = `
            <img src="${image}" alt="Memory ${index + 1}">
        `;

        gallery.appendChild(photo);

    });

} else {

    singlePhoto.style.display = "block";
    gallery.style.display = "none";

    document.getElementById("episodeImage").src =
        episode.image;
}


    // =========================================
    // CHANGE DESIGN
    // =========================================

    const story = document.getElementById("story");

    story.classList.remove(
        "episode-1",
        "episode-2",
        "episode-3",
        "episode-4",
        "episode-5",
        "episode-6"
    );

    story.classList.add("episode-" + number);


    // =========================================
    // SCROLL
    // =========================================

    story.scrollIntoView({
        behavior: "smooth"
    });

}


// =========================================
// NEXT EPISODE
// =========================================

function nextEpisode() {

    currentEpisode++;

    // Après l'épisode 6 → aller à la lettre
    if (currentEpisode > 6) {

        document
            .querySelector(".letter")
            .scrollIntoView({
                behavior: "smooth"
            });

        return;
    }

    openEpisode(currentEpisode);
}





// =========================================
// BIRTHDAY CELEBRATION
// =========================================

// =========================================
// BIRTHDAY CELEBRATION
// =========================================




/* =========================================
   MAKE A WISH — BUTTON GAME 🎀
========================================= */

let wishClicks = 0;

function wishButtonClick() {

    const button = document.getElementById("wishButton");

    wishClicks++;

    if (wishClicks === 1) {

        button.style.transform = "translateX(-45px)";

    }

    else if (wishClicks === 2) {

        button.style.transform = "translate(-45px, -35px)";

    }

    else if (wishClicks === 3) {

        button.style.transform = "translateX(55px)";

    }

    else if (wishClicks === 4) {

        button.style.transform = "translate(35px, 25px)";

    }

    else {

        // Le bouton revient à sa place
        button.style.transform = "translate(0, 0)";

        // Afficher la vidéo
        showFunnyVideo();
    }
}

function showFunnyVideo() {

    const videoBox = document.getElementById("funnyVideo");
    const video = document.getElementById("celebrateVideo");
    const button = document.getElementById("wishButton");

    // Cacher le bouton pendant la vidéo
    button.style.display = "none";

    // Afficher la vidéo
    videoBox.style.display = "block";

    // Lancer automatiquement
    video.currentTime = 0;
    video.play();

    // Quand la vidéo est terminée
    video.onended = function() {

        videoBox.style.display = "none";

        // Faire apparaître à nouveau le bouton
        button.style.display = "inline-block";

        // Et maintenant seulement...
        celebrate();
    };
}
function celebrate() {

    // 🎵 PLAY BIRTHDAY AUDIO
    const audio = document.getElementById("birthdayAudio");

    if (audio) {

        // Recommence depuis le début
        audio.currentTime = 0;

        // Volume doux
        audio.volume = 0.45;

        // Lance la musique
        audio.play();
    }


    // =========================================
    // 🎉 CONFETTI
    // =========================================

    const container =
        document.getElementById("confetti");

    container.innerHTML = "";

    const symbols = [
        "♡",
        "✦",
        "🎀",
        "✧",
        "♥",
        "✨",
        "⋆"
    ];


    for (let i = 0; i < 70; i++) {

        const piece =
            document.createElement("span");

        piece.innerHTML =
            symbols[
                Math.floor(
                    Math.random() * symbols.length
                )
            ];


        piece.style.left =
            Math.random() * 100 + "%";


        piece.style.animationDelay =
            Math.random() * 2 + "s";


        piece.style.animationDuration =
            3 + Math.random() * 4 + "s";


        container.appendChild(piece);

    }


    // =========================================
    // 💗 FINAL MESSAGE
    // =========================================

    document.getElementById("finalMessage").textContent =
        "✦ your birthday wish is officially loading... ♡ ✦";

}




// =========================================
// REVEAL ANIMATION ON SCROLL
// =========================================

const observer =
    new IntersectionObserver(

        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.style.opacity = "1";

                    entry.target.style.transform =
                        "translateY(0)";

                }

            });

        },

        {
            threshold: 0.15
        }

    );


document
    .querySelectorAll(
        ".episode-card, .award, .file-card, .letter-paper"
    )
    .forEach(element => {

        element.style.opacity = "0";

        element.style.transform =
            "translateY(30px)";

        element.style.transition =
            "opacity .8s ease, transform .8s ease";

        observer.observe(element);

    });

  
    
    /* =========================================
   MISSION: FOLLOW ME
========================================= */

let gameStep = 0;

function startGame() {

    gameStep = 1;

    document.getElementById("gameContent").style.display = "block";

    showGameStep();

    document.getElementById("gameContent").scrollIntoView({
        behavior: "smooth"
    });
}


function showGameStep() {

    const step = document.getElementById("gameStep");

    /* STEP 1 */

    if (gameStep === 1) {

        step.innerHTML = `
            <p class="game-number">01 / 05</p>

            <h3>First question 👀</h3>

            <p>
                Who is obviously the favorite sister?
            </p>

            <div class="game-buttons">

                <button onclick="nextGameStep()">
                    ME
                </button>

                <button onclick="nextGameStep()">
                    YOU
                </button>

                <button onclick="nextGameStep()">
                    MOM
                </button>

            </div>
        `;
    }


    /* STEP 2 */

    else if (gameStep === 2) {

        step.innerHTML = `
            <p class="game-number">02 / 05</p>

            <h3>Hmm... suspicious 🕵🏻‍♀️</h3>

            <p>
                One of these buttons is lying.
                <br>
                Find the right one.
            </p>

            <div class="game-buttons">

                <button onclick="wrongAnswer(this)">
                    NOPE
                </button>

                <button onclick="wrongAnswer(this)">
                    NOT HERE
                </button>

                <button onclick="nextGameStep()">
                    TRY ME
                </button>

                <button onclick="wrongAnswer(this)">
                    DEFINITELY NOT
                </button>

            </div>

            <p id="gameFeedback"></p>
        `;
    }


    /* STEP 3 */

    else if (gameStep === 3) {

        step.innerHTML = `
            <p class="game-number">03 / 05</p>

            <h3>Don't click this button. 🚨</h3>

            <p>
                Seriously.
                <br>
                Don't.
            </p>

            <button
                class="danger-button"
                onclick="clickedBadButton()"
            >
                DON'T CLICK ME
            </button>

            <p id="gameFeedback"></p>
        `;
    }


    /* STEP 4 */

    else if (gameStep === 4) {

        step.innerHTML = `
            <p class="game-number">04 / 05</p>

            <h3>Almost there 🎀</h3>

            <p>
                Collect the words.
            </p>

            <div class="word-buttons">

                <button onclick="collectWord(this, 'YOU')">
                    YOU
                </button>

                <button onclick="collectWord(this, 'ARE')">
                    ARE
                </button>

                <button onclick="collectWord(this, 'MY')">
                    MY
                </button>

                <button onclick="collectWord(this, 'FAVORITE')">
                    FAVORITE
                </button>

                <button onclick="collectWord(this, 'PERSON')">
                    PERSON
                </button>

            </div>

            <p class="collected-words" id="collectedWords">
                _ _ _ _ _
            </p>

        `;
    }


    /* STEP 5 */

    else if (gameStep === 5) {

        step.innerHTML = `
            <p class="game-number">05 / 05</p>

            <h3>MISSION COMPLETE ✦</h3>

            <p class="final-game-message">
                YOU ARE MY FAVORITE PERSON ♡
            </p>

            <p>
                But that's not your real prize...
            </p>

            <button
                class="game-final-button"
                onclick="finishGame()"
            >
                OPEN YOUR SURPRISE 🎁
            </button>
        `;
    }
}


/* NEXT STEP */

function nextGameStep() {

    gameStep++;

    showGameStep();
}


/* WRONG ANSWER */

function wrongAnswer(button) {

    button.textContent = "NOPE 😭";

    button.style.transform = "translateX(8px)";

    const feedback =
        document.getElementById("gameFeedback");

    if (feedback) {
        feedback.textContent =
            "Nice try... but no 😂";
    }
}


/* BAD BUTTON */

function clickedBadButton() {

    const feedback =
        document.getElementById("gameFeedback");

    feedback.textContent =
        "I LITERALLY TOLD YOU NOT TO 😭😂";

    setTimeout(() => {

        gameStep = 4;

        showGameStep();

    }, 1200);
}


/* COLLECT WORDS */

let collectedWords = [];

function collectWord(button, word) {

    if (button.disabled) {
        return;
    }

    button.disabled = true;

    collectedWords.push(word);

    document.getElementById("collectedWords").textContent =
        collectedWords.join(" ");

    if (collectedWords.length === 5) {

        setTimeout(() => {

            collectedWords = [];

            gameStep = 5;

            showGameStep();

        }, 1000);
    }
}


/* FINAL SURPRISE */

function finishGame() {
    const step = document.getElementById("gameStep");

    step.innerHTML = `
        <p class="game-number">🎀 SURPRISE 🎀</p>

        <h3>You made it!</h3>

        <p class="final-game-message">
            No matter how annoying you are...
            <br>
            you're still my favorite person. ♡
        </p>

        <div class="game-hearts">
            ♡ ✦ ♡ ✦ ♡
        </div>

        <button
            class="game-final-button"
            onclick="document.querySelector('.finale').scrollIntoView({behavior:'smooth'})"
        >
            GO TO YOUR SURPRISE 🎂
        </button>
    `;
}

