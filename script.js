
        const emailInput = document.getElementById('email');
        const passwordInput = document.getElementById('password');
        const emailError = document.getElementById('emailError');
        const passwordError = document.getElementById('passwordError');
        const formStatus = document.getElementById('formStatus');
        const submitBtn = document.getElementById('submitBtn');

        emailInput.onchange = function () {
            const emailValue = emailInput.value;
            if (emailValue.length > 3 && emailValue.includes('@') && emailValue.includes('.')) {
                emailError.textContent = '';
            } else {
                emailError.textContent = 'Invalid email. Must contain "@" and "." and be more than 3 characters.';
            }
            updateStatus();
        };

        passwordInput.onchange = function () {
            const passwordValue = passwordInput.value;
            if (passwordValue.length > 8) {
                passwordError.textContent = '';
            } else {
                passwordError.textContent = 'Password must be more than 8 characters.';
            }
            updateStatus();
        };

        function updateStatus() {
            if (emailError.textContent === '' && passwordError.textContent === '') {
                formStatus.textContent = 'All good to go!';
                formStatus.className = 'success';
            } else {
                formStatus.textContent = '';
            }
        }

        submitBtn.onclick = function () {
            if (formStatus.textContent === 'All good to go!') {
                if (confirm('Are you sure you want to submit?')) {
                    alert('Successful signup!');
                } else {
                    emailInput.value = '';
                    passwordInput.value = '';
                    emailError.textContent = '';
                    passwordError.textContent = '';
                    formStatus.textContent = '';
                }
            }
        };
 