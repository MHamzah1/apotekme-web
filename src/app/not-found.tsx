import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="container-custom py-20 text-center">
      <div className="relative inline-block mb-6">
        <p className="text-7xl font-bold text-primary/20 select-none">Error</p>
        <p className="absolute inset-0 flex items-center justify-center text-7xl font-bold text-navy">404</p>
      </div>
      <h1 className="text-2xl md:text-3xl font-bold text-navy mb-2">Oops! Page not found</h1>
      <p className="text-sm text-navy/70 mb-8 max-w-md mx-auto">
        The page you are looking for might have been removed or temporarily unavailable.
      </p>
      <Link href="/" className="btn-primary">Back to Homepage</Link>
    </div>
  );
}
