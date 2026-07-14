const terminalOutput = document.getElementById('terminal-output');
const heroReveal = document.querySelector('.hero-reveal');

const bootSequence = [
    { text: "Initializing boot sequence...", delay: 500 },
    { text: "Checking system status...", delay: 800 },
    { text: "[ OK ] Kernel loaded: vince-os-v1.0.4", delay: 400 },
    { text: "[ OK ] Graphics initialized", delay: 300 },
    { text: "[ OK ] Network stack online", delay: 600 },
    { text: "whoami", type: true, delay: 1000 },
    { text: "vince_capin", delay: 500 },
    { text: "status --check", type: true, delay: 1000 },
    { text: "Role: Software Engineer\nLocation: Cebu City\nAvailability: Ready for new connections", delay: 800 },
    { text: "Boot complete. System ready.", delay: 500 },
];

async function typeWriter(text, element, speed = 30) {
    for (let i = 0; i < text.length; i++) {
        element.innerHTML += text.charAt(i);
        await new Promise(resolve => setTimeout(resolve, speed));
    }
    element.innerHTML += "\n";
}

async function runBootSequence() {
    for (const step of bootSequence) {
        if (step.type) {
            const prompt = document.createElement('span');
            prompt.style.color = '#ECE8DE';
            prompt.innerHTML = "vince@capin:~$ ";
            terminalOutput.appendChild(prompt);
            
            const command = document.createElement('span');
            terminalOutput.appendChild(command);
            await typeWriter(step.text, command, 100);
        } else {
            const line = document.createElement('div');
            line.innerHTML = step.text;
            terminalOutput.appendChild(line);
        }
        await new Promise(resolve => setTimeout(resolve, step.delay));
        terminalOutput.scrollTop = terminalOutput.scrollHeight;
    }
    
    // Reveal hero content
    setTimeout(() => {
        heroReveal.classList.remove('hidden');
        document.querySelector('.terminal-window').style.opacity = '0.4';
        document.querySelector('.terminal-window').style.transition = 'opacity 2s';
    }, 500);
}

// Navigation scroll highlighting
window.addEventListener('scroll', () => {
    let current = "";
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= (sectionTop - sectionHeight / 3)) {
            current = section.getAttribute('id');
        }
    });

    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').includes(current)) {
            link.classList.add('active');
        }
    });
});

// Copy to clipboard function
function copyToClipboard(text, btn) {
    navigator.clipboard.writeText(text).then(() => {
        const originalText = btn.innerText;
        btn.innerText = "COPIED!";
        btn.style.color = "#4FC0AD";
        btn.style.borderColor = "#4FC0AD";
        setTimeout(() => {
            btn.innerText = originalText;
            btn.style.color = "";
            btn.style.borderColor = "";
        }, 2000);
    });
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    runBootSequence();
});
