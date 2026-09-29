import { useState } from 'react'
import { topics } from './lore.jsx'
import { AudioPlayer } from './AudioPlayer'

export default function App() {
  const [activeTopic, setActiveTopic] = useState(null)

  const openTopic = (id) => {
    setActiveTopic(id)
    window.scrollTo(0, 0)
  }

  const topic = topics.find((t) => t.id === activeTopic)

  return (
    <div className="container">
      {topic ? (
        <ArticleView topic={topic} onBack={() => setActiveTopic(null)} />
      ) : (
        <HomeView onSelect={openTopic} />
      )}
      <footer className="site-footer">
       Todas imagens dos personagens foram geradas por IA
      </footer>
    </div>
  )
}

function HomeView({ onSelect }) {
  return (
    <>
      <header className="site-header hero">
        <img
          className="hero-image"
          src={`${import.meta.env.BASE_URL}images/sidara tocando gaita.jpg`}
          alt=""
          aria-hidden="true"
        />
        <video
          className="hero-video"
          src={`${import.meta.env.BASE_URL}assets/video/sidara_hero.mp4`}
          autoPlay
          muted
          loop
          playsInline
        />
        <div className="hero-content">
          <div className="eyebrow">Barda · Pirata · Meio-elfa</div>
          <h1>Sidara Elunara</h1>

          <p className="subtitle">
            A Pirata que cantava para a lua
          </p>
          <div className="divider" />
        </div>
      </header>

      <main className="topics">
        <div className="topics-label">A Lore</div>
        {topics.map((t) => (
          <button
            key={t.id}
            className="topic-card"
            onClick={() => onSelect(t.id)}
            disabled={t.comingSoon}
          >
            <h2>{t.title}</h2>
            <p>{t.summary}</p>
            {t.comingSoon && <span className="soon">Em breve</span>}
          </button>
        ))}
      </main>
    </>
  )
}

function ArticleView({ topic, onBack }) {
  return (
    <article className="article">
      <button className="back-link" onClick={onBack}>
        ← Voltar
      </button>
      <h1>{topic.title}</h1>
      <p className="article-sub">{topic.summary}</p>
      {topic.audio && (
        <AudioPlayer
          src={`${import.meta.env.BASE_URL}${topic.audio.src}`}
          title={topic.audio.title}
          note={topic.note}
        />
      )}
      {topic.description && (
        <p className="chapter-description">{topic.description}</p>
      )}
      <div className="article-body">{topic.content}</div>
    </article>
  )
}
