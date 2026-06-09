import { useState } from 'react'
import Layout from '../components/Layout'

const WRITING_TASKS = [
  {
    type: 'Task 2', label: 'Opinion essay',
    prompt: 'Some people believe that students should study in groups, while others prefer studying alone. Discuss both views and give your own opinion.',
    minWords: 250
  },
  {
    type: 'Task 2', label: 'Advantages & disadvantages',
    prompt: 'The internet has changed the way people communicate. What are the advantages and disadvantages of this change?',
    minWords: 250
  },
  {
    type: 'Task 1', label: 'Describe a graph',
    prompt: 'The bar chart shows the percentage of people using smartphones in India from 2015 to 2023. Summarise the information and report the main features.',
    minWords: 150
  },
]

export default function Practice() {
  const [activeTab, setActiveTab] = useState('writing')
  const [selectedTask, setSelectedTask] = useState(0)
  const [answer, setAnswer] = useState('')
  const [feedback, setFeedback] = useState('')
  const [loading, setLoading] = useState(false)

  const wordCount = answer.trim().split(/\s+/).filter(Boolean).length
  const task = WRITING_TASKS[selectedTask]

  const getFeedback = async () => {
    if (!answer.trim() || answer.length < 50) return
    setLoading(true)
    setFeedback('')
    try {
      const res = await fetch('/api/feedback', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ answer, task: task.prompt, type: task.type })
      })
      const data = await res.json()
      setFeedback(data.feedback || 'Could not generate feedback.')
    } catch (e) {
      setFeedback('Network error. Please try again.')
    }
    setLoading(false)
  }

  return (
    <Layout student="Rahul Singh">
      <h1 style={{ fontSize: 20, fontWeight: 700, marginBottom: 6 }}>✏️ Practice</h1>
      <p style={{ fontSize: 13, color: 'var(--text2)', marginBottom: 20 }}>
        Practice IELTS writing tasks and get instant AI feedback with band score estimates.
      </p>

      {/* Tab selector */}
      <div style={{ display: 'flex', gap: 8, marginBottom: 20 }}>
        {['writing', 'speaking', 'reading'].map(tab => (
          <button key={tab} onClick={() => setActiveTab(tab)}
            style={{
              padding: '8px 18px', borderRadius: 999, fontSize: 13,
              fontWeight: 500, cursor: 'pointer',
              background: activeTab === tab ? 'var(--blue)' : 'var(--surface)',
              color: activeTab === tab ? 'white' : 'var(--text2)',
              border: activeTab === tab ? 'none' : '1px solid var(--border)'
            }}>
            {tab === 'writing' ? '✏️' : tab === 'speaking' ? '🎤' : '📄'} {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </button>
        ))}
      </div>

      {activeTab === 'writing' && (
        <div>
          {/* Task selector */}
          <div style={{ display: 'flex', gap: 8, marginBottom: 16, flexWrap: 'wrap' }}>
            {WRITING_TASKS.map((t, i) => (
              <button key={i} onClick={() => { setSelectedTask(i); setAnswer(''); setFeedback('') }}
                style={{
                  padding: '6px 14px', borderRadius: 8, fontSize: 12, cursor: 'pointer',
                  background: selectedTask === i ? 'var(--blue-light)' : 'var(--surface)',
                  color: selectedTask === i ? 'var(--blue-dark)' : 'var(--text2)',
                  border: selectedTask === i ? '1px solid var(--blue)' : '1px solid var(--border)',
                  fontWeight: selectedTask === i ? 600 : 400
                }}>
                {t.type} — {t.label}
              </button>
            ))}
          </div>

          {/* Task prompt */}
          <div className="card" style={{
            marginBottom: 14, background: 'var(--blue-light)', border: '1px solid #B5D4F4'
          }}>
            <div style={{ fontSize: 11, fontWeight: 600, color: 'var(--blue)', marginBottom: 6 }}>
              {task.type} TASK — minimum {task.minWords} words
            </div>
            <div style={{ fontSize: 14, color: 'var(--text)', lineHeight: 1.6 }}>
              {task.prompt}
            </div>
          </div>

          {/* Writing area */}
          <textarea
            value={answer}
            onChange={e => setAnswer(e.target.value)}
            placeholder={`Write your ${task.type} answer here...`}
            style={{
              width: '100%', minHeight: 200, padding: '12px 14px',
              border: '1px solid var(--border)', borderRadius: 8,
              fontSize: 14, lineHeight: 1.7, resize: 'vertical',
              background: 'var(--surface)', color: 'var(--text)',
              fontFamily: 'inherit'
            }}
          />

          {/* Word count + submit */}
          <div style={{
            display: 'flex', alignItems: 'center', justifyContent: 'space-between',
            marginTop: 10, marginBottom: 16
          }}>
            <span style={{
              fontSize: 12,
              color: wordCount >= task.minWords ? '#0F6E56' : 'var(--text3)'
            }}>
              {wordCount} words {wordCount >= task.minWords ? '✓ Minimum reached' : `(need ${task.minWords - wordCount} more)`}
            </span>
            <button className="btn-primary" onClick={getFeedback}
              disabled={loading || answer.length < 50}
              style={{ opacity: answer.length < 50 ? 0.5 : 1 }}>
              {loading ? '⏳ Analysing...' : '🤖 Get AI feedback'}
            </button>
          </div>

          {/* Feedback */}
          {feedback && (
            <div className="card" style={{ background: '#F6FDF9', borderColor: '#9FE1CB' }}>
              <div style={{ fontWeight: 600, fontSize: 14, marginBottom: 10, color: '#0F6E56' }}>
                ✅ AI Feedback
              </div>
              <div style={{ fontSize: 13, lineHeight: 1.8, whiteSpace: 'pre-wrap', color: 'var(--text)' }}>
                {feedback}
              </div>
            </div>
          )}
        </div>
      )}

      {activeTab === 'speaking' && (
        <div>
          <div className="card" style={{ textAlign: 'center', padding: '40px 20px' }}>
            <div style={{ fontSize: 48, marginBottom: 16 }}>🎤</div>
            <h2 style={{ fontSize: 18, fontWeight: 600, marginBottom: 8 }}>Speaking practice</h2>
            <p style={{ fontSize: 13, color: 'var(--text2)', marginBottom: 20, maxWidth: 400, margin: '0 auto 20px' }}>
              Practice IELTS speaking Part 1, 2 and 3 with AI-generated cue cards and feedback on your responses.
            </p>
            <div style={{ display: 'flex', gap: 10, justifyContent: 'center', flexWrap: 'wrap' }}>
              {['Part 1 — Interview', 'Part 2 — Cue card', 'Part 3 — Discussion'].map(p => (
                <span key={p} className="badge badge-blue" style={{ fontSize: 12, padding: '6px 14px' }}>{p}</span>
              ))}
            </div>
            <p style={{ fontSize: 12, color: 'var(--text3)', marginTop: 20 }}>
              🚧 Full speaking module coming soon — your teacher will add this shortly.
            </p>
          </div>
        </div>
      )}

      {activeTab === 'reading' && (
        <div>
          <div className="card">
            <h2 style={{ fontSize: 16, fontWeight: 600, marginBottom: 12 }}>📄 Reading practice types</h2>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
              {[
                { name: 'True / False / Not Given', icon: '✓✗?', desc: 'Most common IELTS question type' },
                { name: 'Multiple choice', icon: '🔘', desc: 'Choose the correct option' },
                { name: 'Matching headings', icon: '↔️', desc: 'Match paragraphs to headings' },
                { name: 'Summary completion', icon: '📝', desc: 'Fill gaps using passage words' },
              ].map(t => (
                <div key={t.name} className="card" style={{ cursor: 'pointer', padding: '12px 14px' }}>
                  <div style={{ fontSize: 20, marginBottom: 6 }}>{t.icon}</div>
                  <div style={{ fontSize: 13, fontWeight: 600 }}>{t.name}</div>
                  <div style={{ fontSize: 11, color: 'var(--text3)', marginTop: 4 }}>{t.desc}</div>
                </div>
              ))}
            </div>
            <p style={{ fontSize: 12, color: 'var(--text3)', marginTop: 14 }}>
              🚧 Interactive reading passages coming soon.
            </p>
          </div>
        </div>
      )}
    </Layout>
  )
}
