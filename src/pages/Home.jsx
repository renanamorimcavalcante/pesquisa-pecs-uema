import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import '../layout.css'
import { Instagram, Linkedin } from 'lucide-react'


function Home() {
  const navigate = useNavigate()

  useEffect(() => {
    async function trackVisit() {
      try {
        await fetch('http://sh00040.teste.website/~renan675/api/track_visit.php', {
          method: 'POST',
        })
      } catch {
        // silencioso, pra não impactar o usuário
      }
    }

    trackVisit()
  }, [])

  return (
    <>
      <div className="app-root">
        <div className="app-card">
          <header className="app-header">
            <p className="app-tagline">PECS · UEMA</p>
            <h1 className="app-title">Pesquisa sobre uso de IA na educação</h1>

            <div className="app-subtitle">
              Questionário para mapear como ferramentas de inteligência artificial vêm sendo
              utilizadas por <strong>alunos</strong> e <strong>professores</strong>. Selecione
              abaixo o seu perfil para iniciar a participação.
              <div style={{ marginTop: '15px' }}>
                <strong style={{ color: 'red' }}>NOTA: </strong>
                <span style={{ color: 'green', fontWeight: 'bold' }}>
                  Sua identidade está protegida!
                </span>
                <span
                  style={{
                    display: 'block',
                    fontSize: '0.9em',
                    marginTop: '5px',
                  }}
                >
                  Fique à vontade para responder com sinceridade: este formulário é totalmente
                  anônimo. Não utilizaremos seus dados para identificar você, nem compartilharemos
                  suas respostas individualmente. O objetivo é apenas entender como a IA está sendo
                  usada no nosso dia a dia escolar; as respostas servem exclusivamente para fins
                  estatísticos sobre o uso de IA na educação.
                </span>
              </div>
            </div>
          </header>

          <div className="app-options-grid">
            <button
              type="button"
              onClick={() => navigate('/aluno')}
              className="card-button card-button--blue"
            >
              <span className="chip chip--blue">Aluno(a)</span>
              <h2 className="card-title">Responder como aluno</h2>
              <p className="card-text">
                Questionário sobre como você utiliza IA em atividades, trabalhos e avaliações
                acadêmicas.
              </p>
            </button>

            <button
              type="button"
              // onClick={() => navigate('/professor')}
              onClick={() => navigate('/')}
              className="card-button card-button--green"
            >
              <span className="chip chip--green">Professor(a)</span>
              <h2 className="card-title">Responder como professor</h2>
              <p className="card-text">
                Questionário sobre uso de IA no planejamento de aulas, elaboração de avaliações e
                percepção do uso por estudantes.
              </p>
            </button>
          </div>

          <section className="researcher-section">
            <div className="researcher-avatar-wrapper">
              <img
                src="/me.jpg"
                alt="Foto do pesquisador Renan Cavalcante"
                className="researcher-avatar"
              />
            </div>

            <div className="researcher-info">
              <p className="researcher-title">Quem é o pesquisador?</p>
              <p className="researcher-text">
                Esta pesquisa está sendo conduzida por <strong>Renan Cavalcante</strong>.
              </p>
              <p className="researcher-bio">
                Consultor técnico e desenvolvedor ServiceNow, 35 anos, mestrando em Engenharia da
                Computação (PECS) na Universidade Estadual do Maranhão. Pai da Maria Sofia e do Pedro
                Levi e casado com Rafaela Cavalcante, é apaixonado por tecnologia, transformação
                digital e música, pesquisando e promovendo o uso responsável da inteligência
                artificial na educação no Brasil.
              </p>

              <div className="researcher-links">
                <a
                  className="researcher-link"
                  href="https://www.instagram.com/iamrenancavalcante/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Instagram size={16} strokeWidth={1.8} />
                  <span>Instagram</span>
                </a>
                <a
                  className="researcher-link"
                  href="https://www.linkedin.com/in/renan-acavalcante/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Linkedin size={16} strokeWidth={1.8} />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>
          </section>

          <p className="app-footer-note">
            Os dados coletados serão utilizados exclusivamente para fins acadêmicos, de forma
            agregada e sem identificação individual.
          </p>
        </div>
      </div>

      <footer className="page-footer">
        © {new Date().getFullYear()} Todos os direitos reservados · Desenvolvido por Renan Cavalcante
      </footer>
    </>
  )
}

export default Home
