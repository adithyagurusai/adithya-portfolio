(() => {
  const toggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector("#primary-nav");

  if (toggle && nav) {
    const closeMenu = () => {
      toggle.setAttribute("aria-expanded", "false");
      nav.classList.remove("is-open");
      document.body.classList.remove("menu-open");
    };

    toggle.addEventListener("click", () => {
      const isOpen = toggle.getAttribute("aria-expanded") === "true";
      toggle.setAttribute("aria-expanded", String(!isOpen));
      nav.classList.toggle("is-open", !isOpen);
      document.body.classList.toggle("menu-open", !isOpen);
    });

    nav.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", closeMenu);
    });

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") closeMenu();
    });

    window.addEventListener("resize", () => {
      if (window.innerWidth > 680) closeMenu();
    });
  }

  // Keep project contact links useful without inventing live demo URLs.
  document.querySelectorAll("[data-project-contact]").forEach((link) => {
    link.addEventListener("click", () => {
      const projectName = link.getAttribute("data-project-contact");
      const emailLink = document.querySelector("#email-link");
      if (emailLink && projectName) {
        const email = "adithyakukkapalli@gmail.com";
        emailLink.href = `mailto:${email}?subject=${encodeURIComponent(`Question about ${projectName}`)}`;
      }
    });
  });
})();
