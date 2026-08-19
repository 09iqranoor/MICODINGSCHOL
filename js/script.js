/* ============================================================
   MI CODING SCHOOL — MAIN SCRIPT
   Vanilla JavaScript only. No frameworks.
   ============================================================ */

   document.addEventListener("DOMContentLoaded", () => {
    initPageLoadAnimation();
    initNavbar();
    initMobileMenu();
    populateSocialLinks();
    populateContactInfo();
    renderCourses();
    renderFaculty();
    renderTestimonials();
    renderVideoFeedback();
    renderGallery();
    renderFaq();
    populateCourseSelect();
    populateFooterCourses();
    initModals();
    initRegistrationForm();
    initContactForm();
    initScrollReveal();
    initCounters();
    initHeroTyping();
    initExcelExport();
  });
  
  /* ================= PAGE LOAD ANIMATION ================= */
  function initPageLoadAnimation() {
    // Adds .is-loaded on the next frame so [data-hero-in] elements play their
    // staggered fade-up entrance (see heroFadeUp keyframes in style.css).
    requestAnimationFrame(() => {
      requestAnimationFrame(() => document.body.classList.add("is-loaded"));
    });
  }
  
  /* ================= NAVBAR ================= */
  function initNavbar() {
    const nav = document.getElementById("navbar");
    const onScroll = () => {
      if (window.scrollY > 12) nav.classList.add("scrolled");
      else nav.classList.remove("scrolled");
    };
    window.addEventListener("scroll", onScroll);
    onScroll();
  }
  
  function initMobileMenu() {
    const toggle = document.getElementById("menuToggle");
    const menu = document.getElementById("mobileMenu");
    const hamburger = toggle.querySelector(".hamburger");
    let open = false;
  
    function setState(next) {
      open = next;
      toggle.setAttribute("aria-expanded", String(open));
      hamburger.classList.toggle("open", open);
      menu.style.maxHeight = open ? menu.scrollHeight + "px" : "0px";
    }
  
    toggle.addEventListener("click", () => setState(!open));
    menu.querySelectorAll("a, button").forEach(el => {
      el.addEventListener("click", () => setState(false));
    });
  }


  // about
  (function () {
    // ---- EDIT: change the typed terminal messages here ----
    var mcsLines = [
      'console.log("Welcome to Mi Coding School");',
      'academy.mission = "Quality tech education for everyone";',
      'student.status = "Building real-world projects";'
    ];
  
    var li = 0, ci = 0;
    var typedEl = document.getElementById('mcsTyped');
  
    function mcsType() {
      if (!typedEl) return;
      if (li >= mcsLines.length) {
        li = 0; ci = 0; typedEl.textContent = '';
        setTimeout(mcsType, 800);
        return;
      }
      var line = mcsLines[li];
      if (ci <= line.length) {
        typedEl.textContent = line.slice(0, ci);
        ci++;
        setTimeout(mcsType, 45);
      } else {
        setTimeout(function () {
          li++; ci = 0; typedEl.textContent = '';
          mcsType();
        }, 1200);
      }
    }
    mcsType();
  })();
  /* ================= SOCIAL / CONTACT ================= */
  function populateSocialLinks() {
    document.querySelectorAll("[data-social]").forEach(el => {
      const key = el.getAttribute("data-social");
  
      if (socialLinks[key]) {
        el.href = socialLinks[key];
      }
    });
  
    const footerSocial = document.getElementById("footerSocial");
  
    const icons = {
      whatsapp: '<i class="fa-brands fa-whatsapp social-whatsapp"></i>',
      facebook: '<i class="fa-brands fa-facebook-f social-facebook"></i>',
      tiktok: '<i class="fa-brands fa-tiktok social-tiktok"></i>',
      linkedin: '<i class="fa-brands fa-linkedin-in social-linkedin"></i>',
      youtube: '<i class="fa-brands fa-youtube social-youtube"></i>',
      instagram: '<i class="fa-brands fa-instagram social-instagram"></i>'
    };
  
    Object.keys(socialLinks).forEach(key => {
      const a = document.createElement("a");
  
      a.href = socialLinks[key];
      a.target = "_blank";
      a.rel = "noopener noreferrer";
  
      a.className =
        "w-9 h-9 rounded-full border border-hair flex items-center justify-center hover:border-crimsonBright transition-colors";
  
      a.setAttribute("aria-label", key);
  
      a.innerHTML =
        icons[key] || '<i class="fa-solid fa-link"></i>';
  
      footerSocial.appendChild(a);
    });
  
    const floatingWhatsapp =
      document.getElementById("floatingWhatsapp");
  
    floatingWhatsapp.href = socialLinks.whatsapp;
  }
  
  function populateContactInfo() {
    document.getElementById("contactEmail").textContent = ACADEMY.email;
    document.getElementById("contactWhatsapp").textContent = "+" + ACADEMY.whatsapp;
    document.getElementById("contactPhone").textContent = ACADEMY.phone;
  }
  
  /* ================= COURSES ================= */
  function renderCourses() {
    const grid = document.getElementById("coursesGrid");
    grid.innerHTML = courses.map(course => `
      <div class="course-card" data-reveal>
        <div class="course-thumb" style="padding:0; overflow:hidden;">
        <img
          src="${escapeHtml(course.image)}"
          alt="${escapeHtml(course.title)}"
          loading="lazy"
          style="width:100%; height:100%; object-fit:cover; display:block;"
         
        />
      </div>
        <div class="p-6 flex flex-col flex-1">
          <div class="flex items-center gap-2 mb-3">
            ${course.isNew ? '<span class="course-badge">NEW</span>' : ''}
            <span class="course-badge">${escapeHtml(course.status)}</span>
          </div>
          <h3 class="font-display font-semibold text-lg">${escapeHtml(course.title)}</h3>
          <p class="text-paper/60 text-sm mt-2">${escapeHtml(course.short)}</p>
          <div class="course-meta-row mt-4">
            <span>${escapeHtml(course.duration)}</span>
            <span>${escapeHtml(course.mode)}</span>
          </div>
          <div class="course-meta-row mt-2">
            <span>${escapeHtml(course.level)}</span>
            <span>${escapeHtml(course.fee)}</span>
          </div>
  
          <button class="accordion-trigger mt-5 text-paper/80" data-outline-toggle="${course.id}">
            View Course Outline <span class="faq-plus" data-outline-icon="${course.id}">+</span>
          </button>
          <div class="accordion-panel" id="outline-${course.id}"></div>
  
          <div class="flex gap-3 mt-5">
            <a href="${course.outline}" download class="btn-outline-sm flex-1 text-center">Download Outline</a>
            <button data-open-register data-course="${escapeHtml(course.title)}" class="btn-primary-sm flex-1">Enroll Now</button>
          </div>
        </div>
      </div>
    `).join("");
  
    // Populate outline accordions
    courses.forEach(course => {
      const panel = document.getElementById(`outline-${course.id}`);
      panel.innerHTML = course.modules.map(mod => `
        <div class="accordion-item">
          <div class="py-3">
            <p class="font-semibold text-sm">${escapeHtml(mod.title)}</p>
            <ul class="mt-2 flex flex-col gap-1">
              ${mod.items.map(item => `<li class="text-paper/60 text-sm flex items-center gap-2"><span class="text-crimsonBright">›</span>${escapeHtml(item)}</li>`).join("")}
            </ul>
          </div>
        </div>
      `).join("");
    });
  
    grid.querySelectorAll("[data-outline-toggle]").forEach(btn => {
      btn.addEventListener("click", () => {
        const id = btn.getAttribute("data-outline-toggle");
        const panel = document.getElementById(`outline-${id}`);
        const icon = document.querySelector(`[data-outline-icon="${id}"]`);
        const isOpen = panel.classList.toggle("open");
        panel.style.maxHeight = isOpen ? panel.scrollHeight + "px" : "0px";
        icon.style.transform = isOpen ? "rotate(45deg)" : "rotate(0deg)";
      });
    });
  }
  
  /* ================= FACULTY ================= */
  function renderFaculty() {
    const grid = document.getElementById("facultyGrid");
    grid.innerHTML = faculty.map(f => `
      <div class="faculty-card" data-reveal>
        <div class="faculty-photo">${initials(f.name)}</div>
        <h3 class="font-display font-semibold mt-4">${escapeHtml(f.name)}</h3>
        <p class="text-crimsonBright text-sm mt-1">${escapeHtml(f.designation)}</p>
        <p class="text-paper/50 text-xs font-mono mt-2">${escapeHtml(f.experience)}</p>
        <p class="text-paper/60 text-xs mt-2">${escapeHtml(f.specialization)}</p>
        <p class="text-paper/50 text-xs mt-3">${escapeHtml(f.bio)}</p>
        <a href="${f.linkedin}" target="_blank" rel="noopener" class="inline-flex items-center gap-1 mt-4 text-xs font-mono text-paper/60 hover:text-crimsonBright">🔗 LinkedIn</a>
      </div>
    `).join("");
  }
  
  function initials(name) {
    return name.split(" ").map(w => w[0]).join("").slice(0, 2).toUpperCase();
  }
  
  /* ================= TESTIMONIALS ================= */
  let testIndex = 0;
  function renderTestimonials() {
    const track = document.getElementById("testimonialTrack");
    const dots = document.getElementById("testDots");
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    dots.innerHTML = testimonials.map((_, i) => `<span class="test-dot ${i === 0 ? 'active' : ''}" data-dot="${i}"></span>`).join("");
  
    function render() {
      const t = testimonials[testIndex];
      track.innerHTML = `
        <p class="text-crimsonBright text-lg mb-4">${"★".repeat(t.rating)}${"☆".repeat(5 - t.rating)}</p>
        <p class="text-paper/80 text-lg leading-relaxed">"${escapeHtml(t.text)}"</p>
        <div class="mt-6 flex items-center justify-center gap-3">
          <div class="faculty-photo" style="width:44px;height:44px;font-size:14px;">${initials(t.name)}</div>
          <div class="text-left">
            <p class="font-semibold text-sm">${escapeHtml(t.name)}</p>
            <p class="text-paper/50 text-xs font-mono">${escapeHtml(t.course)}</p>
          </div>
        </div>
      `;
      dots.querySelectorAll("[data-dot]").forEach(d => d.classList.toggle("active", Number(d.dataset.dot) === testIndex));
    }
  
    function paint() {
      if (prefersReducedMotion) { render(); return; }
      track.classList.add("fade-out");
      setTimeout(() => {
        render();
        track.classList.remove("fade-out");
      }, 220);
    }
    render();
  
    document.getElementById("testPrev").addEventListener("click", () => {
      testIndex = (testIndex - 1 + testimonials.length) % testimonials.length;
      paint();
      restartAutoplay();
    });
    document.getElementById("testNext").addEventListener("click", () => {
      testIndex = (testIndex + 1) % testimonials.length;
      paint();
      restartAutoplay();
    });
    dots.addEventListener("click", e => {
      if (e.target.dataset.dot === undefined) return;
      testIndex = Number(e.target.dataset.dot);
      paint();
      restartAutoplay();
    });
  
    // Autoplay — pauses while the user hovers/focuses the carousel and
    // resets whenever they interact manually, so it never fights the user.
    let autoplayTimer;
    const carousel = track.closest("section");
  
    function startAutoplay() {
      if (prefersReducedMotion) return;
      autoplayTimer = setInterval(() => {
        testIndex = (testIndex + 1) % testimonials.length;
        paint();
      }, 6000);
    }
    function stopAutoplay() { clearInterval(autoplayTimer); }
    function restartAutoplay() { stopAutoplay(); startAutoplay(); }
  
    startAutoplay();
    if (carousel) {
      carousel.addEventListener("mouseenter", stopAutoplay);
      carousel.addEventListener("mouseleave", startAutoplay);
      carousel.addEventListener("focusin", stopAutoplay);
      carousel.addEventListener("focusout", startAutoplay);
    }
  }
  
  /* ================= VIDEO FEEDBACK ================= */
  function renderVideoFeedback() {
    const grid = document.getElementById("videoGrid");
    grid.innerHTML = videoFeedback.map((v, i) => `
      <div class="video-card" data-reveal data-video-index="${i}">
        <div class="video-thumb">
          <span class="play-btn">▶</span>
        </div>
        <div class="p-5">
          <p class="font-semibold">${escapeHtml(v.name)}</p>
          <p class="text-crimsonBright text-xs font-mono mt-1">${escapeHtml(v.course)}</p>
          <p class="text-paper/60 text-sm mt-2">${escapeHtml(v.description)}</p>
        </div>
      </div>
    `).join("");
  
    grid.querySelectorAll("[data-video-index]").forEach(card => {
      card.addEventListener("click", () => {
        const v = videoFeedback[Number(card.dataset.videoIndex)];
        const content = document.getElementById("videoModalContent");
        if (v.type === "youtube") {
          content.innerHTML = `<iframe class="w-full h-full" src="${v.src}" title="${escapeHtml(v.name)} feedback" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>`;
        } else {
          content.innerHTML = `<video class="w-full h-full" controls autoplay src="${v.src}"></video>`;
        }
        openModal("videoModal");
      });
    });
  }
  
  /* ================= GALLERY ================= */
  function renderGallery() {
    const grid = document.getElementById("galleryGrid");
    grid.innerHTML = gallery.map((g, i) => `
      <div class="gallery-item" data-reveal data-gallery-index="${i}">
        <span>${escapeHtml(g.caption)}</span>
      </div>
    `).join("");
  
    grid.querySelectorAll("[data-gallery-index]").forEach(item => {
      item.addEventListener("click", () => {
        const g = gallery[Number(item.dataset.galleryIndex)];
        document.getElementById("lightboxImage").src = g.image;
        document.getElementById("lightboxImage").alt = g.caption;
        document.getElementById("lightboxCaption").textContent = g.caption;
        openModal("lightbox");
      });
    });
  }
  
  /* ================= FAQ ================= */
  function renderFaq() {
    const list = document.getElementById("faqList");
    list.innerHTML = faqs.map((f, i) => `
      <div class="faq-item" data-reveal>
        <button class="faq-trigger" aria-expanded="false" aria-controls="faq-panel-${i}" data-faq-toggle="${i}">
          <span>${escapeHtml(f.q)}</span>
          <span class="faq-plus">+</span>
        </button>
        <div class="faq-panel" id="faq-panel-${i}">
          <p class="px-5 pb-5 text-paper/60 text-sm leading-relaxed">${escapeHtml(f.a)}</p>
        </div>
      </div>
    `).join("");
  
    list.querySelectorAll("[data-faq-toggle]").forEach(btn => {
      btn.addEventListener("click", () => {
        const panel = document.getElementById(btn.getAttribute("aria-controls"));
        const isOpen = panel.classList.toggle("open");
        panel.style.maxHeight = isOpen ? panel.scrollHeight + "px" : "0px";
        btn.setAttribute("aria-expanded", String(isOpen));
      });
    });
  }
  
  /* ================= COURSE SELECT + FOOTER COURSES ================= */
  function populateCourseSelect() {
    const select = document.getElementById("regCourse");
    courseOptions.forEach(title => {
      const opt = document.createElement("option");
      opt.value = title;
      opt.textContent = title;
      select.appendChild(opt);
    });
  }
  
  function populateFooterCourses() {
    const list = document.getElementById("footerCourses");
    list.innerHTML = courses.map(c => `<li><a href="#courses" class="footer-link">${escapeHtml(c.title)}</a></li>`).join("");
  }
  
  /* ================= MODALS ================= */
  function initModals() {
    document.querySelectorAll("[data-open-register]").forEach(btn => {
      btn.addEventListener("click", () => {
        openModal("registerModal");
        const course = btn.getAttribute("data-course");
        if (course) {
          const select = document.getElementById("regCourse");
          if ([...select.options].some(o => o.value === course)) select.value = course;
        }
      });
    });
  
    document.querySelectorAll("[data-close-modal]").forEach(btn => {
      btn.addEventListener("click", () => {
        const overlay = btn.closest(".modal-overlay");
        closeModal(overlay.id);
      });
    });
  
    document.querySelectorAll(".modal-overlay").forEach(overlay => {
      overlay.addEventListener("click", e => {
        if (e.target === overlay) closeModal(overlay.id);
      });
    });
  
    document.addEventListener("keydown", e => {
      if (e.key === "Escape") {
        document.querySelectorAll(".modal-overlay:not(.hidden)").forEach(o => closeModal(o.id));
      }
    });
  }
  
  function openModal(id) {
    const el = document.getElementById(id);
    el.classList.remove("hidden");
    document.body.style.overflow = "hidden";
  }
  
  function closeModal(id) {
    const el = document.getElementById(id);
    el.classList.add("hidden");
    document.body.style.overflow = "";
    if (id === "videoModal") document.getElementById("videoModalContent").innerHTML = "";
    if (id === "registerModal") resetRegistrationView();
  }
  
  function resetRegistrationView() {
    document.getElementById("registerFormView").classList.remove("hidden");
    document.getElementById("registerSuccessView").classList.add("hidden");
  }
  
  /* ================= VALIDATION HELPERS ================= */
  function showFieldError(input, message) {
    input.classList.toggle("input-error", Boolean(message));
    const errorEl = document.querySelector(`[data-error-for="${input.id}"]`);
    if (errorEl) errorEl.textContent = message || "";
  }
  
  function isValidEmail(value) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
  }
  /* ================= REGISTRATION FORM ================= */
  function initRegistrationForm() {
    const form = document.getElementById("registrationForm");
    const submitBtn = document.getElementById("registerSubmitBtn");
    const failMsg = document.getElementById("registerFailMsg");
  
    form.addEventListener("submit", async e => {
      e.preventDefault();
      failMsg.classList.add("hidden");
  
      const fields = {
        regName: form.fullName,
        regEmail: form.email,
        regPhone: form.phone,
        regWhatsapp: form.whatsapp,
        regCourse: form.course,
        regTiming: form.timing,
      };
  
      let valid = true;
  
      /* ---------- VALIDATION ---------- */
  
      if (!fields.regName.value.trim()) {
        showFieldError(fields.regName, "Full name is required.");
        valid = false;
      } else {
        showFieldError(fields.regName, "");
      }
  
      if (!fields.regPhone.value.trim()) {
        showFieldError(fields.regPhone, "Phone number is required.");
        valid = false;
      } else {
        showFieldError(fields.regPhone, "");
      }
  
      if (!fields.regWhatsapp.value.trim()) {
        showFieldError(fields.regWhatsapp, "WhatsApp number is required.");
        valid = false;
      } else {
        showFieldError(fields.regWhatsapp, "");
      }
  
      if (
        !fields.regEmail.value.trim() ||
        !isValidEmail(fields.regEmail.value.trim())
      ) {
        showFieldError(
          fields.regEmail,
          "Enter a valid email address."
        );
        valid = false;
      } else {
        showFieldError(fields.regEmail, "");
      }
  
      if (!fields.regCourse.value) {
        showFieldError(
          fields.regCourse,
          "Please select a course."
        );
        valid = false;
      } else {
        showFieldError(fields.regCourse, "");
      }
  
      if (!fields.regTiming.value) {
        showFieldError(
          fields.regTiming,
          "Please select a preferred timing."
        );
        valid = false;
      } else {
        showFieldError(fields.regTiming, "");
      }
  
      if (!valid) return;
  
      /* ---------- CREATE RECORD ---------- */
  
      const formData = new FormData(form);
  
      // const registrationId =
      //   "REG-" +
      //   Math.random()
      //     .toString(36)
      //     .slice(2, 8)
      //     .toUpperCase();
  
      const now = new Date();
  
      const record = {
        // registrationId,
  
        date: now.toLocaleDateString(),
        time: now.toLocaleTimeString(),
  
        fullName: (formData.get("fullName") || "").trim(),
        fatherName: (formData.get("fatherName") || "").trim(),
  
        email: (formData.get("email") || "").trim(),
        phone: (formData.get("phone") || "").trim(),
        whatsapp: (formData.get("whatsapp") || "").trim(),
  
        city: (formData.get("city") || "").trim(),
        age: (formData.get("age") || "").trim(),
  
        course: formData.get("course") || "",
  
        education: (formData.get("education") || "").trim(),
  
        timing: formData.get("timing") || "",
  
        source: (formData.get("source") || "").trim(),
  
        message: (formData.get("message") || "").trim(),
  
        status: "New"
      };
  
      /* ---------- LOADING ---------- */
  
      submitBtn.disabled = true;
  
      const originalText = submitBtn.textContent;
  
      submitBtn.textContent = "Submitting Registration...";
  
      try {
  
        /* ==========================================
           GOOGLE SHEETS SUBMISSION
           ========================================== */
  
        if (
          !GOOGLE_SHEETS_CONFIG.enabled ||
          !GOOGLE_SHEETS_CONFIG.scriptUrl ||
          GOOGLE_SHEETS_CONFIG.scriptUrl ===
            "YOUR_GOOGLE_APPS_SCRIPT_WEB_APP_URL"
        ) {
          throw new Error(
            "Google Sheets configuration is missing."
          );
        }
  
        await fetch(
          GOOGLE_SHEETS_CONFIG.scriptUrl,
          {
            method: "POST",
  
            mode: "no-cors",
  
            headers: {
              "Content-Type": "text/plain;charset=utf-8"
            },
  
            body: JSON.stringify(record)
          }
        );
  
        /*
         * IMPORTANT:
         *
         * no-cors gives us an opaque response.
         * We cannot read Apps Script's JSON response.
         *
         * Therefore the request being completed means
         * the browser successfully sent the request.
         */
  
        /* ---------- LOCAL BACKUP ---------- */
  
        saveRegistrationLocally(record);
  
        /* ---------- SHOW SUCCESS ---------- */
  
        // document.getElementById(
        //   "registrationIdDisplay"
        // ).textContent = registrationId;
  
        document.getElementById(
          "registerFormView"
        ).classList.add("hidden");
  
        document.getElementById(
          "registerSuccessView"
        ).classList.remove("hidden");
  
        form.reset();
  
        showToast(
          "Registration submitted successfully!"
        );
  
      } catch (err) {
  
        console.error(
          "Registration Error:",
          err
        );
  
        failMsg.classList.remove("hidden");
  
        failMsg.textContent =
          "Registration could not be submitted. Please try again.";
  
      } finally {
  
        submitBtn.disabled = false;
  
        submitBtn.textContent = originalText;
  
      }
    });
  }
  
  
  /* ==========================================
     LOCAL STORAGE
     ========================================== */
  
  const REGISTRATIONS_KEY =
    "miCodingSchool_registrations";
  
  
  function saveRegistrationLocally(record) {
  
    try {
  
      const existing = JSON.parse(
        localStorage.getItem(REGISTRATIONS_KEY) || "[]"
      );
  
      existing.push(record);
  
      localStorage.setItem(
        REGISTRATIONS_KEY,
        JSON.stringify(existing)
      );
  
    } catch (error) {
  
      console.warn(
        "LocalStorage backup failed:",
        error
      );
  
    }
  }
  
  
  function getLocalRegistrations() {
  
    try {
  
      return JSON.parse(
        localStorage.getItem(REGISTRATIONS_KEY) || "[]"
      );
  
    } catch (error) {
  
      console.warn(
        "Unable to read local registrations:",
        error
      );
  
      return [];
  
    }
  }
  
  /* ================= CONTACT FORM ================= */
  function initContactForm() {
    const form = document.getElementById("contactForm");
    const successMsg = document.getElementById("contactSuccess");
  
    form.addEventListener("submit", e => {
      e.preventDefault();
      let valid = true;
  
      if (!form.name.value.trim()) { showFieldError(form.name, "Name is required."); valid = false; }
      else showFieldError(form.name, "");
  
      if (!form.email.value.trim() || !isValidEmail(form.email.value.trim())) {
        showFieldError(form.email, "Enter a valid email address."); valid = false;
      } else showFieldError(form.email, "");
  
      if (!form.message.value.trim()) { showFieldError(form.message, "Message is required."); valid = false; }
      else showFieldError(form.message, "");
  
      if (!valid) return;
  
      successMsg.classList.remove("hidden");
      form.reset();
      showToast("Message sent — thank you!");
    });
  }
  
  /* ================= TOAST ================= */
  function showToast(message) {
    let toast = document.getElementById("toast");
    if (!toast) {
      toast = document.createElement("div");
      toast.id = "toast";
      document.body.appendChild(toast);
    }
    toast.textContent = message;
    toast.classList.add("show");
    clearTimeout(showToast._t);
    showToast._t = setTimeout(() => toast.classList.remove("show"), 3000);
  }
  
  /* ================= SCROLL REVEAL ================= */
  function initScrollReveal() {
    const targets = document.querySelectorAll("[data-reveal]");
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("revealed");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    targets.forEach(t => observer.observe(t));
  }
  
  /* ================= COUNTERS ================= */
  function initCounters() {
    const counters = document.querySelectorAll(".counter");
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        animateCounter(entry.target);
        observer.unobserve(entry.target);
      });
    }, { threshold: 0.5 });
    counters.forEach(c => observer.observe(c));
  }
  
  function animateCounter(el) {
    const target = Number(el.dataset.count || 0);
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) {
      el.textContent = target;
      return;
    }
    const duration = 1400;
    const start = performance.now();
  
    function tick(now) {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      el.textContent = Math.round(eased * target);
      if (progress < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  }
  
  /* ================= HERO TYPING EFFECT ================= */
  function initHeroTyping() {
    const target = document.getElementById("heroTyping");
    if (!target) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const phrases = ["career ready", "job ready", "project ready", "future ready"];
    let phraseIndex = 0;
    let charIndex = phrases[0].length; // hero starts already showing the full first phrase
    let deleting = false;
  
    function loop() {
      const current = phrases[phraseIndex];
      if (!deleting) {
        charIndex++;
        if (charIndex > current.length) {
          deleting = true;
          setTimeout(loop, 1400);
          return;
        }
      } else {
        charIndex--;
        if (charIndex < 0) {
          deleting = false;
          phraseIndex = (phraseIndex + 1) % phrases.length;
          charIndex = 0;
        }
      }
      target.textContent = current.slice(0, Math.max(charIndex, 0));
      setTimeout(loop, deleting ? 45 : 90);
    }
    setTimeout(loop, 1600);
  }
  
  /* ================= UTILITIES ================= */
  function escapeHtml(str) {
    return String(str ?? "")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;");
  }