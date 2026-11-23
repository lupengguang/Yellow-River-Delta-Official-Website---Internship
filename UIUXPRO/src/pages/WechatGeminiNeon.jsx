import React from 'react';
import { Link } from 'react-router-dom';
import { PageBanner } from './topicPageKit';

const img = (file) => `${import.meta.env.BASE_URL}images/${encodeURIComponent(file)}`;

const TAG = 'rounded-full bg-blue-600 px-3 py-1 text-xs font-medium text-white';
const H2 = 'mb-3 mt-10 text-xl font-semibold text-gray-800';
const P = 'mb-5 text-[15px] leading-8 text-gray-700';

function Figure({ file, alt, caption }) {
  return (
    <figure className="group mb-8 overflow-hidden rounded-2xl border border-white/70 bg-white/60 p-3 transition-all duration-500 hover:border-emerald-200 hover:shadow-xl hover:shadow-emerald-500/10">
      <div className="overflow-hidden rounded-xl bg-white">
        <img
          src={img(file)}
          alt={alt}
          loading="lazy"
          className="w-full transition-transform duration-700 group-hover:scale-[1.03]"
        />
      </div>
      <figcaption className="mt-3 text-xs leading-relaxed text-gray-500">{caption}</figcaption>
    </figure>
  );
}

function WechatGeminiNeon() {
  return (
    <div className="min-h-screen pb-16">
      <PageBanner
        kicker="WECHAT · 碳基智能公众号"
        title="谷歌一夜连发两张牌：Gemini 4 Neon综合指数61分，高于GPT-6.2 Sol；Genie 4开始开放体验"
        description="一个瞄准代码、文档和长流程，一个把 AI 生成的世界变成可探索、可修改的空间。真正值得关注的，不只是谁的榜单分数更高，而是 AI 正在从“回答问题”走向“完成任务”和“生成可交互的世界”。"
        chips={['Gemini 4 Neon', 'Genie 4', 'Project Genie', '2026.11.18']}
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
            <span className={TAG}>碳基智能公众号</span>
            <span>碳基智能公众号</span>
            <span className="text-gray-300">|</span>
            <span>2026-11-18</span>
          </div>

          <div className="mb-8 overflow-hidden rounded-2xl border border-white/70 bg-white/60 p-3">
            <img
              src={img('谷歌一夜连发两张牌：Gemini 4 Neon综合指数61分，高于GPT-6.2 Sol；Genie 4开始开放体验.webp')}
              alt="Google DeepMind 发布 Gemini 4 Neon"
              className="w-full rounded-xl"
            />
          </div>

          <p className={P}>
            如果你只看标题，可能会以为谷歌这次是在宣布：“Gemini 赢了，OpenAI 输了。”但事情没这么简单。
          </p>
          <p className={P}>
            2026 年 11 月 18 日，谷歌一口气推出两项重要更新：一边是面向复杂代码、知识工作和科学任务的 Gemini 4 Neon；另一边是开始通过 Project Genie 向符合条件用户开放体验的 Genie 4。前者想让 AI 更会处理工作，后者则试图让 AI 生成的环境不只是“看起来像真的”，还可以走进去、转动视角、改变天气、加入角色，甚至听见与场景同步的声音。
          </p>
          <p className={P}>
            一个更像“工作搭档”，一个更像“世界生成器”。这两张牌放在一起，谷歌想展示的，显然不只是新模型跑分，而是 AI 产品正在从聊天窗口向更多实际任务和交互场景延伸。
          </p>

          <h2 className={H2}>一、先说最吸睛的数字：61 分对 57 分，Neon 赢在一项综合榜单</h2>
          <p className={P}>
            这次最容易刷屏的，是 Gemini 4 Neon 和 GPT-6.2 Sol 的对比。在 Artificial Analysis Intelligence Index v5.0.1 的对照中，Gemini 4 Neon 的 xhigh 配置得分为 61，GPT-6.2 Sol 的 max 配置得分为 57。这个指数综合了 9 项评测，覆盖知识工作、自动化流程、代码、科学推理和专业文档等不同方向。
          </p>
          <p className={P}>
            需要特别说明的是，61 分不是“正确率 61%”，也不是在所有任务上都比对手强 4 个百分点；它是一个综合指标，适合观察整体能力，但不能替代每个具体场景的实测。
          </p>

          <Figure
            file="Gemini 4 Neon-AA综合指数对比.webp"
            alt="AA Index v5.0.1 综合智能指数与每任务成本对比"
            caption="图 1　AA Index v5.0.1：综合智能指数与每任务成本的关系（数据来源：Google DeepMind）。"
          />

          <p className={P}>
            具体表现拆开看，Neon 确实有不少亮点。Google DeepMind 公布的对照表显示，在 Terminal-Bench 4.1 上，Neon 得分为 65.2%，GPT-6.2 Sol 为 61.5%；在 FrontierCode 2.0 上，Neon 为 46.2%，Sol 为 43.8%；在 HLE-Diamond 推理测试中，Neon 为 71.3%，Sol 为 64.0%。长上下文测试 GraphWalks 中，Neon 在 256K 至 1M 范围内的分数为 95.2，Sol 为 80.1。对于需要读大量材料、追踪长流程，或在代码仓库中连续排查问题的用户来说，这些结果值得关注。
          </p>

          <Figure
            file="Gemini 4 Neon-基准测试成绩表.webp"
            alt="Gemini 4 Neon、Claude Opus 5.5、GPT-6.2 Sol 基准测试成绩表"
            caption="图 2　Gemini 4 Neon 与 Claude Opus 5.5、GPT-6.2 Sol 的基准测试成绩对比（数据来源：Google DeepMind）。"
          />

          <p className={P}>
            但如果只截取“Neon 领先”的部分，也会漏掉另一半事实。在图表理解测试 Chartography 中，GPT-6.2 Sol 得分 75.1%，高于 Neon 的 73.5%。而在 Terminal-Bench 4.1 和 FrontierCode 2.0 上，Claude Opus 5.5 的公布成绩也略高于 Neon。换句话说，Neon 在若干关键项目上超过了 Sol，但这不等于它在每个细分能力、每一种任务、每一个工作流里都稳赢。AI 模型不是只有一张总成绩单，写代码、读图表、查资料、做长推理，考的本来就不是同一件事。
          </p>
          <p className={P}>
            还有一个容易被忽略的细节：Artificial Analysis 综合指数采用的 Terminal-Bench 版本是 4.0，而 Google 模型卡另外列出的单项成绩是 Terminal-Bench 4.1。名字相似，不代表就是同一项测试，不能把不同版本的分数混在一起比较。看 AI 测评时，除了看数字，也要看测试版本、评测方式和模型设置。
          </p>
          <p className={P}>
            所以，标题中“高于 GPT-6.2 Sol”可以成立，但必须说清楚：这是特定综合指数、特定推理配置下的领先，不是全面反超。
          </p>

          <Figure
            file="Gemini 4 Neon-提示注入攻击成功率.webp"
            alt="Gray Swan IPI 提示注入攻击成功率对比"
            caption="图 3　Gray Swan IPI 提示注入攻击成功率（越低越好）：Gemini 4 Neon 为 0.0%。"
          />

          <h2 className={H2}>二、Gemini 4 Neon 真正瞄准的，是一整段工作流程</h2>
          <p className={P}>
            比起单轮聊天时答得有多漂亮，Neon 更想解决的是：能不能把一个复杂任务从头做到尾？谷歌把它定位在复杂编程、分析推理、知识工作和企业流程上。它支持最长 100 万 Token 的上下文窗口，并能接收文本、图片、语音和视频等输入。简单说，面对一份长报告、几张表格、一组图表，再加上一段会议录音，模型有机会把这些材料放在同一个任务里处理，而不是让用户拆成十几轮分别提问。
          </p>
          <p className={P}>
            对普通职场人来说，这种能力最实在的价值，不是“AI 能写出一段很像样的话”，而是有机会减少材料整理、信息交叉核对和初稿搭建的时间。比如，先让它从多份文件里找出共同的数据，再按指定格式整理成摘要、表格或分析报告；或者把一个有很多文件的代码项目交给它，让它先定位问题，再提出修改方案并逐步验证。
          </p>
          <p className={P}>
            当然，“有机会做到”不等于“每次都能做到”。长上下文不代表模型一定能记住每个细节，多模态也不代表它看到的每张图都不会读错。Google DeepMind 的模型卡仍提醒，Neon 可能出现幻觉；模型卡标注的基础知识截止时间为 2026 年 3 月。因此，涉及最新价格、法规、新闻和专业结论时，仍然要核对来源，而不能因为模型一次塞进了很多资料，就把答案直接当成最终结论。
          </p>
          <p className={P}>
            谷歌还将 Neon 放进 Antigravity 等工具链，强调长流程代理、复杂工具调用、代码库调试和多步骤执行。官方展示中，Neon 在 Antigravity 里生成过滑雪模拟器、互动 3D 场景和复杂表格等内容。这些展示说明谷歌想把 Neon 放进“能调工具、能持续推进”的工作环境；但它们首先是厂商展示案例，并不等于每个用户都能在真实项目中一次成功。
          </p>
          <p className={P}>
            接下来，开发者和企业大概率会盯着另外两项指标：成本和速度。Neon 的 API 价格为每百万输入 Token 3 美元、每百万输出 Token 15 美元，缓存输入价格为 0.15 美元；GPT-6.2 Sol 的官方价格为每百万输入 Token 2 美元、每百万输出 Token 10 美元，缓存输入为 0.10 美元。单看 Token 单价，Neon 比 Sol 贵。Artificial Analysis 按其综合评测任务测算，Neon xhigh 每项任务的加权成本约 6.44 美元、耗时约 21.5 分钟；GPT-6.2 Sol max 约 1.01 美元、耗时约 8.5 分钟。这里的“每项任务成本”和“耗时”是特定评测工作负载下的统计，不是说普通用户每问一个问题就要花 6.44 美元、等 21.5 分钟。实际费用会随输入长度、输出长度、缓存和推理设置变化。
          </p>

          <Figure
            file="Gemini 4-三版本定位对比.webp"
            alt="Gemini 4 Carbon、Neon、Hydrogen 三版本定位与价格对比"
            caption="图 4　Gemini 4 三个版本的定位、质量、价格、思考等级与可用渠道对比（数据来源：Google DeepMind）。"
          />

          <p className={P}>
            这也把 Neon 的特点和代价摆在了一起：它在某些高难度任务上追求更强的推理能力，但高推理设置可能带来更长耗时和更高任务成本。用户最终要选的，不是“谁分数高就用谁”，而是这项任务究竟值不值得用更强、更贵的模型。
          </p>
          <p className={P}>
            目前，Neon 已开始进入 Gemini API、Google AI Studio、Gemini 应用、Google Antigravity 和 Gemini 企业服务等渠道，但不同产品的订阅要求和开放方式并不完全相同。普通用户是否能直接选到它，要看自己使用的具体产品和账户资格。
          </p>

          <h2 className={H2}>三、Genie 4 不只是“生成一段视频”，而是让你试着走进一个世界</h2>
          <p className={P}>
            如果说 Gemini 4 Neon 的关键词是“把事情做完”，Genie 4 的关键词就是“让世界动起来”。传统视频生成，通常是输入提示词，然后看一段生成好的画面。Genie 4 试图把体验往前推一步：你描述一个环境，进入场景后还能继续发出指令，要求它改天气、加角色、移动镜头，或者让事件朝另一个方向发展。它不只是要生成一段看上去漂亮的画面，还要在用户改变方向或提出新要求时继续回应。
          </p>
          <p className={P}>
            举个容易理解的例子：你先描述一座雨后的老城，走进街道之后又说“让雨停下来，路灯亮起，再让一辆电车从前方经过”。Genie 4 的目标，是让环境根据新指令继续变化，并同步生成对应的画面和声音。Google 介绍的功能包括实时修改场景、加入人物或物体，以及随环境变化生成环境音和角色对话。
          </p>
          <p className={P}>
            这次 Project Genie 的更新，也不只是换了一个模型。新加入的 Project Genie agent 可以通过对话帮助用户搭建世界；探索过程中，Gemini 模型还能根据屏幕里正在发生的事情给出下一步提示，或触发场景事件。更新后的社区画廊则让用户浏览、进入、修改和分享其他人创建的世界。Google 展示的例子包括哥特式庄园里的互动谜案“Villa Giallo”，以及从蚂蚁视角探索蚁群的“The Life of Ants”。
          </p>
          <p className={P}>
            不过，最容易被标题带偏的地方也在这里：Genie 4 和 Genie 3 不是一回事。Google 公告提到，更新后的 Genie 3 可以把单次生成时长延长至最多 3 分钟，也可以把多个世界连接起来，还支持以 360 度全景图作为环境参考。这些都是 Genie 3 的更新能力。Genie 4 目前主打更高质量的画面、物理表现和原生音频；Google DeepMind 的 Genie 4 页面则说明，目前连续互动时间约为一分钟。不要把“Genie 3 最长 3 分钟”写成“Genie 4 已经能连续生成 3 分钟”。
          </p>
          <p className={P}>
            更重要的是，世界模型目前仍处在研究和发展阶段。场景中的视觉细节和物体位置可能随时间漂移；复杂的人与人、人与环境互动仍有难度；模型不能完美复刻真实地点；画面里的文字也未必清楚；实时音频准确性仍在改进。它可以给人“我正在一个真实世界里行动”的感觉，但这不等于它已经是稳定、精确、能长时间运行的游戏引擎或物理模拟器。
          </p>
          <p className={P}>
            在开放方式上，Google 于 10 月 27 日宣布 Genie 4 时，先提供给受邀测试者，并表示计划逐步扩大体验；11 月 18 日，Project Genie 开始向符合条件的 Google AI Ultra 订阅用户推出新体验，Google AI Pro 用户可以加入等待名单。因此，这里的“开放”是体验资格开始放宽，不是所有人马上都能使用，也不是公开发布模型权重或宣布面向所有开发者开放 API。
          </p>
          <p className={P}>
            Google 还表示，Project Genie 生成的视频和音频会加入 SynthID 标记，输入和输出也会经过安全筛查。至于 Genie 4 未来能否成为机器人和智能体训练、测试环境的一部分，DeepMind 确实把这列为探索方向；但目前应把它理解为潜在应用，而不是已经大规模落地的成熟方案。
          </p>

          <h2 className={H2}>四、我的判断：真正的变化，不是榜单多了 4 分</h2>
          <p className={P}>
            这次发布最值得观察的，不是把它简单归纳成“谷歌赢了”或“OpenAI 输了”，而是谷歌把两种不同方向的 AI 能力摆到了用户面前。Gemini 4 Neon 试图让 AI 深入代码、表格、长文档和多步骤工作；Genie 4 则试图把 AI 从一个回答问题的窗口，变成一个可以进入、探索和修改的互动环境。一个在数字工作里追求“把任务往前推进”，一个在生成体验里追求“让用户参与塑造世界”。这两条路线并不互相替代，但都指向同一个趋势：AI 的竞争，正在从“能不能回答”转向“能不能持续协作”。
          </p>
          <p className={P}>
            当然，分数不是没有用。它能帮助我们判断模型在哪些任务上更有优势，也能让企业在采购或测试时少一些盲目。但分数也不能替用户做决定。日常使用时，我们真正关心的往往是：它有没有把资料看错？做错以后能不能发现并纠正？能不能把结果解释清楚？完成同一件事要花多少钱、多久？放进现有工作流程后，会不会反而增加复核负担？
          </p>
          <p className={P}>
            世界模型也是一样。一个看起来很真实的场景，不代表它能稳定运行；一个能听懂“改变天气”的系统，也不意味着它已经准确理解真实世界中的物理规律。越是让人惊叹的演示，越要同时看清楚它的边界。Genie 4 官方页面主动列出场景漂移、交互、文本和音频等限制，这些信息并不“扫兴”，反而能帮我们区分技术演示与成熟产品。
          </p>
          <p className={P}>
            但谨慎，并不等于否定进步。AI 从“给你一段答案”，走向“帮你处理一项工作”；又从“生成一段画面”，走向“让你参与改变一个世界”。这会给开发者、教育者、内容创作者和普通用户带来新的工具，也会让人重新思考：未来的创造力，可能不只是写出一个好提示词，还包括如何设定目标、挑选方向、判断结果，最后决定什么值得保留。技术可以把门打开，但走进哪个世界、要解决什么问题，仍然需要人来决定。
          </p>

          <div className="mt-8 rounded-xl border border-blue-200/70 bg-blue-50/70 p-4 text-sm leading-relaxed text-blue-900">
            <span className="font-semibold">来源：</span>
            碳基智能公众号《谷歌一夜连发两张牌：Gemini 4 Neon 综合指数 61 分，高于 GPT-6.2 Sol；Genie 4 开始开放体验》
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

export default WechatGeminiNeon;
