import React from 'react';

function Typing() {
document.addEventListener("DOMContentLoaded", () => {
const typingElement = document.getElementById("highlight");
const text = typingElement.length;
let index = 0;
	return (
if (index < text.length) {
      typingElement.textContent += text.charAt(index);
      index++;
      setTimeout(type, 100); // Adjust speed by changing the delay (in milliseconds)
    }
}
	);
  Typing();
}
export default Typing;
