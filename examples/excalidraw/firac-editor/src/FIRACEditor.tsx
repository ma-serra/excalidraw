import React, { useState } from 'react';

interface FIRACSection {
  key: string;
  title: string;
  content: string;
  placeholder: string;
  description: string;
}

const FIRACEditor: React.FC = () => {
  const [sections, setSections] = useState<Record<string, string>>({
    facts: '',
    issue: '',
    rule: '',
    application: '',
    conclusion: '',
  });

  const firacSections: FIRACSection[] = [
    {
      key: 'facts',
      title: 'F - Facts (Fatos)',
      content: sections.facts,
      placeholder: 'Descreva os fatos relevantes do caso...',
      description: 'Descreva os fatos objetivos e relevantes do caso legal.',
    },
    {
      key: 'issue',
      title: 'I - Issue (Questão)',
      content: sections.issue,
      placeholder: 'Qual é a questão jurídica principal?',
      description: 'Identifique a questão legal principal que precisa ser resolvida.',
    },
    {
      key: 'rule',
      title: 'R - Rule (Regra)',
      content: sections.rule,
      placeholder: 'Cite a lei, jurisprudência ou doutrina aplicável...',
      description: 'Cite a lei, jurisprudência ou princípios legais aplicáveis.',
    },
    {
      key: 'application',
      title: 'A - Application (Aplicação)',
      content: sections.application,
      placeholder: 'Aplique a regra aos fatos do caso...',
      description: 'Aplique a regra legal aos fatos específicos do caso.',
    },
    {
      key: 'conclusion',
      title: 'C - Conclusion (Conclusão)',
      content: sections.conclusion,
      placeholder: 'Qual é a conclusão baseada na análise?',
      description: 'Apresente a conclusão baseada na análise realizada.',
    },
  ];

  const handleSectionChange = (key: string, value: string) => {
    setSections((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const handleClear = () => {
    if (window.confirm('Tem certeza que deseja limpar todo o conteúdo?')) {
      setSections({
        facts: '',
        issue: '',
        rule: '',
        application: '',
        conclusion: '',
      });
    }
  };

  const handleExport = () => {
    const exportData = {
      date: new Date().toISOString(),
      sections: sections,
    };
    const dataStr = JSON.stringify(exportData, null, 2);
    const dataUri = 'data:application/json;charset=utf-8,' + encodeURIComponent(dataStr);
    const exportFileDefaultName = `firac-analysis-${Date.now()}.json`;

    const linkElement = document.createElement('a');
    linkElement.setAttribute('href', dataUri);
    linkElement.setAttribute('download', exportFileDefaultName);
    linkElement.click();
  };

  return (
    <div className="firac-container">
      <header className="firac-header">
        <h1>FIRAC Legal Editor</h1>
        <p className="subtitle">Editor Estruturado para Análise Jurídica</p>
        <div className="header-actions">
          <button onClick={handleExport} className="btn btn-primary">
            Exportar Análise
          </button>
          <button onClick={handleClear} className="btn btn-secondary">
            Limpar Tudo
          </button>
        </div>
      </header>

      <main className="firac-content">
        {firacSections.map((section) => (
          <section key={section.key} className="firac-section">
            <div className="section-header">
              <h2>{section.title}</h2>
              <p className="section-description">{section.description}</p>
            </div>
            <textarea
              className="section-textarea"
              value={sections[section.key]}
              onChange={(e) =>
                handleSectionChange(section.key, e.target.value)
              }
              placeholder={section.placeholder}
              rows={6}
            />
            <div className="char-count">
              {sections[section.key].length} caracteres
            </div>
          </section>
        ))}
      </main>

      <footer className="firac-footer">
        <p>
          FIRAC Editor v1.0 - Ferramenta para análise jurídica estruturada
        </p>
      </footer>
    </div>
  );
};

export default FIRACEditor;
