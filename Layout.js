import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

const NAV = [
  { href: '/', label: 'Home', icon: '🏠' },
  { href: '/lessons', label: 'Lessons', icon: '📚' },
  { href: '/practice', label: 'Practice', icon: '✏️' },
  { href: '/vocabulary', label: 'Vocabulary', icon: '📖' },
  { href: '/exams', label: 'Exams', icon: '📋' },
]

export default function Layout({ children, student }) {
  const router = useRouter()
  const [menuOpen, setMenuOpen] = useState(false)

  const initials = student
    ? student.split(' ').map(w => w[0]).join('').toUpperCase().slice(0, 2)
    : 'ST'

  return (
    <div style={{ minHeight: '100vh', background: 'var(--bg)' }}>
      {/* Top bar */}
      <header style={{
        background: 'var(--surface)', borderBottom: '1px solid var(--border)',
        padding: '0 24px', display: 'flex', alignItems: 'center',
        justifyContent: 'space-between', height: 58, position: 'sticky', top: 0, zIndex: 100
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <div style={{
            width: 36, height: 36, borderRadius: 8, background: 'var(--blue)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            color: 'white', fontWeight: 600, fontSize: 14
          }}>PE</div>
          <div>
            <div style={{ fontWeight: 600, fontSize: 14, color: 'var(--text)' }}>Pioneer Education</div>
            <div style={{ fontSize: 11, color: 'var(--text3)' }}>Morinda, Punjab</div>
          </div>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
          <span style={{ fontSize: 18 }}>🔔</span>
          <div style={{
            width: 34, height: 34, borderRadius: '50%',
            background: 'var(--teal-light)', display: 'flex',
            alignItems: 'center', justifyContent: 'center',
            fontSize: 12, fontWeight: 600, color: '#0F6E56'
          }}>{initials}</div>
        </div>
      </header>

      {/* Desktop nav */}
      <nav style={{
        background: 'var(--surface)', borderBottom: '1px solid var(--border)',
        padding: '0 24px', display: 'flex', gap: 0, overflowX: 'auto'
      }}>
        {NAV.map(item => {
          const active = router.pathname === item.href
          return (
            <Link key={item.href} href={item.href}>
              <div style={{
                padding: '12px 16px', display: 'flex', alignItems: 'center', gap: 6,
                borderBottom: active ? '2px solid var(--blue)' : '2px solid transparent',
                color: active ? 'var(--blue)' : 'var(--text2)',
                fontWeight: active ? 600 : 400, fontSize: 13,
                cursor: 'pointer', whiteSpace: 'nowrap', transition: 'color 0.15s'
              }}>
                <span>{item.icon}</span> {item.label}
              </div>
            </Link>
          )
        })}
      </nav>

      {/* Page content */}
      <main style={{ maxWidth: 900, margin: '0 auto', padding: '24px 20px' }}>
        {children}
      </main>
    <a href="https://wa.me/919855991214" target="_blank"
  style={{
    position: 'fixed', bottom: 24, right: 24,
    background: '#25D366', color: 'white',
    width: 56, height: 56, borderRadius: '50%',
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    fontSize: 28, boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
    zIndex: 999, textDecoration: 'none'
  }}>
  💬
</a></div>
  )
}
