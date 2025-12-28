# Pesquisa sobre uso de IA na educação – PECS/UEMA

Aplicação web feita com **React + Vite** para coletar, de forma anônima, dados sobre o uso de ferramentas de inteligência artificial por **alunos** e **professores** da Universidade Estadual do Maranhão (UEMA).

O objetivo é apoiar uma pesquisa de mestrado em Engenharia da Computação (PECS), analisando como a IA vem sendo utilizada no contexto educacional e quais percepções a comunidade acadêmica tem sobre seu impacto.

---

## Funcionalidades

- Página inicial com:
  - Apresentação da pesquisa e aviso de anonimato das respostas.
  - Escolha de perfil: **Aluno(a)** ou **Professor(a)**.
  - Seção “Quem é o pesquisador?” com informações de contato.

- Formulário para **alunos**:
  - Identificação acadêmica (curso, período).
  - Perguntas sobre uso de IA em atividades, trabalhos e provas.
  - Percepção sobre impacto da IA no aprendizado e aspectos éticos.

- Formulário para **professores**:
  - Identificação acadêmica (curso/departamento).
  - Uso de IA no planejamento de aulas e elaboração de avaliações.
  - Visão sobre o uso de IA por estudantes dentro e fora da sala de aula.

- Armazenamento das respostas em banco **MySQL** via API em **PHP**, hospedada no cPanel.

---

## Tecnologias utilizadas

- **Front-end**
  - React + Vite
  - React Router DOM
  - CSS puro (layout institucional reutilizável)
  - Ícones: `lucide-react`

- **Back-end**
  - PHP (endpoints REST simples)
  - MySQL (armazenamento das respostas)
  - Hospedagem em servidor compartilhado com cPanel

---

## Utilização do projeto não autorizada
