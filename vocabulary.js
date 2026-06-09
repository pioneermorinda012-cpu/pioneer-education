import { useState } from 'react'
import Layout from '../components/Layout'
import { VOCAB_TOPICS } from '../lib/data'

const SAMPLE_WORDS = [
  { word: 'Meticulous', meaning: 'Very careful and precise about details', example: 'He is meticulous about checking his work before submitting.', punjabi: 'ਬਹੁਤ ਧਿਆਨ ਨਾਲ' },
  { word: 'Eloquent', meaning: 'Fluent, persuasive and expressive in speech', example: 'She gave an eloquent speech that moved the entire audience.', punjabi: 'ਭਾਸ਼ਣ ਦੇਣ ਵਿੱਚ ਨਿਪੁੰਨ' },
  { word: 'Tenacious', meaning: 'Not giving up; holding on firmly to goals', example: 'A tenacious student keeps practicing until they succeed.', punjabi: 'ਦ੍ਰਿੜ੍ਹ ਇਰਾਦੇ ਵਾਲਾ' },
  { word: 'Pragmatic', meaning: 'Practical and realistic in approach', example: 'Take a pragmatic approach instead of being overly idealistic.', punjabi: 'ਵਿਹਾਰਕ' },
  { word: 'Ambiguous', meaning: 'Having more than one possible meaning; unclear', example: 'The instructions were ambiguous, so students were confused.', punjabi: 'ਅਸਪੱਸ਼ਟ' },
  { word: 'Proliferate', meaning: 'To grow or spread rapidly', example: 'Online learning platforms have proliferated in recent years.', punjabi: 'ਤੇਜ਼ੀ ਨਾਲ ਵਧਣਾ' },
]

export default function Vocabulary() {
  const [topic, setTopic] = useState('')
  const [words, setWords] = useState(SAMPLE_WORDS)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [flipped, setFlipped] = useState({})

  const generateWords = async () => {
    if (!topic.trim()) return
    setLoading(true)
    setError('')
    try {
      const res = await fetch('/api/vocabulary', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ topic })
      })
      const data = await res.json()
      if (data.words) setWords(data.words)
      else setError('Could not generate words. Please try again.')
    } catch (e) {
      setError('Network error. Please check your connection.')
    }
    setLoading(false)
  }

  const toggleFlip = (i) => setFlipped(f => ({ ...f, [i]: !f[i] }))

  return (
    <Layout student="Rahul Singh">
      <h1 style={{ fontSize: 20, fontWeight: 700, marginBottom: 6 }}>📖 Vocabulary builder</h1>
      <p style={{ fontSize: 13, color: 'var(--text2)', marginBottom: 20 }}>
        Enter any topic to generate advanced English words with meanings, examples and Punjabi translations.
      </p>

      {/* Topic search */}
      <div style={{ display: 'flex', gap: 10, marginBottom: 20 }}>
        <input
          type="text"
          value={topic}
          onChange={e => setTopic(e.target.value)}
          onKeyDown={e => e.key === 'Enter' && generateWords()}
          placeholder="Enter topic: environment, health, technology, education..."
          style={{
            flex: 1, padding: '10px 14px', borderRadius: 8,
            border: '1px solid var(--border)', fontSize: 14,
            background: 'var(--surface)', color: 'var(--text)'
          }}
        />
        <button className="btn-primary" onClick={generateWords} disabled={loading}>
          {loading ? '⏳ Generating...' : '✨ Generate'}
        </button>
      </div>

      {/* Quick topic buttons */}
      <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 20 }}>
        <span style={{ fontSize: 12, color: 'var(--text3)', alignSelf: 'center' }}>Quick topics:</span>
        {VOCAB_TOPICS.map(t => (
          <button key={t.topic} onClick={() => { setTopic(t.topic); }}
            style={{
              padding: '5px 12px', borderRadius: 999, fontSize: 12,
              border: '1px solid var(--border)', background: 'var(--surface)',
              color: 'var(--text2)', cursor: 'pointer'
            }}>
            {t.topic}
          </button>
        ))}
      </div>

      {error && (
        <div style={{
          padding: '10px 14px', background: 'var(--red-light)',
          borderRadius: 8, fontSize: 13, color: 'var(--red)', marginBottom: 16
        }}>{error}</div>
      )}

      {/* Word cards */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
        gap: 14
      }}>
        {words.map((w, i) => (
          <div key={i} className="card"
            style={{ cursor: 'pointer', transition: 'box-shadow 0.15s' }}
            onClick={() => toggleFlip(i)}
          >
            {!flipped[i] ? (
              <>
                <div style={{ fontSize: 18, fontWeight: 700, color: 'var(--blue)', marginBottom: 6 }}>
                  {w.word}
                </div>
                <div style={{ fontSize: 13, color: 'var(--text)', marginBottom: 8 }}>
                  {w.meaning}
                </div>
                <div style={{
                  fontSize: 12, color: 'var(--text2)', fontStyle: 'italic',
                  padding: '8px 10px', background: 'var(--blue-light)',
                  borderRadius: 6, borderLeft: '3px solid var(--blue)'
                }}>
                  "{w.example}"
                </div>
                <div style={{ fontSize: 11, color: 'var(--text3)', marginTop: 8 }}>
                  👆 Tap to see Punjabi meaning
                </div>
              </>
            ) : (
              <>
                <div style={{ fontSize: 18, fontWeight: 700, color: 'var(--teal)', marginBottom: 8 }}>
                  {w.word}
                </div>
                <div style={{
                  fontSize: 16, color: 'var(--text)', fontWeight: 600,
                  padding: '12px', background: 'var(--teal-light)',
                  borderRadius: 8, textAlign: 'center', marginBottom: 8
                }}>
                  {w.punjabi}
                </div>
                <div style={{ fontSize: 11, color: 'var(--text3)' }}>
                  👆 Tap to flip back
                </div>
              </>
            )}
          </div>
        ))}
      </div>

      <p style={{ marginTop: 20, fontSize: 12, color: 'var(--text3)', textAlign: 'center' }}>
        💡 Click any card to see its Punjabi meaning. Use these words in your IELTS essays for higher band scores.
      </p>
    </Layout>
  )
}
