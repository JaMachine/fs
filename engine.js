const spoilerTitle = document.querySelector('.spoiler-title');
const spoilerContent = document.querySelector('.spoiler-content');

spoilerTitle.addEventListener('click', () => {
  spoilerContent.style.display = spoilerContent.style.display === 'none' ? 'block' : 'none';
});