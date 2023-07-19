
const container = document.getElementById('container');

container.addEventListener('click', function(event) {
  if (event.target.classList.contains('close')) {
    const message = event.target.closest('.message');
    message.style.display = 'none';
  }
});

