import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import formatAmount from "./formatters";
import { sumExpensesByCategory } from "./calculations";

const CATEGORY_COLORS = [
  "#0f766e",
  "#2563eb",
  "#b91c1c",
  "#ca8a04",
  "#7c3aed",
  "#0891b2",
];

export default function ExpenseCategoryChart({ transactions }) {
  const byCategory = sumExpensesByCategory(transactions);

  const tooltipFormatter = (value) => formatAmount(value);

  return (
    <section className="card" aria-label="Ausgaben nach Kategorie">
      <h2 className="card__title">Ausgaben pro Kategorie</h2>
      {byCategory.length === 0 ? (
        <p className="empty-state">Keine Ausgaben für diese Auswahl.</p>
      ) : (
        <>
          <div className="chart">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={byCategory}
                dataKey="amountCents"
                nameKey="category"
                innerRadius={60}
                outerRadius={100}
                paddingAngle={2}
              >
                {byCategory.map(({ category }, index) => (
                  <Cell
                    key={category}
                    fill={CATEGORY_COLORS[index % CATEGORY_COLORS.length]}
                  />
                ))}
              </Pie>
              <Tooltip formatter={tooltipFormatter} />
            </PieChart>
          </ResponsiveContainer>
          </div>
          <ul className="category-legend" aria-label="Ausgaben je Kategorie" role="list">
            {byCategory.map(({ category, amountCents }, index) => (
              <li className="category-legend__item" key={category}>
                <span
                  className="category-legend__swatch"
                  style={{ backgroundColor: CATEGORY_COLORS[index % CATEGORY_COLORS.length] }}
                  aria-hidden="true"
                />
                <span className="category-legend__name">{category}</span>
                <span className="category-legend__amount">{formatAmount(amountCents)}</span>
              </li>
            ))}
          </ul>
        </>
      )}
    </section>
  );
}
