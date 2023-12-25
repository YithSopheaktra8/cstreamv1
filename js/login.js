async function login() {
	let email = document.getElementById("email");
	let password = document.getElementById("password");

	let verify = {
		identifier: email.value,
		password: password.value,
	};

	try {
		const response = await fetch("https://cms.istad.co/api/auth/local", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(verify),
		});

		if (response.ok) {
			const data = await response.json();
			window.location.href = "/index.html";
		} else {
			$(document).ready(function () {
				Swal.fire({
					icon: "error",
					title: "Email or Password is incorrect",
				});
			});
		}
	} catch (error) {
		console.error("Error during login : ", error);
	}
}

function togglePassword() {
	let passwordField = document.getElementById("password");
	let currentType = passwordField.getAttribute("type");
    let hideIcon = document.getElementById('hideIcon');


	if (currentType === "password") {
		passwordField.setAttribute("type", "text");
		hideIcon.classList.remove('fa-eye-slash');
        hideIcon.classList.add('fa-eye');
	} else {
		passwordField.setAttribute("type", "password");
		hideIcon.classList.add('fa-eye-slash');
        hideIcon.classList.remove('fa-eye');
	}
}
