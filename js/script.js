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


//Horizontal Functionality on the MPS Section
document.addEventListener('DOMContentLoaded', () => {
  const solutionButtons = document.querySelectorAll('.solution-button');
  const currentContent = document.querySelector('.solution-content');
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
document.addEventListener('DOMContentLoaded', () => {
  const industryButtons = document.querySelectorAll('.industry-button');
  let activeContentId = 'marketing-agency'; 

  industryButtons.forEach(button => {
    button.addEventListener('click', () => {
      const newContentId = button.dataset.target;

      // 1. Guard clause: do nothing if clicking the same tab
      if (newContentId === activeContentId) return; 

      const currentContent = document.getElementById(activeContentId);
      const newContent = document.getElementById(newContentId);

      // 2. Hide Current Content
      currentContent.classList.add('opacity-0', 'translate-x-full');
      
      // Use a slight timeout or transitionend to hide it fully
      setTimeout(() => {
        currentContent.classList.add('hidden');
        
        // 3. Show New Content
        newContent.classList.remove('hidden');
        
        // Trigger reflow
        void newContent.offsetWidth; 

        newContent.classList.remove('opacity-0', 'translate-x-full');
        newContent.classList.add('opacity-100', 'translate-x-0');
        
        // 4. Update Button Styles
        updateButtonStyles(activeContentId, newContentId);

        // 5. Update the active ID
        activeContentId = newContentId;
      }, 300); // Match this duration to your CSS transition speed
    });
  });

  function updateButtonStyles(oldId, newId) {
    const oldBtn = document.querySelector(`[data-target="${oldId}"]`);
    const newBtn = document.querySelector(`[data-target="${newId}"]`);

    // Reset Old Button
    oldBtn.classList.remove('bg-primary/10', 'border', 'text-white', 'shadow-md', 'font-bold');
    oldBtn.classList.add('bg-background-gray', 'text-text-primary', 'hover:bg-white', 'font-medium');

    // Activate New Button
    newBtn.classList.remove('bg-background-gray', 'text-text-primary', 'hover:bg-white', 'font-medium');
    newBtn.classList.add('bg-primary/10', 'border', 'shadow-md', 'font-bold');
  }
});