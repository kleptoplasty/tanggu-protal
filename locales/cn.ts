const cn = {
  WIP: '该功能仍在开发中……',
  Settings: {
    Title: '汤谷大数据',
  },
  Login: {
    SignInFormTitle: '登录',
    SignUpFormTitle: '注册',
  },
  Nav: {
    Statistics: '智慧统计',
    Solutions: '解决方案',
    Cases: '客户案例',
    Support: '服务与支持',
    About: '关于',
  },
  Home: {
    TgPlatform: '汤谷大数据智慧统计管理平台',
    Solutions: '全方位的解决方案',
    FreeTrial: '免费试用',
    Details: '了解详情',
    Telephone: '联系电话',
    Describe: {
      DataSecurity: '强化数据安全措施',
      DataAcquisition: '灵活的数据采集管理',
      MetaData: '先进的元数据体系',
      DataAutomation: '高效快捷的数据自动化处理',
    },
    Platform: '平台功能',
    PlatformFunction:
      '平台采用了云计算、大数据和微服务等最新技术，这些技术的结合为数据处理和分析提供了强大的支持',
    Production: {
      DataProduction: '数据生产',
      DataService: '数据服务',
      SupportPlatform: '支撑平台',
    },
    DataManagement: '数据资源管理',
    DataSourceManagement: {
      DataAcquisition: '数据采集',
      DataClassification: '数据分类管理',
      DataQuality: '数据质量管理',
      DataPermission: '数据权限管理',
    },
    DataAnalysis: '数据分析处理',
    DataAnalysisManagement: {
      DataSummary: '数据汇总管理',
      ProcessingTask: '处理任务管理',
      DataPublishing: '数据发布管理',
    },
    DataGovernance: '数据治理服务',
    DataGovernanceDescrible: '平台不仅提供了数据采集、存储和管理的功能，还包括了元数据体系的建立和维护，这有助于确保数据的一致性、准确性和可追溯性',
    DataGovernanceManagement: {
      ISMPReport: '统计报表编制',
      ISMPBigScreen: '经济运行大屏',
      ISMPMap: '数据地图',
      ISMPLibrary: '主题库建设',
      ISMPIndex: '统计指标编制',
    },
    DataGovernanceReport: {
      Comprehensive: '综合',
      Industry: '工业',
      LaborManagement: '劳资',
      Service: '服务',
      Investment: '投资',
      Energy: '能源'
    },
    DataProtals: '数据服务门户',
  },
  Support: {
    TechnicalSupport: '技术支持',
    CPTechnicalSupport: '全方位平台技术支持',
  },
  Solutions: {
    BigData: '统计大数据',
    SmartGovernment: '智慧党政',
    SmartAffairs: '智慧党务',
  },
};

type DeepPartial<T> = T extends object
  ? {
      [P in keyof T]?: DeepPartial<T[P]>;
    }
  : T;

export type LocaleType = typeof cn;
export type PartialLocaleType = DeepPartial<typeof cn>;

export default cn;
