// Navigation toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            window.scrollTo({
                top: target.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// Scroll reveal
const revealElements = document.querySelectorAll(
    '.about-content, .timeline-item, .project-card, .skill-category, .certificate-card, .activity-card, .contact-content'
);

const revealOnScroll = () => {
    revealElements.forEach(el => {
        const rect = el.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight - 100;
        if (isVisible) {
            el.classList.add('fade-in', 'visible');
        }
    });
};

window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);

// Skill bar animation
let skillsAnimated = false;
const skillsSection = document.querySelector('.skills');

const animateSkills = () => {
    if (skillsAnimated || !skillsSection) return;

    const rect = skillsSection.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
        skillsAnimated = true;
        document.querySelectorAll('.skill-progress').forEach((bar, i) => {
            const width = bar.style.width;
            bar.style.width = '0';
            setTimeout(() => {
                bar.style.width = width;
            }, i * 100);
        });
    }
};

window.addEventListener('scroll', animateSkills);

// Active nav highlighting
const sections = document.querySelectorAll('section[id]');

window.addEventListener('scroll', () => {
    const scrollY = window.scrollY + 120;

    sections.forEach(section => {
        const top = section.offsetTop;
        const height = section.offsetHeight;
        const id = section.getAttribute('id');
        const link = document.querySelector(`.nav-menu a[href="#${id}"]`);

        if (link) {
            if (scrollY >= top && scrollY < top + height) {
                document.querySelectorAll('.nav-menu a').forEach(a => a.style.color = '');
                link.style.color = '#f472b6';
            }
        }
    });
});

// Typing effect for subtitle
const subtitle = document.querySelector('.hero-subtitle');
if (subtitle) {
    const text = subtitle.textContent;
    subtitle.textContent = '';
    let i = 0;

    const type = () => {
        if (i < text.length) {
            subtitle.textContent += text.charAt(i);
            i++;
            setTimeout(type, 40);
        }
    };

    setTimeout(type, 800);
}

console.log('%c⚡ Aditi Sinha Portfolio', 'color: #f472b6; font-size: 18px; font-weight: bold;');
