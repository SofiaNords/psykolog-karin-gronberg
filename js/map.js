document.addEventListener("DOMContentLoaded", () => {
    const map = document.getElementById('map');
    const placeholder = document.getElementById('placeholder-img');
    const overlay = document.getElementById('map-overlay');

    const frame = document.createElement('iframe');
    frame.src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2084.588854112889!2d13.172209376932084!3d58.501439874224005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x465b28a37a75b5a3%3A0xdcf947cb94f8d50a!2sKinnegatan%2021%2C%20531%2033%20Lidk%C3%B6ping!5e0!3m2!1ssv!2sse!4v1743416744570!5m2!1ssv!2sse";
    frame.id = "iframe-map";

    const activateMap = () => {
        map.appendChild(frame);

        placeholder.style.opacity = 0;
        overlay.style.opacity = 0;

        setTimeout(() => {
            placeholder.remove();
            overlay.remove();
        }, 1000);
    };

    overlay.addEventListener('click', activateMap);
});

