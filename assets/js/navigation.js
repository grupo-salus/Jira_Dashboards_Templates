import templates from "./templates-config.js";

class Navigation {
  constructor() {
    this.currentTemplate = "projeto-criado";
    this.templateKeys = Object.keys(templates);
    this.setupKeyboardShortcuts();
  }

  getCurrentIndex() {
    return this.templateKeys.indexOf(this.currentTemplate);
  }

  updateNavigationButtons() {
    const currentIndex = this.getCurrentIndex();
    const prevBtn = document.getElementById("prevBtn");
    const nextBtn = document.getElementById("nextBtn");

    if (prevBtn) prevBtn.disabled = currentIndex === 0;
    if (nextBtn)
      nextBtn.disabled = currentIndex === this.templateKeys.length - 1;
  }

  previousTemplate() {
    const currentIndex = this.getCurrentIndex();
    if (currentIndex > 0) {
      return this.templateKeys[currentIndex - 1];
    }
    return null;
  }

  nextTemplate() {
    const currentIndex = this.getCurrentIndex();
    if (currentIndex < this.templateKeys.length - 1) {
      return this.templateKeys[currentIndex + 1];
    }
    return null;
  }

  goToTemplate(index) {
    if (index >= 0 && index < this.templateKeys.length) {
      return this.templateKeys[index];
    }
    return null;
  }

  setCurrentTemplate(templateKey) {
    if (this.templateKeys.includes(templateKey)) {
      this.currentTemplate = templateKey;
      this.updateNavigationButtons();
    }
  }

  setupKeyboardShortcuts() {
    document.addEventListener("keydown", (e) => {
      switch (e.key) {
        case "ArrowLeft":
          e.preventDefault();
          const prevTemplate = this.previousTemplate();
          if (prevTemplate) {
            window.templateViewer.loadTemplate(prevTemplate);
          }
          break;
        case "ArrowRight":
          e.preventDefault();
          const nextTemplate = this.nextTemplate();
          if (nextTemplate) {
            window.templateViewer.loadTemplate(nextTemplate);
          }
          break;
        case "Escape":
          if (window.innerWidth <= 768) {
            document.getElementById("sidebar").classList.remove("mobile-open");
          }
          break;
        case "1":
        case "2":
        case "3":
        case "4":
        case "5":
        case "6":
        case "7":
        case "8":
        case "9":
          e.preventDefault();
          const templateIndex = parseInt(e.key) - 1;
          const targetTemplate = this.goToTemplate(templateIndex);
          if (targetTemplate) {
            window.templateViewer.loadTemplate(targetTemplate);
          }
          break;
        case "0":
          e.preventDefault();
          // Número 10 (0 representa o décimo template)
          const tenthTemplate = this.goToTemplate(9);
          if (tenthTemplate) {
            window.templateViewer.loadTemplate(tenthTemplate);
          }
          break;
      }
    });
  }
}

export default Navigation;
