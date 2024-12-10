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
            // Display user message.
            const userMessageDiv = document.createElement('div');
            userMessageDiv.innerHTML = `${getTimestamp()} <b>You:</b> ${message}`;
            messageHistory.appendChild(userMessageDiv);
            
            // Add delay before showing Eliza's response.
            setTimeout(() => {
                const response = generateResponse(message);
                const elizaMessageDiv = document.createElement('div');
                elizaMessageDiv.innerHTML = `${getTimestamp()} <b>Eliza:</b> ${response}`;
                messageHistory.appendChild(elizaMessageDiv);
                messageHistory.scrollTop = messageHistory.scrollHeight;
            }, 300);
            
            input.value = '';
            messageHistory.scrollTop = messageHistory.scrollHeight;
        }
    });
});

const potentialResponses = {
  // Basic greetings.
  'hello|greetings|hi|hey|heyo|sup|whats up|what\'s up': [
    'Hello!',
    'Hi!',
    'Hey!',
    'Greetings!'
  ],

  // Well-being inquiries.
  'how are you|how\'re you|how do you feel': [
    'I\'m functioning well, thank you.',
    'I\'m doing fine, how are you?',
    'All systems operational!'
  ],

  // Identity questions.
  'what is your name|what\'s your name|who are you': [
    'I\'m Eliza, a chatbot.',
    'My name is Eliza.',
    'I am Eliza, nice to meet you!'
  ],

  // Farewells.
  'bye|goodbye|see you|farewell': [
    'Goodbye!',
    'See you later!',
    'Take care!',
    'Until next time!'
  ],

  // Help requests.
  'help|what can you do': [
    'I\'m here to chat with you.',
    'I can engage in simple conversation.',
    'Just talk to me naturally!'
  ],

  // Positive emotions.
  '(.*)?like|love(.*)?' : [
    'Tell me more about what you like.',
    'What makes you feel that way?',
    'That\'s interesting, why do you think that is?'
  ],

  // Negative emotions.
  '(.*)?hate|dislike(.*)?' : [
    'Why do you have such strong feelings about that?',
    'What caused you to feel this way?',
    'Let\'s explore why you feel that way.'
  ],

  // Questions.
  'why': [
    'Why do you think?',
    'What makes you ask that?',
    'How would you explain it?'
  ],

  // Self-statements.
  'i am|i\'m': [
    'Tell me more about yourself.',
    'How long have you felt this way?',
    'Why do you think you feel this way?'
  ],

  // Comments about Eliza.
  'you are|you\'re': [
    'Why do you think that about me?',
    'We were discussing you, not me.',
    'What makes you say that?'
  ],

  // Gratitude.
  'thanks|thank you': [
    'You\'re welcome!',
    'Happy to help!',
    'No problem at all!',
    'My pleasure!'
  ],

  // Weather.
  'weather': [
    'I don\'t experience weather, but I hope it\'s nice where you are!',
    'Are you enjoying the weather today?',
    'The weather is always perfect in my digital world!'
  ]
};

function generateResponse(input) {
  // Loop through all our possible responses
  for (let pattern in potentialResponses) {
    let regex = new RegExp(pattern, 'i');
    
    // Check if the user's input matches this pattern.
    if (regex.test(input)) {
      let possibleResponses = potentialResponses[pattern];
      let randomIndex = Math.floor(Math.random() * possibleResponses.length);
      return possibleResponses[randomIndex];
    }
  }
  
  return "I'm sorry, I didn't understand that.";
}
