import HomePage from './pages/HomePage'
import ResultsPage from './pages/ResultsPage'

function App() {
  const topic = new URLSearchParams(window.location.search).get('topic')
  return topic ? <ResultsPage topic={topic} /> : <HomePage />
}

export default App
