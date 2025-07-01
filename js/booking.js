document.addEventListener("DOMContentLoaded", () => {
    const bookingWrapper = document.getElementById('booking-wrapper');
    const placeholder = document.getElementById('booking-placeholder');
    const overlay = document.getElementById('booking-overlay');

    if (!bookingWrapper || !overlay) return;

    const frame = document.createElement('iframe');
    frame.src = "https://karingronbergab.kaddio.com/iframe/booking";
    frame.width = "100%";
    frame.height = "700";
    frame.style.border = "0";
    frame.setAttribute("scrolling", "yes");
    frame.setAttribute("loading", "lazy");

    const activateBooking = () => {
        bookingWrapper.appendChild(frame);

        placeholder.style.opacity = 0;
        overlay.style.opacity = 0;

        setTimeout(() => {
            placeholder.remove();
            overlay.remove();
        }, 1000);
    };

    overlay.addEventListener('click', activateBooking);
});
