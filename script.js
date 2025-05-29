document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();  // ป้องกันการกระโดดทันที
      const targetID = this.getAttribute('href').substring(1);
      const targetSection = document.getElementById(targetID);
      
      if (targetSection) {
        window.scrollTo({
          top: targetSection.offsetTop - 60, // ลบความสูง header ถ้ามี fixed header
          behavior: 'smooth'
        });
      }
    });
  });
