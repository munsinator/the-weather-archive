import HomePage from './pages/HomePage'
import ResultsPage from './pages/ResultsPage'

export default function App() {
  const topic = new URLSearchParams(window.location.search).get('topic');
  return (
    <>
      {topic ? <ResultsPage topic={topic} /> : <HomePage />}
    </>
  )
}

