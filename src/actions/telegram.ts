'use server';

interface MessageData {
  name: string;
  phone: string;
  email: string;
  message: string;
}

async function forwardToUser(
  botToken: string,
  fromChatId: string,
  messageId: number,
  toChatId: string,
) {
  try {
    await fetch(`https://api.telegram.org/bot${botToken}/forwardMessage`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        chat_id: toChatId,
        from_chat_id: fromChatId,
        message_id: messageId,
      }),
    });
  } catch (error) {
    console.error('Error forwarding message:', error);
  }
}

export async function sendToTelegram(data: MessageData) {
  const BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
  const BOT_CHAT_ID = process.env.BOT_CHAT_ID; // Bot o'zining chat ID si
  const USER_CHAT_ID = process.env.USER_CHAT_ID; // Sizning chat ID ngiz

  if (!BOT_TOKEN || !BOT_CHAT_ID || !USER_CHAT_ID) {
    throw new Error('Telegram credentials are not configured');
  }

  const text = `
🆕 Yangi xabar qabul qilindi!

👤 Mijoz ma'lumotlari:
- Ism: ${data.name}
- Telefon: ${data.phone}
- Email: ${data.email}

💬 Xabar mazmuni:
${data.message}

🕒 Qabul qilingan vaqt: ${new Date().toLocaleString('uz-UZ')}

✅ Ushbu xabar avtomatik tarzda qayta yuboriladi
  `;

  try {
    // Xabarni botga yuborish
    const botResponse = await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        chat_id: BOT_CHAT_ID,
        text: text,
        parse_mode: 'HTML',
      }),
    });

    const botResult = await botResponse.json();

    if (!botResponse.ok) {
      throw new Error('Failed to send message to bot');
    }

    // Xabarni foydalanuvchiga qayta yuborish
    if (botResult.ok && botResult.result.message_id) {
      await forwardToUser(BOT_TOKEN, BOT_CHAT_ID, botResult.result.message_id, USER_CHAT_ID);
    }

    return { success: true };
  } catch (error) {
    console.error('Error in Telegram workflow:', error);
    throw error;
  }
}
