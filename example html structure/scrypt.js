  // JavaScript to change text overlay on hover of sub-images
  const subImages = document.querySelectorAll('.sub-image');
  const textOverlays = document.querySelectorAll('.text-overlay');

  subImages.forEach((image, index) => {
    image.addEventListener('mouseover', () => {
      textOverlays[index].style.opacity = '1';
    });
    image.addEventListener('mouseout', () => {
      textOverlays[index].style.opacity = '0';
    });
  });