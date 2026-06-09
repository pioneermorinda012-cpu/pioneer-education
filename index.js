import { useState } from 'react'
import Layout from '../components/Layout'
import { COURSES } from '../lib/data'

const COLOR_MAP = {
  blue: { bg: 'var(--blue-light)', fill: 'var(--blue)', text: 'var(--blue-dark)' },
  teal: { bg: 'var(--teal-light)', fill: 'var(--teal)', text: '#0F6E56' },
  amber: { bg: 'var(--amber-light)', fill: 'var(--amber)', text: '#633806' },
  purple: { bg: 'var(--purple-light)', fill: 'var(--purple)', text: '#3C3489' },
}

const MOCK_PROGRESS = { ielts: 35, english: 58, german: 12, pte: 0 }

const STATS = [
  { icon: '🔥', label: 'Day streak', value: '7 days', color: 'amber' },
  { icon: '✅', label: 'Lessons done', value: '24', color: 'teal' },
  { icon: '📖', label: 'Words learned', value: '340', color: 'blue' },
  { icon: '⏱️', label: 'Hours studied', value: '18.5', color: 'purple' },
]

export default function Home() {
  const activeLesson = { course: 'IELTS', title: 'Writing Task 1 — Graphs', lesson: 4, total: 48 }

  return (
    <Layout student="Rahul Singh">

      {/* Continue banner */}
      <div className="card" style={{
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        marginBottom: 24, background: 'var(--blue)', border: 'none', flexWrap: 'wrap', gap: 12
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
          <div style={{
            width: 44, height: 44, borderRadius: 10, background: 'rgba(255,255,255,0.2)',
            display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 22
          }}>▶️</div>
          <div>
            <div style={{ fontWeight: 600, fontSize: 15, color: 'white' }}>
              Continue: {activeLesson.course} — {activeLesson.title}
            </div>
            <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.75)', marginTop: 2 }}>
              Lesson {activeLesson.lesson} of {activeLesson.total}
            </div>
          </div>
        </div>
        <a href="/lessons">
          <button className="btn-primary" style={{ background: 'white', color: 'var(--blue)' }}>
            Continue →
          </button>
        </a>
      </div>

      {/* Stats row */}
      <div style={{
        display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
        gap: 12, marginBottom: 28
      }}>
        {STATS.map(s => {
          const c = COLOR_MAP[s.color]
          return (
            <div key={s.label} className="card" style={{
              display: 'flex', alignItems: 'center', gap: 12, padding: '14px 16px'
            }}>
              <div style={{
                width: 40, height: 40, borderRadius: 8, background: c.bg,
                display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 20
              }}>{s.icon}</div>
              <div>
                <div style={{ fontSize: 11, color: 'var(--text3)' }}>{s.label}</div>
                <div style={{ fontSize: 20, fontWeight: 600 }}>{s.value}</div>
              </div>
            </div>
          )
        })}
      </div>

      {/* Courses */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 14 }}>
        <h2 style={{ fontSize: 16, fontWeight: 600 }}>Your courses</h2>
        <a href="/lessons" style={{ fontSize: 12, color: 'var(--blue)' }}>See all →</a>
      </div>

      <div style={{
        display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(190px, 1fr))', gap: 14
      }}>
        {COURSES.map(course => {
          const c = COLOR_MAP[course.color]
          const pct = MOCK_PROGRESS[course.id]
          const doneCount = course.lessons.filter(l => l.done).length
          return (
            <a key={course.id} href={`/lessons?course=${course.id}`}>
              <div className="card" style={{
                padding: 0, overflow: 'hidden', cursor: 'pointer',
                transition: 'box-shadow 0.15s',
                border: course.id === 'ielts' ? '2px solid var(--blue)' : '1px solid var(--border)'
              }}>
                <div style={{
                  height: 80, background: c.bg,
                  display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 36
                }}>{course.emoji}</div>
                <div style={{ padding: '12px 14px' }}>
                  <div style={{ fontWeight: 600, fontSize: 13, marginBottom: 2 }}>{course.name}</div>
                  <div style={{ fontSize: 11, color: 'var(--text3)', marginBottom: 10 }}>
                    {course.totalLessons} lessons · {course.level}
                  </div>
                  <div className="progress-bar">
                    <div className="progress-fill" style={{ width: `${pct}%`, background: c.fill }} />
                  </div>
                  <div style={{ fontSize: 10, color: 'var(--text3)', marginTop: 4 }}>
                    {pct > 0 ? `${pct}% complete · ${doneCount} lessons done` : 'Not started yet'}
                  </div>
                </div>
              </div>
            </a>
          )
        })}
      </div>

      {/* Quick actions */}
      <h2 style={{ fontSize: 16, fontWeight: 600, margin: '28px 0 14px' }}>Quick practice</h2>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 12 }}>
        {[
          { href: '/practice', icon: '✏️', label: 'Writing practice', sub: 'Task 1 & Task 2', bg: 'var(--blue-light)', color: 'var(--blue-dark)' },
          { href: '/vocabulary', icon: '📖', label: 'Vocabulary drill', sub: 'Learn 10 new words', bg: 'var(--teal-light)', color: '#0F6E56' },
          { href: '/exams', icon: '📋', label: 'Mock exam', sub: 'Full timed test', bg: 'var(--purple-light)', color: '#3C3489' },
        ].map(a => (
          <a key={a.href} href={a.href}>
            <div className="card" style={{
              cursor: 'pointer', padding: '14px 16px',
              background: a.bg, border: 'none'
            }}>
              <div style={{ fontSize: 24, marginBottom: 8 }}>{a.icon}</div>
              <div style={{ fontSize: 13, fontWeight: 600, color: a.color }}>{a.label}</div>
              <div style={{ fontSize: 11, color: a.color, opacity: 0.7, marginTop: 2 }}>{a.sub}</div>
            </div>
          </a>
        ))}
      </div>

    </Layout>
  )
}
