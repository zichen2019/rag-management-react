export interface KnowledgeBase {
  id: string;
  name: string;
  description: string;
  status: 'normal' | 'warning' | 'disabled';
  documentCount: number;
  vectorCount: number;
  storageSize: string;
  updateTime: string;
  iconColor: string;
}

export interface StatCard {
  title: string;
  value: string | number;
  trend: number;
  icon: string;
  color: string;
}

export interface TrendData {
  name: string;
  value: string;
  trend: number;
  color: string;
  chartData: number[];
}

export interface HealthDetail {
  label: string;
  count: number;
  percentage: string;
  color: string;
}

export interface DataSourceType {
  name: string;
  count: number;
  percentage: string;
  color: string;
}

export interface RecentUpload {
  fileName: string;
  knowledgeBase: string;
  time: string;
  fileType: 'pdf' | 'word' | 'excel' | 'markdown';
}

export interface MenuItem {
  key: string;
  label: string;
  icon: string;
}
