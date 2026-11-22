import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { PageBanner } from './topicPageKit';

const sections = [
  { id: 'collection', num: '01', title: '我们收集哪些信息，在什么场景下收集' },
  { id: 'usage', num: '02', title: '我们如何使用您提交的信息' },
  { id: 'sharing', num: '03', title: '我们如何对外提供个人信息' },
  { id: 'storage', num: '04', title: '我们如何存储与保护您的信息' },
  { id: 'rights', num: '05', title: '您对自身个人信息享有的权利' },
  { id: 'minors', num: '06', title: '未成年人保护' },
  { id: 'cookies', num: '07', title: 'Cookie 及同类技术的使用' },
  { id: 'updates', num: '08', title: '本政策的更新' },
  { id: 'contact', num: '09', title: '联系我们' }
];

const rights = [
  {
    name: '知情权与决定权',
    desc: '了解我们对您个人信息的处理规则，并有权限制或拒绝我们对您个人信息的处理（法律另有规定的除外）。'
  },
  {
    name: '查阅、复制权',
    desc: '查阅、复制我们持有的您的个人信息。'
  },
  {
    name: '更正、补充权',
    desc: '发现您的个人信息不准确或不完整时，要求我们更正、补充。'
  },
  {
    name: '删除权',
    desc: '在处理目的已实现、您撤回同意、我们违法处理您的个人信息，或法律法规规定的其他应当删除的情形下，要求我们删除您的个人信息。'
  },
  {
    name: '撤回同意权',
    desc: '对基于同意处理的个人信息，随时撤回同意。'
  }
];

function PolicySection({ id, num, title, children }) {
  return (
    <section id={id} data-policy-section className="privacy-card glass-card scroll-mt-28 p-6 md:p-8">
      <div className="relative z-10">
        <div className="mb-4 flex items-center gap-3">
          <span className="privacy-num flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-xl bg-emerald-500/15 text-xs font-bold text-emerald-700">
            {num}
          </span>
          <h2 className="mb-0 text-lg font-semibold text-gray-800 md:text-xl">{title}</h2>
        </div>
        <div className="text-sm leading-relaxed text-gray-600 md:text-[15px]">{children}</div>
      </div>
    </section>
  );
}

function PrivacyPolicy() {
  const [active, setActive] = useState('collection');

  useEffect(() => {
    const items = Array.from(document.querySelectorAll('[data-policy-section]'));
    if (!items.length) return undefined;

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

    items.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);

  const handleJump = (event, id) => {
    event.preventDefault();
    const target = document.getElementById(id);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setActive(id);
      window.history.replaceState(null, '', `#${id}`);
    }
  };

  return (
    <div className="min-h-screen pb-16">
      <div className="legal-curtain" aria-hidden="true" />

      <PageBanner
        kicker="PRIVACY POLICY"
        title="隐私政策"
        description="山东黄河三角洲国家级自然保护区官网尊重并保护每一位访问者的个人信息，本页面完整说明信息的收集、使用、存储、对外提供及您所享有的权利。"
        chips={['发布主体：保护区管理委员会', '生效日期：2026年11月22日', '最近更新：2026年11月22日']}
      />

      <div className="container mx-auto mt-10 px-4">
        <Link
          to="/legal"
          className="group mb-8 inline-flex items-center gap-2 rounded-full border border-white/70 bg-white/60 px-4 py-2 text-sm text-gray-700 backdrop-blur-md transition-all duration-300 hover:-translate-x-1 hover:border-emerald-200 hover:text-emerald-700 hover:shadow-lg hover:shadow-emerald-500/10"
        >
          <span className="transition-transform duration-300 group-hover:-translate-x-1">←</span>
          返回法律声明
        </Link>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
          {/* 目录 */}
          <aside className="lg:col-span-1">
            <div className="glass-panel p-4 lg:sticky lg:top-24">
              <div className="mb-4 px-2">
                <p className="mb-1 text-xs font-semibold tracking-widest text-emerald-700">目录</p>
                <p className="mb-0 text-[11px] text-gray-500">点击跳转，滚动自动定位</p>
              </div>
              <nav>
                {sections.map((item) => (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    onClick={(event) => handleJump(event, item.id)}
                    className={`legal-nav-item ${active === item.id ? 'is-active' : ''}`}
                  >
                    <span className="legal-nav-num">{item.num}</span>
                    <span className="leading-snug">{item.title}</span>
                    <span className="legal-nav-arrow">→</span>
                  </a>
                ))}
              </nav>
            </div>
          </aside>

          {/* 正文 */}
          <div className="space-y-6 lg:col-span-3">
            <div className="privacy-card glass-panel p-6 md:p-8">
              <div className="relative z-10">
                <div className="mb-5 grid grid-cols-1 gap-3 text-sm sm:grid-cols-2">
                  <p className="mb-0"><span className="text-gray-500">发布主体：</span>山东黄河三角洲国家级自然保护区管理委员会</p>
                  <p className="mb-0"><span className="text-gray-500">备案 / 主办单位：</span>山东黄河三角洲国家级自然保护区管理委员会</p>
                  <p className="mb-0 sm:col-span-2 break-all">
                    <span className="text-gray-500">网站域名：</span>
                    https://lupengguang.github.io/Yellow-River-Delta-Official-Website---Internship/
                  </p>
                  <p className="mb-0"><span className="text-gray-500">生效日期：</span>2026年11月22日</p>
                  <p className="mb-0"><span className="text-gray-500">最近更新日期：</span>2026年11月22日</p>
                </div>

                <div className="border-t border-white/60 pt-5 text-sm leading-relaxed text-gray-600 md:text-[15px]">
                  <p>
                    山东黄河三角洲国家级自然保护区官网（以下简称“本网站”）是保护区管理机构履行信息公开、生态科普、访客服务与公众互动职能的官方平台。本网站尊重并保护每一位访问者的个人信息。鉴于本网站同时承载政务公开与自然保护地访客管理的双重功能，本政策依据《中华人民共和国个人信息保护法》《中华人民共和国网络安全法》《中华人民共和国数据安全法》及相关法律法规制定，就本网站在运行过程中如何收集、使用、存储、对外提供个人信息，以及您对自身个人信息所享有的权利，作出完整告知。
                  </p>
                  <p className="mb-0">
                    <strong className="text-gray-800">请您在提交任何个人信息之前，仔细阅读并充分理解本政策。</strong>
                    对于涉及敏感个人信息的处理，我们将依据法律规定另行取得您的单独同意。
                  </p>
                </div>
              </div>
            </div>

            <PolicySection id="collection" num="01" title="我们收集哪些信息，在什么场景下收集">
              <p>
                本网站仅在实现特定功能所必需的范围内收集个人信息，不收集与所提供服务无关的信息。具体场景与信息类型如下：
              </p>

              <p className="mb-2 font-semibold text-gray-800">（一）您主动提交的信息</p>
              <div className="mb-5 overflow-x-auto">
                <table className="privacy-table w-full min-w-[640px] border-collapse text-left text-sm">
                  <thead>
                    <tr className="text-xs text-gray-500">
                      <th className="w-1/5 px-3 py-2.5 font-medium">场景</th>
                      <th className="w-1/3 px-3 py-2.5 font-medium">收集的信息</th>
                      <th className="px-3 py-2.5 font-medium">收集目的与必要性</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-t border-gray-200/70">
                      <td className="px-3 py-3 font-medium text-gray-800">咨询、建议或投诉留言</td>
                      <td className="px-3 py-3">姓名、联系电话或电子邮箱、留言内容</td>
                      <td className="px-3 py-3">核实留言人身份、回复诉求、跟进处理。未提供联系方式将无法向您反馈处理结果。</td>
                    </tr>
                    <tr className="border-t border-gray-200/70">
                      <td className="px-3 py-3 font-medium text-gray-800">访客预约 / 入区登记</td>
                      <td className="px-3 py-3">姓名、<strong className="text-gray-800">身份证号码</strong>、手机号码</td>
                      <td className="px-3 py-3">依据保护区访客实名制管理要求，用于入区身份核验、安全保障与限流管理。景区实行实名制预约和入区登记，入区时需核验身份信息。身份证号码属于敏感个人信息，我们将在本政策第二条第（三）项中专门说明其处理规则。</td>
                    </tr>
                    <tr className="border-t border-gray-200/70">
                      <td className="px-3 py-3 font-medium text-gray-800">科研数据或入区科研申请</td>
                      <td className="px-3 py-3">姓名、所属机构、联系方式、研究用途说明</td>
                      <td className="px-3 py-3">审核申请资质、评估科研活动与保护目标的兼容性、履行数据或入区管理义务。</td>
                    </tr>
                    <tr className="border-t border-gray-200/70">
                      <td className="px-3 py-3 font-medium text-gray-800">意见征集或问卷调查</td>
                      <td className="px-3 py-3">视具体调查内容而定，通常以匿名方式进行；若需识别特定对象，将另行告知。</td>
                      <td className="px-3 py-3">辅助管理决策与服务质量改进。</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="mb-2 font-semibold text-gray-800">（二）在您浏览过程中自动收集的技术性信息</p>
              <p>
                当您访问本网站时，服务器日志或网站分析工具可能自动记录以下信息：IP地址（或经匿名化处理的部分字段）、浏览器类型与版本、操作系统类型、访问日期与时间、访问的页面地址、来源链接。此类信息<strong className="text-gray-800">不用于识别特定自然人的真实身份</strong>，仅用于网站可用性监测、访问量统计、安全防护与故障排查。
              </p>
              <p className="mb-0">
                本网站<strong className="text-gray-800">不会</strong>在您未主动提交的情况下，收集您的身份证号码、行踪轨迹、生物识别信息、医疗健康信息等敏感个人信息。您在公开留言栏目中主动披露的信息可能被其他访问者看到，请您自行审慎决定公开内容的范围。
              </p>
            </PolicySection>

            <PolicySection id="usage" num="02" title="我们如何使用您提交的信息">
              <p>
                <strong className="text-gray-800">（一）目的限定原则。</strong>
                我们仅为收集信息时所告知的特定目的使用您的个人信息，包括：核实身份并提供您所请求的服务；回复您的咨询、建议或投诉；执行您明确作出的指示；发送与您请求直接相关的通知；履行保护区管理法律法规所要求的实名登记、安全管理和流量控制义务。我们<strong className="text-gray-800">不会</strong>将您的个人信息用于商业营销，也不会将其出售或出租给任何第三方。
              </p>
              <p>
                <strong className="text-gray-800">（二）敏感个人信息的单独同意与必要性。</strong>
                身份证号码属于《个人信息保护法》规定的敏感个人信息。本网站在访客预约与入区登记场景中收集身份证号码，以<strong className="text-gray-800">保护区访客实名制管理</strong>所必需为前提。根据法律规定，处理敏感个人信息应当取得您的<strong className="text-gray-800">单独同意</strong>；我们不会将同意捆绑在一揽子授权中，也不会以您不同意处理敏感个人信息为由，拒绝提供不依赖该信息的其他服务。如您拒绝提供身份证号码，您将无法完成实名预约登记，但浏览本网站公开信息、查阅科普内容、提交不涉及身份的普通咨询等功能不受影响。
              </p>
              <p className="mb-0">
                <strong className="text-gray-800">（三）撤回同意。</strong>
                您有权随时撤回此前作出的同意。撤回同意不影响撤回前基于您的同意已经进行的个人信息处理活动的效力。撤回方式见本政策第五条。
              </p>
            </PolicySection>

            <PolicySection id="sharing" num="03" title="我们如何对外提供个人信息">
              <p>本网站原则上不向任何第三方提供您的个人信息，以下法定或约定情形除外：</p>
              <ol className="mb-4 list-decimal space-y-2 pl-5">
                <li><strong className="text-gray-800">取得您的单独同意。</strong>向第三方提供个人信息时，我们将依法取得您的单独同意，并告知接收方的名称、联系方式、处理目的和处理方式。</li>
                <li><strong className="text-gray-800">履行法定职责或法定义务所必需。</strong>例如，依据有权国家机关依法定程序提出的要求，在法定权限与程序范围内提供。</li>
                <li><strong className="text-gray-800">为应对突发公共卫生事件，或者紧急情况下为保护自然人的生命健康和财产安全所必需。</strong></li>
                <li><strong className="text-gray-800">法律法规规定的其他情形。</strong></li>
              </ol>
              <p className="mb-0">
                本网站不会将您的个人信息进行<strong className="text-gray-800">跨境传输</strong>。如未来因服务需要确需跨境传输，我们将依法履行安全评估、单独同意等法定程序，并另行告知。
              </p>
            </PolicySection>

            <PolicySection id="storage" num="04" title="我们如何存储与保护您的信息">
              <p>
                <strong className="text-gray-800">（一）存储地点与期限。</strong>
                您的个人信息存储于中华人民共和国境内。我们仅在实现收集目的所必需的最短期限内保留您的个人信息，法律法规另有规定的除外。超出保存期限后，我们将对您的个人信息予以删除或进行匿名化处理。
              </p>
              <p className="mb-0">
                <strong className="text-gray-800">（二）安全措施。</strong>
                我们采取符合业界标准的技术措施和管理制度保护个人信息安全，包括但不限于：传输层加密、访问权限控制、操作日志审计、最小权限授权、定期安全评估。如发生或可能发生个人信息泄露、篡改、丢失，我们将依法启动应急预案，并按照法律规定向履行个人信息保护职责的部门和个人告知相关情况。
              </p>
            </PolicySection>

            <PolicySection id="rights" num="05" title="您对自身个人信息享有的权利">
              <p>依据《中华人民共和国个人信息保护法》，您对自身个人信息享有以下权利：</p>
              <div className="mb-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
                {rights.map((right) => (
                  <div
                    key={right.name}
                    className="rights-card rounded-xl border border-white/70 bg-white/55 p-4"
                  >
                    <p className="mb-1 text-sm font-semibold text-emerald-700">{right.name}</p>
                    <p className="mb-0 text-xs leading-relaxed text-gray-600">{right.desc}</p>
                  </div>
                ))}
              </div>
              <p className="mb-0">
                <strong className="text-gray-800">行使方式：</strong>
                您可以通过本政策第七条所列的联系方式向我们提出上述请求。为保障安全，我们可能需要先核实您的身份。我们将在法律规定的时限内（通常为十五个工作日内）予以回应。对于您的合理请求，原则上不收取费用；对于无端重复或超出合理限度的请求，我们可能依法收取必要成本，或说明拒绝的理由。
              </p>
            </PolicySection>

            <PolicySection id="minors" num="06" title="未成年人保护">
              <p className="mb-0">
                本网站不以未成年人为主要服务对象，也不会在明知的情况下收集不满十四周岁未成年人的个人信息。若不满十四周岁的未成年人需要提交个人信息（如访客预约），应当事先取得其父母或者其他监护人的<strong className="text-gray-800">单独同意</strong>。监护人发现我们在未取得同意的情况下收集了未成年人个人信息的，有权通过本政策第七条的联系方式要求删除，我们将及时处理。
              </p>
            </PolicySection>

            <PolicySection id="cookies" num="07" title="Cookie 及同类技术的使用">
              <p className="mb-0">
                本网站可能使用Cookie或同类本地存储技术，用于维持会话状态、记录您的语言或显示偏好、统计匿名访问数据。本网站<strong className="text-gray-800">不将Cookie用于跨站追踪用户、进行用户画像或定向推送商业广告</strong>。您可以通过浏览器设置拒绝或删除Cookie。拒绝Cookie可能导致部分依赖会话状态的功能无法正常使用，但不影响您浏览本网站的基本信息页面。
              </p>
            </PolicySection>

            <PolicySection id="updates" num="08" title="本政策的更新">
              <p className="mb-0">
                我们可能因法律法规变化、业务功能调整或保护管理需要而修订本政策。修订后的政策将在本页面发布，并更新“最近更新日期”。若修订涉及个人信息处理目的、方式或种类的<strong className="text-gray-800">实质性变更</strong>，我们将通过网站公告或弹窗提示等显著方式另行告知，必要时重新取得您的同意。建议您定期查阅本页面以了解最新版本。
              </p>
            </PolicySection>

            <PolicySection id="contact" num="09" title="联系我们">
              <p>
                如您对本政策有任何疑问、意见、投诉，或需要行使本政策第五条所列的个人信息权利，请通过以下方式与我们联系：
              </p>
              <div className="mb-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
                <div className="rounded-xl border border-white/70 bg-white/55 p-4">
                  <p className="mb-1 text-xs text-gray-500">联系机构</p>
                  <p className="mb-0 text-sm font-medium text-gray-800">山东黄河三角洲国家级自然保护区管理委员会</p>
                </div>
                <div className="rounded-xl border border-white/70 bg-white/55 p-4">
                  <p className="mb-1 text-xs text-gray-500">通信地址</p>
                  <p className="mb-0 text-sm font-medium text-gray-800">山东省东营市沂河路258号（邮政编码：257091）</p>
                </div>
                <div className="rounded-xl border border-white/70 bg-white/55 p-4">
                  <p className="mb-1 text-xs text-gray-500">联系电话</p>
                  <a href="tel:0546-8305827" className="privacy-link text-sm">0546-8305827</a>
                </div>
                <div className="rounded-xl border border-white/70 bg-white/55 p-4">
                  <p className="mb-1 text-xs text-gray-500">电子邮箱</p>
                  <a href="mailto:zrbhqbgs@dy.shandong.cn" className="privacy-link break-all text-sm">zrbhqbgs@dy.shandong.cn</a>
                </div>
              </div>
              <p className="mb-0">
                我们将在收到您的请求后尽快处理。如您认为我们的个人信息处理行为损害了您的合法权益，您也可以向履行个人信息保护职责的监管部门投诉、举报，或依法向人民法院提起诉讼。
              </p>
            </PolicySection>

            <div className="text-center">
              <Link
                to="/legal"
                className="group inline-flex items-center gap-2 rounded-full border border-white/70 bg-white/70 px-5 py-2.5 text-sm text-gray-700 transition-all duration-300 hover:-translate-y-0.5 hover:border-emerald-200 hover:text-emerald-700 hover:shadow-lg hover:shadow-emerald-500/10"
              >
                <span className="transition-transform duration-300 group-hover:-translate-x-1">←</span>
                返回法律声明
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PrivacyPolicy;
