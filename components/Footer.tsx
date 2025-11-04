import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-brand-primary text-white">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-8 md:grid-cols-4">
          {/* About */}
          <div>
            <h3 className="mb-4 text-lg font-bold">Arcadia Foundation</h3>
            <p className="text-brand-primary-light">
              Creating sustainable change through education, healthcare, and economic empowerment.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-lg font-bold">Quick Links</h3>
            <ul className="space-y-2 text-brand-primary-light">
              <li><Link href="/about" className="hover:text-white">About Us</Link></li>
              <li><Link href="/programs" className="hover:text-white">Programs</Link></li>
              <li><Link href="/stories" className="hover:text-white">Stories</Link></li>
              <li><Link href="/contact" className="hover:text-white">Contact</Link></li>
            </ul>
          </div>

          {/* Get Involved */}
          <div>
            <h3 className="mb-4 text-lg font-bold">Get Involved</h3>
            <ul className="space-y-2 text-brand-primary-light">
              <li><Link href="/donate" className="hover:text-white">Donate</Link></li>
              <li><Link href="/volunteer" className="hover:text-white">Volunteer</Link></li>
              <li><Link href="/partner" className="hover:text-white">Partner With Us</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-4 text-lg font-bold">Contact</h3>
            <p className="mb-2 text-brand-primary-light">Email: info@arcadia.org</p>
            <p className="mb-4 text-brand-primary-light">Phone: +1 (555) 123-4567</p>
            <div className="flex gap-4">
              <a href="#" className="text-brand-accent hover:text-white">Facebook</a>
              <a href="#" className="text-brand-accent hover:text-white">Twitter</a>
              <a href="#" className="text-brand-accent hover:text-white">LinkedIn</a>
            </div>
          </div>
        </div>

        <div className="border-t border-brand-primary-light py-8 text-center text-brand-primary-light">
          <p>© 2025 Arcadia Foundation. All rights reserved. | Privacy Policy | Terms of Service</p>
        </div>
      </div>
    </footer>
  );
}
