AOS.init();
// You can also pass an optional settings object
// below listed default settings
AOS.init({
	// Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
	offset: 120, // offset (in px) from the original trigger point
	delay: 0, // values from 0 to 3000, with step 50ms
	duration: 700, // values from 0 to 3000, with step 50ms
	easing: 'ease', // default easing for AOS animations
	once: false, // whether animation should happen only once - while scrolling down
	mirror: false, // whether elements should animate out while scrolling past them
	anchorPlacement: 'top-bottom' // defines which position of the element regarding to window should trigger the animation
});

// Select the form and the message placeholder
const form = document.querySelector('form');
const messageDiv = document.getElementById('form-message');

form.addEventListener('submit', (event) => {
	event.preventDefault(); // Prevent default form submission

	// Gather form data
	const formData = new FormData(form);

	// Send the form data via fetch
	fetch(form.action, {
		method: form.method,
		body: formData,
		headers: {
			Accept: 'application/json'
		}
	})
		.then(() => {
			// Display success message
			messageDiv.className = 'alert alert-success';
			messageDiv.textContent = 'Thank you! Your message has been sent.';
			form.reset(); // Reset the form fields
		})
		.catch(() => {
			// Display error message
			messageDiv.className = 'alert alert-danger';
			messageDiv.textContent = 'Oops! Something went wrong. Please try again later.';
		});
});

// ...

// Add Dark Mode Toggle
const darkModeSwitch = document.getElementById('darkModeSwitch');

// Check for saved dark mode preference in localStorage
if (localStorage.getItem('darkMode') === 'enabled') {
	document.body.classList.add('dark-mode');
	darkModeSwitch.checked = true;
}

// Toggle dark mode on switch change
darkModeSwitch.addEventListener('change', () => {
	if (darkModeSwitch.checked) {
		document.body.classList.add('dark-mode');
		localStorage.setItem('darkMode', 'enabled');
	} else {
		document.body.classList.remove('dark-mode');
		localStorage.setItem('darkMode', 'disabled');
	}
});
// End: Toggle dark mode on switch change

// Animated Typing Effect for Headlines
const typed = new Typed('#typing-text', {
	strings: ['NETWORKING', 'CYBERSECURITY'], // Words to animate
	typeSpeed: 100, // Speed of typing
	backSpeed: 50, // Speed of backspacing
	backDelay: 1000, // Delay before backspacing
	loop: true, // Loop the animation
	showCursor: true, // Enable the blinking cursor
	cursorChar: '|' // Use '|' as the cursor character
});
// End: Animated Typing Effect for Headlines

// START: Chat Widget Elements
const customChatIcon = document.getElementById('custom-chat-icon');
const customChatBox = document.getElementById('custom-chat-box');
const customChatClose = document.getElementById('custom-chat-close');
const customChatSubmit = document.getElementById('custom-chat-submit');
const customChatInput = document.getElementById('custom-chat-input');
const customChatOutput = document.getElementById('custom-chat-output');

// Predefined Responses
const customResponses = {
	hey: "Hello! 👋 I'm Mohamed's chatbot assistant. How can I help you today? You can ask me about Mohamed's journey, skills, projects, certifications, and more!",
	hello: "Hello! 👋 I'm Mohamed's chatbot assistant. How can I help you today? You can ask me about Mohamed's journey, skills, projects, certifications, and more!",

	about: 'I’m Mohamed, an aspiring IT professional with a strong foundation in networking, IT support, and web development. I’m passionate about solving complex technical problems, and I’m actively pursuing certifications to enhance my skills and transition into networking.',

	journey: 'I started at Highline College, focused on web development, joined the Year Up United Information Technology program, gaining hands-on experience in IT support, networking, and troubleshooting.',
	skill: 'I’m skilled in networking, troubleshooting, web development, Linux, VMware, Windows Server, and IT support.',
	goal: 'My goals include earning CompTIA A+ and Network+ certifications, and transitioning into networking.',
	hire: 'You should hire me because I bring a unique combination of hands-on IT experience, a solid educational foundation, and a proactive approach to problem-solving. I am committed to continuous learning, as evidenced by my pursuit of certifications like CompTIA A+ and Network+, and I excel in environments that require both technical expertise and strong collaboration. My passion for IT and my ability to adapt to new challenges make me a valuable asset to any team.',
	portfolio: 'Check out my Projects section for web development, virtual labs, and IT solutions.',

	certification: "I'm currently pursuing CompTIA A+ and Network+ certifications to advance my expertise in IT and networking.",
	certificates: "I'm working toward completing my CompTIA A+ and Network+ certifications to solidify my technical foundation and advance my career.",

	project: "I've worked on web development projects for small businesses, created virtual labs for networking simulations, and built tools for troubleshooting tasks.",
	education: 'I studied Web Development at Highline College and am currently enrolled in Year Up, focusing on IT support and networking.',
	work: 'I’ve gained hands-on experience as an IT Assistant at African Community Housing & Development and have honed technical skills as a Delivery Associate for South Sound Express.',
	job: 'Currently, I’m pursuing a role in networking and IT support while developing skills in networking.',
	achievement: "Some of my key achievements include earning the 'Professional of the Week' award at Year Up, creating impactful IT solutions, and optimizing workflows in previous roles.",
	timeline:
		'Here’s my professional timeline:\n1. Started at Highline College studying web development.\n2. Volunteered as an IT Assistant at African Community Housing & Development.\n3. Currently enrolled in Year Up United, focusing on IT help desk support and networking.\n4. Actively pursuing certifications like CompTIA A+ and Network+.',
	thank: "You're welcome! 😊 I'm always here to assist you. Feel free to ask me more questions about Mohamed's journey, skills, projects, or anything else!",
	default: "I'm not sure how to answer that. Try asking about Mohamed's journey, skills, projects, or goals! Tip: Instead of writing a full question, you can simply type keywords like about, skills, journey, projects, certifications, achievements, and more! Type a keyword to get started."
};

// Placeholder message
const placeholderMessage = `
	<p class="bot-message">
		Hi there! I'm Mohamed's chatbot assistant. I can answer questions about Mohamed's <strong>journey</strong>, <strong>skills</strong>, <strong>projects</strong>, <strong>certifications</strong>, and more! Type a question to get started.
	</p>
`;

// Display the placeholder message initially
customChatOutput.innerHTML = placeholderMessage;

// Toggle Chatbox Visibility
customChatIcon.addEventListener('click', () => {
	customChatBox.classList.toggle('custom-d-none');
});

customChatClose.addEventListener('click', () => {
	customChatBox.classList.add('custom-d-none');
});

// Function to display bot response with typing effect and auto-scroll
function typeEffect(element, text, speed = 50) {
	let i = 0;
	const interval = setInterval(() => {
		element.textContent += text.charAt(i);
		i++;
		// Auto-scroll during typing
		customChatOutput.scrollTop = customChatOutput.scrollHeight;
		if (i === text.length) {
			clearInterval(interval);
		}
	}, speed);
}

// Handle Chat Input with Enter Key or Button Click
customChatInput.addEventListener('keydown', (event) => {
	if (event.key === 'Enter') {
		event.preventDefault(); // Prevent default behavior
		customChatSubmit.click(); // Trigger the submit button's click event
	}
});

customChatSubmit.addEventListener('click', () => {
	const userMessage = customChatInput.value.trim();
	if (!userMessage) return;

	// Display User Message
	customChatOutput.innerHTML += `<p class="user-message">${userMessage}</p>`;
	customChatInput.value = '';

	// Determine Bot Response
	const key = Object.keys(customResponses).find((keyword) => userMessage.toLowerCase().includes(keyword));
	const botMessage = customResponses[key] || customResponses['default'];

	// Create Bot Message Container
	const botMessageElement = document.createElement('p');
	botMessageElement.className = 'bot-message';
	customChatOutput.appendChild(botMessageElement);

	// Display Bot Response with Typing Effect
	setTimeout(() => {
		typeEffect(botMessageElement, botMessage);
	}, 500);
});

// END: Chat Widget Elements

// TEST SECTION
