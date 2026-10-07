type ContactFormSubmission = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  focusArea: string;
  message: string;
};

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null && !Array.isArray(value);
}

export async function submitContactForm(
  submission: ContactFormSubmission,
  subject: string
): Promise<void> {
  const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY?.trim();

  if (!accessKey || accessKey === 'your_web3forms_access_key_here') {
    throw new Error('The form is not configured yet. Please contact us directly.');
  }

  let response: Response;
  try {
    response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        access_key: accessKey,
        ...submission,
        name: `${submission.firstName} ${submission.lastName}`.trim(),
        subject,
      }),
    });
  } catch (error) {
    console.error('Unable to connect to Web3Forms:', error);
    throw new Error(
      'Unable to connect to the form service. Please check your connection and try again.'
    );
  }

  let data: unknown;
  try {
    data = await response.json();
  } catch (error) {
    console.error('Web3Forms returned a non-JSON response:', {
      status: response.status,
      contentType: response.headers.get('content-type'),
      error,
    });
    throw new Error(
      `The form service returned an unexpected response (HTTP ${response.status}). Please try again later.`
    );
  }

  if (!isRecord(data)) {
    console.error('Web3Forms returned an unexpected response:', response.status);
    throw new Error('The form service returned an invalid response. Please try again later.');
  }

  if (!response.ok || data.success !== true) {
    const message =
      typeof data.message === 'string' && data.message.trim()
        ? data.message
        : `The form service could not accept the request (HTTP ${response.status}).`;
    throw new Error(message);
  }
}
