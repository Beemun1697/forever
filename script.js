document.addEventListener('DOMContentLoaded', function() {
    // Elements
    const openingScreen = document.getElementById('opening-screen');
    const heartScreen = document.getElementById('heart-screen');
    const messageScreen = document.getElementById('message-screen');
    const surpriseScreen = document.getElementById('surprise-screen');
    const seeHeartBtn = document.getElementById('see-heart-btn');
    const surpriseBtn = document.getElementById('surprise-btn');
    const loveMessage = document.getElementById('love-message');

    // Create twinkling stars
    function createStars() {
        const starsBackground = document.querySelector('.stars-background');
        for (let i = 0; i < 50; i++) {
            const star = document.createElement('div');
            star.className = 'star';
            star.style.width = Math.random() * 3 + 1 + 'px';
            star.style.height = star.style.width;
            star.style.left = Math.random() * 100 + '%';
            star.style.top = Math.random() * 100 + '%';
            star.style.animationDelay = Math.random() * 2 + 's';
            starsBackground.appendChild(star);
        }
    }

    createStars();

    // Mouse trail hearts
    document.addEventListener('mousemove', function(e) {
        const trailHeart = document.createElement('div');
        trailHeart.innerHTML = '💖';
        trailHeart.style.position = 'fixed';
        trailHeart.style.left = e.clientX + 'px';
        trailHeart.style.top = e.clientY + 'px';
        trailHeart.style.fontSize = '20px';
        trailHeart.style.pointerEvents = 'none';
        trailHeart.style.zIndex = '1000';
        trailHeart.style.animation = 'fadeOut 1s ease-out forwards';
        document.body.appendChild(trailHeart);
        setTimeout(() => {
            trailHeart.remove();
        }, 1000);
    });

    // Create floating hearts for background
    function createFloatingHearts() {
        const heartsBackground = document.querySelector('.hearts-background');
        for (let i = 0; i < 20; i++) {
            const heart = document.createElement('div');
            heart.className = 'heart';
            heart.innerHTML = '❤️';
            heart.style.left = Math.random() * 100 + '%';
            heart.style.animationDelay = Math.random() * 10 + 's';
            heartsBackground.appendChild(heart);
        }
    }

    createFloatingHearts();

    // Opening screen with initializing message
    let initMessages = [
        "Initializing Love Engine...",
        "Loading feelings...",
        "Searching for the most beautiful girl...",
        "Result found: Marylyn ❤️"
    ];
    let initIndex = 0;

    function showInitMessage() {
        if (initIndex < initMessages.length) {
            document.querySelector('.glowing-text').textContent = initMessages[initIndex];
            initIndex++;
            setTimeout(showInitMessage, 1500);
        } else {
            document.querySelector('.glowing-text').textContent = "Marylyn, this is something special just for you ❤️";
            seeHeartBtn.style.display = 'block';
        }
    }

    seeHeartBtn.style.display = 'none';
    showInitMessage();

    // Button clicks
    seeHeartBtn.addEventListener('click', function() {
        openingScreen.classList.remove('active');
        heartScreen.classList.add('active');
        setTimeout(() => {
            heartScreen.classList.remove('active');
            messageScreen.classList.add('active');
            typeMessage();
        }, 3000);
    });

    // Click on heart screen to burst hearts
    heartScreen.addEventListener('click', function(e) {
        for (let i = 0; i < 10; i++) {
            const burstHeart = document.createElement('div');
            burstHeart.innerHTML = '💕';
            burstHeart.style.position = 'absolute';
            burstHeart.style.left = e.clientX + 'px';
            burstHeart.style.top = e.clientY + 'px';
            burstHeart.style.fontSize = '30px';
            burstHeart.style.pointerEvents = 'none';
            burstHeart.style.animation = 'burst 1s ease-out forwards';
            document.body.appendChild(burstHeart);
            setTimeout(() => {
                burstHeart.remove();
            }, 1000);
        }
    });

    surpriseBtn.addEventListener('click', function() {
        messageScreen.classList.remove('active');
        surpriseScreen.classList.add('active');
        createHeartsExplosion();
    });

    // Typing animation for love message
    const fullMessage = `Marylyn,
Out of all the people in the world,
my heart chose you.
You make my days brighter and my life better.
This small program is just my way of saying…
I truly care about you.`;

    function typeMessage() {
        let index = 0;
        loveMessage.textContent = '';
        const interval = setInterval(() => {
            if (index < fullMessage.length) {
                loveMessage.textContent += fullMessage[index];
                index++;
            } else {
                clearInterval(interval);
                surpriseBtn.style.display = 'block';
            }
        }, 50);
    }

    surpriseBtn.style.display = 'none';

    // Hearts explosion
    function createHeartsExplosion() {
        const heartsExplosion = document.querySelector('.hearts-explosion');
        for (let i = 0; i < 50; i++) {
            const heart = document.createElement('div');
            heart.className = 'exploding-heart';
            heart.innerHTML = '❤️';
            heart.style.left = Math.random() * 100 + '%';
            heart.style.top = Math.random() * 100 + '%';
            heart.style.animationDelay = Math.random() * 2 + 's';
            heartsExplosion.appendChild(heart);
        }
    }
});