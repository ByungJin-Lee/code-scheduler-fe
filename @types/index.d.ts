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
