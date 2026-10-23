import { useState } from "react";

const EURO_PATTERN = /^\d+([.,]\d{1,2})?$/;

// "25,5" -> 2550 ; ohne Kommazahlen rechnen, damit nichts gerundet wird
function euroTextToCents(euroText) {
  const [euros, decimals = ""] = euroText.replace(",", ".").split(".");
  const cents = BigInt(euros) * 100n + BigInt(decimals.padEnd(2, "0") || "0");
  // Größere Werte könnte JavaScript als Number nicht mehr exakt darstellen
  return cents <= BigInt(Number.MAX_SAFE_INTEGER) ? Number(cents) : null;
}

export default function EuroConverter({ onUse }) {
  const [euroText, setEuroText] = useState("");

  const isValid = EURO_PATTERN.test(euroText);
  const cents = isValid ? euroTextToCents(euroText) : null;

  const handleChange = (event) => {
    setEuroText(event.target.value);
  };

  return (
    <div className="notice">
      <span className="notice__icon" aria-hidden="true">
        i
      </span>

      <div className="notice__body">
        <p className="notice__title">Beträge werden in Cent eingegeben</p>
        <p className="notice__text">
          100 Cent = 1 €. Trage hier deinen Euro-Betrag ein und übernimm die
          Cent-Zahl.
        </p>

        <div className="converter">
          <div className="converter__field">
            <label className="field__label" htmlFor="euro-input">
              Betrag in Euro
            </label>
            <div className="converter__input-wrap">
              <input
                id="euro-input"
                className="input converter__input"
                inputMode="decimal"
                placeholder="25,50"
                value={euroText}
                onChange={handleChange}
              />
              <span className="converter__unit" aria-hidden="true">
                €
              </span>
            </div>
          </div>

          <span className="converter__equals">=</span>

          <div className="converter__field">
            <span className="field__label">Betrag in Cent</span>
            <output className="converter__result">
              {cents === null ? "–" : `${cents} Cent`}
            </output>
          </div>

          <button
            type="button"
            className="btn btn--primary"
            disabled={cents === null}
            onClick={() => onUse(String(cents))}
          >
            Übernehmen
          </button>
        </div>

        {euroText !== "" && !isValid && (
          <p className="converter__error">
            Bitte so schreiben: 25 oder 25,50 (höchstens zwei Nachkommastellen).
          </p>
        )}
        {isValid && cents === null && (
          <p className="converter__error">
            Dieser Betrag ist zu groß, um ihn genau in Cent umzurechnen.
          </p>
        )}
      </div>
    </div>
  );
}
