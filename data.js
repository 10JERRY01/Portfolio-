/**
 * Portfolio structured dataset for Rahul Das (@10JERRY01)
 * Verified from resume + GitHub repositories (github.com/10JERRY01).
 */

window.PORTFOLIO_DATA = {
  profile: {
    name: "Rahul Das",
    handle: "10JERRY01",
    title: "Senior AI/ML Engineer & Data Scientist",
    tagline:
      "Architecting Agentic AI systems, offline 27B local intelligence, real-time computer vision, and production data pipelines.",
    experienceYears: "5+ Years",
    location: "Rampurhat, West Bengal",
    availability: "Open to Pan-India Relocation & Remote",
    email: "rforrahul.rd@gmail.com",
    phone: "+91-7908979093",
    github: "https://github.com/10JERRY01",
    linkedin: "https://www.linkedin.com/in/rahul-das-9533a1195",
    portfolioRepo: "https://github.com/10JERRY01/Portfolio-",
    portfolioUrl: "https://10jerry01.github.io/Portfolio-/",
    certificatesRepo: "https://github.com/10JERRY01/Certificates",
    resumePdf: "./assets/Rahul_Das_Resume.pdf",
    resumeHtml: "./resume.html"
  },

  metrics: [
    { value: "5+ Yrs", label: "AI/ML, Data & Backend Engineering" },
    { value: "1.58 GiB", label: "Jarvis OS Bootable Debian + 27B AI ISO" },
    { value: "1M+ Rows", label: "Telemetry, Parquet & SQL Analytics" },
    { value: "66% ↓ MAE", label: "PyTorch Seq2Point NILM vs. Baseline" }
  ],

  jarvisTabs: {
    dual: {
      badge: "Meta + Shift + M · Zero-VRAM Reclaim",
      title: "Dual-Environment Architecture",
      description:
        "Seamlessly toggles between the 3D Jarvis Ambient Core (127.0.0.1:4700) and a clean Apple Cupertino / Minimalist Linux KDE Plasma 6 (Wayland) desktop. Switching unloads local LLM weights from VRAM (keep_alive: 0) and pauses audio capture so 100% of GPU memory is instantly available for engineering or gaming.",
      bullets: [
        "Apple Cupertino Dark & Light presets with global menu bar, left traffic-light controls & floating glass dock",
        "Additional Minimalist Zen, Nordic Arctic & Jarvis Cyber desktop environments",
        "100% vendored local UI assets—zero external CDNs or telemetry"
      ],
      pipeline: ["Hotkey Meta+Shift+M", "Unload LLM (keep_alive: 0)", "Reclaim 100% GPU VRAM", "Engage Cupertino / Cyber Desktop"]
    },
    ai: {
      badge: "100% Offline · Bonsai 27B GGUF",
      title: "Offline 27B Ambient Intelligence",
      description:
        "Runs an end-to-end local cognitive stack completely air-gapped. Combines a local Bonsai 27B GGUF model with Total Recall SQLite FTS5 long-term memory, AST-aware Code RAG, Kokoro neural TTS, Screen Vision (Meta+Shift+S), and an AI Smart Shell (??) that converts plain English into safety-checked Linux commands.",
      bullets: [
        "3D Knowledge Galaxy ambient interface served locally at http://127.0.0.1:4700",
        "Total Recall FTS5 full-text memory + AST Code RAG for local codebases",
        "AI Smart Shell (?? <request>) with pre-execution command safety checks"
      ],
      pipeline: ["Voice / Screen Vision / ??", "FTS5 + AST Code RAG", "Local Bonsai 27B GGUF", "Kokoro TTS / Safe Command"]
    },
    kernel: {
      badge: "Debian 12 Bookworm · Liquorix 1000Hz",
      title: "Kernel, Gaming & The Wi-Fi-Off Law",
      description:
        "Built on enterprise Debian 12 Bookworm paired with a Liquorix 1000Hz low-latency kernel and automated debootstrap / Docker / GitHub Actions hybrid ISO builds (verified SHA-256). Ships pre-tuned with Docker, Podman, Distrobox, uv, Steam i386, Lutris, Proton, GameMode, MangoHud & Gamescope.",
      bullets: [
        "Wi-Fi-Off Law verified by automated preflight/wifi_off_drill.py test suite",
        "Bootable 1.58 GiB hybrid ISO built reproducibly via GitHub Actions & Docker",
        "Pre-configured nala, apt, synaptic, flatpak & custom jarvis-pkg tooling"
      ],
      pipeline: ["Debootstrap + Calamares", "Liquorix 1000Hz + Wayland", "Wi-Fi-Off Preflight Drill", "1.58 GiB Hybrid ISO Release"]
    }
  },

  projects: [
    {
      id: "jarvis-os",
      title: "Jarvis OS (v1.0 Genesis · Debian Edition)",
      category: "systems",
      categoryLabel: "Systems & Local AI",
      badge: "Flagship OS",
      featured: true,
      impact: "1.58 GiB Hybrid ISO · Offline 27B LLM",
      summary:
        "Open-source Debian 12 Linux distribution pairing a Liquorix 1000Hz low-latency kernel and KDE Plasma 6 with a dual-environment 3D Jarvis Ambient Core and instant VRAM-freeing desktop toggle.",
      stack: ["Python", "Debian 12", "Bonsai 27B GGUF", "SQLite FTS5", "AST RAG", "Kokoro TTS", "KDE Plasma 6", "Docker"],
      repo: "https://github.com/10JERRY01/Jarvis-os",
      live: "https://10JERRY01.github.io/Jarvis-os/",
      extraLink: { label: "v1.0.0 Release", url: "https://github.com/10JERRY01/Jarvis-os/releases/tag/v1.0.0" },
      architecture: [
        "Dual-mode environment orchestrator toggling between Jarvis Core (127.0.0.1:4700) and Apple Cupertino / Nordic / Zen desktop themes",
        "On-demand VRAM reclaim via keep_alive: 0 unloading multi-billion parameter weights cleanly",
        "Offline cognitive pipeline: Bonsai 27B GGUF + SQLite FTS5 Total Recall + AST Code RAG + Screen Vision + Kokoro TTS",
        "Reproducible CI/CD ISO builder using debootstrap, Calamares installer config & Wi-Fi-Off preflight verification"
      ]
    },
    {
      id: "eduagent",
      title: "EduAgent — Stateful Socratic AI Mentor",
      category: "agentic",
      categoryLabel: "Agentic AI & RAG",
      badge: "LangGraph",
      featured: true,
      impact: "3-Node State Machine · Live WebSocket",
      summary:
        "Production stateful coding mentor built on LangGraph that guides learners through structured Socratic hints (Levels 1→3) with Pydantic guardrails preventing direct answer leaks.",
      stack: ["Python", "LangGraph", "LangChain", "FastAPI", "WebSockets", "Google Gemini", "Pydantic"],
      repo: "https://github.com/10JERRY01/EduAgent",
      architecture: [
        "Three-stage LangGraph StateGraph (analyze → retrieve → mentor) with MemorySaver thread_id session isolation",
        "Strict Pydantic schemas (CodeAnalysis, MentorHint) enforcing structured pedagogical reasoning and zero direct spoilers",
        "Real-time FastAPI WebSocket streaming via astream() pushing live node execution telemetry to a dark UI",
        "Pluggable retrieval interface engineered for drop-in ChromaDB / FAISS swapping"
      ]
    },
    {
      id: "voxagent",
      title: "VoxAgent — Autonomous Voice AI Assistant",
      category: "agentic",
      categoryLabel: "Agentic AI & RAG",
      badge: "Voice + RAG",
      featured: true,
      impact: "Whisper STT → LangGraph → gTTS Audio",
      summary:
        "End-to-end enterprise voice assistant ingesting browser audio, transcribing with OpenAI Whisper, routing intent via LangGraph, querying ChromaDB via LlamaIndex + Gemini, and streaming voice replies.",
      stack: ["FastAPI", "OpenAI Whisper", "LangGraph", "LlamaIndex", "ChromaDB", "Gemini 1.5 Flash", "Librosa", "Docker"],
      repo: "https://github.com/10JERRY01/VoxAgent",
      architecture: [
        "MediaRecorder WebM/WAV audio capture resampled cleanly to 16 kHz via Librosa before Whisper transcription",
        "Conditional LangGraph state routing across analyze_query, search_knowledge_base, and escalate_to_human",
        "LlamaIndex + ChromaDB RAG backed by GeminiEmbedding-001 & Gemini 1.5 Flash over enterprise knowledge bases",
        "Zero-storage Base64 in-memory gTTS audio synthesis streamed directly back to HTML5 Audio + Docker/AWS deployment"
      ]
    },
    {
      id: "flock-energy",
      title: "Flock Energy — Smart Meter NILM Disaggregation",
      category: "mlcv",
      categoryLabel: "ML & Computer Vision",
      badge: "PyTorch Deep Learning",
      featured: true,
      impact: "62.9–66.2% MAE ↓ across 40k+ test mins",
      summary:
        "5-stage Non-Intrusive Load Monitoring pipeline across 17 UK REFIT households combining physics-aware cycle detection and a PyTorch Seq2Point 1D-CNN evaluated under zero-leakage cross-household splits.",
      stack: ["PyTorch", "Python", "Seq2Point 1D-CNN", "Scikit-Learn", "Apache Parquet", "Streamlit", "NumPy"],
      repo: "https://github.com/10JERRY01/flock-energy-project",
      architecture: [
        "Audited and resampled 17 REFIT smart-meter homes (up to 648 continuous days) to uniform 1-minute resolution",
        "Built hysteresis pause-bridging cycle detector and balanced sliding-window dataset with strict household holdouts",
        "Seq2Point 1D-CNN reduced MAE from 187.27 W → 69.39 W (House 8) and 150.27 W → 50.80 W (House 9), cutting SAE error by 73–76%",
        "Packaged interactive Streamlit Demand-Side Response simulator with 300-DPI diagnostic visualizations"
      ]
    },
    {
      id: "genz-observatory",
      title: "Gen-Z Digital Well-Being Observatory",
      category: "data",
      categoryLabel: "Data Eng & Analytics",
      badge: "1M+ Records",
      featured: true,
      impact: "79.6% Parquet Compression · ~23% Churn Avoided",
      summary:
        "1,000,000-record behavioral telemetry analytics & K-Means clustering platform uncovering the 5-hour mental health cliff and replacing blanket app lockouts with circadian threshold nudges.",
      stack: ["Python", "PyArrow", "Parquet", "Scikit-Learn", "Plotly", "Streamlit", "Pandas"],
      repo: "https://github.com/10JERRY01/GenZ-Well-Being-And-Engagement-Observatory",
      architecture: [
        "Compressed 116.9 MB raw CSV telemetry down to 22.8 MB Snappy Parquet via Apache Arrow (79.6% storage reduction)",
        "Segmented 1M users across 7 countries using K-Means (K=4) and linear slope modeling (-0.781 pts/hr, R²=0.58)",
        "Proved platform neutrality (7.16–7.17 avg across 5 apps) and identified the ≥5h risk cliff, saving 74.88% of healthy users from lockout",
        "Delivered interactive 3D cluster scatter, violin distributions & regression trendlines in dark-themed Plotly/Streamlit"
      ]
    },
    {
      id: "nexus-ai",
      title: "Nexus AI — Conversational News & RAG Engine",
      category: "agentic",
      categoryLabel: "Agentic AI & RAG",
      badge: "Live on Cloud Run",
      featured: true,
      impact: "Deployed on GCP Cloud Run",
      summary:
        "Containerized end-to-end news intelligence engine ingesting live feeds into SQLite, enriching articles with NER, sentiment & summaries, and serving citation-grounded conversational Q&A.",
      stack: ["Python", "Docker", "Google Cloud Run", "RAG", "NLP / NER", "SQLite", "Transformers"],
      repo: "https://github.com/10JERRY01/nexus-ai-engine",
      live: "https://nexus-ai-service-671408180579.us-central1.run.app",
      architecture: [
        "Automated Python ingestion service normalizing live news API feeds into relational SQLite storage",
        "NLP enrichment layer extracting Named Entities, sentiment polarity, and abstractive summaries",
        "Retrieval-Augmented Generation pipeline answering natural language queries with source article citations",
        "Multi-stage Dockerfile engineered for fast cold-starts and serverless execution on Google Cloud Run"
      ]
    },
    {
      id: "hcsc-kg",
      title: "HCSC / GHX Knowledge Graph & Entity Resolution",
      category: "agentic",
      categoryLabel: "Agentic AI & RAG",
      badge: "LLM + RDF/SPARQL",
      featured: false,
      impact: "Invoice JSON → RDF Graph + SPARQL",
      summary:
        "Healthcare supply-chain system transforming unstructured hospital invoices via LLM Pydantic schemas, resolving catalog items via SentenceTransformers, and asserting RDF triples queryable with SPARQL.",
      stack: ["FastAPI", "OpenAI API", "Pydantic", "SentenceTransformers", "RDFLib", "SPARQL", "JavaScript"],
      repo: "https://github.com/10JERRY01/HCSC-Knowledge-Graph-Entity-Resolution",
      architecture: [
        "LLM extraction mapping noisy procurement PDFs/text directly into validated nested Pydantic invoice schemas",
        "Semantic resolution layer matching fuzzy descriptions to Canonical Master Catalog IDs via all-MiniLM-L6-v2 cosine similarity",
        "RDFLib knowledge graph assertion enabling multi-hop ontological SPARQL queries across hospitals and SKUs",
        "Interactive Glassmorphism FastAPI portal visualizing resolution confidence scores and graph triples"
      ]
    },
    {
      id: "workplace-cv",
      title: "Workplace Video Intelligence & CCTV Tracking",
      category: "mlcv",
      categoryLabel: "ML & Computer Vision",
      badge: "Hybrid C++ / Python",
      featured: true,
      impact: "90% False-Positive Reduction",
      summary:
        "Real-time CCTV safety compliance pipeline pairing YOLOv8 intrusion detection with a C++ OpenCV shared library (ctypes), SQLite event logging, throttled SMTP alerts & statistical threshold calibration.",
      stack: ["Python", "C++", "YOLOv8", "OpenCV", "ctypes", "SQLite", "Seaborn"],
      repo: "https://github.com/10JERRY01/Workplace-Video-Intelligence-Tracking",
      architecture: [
        "YOLOv8 + OpenCV geometric polygon boundary checks flagging unauthorized entry into restricted zones",
        "High-speed C++ OpenCV image preprocessing module compiled as a shared library and called from Python via ctypes",
        "SQLite infraction store with rate-limited SMTP alerting (max 1 alert/min) preventing operator alert fatigue",
        "Confidence-threshold distribution EDA isolating and eliminating 90% of false-positive detections"
      ]
    },
    {
      id: "financial-rag",
      title: "Intelligent Financial Document Insights (RAG)",
      category: "agentic",
      categoryLabel: "Agentic AI & RAG",
      badge: "2★ · RAG + Guardrails",
      featured: false,
      impact: "Annual Report RAG + EDA",
      summary:
        "Production-structured financial document intelligence platform extracting PDF disclosures, computing term statistics, and running vector-grounded RAG Q&A with strict context window guardrails.",
      stack: ["Python", "PyTorch", "HuggingFace", "LangChain", "Pinecone / FAISS", "SentenceTransformers", "Streamlit"],
      repo: "https://github.com/10JERRY01/10JERRY01-Intelligent-Financial-Document-Insights-System-RAG-LLM",
      architecture: [
        "Automated PDF parsing and noise-cleaning pipeline transforming multi-page annual reports into structured corpora",
        "Exploratory lexical frequency and statistical analytics surfaced alongside semantic querying",
        "Dense vector indexing using all-MiniLM-L6-v2 embeddings with FAISS/Pinecone retrieval and context guardrails",
        "Interactive Streamlit analyst workspace combining quantitative charts and grounded natural language answers"
      ]
    },
    {
      id: "torrent-ext",
      title: "Minimalist Torrent Extension",
      category: "systems",
      categoryLabel: "Systems & Local AI",
      badge: "Chrome Web Store",
      featured: true,
      impact: "Published Chromium Extension",
      summary:
        "Lightweight client-side Chromium extension replacing bloated desktop torrent clients with real-time magnet URI interception, hover hash auditing, live swarm telemetry & 4 dark UI presets.",
      stack: ["JavaScript", "Chromium APIs", "WebTorrent / P2P", "HTML5", "CSS3"],
      live: "https://chromewebstore.google.com/detail/bdmkboiedhlebnhdnabhdabhlhhnbieg",
      architecture: [
        "Link Interception Engine capturing incoming magnet URIs and .torrent file headers directly inside browser context",
        "Hover-triggered Pre-Flight Metadata Auditing validating cryptographic hashes and tracker pool health pre-download",
        "Embedded toolbar telemetry UI tracking live throughput and active swarm peer metrics without tab bloat",
        "Strict 100% client-side execution isolation across 4 customizable dark themes including Obsidian & Cyber Neon"
      ]
    },
    {
      id: "streamguard",
      title: "StreamGuard — Video Ingestion & HLS Diagnostics",
      category: "systems",
      categoryLabel: "Systems & Local AI",
      badge: "React 19 + FastAPI",
      featured: false,
      impact: "Auto-HLS Transcode & Telemetry",
      summary:
        "Full-stack media quality gate validating codecs, bitrates, and resolutions against broadcast rules, transcoding compliant assets to adaptive HLS (.m3u8), and streaming into a live Video.js player.",
      stack: ["React 19", "TypeScript", "FastAPI", "FFmpeg", "Video.js", "Tailwind CSS", "Recharts"],
      repo: "https://github.com/10JERRY01/StreamGuard",
      architecture: [
        "Automated media compliance engine rejecting malformed codecs (MPEG2/MP3) and unsupported resolutions (4K gate)",
        "FFmpeg pipeline transcoding validated uploads into adaptive HLS (.m3u8) segments with resilient fallback handling",
        "Custom Video.js diagnostic player monitoring real-time buffer health, segment load timing & bitrate curves",
        "Exportable JSON compliance audit reports per ingestion job"
      ]
    },
    {
      id: "logsentinel",
      title: "LogSentinel — Go + ML Anomaly Pipeline",
      category: "systems",
      categoryLabel: "Systems & Local AI",
      badge: "Go + Scikit-Learn",
      featured: false,
      impact: "Polyglot Go Ingestion + Isolation Forest",
      summary:
        "High-throughput log anomaly pipeline combining a concurrent Go HTTP ingestion server, Bash HDFS log rotation, and an Isolation Forest ML detector flagging abnormal traffic spikes.",
      stack: ["Go", "Python", "Bash", "Scikit-Learn", "Isolation Forest", "HDFS Pattern"],
      repo: "https://github.com/10JERRY01/LogSentinel",
      architecture: [
        "Lightweight Go REST ingestion server (:8080/api/log) buffering incoming JSON access events",
        "Automated Bash log rotation script staging threshold-exceeding batches into simulated HDFS directories",
        "Scikit-Learn Isolation Forest extracting message length, error severity & hourly temporal features",
        "Includes full unit test coverage (ingest_test.go & test_detect.py) plus synthetic anomaly traffic generator"
      ]
    },
    {
      id: "shiprocket",
      title: "Shiprocket Logistics & A/B Testing Engine",
      category: "data",
      categoryLabel: "Data Eng & Analytics",
      badge: "110k Sessions A/B",
      featured: true,
      impact: "+12.52% Conversion Lift (p = 7.29e-6)",
      summary:
        "E-Commerce logistics analytics and statistical experimentation platform analyzing Olist delivery delays via SQL CTEs/Window Functions and validating expedited shipping via two-sample Z/T tests.",
      stack: ["Python", "SQL (CTEs/Window)", "Statsmodels", "SciPy", "Flask", "Chart.js"],
      repo: "https://github.com/10JERRY01/shiprocket-analytics",
      architecture: [
        "SQLite ETL pipeline computing month-over-month delivery latency trends across states via SQL CTEs and Window Functions",
        "A/B experiment across 110,000 sessions (55k Control vs. 55k Treatment) proving +12.52% CR lift (z=4.33, p=7.29×10⁻⁶)",
        "Confirmed neutral AOV impact (p=0.0925) with 95% confidence interval visualization",
        "Flask API + 5-chart Chart.js dashboard generating automated statistical rollout recommendations"
      ]
    },
    {
      id: "payment-edq",
      title: "Enterprise Payment Data Quality & Pricing",
      category: "data",
      categoryLabel: "Data Eng & Analytics",
      badge: "PySpark Medallion",
      featured: false,
      impact: "Bronze → Silver → Gold + AML Flags",
      summary:
        "Mastercard-modeled PySpark credit card transaction pipeline enforcing completeness, validity & timeliness EDQ checks while computing merchant interchange fees and AML compliance risk flags.",
      stack: ["PySpark", "Spark SQL", "Python", "SQL", "Pandas", "Tableau Public"],
      repo: "https://github.com/10JERRY01/Enterprise_Payment_Data_Quality_and_Pricing_Engine",
      architecture: [
        "Medallion architecture (Bronze → Silver → Gold) ingesting high-volume simulated payment transaction streams",
        "Custom Enterprise Data Quality (EDQ) engine scoring schema completeness, negative amounts, duplicates & timeliness",
        "Pricing analytics engine calculating merchant-category interchange fees alongside AML risk-pattern flags",
        "Exports clean partitioned Gold CSV datasets tailored for Tableau Public executive dashboards"
      ]
    },
    {
      id: "qsr-ops",
      title: "QSR Operation Analytics (Linemate)",
      category: "data",
      categoryLabel: "Data Eng & Analytics",
      badge: "20 Outlets · FSSAI",
      featured: false,
      impact: "r = -0.80 Checklist vs. Failure Tickets",
      summary:
        "Operational compliance dashboard replacing free-tier BI limits with programmatic SQL CROSS JOINs to detect missing FSSAI hygiene audits without survivorship bias across 20 QSR outlets.",
      stack: ["Python", "Streamlit", "SQL", "Pandas", "Automated PDF Reporting"],
      repo: "https://github.com/10JERRY01/QSR-Operation-Analytics-",
      architecture: [
        "Algorithmic SQL CROSS JOIN grid surfacing 238 missing weekly FSSAI audits out of 260 expected submissions",
        "Tracked 62 High/Critical equipment maintenance incidents with 22.2h MTTR across regional outlets",
        "Proved strong negative correlation (r = -0.80) between digital checklist adherence and equipment breakdown volume",
        "Auto-generates monthly VP Executive PDF reports alongside interactive Tier 2/3 Streamlit drill-downs"
      ]
    },
    {
      id: "muthoot-credit",
      title: "Muthoot Credit Risk Intelligence Engine",
      category: "mlcv",
      categoryLabel: "ML & Computer Vision",
      badge: "XGBoost + FastAPI",
      featured: false,
      impact: "4-Model Ensemble Comparison API",
      summary:
        "Financial default prediction service benchmarking Logistic Regression, Random Forest, XGBoost & Gradient Boosting with ratio feature engineering and class-imbalance recall optimization.",
      stack: ["XGBoost", "Scikit-Learn", "FastAPI", "Pydantic", "Jinja2", "Pandas"],
      repo: "https://github.com/10JERRY01/Muthoot-Credit-Risk",
      architecture: [
        "Domain feature engineering deriving Loan-to-Income and Age-to-Employment financial stability ratios",
        "Automated class-imbalance handling prioritizing recall on high-risk loan defaults",
        "Serializes and benchmarks 4 trained models (.pkl / .json) behind a live FastAPI prediction endpoint",
        "Glassmorphism web interface letting credit analysts compare live predictions across models"
      ]
    },
    {
      id: "pipeline-orch",
      title: "Pipeline Orchestrator — ETL Observability UI",
      category: "data",
      categoryLabel: "Data Eng & Analytics",
      badge: "Full-Stack TS",
      featured: false,
      impact: "Real-Time DAG & Data Quality UI",
      summary:
        "Full-stack React, TypeScript & Express.js application for monitoring ETL pipeline health, triggering manual batch runs, and inspecting null distributions and latency charts.",
      stack: ["React", "TypeScript", "Express.js", "Vite", "Tailwind CSS", "Recharts"],
      repo: "https://github.com/10JERRY01/pipeline-orchestrator",
      architecture: [
        "TypeScript Express backend managing pipeline execution states, historical run logs & trigger orchestration",
        "Interactive Recharts observability dashboards tracking throughput, run duration, success rate & null ratios",
        "Supports dark/light operator modes for extended production monitoring sessions"
      ]
    },
    {
      id: "forbes-roi",
      title: "Marketing ROI & Customer Segmentation Engine",
      category: "mlcv",
      categoryLabel: "ML & Computer Vision",
      badge: "PCA + K-Means + RF",
      featured: false,
      impact: "4 High-Value LTV Personas",
      summary:
        "Predictive customer targeting system combining LTV feature engineering, PCA dimensionality reduction, K-Means segmentation, and Random Forest campaign conversion scoring.",
      stack: ["Python", "Scikit-Learn", "PCA", "Random Forest", "Chart.js", "JavaScript"],
      repo: "https://github.com/10JERRY01/Forbes-Advisor-Marketing-ROI-Engine",
      architecture: [
        "Engineered lifetime spend and promotional responsiveness features from raw campaign logs",
        "Applied PCA + K-Means clustering to isolate 4 actionable customer cohorts",
        "Trained balanced Random Forest classifier scoring campaign conversion probability to cut wasted ad spend"
      ]
    },
    {
      id: "ghg-rag",
      title: "Supply Chain GHG Emissions RAG System",
      category: "agentic",
      categoryLabel: "Agentic AI & RAG",
      badge: "IBM watsonx.ai",
      featured: false,
      impact: "NAICS Natural Language Querying",
      summary:
        "Environmental analytics RAG interface enabling natural-language querying over multi-year NAICS supply-chain greenhouse gas emission datasets using IBM watsonx.ai and FAISS.",
      stack: ["Python", "IBM watsonx.ai", "FAISS", "Streamlit", "RAG", "Pandas"],
      repo: "https://github.com/10JERRY01/GreehouseGasEmissionRAG",
      architecture: [
        "Schema-flexible processor ingesting 2017/2022 NAICS emission factors with automatic deduplication",
        "FAISS vector index coupled with IBM watsonx.ai foundation models for natural-language emission queries",
        "Interactive Streamlit UI highlighting high-carbon supply chain segments"
      ]
    },
    {
      id: "leetcode-x",
      title: "Leetcode-X — Interactive DSA Explainers",
      category: "tools",
      categoryLabel: "Algorithms & Tools",
      badge: "Animated Visuals",
      featured: false,
      impact: "15 Essential Patterns + HTML Animators",
      summary:
        "Curated algorithmic study suite covering 15 foundational LeetCode problems with optimal Python solutions, progressive hints, complexity proofs, and custom animated HTML step visualizers.",
      stack: ["Python", "Algorithms", "Data Structures", "HTML5", "CSS3", "JavaScript"],
      repo: "https://github.com/10JERRY01/Leetcode-X",
      architecture: [
        "Covers Hash Maps, Two Pointers, Sliding/Greedy, Kadane DP, Boyer-Moore Voting, BST LCA & Linked Lists",
        "Interactive browser-based animated explainers visualizing pointer swaps, stack pushes & O(log n) bisection"
      ]
    },
    {
      id: "mandelbrot",
      title: "Mandelbrot & Julia Set Fractal Explorer",
      category: "tools",
      categoryLabel: "Algorithms & Tools",
      badge: "60fps Canvas",
      featured: false,
      impact: "Adaptive Escaped-Time Renderer",
      summary:
        "Interactive zero-dependency HTML5 Canvas 2D Mandelbrot & Julia set explorer featuring guided boundary descents, adaptive resolution scaling, 5 color palettes & live cursor-centered zoom.",
      stack: ["JavaScript", "HTML5 Canvas", "Numerical Methods", "CSS3"],
      repo: "https://github.com/10JERRY01/Mandelbrot-Set-Animation-Trippy-",
      architecture: [
        "Smooth escape-time continuous coloring algorithm with adaptive resolution stepping during rapid pans/dives",
        "Guided cinematic descent across 4 famous boundary coordinates plus interactive Julia-set flight mode"
      ]
    }
  ],

  experience: [
    {
      company: "Indium Software",
      role: "AI/ML Engineer (Consultant)",
      period: "2025 – Present",
      highlights: [
        "Architect and deploy enterprise-grade Generative AI and RAG applications utilizing Python, LangChain, and Vector DBs to automate knowledge retrieval and contextual data analysis.",
        "Develop autonomous AI Agents capable of multi-step reasoning, planning, and tool execution using LangGraph, deployed as scalable asynchronous microservices via FastAPI and WebSockets.",
        "Write and optimize complex SQL queries to extract, clean, and analyze large-scale multi-dimensional datasets, establishing single sources of truth for enterprise analytics.",
        "Deploy robust computer vision pipelines for real-time monitoring, optimizing inference models for low latency and high accuracy across cloud and edge environments."
      ]
    },
    {
      company: "Outlier.ai",
      role: "LLM Evaluation Specialist",
      period: "2025",
      highlights: [
        "Architected deep learning workflows and computer vision prototypes, converting algorithmic research into functional enterprise software solutions.",
        "Executed advanced feature engineering and statistical analytics on large-scale unstructured repositories using Python and Advanced SQL for model training preparation.",
        "Managed Large Language Model (LLM) evaluation, RLHF/alignment rubrics, and fine-tuning protocols to verify contextual accuracy and reasoning quality.",
        "Partnered within agile engineering workflows to deploy scalable NLP frameworks driving automation in customer intelligence and document processing."
      ]
    },
    {
      company: "Freelance Software Consulting",
      role: "AI and Data Engineer",
      period: "2025",
      highlights: [
        "Partnered with stakeholders to translate ambiguous business problems into production Machine Learning, Data Analytics, and Cloud architectures.",
        "Built reusable AI workflows, automated ETL data pipelines, and interactive executive dashboards enabling data-driven operational efficiency.",
        "Designed, normalized, and managed relational/analytical databases and custom business software applications end-to-end."
      ]
    },
    {
      company: "Cognizant",
      role: "Programmer Analyst (Data & ML Engineering)",
      period: "Sep 2021 – Nov 2023",
      highlights: [
        "Engineered scalable backend pipelines and relational data infrastructure, maintaining complex SQL databases and ensuring high availability for downstream ML and analytics workloads.",
        "Conducted rigorous Exploratory Data Analysis (EDA) on legacy enterprise system data to uncover anomalies and drive architectural improvements.",
        "Spearheaded end-to-end ETL workflows to streamline data ingestion, transformation, and validation for production environments.",
        "Collaborated with cross-functional product and DevOps teams to deliver automated workflows, resilient API endpoints, and secure enterprise integrations."
      ]
    }
  ],

  skills: [
    {
      group: "Generative AI & Agentic Systems",
      items: ["Agentic AI", "LangGraph", "LangChain", "LlamaIndex", "RAG Pipelines", "OpenAI / Gemini APIs", "Local GGUF (Bonsai 27B)", "Pinecone", "Qdrant", "ChromaDB", "FAISS", "Redis", "Prompt Engineering"]
    },
    {
      group: "Machine Learning & Data Science",
      items: ["PyTorch", "TensorFlow", "Scikit-Learn", "XGBoost", "NLP & Transformers", "K-Means / PCA", "Time-Series / NILM", "A/B Testing (SciPy/Statsmodels)", "Statistical Modeling"]
    },
    {
      group: "Computer Vision & Systems",
      items: ["YOLOv8", "OpenCV", "Video Intelligence", "C++ (ctypes/DLL)", "Go", "Debian Linux / Kernel", "KDE Plasma / Wayland", "SQLite FTS5", "FFmpeg / HLS"]
    },
    {
      group: "Data Engineering & Analytics",
      items: ["Advanced SQL (CTEs, Window Functions)", "PySpark & Spark SQL", "Apache Arrow & Parquet", "ETL / Medallion Pipelines", "EDA Fundamentals", "Pandas & NumPy", "Plotly & Chart.js", "Power BI & Tableau"]
    },
    {
      group: "Backend, Cloud & MLOps",
      items: ["Python", "FastAPI", "Flask", "WebSockets", "REST APIs", "Microservices", "Asyncio", "Docker", "Kubernetes", "GCP Cloud Run", "AWS", "GitHub Actions CI/CD"]
    }
  ],

  education: [
    {
      institution: "Woolf Academy × Scaler Neoversity",
      degree: "Advanced Data Science, AI & Machine Learning Program",
      period: "Specialization",
      focus: "Deep Learning, GenAI & LLM Orchestration, Computer Vision, MLOps, Statistical Analysis & EDA Fundamentals."
    },
    {
      institution: "KIIT University, Bhubaneswar",
      degree: "Bachelor of Technology in Computer Science Engineering",
      period: "Graduated 2021",
      focus: "Database Management (SQL), Data Structures & Algorithms, Software Engineering, C/C++ Programming."
    }
  ],

  certifications: [
    {
      issuer: "Microsoft Certified",
      title: "Azure Fundamentals (AZ-900)",
      url: "https://www.linkedin.com/posts/rahul-das-9533a1195_az-900-activity-6999704927828643840-drdM"
    },
    {
      issuer: "Microsoft Certified",
      title: "Azure AI Fundamentals (AI-900)",
      url: "https://www.linkedin.com/posts/rahul-das-9533a1195_ai-900-activity-6999706131640008704-Q6rt"
    },
    {
      issuer: "Microsoft Certified",
      title: "Azure Data Fundamentals (DP-900)",
      url: "https://www.linkedin.com/posts/rahul-das-9533a1195_dp-900-activity-6999706650035032064-Vm8c"
    },
    {
      issuer: "Microsoft Certified",
      title: "Security, Compliance & Identity (SC-900)",
      url: "https://www.linkedin.com/posts/rahul-das-9533a1195_sc-900-microsoftlearn-activity-7018574221203156992-u5Q6"
    },
    {
      issuer: "Google Cloud",
      title: "Machine Learning, Feature Engineering & Art/Science of ML",
      url: "https://www.linkedin.com/posts/rahul-das-9533a1195_completion-certificate-for-machine-learning-activity6785424781010378752-9lRH"
    },
    {
      issuer: "Scaler Academy",
      title: "EDA, Advanced SQL, Python Libraries & Unsupervised ML",
      url: "https://www.linkedin.com/posts/rahul-das-9533a1195_activity-7207698301868019712-Z3Xy"
    }
  ]
};
