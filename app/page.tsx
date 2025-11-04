import Button from '@/components/Button';

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-brand-primary to-brand-primary-dark py-20 text-white">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h1 className="mb-6 text-5xl font-bold">
            Empowering Communities, Changing Lives
          </h1>
          <p className="mb-8 text-xl text-brand-primary-light">
            Join us in making a lasting impact through education, healthcare, and opportunity.
          </p>
          
          {/* Call to Action Buttons */}
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Button variant="secondary" size="lg" href="/volunteer">
              Volunteer Now
            </Button>
            <Button 
              variant="primary" 
              size="lg" 
              href="/stories"
              className="bg-white text-brand-primary hover:bg-brand-neutral-100 hover:text-brand-primary-dark"
            >
              Read Our Stories
            </Button>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="bg-brand-neutral-50 py-16">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="mb-12 text-center text-4xl font-bold text-brand-primary">
            Our Impact
          </h2>
          
          <div className="grid gap-8 md:grid-cols-3">
            {/* Card 1 */}
            <div className="rounded-lg bg-white p-6 shadow-md">
              <h3 className="mb-3 text-2xl font-bold text-brand-primary">
                Education
              </h3>
              <p className="mb-4 text-brand-neutral-700">
                Providing access to quality education for underserved communities.
              </p>
              <Button variant="primary" size="sm" href="/about">
                Learn More
              </Button>
            </div>

            {/* Card 2 */}
            <div className="rounded-lg bg-white p-6 shadow-md">
              <h3 className="mb-3 text-2xl font-bold text-brand-secondary">
                Healthcare
              </h3>
              <p className="mb-4 text-brand-neutral-700">
                Ensuring essential healthcare services reach those in need.
              </p>
              <Button variant="secondary" size="sm" href="/about">
                Learn More
              </Button>
            </div>

            {/* Card 3 */}
            <div className="rounded-lg bg-white p-6 shadow-md">
              <h3 className="mb-3 text-2xl font-bold text-brand-primary">
                Empowerment
              </h3>
              <p className="mb-4 text-brand-neutral-700">
                Creating economic opportunities and sustainable development.
              </p>
              <Button variant="primary" size="sm" href="/about">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
