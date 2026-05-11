export const MarketingCardGrid = (props: { items: string[] }) => (
  <ul className="grid grid-cols-1 gap-3 text-base md:grid-cols-2">
    {props.items.map((item) => (
      <li key={item} className="loom-card p-4" style={{ color: 'var(--loom-text)' }}>
        {item}
      </li>
    ))}
  </ul>
);
