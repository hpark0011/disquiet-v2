export function formatPercentage(value: number): string {
  const formatted = (value * 100).toFixed(1);
  return value >= 0 ? `+${formatted}%` : `${formatted}%`;
}
