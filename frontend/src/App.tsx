import HomePage from './pages/HomePage'
import ResultsPage from './pages/ResultsPage'

export default function App() {
  const topic = new URLSearchParams(window.location.search).get('topic');
  return (
    <>
      <header>
        <a className="text-5xl font-bold text-blue-600 m-4" href="/">The Weather Archive</a>
      </header>
      <main>
        {topic ? <ResultsPage topic={topic} /> : <HomePage />}
      </main>
    </>
  )
}

