const RESOURCES = {
  agent: [
    {
      type: "主教材",
      title: "《深入理解 AI Agent》 / ai-agent-book",
      url: "https://github.com/bojieli/ai-agent-book",
      description: "以 Agent 工程为主线的开源教材，覆盖 context、tools、RAG、coding agent、eval 与 production。",
      focus: "Ch1–2 先理解 Agent loop 与 context 生命周期；后续章节只在项目需要时回看。",
      value: "给你从验证工程思维切换到 Agent system engineering 的统一框架。"
    },
    {
      type: "学习指南",
      title: "ai-agent-book · Learning Guide",
      url: "https://github.com/bojieli/ai-agent-book/blob/main/docs/zh-CN/LEARNING.md",
      description: "配套章节分组和实践建议，用于控制学习深度。",
      focus: "看章节之间的依赖，不追求把所有实验从头刷到尾。",
      value: "帮助你坚持项目驱动，而不是把 8 周变成读书打卡。"
    },
    {
      type: "模型补洞",
      title: "Hugging Face LLM Course · Inference Deep Dive",
      url: "https://huggingface.co/learn/llm-course/chapter1/8",
      description: "从工程视角理解推理路径、时延与上下文成本。",
      focus: "prefill / decode、KV cache、TTFT / TPOT。",
      value: "你已有 AI 背景，只补 Agent 性能和 context engineering 真正会用到的部分。"
    }
  ],
  tools: [
    {
      type: "MCP",
      title: "Model Context Protocol · Introduction",
      url: "https://modelcontextprotocol.io/docs/2026-07-28/getting-started/intro",
      description: "MCP 的官方入口，解释 client / server 以及 resources、tools、prompts 等核心原语。",
      focus: "理解协议边界，以及为什么 tool 不等于把 shell 暴露给模型。",
      value: "未来把 simulator、waveform query、SPICE 封装成 Agent 能力时，这是通用接口思维。"
    },
    {
      type: "MCP Spec",
      title: "MCP · Tools Specification",
      url: "https://modelcontextprotocol.io/specification/2026-07-28/server/tools",
      description: "Tools 的官方规范，包括发现、schema、structured content、错误处理与安全语义。",
      focus: "tool metadata、typed input/output、error path、human-in-the-loop。",
      value: "决定 EDA Agent 的工具层能否做到可控、可审计。"
    },
    {
      type: "EDA Agent",
      title: "OpenROAD-MCP",
      url: "https://github.com/The-OpenROAD-Project/OpenROAD-MCP",
      description: "OpenROAD 官方 MCP server，把真实 EDA flow 暴露给 MCP-compatible AI assistant。",
      focus: "工具 schema、执行边界、结果回传，而不是只看 prompt。",
      value: "最适合迁移成 run_spice / query_waveform / measure_timing 一类 Memory Verification MCP。"
    },
    {
      type: "EDA Agent",
      title: "MCP4EDA",
      url: "https://github.com/NellyW8/MCP4EDA",
      description: "用 MCP 统一封装 synthesis、simulation、ASIC flow 与 waveform analysis 的开源尝试。",
      focus: "观察不同 EDA command 如何抽象成稳定工具接口。",
      value: "直接对应你未来的 Agent → EDA Tool → deterministic feedback 闭环。"
    },
    {
      type: "EDA Agent",
      title: "ChatEDA",
      url: "https://github.com/wuhy68/ChatEDA",
      description: "将自然语言任务拆成 EDA API / tool 调用的经典 Agentic EDA 项目。",
      focus: "plan → action → observation → next action，以及 ChatEDA-Bench 的任务组织。",
      value: "用它建立通用 EDA planner 的参照系，再与 MCP 架构比较。"
    },
    {
      type: "EDA 基础设施",
      title: "OpenROAD Documentation",
      url: "https://openroad.readthedocs.io/",
      description: "开放 RTL-to-GDSII 工具链的官方文档；OpenROAD 本身不是 LLM 项目。",
      focus: "理解可脚本化 EDA engine 能提供哪些 deterministic operations。",
      value: "帮助你区分“AI 层”和真正负责执行、反馈、判真的“EDA engine 层”。"
    }
  ],
  verification: [
    {
      type: "Digital DV",
      title: "cocotb · Quickstart",
      url: "https://docs.cocotb.org/en/stable/quickstart.html",
      description: "用 Python 驱动 RTL simulator 的轻量验证框架。",
      focus: "test、clock/trigger、DUT access、simulator integration。",
      value: "很适合快速搭建可被 Agent 调用、可重复执行的 verification harness。"
    },
    {
      type: "Simulator",
      title: "Verilator · Language Guide",
      url: "https://verilator.org/guide/latest/languages.html",
      description: "Verilator 对 Verilog/SystemVerilog、assertion、coverage 等语义的官方支持说明。",
      focus: "SystemVerilog / SVA 支持边界，以及哪些验证行为不能想当然。",
      value: "Agent 的工具反馈只有在 simulator 语义明确时才可信。"
    },
    {
      type: "Formal",
      title: "SymbiYosys · Quickstart",
      url: "https://yosyshq.readthedocs.io/projects/sby/en/latest/quickstart.html",
      description: "YosysHQ 的 formal front-end，用于 BMC、prove 与 counterexample workflow。",
      focus: "property、engine、BMC/prove、CEX 的结构化提取。",
      value: "让 Agent 不只依赖 simulation，还能拿到 formal 的 deterministic evidence。"
    },
    {
      type: "UVM",
      title: "Accellera · UVM Community / Standard",
      url: "https://www.accellera.org/community/uvm",
      description: "UVM 标准与官方入口。",
      focus: "sequence / driver / monitor / scoreboard / coverage 的 mental model。",
      value: "目标不是 8 周变成 UVM 专家，而是让 Agent 方案能听懂工业 DV 的语言和边界。"
    },
    {
      type: "AI4IC Paper",
      title: "AutoChip · Automating HDL Generation Using LLM Feedback",
      url: "https://arxiv.org/abs/2311.04887",
      description: "把 compiler / simulator feedback 放进 HDL generation / repair loop 的代表工作。",
      focus: "external verifier 如何给 LLM 下一轮生成提供约束。",
      value: "核心启示是 simulation result 才是证据，LLM 的“反思”不是验证。"
    },
    {
      type: "AI4IC Code",
      title: "AutoChip · GitHub",
      url: "https://github.com/shailja-thakur/AutoChip",
      description: "AutoChip 的公开实现，包含 Icarus Verilog feedback 组织方式。",
      focus: "读 eval / feedback interface，不需要照搬整个项目。",
      value: "是你自己写最小 verification loop 时很好的代码级参照。"
    },
    {
      type: "Testbench Agent",
      title: "AutoBench",
      url: "https://github.com/AutoBench/AutoBench",
      description: "LLM 驱动的 testbench generation 项目与评测路线。",
      focus: "如何生成 verification artifact，以及测试本身如何被评价。",
      value: "提醒你 TB “能运行”远远不等于 TB “可信”。"
    },
    {
      type: "Testbench Eval",
      title: "CorrectBench",
      url: "https://github.com/AutoBench/CorrectBench",
      description: "进一步关注 testbench functional correctness 与 self-correction。",
      focus: "self-validation / self-correction 的方法，而不是只看语法通过。",
      value: "与你未来给 Verification Agent 做 mutation/eval 的思路直接相连。"
    },
    {
      type: "Assertion Eval",
      title: "AssertionBench · LLM Assertion Data",
      url: "https://github.com/achieve-lab/assertion_data_for_LLM",
      description: "面向 LLM assertion generation 的公开 benchmark / 数据入口。",
      focus: "syntax、semantic value、bug detection 之间的差别。",
      value: "可以借鉴成你自己的 SVA / verification artifact 评价体系。"
    }
  ],
  waveform: [
    {
      type: "Waveform Agent",
      title: "NVIDIA · VerilogCoder",
      url: "https://github.com/NVlabs/VerilogCoder",
      description: "结合 graph-based planning 与 AST-based waveform tracing 的 RTL agent。",
      focus: "重点拆 AST 与 waveform tracing 如何帮助故障定位，而不是只看最终 Verilog pass rate。",
      value: "这是与你计划中的 waveform-debug agent 最接近、最值得源码学习的公开项目之一。"
    },
    {
      type: "Waveform Debug",
      title: "VeriDebugger",
      url: "https://github.com/hernantech/veridebugger",
      description: "围绕 compile → simulate → VCD analysis → fix 的 Agent loop demo。",
      focus: "VCD analysis tool 如何接到 agent loop；同时注意它与工业级 debug 的成熟度差距。",
      value: "适合作为最小架构参考，帮助你快速做出可运行的 waveform-debug POC。"
    },
    {
      type: "Circuit Context",
      title: "NVIDIA · CircuitOps",
      url: "https://github.com/NVlabs/CircuitOps",
      description: "把 netlist / EDA 数据转成 property graph 与 relational IR 的数据基础设施。",
      focus: "hierarchy、connectivity、graph IR 怎样代替“把整个电路当普通文本 RAG”。",
      value: "对 waveform debug 很关键：模型需要结构化路径和连接关系，而不是海量原始波形。"
    }
  ],
  fullcustom: [
    {
      type: "SPICE",
      title: "ngspice · Documentation",
      url: "https://ngspice.sourceforge.io/docs.html",
      description: "开源 SPICE simulator 的官方文档与手册入口。",
      focus: "batch/control、raw data、measurement、sweep 与脚本化，而不是基础电路课。",
      value: "你已有全定制验证经验，这里要补的是“如何让 SPICE 成为 Agent 可调用的 verifier”。"
    },
    {
      type: "SPICE Agent",
      title: "SPICEPilot",
      url: "https://github.com/ACADLab/SPICEPilot",
      description: "LLM 生成 SPICE netlist，并用 PySpice 做 simulation / evaluation 的公开框架。",
      focus: "LLM → SPICE → simulator feedback 的最小闭环。",
      value: "非常适合改成公开/自建 memory-style toy circuit 的验证与 RCA 实验。"
    },
    {
      type: "Analog Agent",
      title: "AnalogCoder",
      url: "https://github.com/laiyao1/AnalogCoder",
      description: "training-free LLM analog design agent，将 analog design formulation 转成可执行代码。",
      focus: "analog problem 如何 formalize，以及 domain knowledge 怎样落到 tool execution。",
      value: "帮你抽象 full-custom verification agent 的 domain/tool interface。"
    },
    {
      type: "Analog Optimization",
      title: "AutoCkt",
      url: "https://github.com/ksettaluri6/AutoCkt",
      description: "用 deep RL 做 analog circuit sizing 的经典开源项目，可结合 NGSpice。",
      focus: "spec / PVT / reward / circuit sizing 的形式化方式。",
      value: "让你看到 AI4EDA 不只有 LLM；连续优化与仿真闭环同样重要。"
    },
    {
      type: "Analog Optimization",
      title: "LEDRO",
      url: "https://github.com/dimplekochar/LEDRO",
      description: "LLM-enhanced analog design-space reduction + optimization。",
      focus: "让 LLM 缩减搜索空间，再由数值优化 / 仿真负责评价。",
      value: "很适合类比 memory margin / corner space 的智能探索，而不是让模型直接猜参数。"
    },
    {
      type: "Agent Skills",
      title: "analog-agents",
      url: "https://github.com/Arcadia-1/analog-agents",
      description: "面向 AI-native analog IC design 的 skill-based agent 组织方式。",
      focus: "architecture、sizing、verification、post-layout audit 如何拆成 skills。",
      value: "非常贴近你转向 AI Agent 业务落地后的 skill / context 分层问题。"
    },
    {
      type: "Commercial EDA Bridge",
      title: "Virtuoso Bridge Lite",
      url: "https://github.com/Arcadia-1/virtuoso-bridge-lite",
      description: "让 Agent 与 Cadence Virtuoso 环境进行受控桥接的公开项目。",
      focus: "商业 EDA 的隔离、权限边界、有限工具暴露；实际执行需合法许可环境。",
      value: "与你未来公司内部 Agent × 商业 EDA 集成的工程边界高度相关。"
    },
    {
      type: "Analog Simulator",
      title: "CedarSim.jl",
      url: "https://github.com/CedarEDA/CedarSim.jl",
      description: "现代 analog circuit simulator，面向 SPICE/Spectre netlist、Verilog-A 与多类分析。",
      focus: "把 simulator 当成可编程、可查询的 execution environment。",
      value: "扩展你对“Agent 后面应该接什么样的 analog verifier”的想象。"
    },
    {
      type: "Analog Layout",
      title: "ALIGN",
      url: "https://github.com/ALIGN-analoglayout/ALIGN-public",
      description: "从 analog netlist 自动生成 layout 的开放基础设施。",
      focus: "了解 analog automation 的后端边界，不作为当前主线复现。",
      value: "帮助你把 full-custom Agent 放进更完整的 design → verify → layout 生命周期。"
    }
  ],
  eval: [
    {
      type: "Methodology",
      title: "Can EDA Tool Feedback Improve Verilog Generation by LLMs?",
      url: "https://arxiv.org/abs/2411.11856",
      description: "研究 EDA tool feedback 是否、何时能稳定改善 Verilog generation。",
      focus: "关注不同模型 / feedback 策略的差异，以及 ablation 方法。",
      value: "避免把“加一个 EDA feedback loop”当成必然有效；你的系统也需要实验来证明。"
    },
    {
      type: "Assertion Eval",
      title: "AssertLLM2",
      url: "https://arxiv.org/abs/2605.27472",
      description: "面向 SVA 生成的多维度 evaluation 工作。",
      focus: "syntax / provability / coverage / mutation bug detection。",
      value: "是“像对”到“可验证地对”的评价方法参考。"
    },
    {
      type: "Benchmark",
      title: "NVIDIA · VerilogEval",
      url: "https://github.com/NVlabs/verilog-eval",
      description: "RTL generation 的公开 dataset 与 evaluation harness。",
      focus: "functional correctness、pass@k、任务组织和可复现 testbench。",
      value: "重点学 benchmark 怎么设计，再迁移到你的 verification / RCA cases。"
    },
    {
      type: "Benchmark",
      title: "RTLLM",
      url: "https://github.com/hkust-zhiyao/RTLLM",
      description: "面向 LLM RTL generation 的 benchmark / evaluation 路线。",
      focus: "比较任务难度、functional correctness 与生成策略的评价方式。",
      value: "给你构建 ≥30 case mutation benchmark 提供第二个参照系。"
    },
    {
      type: "Domain LLM",
      title: "NVIDIA · ChipNeMo",
      url: "https://research.nvidia.com/publication/2023-10_chipnemo-domain-adapted-llms-chip-design",
      description: "芯片设计领域 LLM domain adaptation 的工业案例。",
      focus: "continued pretraining、SFT、retrieval 分别解决什么问题。",
      value: "帮助你到最后再判断是否真的需要训练模型，而不是一开始就做 Chip LLM。"
    },
    {
      type: "Serving",
      title: "vLLM · Documentation",
      url: "https://docs.vllm.ai/en/latest/",
      description: "高吞吐 LLM serving 与 OpenAI-compatible API 的官方文档。",
      focus: "只有当本地 / 私有部署成为项目约束时再深入 serving 与 tool calling。",
      value: "部署是 production 能力，但不能抢走 Agent + EDA 闭环的主线时间。"
    },
    {
      type: "Landscape",
      title: "Awesome AI for Chip Design",
      url: "https://github.com/chateda-ichip/Awesome-AI-for-Chip-Design",
      description: "覆盖 spec-to-silicon 的 AI for Chip Design 索引，含 RTL、verification、physical、analog 与 benchmark。",
      focus: "作为持续追踪入口，不需要逐条阅读。",
      value: "用于观察 2026 AI4IC 新项目和研究方向，不让知识图谱变成静态名单。"
    },
    {
      type: "Landscape",
      title: "Awesome LLM4EDA",
      url: "https://github.com/Thinklab-SJTU/Awesome-LLM4EDA",
      description: "按 LLM generation、EDA agent、verification、analog 等方向整理的论文 / 项目索引。",
      focus: "每月只追踪与你当前模块相关的新增条目。",
      value: "和上一份索引互补，是保持资料完整但不把首页堆满链接的入口。"
    }
  ]
};

const SECTIONS = {
  core: {
    order: "CORE",
    title: "AI4IC Agent Engineer",
    intro: "目标不是让 LLM 替代 EDA，而是让模型围绕真实工具形成可验证闭环：提出假设、选择工具、获取证据、再运行、再判断。",
    why: "你的优势不是从零学电路，而是把 DRAM / full-custom verification 的判断方式，翻译成 Agent 能调用的工具、结构化 context 与 eval。",
    concepts: [
      ["01", "Reasoning", "模型负责计划、提出假设、决定下一步需要什么证据。"],
      ["02", "Tool Use", "simulator / formal / waveform / SPICE 被封装成有边界的 typed tools。"],
      ["03", "Evidence", "所有重要结论都能追溯到 log、CEX、measurement 或 rerun 结果。"],
      ["04", "Evaluation", "用固定 case、mutation、ablation、RCA accuracy 证明系统价值。"]
    ],
    buildTitle: "Two portfolio projects",
    build: "Project A：Digital Verification / Waveform Debug Agent。Project B：基于公开或自建电路的 Full-Custom Waveform Agent。两者都必须有 deterministic verifier、benchmark、安全边界与已知局限。",
    next: "agent"
  },
  agent: {
    order: "01 / FOUNDATION",
    title: "Agent & Context",
    intro: "先理解 Agent 为什么能行动，再理解 context 如何决定它能看到什么。这里不追求框架数量，只把最小 loop、tool call 与证据链做扎实。",
    why: "验证 debug 本质上就是“观察 → 假设 → 取证 → 再判断”。Agent 工程只是把这套循环显式化、可编排化。",
    concepts: [
      ["01", "Agent Loop", "model → choose tool → execute → observation → next step。"],
      ["02", "Context Lifecycle", "区分 system/user/tool message，理解长期上下文的成本与污染。"],
      ["03", "Context Compression", "压缩信息但不破坏 evidence traceability。"],
      ["04", "Structured Context", "spec、hierarchy、log、waveform、tool history 分层，不拼成一个超长 prompt。"]
    ],
    buildTitle: "Exit: Verification Agent v0",
    build: "不用重框架，手写最小 Agent loop；暴露 read_source / compile / simulate / read_log / query_waveform 等安全工具，完成至少 1 个可复现的 fail → evidence → RCA。",
    next: "tools"
  },
  tools: {
    order: "02 / TOOL LAYER",
    title: "EDA Tools & MCP",
    intro: "Agent 的工程价值来自工具边界。把 EDA 能力封装成稳定、typed、可审计的 API / MCP tools，模型才有机会在真实 workflow 中行动。",
    why: "你未来最可迁移的能力，是把 compile / sim / formal / waveform query / SPICE measurement 设计成 Agent-native tools，而不是写更长的 prompt。",
    concepts: [
      ["01", "Tool Schema", "输入、输出、错误、timeout 都显式；尽量返回 structured content。"],
      ["02", "MCP", "理解 client/server、tools/resources 与 discovery，而不是把它当新 RPC 名字。"],
      ["03", "Safety Boundary", "限定目录、命令与参数；不向模型开放无边界 shell。"],
      ["04", "Structured Retrieval", "对 EDA context 优先利用 hierarchy / AST / connectivity / metadata。"]
    ],
    buildTitle: "Exit: MCP Verification Agent",
    build: "做一个小型 MCP server，至少封装 compile / simulation / log query；用 10 个固定场景验证 tool-call success、错误处理和无效调用率。",
    next: "verification"
  },
  verification: {
    order: "03 / DETERMINISTIC VERIFIER",
    title: "Verification",
    intro: "让 simulation / formal / assertion / scoreboard 成为系统里的判真层。AI 可以生成、规划和解释，但不能替 deterministic verifier 宣布“正确”。",
    why: "这是你已有验证经验与 Agent 能力最直接的交汇点，也是最容易做出可信 portfolio 的地方。",
    concepts: [
      ["01", "Simulation Harness", "cocotb + simulator 构建可脚本化、可重跑的 test loop。"],
      ["02", "SVA / Formal", "property、BMC/prove、counterexample 进入 Agent 的 evidence model。"],
      ["03", "Verification Artifacts", "TB / assertion 的生成必须验证它自身是否可信。"],
      ["04", "Closed Loop", "spec → vPlan → SVA/TB → sim/formal → evidence → RCA。"]
    ],
    buildTitle: "Exit: Project A v1",
    build: "至少 10 个故障 case，跑通 spec → verification → RCA；每个 claim 都可追到 simulator / formal 证据，不能把 compile pass 当成功。",
    next: "waveform"
  },
  waveform: {
    order: "04 / DEBUG CONTEXT",
    title: "Waveform Debug",
    intro: "不要把整份 VCD / FSDB 塞给模型。波形留在工具侧，让 Agent 按当前假设查询信号、测量时序、比较 pass/fail，并逐步缩小故障范围。",
    why: "这一步最接近你真实工作经验，也最可能形成区别于“LLM 写 Verilog”的个人技术标签。",
    concepts: [
      ["01", "Waveform Query", "按 signal / time window / event 查询，不复制全量 raw waveform。"],
      ["02", "Pass / Fail Diff", "先找 divergence，再沿 hierarchy / connectivity 追溯。"],
      ["03", "Measurement", "edge、delay、margin 等数值必须由工具测，不让 LLM 目测。"],
      ["04", "RCA Evidence", "hypothesis 必须能被下一次 query 或 rerun 证伪。"]
    ],
    buildTitle: "Exit: Waveform Debug Agent v0",
    build: "实现 query / compare / divergence / rank 等工具；用 ≥10 个公开/自建 mutants 做 RCA，对比简单 expert baseline，并记录 tool count、time、Top-1/3。",
    next: "fullcustom"
  },
  fullcustom: {
    order: "05 / DOMAIN ADVANTAGE",
    title: "Full-Custom / Memory",
    intro: "把数字侧验证闭环迁到 SPICE / analog waveform：测量由 simulator 完成，模型负责假设与实验设计，rerun / sweep 用于确认原因。",
    why: "Memory / transistor-level waveform RCA 的公开 Agent 仍明显稀缺；这里最能把你的 DRAM full-custom 背景变成技术差异化。",
    concepts: [
      ["01", "SPICE as Tool", "batch run、measurement、raw data、corner / sweep 全部脚本化。"],
      ["02", "Analog Evidence", "delay、slew、margin、crossing、energy 等连续量由 deterministic measurement 得到。"],
      ["03", "Hypothesis → Rerun", "修改一个可控变量再仿真，用信息增益判断下一步。"],
      ["04", "Domain Safety", "项目只用公开 / 自建电路与模型，绝不使用公司 PDK、spec、netlist、waveform。"]
    ],
    buildTitle: "Exit: Project B v0",
    build: "用 ngspice + 公开/自建 memory-style circuit，准备 ≥5 类 failure；Agent 能从波形测量提出假设，再通过 targeted rerun / sweep 完成 evidence closure。",
    next: "eval"
  },
  eval: {
    order: "06 / PROOF OF VALUE",
    title: "Eval & Portfolio",
    intro: "最后不是展示一个“看起来聪明”的 demo，而是回答：系统比 baseline 好在哪里？失败在哪里？结果能不能重跑？如果去掉某个组件会怎样？",
    why: "你转向 AI Agent 落地后，真正稀缺的是能把业务价值变成可测指标的人，而不是只会拼一个 agent workflow。",
    concepts: [
      ["01", "Benchmark", "≥30 valid mutants / cases；固定输入、gold 与自动评分。"],
      ["02", "Metrics", "detection、Top-1/3 RCA、unsupported claims、latency、tokens / tool calls。"],
      ["03", "Ablation", "至少比较 no-RAG / no-waveform-tool / weaker model 等组件价值。"],
      ["04", "Portfolio", "architecture、demo、benchmark、安全说明、known limits 与下一阶段 90-day plan。"]
    ],
    buildTitle: "Exit: Portfolio v1.0",
    build: "Project A + B 都具备可复现脚本、公开 benchmark、定量结果与 limitation；15 分钟能讲清楚为什么这个 Agent 可信，以及哪里仍需要 human review。",
    next: "core"
  }
};

const TITLES = {
  core: "AI4IC Agent Engineer",
  agent: "Agent & Context",
  tools: "EDA Tools & MCP",
  verification: "Verification",
  waveform: "Waveform Debug",
  fullcustom: "Full-Custom / Memory",
  eval: "Eval & Portfolio"
};

const home = document.querySelector("#home-view");
const detail = document.querySelector("#detail-view");
const detailContent = document.querySelector("#detail-content");
const detailCounter = document.querySelector("#detail-counter");

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function resourceHtml(resource) {
  return `
    <a class="resource" href="${escapeHtml(resource.url)}" target="_blank" rel="noopener noreferrer">
      <span class="resource-type">${escapeHtml(resource.type)}</span>
      <span class="resource-title">${escapeHtml(resource.title)}</span>
      <span class="resource-copy">
        <p>${escapeHtml(resource.description)}</p>
        <p><strong>重点：</strong>${escapeHtml(resource.focus)}</p>
        <p><strong>与你相关：</strong>${escapeHtml(resource.value)}</p>
      </span>
      <span class="resource-arrow" aria-hidden="true">↗</span>
    </a>`;
}

function renderDetail(id) {
  const section = SECTIONS[id];
  if (!section) return false;
  const resources = RESOURCES[id] || [];
  const concepts = section.concepts.map(([index, title, copy]) => `
    <article class="concept">
      <span>${escapeHtml(index)}</span>
      <h3>${escapeHtml(title)}</h3>
      <p>${escapeHtml(copy)}</p>
    </article>`).join("");

  const resourcesBlock = resources.length ? `
    <section class="resource-section">
      <div class="section-head">
        <h2>关键资料</h2>
        <p class="resource-note">每项都写清楚：是什么、重点看什么、为什么与你相关。</p>
      </div>
      <div class="resource-list">${resources.map(resourceHtml).join("")}</div>
    </section>` : `
    <section class="resource-section">
      <div class="section-head">
        <h2>从 01 开始</h2>
        <p class="resource-note">资料按知识域放在各节点里；首页只保留结构，不堆链接。</p>
      </div>
    </section>`;

  detailCounter.textContent = section.order;
  detailContent.innerHTML = `
    <article>
      <header class="detail-hero">
        <div>
          <h1>${escapeHtml(section.title)}</h1>
          <p class="detail-intro">${escapeHtml(section.intro)}</p>
        </div>
        <aside class="why-box">
          <span>为什么与你相关</span>
          <p>${escapeHtml(section.why)}</p>
        </aside>
      </header>

      <section class="knowledge-section">
        <div class="section-head">
          <h2>这一块要掌握什么</h2>
        </div>
        <div class="concept-list">${concepts}</div>
        <div class="build-card">
          <div>
            <span>BUILD / EXIT CRITERIA</span>
            <h3>${escapeHtml(section.buildTitle)}</h3>
          </div>
          <p>${escapeHtml(section.build)}</p>
        </div>
      </section>

      ${resourcesBlock}

      <nav class="next-section" aria-label="下一个知识域">
        <span>下一节点</span>
        <a href="#${escapeHtml(section.next)}">${escapeHtml(TITLES[section.next])} →</a>
      </nav>
    </article>`;
  return true;
}

function route() {
  const id = location.hash.slice(1);
  if (!id || !SECTIONS[id]) {
    home.hidden = false;
    detail.hidden = true;
    document.title = "AI4IC · Learning Map";
  } else {
    renderDetail(id);
    home.hidden = true;
    detail.hidden = false;
    document.title = `${TITLES[id]} · AI4IC Learning Map`;
  }
  window.scrollTo({ top: 0, behavior: "auto" });
}

window.addEventListener("hashchange", route);
window.addEventListener("DOMContentLoaded", route);
window.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && location.hash) location.hash = "";
});
