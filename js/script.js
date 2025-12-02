//Scroll Functionality 


// Select all elements for left fade-in effect
const scrollItemsLeft = document.querySelectorAll('.scroll-item');
// Select all elements for right fade-in effect
const scrollItemsRight = document.querySelectorAll('.scroll-item-right');

function handleScroll() {
  // Process elements for left fade-in
  scrollItemsLeft.forEach(item => {
    const rect = item.getBoundingClientRect();
    // Check if the item's top is within 80% of the viewport height
    if (rect.top <= window.innerHeight * 0.8) {
      item.classList.add('visible');
    }
  });

  // Process elements for right fade-in
  scrollItemsRight.forEach(item => {
    const rect = item.getBoundingClientRect();
    // Check if the item's top is within 80% of the viewport height
    if (rect.top <= window.innerHeight * 0.8) {
      item.classList.add('visible');
    }
  });
}

window.addEventListener('scroll', handleScroll);
window.addEventListener('load', handleScroll);


//Tab Functionality on the MPS Section

document.addEventListener('DOMContentLoaded', () => {
  const solutionButtons = document.querySelectorAll('.solution-button');
  const contentContent = document.querySelector('.solution-content');
  let activeContentId = 'content-cost'; 

  solutionButtons.forEach(button => {
    button.addEventListener('click', () => {
      const newContentId = button.dataset.target;

      if (newContentId === activeContentId) return; 

      const currentContent = document.getElementById(activeContentId);
      const newContent = document.getElementById(newContentId);

      currentContent.classList.remove('opacity-100', 'translate-x-0');
      currentContent.classList.add('opacity-0', 'translate-x-full');



      currentContent.addEventListener('transitionend', function handler() {
        currentContent.classList.add('hidden', 'translate-x-0');
        currentContent.removeEventListener('transitionend', handler);

        newContent.classList.remove('hidden');

        void newContent.offsetWidth; 

        setTimeout(() => {
           newContent.classList.remove('opacity-0', 'translate-x-full');
           newContent.classList.add('opacity-100', 'translate-x-0');
        }, 10)
        
        // Update button styles
        document.querySelector(`[data-target="${activeContentId}"]`).classList.remove('bg-primary', 'text-white', 'shadow-md', 'font-bold');
        document.querySelector(`[data-target="${activeContentId}"]`).classList.add('bg-background-gray', 'text-text-primary', 'hover:bg-white', 'hover:shadow-md', 'font-medium');
                
        button.classList.remove('bg-background-gray', 'text-text-primary', 'hover:bg-white', 'hover:shadow-md', 'font-medium');
        button.classList.add('bg-primary', 'text-white', 'shadow-md', 'font-bold');

        // Update the active ID
        activeContentId = newContentId;

      })
    })
  })
})