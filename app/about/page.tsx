import Image from 'next/image';

export default function About() {
  return (
    <div className="min-h-screen">
      {/* Hero Section with Background Image */}
      <section className="relative h-96 bg-gradient-to-r from-blue-600 to-blue-800">
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 flex h-full items-center justify-center">
          <div className="text-center text-white">
            <h1 className="mb-4 text-5xl font-bold">About Our Foundation</h1>
            <p className="text-xl">Making a lasting impact in our communities</p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="mx-auto max-w-4xl px-6 py-12">
        <h2 className="mb-6 text-3xl font-bold text-gray-900">Who We Are</h2>
        
        <div className="space-y-6 text-lg text-gray-700">
          <p>
            Founded in 2020, our non-profit foundation has been dedicated to creating 
            positive change in underserved communities. We believe that every individual 
            deserves access to essential resources, education, and opportunities that 
            enable them to thrive and reach their full potential.
          </p>
          
          <p>
            Through collaborative partnerships with local organizations, volunteers, and 
            generous donors, we've been able to implement sustainable programs that 
            address critical needs. Our work spans across education, healthcare, economic 
            empowerment, and community development initiatives that create lasting impact.
          </p>
          
          <p>
            Our team consists of passionate professionals, community leaders, and dedicated 
            volunteers who share a common vision: a world where everyone has the opportunity 
            to live with dignity and purpose. We work tirelessly to bridge gaps, remove 
            barriers, and empower individuals to become agents of change in their own 
            communities.
          </p>
        </div>

        {/* Stats or Impact Section */}
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          <div className="rounded-lg bg-blue-50 p-6 text-center">
            <div className="text-4xl font-bold text-blue-600">5,000+</div>
            <div className="mt-2 text-gray-600">Lives Impacted</div>
          </div>
          <div className="rounded-lg bg-blue-50 p-6 text-center">
            <div className="text-4xl font-bold text-blue-600">50+</div>
            <div className="mt-2 text-gray-600">Community Partners</div>
          </div>
          <div className="rounded-lg bg-blue-50 p-6 text-center">
            <div className="text-4xl font-bold text-blue-600">15</div>
            <div className="mt-2 text-gray-600">Active Programs</div>
          </div>
        </div>
      </section>
    </div>
  );
}
