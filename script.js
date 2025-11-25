document.addEventListener('DOMContentLoaded', function() {
  const btn = document.getElementById('simpleBtn');
  
  btn.addEventListener('click', function() {
    alert('Button clicked! 🎉');
    
    // Add a fun animation
    btn.style.transform = 'scale(0.95)';
    setTimeout(() => {
      btn.style.transform = '';
    }, 150);
  });
});