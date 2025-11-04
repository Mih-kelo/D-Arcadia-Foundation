import { NextRequest, NextResponse } from 'next/server';

// Define the expected shape of the request body
interface VolunteerData {
  name: string;
  email: string;
  message: string;
}

export async function POST(request: NextRequest) {
  try {
    // Parse the JSON body from the request
    const body: VolunteerData = await request.json();

    // Validate the data
    const { name, email, message } = body;

    // Basic validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    // Email validation (basic regex)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      );
    }

    // Additional validation
    if (name.length < 2) {
      return NextResponse.json(
        { error: 'Name must be at least 2 characters' },
        { status: 400 }
      );
    }

    if (message.length < 10) {
      return NextResponse.json(
        { error: 'Message must be at least 10 characters' },
        { status: 400 }
      );
    }

    // Log the data to the console (for now)
    console.log('New volunteer application received:');
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Message:', message);
    console.log('Timestamp:', new Date().toISOString());

    // Here you would typically:
    // - Save to a database
    // - Send an email notification
    // - Add to a CRM system
    // - etc.

    // Return success response
    return NextResponse.json(
      { 
        message: 'Thank you for your interest! We will contact you soon.',
        data: { name, email }
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Error processing volunteer application:', error);
    return NextResponse.json(
      { error: 'Internal server error. Please try again later.' },
      { status: 500 }
    );
  }
}

