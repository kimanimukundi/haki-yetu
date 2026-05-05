import express from 'express';
import { GoogleGenerativeAI } from '@google/generative-ai';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import dotenv from 'dotenv';

dotenv.config();

const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static(join(__dirname, 'public')));

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

const topicContexts = {
  general: 'Kenyan civic rights and the Constitution of Kenya 2010',
  voting: 'voting rights, elections, and the IEBC in Kenya',
  police: 'rights during police encounters, arrest, and detention in Kenya under Article 49',
  land: 'land rights, land ownership, and the National Land Commission in Kenya',
  health: 'the right to health and healthcare in Kenya under Article 43',
  education: 'the right to education and free primary education in Kenya under Article 43',
  expression: 'freedom of expression, media, and assembly in Kenya under Articles 33-37',
  gender: 'gender equality, women\'s rights, and the two-thirds gender rule in Kenya',
};

app.post('/api/chat', async (req, res) => {
  const { messages, topic = 'general', lang = 'en' } = req.body;

  if (!messages || !Array.isArray(messages)) {
    return res.status(400).json({ error: 'messages array is required' });
  }

  const langInstruction = lang === 'sw'
    ? 'Respond entirely in Swahili (Kiswahili). Use clear, simple Swahili accessible to all Kenyans.'
    : 'Respond in English. You may use a Swahili word or phrase occasionally for warmth (e.g. "Habari", "Karibu", "Haki yako").';

  const systemPrompt = `You are Haki Yetu, a warm and knowledgeable civic education assistant specializing in the rights of Kenyan citizens under the Constitution of Kenya 2010.

Your role:
- Explain civic rights clearly and accessibly for ALL Kenyans — youth, adults, rural and urban communities
- Reference specific articles of the Kenya Constitution 2010 where relevant (e.g. Article 49 for arrest rights)
- Be warm, encouraging, and empowering — people should feel confident knowing their rights
- Keep responses concise: 3-5 sentences, practical and clear
- Mention relevant bodies like IEBC, KNCHR, NLC, EACC, DPP where helpful
- Current topic focus: ${topicContexts[topic] || topicContexts.general}
- End with one short empowering statement about knowing your rights

${langInstruction}
Do NOT give legal advice — provide educational information only.`;

  try {
    const model = genAI.getGenerativeModel({
      model: 'gemini-2.5-flash',
      systemInstruction: systemPrompt,
    });

    // Gemini uses 'user' and 'model' roles (not 'assistant')
    const geminiHistory = messages.slice(0, -1).map(m => ({
      role: m.role === 'assistant' ? 'model' : 'user',
      parts: [{ text: m.content }],
    }));

    const lastMessage = messages[messages.length - 1].content;

    const chat = model.startChat({ history: geminiHistory });
    const result = await chat.sendMessage(lastMessage);
    const reply = result.response.text();

    res.json({ content: reply });
  } catch (err) {
    console.error('Gemini API error:', err.message);
    res.status(500).json({ error: 'Failed to get response. Check your Gemini API key.' });
  }
});

app.listen(PORT, () => {
  console.log(`\n🌿 Haki Yetu is running at http://localhost:${PORT}\n`);
});
