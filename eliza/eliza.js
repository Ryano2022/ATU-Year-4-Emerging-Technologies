document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('.input-form');
    const messageHistory = document.getElementById('message-history');
    
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const input = document.getElementById('message-input');
        const message = input.value.trim();
        
        if (message) {
            const messageDiv = document.createElement('div');
            messageDiv.innerHTML = "<b>You:</b> " + message;
            messageHistory.appendChild(messageDiv);
            messageHistory.scrollTop = messageHistory.scrollHeight; // Auto-scroll to bottom
            input.value = '';
        }
    });
});