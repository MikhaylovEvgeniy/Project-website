const form = document.forms["form"];
const formArr = Array.from(form);
const validFormArr = [];
const button = form.elements["button"];
let flag = 0;
formArr.forEach((el) => {
	if (el.hasAttribute("data-reg")) {
		el.setAttribute("is-valid", "0");
		flag++;
		validFormArr.push(el);
	}
});
form.addEventListener("input", inputHandler);
form.addEventListener("submit", formCheck);

function inputHandler({ target }) {
	if (target.hasAttribute("data-reg")) {
		inputCheck(target);
	}
}

function inputCheck(el) {
	const inputValue = el.value;
	const inputReg = el.getAttribute("data-reg");
	const reg = new RegExp(inputReg);
	if (reg.test(inputValue)) {
		el.setAttribute("is-valid", "1");
		el.style.border = "1px solid rgb(0, 196, 0)";
	} else {
		el.setAttribute("is-valid", "0");
		el.style.border = "1px solid rgb(255, 0, 0)";
	}
}

function formCheck(e) {
	e.preventDefault();
	let name = document.getElementById("name");
	let email = document.getElementById("email");
	let phone = document.getElementById("phone");
	let formAgreement = document.getElementById("formAgreement");
	flag = 0;
	if (!/[а-яА-Я]/.test(name.value)) flag++;
	if (!/^[-\w.]+@([A-z0-9][-A-z0-9]+\.)+[A-z]{2,4}$/.test(email.value)) flag++;
	if (!/^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/.test(phone.value))
		flag++;
	if (formAgreement.checked == false) flag++;
	if (formAgreement.checked == false) {
		const check = document.getElementById("check");
		check.classList.add("_error");
	} else if (formAgreement.checked == true) {
		const check = document.getElementById("check");
		check.classList.remove("_error");
	}
	if (name == "" || name == null) flag++;
	if (email == "" || email == null) flag++;
	if (phone == "" || phone == null) flag++;
	if (flag == 0) {
		const allValid = [];
		validFormArr.forEach((el) => {
			allValid.push(el.getAttribute("is-valid"));
		});
		const isAllValid = allValid.reduce((acc, current) => {
			return acc && current;
		});
		if (!Boolean(Number(isAllValid))) {
			const nice = document.getElementById("nice");
			nice.classList.add("form-nice_hide");
			const modal = document.getElementById("modal");
			modal.classList.remove("_green");
			modal.classList.add("_red");
			const errror = document.getElementById("errror");
			errror.classList.remove("form-error_hide");
			return;
		}
		formSubmit();
	} else {
		const nice = document.getElementById("nice");
		nice.classList.add("form-nice_hide");
		const modal = document.getElementById("modal");
		modal.classList.remove("_green");
		modal.classList.add("_red");
		const errror = document.getElementById("errror");
		errror.classList.remove("form-error_hide");
	}
}

async function formSubmit() {
	const data = serializeForm(form);
	const response = await sendData(data);
	if (response.ok) {
		let result = await response.json();
		const errror = document.getElementById("errror");
		errror.classList.add("form-error_hide");
		const fail = document.getElementById("fail");
		fail.classList.add("form-nice_hide");
		const modal = document.getElementById("modal");
		modal.classList.remove("_red");
		modal.classList.add("_green");
		const nice = document.getElementById("nice");
		nice.classList.remove("form-nice_hide");
		if (formAgreement.checked == false) {
			const check = document.getElementById("check");
			check.classList.add("_error");
		} else if (formAgreement.checked == true) {
			const check = document.getElementById("check");
			check.classList.remove("_error");
		}
		formReset();
	} else {
		alert("Код ошибки: " + response.status);
	}
}

function serializeForm(formNode) {
	return new FormData(form);
}

async function sendData(data) {
	return await fetch("send_mail.php", {
		method: "POST",
		body: data,
	});
}

function formReset() {
	form.reset();
	validFormArr.forEach((el) => {
		el.setAttribute("is-valid", 0);
		el.style.border = "1px solid rgb(0, 0, 0)";
	});
}
