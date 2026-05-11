export const MarketingSection = (props: {
  id?: string;
  title: string;
  children: React.ReactNode;
  backgroundImage?: string;
  className?: string;
}) => {
  const sectionStyle = props.backgroundImage
    ? {
        backgroundImage: `url(${props.backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }
    : {};

  return (
    <section
      id={props.id}
      className={`mt-10 w-full ${props.backgroundImage ? 'flex flex-col justify-center' : 'space-y-4'} ${props.className ?? ''}`}
      style={sectionStyle}
    >
      <h2 className="text-4xl font-bold" style={{ color: 'var(--loom-text)' }}>
        {props.title}
      </h2>
      {props.children}
    </section>
  );
};
