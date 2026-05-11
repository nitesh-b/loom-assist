'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useTranslations } from 'next-intl';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { ContactValidation } from '@/validations/ContactValidation';

export const ContactForm = () => {
  const t = useTranslations('ContactPage');
  const [submitted, setSubmitted] = useState(false);

  const form = useForm({
    resolver: zodResolver(ContactValidation),
    defaultValues: {
      name: '',
      email: '',
      organization: '',
      inquiryType: 'general',
      message: '',
    },
  });

  const onSubmit = form.handleSubmit(async (formData) => {
    setSubmitted(false);

    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        ...formData,
        organization: formData.organization?.trim() ? formData.organization : undefined,
      }),
    });

    if (!response.ok) {
      return;
    }

    form.reset();
    setSubmitted(true);
  });

  return (
    <form className="space-y-4" onSubmit={onSubmit}>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <div>
          <label className="text-sm font-bold" style={{ color: 'var(--loom-text)' }} htmlFor="name">
            {t('field_name')}
          </label>
          <input
            id="name"
            className="loom-input mt-1 w-full appearance-none px-3 py-2 text-base"
            style={{ color: 'var(--loom-text)' }}
            autoComplete="name"
            {...form.register('name')}
          />
          {form.formState.errors.name && (
            <div className="mt-1 text-xs text-red-500 italic">{t('error_required')}</div>
          )}
        </div>

        <div>
          <label
            className="text-sm font-bold"
            style={{ color: 'var(--loom-text)' }}
            htmlFor="email"
          >
            {t('field_email')}
          </label>
          <input
            id="email"
            type="email"
            className="loom-input mt-1 w-full appearance-none px-3 py-2 text-base"
            style={{ color: 'var(--loom-text)' }}
            autoComplete="email"
            {...form.register('email')}
          />
          {form.formState.errors.email && (
            <div className="mt-1 text-xs text-red-500 italic">{t('error_email')}</div>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <div>
          <label
            className="text-sm font-bold"
            style={{ color: 'var(--loom-text)' }}
            htmlFor="organization"
          >
            {t('field_organization')}
          </label>
          <input
            id="organization"
            className="loom-input mt-1 w-full appearance-none px-3 py-2 text-base"
            style={{ color: 'var(--loom-text)' }}
            autoComplete="organization"
            {...form.register('organization')}
          />
        </div>

        <div>
          <label
            className="text-sm font-bold"
            style={{ color: 'var(--loom-text)' }}
            htmlFor="inquiryType"
          >
            {t('field_inquiry_type')}
          </label>
          <select
            id="inquiryType"
            className="loom-input mt-1 w-full bg-white px-3 py-2 text-base"
            style={{ color: 'var(--loom-text)' }}
            {...form.register('inquiryType')}
          >
            <option value="general">{t('inquiry_general')}</option>
            <option value="therapist_demo">{t('inquiry_therapist_demo')}</option>
            <option value="school_partnership">{t('inquiry_school_partnership')}</option>
            <option value="accessibility">{t('inquiry_accessibility')}</option>
            <option value="support">{t('inquiry_support')}</option>
          </select>
        </div>
      </div>

      <div>
        <label
          className="text-sm font-bold"
          style={{ color: 'var(--loom-text)' }}
          htmlFor="message"
        >
          {t('field_message')}
        </label>
        <textarea
          id="message"
          rows={6}
          className="loom-input mt-1 w-full appearance-none px-3 py-2 text-base"
          style={{ color: 'var(--loom-text)' }}
          {...form.register('message')}
        />
        {form.formState.errors.message && (
          <div className="mt-1 text-xs text-red-500 italic">{t('error_required')}</div>
        )}
      </div>

      <div className="flex flex-wrap items-center gap-3">
        <button
          className="loom-button loom-button-primary px-5 py-3 font-bold focus:outline-hidden disabled:pointer-events-none disabled:opacity-50"
          type="submit"
          disabled={form.formState.isSubmitting}
        >
          {t('button_submit')}
        </button>

        {submitted && (
          <div className="text-sm" style={{ color: 'var(--loom-text-muted)' }}>
            {t('success_message')}
          </div>
        )}
      </div>
    </form>
  );
};
