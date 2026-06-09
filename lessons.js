import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import Layout from '../components/Layout'
import { COURSES } from '../lib/data'

const COLOR_MAP = {
  blue: 'var(--blue)',
  teal: 'var(--teal)',
  amber: 'var(--amber)',
  purple: 'var(--purple)',
}

export default function Lessons() {
  const router = useRouter()
  const [activeCourse, setActiveCourse] = useState('ielts')

  useEffect(() => {
    if (router.query.course) setActiveCourse(router.query.course)
  }, [router.query.course])

  const course = COURSES.find(c => c.id === activeCourse)
  const doneCount = course.lessons.filter(l => l.done).length
  const fillColor = COLOR_MAP[course.color]

  return (
    <Layout student="Rahul Singh">

      {/* Course selector tabs */}
      <div style={{ display: 'flex', gap: 8, marginBottom: 20, flexWrap: 'wrap' }}>
        {COURSES.map(c => (
          <button key={c.id} onClick={() => setActiveCourse(c.id)}
            style={{
              padding: '7px 16px', borderRadius: 999, fontSize: 13, fontWeight: 500,
              border: activeCourse === c.id ? `2px solid ${COLOR_MAP[c.color]}` : '1px solid var(--border)',
              background: activeCourse === c.id ? `var(--${c.color === 'blue' ? 'blue' : c.color}-light)` : 'var(--surface)',
              color: activeCourse === c.id ? COLOR_MAP[c.color] : 'var(--text2)',
              cursor: 'pointer'
            }}>
            {c.emoji} {c.name}
          </button>
        ))}
      </div>

      {/* Course header */}
      <div className="card" style={{ marginBottom: 20, display: 'flex', gap: 16, alignItems: 'flex-start' }}>
        <div style={{ fontSize: 40 }}>{course.emoji}</div>
        <div style={{ flex: 1 }}>
          <h1 style={{ fontSize: 18, fontWeight: 700, marginBottom: 4 }}>{course.name}</h1>
          <p style={{ fontSize: 13, color: 'var(--text2)', marginBottom: 12 }}>{course.description}</p>
          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', alignItems: 'center' }}>
            <span className="badge badge-blue">{course.level}</span>
            <span className="badge badge-green">{doneCount} of {course.lessons.length} done</span>
          </div>
          <div className="progress-bar" style={{ marginTop: 12, maxWidth: 320 }}>
            <div className="progress-fill" style={{
              width: `${Math.round((doneCount / course.lessons.length) * 100)}%`,
              background: fillColor
            }} />
          </div>
        </div>
      </div>

      {/* Lesson list */}
      <div className="card" style={{ padding: 0, overflow: 'hidden' }}>
        <div style={{
          padding: '12px 18px', borderBottom: '1px solid var(--border)',
          fontWeight: 600, fontSize: 14, display: 'flex', alignItems: 'center', gap: 8
        }}>
          📋 All lessons
        </div>

        {course.lessons.map((lesson, idx) => (
          <div key={lesson.id}
            style={{
              display: 'flex', alignItems: 'center', gap: 14,
              padding: '14px 18px',
              borderBottom: idx < course.lessons.length - 1 ? '1px solid var(--border)' : 'none',
              background: lesson.active ? '#F8FAFF' : 'transparent',
              cursor: lesson.done || lesson.active ? 'pointer' : 'default',
              opacity: (!lesson.done && !lesson.active) ? 0.6 : 1,
              transition: 'background 0.1s'
            }}
            onClick={() => (lesson.done || lesson.active) && router.push(`/lesson/${course.id}/${lesson.id}`)}
          >
            {/* Status circle */}
            <div style={{
              width: 32, height: 32, borderRadius: '50%', flexShrink: 0,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: 13, fontWeight: 600,
              background: lesson.done ? 'var(--teal-light)' :
                lesson.active ? fillColor : 'var(--bg)',
              color: lesson.done ? '#0F6E56' :
                lesson.active ? 'white' : 'var(--text3)',
              border: lesson.done ? 'none' :
                lesson.active ? 'none' : '1px solid var(--border)'
            }}>
              {lesson.done ? '✓' : lesson.active ? lesson.id : '🔒'}
            </div>

            <div style={{ flex: 1 }}>
              <div style={{ fontWeight: lesson.active ? 600 : 500, fontSize: 14 }}>
                Lesson {lesson.id}: {lesson.title}
              </div>
              <div style={{ fontSize: 12, color: 'var(--text3)', marginTop: 2 }}>{lesson.sub}</div>
            </div>

            <div>
              {lesson.done && <span className="badge badge-green">Done ✓</span>}
              {lesson.active && <span className="badge badge-blue">In progress</span>}
              {!lesson.done && !lesson.active && <span className="badge badge-gray">Locked</span>}
            </div>
          </div>
        ))}
      </div>
    </Layout>
  )
}
