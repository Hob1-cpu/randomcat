document.addEventListener('DOMContentLoaded', () => {
    const catImage = document.getElementById('cat-image');
    const newCatButton = document.getElementById('new-cat');
    const backgroundMusic = document.getElementById('background-music');
  
    function fetchRandomCatImage() {
      fetch('https://api.thecatapi.com/v1/images/search')
        .then(response => response.json())
        .then(data => {
          catImage.src = data[0].url;
        });
    }
  
    newCatButton.addEventListener('click', () => {
      fetchRandomCatImage();
    });
  
    fetchRandomCatImage();
  
    // Play the background music and set the volume
    backgroundMusic.volume = 0.5;
    backgroundMusic.play();
  });
  