'use client';

interface TOCItem {
  id: string;
  label: string;
}

export function TableOfContents({ items }: { items: TOCItem[] }) {
  return (
    <nav className="bg-card rounded-xl border border-border p-5 mb-10" aria-label="Table of contents">
      <p className="text-sm font-semibold text-foreground mb-3">In this article</p>
      <ol className="space-y-1.5">
        {items.map((item, i) => (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              className="text-sm text-primary hover:underline flex items-start gap-2"
            >
              <span className="text-muted font-medium min-w-[1.25rem]">{i + 1}.</span>
              {item.label}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}
