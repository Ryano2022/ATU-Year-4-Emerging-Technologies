document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('.input-form');
    const messageHistory = document.getElementById('message-history');
    
    function getTimestamp() {
        const now = new Date();
        return now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });
    }
    
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const input = document.getElementById('message-input');
        const message = input.value.trim();
        
        if (message) {
            const messageDiv = document.createElement('div');
            messageDiv.innerHTML = `${getTimestamp()} <b>You:</b> ${message}`;
            messageHistory.appendChild(messageDiv);
            messageHistory.scrollTop = messageHistory.scrollHeight;
            input.value = '';
        }
    });
});