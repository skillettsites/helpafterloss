import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center px-4">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-foreground mb-4">We could not find that page</h1>
        <p className="text-muted mb-8 max-w-md mx-auto">
          Sorry, that is the last thing you need today. The page may have moved. Our homepage and step-by-step guide are the best places to pick things back up.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="/" className="px-6 py-3 bg-primary text-white font-medium rounded-lg hover:bg-primary-dark transition-colors">
            Back to the homepage
          </Link>
          <Link href="/guide" className="px-6 py-3 text-primary font-medium hover:underline">
            Step-by-Step Guide
          </Link>
        </div>
      </div>
    </div>
  );
}
