// Mobile Navigation Toggle
document.addEventListener('DOMContentLoaded', function() {
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');

    if (navToggle) {
        navToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            
            // Animate hamburger icon
            const spans = navToggle.querySelectorAll('span');
            if (navMenu.classList.contains('active')) {
                spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
                spans[1].style.opacity = '0';
                spans[2].style.transform = 'rotate(-45deg) translate(7px, -6px)';
            } else {
                spans[0].style.transform = 'none';
                spans[1].style.opacity = '1';
                spans[2].style.transform = 'none';
            }
        });
    }

    // Close mobile menu when clicking on a link
    const navLinks = document.querySelectorAll('.nav-menu a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (window.innerWidth <= 768) {
                navMenu.classList.remove('active');
                const spans = navToggle.querySelectorAll('span');
                spans[0].style.transform = 'none';
                spans[1].style.opacity = '1';
                spans[2].style.transform = 'none';
            }
        });
    });

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
        });
    }

    // Chatbot Functionality
    const chatbotToggle = document.getElementById('chatbotToggle');
    const chatbotContainer = document.getElementById('chatbotContainer');
    const chatbotClose = document.getElementById('chatbotClose');
    const chatbotInput = document.getElementById('chatbotInput');
    const chatbotSend = document.getElementById('chatbotSend');
    const chatbotMessages = document.getElementById('chatbotMessages');
    const chatbotBadge = document.getElementById('chatbotBadge');

    // Simple chatbot responses (you can expand this or connect to an API)
    const chatbotResponses = {
        'hello': 'Hello! How can I help you today?',
        'hi': 'Hi there! What can I do for you?',
        'help': 'I\'m here to help! You can ask me about our services, pricing, or anything else.',
        'services': 'We offer various services. Could you tell me more about what you\'re looking for?',
        'pricing': 'For pricing information, please contact us through the contact form or email us directly.',
        'contact': 'You can reach us through the Contact Us section on our website, or use the contact form.',
        'bye': 'Goodbye! Feel free to come back if you have any questions.',
        'thanks': 'You\'re welcome! Is there anything else I can help with?',
        'thank you': 'You\'re welcome! Is there anything else I can help with?',
    };

    // Default responses
    const defaultResponses = [
        "I'm not sure I understand. Could you rephrase that?",
        "That's interesting! Can you tell me more?",
        "I'm here to help. Could you be more specific?",
        "Let me help you with that. What would you like to know?",
    ];

    // Toggle chatbot
    if (chatbotToggle && chatbotContainer) {
        chatbotToggle.addEventListener('click', function() {
            chatbotContainer.classList.add('active');
            chatbotToggle.style.display = 'none';
            chatbotBadge.style.display = 'none';
            chatbotInput.focus();
        });
    }

    // Close chatbot
    if (chatbotClose && chatbotContainer && chatbotToggle) {
        chatbotClose.addEventListener('click', function() {
            chatbotContainer.classList.remove('active');
            chatbotToggle.style.display = 'flex';
        });
    }

    // Send message function
    function sendMessage(message) {
        if (!message.trim()) return;

        // Add user message
        addMessage(message, 'user');

        // Simulate bot thinking (you can remove this delay)
        setTimeout(() => {
            const response = getBotResponse(message);
            addMessage(response, 'bot');
        }, 500);

        // Clear input
        chatbotInput.value = '';
    }

    // Add message to chat
    function addMessage(text, type) {
        const messageDiv = document.createElement('div');
        messageDiv.className = `chatbot-message ${type}-message`;
        
        const contentDiv = document.createElement('div');
        contentDiv.className = 'message-content';
        
        const p = document.createElement('p');
        p.textContent = text;
        
        contentDiv.appendChild(p);
        messageDiv.appendChild(contentDiv);
        chatbotMessages.appendChild(messageDiv);
        
        // Scroll to bottom
        chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
    }

    // Get bot response
    function getBotResponse(userMessage) {
        const lowerMessage = userMessage.toLowerCase().trim();
        
        // Check for keyword matches
        for (const [keyword, response] of Object.entries(chatbotResponses)) {
            if (lowerMessage.includes(keyword)) {
                return response;
            }
        }
        
        // Return random default response
        return defaultResponses[Math.floor(Math.random() * defaultResponses.length)];
    }

    // Send button click
    if (chatbotSend && chatbotInput) {
        chatbotSend.addEventListener('click', function() {
            sendMessage(chatbotInput.value);
        });
    }

    // Enter key to send
    if (chatbotInput) {
        chatbotInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                sendMessage(chatbotInput.value);
            }
        });
    }

    // Close chatbot when clicking outside (optional)
    document.addEventListener('click', function(e) {
        if (chatbotContainer && chatbotContainer.classList.contains('active')) {
            if (!chatbotContainer.contains(e.target) && !chatbotToggle.contains(e.target)) {
                // Uncomment below if you want to close when clicking outside
                // chatbotContainer.classList.remove('active');
                // chatbotToggle.style.display = 'flex';
            }
        }
    });

    // Add scroll effect to navbar
    let lastScroll = 0;
    const navbar = document.querySelector('.navbar');
    const navContainer = document.querySelector('.nav-container');
    
    if (navContainer) {
        window.addEventListener('scroll', function() {
            const currentScroll = window.pageYOffset;
            
            if (currentScroll > 50) {
                navContainer.style.backgroundColor = 'rgba(30, 30, 30, 0.98)';
                navContainer.style.boxShadow = '0 6px 25px rgba(0, 0, 0, 0.3)';
            } else {
                navContainer.style.backgroundColor = 'rgba(30, 30, 30, 0.95)';
                navContainer.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.2)';
            }
            
            lastScroll = currentScroll;
        });
    }

    // Intersection Observer for fade-in animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe all cards and sections
    const animatedElements = document.querySelectorAll('.card, .video-card, .story-card, .section-title');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });

    // Add hover effect to video cards
    const videoCards = document.querySelectorAll('.video-card');
    videoCards.forEach(card => {
        const playButton = card.querySelector('.play-button');
        card.addEventListener('mouseenter', function() {
            if (playButton) {
                playButton.style.transform = 'translate(-50%, -50%) scale(1.15)';
            }
        });
        card.addEventListener('mouseleave', function() {
            if (playButton) {
                playButton.style.transform = 'translate(-50%, -50%) scale(1)';
            }
        });
    });
});

