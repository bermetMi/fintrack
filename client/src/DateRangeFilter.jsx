export default function DateRangeFilter({ dateRange, setDateRange, error }) {
  return (
    <section className="card" aria-label="Zeitraumfilter">
      <h2 className="card__title">Zeitraum</h2>
      <div className="form">
        <div className="field">
          <label className="field__label" htmlFor="range-from">Von</label>
          <input
            id="range-from"
            className="input"
            type="date"
            min="0001-01-01"
            max="9999-12-31"
            value={dateRange.from}
            onChange={(e) => setDateRange({ ...dateRange, from: e.target.value })}
            aria-describedby="range-message"
          />
        </div>
        <div className="field">
          <label className="field__label" htmlFor="range-to">Bis</label>
          <input
            id="range-to"
            className="input"
            type="date"
            min="0001-01-01"
            max="9999-12-31"
            value={dateRange.to}
            onChange={(e) => setDateRange({ ...dateRange, to: e.target.value })}
            aria-describedby="range-message"
          />
        </div>
        <button
          type="button"
          className="btn btn--ghost"
          onClick={() => setDateRange({ from: "", to: "" })}
        >
          Zeitraum zurücksetzen
        </button>
      </div>
      {error ? (
        <p id="range-message" className="form__error" role="alert">{error}</p>
      ) : (
        <p id="range-message" className="field__hint">
          {dateRange.from
            ? "Start- und Enddatum zählen mit. Summen, Diagramm und Liste aktualisieren sich automatisch."
            : "Alle Transaktionen, ohne zeitliche Begrenzung."}
        </p>
      )}
    </section>
  );
}
