import TemplateViewer from "./template-viewer.js";

// Inicializar aplicação quando o DOM estiver carregado
document.addEventListener("DOMContentLoaded", () => {
  // Criar instância do visualizador de templates
  const templateViewer = new TemplateViewer();

  // Expor globalmente para compatibilidade com handlers inline
  window.templateViewer = templateViewer;

  // Expor funções globais para compatibilidade
  window.loadTemplate = (templateKey) => {
    templateViewer.loadTemplate(templateKey);
  };

  window.previousTemplate = () => {
    templateViewer.previousTemplate();
  };

  window.nextTemplate = () => {
    templateViewer.nextTemplate();
  };

  window.toggleMobileMenu = () => {
    templateViewer.toggleMobileMenu();
  };

  window.toggleSidebar = () => {
    templateViewer.toggleSidebar();
  };
});

// Exportar para uso em outros módulos se necessário
export default TemplateViewer;
