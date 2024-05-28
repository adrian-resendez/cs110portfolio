document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('.section');
    const options = {
        threshold: 0.3
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) return;
            entry.target.classList.add('appear');
            observer.unobserve(entry.target);
        });
    }, options);

    sections.forEach(section => {
        observer.observe(section);
    });
});

function copyEmail() {
    const email = 'adrian.resendezx@gmail.com';
    navigator.clipboard.writeText(email).then(() => {
        alert(`Email ${email} copied to clipboard`);
    }).catch(err => {
        console.error('Could not copy email to clipboard: ', err);
    });
}

function sendEmail() {
    const email = 'adrian.resendezx@gmail.com';
    window.location.href = `mailto:${email}`;
}
//dfsdd