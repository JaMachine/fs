function toggleSpoiler() {
  const spoilerContent = document.getElementById('videoSpoiler');
  if (spoilerContent.style.display === 'none' || spoilerContent.style.display === '') {
      spoilerContent.style.display = 'block';
  } else {
      spoilerContent.style.display = 'none';
  }
}
