import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const legalNav = [
  { id: 'copyright', num: '01', title: '版权归属' },
  { id: 'reprint', num: '02', title: '转载与引用规则' },
  { id: 'third-party-links', num: '03', title: '链接免责' },
  { id: 'accuracy', num: '04', title: '信息准确性与使用风险' },
  { id: 'force-majeure', num: '05', title: '不可抗力与服务中断' },
  { id: 'applicable-law', num: '06', title: '法律适用与解释' }
];

const privacyNav = [
  { id: 'info-collection', num: '01', title: '信息的收集' },
  { id: 'info-usage', num: '02', title: '信息的使用' },
  { id: 'info-sharing', num: '03', title: '信息的对外提供' },
  { id: 'info-storage', num: '04', title: '信息的存储与安全' },
  { id: 'rights', num: '05', title: '您的权利' },
  { id: 'minors', num: '06', title: '未成年人保护' },
  { id: 'cookies', num: '07', title: 'Cookie 与同类技术' },
  { id: 'policy-updates', num: '08', title: '政策的更新' },
  { id: 'contact', num: '09', title: '联系方式' }
];

function NavGroup({ label, items, active, onJump }) {
  return (
    <div className="mb-5 last:mb-0">
      <p className="text-[11px] font-semibold text-gray-400 tracking-widest mb-1 px-2">{label}</p>
      {items.map((item) => (
        <a
          key={item.id}
          href={`#${item.id}`}
          onClick={(event) => onJump(event, item.id)}
          className={`legal-nav-item ${active === item.id ? 'is-active' : ''}`}
        >
          <span className="legal-nav-num">{item.num}</span>
          <span>{item.title}</span>
          <span className="legal-nav-arrow">→</span>
        </a>
      ))}
    </div>
  );
}

function DocSection({ id, num, title, children }) {
  return (
    <section id={id} data-legal-section className="legal-section scroll-mt-28">
      <div className="glass-card p-6 md:p-8">
        <div className="flex items-center gap-3 mb-4">
          <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-emerald-500/15 text-emerald-700 text-xs font-bold flex items-center justify-center">
            {num}
          </span>
          <h3 className="text-base md:text-lg font-semibold text-gray-800 mb-0">{title}</h3>
        </div>
        <div className="text-sm md:text-[15px] text-gray-600 leading-relaxed">{children}</div>
      </div>
    </section>
  );
}

function LegalStatement() {
  const [active, setActive] = useState('copyright');
  const { hash } = useLocation();

  useEffect(() => {
    const sections = Array.from(document.querySelectorAll('[data-legal-section]'));
    if (!sections.length) return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible.length) {
          setActive(visible[0].target.id);
        }
      },
      { rootMargin: '-15% 0px -70% 0px', threshold: 0 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!hash) return undefined;
    const id = hash.replace('#', '');
    const timer = setTimeout(() => {
      const target = document.getElementById(id);
      if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 160);
    return () => clearTimeout(timer);
  }, [hash]);

  const handleJump = (event, id) => {
    event.preventDefault();
    setActive(id);
    const target = document.getElementById(id);
    if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="pb-16 min-h-screen">
      <div className="legal-curtain" aria-hidden="true" />

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-700 via-teal-700 to-sky-800" />
        <div className="absolute -top-24 -right-16 w-80 h-80 rounded-full bg-emerald-300/20 blur-3xl" />
        <div className="absolute -bottom-28 -left-10 w-72 h-72 rounded-full bg-sky-300/20 blur-3xl" />
        <div className="relative container mx-auto px-4 py-20 md:py-24">
          <p className="text-emerald-100/90 tracking-[0.35em] text-xs md:text-sm mb-3">
            LEGAL &amp; PRIVACY
          </p>
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-4 leading-tight">
            法律声明 <span className="text-emerald-200">&amp;</span> 隐私政策
          </h1>
          <p className="text-emerald-50/90 max-w-2xl mb-6">
            发布主体：山东黄河三角洲国家级自然保护区管理委员会。本页面说明本站内容版权、转载规则、链接免责，以及个人信息的收集与保护方式。
          </p>
          <div className="flex flex-wrap gap-3">
            {['适用法律：中华人民共和国法律', '发布主体：保护区管委会', '生效日期：待正式发布后填写'].map(
              (chip) => (
                <span
                  key={chip}
                  className="rounded-full border border-white/30 bg-white/10 px-4 py-1.5 text-xs text-white/90 backdrop-blur-md transition-all duration-500 hover:-translate-y-0.5 hover:bg-white/20"
                >
                  {chip}
                </span>
              )
            )}
          </div>
        </div>
      </section>

      {/* 文档主体 */}
      <div className="container mx-auto px-4 mt-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* 侧边锚点导航 */}
          <aside className="lg:col-span-1">
            <div className="lg:sticky lg:top-24 glass-panel p-4">
              <div className="mb-4 px-2">
                <p className="text-xs font-semibold text-emerald-700 tracking-widest mb-1">目录</p>
                <p className="text-[11px] text-gray-500 mb-0">点击跳转，滚动自动定位</p>
              </div>
              <NavGroup label="法律声明" items={legalNav} active={active} onJump={handleJump} />
              <NavGroup label="隐私政策" items={privacyNav} active={active} onJump={handleJump} />
            </div>
          </aside>

          {/* 正文 */}
          <div className="lg:col-span-3 space-y-6">
            {/* 法律声明 */}
            <div
              id="legal"
              data-legal-section
              className="legal-section glass-panel p-6 md:p-8 scroll-mt-28"
            >
              <p className="text-[11px] text-emerald-700 tracking-[0.3em] mb-2">PART ONE</p>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">法律声明</h2>
              <p className="text-sm text-gray-500 mb-0">
                发布主体：山东黄河三角洲国家级自然保护区管理委员会
              </p>
            </div>

            <DocSection id="copyright" num="01" title="版权归属">
              <p className="mb-0">
                本网站（含域名及所有子页面）刊载的文字、图片、图表、音频、视频、数据汇编及其他数字化内容，其著作权及相关权利归本网站运营主体所有，或已获得合法授权。任何单位或个人未经书面许可，不得以转载、摘编、镜像、建立镜像站点、爬取数据等方式使用上述内容，亦不得用于商业目的。
              </p>
            </DocSection>

            <DocSection id="reprint" num="02" title="转载与引用规则">
              <p>
                <strong className="text-gray-800">本网站原创内容：</strong>
                转载或引用须事先获得书面授权，并在显著位置注明“来源：山东黄河三角洲国家级自然保护区官网”及原文链接。授权使用不得歪曲、篡改原意。
              </p>
              <p className="mb-0">
                <strong className="text-gray-800">本网站转载内容：</strong>
                转载目的在于传递信息、服务公众，不以商业盈利为目的。转载内容的著作权归原作者或原出处所有，本网站尽可能注明来源。如权利人认为转载侵犯其合法权益，请通过本声明末尾的联系方式告知，本网站核实后将及时删除或修正。
              </p>
            </DocSection>

            <DocSection id="third-party-links" num="03" title="链接免责">
              <p className="mb-0">
                本网站包含指向第三方网站的链接，此类链接仅为方便用户获取扩展信息而设置。本网站不对第三方网站的内容、隐私做法、安全性或合法性承担任何责任。用户访问第三方网站时，应自行审阅该网站的法律声明与隐私政策。
              </p>
            </DocSection>

            <DocSection id="accuracy" num="04" title="信息准确性与使用风险">
              <p className="mb-0">
                本网站尽力确保所发布信息的准确性与时效性，但不对信息的完整性、即时性或适用于特定目的作出明示或默示的保证。涉及保护区范围、功能区划、访客管理规则、生态旅游开放状态等具有法律或管理效力的信息，以管理机构正式发布的文件或现场公告为准。用户基于本网站信息作出的决策及由此产生的后果，由用户自行承担。
              </p>
            </DocSection>

            <DocSection id="force-majeure" num="05" title="不可抗力与服务中断">
              <p className="mb-0">
                因下列情形导致本网站服务中断、数据丢失或访问异常，本网站不承担赔偿责任：黑客攻击、计算机病毒侵入或发作；因政府管制、政策调整导致的临时性关闭；自然灾害（洪水、地震、台风等）、战争、动乱、停电等不可抗力；电信运营商或云服务提供商的基础设施故障。本网站将尽合理努力恢复服务，但不承诺服务的绝对连续性与无故障运行。
              </p>
            </DocSection>

            <DocSection id="applicable-law" num="06" title="法律适用与解释">
              <p className="mb-0">
                本声明适用中华人民共和国法律。本网站运营主体保留对本声明的修改权与最终解释权；声明修改后将在本页面公布，继续使用本网站即视为接受修改后的声明。
              </p>
            </DocSection>

            {/* 隐私政策 */}
            <div
              id="privacy"
              data-legal-section
              className="legal-section glass-panel p-6 md:p-8 scroll-mt-28"
            >
              <p className="text-[11px] text-emerald-700 tracking-[0.3em] mb-2">PART TWO</p>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">隐私政策</h2>
              <p className="text-sm text-gray-500 mb-1">
                发布主体：山东黄河三角洲国家级自然保护区管理委员会（或实际运营主体）
              </p>
              <p className="text-sm text-gray-500 mb-0">
                生效日期：
                <span className="text-emerald-700">［填入正式发布日期］</span>
              </p>
            </div>

            <DocSection id="privacy-intro" num="引言" title="政策说明">
              <p className="mb-0">
                本网站尊重并保护访问者的个人信息。鉴于政务网站与自然保护地官网的双重属性，本政策依据《中华人民共和国个人信息保护法》《中华人民共和国网络安全法》及相关法规制定，说明本网站在何种情形下收集何种信息、如何使用与保护，以及您享有的权利。
              </p>
            </DocSection>

            <DocSection id="info-collection" num="01" title="信息的收集">
              <p className="mb-0">
                本网站收集的信息分为两类，适用不同的处理逻辑：
              </p>
              <div>
                <p className="font-semibold text-gray-800 mb-2">（一）自动收集的技术性信息</p>
                <p>
                  当您浏览本网站时，服务器日志或分析工具可能自动记录：IP地址（或经匿名化处理的部分字段）、浏览器与操作系统类型、访问时间、访问页面、来源链接等。此类信息不用于识别特定自然人身份，仅用于网站运行监测、访问量统计和安全防护。
                </p>
                <p className="font-semibold text-gray-800 mb-2">（二）您主动提交的个人信息</p>
                <p>仅在以下互动场景中，本网站可能要求您提供必要的个人信息：</p>
                <div className="overflow-x-auto mb-4">
                  <table className="w-full min-w-[560px] text-left border-collapse text-sm">
                    <thead>
                      <tr className="text-xs text-gray-500">
                        <th className="py-2.5 px-3 font-medium">场景</th>
                        <th className="py-2.5 px-3 font-medium">可能收集的信息</th>
                        <th className="py-2.5 px-3 font-medium">收集目的</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        ['咨询/建议/投诉留言', '姓名、联系方式（电话或邮箱）、留言内容', '核实身份、回复诉求、跟进处理'],
                        ['访客预约/活动报名', '姓名、身份证号（必要时）、联系电话', '入区管理、安全保障、活动组织'],
                        ['科研数据申请', '姓名、所属机构、联系方式、研究用途说明', '审核资质、履行数据提供义务'],
                        ['意见征集/问卷调查', '视具体调查内容而定，通常匿名', '辅助管理决策与服务质量改进']
                      ].map((row) => (
                        <tr
                          key={row[0]}
                          className="border-t border-white/60 transition-colors duration-300 hover:bg-white/50"
                        >
                          <td className="py-3 px-3 text-gray-700 font-medium">{row[0]}</td>
                          <td className="py-3 px-3 text-gray-600">{row[1]}</td>
                          <td className="py-3 px-3 text-gray-600">{row[2]}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p className="mb-0">
                  本网站不会在您未主动提交的情况下收集身份证号、住址、生物识别信息等敏感个人信息。您在留言、评论或公开互动栏目中主动公开的信息，可能被其他访问者看到，请审慎决定是否在公开内容中包含个人敏感信息。
                </p>
              </div>
            </DocSection>

            <DocSection id="info-usage" num="02" title="信息的使用">
              <p className="mb-0">
                主动提交的个人信息，仅用于收集时告知的特定目的，包括：核实身份并提供所请求的服务；回复咨询、建议或投诉；执行您明确作出的指示；发送与您请求直接相关的通知；法律法规要求的其他用途。本网站不会将您的个人信息用于商业营销，也不会将其出售或出租给任何第三方。
              </p>
            </DocSection>

            <DocSection id="info-sharing" num="03" title="信息的对外提供">
              <p>本网站原则上不向第三方提供您的个人信息，以下情形除外：</p>
              <ul className="pl-0 list-none mb-0">
                {[
                  '取得您的单独同意（依法需单独同意的情形，不以概括同意替代）；',
                  '履行法定职责或法定义务所必需——例如，依据有权机关依法定程序提出的要求进行提供；',
                  '为应对突发公共卫生事件或紧急情况下保护自然人生命健康、财产安全所必需；',
                  '法律法规规定的其他情形。'
                ].map((item) => (
                  <li key={item} className="flex gap-2 mb-0">
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-emerald-500 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </DocSection>

            <DocSection id="info-storage" num="04" title="信息的存储与安全">
              <p className="mb-0">
                本网站采取技术措施（访问控制、传输加密、日志审计等）和管理制度，防止个人信息被未经授权访问、泄露、篡改或丢失。个人信息存储期限为实现收集目的所必需的最短时间，超出期限后将予以删除或匿名化处理，法律法规另有规定的除外。
              </p>
            </DocSection>

            <DocSection id="rights" num="05" title="您的权利">
              <p>
                依据《个人信息保护法》，您对自身个人信息享有以下权利：
              </p>
              <ul className="pl-0 list-none">
                {[
                  '知情权与决定权（了解处理规则并限制或拒绝处理）',
                  '查阅与复制权',
                  '更正与补充权',
                  '删除权（在处理目的已实现、您撤回同意、处理行为违法等法定情形下）',
                  '撤回同意权（撤回不影响撤回前基于同意已进行的处理活动的效力）'
                ].map((item) => (
                  <li key={item} className="flex gap-2 mb-0">
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-emerald-500 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mb-0">
                行使上述权利，请通过本政策末尾的联系方式提出，本网站将在法定时限内予以回应。为保障安全，本网站可能需要先核实您的身份。
              </p>
            </DocSection>

            <DocSection id="minors" num="06" title="未成年人保护">
              <p className="mb-0">
                本网站不以未成年人为主要服务对象，也不会在明知的情况下收集未成年人的个人信息。若未成年人（不满十四周岁）需要提交个人信息，应事先取得其父母或其他监护人的同意。监护人发现本网站在未获同意的情况下收集了未成年人个人信息的，有权要求删除。
              </p>
            </DocSection>

            <DocSection id="cookies" num="07" title="Cookie 与同类技术">
              <p className="mb-0">
                本网站可能使用Cookie或类似技术维持会话状态、记录偏好设置或进行访问统计。您可以通过浏览器设置拒绝或删除Cookie，但这可能导致部分功能无法正常使用。本网站不将Cookie用于跨站追踪或用户画像。
              </p>
            </DocSection>

            <DocSection id="policy-updates" num="08" title="政策的更新">
              <p className="mb-0">
                本政策可能因法规变化或业务调整而更新。更新后的版本将在本页面公布，重大变更将以适当方式提示。建议您定期查阅。
              </p>
            </DocSection>

            <DocSection id="contact" num="09" title="联系方式">
              <p>个人信息保护相关事务，请联系：</p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div className="rounded-xl border border-white/70 bg-white/60 p-4 transition-all duration-500 hover:-translate-y-0.5 hover:border-emerald-200 hover:shadow-md hover:shadow-emerald-500/10">
                  <p className="text-xs text-gray-500 mb-1">电子邮箱</p>
                  <p className="text-sm font-medium text-emerald-700 mb-0 break-all">
                    1283019010@qq.com
                  </p>
                </div>
                <div className="rounded-xl border border-white/70 bg-white/60 p-4 transition-all duration-500 hover:-translate-y-0.5 hover:border-emerald-200 hover:shadow-md hover:shadow-emerald-500/10">
                  <p className="text-xs text-gray-500 mb-1">通信地址</p>
                  <p className="text-sm font-medium text-gray-700 mb-0">
                    山东省东营市沂河路258号
                  </p>
                </div>
                <div className="rounded-xl border border-white/70 bg-white/60 p-4 transition-all duration-500 hover:-translate-y-0.5 hover:border-emerald-200 hover:shadow-md hover:shadow-emerald-500/10">
                  <p className="text-xs text-gray-500 mb-1">联系电话</p>
                  <p className="text-sm font-medium text-gray-400 mb-0">待填写</p>
                </div>
              </div>
            </DocSection>

            <div className="text-center pt-2">
              <p className="text-xs text-gray-400 mb-0">
                本页内容自公布之日起适用，最终解释权归发布主体所有。
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* 回到顶部 */}
      <button
        type="button"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        aria-label="回到顶部"
        className="fixed bottom-6 right-6 z-40 w-11 h-11 rounded-full bg-emerald-600 text-white shadow-lg shadow-emerald-600/30 transition-all duration-300 hover:-translate-y-1 hover:bg-emerald-700 hover:shadow-xl"
      >
        ↑
      </button>
    </div>
  );
}

export default LegalStatement;
