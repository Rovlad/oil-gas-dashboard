export interface SystemData {
  system: string;
  ffsStatus: 'Fit for Service' | 'Partially' | 'Not Fit' | 'Not Defined';
  icBarrierStatus: 'Healthy' | 'Compromised' | 'Not functional';
  lofStatus: 'Fit until COP' | 'Will Partially' | 'Will Not Remain Fit' | 'Not Defined';
  actionsAndStatus: string;
  numberOfAnomalies: number;
  numberOfLOPCs: number;
  numberOfFMOs: number;
  numberOfROs: number;
  numberOfWraps: number;
}

export type StatusType = 'Fit for Service' | 'Partially' | 'Not Fit' | 'Not Defined' | 'Healthy' | 'Compromised' | 'Not functional' | 'Fit until COP' | 'Will Partially' | 'Will Not Remain Fit';

export interface DashboardStats {
  totalSystems: number;
  onlineSystems: number;
  totalAnomalies: number;
  totalLOPCs: number;
  totalFMOs: number;
  totalROs: number;
  totalWraps: number;
} 