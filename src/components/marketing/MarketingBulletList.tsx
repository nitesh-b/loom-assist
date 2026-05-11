export const MarketingBulletList = (props: { items: string[] }) => (
  <ul className="list-disc space-y-2 pl-5 text-base text-gray-700">
    {props.items.map((item) => (
      <li key={item}>
        <h2 className="text-2xl" style={{ color: 'var(--loom-text)' }}>
          {item}
        </h2>
      </li>
    ))}
  </ul>
);
