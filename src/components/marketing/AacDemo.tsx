'use client';

import { useState } from 'react';

type AacSymbol = {
  id: string;
  label: string;
  ariaLabel: string;
};

export const AacDemo = (props: {
  symbols: AacSymbol[];
  controls: {
    clear: string;
    backspace: string;
    speak: string;
  };
  outputLabel: string;
}) => {
  const [tokens, setTokens] = useState<string[]>([]);

  const phrase = tokens.join(' ').trim();

  const removeLast = () => {
    setTokens((prev) => prev.slice(0, -1));
  };

  const clearAll = () => {
    setTokens([]);
  };

  const speak = () => {
    if (!phrase) {
      return;
    }

    if (!('speechSynthesis' in window)) {
      return;
    }

    window.speechSynthesis.cancel();
    window.speechSynthesis.speak(new SpeechSynthesisUtterance(phrase));
  };

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap gap-2">
        {props.symbols.map((symbol) => (
          <button
            key={symbol.id}
            type="button"
            className="loom-button loom-button-secondary px-4 py-2 text-base font-semibold"
            aria-label={symbol.ariaLabel}
            onClick={() => {
              setTokens((prev) => [...prev, symbol.label]);
            }}
          >
            {symbol.label}
          </button>
        ))}
      </div>

      <div className="loom-card p-4">
        <div className="text-sm font-semibold" style={{ color: 'var(--loom-text-muted)' }}>
          {props.outputLabel}
        </div>
        <div
          className="mt-2 min-h-7 text-xl"
          style={{ color: 'var(--loom-text)' }}
          aria-live="polite"
        >
          {phrase || ' '}
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          <button
            type="button"
            className="loom-button loom-button-secondary px-4 py-2 text-base font-semibold disabled:opacity-50"
            onClick={removeLast}
            disabled={tokens.length === 0}
          >
            {props.controls.backspace}
          </button>
          <button
            type="button"
            className="loom-button loom-button-secondary px-4 py-2 text-base font-semibold disabled:opacity-50"
            onClick={clearAll}
            disabled={tokens.length === 0}
          >
            {props.controls.clear}
          </button>
          <button
            type="button"
            className="loom-button loom-button-primary px-4 py-2 text-base font-semibold disabled:opacity-50"
            onClick={speak}
            disabled={!phrase}
          >
            {props.controls.speak}
          </button>
        </div>
      </div>
    </div>
  );
};
