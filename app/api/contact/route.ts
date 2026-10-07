import { NextResponse } from 'next/server';

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null && !Array.isArray(value);
}

export async function POST(request: Request) {
  let payload: Record<string, unknown>;

  try {
    const body: unknown = await request.json();
    if (!isRecord(body)) {
      return NextResponse.json(
        { success: false, message: 'Invalid form submission.' },
        { status: 400 }
      );
    }
    payload = body;
  } catch (error) {
    console.error('Contact form request parsing error:', error);
    return NextResponse.json(
      { success: false, message: 'Invalid form submission.' },
      { status: 400 }
    );
  }

  const accessKey = process.env.WEB3FORMS_ACCESS_KEY?.trim();
  if (!accessKey || accessKey === 'your_web3forms_access_key_here') {
    console.error('Contact form service is not configured with a valid Web3Forms access key.');
    return NextResponse.json(
      {
        success: false,
        message: 'The contact form is not configured correctly. Please contact us directly.',
      },
      { status: 500 }
    );
  }

  try {
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
      `New Intro Call Request from ${payload.firstName ?? ''} ${payload.lastName ?? ''}`.trim() ||
        'New Intro Call Request'
    );

    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      body: formData,
    });

    const responseBody = await response.text();
    let data: unknown;

    try {
      data = JSON.parse(responseBody);
    } catch (error) {
      console.error('Contact form service returned a non-JSON response:', {
        status: response.status,
        contentType: response.headers.get('content-type'),
        error,
      });
      return NextResponse.json(
        {
          success: false,
          message: 'The form service could not process the request. Please try again shortly.',
        },
        { status: 502 }
      );
    }

    if (!isRecord(data)) {
      console.error('Contact form service returned an unexpected response:', response.status);
      return NextResponse.json(
        {
          success: false,
          message: 'The form service returned an invalid response. Please try again.',
        },
        { status: 502 }
      );
    }

    if (!response.ok || data.success !== true) {
      const message =
        typeof data.message === 'string' && data.message.trim()
          ? data.message
          : 'The form service could not accept the request. Please try again.';
      console.error('Contact form service rejected the submission:', response.status, message);
      return NextResponse.json({ success: false, message }, { status: 502 });
    }

    return NextResponse.json(data);
  } catch (error) {
    console.error('Contact form service request error:', error);
    return NextResponse.json(
      {
        success: false,
        message: 'Unable to reach the form service. Please try again shortly.',
      },
      { status: 502 }
    );
  }
}
