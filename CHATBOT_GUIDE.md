# 🤖 Chatbot Guide

## What's Been Added

I've created a fully functional chatbot widget for your website! Here's what you got:

### Features:
- ✅ **Floating chat button** - Appears in bottom-right corner
- ✅ **Modern chat interface** - Matches your website design
- ✅ **Responsive design** - Works on mobile and desktop
- ✅ **Basic AI responses** - Keyword-based responses
- ✅ **Smooth animations** - Professional look and feel

---

## How It Works

### Current Setup:
1. **Chat Button**: Click the purple chat icon in the bottom-right corner
2. **Chat Window**: Opens with a welcome message
3. **Type & Send**: Users can type messages and get responses
4. **Close Button**: X button in the header to close the chat

### Current Responses:
The chatbot responds to keywords like:
- "hello", "hi"
- "help"
- "services"
- "pricing"
- "contact"
- "thanks", "thank you"
- "bye"

---

## How to Customize

### 1. Add More Responses

Edit `script.js` and find the `chatbotResponses` object (around line 120):

```javascript
const chatbotResponses = {
    'hello': 'Hello! How can I help you today?',
    'hi': 'Hi there! What can I do for you?',
    'your-keyword': 'Your custom response here',
    // Add more responses here
};
```

### 2. Change Welcome Message

In `index.html`, find the chatbot messages section and change the initial message:

```html
<div class="chatbot-message bot-message">
    <div class="message-content">
        <p>Your custom welcome message here!</p>
    </div>
</div>
```

### 3. Customize Colors

In `styles.css`, find the chatbot styles and change:
- `--primary-color` - Main chat color
- Background colors
- Text colors

### 4. Change Chatbot Title

In `index.html`, find:
```html
<h3>Chat with us</h3>
<p>We're here to help!</p>
```

---

## Advanced Options

### Option 1: Connect to a Real AI API

You can connect to services like:
- **OpenAI GPT** (requires API key)
- **Dialogflow** (Google's chatbot service)
- **Wit.ai** (Facebook's NLP)
- **Rasa** (Open-source)

**Example with OpenAI:**
```javascript
async function getBotResponse(userMessage) {
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer YOUR_API_KEY'
        },
        body: JSON.stringify({
            model: 'gpt-3.5-turbo',
            messages: [{ role: 'user', content: userMessage }]
        })
    });
    const data = await response.json();
    return data.choices[0].message.content;
}
```

### Option 2: Use Third-Party Chatbot Services

**Free Options:**
1. **Tawk.to** - Free live chat
2. **Crisp** - Free tier available
3. **Intercom** - Has free tier
4. **Drift** - Free tier available

**To add Tawk.to:**
1. Sign up at https://www.tawk.to
2. Get your widget code
3. Add it to `index.html` before `</body>`

### Option 3: Build a Backend

If you have a backend server (Node.js, Python, etc.):

1. **Create an API endpoint** that handles chat messages
2. **Update the JavaScript** to send messages to your API:

```javascript
async function sendMessage(message) {
    const response = await fetch('https://your-api.com/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: message })
    });
    const data = await response.json();
    return data.response;
}
```

---

## Testing Your Chatbot

1. **Open your website** in a browser
2. **Click the chat button** (bottom-right)
3. **Try these messages:**
   - "Hello"
   - "Help"
   - "What services do you offer?"
   - "How can I contact you?"

---

## Troubleshooting

### Chatbot not appearing?
- Check browser console for errors (F12)
- Make sure `script.js` is loaded
- Verify all HTML elements have correct IDs

### Messages not sending?
- Check if `chatbotInput` and `chatbotSend` elements exist
- Verify JavaScript is enabled in browser
- Check browser console for errors

### Styling issues?
- Make sure `styles.css` is linked in `index.html`
- Check if CSS classes match HTML classes

---

## Next Steps

1. **Customize responses** - Add your own Q&A pairs
2. **Add more features** - File uploads, typing indicators, etc.
3. **Connect to AI** - Use OpenAI or similar services
4. **Add analytics** - Track chat conversations
5. **Email notifications** - Get notified of new messages

---

## Need Help?

If you want to:
- Add more sophisticated AI responses
- Connect to a backend API
- Integrate with a third-party service
- Add more features

Just let me know what you'd like to do!

