// @vitest-environment jsdom
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { cleanup, fireEvent, render, screen, within } from "@testing-library/react";
import App from "./App";

function navigate(name) {
  fireEvent.click(screen.getByRole("link", { name, exact: true }));
}

function fill(label, value) {
  fireEvent.change(screen.getByLabelText(label, { exact: true }), {
    target: { value },
  });
}

function selectRange(from, to) {
  fill("Von", from);
  fill("Bis", to);
}

function addTransaction(note, date, amount = "100") {
  fill("Notiz", note);
  fill("Transaktionsdatum", date);
  fill("Betrag in Cent", amount);
  fireEvent.click(screen.getByRole("button", { name: "Hinzufügen", exact: true }));
}

beforeEach(() => {
  window.history.replaceState({}, "", "/");
  let nextId = 100;
  vi.spyOn(Date, "now").mockImplementation(() => nextId++);
  // jsdom hat kein Layout; Recharts braucht messbare Container und ResizeObserver.
  vi.spyOn(HTMLElement.prototype, "getBoundingClientRect").mockReturnValue({
    x: 0, y: 0, width: 640, height: 320,
    top: 0, right: 640, bottom: 320, left: 0,
    toJSON: () => ({}),
  });
  vi.stubGlobal("ResizeObserver", class {
    constructor(callback) { this.callback = callback; }
    observe() { this.callback([{ contentRect: { width: 640, height: 320 } }]); }
    unobserve() {}
    disconnect() {}
  });
});

afterEach(() => {
  cleanup();
  vi.restoreAllMocks();
  vi.unstubAllGlobals();
});

describe("shared transaction filters", () => {
  it.each([99, 100, 101])("validates a %i-character note when adding a transaction", (length) => {
    const { container } = render(<App />);
    navigate("Transaktionen");
    const note = "n".repeat(length);
    addTransaction(note, "2026-10-23");
    if (length > 100) {
      expect(screen.getByRole("alert").textContent).toContain("höchstens 100 Zeichen");
      expect(screen.getByLabelText("Notiz").value).toBe(note);
      expect(screen.queryByRole("link", { name: "In Übersicht ansehen" })).toBeNull();
    } else {
      expect(screen.queryByRole("alert")).toBeNull();
      expect(screen.getByRole("link", { name: "In Übersicht ansehen" })).toBeTruthy();
    }
    navigate("Übersicht");
    expect(container.querySelectorAll(".transaction")).toHaveLength(length > 100 ? 3 : 4);
  });

  it.each([99, 100, 101])("validates a %i-character note when editing a transaction", (length) => {
    render(<App />);
    fireEvent.click(screen.getByRole("button", { name: "Groceries vom 20.10.2026, 50,00 € bearbeiten" }));
    const note = "n".repeat(length);
    fill("Notiz", note);
    fireEvent.click(screen.getByRole("button", { name: "Speichern", exact: true }));
    if (length > 100) {
      expect(screen.getByRole("alert").textContent).toContain("höchstens 100 Zeichen");
      expect(screen.getByLabelText("Notiz").value).toBe(note);
      expect(screen.getByText("Groceries")).toBeTruthy();
      fill("Notiz", "Corrected note");
      fireEvent.click(screen.getByRole("button", { name: "Speichern", exact: true }));
      expect(screen.getByText("Corrected note")).toBeTruthy();
    } else {
      expect(screen.queryByRole("form", { name: "Transaktion bearbeiten" })).toBeNull();
      expect(screen.getByText(note)).toBeTruthy();
    }
  });

  it.each([39, 40, 41])("validates a %i-character category name when adding", (length) => {
    const { container } = render(<App />);
    navigate("Kategorien");
    const name = "c".repeat(length);
    fill("Name", name);
    fireEvent.click(screen.getByRole("button", { name: "Anlegen", exact: true }));
    if (length > 40) {
      expect(screen.getByRole("alert").textContent).toContain("höchstens 40 Zeichen");
      expect(screen.getByLabelText("Name").value).toBe(name);
      expect(container.querySelectorAll(".category")).toHaveLength(6);
      fill("Name", "Corrected category");
      fireEvent.click(screen.getByRole("button", { name: "Anlegen", exact: true }));
      expect(screen.queryByRole("alert")).toBeNull();
      expect(screen.getByText("Corrected category")).toBeTruthy();
    } else {
      expect(screen.queryByRole("alert")).toBeNull();
      expect(screen.getByText(name)).toBeTruthy();
      expect(container.querySelectorAll(".category")).toHaveLength(7);
    }
  });

  it.each([39, 40, 41])("validates a %i-character rename without breaking transaction associations", (length) => {
    render(<App />);
    navigate("Kategorien");
    fireEvent.click(within(screen.getByText("Essen").closest(".category"))
      .getByRole("button", { name: "Umbenennen" }));
    const name = "c".repeat(length);
    fill("Kategoriename", name);
    fireEvent.keyDown(screen.getByLabelText("Kategoriename"), { key: "Enter" });
    if (length > 40) {
      expect(screen.getByRole("alert").textContent).toContain("höchstens 40 Zeichen");
      expect(screen.getByLabelText("Kategoriename").value).toBe(name);
      fireEvent.click(screen.getByRole("button", { name: "Abbrechen", exact: true }));
      expect(screen.getByText("Essen")).toBeTruthy();
    } else {
      expect(screen.queryByRole("alert")).toBeNull();
      expect(screen.getByText(name)).toBeTruthy();
    }
    navigate("Übersicht");
    const row = screen.getByText("Groceries").closest(".transaction");
    expect(within(row).getByText(length > 40 ? "Essen" : name)).toBeTruthy();
  });

  it("prefills an existing transaction and cancels without changing any data", () => {
    const { container } = render(<App />);
    const edit = screen.getByRole("button", { name: "Groceries vom 20.10.2026, 50,00 € bearbeiten" });
    fireEvent.click(edit);
    expect(screen.getByLabelText("Notiz").value).toBe("Groceries");
    expect(screen.getByLabelText("Notiz")).toBe(document.activeElement);
    expect(screen.getByLabelText("Transaktionsdatum").value).toBe("2026-10-20");
    expect(screen.getByLabelText("Betrag in Cent").value).toBe("5000");
    expect(screen.getByLabelText("Kategorie").value).toBe("Essen");
    fill("Notiz", "Unsaved change");
    fill("Betrag in Cent", "100");
    fireEvent.click(screen.getByRole("button", { name: "Abbrechen", exact: true }));
    expect(screen.queryByRole("form", { name: "Transaktion bearbeiten" })).toBeNull();
    expect(screen.queryByText("Unsaved change")).toBeNull();
    expect(container.querySelectorAll(".transaction")).toHaveLength(3);
    expect(container.querySelector(".stat--expense").textContent).toContain("70,00 €");
    expect(document.activeElement).toBe(edit);
  });

  it("updates note, amount, date and category in place and recalculates the chart", () => {
    const { container } = render(<App />);
    fireEvent.click(screen.getByRole("button", { name: "Groceries vom 20.10.2026, 50,00 € bearbeiten" }));
    fill("Notiz", "Train ticket");
    fill("Betrag in Cent", "1500");
    fill("Transaktionsdatum", "2026-10-22");
    fill("Kategorie", "Transport");
    fireEvent.submit(screen.getByRole("form", { name: "Transaktion bearbeiten" }));
    expect(screen.getByRole("status").textContent).toBe("Änderungen gespeichert.");
    expect(container.querySelectorAll(".transaction")).toHaveLength(3);
    expect(screen.queryByText("Groceries")).toBeNull();
    expect(screen.getByRole("button", { name: "Train ticket vom 22.10.2026, 15,00 € bearbeiten" })).toBeTruthy();
    expect(container.querySelector(".stat--expense").textContent).toContain("35,00 €");
    const chart = screen.getByRole("region", { name: "Ausgaben nach Kategorie" });
    expect(within(chart).queryByText("Essen")).toBeNull();
    expect(within(chart).getByText("35,00 €")).toBeTruthy();
  });

  it("preserves hidden transactions and the filter when an edit moves an entry outside the range", () => {
    const { container } = render(<App />);
    selectRange("2026-10-20", "2026-10-20");
    fireEvent.click(screen.getByRole("button", { name: "Groceries vom 20.10.2026, 50,00 € bearbeiten" }));
    fill("Transaktionsdatum", "2026-11-01");
    fireEvent.click(screen.getByRole("button", { name: "Speichern", exact: true }));
    expect(container.querySelectorAll(".transaction")).toHaveLength(0);
    expect(screen.getByRole("status").textContent).toContain("außerhalb des gewählten Zeitraums");
    expect(screen.getByLabelText("Von").value).toBe("2026-10-20");
    expect(document.activeElement).toBe(screen.getByRole("heading", { name: "Übersicht" }));
    fireEvent.click(screen.getByRole("button", { name: "Zeitraum zurücksetzen" }));
    expect(container.querySelectorAll(".transaction")).toHaveLength(3);
    expect(screen.getByRole("button", { name: "Groceries vom 01.11.2026, 50,00 € bearbeiten" })).toBeTruthy();
    expect(container.querySelector(".stat--income").textContent).toContain("100,00 €");
  });

  it("switches transaction type and resets the category to one valid for that type", () => {
    const { container } = render(<App />);
    fireEvent.click(screen.getByRole("button", { name: "Groceries vom 20.10.2026, 50,00 € bearbeiten" }));
    fireEvent.click(screen.getByRole("button", { name: "Einnahme", exact: true }));
    expect(screen.getByLabelText("Kategorie").value).toBe("Gehalt");
    fill("Kategorie", "Geschenk");
    fireEvent.click(screen.getByRole("button", { name: "Speichern", exact: true }));
    expect(container.querySelector(".stat--income").textContent).toContain("150,00 €");
    expect(container.querySelector(".stat--expense").textContent).toContain("20,00 €");
    expect(within(screen.getByText("Groceries").closest(".transaction")).getByText("Geschenk")).toBeTruthy();
  });

  it("keeps invalid edits open without changing the saved transaction", () => {
    const { container } = render(<App />);
    fireEvent.click(screen.getByRole("button", { name: "Groceries vom 20.10.2026, 50,00 € bearbeiten" }));
    for (const invalidAmount of ["0", "-1", "25,50", "9007199254740992"]) {
      fill("Betrag in Cent", invalidAmount);
      fireEvent.click(screen.getByRole("button", { name: "Speichern", exact: true }));
      expect(screen.getByRole("alert")).toBeTruthy();
      expect(container.querySelector(".stat--expense").textContent).toContain("70,00 €");
    }
    fill("Betrag in Cent", "1500");
    fill("Transaktionsdatum", "");
    fireEvent.click(screen.getByRole("button", { name: "Speichern", exact: true }));
    expect(screen.getByRole("alert").textContent).toContain("Transaktionsdatum");
    fill("Transaktionsdatum", "2026-10-20");
    fill("Notiz", "   ");
    fireEvent.click(screen.getByRole("button", { name: "Speichern", exact: true }));
    expect(screen.getByRole("alert")).toBeTruthy();
    expect(screen.queryByText("Änderungen gespeichert.")).toBeNull();
    expect(container.querySelectorAll(".transaction")).toHaveLength(3);
  });

  it("blocks deleting a used category and allows it once no transaction uses it", () => {
    render(<App />);
    navigate("Kategorien");
    let food = screen.getByText("Essen").closest(".category");
    fireEvent.click(within(food).getByRole("button", { name: "Löschen" }));
    expect(within(food).getByRole("alert").textContent)
      .toContain("Diese Kategorie wird noch von 1 Transaktion verwendet.");
    expect(screen.getByText("Essen")).toBeTruthy();

    navigate("Transaktionen");
    addTransaction("Bakery", "2026-10-22", "300");
    navigate("Kategorien");
    food = screen.getByText("Essen").closest(".category");
    fireEvent.click(within(food).getByRole("button", { name: "Löschen" }));
    expect(within(food).getByRole("alert").textContent).toContain("von 2 Transaktionen verwendet");

    navigate("Übersicht");
    fireEvent.click(screen.getByRole("button", { name: "Groceries vom 20.10.2026, 50,00 € löschen" }));
    fireEvent.click(screen.getByRole("button", { name: "Bakery vom 22.10.2026, 3,00 € löschen" }));
    navigate("Kategorien");
    food = screen.getByText("Essen").closest(".category");
    fireEvent.click(within(food).getByRole("button", { name: "Löschen" }));
    expect(screen.queryByText("Essen")).toBeNull();
  });

  it("shows HTML-like notes as plain text instead of interpreting them", () => {
    const { container } = render(<App />);
    navigate("Transaktionen");
    addTransaction("<b>Test</b><img src=x onerror=alert(1)>", "2026-10-22", "100");
    navigate("Übersicht");
    expect(screen.getByText("<b>Test</b><img src=x onerror=alert(1)>")).toBeTruthy();
    expect(container.querySelector(".transaction-list b")).toBeNull();
    expect(container.querySelector(".transaction-list img")).toBeNull();
  });

  it("converts flexible euro input and rejects amounts too large for exact cents", () => {
    render(<App />);
    navigate("Transaktionen");
    fill("Betrag in Euro", "25.5");
    expect(screen.getByText("2550 Cent")).toBeTruthy();
    fireEvent.click(screen.getByRole("button", { name: "Übernehmen" }));
    expect(screen.getByLabelText("Betrag in Cent").value).toBe("2550");
    expect(screen.queryByRole("button", { name: /Kopieren/ })).toBeNull();
    fill("Betrag in Euro", "90071992547409,91");
    expect(screen.getByText("9007199254740991 Cent")).toBeTruthy();
    fill("Betrag in Euro", "90071992547409,92");
    expect(screen.getByText("Dieser Betrag ist zu groß, um ihn genau in Cent umzurechnen.")).toBeTruthy();
    expect(screen.getByRole("button", { name: "Übernehmen" }).disabled).toBe(true);
  });

  it("labels the third total as Differenz", () => {
    const { container } = render(<App />);
    expect(container.querySelector(".stat--balance").textContent).toContain("Differenz");
    expect(screen.queryByText("Saldo")).toBeNull();
  });

  it("does not recreate a transaction deleted while its editor is open", () => {
    render(<App />);
    fireEvent.click(screen.getByRole("button", { name: "Groceries vom 20.10.2026, 50,00 € bearbeiten" }));
    fireEvent.click(screen.getByRole("button", { name: "Groceries vom 20.10.2026, 50,00 € löschen" }));
    fireEvent.click(screen.getByRole("button", { name: "Speichern", exact: true }));
    expect(screen.getByRole("alert").textContent).toContain("existiert nicht mehr");
    expect(screen.queryByText("Groceries")).toBeNull();
  });

  it("manages categories without budget controls and preserves transaction associations on rename", () => {
    const { container } = render(<App />);
    expect(screen.queryByRole("region", { name: "Monatsbudgets" })).toBeNull();
    navigate("Kategorien");
    expect(screen.queryByLabelText("Budgetmonat")).toBeNull();
    expect(screen.queryByLabelText("Monatsbudget in Cent (optional)")).toBeNull();
    expect(screen.queryByLabelText("Betrag in Euro")).toBeNull();
    fill("Name", "Test category");
    fireEvent.click(screen.getByRole("button", { name: "Anlegen" }));
    const newCategory = screen.getByText("Test category").closest(".category");
    fireEvent.click(within(newCategory).getByRole("button", { name: "Löschen" }));
    expect(screen.queryByText("Test category")).toBeNull();
    const food = screen.getByText("Essen").closest(".category");
    fireEvent.click(within(food).getByRole("button", { name: "Umbenennen" }));
    const editing = container.querySelector(".category .input");
    fireEvent.change(editing, { target: { value: "Lebensmittel" } });
    fireEvent.click(screen.getByRole("button", { name: "Speichern" }));
    navigate("Übersicht");
    const transaction = screen.getByText("Groceries").closest(".transaction");
    expect(within(transaction).getByText("Lebensmittel")).toBeTruthy();
    expect(container.querySelector(".stat--expense").textContent).toContain("70,00 €");
    expect(screen.queryByRole("region", { name: "Monatsbudgets" })).toBeNull();
  });

  it("places the totals directly below the overview header and above the period filter", () => {
    const { container } = render(<App />);
    const header = screen.getByRole("heading", { name: "Übersicht" }).parentElement;
    const totals = container.querySelector(".stat-grid");
    const filter = screen.getByRole("region", { name: "Zeitraumfilter" });

    expect(header.nextElementSibling).toBe(totals);
    expect(totals.nextElementSibling).toBe(filter);
    expect(filter.nextElementSibling).toBe(container.querySelector(".overview-content"));
  });

  it("starts with all data, shows more than five entries and preserves the period on navigation", () => {
    const { container } = render(<App />);
    expect(container.querySelectorAll(".transaction")).toHaveLength(3);
    expect(screen.getByLabelText("Von").value).toBe("");
    expect(screen.getByLabelText("Bis").value).toBe("");

    navigate("Transaktionen");
    addTransaction("Before range", "2026-09-30");
    for (let i = 1; i <= 5; i++) {
      addTransaction(`In range ${i}`, i <= 2 ? "2026-10-20" : "2026-10-21", String(i * 100));
    }
    addTransaction("After range", "2026-11-01");
    expect(container.querySelectorAll(".transaction")).toHaveLength(0);
    expect(screen.queryByLabelText("Von")).toBeNull();
    expect(screen.queryByLabelText("Liste nach Kategorie filtern")).toBeNull();
    navigate("Übersicht");
    expect(screen.getByRole("heading", { name: "Transaktionen" })).toBeTruthy();
    expect(container.querySelectorAll(".transaction")).toHaveLength(10);

    selectRange("2026-10-20", "2026-10-21");
    expect(container.querySelectorAll(".transaction")).toHaveLength(7);
    expect(screen.queryByText("Before range")).toBeNull();
    expect(screen.queryByText("After range")).toBeNull();
    expect(screen.getByLabelText("Von").value).toBe("2026-10-20");
    expect(container.querySelector(".stat--income").textContent).toContain("0,00 €");
    expect(container.querySelector(".stat--expense").textContent).toContain("85,00 €");
    expect(container.querySelector(".stat--balance").textContent).toContain("-85,00 €");

    selectRange("2027-01-01", "2027-01-31");
    expect(container.querySelectorAll(".transaction")).toHaveLength(0);
    expect(container.querySelector(".stat--expense").textContent).toContain("0,00 €");
    navigate("Transaktionen");
    navigate("Übersicht");
    expect(screen.getByLabelText("Von").value).toBe("2027-01-01");
    expect(screen.getByText("Keine Ausgaben für diese Auswahl.")).toBeTruthy();
    expect(container.querySelector(".recharts-wrapper")).toBeNull();

    navigate("Übersicht");
    fireEvent.click(screen.getByRole("button", { name: "Zeitraum zurücksetzen" }));
    expect(container.querySelectorAll(".transaction")).toHaveLength(10);
  });

  it("reports incomplete and reversed ranges, then accepts an inclusive single day", () => {
    const { container } = render(<App />);
    fill("Von", "2026-10-21");
    expect(screen.getByRole("alert").textContent).toContain("Start- und Enddatum");
    expect(container.querySelector(".stat-grid")).toBeNull();
    fill("Bis", "2026-10-20");
    expect(screen.getByRole("alert").textContent).toContain("nicht nach dem Enddatum");
    expect(container.querySelectorAll(".transaction")).toHaveLength(0);
    fill("Bis", "2026-10-21");
    expect(screen.queryByRole("alert")).toBeNull();
    expect(container.querySelectorAll(".transaction")).toHaveLength(1);
    expect(container.querySelector(".transaction__note").textContent).toBe("Transport");
    expect(container.querySelector(".stat--expense").textContent).toContain("20,00 €");
  });

  it("deletes only the selected transaction and preserves hidden data in the overview", () => {
    const { container } = render(<App />);
    selectRange("2026-10-20", "2026-10-20");
    fireEvent.click(screen.getByRole("button", { name: "Groceries vom 20.10.2026, 50,00 € löschen" }));
    expect(container.querySelectorAll(".transaction")).toHaveLength(0);
    fireEvent.click(screen.getByRole("button", { name: "Zeitraum zurücksetzen" }));
    expect(container.querySelectorAll(".transaction")).toHaveLength(2);
    expect(container.querySelector(".stat--income").textContent).toContain("100,00 €");

    selectRange("2026-10-21", "2026-10-21");
    fireEvent.click(screen.getByRole("button", { name: "Transport vom 21.10.2026, 20,00 € löschen" }));
    fireEvent.click(screen.getByRole("button", { name: "Zeitraum zurücksetzen" }));
    expect(container.querySelectorAll(".transaction")).toHaveLength(1);
    expect(container.querySelector(".transaction__note").textContent).toBe("Gehalt");
  });

  it("confirms an expense and makes it visible via the overview link even outside the old period", () => {
    const { container } = render(<App />);
    selectRange("2026-10-20", "2026-10-21");
    navigate("Transaktionen");
    addTransaction("November groceries", "2026-11-01", "500");
    expect(screen.queryByText("November groceries")).toBeNull();
    expect(screen.getByText("Ausgabe gespeichert. Du findest sie auf der Seite Übersicht.")).toBeTruthy();
    expect(screen.getByLabelText("Notiz").value).toBe("");
    fireEvent.click(screen.getByRole("link", { name: "In Übersicht ansehen" }));
    expect(screen.getByLabelText("Von").value).toBe("");
    expect(screen.getByLabelText("Bis").value).toBe("");
    expect(screen.getByText("November groceries")).toBeTruthy();
    expect(container.querySelectorAll(".transaction")).toHaveLength(4);
    expect(container.querySelector(".stat--expense").textContent).toContain("75,00 €");
    expect(container.querySelector(".stat--income").textContent).toContain("100,00 €");
  });

  it("confirms income separately and never shows success for an invalid submission", () => {
    render(<App />);
    navigate("Transaktionen");
    fireEvent.click(screen.getByRole("button", { name: "Hinzufügen" }));
    expect(screen.getByRole("alert")).toBeTruthy();
    expect(screen.queryByRole("link", { name: "In Übersicht ansehen" })).toBeNull();
    fireEvent.click(screen.getByRole("button", { name: "Einnahme", exact: true }));
    addTransaction("Bonus", "2026-10-23", "500");
    expect(screen.getByText("Einnahme gespeichert. Du findest sie auf der Seite Übersicht.")).toBeTruthy();
    fireEvent.click(screen.getByRole("button", { name: "Hinzufügen" }));
    expect(screen.getByRole("alert")).toBeTruthy();
    expect(screen.queryByRole("link", { name: "In Übersicht ansehen" })).toBeNull();
  });

  it("offers three navigation pages and filters the category chart together with the list", () => {
    render(<App />);
    const navigation = screen.getByRole("navigation");
    expect(within(navigation).getAllByRole("link").map((link) => link.textContent))
      .toEqual(["Übersicht", "Transaktionen", "Kategorien"]);
    expect(screen.queryByRole("heading", { name: "Einnahmen, Ausgaben, Saldo" })).toBeNull();
    const chart = screen.getByRole("region", { name: "Ausgaben nach Kategorie" });
    const categoryList = within(chart).getByRole("list", { name: "Ausgaben je Kategorie" });
    expect(within(categoryList).getAllByRole("listitem").map((item) => item.textContent))
      .toEqual(["Essen50,00 €", "Transport20,00 €"]);
    const transactions = screen.getByRole("list", { name: "Transaktionen" });
    expect(within(transactions).getAllByRole("listitem")).toHaveLength(3);
    expect(within(transactions).getByRole("button", {
      name: "Gehalt vom 01.10.2026, 100,00 € löschen",
    })).toBeTruthy();
    expect(within(chart).getByText("Essen")).toBeTruthy();
    expect(within(chart).getByText("Transport")).toBeTruthy();
    expect(within(chart).queryByText("Gehalt")).toBeNull();
    selectRange("2026-10-21", "2026-10-21");
    const filteredChart = screen.getByRole("region", { name: "Ausgaben nach Kategorie" });
    expect(within(filteredChart).getByText("20,00 €")).toBeTruthy();
    expect(within(filteredChart).queryByText("50,00 €")).toBeNull();
    expect(within(filteredChart).queryByText("Essen")).toBeNull();
    expect(within(filteredChart).getByText("Transport")).toBeTruthy();
    selectRange("2026-10-01", "2026-10-01");
    expect(screen.getByText("Keine Ausgaben für diese Auswahl.")).toBeTruthy();
  });

  it("redirects the old statistics address to the overview", () => {
    window.history.replaceState({}, "", "/stats");
    render(<App />);
    expect(screen.getByRole("heading", { name: "Übersicht", level: 1 })).toBeTruthy();
    expect(window.location.pathname).toBe("/");
  });
});
