export default function Mission() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="mx-auto max-w-4xl px-6 py-12">
        <h1 className="mb-8 text-4xl font-bold text-gray-900">Our Mission</h1>
        
        <div className="space-y-6 text-lg text-gray-700">
          <p>
            Our mission is to empower underserved communities by providing access to 
            education, healthcare, and economic opportunities that foster sustainable 
            development and social equity.
          </p>
          
          <h2 className="mt-8 text-2xl font-semibold text-gray-900">Core Values</h2>
          
          <ul className="space-y-4">
            <li className="flex items-start">
              <span className="mr-2 text-blue-600">✓</span>
              <div>
                <strong>Integrity:</strong> We operate with transparency and accountability 
                in all our actions.
              </div>
            </li>
            <li className="flex items-start">
              <span className="mr-2 text-blue-600">✓</span>
              <div>
                <strong>Compassion:</strong> We approach every challenge with empathy and 
                understanding.
              </div>
            </li>
            <li className="flex items-start">
              <span className="mr-2 text-blue-600">✓</span>
              <div>
                <strong>Collaboration:</strong> We believe in the power of working together 
                to achieve common goals.
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
