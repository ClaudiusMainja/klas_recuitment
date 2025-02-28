document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('login-form');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    
    // Add input focus animations
    const inputs = document.querySelectorAll('.input-field');
    inputs.forEach(input => {
        input.addEventListener('focus', function() {
            this.classList.add('border-blue-500');
        });
        
        input.addEventListener('blur', function() {
            if (!this.value) {
                this.classList.remove('border-blue-500');
            }
        });
    });
    
    // Form validation
    loginForm.addEventListener('submit', function(event) {
        event.preventDefault();
        
        let isValid = true;
        
        if (!emailInput.value || !validateEmail(emailInput.value)) {
            shake(emailInput);
            isValid = false;
        }
        
        if (!passwordInput.value) {
            shake(passwordInput);
            isValid = false;
        }
        
        if (isValid) {
            // Success animation
            const submitBtn = document.querySelector('.btn-primary');
            submitBtn.innerHTML = '<span class="inline-block animate-spin mr-2">⟳</span> Signing in...';
            
            // Simulate login process
            setTimeout(() => {
                submitBtn.innerHTML = '✓ Success!';
                submitBtn.classList.remove('bg-blue-500');
                submitBtn.classList.add('bg-green-500');
                
                // Redirect or show dashboard
                setTimeout(() => {
                    alert('Login Successful! Welcome to Klas Recruitment.');
                    loginForm.reset();
                    submitBtn.innerHTML = 'Sign in';
                    submitBtn.classList.remove('bg-green-500');
                    submitBtn.classList.add('bg-blue-500');
                }, 1500);
            }, 2000);
        }
    });
    
    // Social login buttons
    const socialButtons = document.querySelectorAll('.social-login-btn');
    socialButtons.forEach(button => {
        button.addEventListener('click', function() {
            this.innerHTML = '<span class="inline-block animate-spin">⟳</span>';
            
            // Simulate authentication
            setTimeout(() => {
                alert('Social login successful! Welcome to Klas Recruitment.');
                this.innerHTML = this.innerHTML.replace('<span class="inline-block animate-spin">⟳</span>', this.innerHTML);
            }, 1500);
        });
    });
    
    // Add subtle image animations for visual interest
    const imageCards = document.querySelectorAll('.image-card');
    let delay = 0;
    imageCards.forEach(card => {
        card.style.animationDelay = `${delay}s`;
        card.classList.add('slide-up');
        delay += 0.2;
    });
    
    // Helper functions
    function validateEmail(email) {
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }
    
    function shake(element) {
        element.classList.add('border-red-500');
        
        // Apply shake animation
        element.animate([
            { transform: 'translateX(0)' },
            { transform: 'translateX(-10px)' },
            { transform: 'translateX(10px)' },
            { transform: 'translateX(-10px)' },
            { transform: 'translateX(10px)' },
            { transform: 'translateX(0)' }
        ], {
            duration: 500,
            easing: 'ease-in-out'
        });
        
        setTimeout(() => {
            element.classList.remove('border-red-500');
        }, 1500);
    }
});