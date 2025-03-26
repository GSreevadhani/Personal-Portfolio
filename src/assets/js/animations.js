document.addEventListener('DOMContentLoaded', () => {
    // Profile Dropdown
    const profileBtn = document.getElementById('profileBtn');
    const profileDropdown = document.getElementById('profileDropdown');

    profileBtn.addEventListener('click', () => {
        profileDropdown.classList.toggle('show');
    });

    document.addEventListener('click', (e) => {
        if (!profileBtn.contains(e.target) && !profileDropdown.contains(e.target)) {
            profileDropdown.classList.remove('show');
        }
    });

    // Typing Animation
    const phrases = [
        'I\'m a Developer',
        'I\'m a UI/UX Designer',
    ];
    
    let phraseIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    const typingSpeed = 100;
    const deleteSpeed = 50;
    const pauseEnd = 2000;

    function typeText() {
        const currentPhrase = phrases[phraseIndex];
        const typedTextElement = document.getElementById('typed-text');

        if (isDeleting) {
            charIndex--;
            typedTextElement.value = currentPhrase.substring(0, charIndex);
        } else {
            charIndex++;
            typedTextElement.value = currentPhrase.substring(0, charIndex);
        }

        if (!isDeleting && charIndex === currentPhrase.length) {
            isDeleting = true;
            setTimeout(typeText, pauseEnd);
            return;
        }

        if (isDeleting && charIndex === 0) {
            isDeleting = false;
            phraseIndex = (phraseIndex + 1) % phrases.length;
        }

        setTimeout(typeText, isDeleting ? deleteSpeed : typingSpeed);
    }

    typeText();
});