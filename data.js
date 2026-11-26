/**
 * Curated portfolio data for Rahul Das (@10JERRY01).
 * All metrics and links verified against github.com/10JERRY01 repositories and resume.
 */

window.PORTFOLIO_DATA = {
  profile: {
    name: "Rahul Das",
    handle: "10JERRY01",
    role: "Senior AI/ML Engineer & Data Scientist",
    location: "Rampurhat, West Bengal · Open to Pan-India & Remote",
    email: "rforrahul.rd@gmail.com",
    phone: "+91-7908979093",
    github: "https://github.com/10JERRY01",
    linkedin: "https://www.linkedin.com/in/rahul-das-9533a1195",
    portfolioRepo: "https://github.com/10JERRY01/Portfolio-",
    certificatesRepo: "https://github.com/10JERRY01/Certificates",
    resumePdf: "./assets/Rahul_Das_Resume.pdf",
    resumeHtml: "./resume.html"
  },

  metrics: [
    { value: "5+ Years", label: "AI/ML, Data & Backend Systems" },
    { value: "1.58 GiB", label: "Jarvis OS Bootable AI Distro" },
    { value: "1M+ Rows", label: "Parquet & SQL Analytics Scale" },
    { value: "66.2% ↓", label: "MAE Reduction (PyTorch NILM)" }
  ],

  jarvisTabs: {
    dual: {
      label: "Meta + Shift + M",
      title: "Dual-Environment & Instant VRAM Reclaim",
      summary:
        "Switches instantaneously between the 3D Jarvis Ambient Core (127.0.0.1:4700) and a clean KDE Plasma 6 (Wayland) desktop—unloading local LLM weights (keep_alive: 0) and pausing audio capture to free 100% of GPU VRAM on demand.",
      points: [
        "Curated visual presets: Apple Cupertino Dark/Light, Minimalist Zen, Nordic Arctic & Cyber HUD",
        "Global menu bar, left traffic-light window controls, and floating glass dock",
        "100% vendored local UI assets with zero outbound network dependencies"
      ],
      stages: [
        { k: "01 · Trigger", v: "Meta + Shift + M" },
        { k: "02 · GPU Memory", v: "keep_alive: 0 Unload" },
        { k: "03 · Desktop", v: "Cupertino / Zen / Nordic" },
        { k: "04 · Isolation", v: "100% Local Assets" }
      ]
    },
    ai: {
      label: "Offline 27B Core",
      title: "Air-Gapped Bonsai 27B & Local Memory",
      summary:
        "Runs an end-to-end cognitive stack locally with zero cloud dependency—pairing Bonsai 27B GGUF with Total Recall SQLite FTS5 memory, AST Code RAG, Kokoro neural TTS, Screen Vision (Meta+Shift+S), and Smart Shell (??).",
      points: [
        "3D Knowledge Galaxy workspace served locally at http://127.0.0.1:4700",
        "Total Recall FTS5 full-text memory + AST-aware Code RAG over local repos",
        "AI Smart Shell (?? <intent>) generates safety-checked Linux commands"
      ],
      stages: [
        { k: "01 · Input", v: "Voice / Screen / Shell ??" },
        { k: "02 · Context", v: "SQLite FTS5 + AST RAG" },
        { k: "03 · Inference", v: "Local Bonsai 27B GGUF" },
        { k: "04 · Output", v: "Kokoro TTS / Safe Exec" }
      ]
    },
    kernel: {
      label: "Debian 12 + Wi-Fi-Off Law",
      title: "Liquorix 1000Hz Kernel & Reproducible ISO",
      summary:
        "Built on Debian 12 Bookworm with a Liquorix 1000Hz low-latency kernel, pre-tuned gaming/dev stack (Steam i386, Proton, GameMode, Docker, Podman, uv), Calamares installer, and GitHub Actions hybrid ISO builds.",
      points: [
        "Verified zero-telemetry Wi-Fi-Off compliance via automated preflight drills",
        "Reproducible 1.58 GiB bootable hybrid ISO (debootstrap + Docker/Actions)",
        "Pre-configured nala, apt, synaptic, Flatpak, and custom jarvis-pkg CLI"
      ],
      stages: [
        { k: "01 · Kernel", v: "Liquorix 1000Hz Low-Lat" },
        { k: "02 · Build", v: "Debootstrap + Actions CI" },
        { k: "03 · Audit", v: "wifi_off_drill.py PASS" },
        { k: "04 · Artifact", v: "1.58 GiB Hybrid ISO" }
      ]
    }
  },

  projects: [
    {
      id: "eduagent",
      title: "EduAgent — Stateful Socratic Coding Mentor",
      category: "agentic",
      categoryLabel: "Agentic AI",
      badge: "LangGraph",
      featured: true,
      impact: "3-node LangGraph state machine · Real-time WebSockets",
      summary:
        "Production stateful coding mentor built on LangGraph that guides developers with progressive Socratic hints (Levels 1–3) and Pydantic guardrails preventing direct answer leaks.",
      stack: ["Python", "LangGraph", "FastAPI", "WebSockets", "Gemini"],
      repo: "https://github.com/10JERRY01/EduAgent",
      architecture: [
        "Three-node LangGraph StateGraph (analyze → retrieve → mentor) with MemorySaver thread_id isolation",
        "Structured Pydantic schemas (CodeAnalysis, MentorHint) enforcing pedagogical guardrails",
        "Asynchronous FastAPI WebSocket streaming via astream() pushing live node states to the UI",
        "Pluggable retrieval layer designed for seamless ChromaDB or FAISS vector integration"
      ]
    },
    {
      id: "voxagent",
      title: "VoxAgent — Autonomous Voice AI Assistant",
      category: "agentic",
      categoryLabel: "Agentic AI",
      badge: "Whisper + RAG",
      featured: true,
      impact: "Whisper STT → LangGraph Routing → ChromaDB RAG → gTTS",
      summary:
        "Autonomous voice assistant capturing browser audio, transcribing with Whisper, routing intents via LangGraph, retrieving knowledge via LlamaIndex + Gemini, and streaming synthesized voice.",
      stack: ["FastAPI", "Whisper", "LangGraph", "LlamaIndex", "Docker"],
      repo: "https://github.com/10JERRY01/VoxAgent",
      architecture: [
        "MediaRecorder audio capture resampled cleanly to 16 kHz via Librosa for Whisper STT",
        "Conditional LangGraph routing across query analysis, knowledge lookup, and human escalation",
        "LlamaIndex + ChromaDB vector memory powered by Gemini 1.5 Flash & GeminiEmbedding-001",
        "In-memory Base64 gTTS audio synthesis streamed to HTML5 Audio inside a Dockerized service"
      ]
    },
    {
      id: "flock-energy",
      title: "Flock Energy — Smart Meter NILM Disaggregation",
      category: "mlcv",
      categoryLabel: "Deep Learning",
      badge: "PyTorch",
      featured: true,
      impact: "62.9%–66.2% MAE reduction across 40k+ unseen test minutes",
      summary:
        "Five-stage Non-Intrusive Load Monitoring pipeline across 17 UK REFIT households combining physics-aware cycle extraction and a PyTorch Seq2Point 1D-CNN with zero-leakage household splits.",
      stack: ["PyTorch", "Seq2Point 1D-CNN", "Python", "Parquet", "Streamlit"],
      repo: "https://github.com/10JERRY01/flock-energy-project",
      architecture: [
        "Audited and resampled 17 REFIT smart-meter homes (up to 648 continuous days) to 1-minute resolution",
        "Physics-aware hysteresis pause-bridging cycle extractor and zero-leakage cross-household split",
        "Cut unseen-home MAE from 187.27 W → 69.39 W (House 8) and 150.27 W → 50.80 W (House 9)",
        "Reduced SAE energy error by 73%–76% and lifted F1 by +187%–233% over Ridge baselines"
      ]
    },
    {
      id: "genz-observatory",
      title: "Gen-Z Digital Well-Being Observatory",
      category: "data",
      categoryLabel: "Data & ML",
      badge: "1M+ Records",
      featured: true,
      impact: "79.6% Parquet compression · ~23% projected churn avoided",
      summary:
        "One-million-user telemetry analytics and K-Means clustering platform uncovering the 5-hour mental-health cliff and replacing blanket app lockouts with circadian threshold nudges.",
      stack: ["Python", "PyArrow", "Parquet", "Scikit-Learn", "Plotly"],
      repo: "https://github.com/10JERRY01/GenZ-Well-Being-And-Engagement-Observatory",
      architecture: [
        "Compressed 116.9 MB raw CSV telemetry to 22.8 MB Snappy Parquet via Apache Arrow (79.6% smaller)",
        "Segmented 1M users across 7 countries using K-Means (K=4) and linear decay modeling (-0.781 pts/hr, R²=0.58)",
        "Proved platform parity (7.16–7.17 avg across 5 apps) and identified the ≥5h cliff, protecting 74.88% of healthy users",
        "Built interactive Streamlit + Plotly 3D scatter, violin distribution, and regression analytics"
      ]
    },
    {
      id: "workplace-cv",
      title: "Workplace Video Intelligence & CCTV Tracking",
      category: "mlcv",
      categoryLabel: "Computer Vision",
      badge: "Python + C++",
      featured: true,
      impact: "90% false-positive reduction · C++ edge preprocessing",
      summary:
        "Real-time restricted-zone safety monitoring blending YOLOv8 detection with a compiled C++ OpenCV shared library (ctypes), SQLite event logging, and throttled alerts.",
      stack: ["Python", "C++", "YOLOv8", "OpenCV", "SQLite"],
      repo: "https://github.com/10JERRY01/Workplace-Video-Intelligence-Tracking",
      architecture: [
        "YOLOv8 + OpenCV geometric polygon containment checks flagging unauthorized zone entry",
        "Compiled C++ OpenCV image preprocessing library bridged natively to Python via ctypes",
        "SQLite infraction store paired with rate-limited SMTP alerting (max 1/min) to avoid alert fatigue",
        "Confidence-threshold distribution EDA eliminating 90% of false-positive detections"
      ]
    },
    {
      id: "hcsc-kg",
      title: "HCSC Knowledge Graph & Entity Resolution",
      category: "agentic",
      categoryLabel: "Knowledge Graph",
      badge: "RDF + SPARQL",
      featured: true,
      impact: "Invoice PDFs → Pydantic JSON → RDF Graph + SPARQL",
      summary:
        "Healthcare supply-chain system extracting unstructured hospital invoices via LLM Pydantic schemas, resolving catalog items via SentenceTransformers, and asserting RDF graphs.",
      stack: ["FastAPI", "OpenAI", "SentenceTransformers", "RDFLib", "SPARQL"],
      repo: "https://github.com/10JERRY01/HCSC-Knowledge-Graph-Entity-Resolution",
      architecture: [
        "LLM extraction transforming messy hospital invoices into validated nested Pydantic schemas",
        "Semantic resolution matching fuzzy descriptions to Master Catalog IDs via all-MiniLM-L6-v2 cosine similarity",
        "RDFLib graph assertion exposing multi-hop ontological SPARQL queries across hospitals & products",
        "Interactive FastAPI web portal displaying confidence scores and resolved graph triples"
      ]
    },
    {
      id: "shiprocket",
      title: "Shiprocket Logistics & A/B Testing Engine",
      category: "data",
      categoryLabel: "Experimentation",
      badge: "110k Sessions",
      featured: true,
      impact: "+12.52% conversion lift (z = 4.33, p = 7.29e-6)",
      summary:
        "E-commerce logistics and experimentation engine analyzing Olist shipping latency with SQL CTEs/Window Functions and validating expedited shipping via Z/T hypothesis tests.",
      stack: ["Python", "SQL", "Statsmodels", "Flask", "Chart.js"],
      repo: "https://github.com/10JERRY01/shiprocket-analytics",
      architecture: [
        "SQLite ETL computing month-over-month delivery delays by state using SQL CTEs & Window Functions",
        "A/B experiment across 110,000 sessions proving +12.52% CR lift (p=7.29e-6) with neutral AOV impact",
        "Flask API serving pre-computed statistical artifacts to a 5-chart Chart.js decision dashboard"
      ]
    },
    {
      id: "torrent-ext",
      title: "Minimalist Torrent Extension",
      category: "systems",
      categoryLabel: "Browser Systems",
      badge: "Chrome Web Store",
      featured: true,
      impact: "Published Chromium extension · 100% client-side P2P",
      summary:
        "Lightweight browser extension featuring real-time magnet URI interception, hover hash & tracker pre-flight auditing, live swarm telemetry, and four dark UI presets.",
      stack: ["JavaScript", "Chromium APIs", "P2P", "CSS3"],
      live: "https://chromewebstore.google.com/detail/bdmkboiedhlebnhdnabhdabhlhhnbieg",
      liveLabel: "Chrome Web Store",
      architecture: [
        "Link Interception Engine capturing magnet URIs and .torrent headers directly inside the browser",
        "Hover-triggered pre-flight inspection validating cryptographic hashes and tracker pools",
        "Embedded toolbar UI displaying live swarm peers & throughput without external desktop bloat",
        "Strict local client execution layer across 4 dark themes including Obsidian & Cyber Neon"
      ]
    },
    {
      id: "nexus-ai",
      title: "Nexus AI — Conversational News & RAG Engine",
      category: "agentic",
      categoryLabel: "Agentic AI",
      badge: "Cloud Run",
      featured: false,
      impact: "Multi-stage Docker · Automated NER + RAG Q&A",
      summary:
        "End-to-end news intelligence pipeline ingesting live feeds into SQLite, enriching articles with NER, sentiment & summaries, and serving citation-grounded RAG answers.",
      stack: ["Python", "Docker", "GCP Cloud Run", "RAG", "SQLite"],
      repo: "https://github.com/10JERRY01/nexus-ai-engine",
      architecture: [
        "Automated Python ingestion normalizing live news API feeds into SQLite",
        "NLP enrichment computing Named Entities, sentiment polarity, and LLM summaries",
        "Multi-stage Dockerfile engineered for serverless deployment on Google Cloud Run"
      ]
    },
    {
      id: "financial-rag",
      title: "Intelligent Financial Document Insights (RAG)",
      category: "agentic",
      categoryLabel: "Agentic AI",
      badge: "2★ · RAG",
      featured: false,
      impact: "Annual report PDF ingestion + vector RAG guardrails",
      summary:
        "Financial filing analyzer pairing PyPDF2/NLTK EDA with SentenceTransformers, FAISS/Pinecone vector retrieval, and context-window guardrails inside Streamlit.",
      stack: ["PyTorch", "LangChain", "HuggingFace", "FAISS", "Streamlit"],
      repo: "https://github.com/10JERRY01/10JERRY01-Intelligent-Financial-Document-Insights-System-RAG-LLM",
      architecture: [
        "Automated financial PDF parsing and noise-cleaning pipeline generating lexical EDA reports",
        "Dense vector indexing using all-MiniLM-L6-v2 embeddings with context-window guardrails"
      ]
    },
    {
      id: "streamguard",
      title: "StreamGuard — Video Ingestion & HLS Diagnostics",
      category: "systems",
      categoryLabel: "Media Systems",
      badge: "React 19 + FastAPI",
      featured: false,
      impact: "Codec quality gate · Auto-HLS transcode & telemetry",
      summary:
        "Full-stack media quality gate validating codecs, bitrates, and resolutions, transcoding compliant uploads to adaptive HLS (.m3u8), and streaming into a live Video.js player.",
      stack: ["React 19", "TypeScript", "FastAPI", "FFmpeg", "Video.js"],
      repo: "https://github.com/10JERRY01/StreamGuard",
      architecture: [
        "Automated compliance gate rejecting invalid codecs (MPEG2/MP3) and oversized resolutions",
        "FFmpeg HLS (.m3u8) transcoder paired with live Video.js buffer/bitrate diagnostics & JSON audit logs"
      ]
    },
    {
      id: "logsentinel",
      title: "LogSentinel — Go + ML Anomaly Pipeline",
      category: "systems",
      categoryLabel: "Systems & AIOps",
      badge: "Go + Python",
      featured: false,
      impact: "Concurrent Go ingestion + Isolation Forest detector",
      summary:
        "Polyglot AIOps pipeline pairing a Go HTTP log ingestion server (:8080) with Bash HDFS log rotation and a Scikit-Learn Isolation Forest anomaly detector.",
      stack: ["Go", "Python", "Bash", "Isolation Forest", "Unit Tests"],
      repo: "https://github.com/10JERRY01/LogSentinel",
      architecture: [
        "High-throughput Go REST collector buffering access events for threshold-based Bash rotation",
        "Isolation Forest model extracting lexical/temporal features with unit-tested Go & Python suites"
      ]
    },
    {
      id: "payment-edq",
      title: "Enterprise Payment Data Quality & Pricing",
      category: "data",
      categoryLabel: "Data Engineering",
      badge: "PySpark",
      featured: false,
      impact: "Bronze → Silver → Gold medallion + AML risk flags",
      summary:
        "Mastercard-modeled PySpark transaction ETL enforcing completeness, validity & timeliness EDQ checks while calculating merchant interchange fees and AML flags.",
      stack: ["PySpark", "Spark SQL", "Python", "Tableau"],
      repo: "https://github.com/10JERRY01/Enterprise_Payment_Data_Quality_and_Pricing_Engine",
      architecture: [
        "PySpark Medallion pipeline checking schema completeness, negative amounts, duplicates & timeliness",
        "Computes merchant-category interchange fees, AML flags & partitioned Gold CSV outputs"
      ]
    },
    {
      id: "qsr-ops",
      title: "QSR Operation Analytics (Linemate)",
      category: "data",
      categoryLabel: "Operations BI",
      badge: "20 Outlets",
      featured: false,
      impact: "r = -0.80 checklist adherence vs. failure tickets",
      summary:
        "Streamlit operational analytics platform using algorithmic SQL CROSS JOINs to detect 238 missing FSSAI audits across 20 QSR outlets without survivorship bias.",
      stack: ["Python", "SQL", "Streamlit", "Pandas"],
      repo: "https://github.com/10JERRY01/QSR-Operation-Analytics-",
      architecture: [
        "Programmatic SQL CROSS JOIN missing-audit detector + automated VP Executive PDF generation",
        "Tracked 62 critical tickets (22.2h MTTR) and proved r = -0.80 correlation with checklist completion"
      ]
    },
    {
      id: "muthoot-credit",
      title: "Muthoot Credit Risk Engine",
      category: "mlcv",
      categoryLabel: "Predictive ML",
      badge: "XGBoost + API",
      featured: false,
      impact: "4-model credit default benchmark via FastAPI",
      summary:
        "End-to-end credit default risk service benchmarking Logistic Regression, Random Forest, XGBoost & Gradient Boosting with financial ratio engineering.",
      stack: ["XGBoost", "Scikit-Learn", "FastAPI", "Jinja2"],
      repo: "https://github.com/10JERRY01/Muthoot-Credit-Risk",
      architecture: [
        "Crafts Loan-to-Income & Age-to-Employment ratios with class-imbalance recall weighting",
        "Serves live multi-model risk comparisons over an asynchronous FastAPI portal"
      ]
    },
    {
      id: "pipeline-orch",
      title: "Pipeline Orchestrator — ETL Observability UI",
      category: "data",
      categoryLabel: "Data Engineering",
      badge: "TypeScript",
      featured: false,
      impact: "Real-time DAG monitoring, triggers & quality charts",
      summary:
        "Full-stack React, TypeScript & Express.js application for monitoring ETL execution health, triggering pipeline runs, and inspecting null distributions.",
      stack: ["React", "TypeScript", "Express.js", "Recharts"],
      repo: "https://github.com/10JERRY01/pipeline-orchestrator",
      architecture: [
        "Express TypeScript API managing pipeline statuses, execution durations & manual run triggers",
        "Recharts visualizations for volume trends, success rates, and null-value distributions"
      ]
    },
    {
      id: "forbes-roi",
      title: "Marketing ROI & Segmentation Engine",
      category: "mlcv",
      categoryLabel: "Predictive ML",
      badge: "PCA + K-Means",
      featured: false,
      impact: "4 customer LTV personas + propensity scoring",
      summary:
        "Customer targeting system combining LTV feature engineering, PCA reduction, K-Means clustering, and balanced Random Forest conversion prediction.",
      stack: ["Python", "Scikit-Learn", "PCA", "Chart.js"],
      repo: "https://github.com/10JERRY01/Forbes-Advisor-Marketing-ROI-Engine",
      architecture: [
        "PCA + K-Means segmentation isolating 4 customer personas paired with Random Forest propensity scoring"
      ]
    },
    {
      id: "ghg-rag",
      title: "Supply Chain GHG Emissions RAG System",
      category: "agentic",
      categoryLabel: "Agentic AI",
      badge: "watsonx.ai",
      featured: false,
      impact: "Natural-language querying over NAICS emissions",
      summary:
        "Environmental analytics RAG interface enabling natural-language queries across multi-year NAICS supply-chain emission records using IBM watsonx.ai and FAISS.",
      stack: ["Python", "IBM watsonx.ai", "FAISS", "Streamlit"],
      repo: "https://github.com/10JERRY01/GreehouseGasEmissionRAG",
      architecture: [
        "Schema-flexible NAICS ingestion with automatic deduplication and FAISS semantic retrieval"
      ]
    },
    {
      id: "leetcode-x",
      title: "Leetcode-X — Interactive DSA Explainers",
      category: "tools",
      categoryLabel: "Algorithms",
      badge: "15 Patterns",
      featured: false,
      impact: "Optimal Python solutions + animated HTML visualizers",
      summary:
        "Curated algorithmic study kit covering 15 foundation problems with progressive hints, complexity proofs, and browser-based animated execution diagrams.",
      stack: ["Python", "Algorithms", "HTML5", "JavaScript"],
      repo: "https://github.com/10JERRY01/Leetcode-X",
      architecture: [
        "Covers Two Pointers, Kadane DP, Boyer-Moore Voting, BST LCA & interactive step animations"
      ]
    },
    {
      id: "mandelbrot",
      title: "Mandelbrot & Julia Set Fractal Explorer",
      category: "tools",
      categoryLabel: "Graphics",
      badge: "60fps Canvas",
      featured: false,
      impact: "Adaptive escape-time renderer & Julia mode",
      summary:
        "Zero-dependency HTML5 Canvas 2D Mandelbrot and Julia fractal explorer featuring guided boundary descents, adaptive resolution scaling, and 5 color palettes.",
      stack: ["JavaScript", "HTML5 Canvas", "Numerical Methods"],
      repo: "https://github.com/10JERRY01/Mandelbrot-Set-Animation-Trippy-",
      architecture: [
        "Smooth continuous escape-time coloring with cursor-centered zoom and Julia flight toggle"
      ]
    }
  ],

  experience: [
    {
      company: "Indium Software",
      role: "AI/ML Engineer (Consultant)",
      period: "2025 – Present",
      highlights: [
        "Architect and deploy enterprise Generative AI and RAG applications using Python, LangChain, and Vector DBs for contextual knowledge retrieval.",
        "Build autonomous LangGraph agents capable of multi-step reasoning and tool execution, served via asynchronous FastAPI and WebSockets.",
        "Optimize complex SQL pipelines across multi-dimensional datasets and deploy low-latency computer vision monitoring across cloud and edge."
      ]
    },
    {
      company: "Outlier.ai",
      role: "LLM Evaluation Specialist",
      period: "2025",
      highlights: [
        "Designed deep learning workflows and computer vision prototypes, translating algorithmic research into production-ready software.",
        "Executed feature engineering and statistical analytics on large-scale unstructured repositories with Python and Advanced SQL.",
        "Managed LLM evaluation, RLHF/alignment rubrics, and fine-tuning protocols alongside agile NLP automation pipelines."
      ]
    },
    {
      company: "Freelance Software Consulting",
      role: "AI & Data Engineer",
      period: "2025",
      highlights: [
        "Partnered with stakeholders to translate ambiguous business goals into production ML, Data Analytics, and Cloud architectures.",
        "Built reusable AI workflows, automated ETL pipelines, analytics dashboards, and custom relational database systems."
      ]
    },
    {
      company: "Cognizant",
      role: "Programmer Analyst (Data & ML Engineering)",
      period: "Sep 2021 – Nov 2023",
      highlights: [
        "Engineered scalable backend data pipelines and complex SQL infrastructure supporting downstream ML and analytics workloads.",
        "Conducted Exploratory Data Analysis (EDA) on legacy enterprise systems to eliminate inconsistencies and guide architectural upgrades.",
        "Spearheaded end-to-end ETL workflows and resilient API integrations with cross-functional product and DevOps teams."
      ]
    }
  ],

  skills: [
    {
      group: "Generative AI & Agents",
      items: "Agentic AI · LangGraph · LangChain · LlamaIndex · RAG · OpenAI & Gemini APIs · Local GGUF (Bonsai 27B) · Pinecone · Qdrant · ChromaDB · FAISS · Redis"
    },
    {
      group: "ML & Data Science",
      items: "PyTorch · TensorFlow · Scikit-Learn · XGBoost · NLP & Transformers · Time-Series / NILM · K-Means & PCA · A/B Testing (Statsmodels, SciPy) · Statistical Modeling"
    },
    {
      group: "Computer Vision & Systems",
      items: "YOLOv8 · OpenCV · Video Intelligence · C++ (ctypes/DLL) · Go · Debian Linux & Liquorix Kernel · KDE Plasma 6 · SQLite FTS5 · FFmpeg / HLS"
    },
    {
      group: "Data Engineering & BI",
      items: "Advanced SQL (CTEs, Window Functions, Cross Joins) · PySpark & Spark SQL · Apache Arrow & Parquet · Medallion ETL · EDA · Pandas · NumPy · Plotly · Power BI · Tableau"
    },
    {
      group: "Backend, Cloud & MLOps",
      items: "Python · FastAPI · Flask · WebSockets · REST APIs · Microservices · Asyncio · Docker · Kubernetes · GCP Cloud Run · AWS · GitHub Actions CI/CD"
    }
  ],

  education: [
    {
      institution: "Woolf Academy × Scaler Neoversity",
      degree: "Advanced Data Science, AI & Machine Learning Program",
      period: "Specialization",
      focus: "Deep Learning, GenAI & LLM Orchestration, Computer Vision, MLOps, Statistical Analysis & EDA."
    },
    {
      institution: "KIIT University, Bhubaneswar",
      degree: "B.Tech in Computer Science Engineering",
      period: "Graduated 2021",
      focus: "Database Management (SQL), Data Structures & Algorithms, Software Engineering, C/C++."
    }
  ],

  certifications: [
    {
      issuer: "Microsoft",
      title: "Azure Fundamentals (AZ-900)",
      url: "https://www.linkedin.com/posts/rahul-das-9533a1195_az-900-activity-6999704927828643840-drdM"
    },
    {
      issuer: "Microsoft",
      title: "Azure AI Fundamentals (AI-900)",
      url: "https://www.linkedin.com/posts/rahul-das-9533a1195_ai-900-activity-6999706131640008704-Q6rt"
    },
    {
      issuer: "Microsoft",
      title: "Azure Data Fundamentals (DP-900)",
      url: "https://www.linkedin.com/posts/rahul-das-9533a1195_dp-900-activity-6999706650035032064-Vm8c"
    },
    {
      issuer: "Microsoft",
      title: "Security, Compliance & Identity (SC-900)",
      url: "https://www.linkedin.com/posts/rahul-das-9533a1195_sc-900-microsoftlearn-activity-7018574221203156992-u5Q6"
    },
    {
      issuer: "Google Cloud",
      title: "Machine Learning & Feature Engineering",
      url: "https://www.linkedin.com/posts/rahul-das-9533a1195_completion-certificate-for-machine-learning-activity6785424781010378752-9lRH"
    },
    {
      issuer: "Scaler",
      title: "EDA, Advanced SQL, Python & Unsupervised ML",
      url: "https://www.linkedin.com/posts/rahul-das-9533a1195_activity-7207698301868019712-Z3Xy"
    }
  ]
};
