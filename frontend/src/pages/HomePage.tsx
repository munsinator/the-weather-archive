import { useState } from 'react'

// Example topics

export default function HomePage() {
  const [query, setQuery] = useState('');
  const [selectedTopic, setSelectedTopic] = useState('');

  function handleQuery(event: React.ChangeEvent<HTMLInputElement>) {
    setQuery(event.target.value);
    console.log('Query:', event.target.value);
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    // Triggered by pressing Enter in the input field or clicking a suggested topic
    event.preventDefault();
    setSelectedTopic(query); //Note: This is where you would handle the search logic, e.g., making an API call or filtering data based on the query.
    console.log('Selected topic:', selectedTopic);
    console.log('Submitted query:', query);
  }

  return (
    <>
      <header>
        <h1 className="text-5xl font-bold text-blue-600 m-4">The Weather Archive</h1>
      </header>
      <main>
        <form className="flex flex-col items-center justify-center m-4" onSubmit={handleSubmit}>
          <div className="flex gap-3 w-full">
            <input id="topic" type="search" placeholder="Vienna, Graz, Linz..."
              autoComplete="off" value={query}
              onChange={handleQuery}
              className="bg-white border border-blue-800 p-2 rounded-3xl w-full"
            />
            <button type="submit" className="bg-blue-600 text-white p-2 rounded-3xl">Search</button>
          </div>
          {/* Dropdown suggestions */}
          {/*suggestions.length > 0 && (
            <ul className="bg-white border border-blue-800 rounded-3xl mt-2 w-full">
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
          )*/}
          <div></div>
        </form>
      </main>
    </>
  )
}
