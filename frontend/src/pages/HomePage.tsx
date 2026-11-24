import { useState } from 'react'

export default function HomePage() {
  const [query, setQuery] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const suggestions = ['Vienna', 'Graz', 'Linz', 'Salzburg', 'Innsbruck']; // Example suggestions
  const filteredSuggestions = suggestions.filter((topic) =>
    topic.toLowerCase().includes(query.trim().toLowerCase())
  );
  const showSuggestions = isOpen && filteredSuggestions.length > 0;

  function handleQuery(event: React.ChangeEvent<HTMLInputElement>) {
    setQuery(event.target.value);
    setIsOpen(true);
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (query.trim()) {
      window.location.search = new URLSearchParams({ topic: query.trim() }).toString();
    }
  }

  return (
    <>
        <form className="m-4" onSubmit={handleSubmit}>
          <div className="flex items-start gap-3 w-full">
            <div className="relative min-w-0 flex-1" onBlur={(event) => {
              if (!event.currentTarget.contains(event.relatedTarget)) setIsOpen(false);
            }} onKeyDown={(event) => {
              if (event.key === 'Escape') setIsOpen(false);
            }}>
              <label htmlFor="topic" className="sr-only">Search for a city</label>
              <input id="topic" type="search" placeholder="Vienna, Graz, Linz..."
              autoComplete="off" value={query}
              onChange={handleQuery}
              onFocus={() => setIsOpen(true)}
              aria-controls={showSuggestions ? 'topic-suggestions' : undefined}
              className={`bg-white border border-blue-800 px-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-inset ${showSuggestions ? 'rounded-t-3xl rounded-b-none' : 'rounded-3xl'}`}/>
              
              {/* Dropdown suggestions */}
              {showSuggestions && (
                <ul id="topic-suggestions" aria-label="Suggested cities" className="absolute top-full left-0 z-10 overflow-hidden bg-white border border-t-0 border-blue-800 rounded-b-3xl w-full shadow-md text-left">
                  {filteredSuggestions.map((topic) => (
                    <li key={topic}>
                      <button type="button" className="block w-full px-4 py-3 text-left hover:bg-blue-100 focus:bg-blue-100 focus:outline-none cursor-pointer" onClick={() => {
                        setQuery(topic);
                        setIsOpen(false);
                      }}>
                        {topic}
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </div>
            <button type="submit" className="shrink-0 border border-blue-800 bg-blue-800 text-white px-4 py-3 rounded-3xl cursor-pointer hover:bg-blue-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-800">Search</button>
          </div>
        </form>
    </>
  )
}
