




document.addEventListener('DOMContentLoaded', function() {
    let backgroundMusic = document.getElementById('backgroundMusic');
    backgroundMusic.volume = 0.5;

    document.getElementById('flyButton').addEventListener('click', function() {
        const butterfly = document.querySelector('.Butterfly');
        butterfly.classList.add('fly');

        // Play music on user interaction to bypass autoplay restrictions
        backgroundMusic.play();

        setTimeout(function() {
            window.location.href = 'back.html'; // Replace 'nextpage.html' with the actual URL
        }, 2000); 
    });
});

