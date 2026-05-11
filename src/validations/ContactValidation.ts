import * as z from 'zod';

export const ContactValidation = z.object({
  name: z.string().min(1).max(200),
  email: z.string().email().max(320),
  organization: z.string().max(200).optional(),
  inquiryType: z.enum([
    'general',
    'therapist_demo',
    'school_partnership',
    'accessibility',
    'support',
  ]),
  message: z.string().min(1).max(4000),
});
