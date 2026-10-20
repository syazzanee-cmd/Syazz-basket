document.addEventListener('DOMContentLoaded', () => {
    
    // --- Elemen DOM ---
    const loginForm = document.getElementById('loginForm');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const togglePasswordBtn = document.getElementById('togglePassword');
    const eyeIcon = document.getElementById('eyeIcon');
    const loginBtn = document.getElementById('loginBtn');
    const emailError = document.getElementById('emailError');
    const passwordError = document.getElementById('passwordError');
    const emailGroup = emailInput.closest('.input-group');
    const passwordGroup = passwordInput.closest('.input-group');

    // --- 1. Show/Hide Password ---
    togglePasswordBtn.addEventListener('click', () => {
        const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
        passwordInput.setAttribute('type', type);
        
        // Ganti ikon mata (mata terbuka / mata tertutup)
        if (type === 'text') {
            eyeIcon.innerHTML = `<path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path><line x1="1" y1="1" x2="23" y2="23"></line>`;
            togglePasswordBtn.setAttribute('aria-label', 'Hide password');
        } else {
            eyeIcon.innerHTML = `<path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle>`;
            togglePasswordBtn.setAttribute('aria-label', 'Show password');
        }
    });

    // --- 2. Validasi Form ---
    function validateEmail(email) {
        // Regex sederhana untuk validasi email
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    }

    function validateForm() {
        let isValid = true;

        // Validasi Email/Username
        const emailValue = emailInput.value.trim();
        if (emailValue === '') {
            emailGroup.classList.add('has-error');
            emailError.textContent = 'Email / Username tidak boleh kosong.';
            isValid = false;
        } else if (!validateEmail(emailValue) && !emailValue.includes('admin')) {
            // Asumsi: jika bukan email valid, mungkin username 'admin' diperbolehkan
            emailGroup.classList.add('has-error');
            emailError.textContent = 'Format email tidak valid.';
            isValid = false;
        } else {
            emailGroup.classList.remove('has-error');
        }

        // Validasi Password
        const passwordValue = passwordInput.value.trim();
        if (passwordValue === '') {
            passwordGroup.classList.add('has-error');
            passwordError.textContent = 'Password tidak boleh kosong.';
            isValid = false;
        } else if (passwordValue.length < 6) {
            passwordGroup.classList.add('has-error');
            passwordError.textContent = 'Password minimal 6 karakter.';
            isValid = false;
        } else {
            passwordGroup.classList.remove('has-error');
        }

        return isValid;
    }

    // Hapus error state saat user mulai mengetik
    emailInput.addEventListener('input', () => {
        emailGroup.classList.remove('has-error');
    });

    passwordInput.addEventListener('input', () => {
        passwordGroup.classList.remove('has-error');
    });

    // --- 3. Handle Submit Login ---
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault(); // Mencegah reload halaman

        // Validasi input
        if (!validateForm()) {
            return;
        }

        // Tampilkan loading state pada tombol
        loginBtn.classList.add('loading');
        loginBtn.disabled = true;

        // Simulasi proses autentikasi (delay 1.5 detik)
        setTimeout(() => {
            // Cek kredensial sederhana (untuk demo)
            // Dalam produksi, ini akan diganti dengan fetch ke API backend
            const emailValue = emailInput.value.trim();
            const passwordValue = passwordInput.value.trim();

            // Simulasi login berhasil: admin@syazz.com / password123
            // Atau username 'admin' dengan password 'admin123'
            const isSuccess = 
                (emailValue === 'admin@syazz.com' || emailValue === 'admin') && 
                (passwordValue === 'password123' || passwordValue === 'admin123');

            if (isSuccess) {
                // Simpan status remember me jika dicentang
                const rememberMe = document.getElementById('rememberMe').checked;
                if (rememberMe) {
                    localStorage.setItem('syazz_admin_email', emailValue);
                } else {
                    localStorage.removeItem('syazz_admin_email');
                }

                // Redirect ke dashboard
                window.location.href = '../project/index.html';
            } else {
                // Tampilkan error jika kredensial salah
                loginBtn.classList.remove('loading');
                loginBtn.disabled = false;
                
                // Tampilkan pesan error elegan
                emailGroup.classList.add('has-error');
                passwordGroup.classList.add('has-error');
                
                // Tampilkan pesan error spesifik
                emailError.textContent = 'Email / Username atau Password salah.';
                emailError.style.display = 'block';
                
                // Fokus ke input email
                emailInput.focus();
            }
        }, 1500);
    });

    // --- 4. Cek Remember Me saat halaman dimuat ---
    const savedEmail = localStorage.getItem('syazz_admin_email');
    if (savedEmail) {
        emailInput.value = savedEmail;
        document.getElementById('rememberMe').checked = true;
    }

    // --- 5. Keyboard Navigation (Enter) ---
    // Form sudah otomatis submit saat Enter ditekan karena menggunakan <form> dan <button type="submit">
    // Namun, kita pastikan input password juga bisa trigger submit
    passwordInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            loginBtn.click();
        }
    });

});