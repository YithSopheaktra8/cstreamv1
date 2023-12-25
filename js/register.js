async function register() {
	let fullname = document.getElementById("fullname").value;
	let email = document.getElementById("email").value;
	let password = document.getElementById("password").value;

	const data = {
		username: fullname,
		email: email,
		password: password,
	};

    console.log(data)

    try {
		const response = await fetch("https://cms.istad.co/api/auth/local/register", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(data),
		});

		if (response.ok) {
			const data1 = await response.json();
			window.location.href = "login.html";
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
