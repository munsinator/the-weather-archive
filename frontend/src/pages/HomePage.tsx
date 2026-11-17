import { useState } from 'react'
import type { FormEvent } from 'react'

// Example topics
const topics = ['Vienna', 'Graz', 'Linz']

export default function HomePage() {
  const [query, setQuery] = useState('')
  const [selectedTopic, setSelectedTopic] = useState('')
  const [error, setError] = useState('')
  const suggestions = query.trim() && !selectedTopic
    ? topics.filter((topic) => topic.toLowerCase().includes(query.trim().toLowerCase()))
    : []

  function search(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (!selectedTopic) {
      setError('Please choose a topic from the suggestions before searching.')
      return
    }
    window.location.search = new URLSearchParams({ topic: selectedTopic }).toString()
  }

  return (
    <>
      <header><h1>The Weather Archive</h1></header>
      <main>
        <form onSubmit={search}>
          <label htmlFor="topic">Search for a topic</label>{' '}
          <input id="topic" type="search" placeholder="e.g. Vienna"
            autoComplete="off" value={query}
            onChange={(event) => {
              setQuery(event.target.value)
              setSelectedTopic('')
              setError('')
            }} />{' '}
          <button type="submit">Search</button>
          {suggestions.length > 0 && (
            <ul aria-label="Suggested topics">
              {suggestions.map((topic) => (
                <li key={topic}>
                  <button type="button" onClick={() => {
                    setQuery(topic)
                    setSelectedTopic(topic)
                    setError('')
                  }}>{topic}</button>
                </li>
              ))}
            </ul>
          )}
          {query.trim() && !selectedTopic && suggestions.length === 0 && (
            <p>No matching topics found.</p>
          )}
          {error && <p role="alert">{error}</p>}
        </form>
      </main>
    </>
  )
}
