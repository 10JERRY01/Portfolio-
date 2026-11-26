(function () {
  const data = window.PORTFOLIO_DATA;
  if (!data) return;

  const html = document.documentElement;
  const themeToggle = document.getElementById("theme-toggle");
  const savedTheme = localStorage.getItem("rd_portfolio_theme") || "dark";
  applyTheme(savedTheme);

  function applyTheme(theme) {
    html.setAttribute("data-theme", theme);
    localStorage.setItem("rd_portfolio_theme", theme);
    const icon = themeToggle?.querySelector(".theme-icon");
    if (icon) icon.textContent = theme === "dark" ? "☀" : "☾";
  }

  themeToggle?.addEventListener("click", () => {
    const next = html.getAttribute("data-theme") === "dark" ? "light" : "dark";
    applyTheme(next);
  });

  // Mobile Menu Drawer
  const menuBtn = document.getElementById("mobile-menu-btn");
  const drawer = document.getElementById("mobile-drawer");
  menuBtn?.addEventListener("click", () => {
    const open = drawer.hasAttribute("hidden");
    if (open) {
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

  // Render Metrics
  const metricsEl = document.getElementById("metrics-strip");
  if (metricsEl) {
    metricsEl.innerHTML = data.metrics
      .map(
        (m) => `
      <div class="metric-card">
        <div class="metric-val">${escapeHtml(m.value)}</div>
        <div class="metric-lbl">${escapeHtml(m.label)}</div>
      </div>`
      )
      .join("");
  }

  // Jarvis OS Interactive Tabs
  const jarvisPanel = document.getElementById("jarvis-panel");
  const jarvisPipeline = document.getElementById("jarvis-pipeline");
  const jarvisTabs = document.querySelectorAll("[data-jarvis-tab]");
  const jarvisPreview = document.getElementById("jarvis-preview");
  const jarvisPreset = document.getElementById("jarvis-preset-select");

  function renderJarvisTab(key) {
    const tab = data.jarvisTabs[key];
    if (!tab || !jarvisPanel || !jarvisPipeline) return;
    jarvisTabs.forEach((btn) => {
      const active = btn.dataset.jarvisTab === key;
      btn.classList.toggle("active", active);
      btn.setAttribute("aria-selected", String(active));
    });
    jarvisPanel.innerHTML = `
      <span class="badge">${escapeHtml(tab.badge)}</span>
      <h3>${escapeHtml(tab.title)}</h3>
      <p>${escapeHtml(tab.description)}</p>
      <ul>
        ${tab.bullets.map((b) => `<li>${escapeHtml(b)}</li>`).join("")}
      </ul>
    `;
    jarvisPipeline.innerHTML = tab.pipeline
      .map(
        (step, idx) => `
      <div class="pipe-step">
        <span class="pipe-num">STAGE 0${idx + 1}</span>
        <span>${escapeHtml(step)}</span>
      </div>`
      )
      .join("");
  }

  jarvisTabs.forEach((btn) => {
    btn.addEventListener("click", () => renderJarvisTab(btn.dataset.jarvisTab));
  });
  jarvisPreset?.addEventListener("change", (e) => {
    jarvisPreview?.setAttribute("data-preset", e.target.value);
  });
  renderJarvisTab("dual");

  // Projects Filter + Search + Grid
  const projectsGrid = document.getElementById("projects-grid");
  const projectsCount = document.getElementById("projects-count");
  const filterBtns = document.querySelectorAll("[data-filter]");
  const searchInput = document.getElementById("project-search");
  let currentFilter = "all";
  let currentQuery = "";

  function renderProjects() {
    if (!projectsGrid) return;
    const q = currentQuery.trim().toLowerCase();
    const list = data.projects.filter((p) => {
      const matchCat = currentFilter === "all" || p.category === currentFilter;
      if (!matchCat) return false;
      if (!q) return true;
      const haystack = `${p.title} ${p.summary} ${p.impact} ${p.categoryLabel} ${p.stack.join(" ")}`.toLowerCase();
      return haystack.includes(q);
    });

    if (projectsCount) {
      projectsCount.textContent = `Showing ${list.length} of ${data.projects.length} repositories & shipped systems`;
    }

    if (list.length === 0) {
      projectsGrid.innerHTML = `<div class="exp-card" style="grid-column:1/-1;text-align:center;">No projects matched "${escapeHtml(currentQuery)}". Try clearing the filter.</div>`;
      return;
    }

    projectsGrid.innerHTML = list
      .map(
        (p) => `
      <article class="project-card ${p.featured ? "featured" : ""}">
        <div>
          <div class="card-top">
            <span class="badge">${escapeHtml(p.categoryLabel)}</span>
            <span class="badge badge-highlight">${escapeHtml(p.badge)}</span>
          </div>
          <h3 class="project-title">${escapeHtml(p.title)}</h3>
          <p class="project-summary">${escapeHtml(p.summary)}</p>
        </div>

        <div style="display:grid;gap:12px;">
          <div class="impact-strip">${escapeHtml(p.impact)}</div>
          <div class="tag-list">
            ${p.stack.slice(0, 5).map((s) => `<span class="tag">${escapeHtml(s)}</span>`).join("")}
          </div>
          <div class="card-actions">
            <button class="btn btn-secondary btn-sm" type="button" data-open-modal="${escapeHtml(p.id)}">
              Architecture
            </button>
            ${
              p.repo
                ? `<a class="btn btn-ghost btn-sm" href="${escapeHtml(p.repo)}" target="_blank" rel="noopener">GitHub ↗</a>`
                : ""
            }
            ${
              p.live
                ? `<a class="btn btn-primary btn-sm" href="${escapeHtml(p.live)}" target="_blank" rel="noopener">${p.id === "torrent-ext" ? "Web Store ↗" : "Live ↗"}</a>`
                : ""
            }
          </div>
        </div>
      </article>`
      )
      .join("");
  }

  filterBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      currentFilter = btn.dataset.filter;
      filterBtns.forEach((b) => b.classList.toggle("active", b === btn));
      renderProjects();
    });
  });

  searchInput?.addEventListener("input", (e) => {
    currentQuery = e.target.value;
    renderProjects();
  });

  renderProjects();

  // Modal Logic
  const modal = document.getElementById("project-modal");
  const modalClose = document.getElementById("modal-close");
  const modalTitle = document.getElementById("modal-title");
  const modalCategory = document.getElementById("modal-category");
  const modalImpact = document.getElementById("modal-impact");
  const modalSummary = document.getElementById("modal-summary");
  const modalArch = document.getElementById("modal-arch");
  const modalStack = document.getElementById("modal-stack");
  const modalLinks = document.getElementById("modal-links");

  function openProjectModal(id) {
    const proj = data.projects.find((p) => p.id === id);
    if (!proj || !modal) return;
    modalCategory.textContent = `${proj.categoryLabel} · ${proj.badge}`;
    modalTitle.textContent = proj.title;
    modalImpact.textContent = `Impact & Scale: ${proj.impact}`;
    modalSummary.textContent = proj.summary;
    modalArch.innerHTML = proj.architecture.map((a) => `<li>${escapeHtml(a)}</li>`).join("");
    modalStack.innerHTML = proj.stack.map((s) => `<span class="tag">${escapeHtml(s)}</span>`).join("");

    const links = [];
    if (proj.repo) {
      links.push(`<a class="btn btn-primary btn-sm" href="${escapeHtml(proj.repo)}" target="_blank" rel="noopener">View Source on GitHub ↗</a>`);
    }
    if (proj.live) {
      links.push(`<a class="btn btn-secondary btn-sm" href="${escapeHtml(proj.live)}" target="_blank" rel="noopener">Open Live Deployment ↗</a>`);
    }
    if (proj.extraLink) {
      links.push(`<a class="btn btn-ghost btn-sm" href="${escapeHtml(proj.extraLink.url)}" target="_blank" rel="noopener">${escapeHtml(proj.extraLink.label)} ↗</a>`);
    }
    modalLinks.innerHTML = links.join("");
    modal.removeAttribute("hidden");
    document.body.style.overflow = "hidden";
    modalClose?.focus();
  }

  function closeProjectModal() {
    if (!modal) return;
    modal.setAttribute("hidden", "");
    document.body.style.overflow = "";
  }

  projectsGrid?.addEventListener("click", (e) => {
    const btn = e.target.closest("[data-open-modal]");
    if (btn) openProjectModal(btn.dataset.openModal);
  });

  modalClose?.addEventListener("click", closeProjectModal);
  modal?.addEventListener("click", (e) => {
    if (e.target === modal) closeProjectModal();
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal && !modal.hasAttribute("hidden")) {
      closeProjectModal();
    }
  });

  // Render Experience
  const expEl = document.getElementById("experience-timeline");
  if (expEl) {
    expEl.innerHTML = data.experience
      .map(
        (exp) => `
      <article class="exp-card">
        <div class="exp-head">
          <div>
            <div class="exp-company">${escapeHtml(exp.company)}</div>
            <div class="exp-role">${escapeHtml(exp.role)}</div>
          </div>
          <span class="exp-period">${escapeHtml(exp.period)}</span>
        </div>
        <ul class="exp-list">
          ${exp.highlights.map((h) => `<li>${escapeHtml(h)}</li>`).join("")}
        </ul>
      </article>`
      )
      .join("");
  }

  // Render Skills
  const skillsEl = document.getElementById("skills-grid");
  if (skillsEl) {
    skillsEl.innerHTML = data.skills
      .map(
        (group) => `
      <article class="skill-card">
        <h3>${escapeHtml(group.group)}</h3>
        <div class="skill-chips">
          ${group.items.map((item) => `<span class="skill-chip">${escapeHtml(item)}</span>`).join("")}
        </div>
      </article>`
      )
      .join("");
  }

  // Render Education & Certifications
  const eduEl = document.getElementById("education-list");
  if (eduEl) {
    eduEl.innerHTML = data.education
      .map(
        (ed) => `
      <article class="edu-card">
        <span class="badge" style="margin-bottom:8px;">${escapeHtml(ed.period)}</span>
        <h3>${escapeHtml(ed.institution)}</h3>
        <div class="edu-degree">${escapeHtml(ed.degree)}</div>
        <p class="edu-focus">${escapeHtml(ed.focus)}</p>
      </article>`
      )
      .join("");
  }

  const certsEl = document.getElementById("certifications-grid");
  if (certsEl) {
    certsEl.innerHTML = data.certifications
      .map(
        (c) => `
      <a class="cert-card" href="${escapeHtml(c.url)}" target="_blank" rel="noopener">
        <div>
          <div class="cert-issuer">${escapeHtml(c.issuer)}</div>
          <div class="cert-title">${escapeHtml(c.title)}</div>
        </div>
        <span class="cert-verify">Verify Credential ↗</span>
      </a>`
      )
      .join("");
  }

  // Copy Email Toast
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
    toastTimer = setTimeout(() => toast.setAttribute("hidden", ""), 2600);
  }

  // Active Nav Highlight on Scroll
  const navLinks = document.querySelectorAll(".nav-links a");
  const sections = [...navLinks]
    .map((a) => document.querySelector(a.getAttribute("href")))
    .filter(Boolean);

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          navLinks.forEach((a) => {
            a.classList.toggle("active", a.getAttribute("href") === `#${entry.target.id}`);
          });
        }
      });
    },
    { rootMargin: "-30% 0px -55% 0px" }
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
