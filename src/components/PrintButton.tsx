'use client';

export function PrintButton() {
  return (
    <button
      onClick={() => window.print()}
      className="no-print px-6 py-3 bg-primary text-white font-medium rounded-lg hover:bg-primary-dark transition-colors"
    >
      Print This Checklist
    </button>
  );
}
