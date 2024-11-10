function toggleSpoiler() {
  const spoilerContent = document.getElementById('videoSpoiler');
  spoilerContent.style.display = (spoilerContent.style.display === 'none' || spoilerContent.style.display === '') ? 'block' : 'none';
}
