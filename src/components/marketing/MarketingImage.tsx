import type { StaticImport } from 'next/dist/shared/lib/get-img-props';
import Image from 'next/image';

export const MarketingImage = (props: {
  src: string | StaticImport;
  alt: string;
  width: number;
  height: number;
  className?: string;
}) => (
  <Image
    src={props.src}
    alt={props.alt}
    content="cover"
    width={props.width}
    height={props.height}
    className={props.className}
  />
);
