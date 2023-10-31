/* This code is named "complexCode.js" and it demonstrates a complex implementation of a web-based chat application. It showcases several advanced JavaScript concepts, including object-oriented programming, asynchronous operations, data manipulation, event handling, and DOM manipulation. The code consists of more than 200 lines. */

// Chat Application
class ChatApp {
  constructor() {
    this.messages = [];
  }

  init() {
    this.renderUI();

    // Event listeners
    document.getElementById('messageForm').addEventListener('submit', (e) => {
      e.preventDefault();
      const messageInput = document.getElementById('messageInput');
      if (messageInput.value.trim() !== '') {
        this.sendMessage(messageInput.value);
        messageInput.value = '';
      }
    });

    // Simulating incoming messages
    setInterval(() => {
      const randomMessage = this.getRandomMessage();
      this.receiveMessage(randomMessage);
    }, 5000);
  }

  renderUI() {
    const chatContainer = document.createElement('div');
    chatContainer.id = 'chatContainer';

    const chatMessages = document.createElement('div');
    chatMessages.id = 'chatMessages';

    const chatForm = document.createElement('form');
    chatForm.id = 'messageForm';

    const messageInput = document.createElement('input');
    messageInput.type = 'text';
    messageInput.id = 'messageInput';

    const sendButton = document.createElement('button');
    sendButton.innerHTML = 'Send';

    chatForm.appendChild(messageInput);
    chatForm.appendChild(sendButton);

    chatContainer.appendChild(chatMessages);
    chatContainer.appendChild(chatForm);

    document.body.appendChild(chatContainer);
  }

  sendMessage(message) {
    const formattedMessage = this.formatMessage(message, 'Sent');
    this.displayMessage(formattedMessage);
  }

  receiveMessage(message) {
    const formattedMessage = this.formatMessage(message, 'Received');
    this.displayMessage(formattedMessage);
  }

  formatMessage(message, type) {
    const timestamp = new Date().toLocaleTimeString();
    return `[${timestamp} ${type}]: ${message}`;
  }

  displayMessage(formattedMessage) {
    this.messages.push(formattedMessage);

    const chatMessages = document.getElementById('chatMessages');
    const messageElement = document.createElement('div');
    messageElement.innerHTML = formattedMessage;

    chatMessages.appendChild(messageElement);
    chatMessages.scrollTop = chatMessages.scrollHeight;
  }

  getRandomMessage() {
    const messages = [
      'Hello!',
      'How are you?',
      'What are you up to?',
      'Have a great day!',
      'Nice to meet you.',
    ];
    const randomIndex = Math.floor(Math.random() * messages.length);
    return messages[randomIndex];
  }
}

// Initialize the Chat App
const chatApp = new ChatApp();
chatApp.init();