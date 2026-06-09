export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end()

  const { answer, task, type } = req.body
  if (!answer || !task) return res.status(400).json({ error: 'Missing fields' })

  const wordCount = answer.trim().split(/\s+/).filter(Boolean).length

  try {
    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': process.env.ANTHROPIC_API_KEY,
        'anthropic-version': '2023-06-01'
      },
      body: JSON.stringify({
        model: 'claude-sonnet-4-20250514',
        max_tokens: 1200,
        messages: [{
          role: 'user',
          content: `You are an expert IELTS examiner. Evaluate this student's ${type} writing response.

TASK: ${task}

STUDENT'S ANSWER (${wordCount} words):
${answer}

Give feedback in this exact format:

📊 ESTIMATED BAND SCORE: [give a band from 4.0 to 9.0]

✅ STRENGTHS (2-3 points):
- [strength 1]
- [strength 2]
- [strength 3 if applicable]

⚠️ AREAS TO IMPROVE (2-3 points):
- [improvement 1]
- [improvement 2]
- [improvement 3 if applicable]

💡 VOCABULARY SUGGESTIONS:
Replace [weak word/phrase] with [stronger alternative] — [brief reason]
(Give 2-3 specific vocabulary upgrades from their actual text)

📝 ONE CORRECTED SENTENCE:
Original: "[pick one sentence that needs improvement]"
Better: "[improved version]"

Keep the tone encouraging but honest. This student is from India preparing for IELTS.`
        }]
      })
    })

    const data = await response.json()
    const feedback = data.content?.[0]?.text || 'Could not generate feedback.'
    return res.status(200).json({ feedback })
  } catch (e) {
    console.error(e)
    return res.status(500).json({ error: 'Feedback generation failed' })
  }
}
