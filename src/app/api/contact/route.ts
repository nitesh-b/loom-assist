import { NextResponse } from 'next/server';
import { logger } from '@/libs/Logger';
import { ContactValidation } from '@/validations/ContactValidation';

export async function POST(request: Request) {
  const body = await request.json();
  const parsed = ContactValidation.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json(
      {
        ok: false,
        error: 'invalid_payload',
      },
      { status: 400 },
    );
  }

  logger.info('contact_submission', {
    inquiryType: parsed.data.inquiryType,
    hasOrganization: Boolean(parsed.data.organization),
  });

  return NextResponse.json({
    ok: true,
  });
}
