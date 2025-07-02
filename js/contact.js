document.addEventListener("DOMContentLoaded", () => {
    const contactWrapper = document.getElementById('contact-wrapper');
    const placeholder = document.getElementById('contact-placeholder');
    const overlay = document.getElementById('contact-overlay');

    if (!contactWrapper || !overlay) return;

    const frame = document.createElement('iframe');
    frame.src = "https://karingronbergab.kaddio.com/iframe/contact-us";
    frame.width = "100%";
    frame.height = "100%";
    frame.style.border = "0";
    frame.setAttribute("scrolling", "yes");
    frame.setAttribute("loading", "lazy");

    const activateContact = () => {
        contactWrapper.appendChild(frame);
        placeholder.style.opacity = 0;
        overlay.style.opacity = 0;

        setTimeout(() => {
            placeholder.remove();
            overlay.remove();
        }, 1000);
    };

    overlay.addEventListener('click', activateContact);
});
