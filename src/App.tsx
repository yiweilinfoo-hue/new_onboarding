import React from 'react';
import {
  ChevronRight,
  Bot,
  Sparkles,
  ArrowUp,
  BarChart3,
  FileText,
  Search,
  Grid,
  HelpCircle,
  User,
  Zap,
  Database,
  PieChart,
  Package,
  Briefcase,
  Calculator,
  Users,
  Settings,
  Truck,
  LineChart,
  Monitor,
  Compass
} from 'lucide-react';

export default function App() {
  const cards = [
    { title: '产品专题', desc: 'M线产品专题', action: '申请权限', icon: <Package className="w-5 h-5" />, color: 'bg-[#4B84FF]' },
    { title: '经营数智', desc: '经营管理平台：从产品、客户、成本、质量和风控视角看公司整体经营状况', action: '进入主题', icon: <Briefcase className="w-5 h-5" />, color: 'bg-[#1D4ED8]' },
    { title: '财务主题', desc: '原智控平台：智慧测算、智慧分析、智慧挖掘相关财务线分析平台及看板', action: '进入主题', icon: <Calculator className="w-5 h-5" />, color: 'bg-[#06B6D4]' },
    { title: '人资主题', desc: '原管策平台：全维度、多视角的人资数据分析方案', action: '进入主题', icon: <Users className="w-5 h-5" />, color: 'bg-[#3B82F6]' },
    { title: '营运主题', desc: '基于产品竞争力的营运数据一体化', action: '申请权限', icon: <Settings className="w-5 h-5" />, color: 'bg-[#6366F1]' },
    { title: '大件主题', desc: '基于大件晨会，产品竞争力，产品收益，客户概况的大件数据一体化', action: '申请权限', icon: <Truck className="w-5 h-5" />, color: 'bg-[#3B82F6]' },
    { title: '战略主题', desc: '宏观、国际、国内物流行业外部数据可视化，定期呈现洞察及解读', action: '进入主题', icon: <LineChart className="w-5 h-5" />, color: 'bg-[#10B981]' },
    { title: '科技主题', desc: '科技人资、科技财务看板', action: '申请权限', icon: <Monitor className="w-5 h-5" />, color: 'bg-[#2563EB]' },
    { title: '星盘专题', desc: '星盘', action: '申请权限', icon: <Compass className="w-5 h-5" />, color: 'bg-[#4F46E5]' },
  ];

  return (
    <div className="min-h-screen bg-[#F8FAFC] font-sans overflow-x-hidden text-gray-800 pb-20">
      {/* ===== 导航栏 (Mock) ===== */}
      <nav className="flex items-center justify-between px-8 py-4 bg-white sticky top-0 z-50">
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-2 text-2xl font-bold text-[#1a56f0]">
            <div className="w-8 h-8 rounded bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center text-white">
              <Grid className="w-4 h-4" />
            </div>
            万象方
          </div>
          <div className="hidden md:flex gap-8 text-[15px] font-medium text-gray-800">
            <a href="#" className="text-gray-800 hover:text-blue-600 transition-colors">首页</a>
            <a href="#" className="text-gray-500 hover:text-blue-600 transition-colors">产品专题</a>
            <a href="#" className="text-gray-500 hover:text-blue-600 transition-colors flex items-center gap-1">主题分析 <ChevronRight className="w-3 h-3 rotate-90" /></a>
          </div>
        </div>
        <div className="hidden md:flex items-center gap-6 text-[14px] text-gray-500">
          <a href="#" className="hover:text-blue-600 transition-colors flex items-center gap-1">工具 <ChevronRight className="w-3 h-3 rotate-90" /></a>
          <a href="#" className="hover:text-blue-600 transition-colors">搜索中心</a>
          <a href="#" className="hover:text-blue-600 transition-colors">权限中心</a>
          <a href="#" className="hover:text-blue-600 transition-colors">工作台</a>
          <div className="flex items-center gap-4 ml-4 pl-6 border-l border-gray-200">
            <HelpCircle className="w-5 h-5 cursor-pointer hover:text-blue-600" />
            <User className="w-5 h-5 cursor-pointer hover:text-blue-600" />
          </div>
        </div>
      </nav>

      {/* ===== Hero 主视觉区域 (新设计的上半部分) ===== */}
      <main className="relative max-w-[1400px] mx-auto px-6 lg:px-12 pt-20 pb-20 mb-8 border-b border-gray-100/50">
        {/* 背景光晕修饰 */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-100/40 rounded-full blur-[120px] -z-10 pointer-events-none" />
        <div className="absolute bottom-20 left-10 w-[600px] h-[600px] bg-indigo-100/30 rounded-full blur-[100px] -z-10 pointer-events-none" />
        
        {/* 轻量网格背景 */}
         <div 
          className="absolute inset-0 -z-20 pointer-events-none opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(to right, #000 1px, transparent 1px), linear-gradient(to bottom, #000 1px, transparent 1px)`,
            backgroundSize: '40px 40px'
          }}
        />

        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-8">
          {/* 左侧内容区 */}
          <div className="w-full lg:w-[45%] pt-4 z-10">
            {/* 主标题 */}
            <h1 className="text-[52px] lg:text-[60px] font-bold text-gray-900 leading-[1.1] tracking-tight mb-6 mt-2">
              观象智能体<br/>强势登陆
            </h1>

            {/* 描述文案 */}
            <p className="text-[18px] text-gray-500 mb-12 font-normal leading-relaxed w-[92%]">
              专注于企业级数据深度洞察与业务智能落地。全面覆盖复杂文档解析、专家级智能交互问答，以及专业分析报告与 PPT 的一键生成。不仅为您提供精准的数据剖析，更通过自动化策略下发构建完整的任务闭环，真正实现从业务数据发现到执行追踪的端到端赋能。
            </p>

            {/* 按钮 */}
            <div>
              <button className="bg-[#4460F1] hover:bg-blue-700 text-white text-[18px] font-normal tracking-wide py-4 px-12 rounded-xl shadow-[0_8px_20px_rgb(68,96,241,0.25)] hover:shadow-[0_12px_25px_rgb(68,96,241,0.35)] hover:-translate-y-0.5 transition-all outline-none">
                立即体验
              </button>
            </div>
          </div>

          {/* 右侧静态卡片组合展示区 (参考提供图片风格) */}
          <div className="w-full lg:w-[55%] relative h-[560px] mt-10 lg:mt-0 right-0 pointer-events-none">
            
            {/* 卡片1 左侧 帮我写作 */}
            <div className="absolute left-[0%] top-[10%] w-[280px] bg-[#FAF3EC] rounded-[24px] shadow-[0_10px_30px_rgba(0,0,0,0.05)] p-5 z-10 border border-[#F2E5D5]/50 scale-95">
              <div className="flex justify-between items-center text-[10px] text-gray-400 font-medium tracking-wider mb-4 uppercase">
                <span>Notes ►</span>
                <span>Date</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">文件解析</h3>
              <p className="text-[13px] text-gray-500 leading-relaxed mb-5">
                高效处理多格式文档，精准提取核心数据与业务逻辑，释放人力。
              </p>
              <div className="flex gap-3">
                <div className="flex-1 bg-white rounded-lg p-2 shadow-sm border border-gray-50 h-28">
                  <div className="text-[10px] font-bold text-gray-700 mb-2">PDF解析</div>
                  <div className="w-full h-12 bg-[#F6F0E7] rounded-md mb-2 flex items-center justify-center"><FileText className="w-5 h-5 text-gray-300"/></div>
                  <div className="space-y-1">
                    <div className="h-1.5 w-full bg-gray-100 rounded"></div>
                    <div className="h-1.5 w-4/5 bg-gray-100 rounded"></div>
                  </div>
                </div>
                <div className="flex-1 bg-white rounded-lg p-2 shadow-sm border border-gray-50 h-28">
                  <div className="text-[10px] font-bold text-gray-700 mb-2">数据对齐</div>
                  <div className="space-y-2.5">
                    <div className="flex items-start gap-1">
                      <span className="text-[9px] font-bold text-gray-800 leading-none">1.</span>
                      <div className="space-y-1 w-full pt-0.5">
                        <div className="h-1.5 w-full bg-gray-200 rounded"></div>
                        <div className="h-1.5 w-5/6 bg-gray-100 rounded"></div>
                      </div>
                    </div>
                    <div className="flex items-start gap-1">
                      <span className="text-[9px] font-bold text-gray-800 leading-none">2.</span>
                      <div className="space-y-1 w-full pt-0.5">
                        <div className="h-1.5 w-full bg-gray-200 rounded"></div>
                        <div className="h-1.5 w-4/5 bg-gray-100 rounded"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 卡片2 顶部中后方 生成报告 */}
            <div className="absolute left-[20%] top-[-5%] w-[320px] bg-white rounded-[24px] shadow-[0_15px_40px_rgba(0,0,0,0.06)] p-6 z-0 border border-gray-100 scale-95">
              <h3 className="text-[22px] font-bold text-gray-800 mb-2 mt-1">生成报告</h3>
              <p className="text-[13px] text-gray-500 leading-relaxed mb-5">
                融合多源异构数据，一键产出结构化业务追踪及专题分析报告。
              </p>
              <div className="w-full h-[180px] rounded-xl bg-gradient-to-br from-blue-400 to-indigo-500 p-4 relative overflow-hidden">
                <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-white/20 rounded-full blur-2xl"></div>
                <div className="absolute top-10 -left-10 w-32 h-32 bg-blue-300/40 rounded-full blur-xl"></div>
                
                <div className="text-white/80 text-[10px] font-medium mb-1 relative z-10">2026年3月</div>
                <div className="text-white text-xl font-bold mb-2 relative z-10">业务经营季报</div>
                <div className="inline-block bg-white/20 backdrop-blur-sm text-white/90 text-[9px] px-2 py-0.5 rounded-full border border-white/30 relative z-10 scale-90 origin-left">Quarterly Business Report</div>
              </div>
            </div>

            {/* 卡片3 右侧 PPT 生成 */}
            <div className="absolute right-[-8%] top-[15%] w-[290px] bg-[#F0FBFC] rounded-[24px] shadow-[0_10px_30px_rgba(0,0,0,0.05)] p-5 z-10 border border-[#DFF0F3]/50 scale-95">
              <h3 className="text-xl font-bold text-gray-800 mb-2">PPT 生成</h3>
              <p className="text-[13px] text-gray-500 leading-relaxed mb-5">
                基于复杂数据及长文本，智能生成专业汇报演示文稿。
              </p>
              <div className="w-full h-[160px] bg-gray-200 rounded-xl overflow-hidden relative border border-gray-100 shadow-inner">
                <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=400&auto=format&fit=crop" alt="Demo" className="w-full h-full object-cover" />
              </div>
            </div>

            {/* 卡片4 居中前景 任务闭环 */}
            <div className="absolute left-[10%] top-[40%] w-[420px] bg-[#F2F4FE] rounded-[24px] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.15)] p-6 z-30 border border-white ring-1 ring-[#DEE5FF]">
              <h3 className="text-[22px] font-bold text-gray-800 mb-3 mt-1">任务闭环</h3>
              <p className="text-[14px] text-gray-600 leading-relaxed mb-8 w-[85%]">
                连接分析与行动，支持策略自动化下发与效果追踪，形成端到端业务闭环。
              </p>
              
              <div className="bg-white rounded-[20px] p-2.5 shadow-sm border border-gray-100 flex flex-col gap-3">
                <div className="px-3 pt-2 text-[15px] text-gray-800 cursor-text line-clamp-1 break-all">为『高潜流失客群』生成挽留策略并下发执行任务<span className="inline-block w-px h-4 bg-blue-500 ml-0.5 animate-pulse align-middle"></span></div>
                <div className="flex items-center justify-between px-2 pb-1 mt-1">
                   <div className="flex items-center gap-1.5">
                     <button className="w-8 h-8 flex items-center justify-center text-gray-400 hover:text-gray-600 rounded-full hover:bg-gray-50 transition-colors">
                       <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l8.57-8.57A4 4 0 1 1 18 8.84l-8.59 8.57a2 2 0 0 1-2.83-2.83l8.49-8.48"/></svg>
                     </button>
                     <div className="flex items-center gap-1 bg-blue-50 text-blue-600 px-2.5 py-1.5 rounded-full text-[12px] font-medium border border-blue-100/50 cursor-pointer">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/></svg>
                        执行 <ChevronRight className="w-3 h-3" />
                     </div>
                     <button className="flex items-center gap-1.5 text-gray-600 px-2.5 py-1.5 rounded-full text-[12px] font-medium hover:bg-gray-50 transition-colors">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>
                        编程
                     </button>
                     <button className="flex items-center gap-1.5 text-gray-600 px-2.5 py-1.5 rounded-full text-[12px] font-medium hover:bg-gray-50 transition-colors">
                        <Grid className="w-3 h-3 shrink-0" />
                        更多
                     </button>
                   </div>
                   <button className="w-8 h-8 flex items-center justify-center text-gray-400 hover:text-gray-600 rounded-full hover:bg-gray-50 transition-colors ml-2">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"></path><path d="M19 10v2a7 7 0 0 1-14 0v-2"></path><line x1="12" x2="12" y1="19" y2="22"></line></svg>
                   </button>
                </div>
              </div>
            </div>

          </div>
        </div>
      </main>

      {/* ===== 主题分析区域 (还原原有下半部分) ===== */}
      <section className="max-w-[1400px] mx-auto px-6 lg:px-12 pt-10 relative z-10">
        <div className="text-center mb-10">
          <h2 className="text-[28px] text-gray-800 font-normal inline-block relative">
            主题分析
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row gap-6">
          {/* 左侧介绍 */}
          <div className="w-full lg:w-[280px] shrink-0 bg-[#EBF1FF] rounded-2xl p-7 relative overflow-hidden flex flex-col min-h-[460px]">
            <h3 className="text-xl text-gray-800 mb-5 font-medium">主题分析模块介绍</h3>
            <p className="text-gray-600 text-[14px] leading-7 relative z-10 tracking-wide">
              主题为面向特定业务场景的数据集合，用户既可以针对单个主题做特定分析，也可以针对多个主题做端到端串联分析。
            </p>
            {/* 底部插画占位 */}
            <div className="absolute bottom-[-10px] left-0 w-full h-48 pointer-events-none">
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-40 h-40 bg-blue-400/20 rounded-full blur-[40px]"></div>
              
              <div className="absolute bottom-8 left-1/2 -translate-x-1/2 w-28 h-28 bg-gradient-to-t from-blue-500 border-4 border-[#EBF1FF] shadow-lg to-blue-400 rounded-full flex flex-col items-center justify-center opacity-90 backdrop-blur-md">
                 <div className="w-14 h-4 rounded-full bg-blue-300/30 blur shadow-inner absolute bottom-4"></div>
                 <Database className="w-8 h-8 text-white mb-2 relative z-10" />
              </div>
              
              <div className="absolute bottom-28 left-8 w-10 h-10 bg-white shadow-sm border border-blue-50 rounded-lg rotate-12 flex items-center justify-center transform hover:-translate-y-1 transition-transform">
                <BarChart3 className="w-5 h-5 text-blue-500" />
              </div>
              <div className="absolute bottom-16 right-8 w-12 h-12 bg-white shadow-sm border border-blue-50 rounded-xl -rotate-12 flex items-center justify-center transform hover:-translate-y-1 transition-transform">
                <PieChart className="w-6 h-6 text-indigo-500" />
              </div>
              <div className="absolute bottom-12 left-[30%] w-2 h-2 rounded-full bg-blue-300"></div>
              <div className="absolute bottom-32 right-[20%] w-3 h-3 rounded-full bg-blue-400/50"></div>
            </div>
          </div>

          {/* 右侧卡片网格 */}
          <div className="flex-1 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
            {cards.map((card, idx) => (
              <div key={idx} className="bg-white rounded-2xl p-6 border border-gray-100 hover:shadow-[0_4px_20px_rgba(0,0,0,0.05)] hover:-translate-y-0.5 transition-all duration-300 flex flex-col h-[180px]">
                <div className="flex items-center gap-3 mb-3">
                  <div className={`w-[32px] h-[32px] rounded-lg shrink-0 flex items-center justify-center text-white ${card.color} shadow-sm`}>
                    {card.icon}
                  </div>
                  <h4 className="font-bold text-gray-800 text-[16px]">{card.title}</h4>
                </div>
                <p className="text-[13px] text-gray-500 line-clamp-2 flex-grow leading-relaxed mt-1">{card.desc}</p>
                <div className="flex items-center gap-2 mt-4 pt-1">
                  <button className="px-3 py-1.5 text-[12px] text-gray-600 bg-gray-50 hover:bg-gray-100 border border-gray-100 rounded-[4px] transition-colors flex items-center gap-0.5 group/btn">
                    {card.action} <ChevronRight className="w-3 h-3 text-gray-400 group-hover/btn:translate-x-0.5 transition-transform" />
                  </button>
                  <button className="px-3 py-1.5 text-[12px] text-gray-600 bg-gray-50 hover:bg-gray-100 border border-gray-100 rounded-[4px] transition-colors flex items-center gap-0.5 group/btn">
                    用户手册 <ChevronRight className="w-3 h-3 text-gray-400 group-hover/btn:translate-x-0.5 transition-transform" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

