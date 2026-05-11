'use client';

import { useTranslations } from 'next-intl';
import { useState } from 'react';
import { AppConfig } from '@/utils/AppConfig';

export const BaseTemplate = (props: {
  leftNav: React.ReactNode;
  rightNav?: React.ReactNode;
  children: React.ReactNode;
}) => {
  const t = useTranslations('BaseTemplate');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-dvh w-full px-3 antialiased">
      <div className="mx-auto w-full">
        <header className="loom-card mt-6 px-5 py-6 shadow-sm">
          <div className="flex flex-col gap-1">
            <h1 className="text-3xl font-bold" style={{ color: 'var(--loom-text)' }}>
              {AppConfig.name}
            </h1>
            <h2 className="text-base" style={{ color: 'var(--loom-text-muted)' }}>
              {t('description')}
            </h2>
          </div>

          <div className="mt-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <nav aria-label={t('main_navigation_label')} className="hidden md:block">
              <ul className="flex flex-wrap gap-x-2 gap-y-2 text-base">{props.leftNav}</ul>
            </nav>

            <nav className="hidden md:block">
              <ul className="flex flex-wrap gap-x-2 gap-y-2 text-base">{props.rightNav}</ul>
            </nav>

            <button
              onClick={() => {
                setIsMobileMenuOpen(!isMobileMenuOpen);
              }}
              className="rounded-md p-2 hover:bg-gray-100 md:hidden"
              aria-label="Toggle mobile menu"
            >
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>

          {isMobileMenuOpen && (
            <div className="mt-4 border-t pt-4 md:hidden">
              <nav aria-label={t('main_navigation_label')}>
                <ul className="flex flex-col gap-2">{props.leftNav}</ul>
              </nav>
              <nav className="mt-4">
                <ul className="flex flex-col gap-2">{props.rightNav}</ul>
              </nav>
            </div>
          )}
        </header>

        <main className="loom-card mt-6">{props.children}</main>

        <footer
          className="mt-6 mb-10 text-center text-sm"
          style={{ color: 'var(--loom-text-muted)' }}
        >
          {t.rich('footer_text', {
            year: new Date().getFullYear(),
            name: AppConfig.name,
            author: () => (
              <a
                href="https://nextjs-boilerplate.com"
                className="hover:border-b-2"
                style={{
                  color: 'var(--loom-accent)',
                  borderColor: 'var(--loom-accent)',
                }}
              >
                Next.js Boilerplate
              </a>
            ),
          })}

          {/*
           * PLEASE READ THIS SECTION
           * I'm an indie maker with limited resources and funds, I'll really appreciate if you could have a link to my website.
           * The link doesn't need to appear on every pages, one link on one page is enough.
           * For example, in the `About` page. Thank you for your support, it'll mean a lot to me.
           */}
        </footer>
      </div>
    </div>
  );
};
