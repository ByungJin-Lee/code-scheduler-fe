export default function memoryCalcHelper(memoryUsage: number) {
  const d = memoryUsage / 1024 / 1024;

  return Math.round(d * 100) / 100;
}
