import { useState } from "react";
import { INCOME, EXPENSE } from "../calculations";

const CATEGORY_NAME_MAX_LENGTH = 40;

function getCategoryNameError(value) {
  if (!value.trim()) return "Bitte einen Namen eingeben.";
  if (value.length > CATEGORY_NAME_MAX_LENGTH) {
    return `Der Kategoriename darf höchstens ${CATEGORY_NAME_MAX_LENGTH} Zeichen enthalten.`;
  }
  return "";
}

export default function Categories({
  categories,
  setCategories,
  transactions,
  setTransactions,
}) {
  const [name, setName] = useState("");
  const [type, setType] = useState(EXPENSE);
  const [error, setError] = useState("");
  const [editingId, setEditingId] = useState(null);
  const [editingName, setEditingName] = useState("");
  const [renameError, setRenameError] = useState("");
  const [deleteError, setDeleteError] = useState({ id: null, message: "" });
  const expenseCategories = categories.filter((c) => c.type === EXPENSE);
  const incomeCategories = categories.filter((c) => c.type === INCOME);

  const nameExists = (candidate, ignoreId = null) =>
    categories.some(
      (c) =>
        c.id !== ignoreId &&
        c.name.toLowerCase() === candidate.trim().toLowerCase()
    );

  const handleAdd = () => {
    const trimmedName = name.trim();

    const nameError = getCategoryNameError(name);
    if (nameError) {
      setError(nameError);
      return;
    }
    if (nameExists(trimmedName)) {
      setError(`Die Kategorie "${trimmedName}" gibt es schon.`);
      return;
    }

    setCategories([
      ...categories,
      {
        id: Date.now(),
        name: trimmedName,
        type,
      },
    ]);
    setName("");
    setError("");
  };

  const handleDelete = (category) => {
    const usageCount = transactions.filter((t) => t.category === category.name).length;
    if (usageCount > 0) {
      const usage = usageCount === 1 ? "1 Transaktion" : `${usageCount} Transaktionen`;
      setDeleteError({
        id: category.id,
        message: `Diese Kategorie wird noch von ${usage} verwendet. Ändere oder lösche zuerst diese Einträge.`,
      });
      return;
    }
    setDeleteError({ id: null, message: "" });
    setCategories(categories.filter((c) => c.id !== category.id));
  };

  const startRename = (category) => {
    setEditingId(category.id);
    setEditingName(category.name);
    setError("");
    setRenameError("");
    setDeleteError({ id: null, message: "" });
  };

  const saveRename = () => {
    const trimmedName = editingName.trim();

    const nameError = getCategoryNameError(editingName);
    if (nameError) {
      setRenameError(nameError);
      return;
    }
    if (nameExists(trimmedName, editingId)) {
      setRenameError(`Die Kategorie "${trimmedName}" gibt es schon.`);
      return;
    }

    const categoryToRename = categories.find((c) => c.id === editingId);
    if (!categoryToRename) {
      setRenameError("Die Kategorie existiert nicht mehr.");
      return;
    }

    setCategories(
      categories.map((c) =>
        c.id === editingId ? { ...c, name: trimmedName } : c
      )
    );
    setTransactions((currentTransactions) =>
      currentTransactions.map((transaction) =>
        transaction.category === categoryToRename.name
          ? { ...transaction, category: trimmedName }
          : transaction
      )
    );
    setEditingId(null);
    setRenameError("");
  };

  const renderCategory = (category) => {
    const { id, name: categoryName } = category;

    if (editingId === id) {
      return (
        <div className="category" key={id}>
          <div className="category__info field">
            <label className="field__label" htmlFor="rename-category">Kategoriename</label>
            <input
              id="rename-category"
              className="input"
              value={editingName}
              aria-describedby={renameError ? "rename-length rename-error" : "rename-length"}
              aria-invalid={Boolean(renameError) || editingName.length > CATEGORY_NAME_MAX_LENGTH}
              autoFocus
              onChange={(e) => setEditingName(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && saveRename()}
            />
            <span className="field__hint" id="rename-length">
              {editingName.length} / {CATEGORY_NAME_MAX_LENGTH} Zeichen
            </span>
            {renameError && <p className="form__error" id="rename-error" role="alert">{renameError}</p>}
          </div>
          <button className="btn btn--primary" onClick={saveRename}>
            Speichern
          </button>
          <button
            className="btn btn--ghost"
            onClick={() => setEditingId(null)}
          >
            Abbrechen
          </button>
        </div>
      );
    }

    return (
      <div className="category" key={id}>
        <div className="category__info">
          <p className="category__name">{categoryName}</p>
          {deleteError.id === id && (
            <p className="form__error" role="alert">{deleteError.message}</p>
          )}
        </div>

        <button className="btn btn--ghost" onClick={() => startRename(category)}>
          Umbenennen
        </button>
        <button className="btn btn--ghost" onClick={() => handleDelete(category)}>
          Löschen
        </button>
      </div>
    );
  };

  return (
    <>
      <div className="page__header">
        <h1>Kategorien</h1>
        <p className="page__subtitle">
          Kategorien für Einnahmen und Ausgaben verwalten
        </p>
      </div>

      <div className="card">
        <h2 className="card__title">Neue Kategorie</h2>

        <div className="type-switch">
          <button
            type="button"
            className={
              type === EXPENSE
                ? "type-switch__option type-switch__option--expense-active"
                : "type-switch__option"
            }
            onClick={() => setType(EXPENSE)}
          >
            Ausgabe
          </button>
          <button
            type="button"
            className={
              type === INCOME
                ? "type-switch__option type-switch__option--income-active"
                : "type-switch__option"
            }
            onClick={() => setType(INCOME)}
          >
            Einnahme
          </button>
        </div>

        <div className="form">
          <div className="field">
            <label className="field__label" htmlFor="category-name">
              Name
            </label>
            <input
              id="category-name"
              className="input"
              placeholder="z. B. Haustier"
              value={name}
              aria-describedby="category-name-length"
              aria-invalid={name.length > CATEGORY_NAME_MAX_LENGTH}
              onChange={(e) => setName(e.target.value)}
            />
            <span className="field__hint" id="category-name-length">
              {name.length} / {CATEGORY_NAME_MAX_LENGTH} Zeichen
            </span>
          </div>

          <button className="btn btn--primary" onClick={handleAdd}>
            Anlegen
          </button>

          {error && <p className="form__error" role="alert">{error}</p>}
        </div>
      </div>

      <div className="card">
        <h2 className="card__title">Ausgaben-Kategorien</h2>
        {expenseCategories.length === 0 ? (
          <p className="empty-state">Noch keine Ausgaben-Kategorien.</p>
        ) : (
          expenseCategories.map(renderCategory)
        )}
      </div>

      <div className="card">
        <h2 className="card__title">Einnahme-Kategorien</h2>
        {incomeCategories.length === 0 ? (
          <p className="empty-state">Noch keine Einnahme-Kategorien.</p>
        ) : (
          incomeCategories.map(renderCategory)
        )}
      </div>
    </>
  );
}
