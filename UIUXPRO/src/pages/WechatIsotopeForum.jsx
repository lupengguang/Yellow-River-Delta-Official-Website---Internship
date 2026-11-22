import React from 'react';
import { Link } from 'react-router-dom';
import { PageBanner } from './topicPageKit';

const img = (file) => `${import.meta.env.BASE_URL}images/${encodeURIComponent(file)}`;

const forumInfo = [
  { label: '论坛时间', value: '2026年11月7日—8日' },
  { label: '论坛地点', value: '江苏 · 南京' },
  { label: '主办单位', value: '国际水文科学协会中国委员会同位素分委员会（CCT）' },
  { label: '参会规模', value: '95个单位、300余位专家学者及研究生' }
];

function WechatIsotopeForum() {
  return (
    <div className="min-h-screen pb-16">
      <PageBanner
        kicker="WECHAT · 鲁大现代农业高质量发展研究基地"
        title="第六届中国同位素水文学论坛在南京市成功举办"
        description="2026年11月7日至8日，第六届中国同位素水文学论坛（icWater6）在江苏南京举行，来自全国95个单位的300余位专家学者及研究生参会。"
        chips={['icWater6', '2026年11月7—8日', '江苏 · 南京']}
      />

      <div className="container mx-auto mt-8 px-4">
        <Link
          to="/other-results/wechat"
          className="group mb-6 inline-flex items-center gap-2 rounded-full border border-white/70 bg-white/60 px-4 py-2 text-sm text-gray-700 backdrop-blur-md transition-all duration-300 hover:-translate-x-1 hover:border-emerald-200 hover:text-emerald-700 hover:shadow-lg hover:shadow-emerald-500/10"
        >
          <span className="transition-transform duration-300 group-hover:-translate-x-1">←</span>
          返回公众号
        </Link>

        <article className="glass-card mx-auto max-w-4xl p-6 md:p-10">
          <div className="mb-8 flex flex-wrap items-center gap-3 border-b border-white/60 pb-5 text-xs text-gray-500">
            <span className="rounded-full bg-blue-600 px-3 py-1 font-medium text-white">官方公众号</span>
            <span>鲁大现代农业高质量发展研究基地</span>
            <span className="text-gray-300">|</span>
            <span>2026年11月7—8日</span>
          </div>

          <div className="mb-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
            {forumInfo.map((item) => (
              <div
                key={item.label}
                className="rights-card rounded-xl border border-white/70 bg-white/55 p-4"
              >
                <p className="mb-1 text-xs text-gray-500">{item.label}</p>
                <p className="mb-0 text-sm font-medium text-gray-800">{item.value}</p>
              </div>
            ))}
          </div>

          <div className="space-y-5 text-[15px] leading-8 text-gray-700">
            <p>
              2026年11月7日至8日，第六届中国同位素水文学论坛（简称icWater6）在江苏南京市隆重举行。论坛由国际水文科学协会中国委员会同位素分委员会（CCT）主办，南京大学、水利部交通运输部国家能源局南京水利科学研究院、河海大学、南京信息工程大学、中国地质调查局南京地质调查中心承办，来自全国95个单位300余位专家学者及研究生参加了会议。
            </p>
            <p>
              论坛开幕式由论坛组织委员会秘书长南京大学庞洪喜教授主持，南京大学王颖院士和陈骏院士受邀出席开幕式。南京大学副校长陆现彩教授、水利部交通运输部国家能源局南京水利科学研究院副院长高长胜正高级工程师、南京信息工程大学副校长马嫣教授、中国地质调查局南京地质调查中心副主任李云正高级工程师、中国科学院地质与地球物理研究所汪集暘院士（视频）、国际水文科学协会中国委员会秘书长王小军正高级工程师、国际水文科学协会同位素分委员会（IAHS-ICT）主席暨中国同位素水文学委员会（CCT）主席庞忠和研究员先后致辞。庞忠和研究员在致辞中介绍了同位素分委员会的情况、近期工作和 icWater6 的筹备情况。他指出，中国同位素水文学论坛是CCT主办的系列学术与技术会议，2020年首届在北京举办，迄今已成功举办五届，受到全国广大同行的踊跃参与，推动了学术交流和学科发展，也产生了较好的国际影响。论坛的宗旨是通过交流分享最新的研究进展，加强合作，共同推动中国同位素水文学实现高质量跨越式发展。
            </p>
            <p>
              天津大学刘丛强院士、南京信息工程大学王会军院士、中国地质大学（武汉）王焰新院士、中国科学院地质与地球物理研究所庞忠和研究员、中国水利水电科学研究院防洪抗旱减灾研究所所长刘昌军教授级高工、南京师范大学汪永进教授、水利部交通运输部国家能源局南京水利科学研究院王国庆正高级工程师、北京大学张仲石教授、中国科学院青藏高原研究所高晶研究员、南京大学彭永波教授等10名知名学者出席论坛作大会特邀报告。
            </p>
            <p>
              本届论坛主题为“季风区水循环与水安全”，在为期两天的会议议程上，在8个分会场，完成了103个口头报告、12个学术墙报。内容涵盖降水及水汽同位素与大气环流模型、极端气候与水灾害、古气候同位素记录、水循环与生态安全、水污染溯源与环境保护、地热与伴生资源、多圈层相互作用中的同位素、同位素实验方法和技术等多个方向。多家同位素水文学相关设备厂家到会参展。论坛学术内容扎实丰富，讨论互动积极深入，反映了我国同位素水文学领域生机勃勃、人才辈出、继往开来的可喜局面。
            </p>
          </div>

          <figure className="group my-8 overflow-hidden rounded-2xl border border-white/70 bg-white/60 p-3 transition-all duration-500 hover:border-emerald-200 hover:shadow-xl hover:shadow-emerald-500/10">
            <div className="overflow-hidden rounded-xl">
              <img
                src={img('第六届同位素水文学论坛颁奖仪式.png')}
                alt="第六届中国同位素水文学论坛优秀学生报告颁奖仪式"
                loading="lazy"
                className="w-full transition-transform duration-700 group-hover:scale-[1.03]"
              />
            </div>
            <figcaption className="mt-3 text-center text-xs text-gray-500">
              优秀学生报告颁奖仪式
            </figcaption>
          </figure>

          <div className="space-y-5 text-[15px] leading-8 text-gray-700">
            <p>
              11月8日下午，CCT秘书长、中国科学院地质与地球物理研究所黄天明研究员主持论坛闭幕式。CCT主席庞忠和研究员和副主席陈宗宇研究员、宋献方研究员为15位“优秀研究生报告”和2位研究生优秀墙报获奖者颁奖。庞洪喜教授作论坛总结发言。他指出本届论坛突显了同位素水文学的学术前沿、反映了理论创新、涵盖了新兴技术及其在季风区水循环与水安全领域的重大应用，为与会者带来了一场学术盛宴，学术氛围浓厚，交流讨论热烈，成果丰硕喜人。他代表组委会向论坛主办方、协办单位、所有莅临论坛的代表、志愿者们表示感谢。
            </p>
          </div>

          <figure className="group my-8 overflow-hidden rounded-2xl border border-white/70 bg-white/60 p-3 transition-all duration-500 hover:border-emerald-200 hover:shadow-xl hover:shadow-emerald-500/10">
            <div className="overflow-hidden rounded-xl">
              <img
                src={img('第六届同位素水文学论坛会旗交接.png')}
                alt="第七届中国同位素水文学论坛会旗交接仪式"
                loading="lazy"
                className="w-full transition-transform duration-700 group-hover:scale-[1.03]"
              />
            </div>
            <figcaption className="mt-3 text-center text-xs text-gray-500">
              会旗交接仪式
            </figcaption>
          </figure>

          <div className="space-y-5 text-[15px] leading-8 text-gray-700">
            <p>
              在论坛闭幕式上，第七届中国同位素水文学论坛的牵头承办方中国科学院西北生态环境资源研究院做了论坛方案和研究院情况介绍。第七届论坛将于2027年在兰州举行。承办方向相关领域专家学者和研究生发出了参会邀请，受到现场代表们的热烈响应。随后，CCT主席庞忠和研究员从庞洪喜教授手中接过会旗并将其郑重交给第七届论坛承办方代表王圣杰教授。第六届中国同位素水文学论坛胜利闭幕。
            </p>
          </div>

          <div className="mt-10 border-t border-white/60 pt-6 text-center">
            <Link
              to="/other-results/wechat"
              className="group inline-flex items-center gap-2 rounded-full border border-white/70 bg-white/70 px-5 py-2.5 text-sm text-gray-700 transition-all duration-300 hover:-translate-y-0.5 hover:border-emerald-200 hover:text-emerald-700 hover:shadow-lg hover:shadow-emerald-500/10"
            >
              <span className="transition-transform duration-300 group-hover:-translate-x-1">←</span>
              返回公众号文章列表
            </Link>
          </div>
        </article>
      </div>
    </div>
  );
}

export default WechatIsotopeForum;
