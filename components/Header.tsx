import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-brand-primary shadow-md">
      <div className="mx-auto max-w-7xl px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Link 
              href="/" 
              className="text-2xl font-bold text-white transition hover:text-brand-accent"
            >
              Arcadia Foundation
            </Link>
          </div>

          {/* Navigation */}
          <nav>
            <ul className="flex items-center gap-8">
              <li>
                <Link 
                  href="/" 
                  className="font-medium text-white transition hover:text-brand-accent"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link 
                  href="/about" 
                  className="font-medium text-white transition hover:text-brand-accent"
                >
                  About
                </Link>
              </li>
              <li>
                <Link 
                  href="/stories" 
                  className="font-medium text-white transition hover:text-brand-accent"
                >
                  Stories
                </Link>
              </li>
              <li>
                <Link 
                  href="/volunteer" 
                  className="font-medium text-white transition hover:text-brand-accent"
                >
                  Volunteer
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
