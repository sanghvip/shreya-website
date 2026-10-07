import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const payload = await request.json();
    const accessKey = process.env.LEAD_FORM_ACCESS_KEY;

    if (!accessKey) {
      return NextResponse.json(
        {
          success: false,
          message: 'Lead form service is not configured yet.',
        },
        { status: 500 }
      );
    }

    const formData = new FormData();
    formData.append('access_key', accessKey);
    formData.append('firstName', String(payload.firstName ?? ''));
    formData.append('lastName', String(payload.lastName ?? ''));
    formData.append(
      'name',
      `${String(payload.firstName ?? '')} ${String(payload.lastName ?? '')}`.trim()
    );
    formData.append('email', String(payload.email ?? ''));
    formData.append('phone', String(payload.phone ?? ''));
    formData.append('focusArea', String(payload.focusArea ?? ''));
    formData.append('message', String(payload.message ?? ''));
    formData.append(
      'subject',
      `New Lead Capture Form Submission from ${payload.firstName ?? ''} ${payload.lastName ?? ''}`.trim() ||
        'New Lead Capture Form Submission'
    );

    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      body: formData,
    });

    const data = await response.json();

    return NextResponse.json(data, { status: response.ok ? 200 : 400 });
  } catch (error) {
    console.error('Lead form route error:', error);
    return NextResponse.json(
      {
        success: false,
        message: 'Something went wrong while submitting the form.',
      },
      { status: 500 }
    );
  }
}
