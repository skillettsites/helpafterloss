'use client';

import { CostSummary } from '@/lib/costs';

interface CostCalculatorProps {
  summary: CostSummary;
}

export function CostCalculator({ summary }: CostCalculatorProps) {
  if (summary.items.length === 0) return null;

  return (
    <div className="bg-card rounded-xl border border-border p-6 mb-8">
      <h3 className="text-lg font-semibold text-foreground mb-2">Estimated Costs</h3>
      <p className="text-sm text-muted mb-6">
        These are approximate costs based on your situation. Actual costs may vary.
      </p>

      <div className="space-y-4">
        {summary.items.map((item, index) => (
          <div key={index} className="border-b border-border pb-4 last:border-0 last:pb-0">
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <h4 className="font-medium text-foreground text-sm">{item.item}</h4>
                <p className="text-xs text-muted mt-1">{item.notes}</p>
                {item.savingTip && (
                  <p className="text-xs text-success mt-1 font-medium">
                    Tip: {item.savingTip}
                  </p>
                )}
              </div>
              <div className="text-right ml-4 flex-shrink-0">
                <p className="font-semibold text-foreground">
                  £{item.mid.toLocaleString()}
                </p>
                <p className="text-xs text-muted">
                  £{item.low.toLocaleString()} - £{item.high.toLocaleString()}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Total */}
      <div className="mt-6 pt-4 border-t-2 border-border">
        <div className="flex items-center justify-between">
          <span className="font-semibold text-foreground">Estimated Total</span>
          <div className="text-right">
            <p className="text-xl font-bold text-foreground">
              £{summary.totalMid.toLocaleString()}
            </p>
            <p className="text-xs text-muted">
              Range: £{summary.totalLow.toLocaleString()} - £{summary.totalHigh.toLocaleString()}
            </p>
          </div>
        </div>
      </div>

      {/* Potential savings */}
      {summary.savings.length > 0 && (
        <div className="mt-6 bg-success-light rounded-lg p-4">
          <h4 className="text-sm font-semibold text-success mb-2">You may be able to reduce these costs</h4>
          <ul className="space-y-1">
            {summary.savings.map((saving, index) => (
              <li key={index} className="text-sm text-green-800">
                {saving.description}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
