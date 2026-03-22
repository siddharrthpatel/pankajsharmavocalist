function copyEmail() {
    navigator.clipboard.writeText("vocalistpankajsharma@gmail.com");
    const msg = document.getElementById('copy-msg');
    msg.style.display = "inline";
    setTimeout(() => { msg.style.display = "none"; }, 2000);
}

function toggleMenu() {
    document.getElementById('nav-menu').classList.toggle('active');
    document.getElementById('menu-icon').classList.toggle('fa-bars');
    document.getElementById('menu-icon').classList.toggle('fa-xmark');
}

document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', () => {
        document.getElementById('nav-menu').classList.remove('active');
        document.getElementById('menu-icon').classList.replace('fa-xmark', 'fa-bars');
    });
});

// Floating Buttons Logic
const floatingHome = document.getElementById('floatingHome');
const floatingPhone = document.getElementById('floatingPhone');

window.addEventListener('scroll', () => {
    if (window.scrollY > 400) {
        floatingHome.classList.add('show');
        floatingPhone.classList.add('show');
    } else {
        floatingHome.classList.remove('show');
        floatingPhone.classList.remove('show');
    }
});

// Music Player Logic
const playBtns = document.querySelectorAll('.play-btn');
playBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const audio = document.getElementById(btn.getAttribute('data-target'));
        if (!audio.paused) {
            audio.pause();
            btn.classList.replace('fa-circle-pause', 'fa-circle-play');
        } else {
            document.querySelectorAll('audio').forEach(a => { a.pause(); a.currentTime = 0; });
            document.querySelectorAll('.play-btn').forEach(b => b.classList.replace('fa-circle-pause', 'fa-circle-play'));
            audio.play();
            btn.classList.replace('fa-circle-play', 'fa-circle-pause');
        }
    });
    const audio = document.getElementById(btn.getAttribute('data-target'));
    audio.addEventListener('ended', () => {
        btn.classList.replace('fa-circle-pause', 'fa-circle-play');
    });
});