document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const togglePasswordBtn = document.getElementById('togglePassword');
    const eyeIcon = document.getElementById('eyeIcon');
    const loginBtn = document.getElementById('loginBtn');
    const emailGroup = emailInput.closest('.input-group');
    const passwordGroup = passwordInput.closest('.input-group');
    const authMessage = document.getElementById('authMessage');
    const demoAccount = { email: 'admin@syazz.com', password: 'admin123' };

    function showMessage(message, type) {
        authMessage.textContent = message;
        authMessage.className = `auth-message is-${type}`;
        authMessage.hidden = false;
    }

    function clearError(group, input) {
        group.classList.remove('has-error');
        input.removeAttribute('aria-invalid');
    }

    togglePasswordBtn.addEventListener('click', () => {
        const showingPassword = passwordInput.type === 'password';
        passwordInput.type = showingPassword ? 'text' : 'password';
        togglePasswordBtn.setAttribute('aria-label', showingPassword ? 'Sembunyikan password' : 'Tampilkan password');
        eyeIcon.innerHTML = showingPassword
            ? '<path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path><line x1="1" y1="1" x2="23" y2="23"></line>'
            : '<path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle>';
    });

    emailInput.addEventListener('input', () => clearError(emailGroup, emailInput));
    passwordInput.addEventListener('input', () => clearError(passwordGroup, passwordInput));

    const savedEmail = localStorage.getItem('syazz_customer_email');
    if (savedEmail) {
        emailInput.value = savedEmail;
        document.getElementById('rememberMe').checked = true;
    }

    document.getElementById('forgotPassword').addEventListener('click', () => {
        showMessage('Pemulihan password belum tersedia. Silakan hubungi tim Syazz untuk bantuan.', 'error');
    });

    loginForm.addEventListener('submit', (event) => {
        event.preventDefault();
        authMessage.hidden = true;
        let isValid = true;

        if (!emailInput.value.trim() || !emailInput.validity.valid) {
            emailGroup.classList.add('has-error');
            emailInput.setAttribute('aria-invalid', 'true');
            document.getElementById('emailError').textContent = emailInput.value.trim()
                ? 'Format alamat email tidak valid.'
                : 'Alamat email wajib diisi.';
            isValid = false;
        } else {
            clearError(emailGroup, emailInput);
        }

        if (!passwordInput.value) {
            passwordGroup.classList.add('has-error');
            passwordInput.setAttribute('aria-invalid', 'true');
            document.getElementById('passwordError').textContent = 'Password wajib diisi.';
            isValid = false;
        } else {
            clearError(passwordGroup, passwordInput);
        }

        if (!isValid) return;

        loginBtn.classList.add('loading');
        loginBtn.disabled = true;

        window.setTimeout(() => {
            const email = emailInput.value.trim().toLowerCase();
            const isAuthenticated = email === demoAccount.email && passwordInput.value === demoAccount.password;

            if (!isAuthenticated) {
                loginBtn.classList.remove('loading');
                loginBtn.disabled = false;
                passwordGroup.classList.add('has-error');
                passwordInput.setAttribute('aria-invalid', 'true');
                document.getElementById('passwordError').textContent = 'Email atau password tidak cocok.';
                passwordInput.focus();
                return;
            }

            const rememberMe = document.getElementById('rememberMe').checked;
            if (rememberMe) {
                localStorage.setItem('syazz_customer_email', email);
            } else {
                localStorage.removeItem('syazz_customer_email');
            }

            const session = JSON.stringify({ email, signedInAt: new Date().toISOString() });
            sessionStorage.setItem('syazz_customer_session', session);
            showMessage('Berhasil masuk. Mengalihkan ke toko...', 'success');
            window.setTimeout(() => {
                window.location.href = '../project/index.html';
            }, 500);
        }, 700);
    });
});