import './App.css'

const LOGO = 'The Weather Archive'

function App() {
  return (
    <main>
      <section className="home">
        <h1 className="logo">{LOGO}</h1>
        <form className="search" onSubmit={(e) => e.preventDefault()}>
          <input type="text" placeholder="Search a city, e.g. Vienna" list="cities" aria-label="City search" />
          <datalist id="cities">
            <option value="Vienna" />
            <option value="Berlin" />
            <option value="Paris" />
            <option value="London" />
          </datalist>
          <button type="submit">Search</button>
        </form>
      </section>

      <section className="city">
        <h2 className="logo small">{LOGO}</h2>
        <h3>Vienna</h3>
        <div className="video">Video placeholder (compilation of selected period)</div>
        <div className="plot">Plot placeholder (temperature, humidity, air pressure per hour)</div>
        <div className="controls">
          <label>Date <input type="date" /></label>
          <label>Hour <input type="range" min="0" max="23" defaultValue="12" /></label>
        </div>
        <p className="error">Example error: City not found. Please choose one from the list.</p>
      </section>
    </main>
  )
}

export default App
