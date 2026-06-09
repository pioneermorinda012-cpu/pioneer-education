import { useState } from 'react'
import Layout from '../components/Layout'

const EXAMS = [
  {
    id: 'ielts-reading', course: 'IELTS', title: 'IELTS Reading mock test',
    emoji: '📄', color: 'blue', bg: 'var(--blue-light)',
    duration: '60 min', questions: 40,
    desc: 'Three passages with 40 questions. True/False/NG, MCQ, matching.',
    pastScores: ['Band 6.0', 'Band 6.5', 'Band 7.0']
  },
  {
    id: 'ielts-writing', course: 'IELTS', title: 'IELTS Writing mock test',
    emoji: '✏️', color: 'blue', bg: 'var(--blue-light)',
    duration: '60 min', questions: 2,
    desc: 'Task 1 (graph description) + Task 2 (essay). AI band score feedback.',
    pastScores: ['Band 5.5', 'Band 6.0']
  },
  {
    id: 'german-a1', course: 'German A1', title: 'German A1 mock exam',
    emoji: '🇩🇪', color: 'amber', bg: 'var(--amber-light)',
    duration: '45 min', questions: 30,
    desc: 'Goethe A1 format — grammar, vocabulary, reading and listening.',
    pastScores: ['72%', '81%']
  },
  {
    id: 'english-fluency', course: 'Spoken English', title: 'English fluency test',
    emoji: '🗣️', color: 'teal', bg: 'var(--teal-light)',
    duration: '20 min', questions: 20,
    desc: 'Grammar, vocabulary, idioms and sentence correction.',
    pastScores: ['68%']
  },
  {
    id: 'pte-mock', course: 'PTE Academic', title: 'PTE Academic mock test',
    emoji: '📝', color: 'purple', bg: 'var(--purple-light)',
    duration: '50 min', questions: 15,
    desc: 'Read Aloud, Repeat Sentence, Describe Image, Summarize Written Text.',
    pastScores: []
  },
]

const BORDER_MAP = {
  blue: 'var(--blue)', teal: 'var(--teal)',
  amber: 'var(--amber)', purple: 'var(--purple)'
}

export default function Exams() {
  const [started, setStarted] = useState(null)

  if (started) {
    return (
      <Layout student="Rahul Singh">
        <div style={{ textAlign: 'center', padding: '60px 20px' }}>
          <div style={{ fontSize: 60, marginBottom: 20 }}>{started.emoji}</div>
          <h1 style={{ fontSize: 22, fontWeight: 700, marginBottom: 8 }}>{started.title}</h1>
          <p style={{ fontSize: 14, color: 'var(--text2)', marginBottom: 8 }}>
            ⏱ Duration: {started.duration} · 📋 Questions: {started.questions}
          </p>
          <p style={{ fontSize: 13, color: 'var(--text2)', maxWidth: 400, margin: '0 auto 28px' }}>
            {started.desc}
          </p>
          <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
            <button className="btn-primary" style={{ fontSize: 15, padding: '12px 28px' }}>
              🚀 Start exam now
            </button>
            <button className="btn-outline" onClick={() => setStarted(null)}>
              ← Back to exams
            </button>
          </div>
          <p style={{ fontSize: 12, color: 'var(--text3)', marginTop: 28 }}>
            🚧 Full exam engine is being set up by your teacher. Check back soon!
          </p>
        </div>
      </Layout>
    )
  }

  return (
    <Layout student="Rahul Singh">
      <h1 style={{ fontSize: 20, fontWeight: 700, marginBottom: 6 }}>📋 Mock exams</h1>
      <p style={{ fontSize: 13, color: 'var(--text2)', marginBottom: 24 }}>
        Take timed mock tests for each course and get instant scores and feedback.
      </p>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: 16 }}>
        {EXAMS.map(exam => (
          <div key={exam.id} className="card" style={{ padding: 0, overflow: 'hidden' }}>
            <div style={{
              height: 72, background: exam.bg,
              display: 'flex', alignItems: 'center', padding: '0 18px', gap: 12
            }}>
              <span style={{ fontSize: 32 }}>{exam.emoji}</span>
              <div>
                <div style={{ fontSize: 11, fontWeight: 600, color: BORDER_MAP[exam.color], opacity: 0.7 }}>
                  {exam.course}
                </div>
                <div style={{ fontSize: 14, fontWeight: 700 }}>{exam.title.replace(exam.course + ' ', '')}</div>
              </div>
            </div>
            <div style={{ padding: '14px 16px' }}>
              <p style={{ fontSize: 12, color: 'var(--text2)', marginBottom: 12, lineHeight: 1.6 }}>
                {exam.desc}
              </p>
              <div style={{ display: 'flex', gap: 8, marginBottom: 14, flexWrap: 'wrap' }}>
                <span className="badge badge-gray">⏱ {exam.duration}</span>
                <span className="badge badge-gray">📋 {exam.questions} questions</span>
              </div>

              {exam.pastScores.length > 0 && (
                <div style={{ marginBottom: 14 }}>
                  <div style={{ fontSize: 11, color: 'var(--text3)', marginBottom: 6 }}>Past scores</div>
                  <div style={{ display: 'flex', gap: 6 }}>
                    {exam.pastScores.map((s, i) => (
                      <span key={i} className="badge badge-green" style={{ fontSize: 11 }}>{s}</span>
                    ))}
                  </div>
                </div>
              )}

              <button className="btn-primary" style={{ width: '100%', justifyContent: 'center' }}
                onClick={() => setStarted(exam)}>
                Start exam →
              </button>
            </div>
          </div>
        ))}
      </div>
    </Layout>
  )
}
