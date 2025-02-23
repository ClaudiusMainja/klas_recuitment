  // Theme toggle functionality
  const themeToggle = document.getElementById('themeToggle');
  const html = document.documentElement;

  // Check system preference
  if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      html.classList.add('dark');
  }

  themeToggle.addEventListener('click', () => {
      html.classList.toggle('light');
  });

  // Hero text animation
  const heroTexts = ["Find your next dream job", "Get Hired Today", "Start Your Journey"];
  let currentText = 1;
  const heroTextElement = document.querySelector('.animate-text-slide');

  setInterval(() => {
      currentText = (currentText + 1) % heroTexts.length;
      heroTextElement.style.opacity = '0';
      
      setTimeout(() => {
          heroTextElement.textContent = heroTexts[currentText];
          heroTextElement.style.opacity = '1';
      }, 500);
  }, 3000);

  // the smooths scroll behavior for navigation links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
          e.preventDefault();
          document.querySelector(this.getAttribute('href')).scrollIntoView({
              behavior: 'smooth'
          });
      });
  });

  // Intersection Observer for fade-in animations
  const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
  };

  const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              entry.target.classList.add('opacity-100');
              entry.target.classList.remove('opacity-0');
          }
      });
  }, observerOptions);

  // Observe all sections for animation
  document.querySelectorAll('section').forEach(section => {
      section.classList.add('opacity-0', 'transition-opacity', 'duration-1000');
      observer.observe(section);
  });

  //mobile menu responsive code

   // Mobile menu toggle state
   const mobileMenuButton = document.getElementById('mobileMenuButton');
   const mobileMenu = document.querySelector('.mobile-menu');
   const menuIcon = document.querySelector('.menu-icon');
   const closeIcon = document.querySelector('.close-icon');

   mobileMenuButton.addEventListener('click', () => {
       mobileMenu.classList.toggle('show');
       menuIcon.classList.toggle('hidden');
       closeIcon.classList.toggle('hidden');
   });

   // Dark mode toggle
   function toggleDarkMode() {
       document.documentElement.classList.toggle('dark');
       document.querySelectorAll('.sun-icon').forEach(icon => icon.classList.toggle('hidden'));
       document.querySelectorAll('.moon-icon').forEach(icon => icon.classList.toggle('hidden'));
   }

   // Theme toggle buttons
   document.getElementById('themeToggle').addEventListener('click', toggleDarkMode);
   document.querySelector('.mobile-theme-toggle').addEventListener('click', toggleDarkMode);

   // Check system preference
   if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
       document.documentElement.classList.add('dark');
       document.querySelectorAll('.sun-icon').forEach(icon => icon.classList.add('hidden'));
       document.querySelectorAll('.moon-icon').forEach(icon => icon.classList.remove('hidden'));
   }

   //partners section code for slider
   gsap.registerPlugin(ScrollTrigger);
    
   // Only apply GSAP animation on desktop
   if (window.innerWidth >= 768) {
     gsap.from(".partner-logo", {
       scrollTrigger: {
         trigger: ".partner-logo",
         start: "top bottom",
         end: "top center",
         toggleActions: "play none none reverse"
       },
       x: -100,
       opacity: 0,
       duration: 0.8,
       stagger: 0.2
     });
   }

   // Responsive animation adjustment
   window.addEventListener('resize', () => {
     if (window.innerWidth >= 768) {
       ScrollTrigger.refresh();
     }
   });

   //latest job offer section needs that bookmarked icon to be toggled
   document.querySelectorAll('.bookmark-icon').forEach(icon => {
    icon.addEventListener('click', function() {
        // Toggle the fill attribute
        const isFilled = this.getAttribute('fill') === 'currentColor';
        this.setAttribute('fill', isFilled ? 'none' : 'currentColor');
    });
});