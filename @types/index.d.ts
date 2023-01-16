declare global {}

export interface ScheduledItem {
  id: number;
  description: string;
  active: boolean;
  name: string;
  owner: string;
  period?: number;
  next: number;
}

export interface IEvaluationResult {
  stdout: string[];
  stderr: string[];
  cpuUsage: number;
  memoryUsage: number;
  executedAt: number;
  runningTime: number;
  exitCode: number;
}
