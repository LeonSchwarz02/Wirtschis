// Hier verwenden wir die ChatGPT API für die Übersetzung
const API_URL = 'https://api.openai.com/v1/chat/completions';

const translationForm = document.getElementById('translation-form');
const translationResult = document.getElementById('translation-result');

translationForm.addEventListener('submit', async (event) => {
  event.preventDefault();

  const textInput = document.getElementById('text-input').value;

  const response = await fetch(API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer YOUR_API_KEY' // Ersetzen Sie YOUR_API_KEY durch Ihren eigenen API-Schlüssel
    },
    body: JSON.stringify({
      prompt: `Translate German text to German Sign Language: "${textInput}"`,
      max_tokens: 64
    })
  });

  const data = await response.json();
  const translatedText = data.choices[0].text.trim();

  translationResult.innerText = translatedText;
});
