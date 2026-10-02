import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const payload = await request.json();
    const accessKey = process.env.WEB3FORMS_ACCESS_KEY;

    if (!accessKey) {
      return NextResponse.json(
        {
          success: false,
          message: 'Form service is not configured yet.',
        },
        { status: 500 }
      );
    }

    const formData = new FormData();
    formData.append('access_key', accessKey);
    formData.append('firstName', String(payload.firstName ?? ''));
    formData.append('lastName', String(payload.lastName ?? ''));
    formData.append('email', String(payload.email ?? ''));
    formData.append('phone', String(payload.phone ?? ''));
    formData.append('focusArea', String(payload.focusArea ?? ''));
    formData.append('message', String(payload.message ?? ''));
    formData.append(
      'subject',
      `New Intro Call Request from ${payload.firstName ?? ''} ${payload.lastName ?? ''}`.trim() ||
        'New Intro Call Request'
    );

    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      body: formData,
    });

    const data = await response.json();

    return NextResponse.json(data, { status: response.ok ? 200 : 400 });
  } catch (error) {
    console.error('Contact form route error:', error);
    return NextResponse.json(
      {
        success: false,
        message: 'Something went wrong while submitting the form.',
      },
      { status: 500 }
    );
  }
}
