document.addEventListener('DOMContentLoaded', () => {
  const sections = document.querySelectorAll('.FAQ section');

  sections.forEach(section => {
    const icon = section.querySelector('.icon');
    const answer = section.querySelector('.answer');
    
    section.classList.add('closed');
    icon.classList.add('closed');
    icon.src = 'icon-plus.svg';
    answer.style.maxHeight = '0';

    section.querySelector('.question').addEventListener('click', () => {
      const isActive = section.classList.contains('active');
      sections.forEach(s => {
        s.classList.remove('active');
        s.classList.add('closed');
        s.querySelector('.answer').style.maxHeight = '0';
        s.querySelector('.icon').classList.remove('active');
        s.querySelector('.icon').classList.add('closed');
        s.querySelector('.icon').src = 'icon-plus.svg';
      });

      if (!isActive) {
        section.classList.add('active');
        section.classList.remove('closed');
        icon.classList.add('active');
        icon.classList.remove('closed');
        icon.src = 'icon-minus.svg';
        answer.style.maxHeight = answer.scrollHeight + 'px';
      }
    });
  });
});