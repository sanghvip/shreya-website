import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const payload = await request.json();
    const accessKey =
      process.env.WEB3FORMS_ACCESS_KEY || process.env.LEAD_FORM_ACCESS_KEY;

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

    const responseBody = await response.text();
    let data: unknown;

    try {
      data = JSON.parse(responseBody);
    } catch {
      console.error('Lead form service returned a non-JSON response:', response.status);
      return NextResponse.json(
        {
          success: false,
          message: 'The form service returned an invalid response. Please try again.',
        },
        { status: 502 }
      );
    }

    if (typeof data !== 'object' || data === null || Array.isArray(data)) {
      console.error('Lead form service returned an unexpected response:', response.status);
      return NextResponse.json(
        {
          success: false,
          message: 'The form service returned an invalid response. Please try again.',
        },
        { status: 502 }
      );
    }

    return NextResponse.json(data, { status: response.ok ? 200 : 502 });
  } catch (error) {
    console.error('Lead form route error:', error);
    return NextResponse.json(
      {
        success: false,
        message: 'Unable to reach the form service. Please try again shortly.',
      },
      { status: 502 }
    );
  }
}
