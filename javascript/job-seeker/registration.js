  // Password strength indicator
  document.getElementById('password').addEventListener('input', function(e) {
    const password = e.target.value;
    const strengthBar = document.getElementById('passwordStrength');
    
    // Simple password strength logic
    let strength = 0;
    
    if (password.length >= 8) strength += 25;
    if (password.match(/[A-Z]/)) strength += 25;
    if (password.match(/[0-9]/)) strength += 25;
    if (password.match(/[^A-Za-z0-9]/)) strength += 25;
    
    // Update the strength bar color
    if (strength <= 25) {
        strengthBar.style.width = '25%';
        strengthBar.style.backgroundColor = '#EF4444'; // red
    } else if (strength <= 50) {
        strengthBar.style.width = '50%';
        strengthBar.style.backgroundColor = '#F59E0B'; // yellow
    } else if (strength <= 75) {
        strengthBar.style.width = '75%';
        strengthBar.style.backgroundColor = '#10B981'; // green
    } else {
        strengthBar.style.width = '100%';
        strengthBar.style.backgroundColor = '#047857'; // dark green
    }
});

// Form validation
document.getElementById('registerBtn').addEventListener('click', function() {
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const email = document.getElementById('email').value;
    const confirmEmail = document.getElementById('confirmEmail').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const agreeTerms = document.getElementById('agreeTerms').checked;
    
    let isValid = true;
    
    // Reset previous error styles
    document.querySelectorAll('input').forEach(input => {
        input.classList.remove('border-red-500');
    });
    
    // Check required fields
    if (!firstName || !lastName || !email || !confirmEmail || !password || !confirmPassword) {
        isValid = false;
        
        // Highlight empty fields
        if (!firstName) document.getElementById('firstName').classList.add('border-red-500');
        if (!lastName) document.getElementById('lastName').classList.add('border-red-500');
        if (!email) document.getElementById('email').classList.add('border-red-500');
        if (!confirmEmail) document.getElementById('confirmEmail').classList.add('border-red-500');
        if (!password) document.getElementById('password').classList.add('border-red-500');
        if (!confirmPassword) document.getElementById('confirmPassword').classList.add('border-red-500');
    }
    
    // Check if emails match
    if (email !== confirmEmail) {
        document.getElementById('email').classList.add('border-red-500');
        document.getElementById('confirmEmail').classList.add('border-red-500');
        isValid = false;
    }
    
    // Check if passwords match
    if (password !== confirmPassword) {
        document.getElementById('password').classList.add('border-red-500');
        document.getElementById('confirmPassword').classList.add('border-red-500');
        isValid = false;
    }
    
    // Check terms agreement
    if (!agreeTerms) {
        isValid = false;
    }
});

// Add animation classes with delay for a staggered effect
document.addEventListener('DOMContentLoaded', function() {
    const elements = document.querySelectorAll('.slide-up');
    elements.forEach((el, index) => {
        setTimeout(() => {
            el.style.opacity = '1';
            el.style.transform = 'translateY(0)';
        }, 100 * index);
    });
});