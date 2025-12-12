/**
 * Typewriter Animation Module
 * Handles the typewriter effect for the name header
 */
(function() {
	'use strict';

	// Track animation runs to prevent overlapping animations
	let typewriterRunId = 0;

	/**
	 * Typewriter animation function
	 * @param {string} text - Text to type out
	 * @param {HTMLElement} element - DOM element to write to
	 * @param {number} speed - Typing speed in milliseconds (default: 100ms)
	 */
	function typeWriter(text, element, speed = 100) {
		const runId = ++typewriterRunId;
		element.textContent = '';
		let i = 0;

		function type() {
			// Stop if a new animation has started
			if (runId !== typewriterRunId) return;

			if (i < text.length) {
				element.textContent += text.charAt(i);
				i++;
				setTimeout(type, speed);
			}
		}

		type();
	}

	/**
	 * Public API for typewriter animation
	 */
	window.Typewriter = {
		/**
		 * Animate text in the typewriter element
		 * @param {string} text - Text to animate (default: 'KINGSLEY BESIDONNE')
		 */
		animate: function(text = 'KINGSLEY BESIDONNE') {
			const typewriterElement = document.getElementById('typewriterText');
			const cursorElement = document.getElementById('cursor');

			if (typewriterElement && cursorElement) {
				cursorElement.style.display = 'inline';
				typeWriter(text, typewriterElement, 80);
			}
		}
	};
})();

