'use strict';

// mobile menu toggle
const menuToggle = document.querySelector('.mobile-nav');
const mobileNavbar = document.querySelector('.navbar');
const navLinks = document.querySelectorAll('.nav_links li > a');

let openMenu = false;

const menuOpenClose = (e) => {
	e.preventDefault();
	if (!openMenu) {
		menuToggle.classList.toggle('open');
		mobileNavbar.classList.toggle('mobile');
	}
};

// menu close on click
navLinks.forEach((link) =>
	link.addEventListener('click', () => {
		menuToggle.classList.toggle('open');
		mobileNavbar.classList.toggle('mobile');
	})
);

menuToggle.addEventListener('click', menuOpenClose);

// project cards hover effect
$('.special.cards .image').dimmer({
	on: 'hover',
});

// formspree form library
const form = document.getElementById('my-form');

async function handleSubmit(event) {
	event.preventDefault();
	let status = document.getElementById('my-form-status');
	let data = new FormData(event.target);
	fetch(event.target.action, {
		method: form.method,
		body: data,
		headers: {
			Accept: 'application/json',
		},
	})
		.then((response) => {
			status.innerHTML = 'Thanks for your submission!';
			form.reset();
		})
		.catch((error) => {
			status.innerHTML = 'Oops! There was a problem submitting your form';
		});
}
form.addEventListener('submit', handleSubmit);
