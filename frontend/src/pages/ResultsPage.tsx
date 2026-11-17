export default function ResultsPage({ topic }: { topic: string }) {
  return (
    <>
      <header><a href={window.location.pathname}>The Weather Archive</a></header>
      <main>
        <h1>{topic}</h1>
        <section aria-labelledby="period-heading">
          <h2 id="period-heading">Time period</h2>
          <p>
            <label htmlFor="date">Date</label>{' '}
            <input id="date" type="date" disabled />
          </p>
          <p>
            <label htmlFor="hour">Hour of the day</label>{' '}
            <input id="hour" type="range" min="0" max="23" defaultValue="0" disabled />
          </p>
          <p>Available dates and hours will appear when data is connected.</p>
        </section>
        <section aria-labelledby="video-heading">
          <h2 id="video-heading">Weather video</h2>
          <video controls aria-label={`Weather compilation for ${topic}`} />
          <p>No video available yet.</p>
        </section>
        <section aria-labelledby="metadata-heading">
          <h2 id="metadata-heading">Weather metadata</h2>
          <p>The temperature, humidity and air pressure plot will appear here.</p>
          <dl>
            <dt>Temperature</dt><dd>No data</dd>
            <dt>Humidity</dt><dd>No data</dd>
            <dt>Air pressure</dt><dd>No data</dd>
          </dl>
        </section>
      </main>
    </>
  )
}
