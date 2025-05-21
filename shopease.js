const track = document.getElementById("carouselTrack");
    let scrollAmount = 0;
    const slideInterval = 3000; // milliseconds

    function slideCarousel() {
      scrollAmount += 220; // 200px width + 20px margin
      if (scrollAmount >= track.scrollWidth - window.innerWidth) {
        scrollAmount = 0; // reset to beginning
      }
      track.style.transform = `translateX(-${scrollAmount}px)`;
    }

    setInterval(slideCarousel, slideInterval);

    document.addEventListener("DOMContentLoaded", () => {
      const carouselTrack = document.getElementById("carouselTrack");
      const nextButton = document.querySelector(".carousel-arrow span");

      nextButton.addEventListener("click", () => {
        const trackWidth = carouselTrack.offsetWidth;
        const containerWidth = carouselTrack.parentElement.offsetWidth;
        const currentTransform = getComputedStyle(carouselTrack).transform;
        const currentTranslateX = currentTransform !== "none" ? parseFloat(currentTransform.split(",")[4]) : 0;

        const maxScroll = trackWidth - containerWidth;
        const newTranslateX = Math.max(currentTranslateX - containerWidth, -maxScroll);

        carouselTrack.style.transform = `translateX(${newTranslateX}px)`;
      });
    });