import templates from "./templates-config.js";
import Navigation from "./navigation.js";

class TemplateViewer {
  constructor() {
    this.templates = templates;
    this.navigation = new Navigation();
    this.currentTemplate = "projeto-criado";
    this.init();
  }

  init() {
    this.setupEventListeners();
    this.loadTemplate(this.currentTemplate);
  }

  setupEventListeners() {
    // Botões de navegação
    document.getElementById("prevBtn")?.addEventListener("click", () => {
      const prevTemplate = this.navigation.previousTemplate();
      if (prevTemplate) {
        this.loadTemplate(prevTemplate);
      }
    });

    document.getElementById("nextBtn")?.addEventListener("click", () => {
      const nextTemplate = this.navigation.nextTemplate();
      if (nextTemplate) {
        this.loadTemplate(nextTemplate);
      }
    });

    // Botão do menu mobile
    document
      .querySelector(".mobile-menu-btn")
      ?.addEventListener("click", () => {
        this.toggleMobileMenu();
      });

    // Botões dos templates na sidebar
    document.querySelectorAll(".template-btn").forEach((btn) => {
      btn.addEventListener("click", (e) => {
        const templateKey = e.target.closest(".template-item").dataset.template;
        this.loadTemplate(templateKey);
      });
    });
  }

  loadTemplate(templateKey) {
    const template = this.templates[templateKey];
    if (!template) return;

    this.currentTemplate = templateKey;
    this.navigation.setCurrentTemplate(templateKey);

    // Atualizar título
    const titleElement = document.getElementById("currentTitle");
    if (titleElement) {
      titleElement.textContent = `Template: ${template.title}`;
    }

    // Atualizar info do template
    const infoElement = document.getElementById("templateInfo");
    if (infoElement) {
      infoElement.innerHTML = `
        <h3>Template: ${template.title}</h3>
        <p>${template.description}</p>
      `;
    }

    // Mostrar loading
    this.showLoading();

    // Carregar template no iframe
    const frame = document.getElementById("templateFrame");
    if (frame) {
      frame.src = template.file;

      // Handlers para loading
      frame.onload = () => {
        this.hideLoading();
      };

      frame.onerror = () => {
        this.hideLoading();
        this.showError();
      };
    }

    // Atualizar seleção na sidebar
    this.updateSidebarSelection(templateKey);

    // Fechar menu mobile se estiver aberto
    if (window.innerWidth <= 768) {
      document.getElementById("sidebar")?.classList.remove("mobile-open");
    }
  }

  updateSidebarSelection(templateKey) {
    document.querySelectorAll(".template-item").forEach((item) => {
      item.classList.remove("active");
    });

    const activeItem = document.querySelector(
      `[data-template="${templateKey}"]`
    );
    if (activeItem) {
      activeItem.classList.add("active");
    }
  }

  showLoading() {
    const loadingElement = document.getElementById("loading");
    const errorElement = document.getElementById("error");

    if (loadingElement) loadingElement.style.display = "flex";
    if (errorElement) errorElement.style.display = "none";
  }

  hideLoading() {
    const loadingElement = document.getElementById("loading");
    if (loadingElement) loadingElement.style.display = "none";
  }

  showError() {
    const errorElement = document.getElementById("error");
    if (errorElement) errorElement.style.display = "block";
  }

  toggleMobileMenu() {
    const sidebar = document.getElementById("sidebar");
    if (sidebar) {
      sidebar.classList.toggle("mobile-open");
    }
  }

  // Métodos para expor globalmente (compatibilidade)
  previousTemplate() {
    const prevTemplate = this.navigation.previousTemplate();
    if (prevTemplate) {
      this.loadTemplate(prevTemplate);
    }
  }

  nextTemplate() {
    const nextTemplate = this.navigation.nextTemplate();
    if (nextTemplate) {
      this.loadTemplate(nextTemplate);
    }
  }
}

export default TemplateViewer;
