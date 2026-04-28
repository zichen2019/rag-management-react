import type { KnowledgeBase, StatCard, TrendData, DataSourceType, RecentUpload, MenuItem } from '../types/knowledgeBase';

export const knowledgeBases: KnowledgeBase[] = [
  {
    id: '1',
    name: '公司产品文档',
    description: '公司产品相关文档和使用手册',
    status: 'normal',
    documentCount: 2350,
    vectorCount: 286000,
    storageSize: '32.4 GB',
    updateTime: '2024-05-20 10:20',
    iconColor: '#1890ff'
  },
  {
    id: '2',
    name: '技术知识库',
    description: '技术文档、方案和最佳实践',
    status: 'normal',
    documentCount: 5620,
    vectorCount: 683000,
    storageSize: '58.7 GB',
    updateTime: '2024-05-20 09:15',
    iconColor: '#52c41a'
  },
  {
    id: '3',
    name: '行业研究报告',
    description: '行业分析报告和市场研究',
    status: 'warning',
    documentCount: 1230,
    vectorCount: 152000,
    storageSize: '18.6 GB',
    updateTime: '2024-05-19 16:45',
    iconColor: '#722ed1'
  },
  {
    id: '4',
    name: '客户服务知识库',
    description: '常见问题和解决方案',
    status: 'normal',
    documentCount: 3125,
    vectorCount: 356000,
    storageSize: '28.9 GB',
    updateTime: '2024-05-19 14:30',
    iconColor: '#fa8c16'
  },
  {
    id: '5',
    name: '法律法规库',
    description: '法律法规和政策文件',
    status: 'normal',
    documentCount: 1856,
    vectorCount: 221000,
    storageSize: '22.3 GB',
    updateTime: '2024-05-18 11:20',
    iconColor: '#1890ff'
  },
  {
    id: '6',
    name: '内部培训资料',
    description: '员工培训和学习资料',
    status: 'disabled',
    documentCount: 950,
    vectorCount: 98000,
    storageSize: '12.1 GB',
    updateTime: '2024-05-17 18:10',
    iconColor: '#eb2f96'
  },
  {
    id: '7',
    name: '竞品分析库',
    description: '竞争对手分析资料',
    status: 'normal',
    documentCount: 1411,
    vectorCount: 167000,
    storageSize: '16.8 GB',
    updateTime: '2024-05-17 10:05',
    iconColor: '#1890ff'
  },
  {
    id: '8',
    name: '市场营销资料',
    description: '市场营销策略和素材',
    status: 'warning',
    documentCount: 2000,
    vectorCount: 243000,
    storageSize: '24.5 GB',
    updateTime: '2024-05-16 15:30',
    iconColor: '#52c41a'
  }
];

export const statCards: StatCard[] = [
  { title: '知识库总数', value: 12, trend: 20, icon: 'DatabaseOutlined', color: '#1890ff' },
  { title: '文档总数', value: 18542, trend: 15.3, icon: 'FileOutlined', color: '#52c41a' },
  { title: '向量总数', value: '235.6 万', trend: 18.7, icon: 'BlockOutlined', color: '#fa8c16' },
  { title: '存储空间', value: '256.7 GB', trend: 12.1, icon: 'PieChartOutlined', color: '#1890ff' }
];

export const trendData: TrendData[] = [
  {
    name: '文档数量',
    value: '+1,250',
    trend: 12.5,
    color: '#1890ff',
    chartData: [120, 145, 132, 168, 155, 178, 195]
  },
  {
    name: '向量数量',
    value: '+85,420',
    trend: 15.3,
    color: '#52c41a',
    chartData: [8200, 9100, 8800, 10500, 9800, 11200, 12000]
  },
  {
    name: '检索次数',
    value: '+12,560',
    trend: 18.7,
    color: '#722ed1',
    chartData: [1500, 1680, 1550, 1820, 1750, 1950, 2100]
  },
  {
    name: '问答次数',
    value: '+8,460',
    trend: 11.2,
    color: '#fa8c16',
    chartData: [980, 1050, 1100, 1180, 1250, 1320, 1400]
  }
];

export const healthData = {
  score: 85,
  level: '良好',
  details: [
    { label: '健康', count: 10, percentage: '83.3%', color: '#52c41a' },
    { label: '警告', count: 2, percentage: '16.7%', color: '#fa8c16' },
    { label: '异常', count: 0, percentage: '0%', color: '#ff4d4f' }
  ],
  updateTime: '2024-05-20 10:30:00'
};

export const dataSourceTypes: DataSourceType[] = [
  { name: 'PDF', count: 18, percentage: '40%', color: '#1890ff' },
  { name: 'Word', count: 10, percentage: '22.2%', color: '#40a9ff' },
  { name: 'Excel', count: 5, percentage: '11.1%', color: '#52c41a' },
  { name: 'Markdown', count: 6, percentage: '13.3%', color: '#13c2c2' },
  { name: '网页', count: 4, percentage: '8.9%', color: '#fa8c16' },
  { name: '其他', count: 2, percentage: '4.4%', color: '#fadb14' }
];

export const recentUploads: RecentUpload[] = [
  { fileName: '产品使用手册 v2.1.pdf', knowledgeBase: '公司产品文档', time: '2024-05-20 10:20', fileType: 'pdf' },
  { fileName: '技术方案设计文档.docx', knowledgeBase: '技术知识库', time: '2024-05-20 09:15', fileType: 'word' },
  { fileName: '市场数据分析.xlsx', knowledgeBase: '行业研究报告', time: '2024-05-19 16:45', fileType: 'excel' },
  { fileName: 'FAQ 常见问题.md', knowledgeBase: '客户服务知识库', time: '2024-05-19 14:30', fileType: 'markdown' },
  { fileName: '行业研究报告 2024.pdf', knowledgeBase: '行业研究报告', time: '2024-05-19 11:20', fileType: 'pdf' }
];

export const menuItems: MenuItem[] = [
  { key: 'knowledge', label: '知识库管理', icon: 'DatabaseOutlined' },
  { key: 'datasource', label: '数据源管理', icon: 'FolderOutlined' },
  { key: 'document', label: '文档管理', icon: 'FileOutlined' },
  { key: 'vector', label: '向量管理', icon: 'BlockOutlined' },
  { key: 'search', label: '检索测试', icon: 'SearchOutlined' },
  { key: 'qa', label: '问答测试', icon: 'MessageOutlined' },
  { key: 'app', label: '应用管理', icon: 'AppstoreOutlined' },
  { key: 'permission', label: '权限管理', icon: 'UserOutlined' },
  { key: 'settings', label: '系统设置', icon: 'SettingOutlined' },
  { key: 'logs', label: '操作日志', icon: 'FileTextOutlined' }
];
