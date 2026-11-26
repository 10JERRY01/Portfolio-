(function () {
  const data = window.PORTFOLIO_DATA;
  if (!data) return;

  // Theme management
  const html = document.documentElement;
  const themeToggle = document.getElementById("theme-toggle");
  const savedTheme = localStorage.getItem("rd_portfolio_theme") || "dark";

  function applyTheme(theme) {
    html.setAttribute("data-theme", theme);
    localStorage.setItem("rd_portfolio_theme", theme);
    const icon = themeToggle?.querySelector(".theme-icon");
    if (icon) icon.textContent = theme === "dark" ? "☀" : "☾";
  }
  applyTheme(savedTheme);

  themeToggle?.addEventListener("click", () => {
    applyTheme(html.getAttribute("data-theme") === "dark" ? "light" : "dark");
  });

  // Mobile drawer
  const menuBtn = document.getElementById("mobile-menu-btn");
  const drawer = document.getElementById("mobile-drawer");

  menuBtn?.addEventListener("click", () => {
    const isHidden = drawer.hasAttribute("hidden");
    if (isHidden) {
      drawer.removeAttribute("hidden");
      menuBtn.setAttribute("aria-expanded", "true");
    } else {
      drawer.setAttribute("hidden", "");
      menuBtn.setAttribute("aria-expanded", "false");
    }
  });

  drawer?.querySelectorAll("a").forEach((a) => {
    a.addEventListener("click", () => {
      drawer.setAttribute("hidden", "");
      menuBtn?.setAttribute("aria-expanded", "false");
    });
  });

  // Metrics bar
  const metricsBar = document.getElementById("metrics-bar");
  if (metricsBar) {
    metricsBar.innerHTML = data.metrics
      .map(
        (m) => `
      <div>
        <div class="metric-val">${escapeHtml(m.value)}</div>
        <div class="metric-lbl">${escapeHtml(m.label)}</div>
      </div>`
      )
      .join("");
  }

  // Jarvis OS tabs
  const jarvisCopy = document.getElementById("jarvis-copy");
  const jarvisStages = document.getElementById("jarvis-stages");
  const jarvisTabs = document.querySelectorAll("[data-jarvis-tab]");

  function renderJarvis(key) {
    const tab = data.jarvisTabs[key];
    if (!tab || !jarvisCopy || !jarvisStages) return;

    jarvisTabs.forEach((btn) => {
      const active = btn.dataset.jarvisTab === key;
      btn.classList.toggle("active", active);
      btn.setAttribute("aria-selected", String(active));
    });

    jarvisCopy.innerHTML = `
      <h3>${escapeHtml(tab.title)}</h3>
      <p>${escapeHtml(tab.summary)}</p>
      <ul>
        ${tab.points.map((pt) => `<li>${escapeHtml(pt)}</li>`).join("")}
      </ul>
    `;

    jarvisStages.innerHTML = tab.stages
      .map(
        (s) => `
      <div class="stage-box">
        <span class="stage-k">${escapeHtml(s.k)}</span>
        <span class="stage-v">${escapeHtml(s.v)}</span>
      </div>`
      )
      .join("");
  }

  jarvisTabs.forEach((btn) => {
    btn.addEventListener("click", () => renderJarvis(btn.dataset.jarvisTab));
  });
  renderJarvis("dual");

  // Projects filter & search
  const grid = document.getElementById("projects-grid");
  const footerEl = document.getElementById("projects-footer");
  const filterChips = document.querySelectorAll("[data-filter]");
  const searchInput = document.getElementById("project-search");
  let activeFilter = "featured";
  let query = "";

  function setActiveFilter(next) {
    activeFilter = next;
    filterChips.forEach((c) => c.classList.toggle("active", c.dataset.filter === next));
    renderProjects();
  }

  function renderProjects() {
    if (!grid) return;
    const q = query.trim().toLowerCase();

    const list = data.projects.filter((p) => {
      if (q) {
        const hay = `${p.title} ${p.summary} ${p.impact} ${p.categoryLabel} ${p.stack.join(" ")}`.toLowerCase();
        if (!hay.includes(q)) return false;
      }
      if (activeFilter === "all") return true;
      if (activeFilter === "featured") return q ? true : p.featured;
      return p.category === activeFilter;
    });

    if (list.length === 0) {
      grid.innerHTML = `
        <div class="project-card" style="grid-column:1/-1;align-items:center;text-align:center;">
          <p class="project-desc">No repositories matched "${escapeHtml(query)}".</p>
          <button class="btn btn-secondary btn-sm" type="button" id="reset-filter-btn">Reset Filter</button>
        </div>`;
      document.getElementById("reset-filter-btn")?.addEventListener("click", () => {
        query = "";
        if (searchInput) searchInput.value = "";
        setActiveFilter("featured");
      });
      if (footerEl) footerEl.innerHTML = "";
      return;
    }

    grid.innerHTML = list
      .map(
        (p) => `
      <article class="project-card">
        <div>
          <div class="card-meta">
            <span>${escapeHtml(p.categoryLabel)}</span>
            <span class="card-badge">${escapeHtml(p.badge)}</span>
          </div>
          <h3>${escapeHtml(p.title)}</h3>
          <p class="project-desc">${escapeHtml(p.summary)}</p>
        </div>

        <div style="display:grid;gap:10px;">
          <div class="project-impact">${escapeHtml(p.impact)}</div>
          <div class="tag-row">
            ${p.stack.slice(0, 4).map((s) => `<span class="tag">${escapeHtml(s)}</span>`).join("")}
          </div>
          <div class="card-foot">
            <button class="link-btn" type="button" data-open-modal="${escapeHtml(p.id)}">Architecture →</button>
            <div class="card-links">
              ${p.repo ? `<a href="${escapeHtml(p.repo)}" target="_blank" rel="noopener">GitHub ↗</a>` : ""}
              ${p.live ? `<a href="${escapeHtml(p.live)}" target="_blank" rel="noopener">${escapeHtml(p.liveLabel || "Live")} ↗</a>` : ""}
            </div>
          </div>
        </div>
      </article>`
      )
      .join("");

    if (footerEl) {
      if (activeFilter === "featured" && !q) {
        footerEl.innerHTML = `
          <span>Showing ${list.length} featured systems (+ Jarvis OS above).</span>
          <button class="link-btn" type="button" id="show-all-btn">View all ${data.projects.length} repositories →</button>`;
        document.getElementById("show-all-btn")?.addEventListener("click", () => setActiveFilter("all"));
      } else {
        footerEl.innerHTML = `<span>Showing ${list.length} of ${data.projects.length} repositories.</span>`;
      }
    }
  }

  filterChips.forEach((chip) => {
    chip.addEventListener("click", () => setActiveFilter(chip.dataset.filter));
  });

  searchInput?.addEventListener("input", (e) => {
    query = e.target.value;
    renderProjects();
  });

  renderProjects();

  // Modal with focus restore
  const modal = document.getElementById("project-modal");
  const modalClose = document.getElementById("modal-close");
  const modalCategory = document.getElementById("modal-category");
  const modalTitle = document.getElementById("modal-title");
  const modalImpact = document.getElementById("modal-impact");
  const modalSummary = document.getElementById("modal-summary");
  const modalArch = document.getElementById("modal-arch");
  const modalStack = document.getElementById("modal-stack");
  const modalLinks = document.getElementById("modal-links");
  let lastFocus = null;

  function openModal(id, triggerEl) {
    const p = data.projects.find((x) => x.id === id);
    if (!p || !modal) return;
    lastFocus = triggerEl || document.activeElement;

    modalCategory.textContent = `${p.categoryLabel} · ${p.badge}`;
    modalTitle.textContent = p.title;
    modalImpact.textContent = p.impact;
    modalSummary.textContent = p.summary;
    modalArch.innerHTML = p.architecture.map((item) => `<li>${escapeHtml(item)}</li>`).join("");
    modalStack.innerHTML = p.stack.map((s) => `<span class="tag">${escapeHtml(s)}</span>`).join("");

    const links = [];
    if (p.repo) {
      links.push(`<a class="btn btn-primary btn-sm" href="${escapeHtml(p.repo)}" target="_blank" rel="noopener">GitHub Repo ↗</a>`);
    }
    if (p.live) {
      links.push(`<a class="btn btn-secondary btn-sm" href="${escapeHtml(p.live)}" target="_blank" rel="noopener">${escapeHtml(p.liveLabel || "Open Live")} ↗</a>`);
    }
    modalLinks.innerHTML = links.join("");

    modal.removeAttribute("hidden");
    document.body.style.overflow = "hidden";
    modalClose?.focus();
  }

  function closeModal() {
    if (!modal || modal.hasAttribute("hidden")) return;
    modal.setAttribute("hidden", "");
    document.body.style.overflow = "";
    if (lastFocus && typeof lastFocus.focus === "function") {
      lastFocus.focus();
    }
  }

  grid?.addEventListener("click", (e) => {
    const btn = e.target.closest("[data-open-modal]");
    if (btn) openModal(btn.dataset.openModal, btn);
  });

  modalClose?.addEventListener("click", closeModal);
  modal?.addEventListener("click", (e) => {
    if (e.target === modal) closeModal();
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeModal();
  });

  // Experience
  const expEl = document.getElementById("experience-list");
  if (expEl) {
    expEl.innerHTML = data.experience
      .map(
        (exp) => `
      <article class="exp-row">
        <div>
          <div class="exp-company">${escapeHtml(exp.company)}</div>
          <div class="exp-role">${escapeHtml(exp.role)}</div>
          <div class="exp-period">${escapeHtml(exp.period)}</div>
        </div>
        <ul class="exp-bullets">
          ${exp.highlights.map((h) => `<li>${escapeHtml(h)}</li>`).join("")}
        </ul>
      </article>`
      )
      .join("");
  }

  // Skills table
  const skillsTable = document.getElementById("skills-table");
  if (skillsTable) {
    skillsTable.innerHTML = data.skills
      .map(
        (s) => `
      <div class="skill-row">
        <div class="skill-k">${escapeHtml(s.group)}</div>
        <div class="skill-v">${escapeHtml(s.items)}</div>
      </div>`
      )
      .join("");
  }

  // Education & Certifications
  const eduEl = document.getElementById("education-list");
  if (eduEl) {
    eduEl.innerHTML = data.education
      .map(
        (ed) => `
      <div class="edu-card">
        <span class="eyebrow">${escapeHtml(ed.period)}</span>
        <h3>${escapeHtml(ed.institution)}</h3>
        <div class="edu-degree">${escapeHtml(ed.degree)}</div>
        <p class="edu-focus">${escapeHtml(ed.focus)}</p>
      </div>`
      )
      .join("");
  }

  const certEl = document.getElementById("certifications-list");
  if (certEl) {
    certEl.innerHTML = data.certifications
      .map(
        (c) => `
      <a class="cert-row" href="${escapeHtml(c.url)}" target="_blank" rel="noopener">
        <span class="cert-title">${escapeHtml(c.title)}</span>
        <span class="cert-issuer">${escapeHtml(c.issuer)} ↗</span>
      </a>`
      )
      .join("");
  }

  // Copy Email
  const copyBtn = document.getElementById("copy-email-btn");
  const toast = document.getElementById("toast");
  let toastTimer = null;

  copyBtn?.addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(data.profile.email);
      showToast(`Copied ${data.profile.email}`);
    } catch {
      showToast(data.profile.email);
    }
  });

  function showToast(msg) {
    if (!toast) return;
    toast.textContent = msg;
    toast.removeAttribute("hidden");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toast.setAttribute("hidden", ""), 2500);
  }

  // Active nav highlight
  const navLinks = document.querySelectorAll(".nav-links a");
  const sections = [...navLinks].map((a) => document.querySelector(a.getAttribute("href"))).filter(Boolean);
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          navLinks.forEach((a) => a.classList.toggle("active", a.getAttribute("href") === `#${entry.target.id}`));
        }
      });
    },
    { rootMargin: "-28% 0px -58% 0px" }
  );
  sections.forEach((sec) => observer.observe(sec));

  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());

  function escapeHtml(str) {
    return String(str)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;");
  }
})();
