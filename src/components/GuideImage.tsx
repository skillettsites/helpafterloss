import Image from 'next/image';

interface GuideImageProps {
  src: string;
  alt: string;
  credit: string;
  creditUrl: string;
}

export function GuideImage({ src, alt, credit, creditUrl }: GuideImageProps) {
  return (
    <figure className="mb-10 rounded-xl overflow-hidden">
      <div className="relative w-full h-48 md:h-64">
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 768px"
        />
      </div>
      <figcaption className="text-xs text-muted mt-2 text-right px-1">
        Photo by{' '}
        <a
          href={creditUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-primary"
        >
          {credit}
        </a>{' '}
        on Unsplash
      </figcaption>
    </figure>
  );
}
