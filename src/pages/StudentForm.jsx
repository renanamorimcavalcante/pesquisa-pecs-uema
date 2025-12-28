import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import '../layout.css'

const API_URL = 'http://sh00040.teste.website/~renan675/api/save_student.php' // troque pela sua URL real

function StudentForm() {
  const navigate = useNavigate()

  const [form, setForm] = useState({
    nome: '',
    curso: '',
    periodo: '',
    usa_ia_trabalhos: '',
    usou_ia_quando_proibido: '',
    usou_ia_em_provas: '',
    percebe_impacto_aprendizado: '',
    percepcao_etica: '',
  })

  const [loading, setLoading] = useState(false)
  const [mensagem, setMensagem] = useState('')

  function handleChange(e) {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  async function handleSubmit(e) {
    e.preventDefault()
    setLoading(true)
    setMensagem('')

    try {
      const res = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })

      const data = await res.json()

      if (data.success) {
        setMensagem('Resposta enviada com sucesso. Obrigado pela participação!')
        setForm({
          nome: '',
          curso: '',
          periodo: '',
          usa_ia_trabalhos: '',
          usou_ia_quando_proibido: '',
          usou_ia_em_provas: '',
          percebe_impacto_aprendizado: '',
          percepcao_etica: '',
        })
      } else {
        setMensagem(data.message || 'Erro ao enviar resposta.')
      }
    } catch (err) {
      setMensagem('Erro de conexão com o servidor.')
      console.log(err)
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <div className="app-root">
        <div className="app-card">
          <header className="app-header">
            <button
              type="button"
              onClick={() => navigate('/')}
              style={{
                border: 'none',
                background: 'transparent',
                color: '#2563eb',
                fontSize: 13,
                padding: 0,
                marginBottom: 12,
                cursor: 'pointer',
              }}
            >
              ← Voltar para a página inicial
            </button>

            <p className="app-tagline">PECS · UEMA · Aluno(a)</p>
            <h1 className="app-title">Questionário para estudantes</h1>
            <p className="app-subtitle">
              Responda com sinceridade sobre o seu uso de ferramentas de inteligência artificial em
              atividades, trabalhos e avaliações acadêmicas.
            </p>
          </header>

          <form onSubmit={handleSubmit} className="form-grid">
            <fieldset className="form-section">
              <legend className="form-section-title">Identificação acadêmica</legend>

              <div className="form-field">
                <label htmlFor="nome">Nome (opcional):</label>
                <input
                  id="nome"
                  name="nome"
                  type="text"
                  value={form.nome}
                  onChange={handleChange}
                  placeholder="Ex.: Maria Sofia Cavalcante"
                />
              </div>

              <div className="form-field">
                <label htmlFor="curso">Curso:</label>
                <input
                  id="curso"
                  name="curso"
                  type="text"
                  value={form.curso}
                  onChange={handleChange}
                  placeholder="Ex.: Ensino Fundamental"
                  required
                />
              </div>

              <div className="form-field">
                <label htmlFor="periodo">Período / Série:</label>
                <input
                  id="periodo"
                  name="periodo"
                  type="text"
                  value={form.periodo}
                  onChange={handleChange}
                  placeholder="Ex.: 8º ano"
                  required
                />
              </div>
            </fieldset>

            <fieldset className="form-section">
              <legend className="form-section-title">Uso de IA em atividades</legend>

              <div className="form-field">
                <label htmlFor="usa_ia_trabalhos">
                  1 - Com que frequência você utiliza IA (como ChatGPT, IA do Whatsapp, etc...) para fazer
                  atividades e trabalhos acadêmicos?
                </label>
                <select
                  id="usa_ia_trabalhos"
                  name="usa_ia_trabalhos"
                  value={form.usa_ia_trabalhos}
                  onChange={handleChange}
                  required
                >
                  <option value="">Selecione uma opção</option>
                  <option value="NUNCA">Nunca</option>
                  <option value="RARAMENTE">Raramente</option>
                  <option value="ALGUMAS_VEZES">Algumas vezes</option>
                  <option value="FREQUENTEMENTE">Frequentemente</option>
                  <option value="SEMPRE">Sempre</option>
                </select>
              </div>

              <div className="form-field">
                <label htmlFor="usou_ia_quando_proibido">
                  2 - Você já utilizou IA em atividades ou trabalhos mesmo quando o professor não
                  permitia?
                </label>
                <select
                  id="usou_ia_quando_proibido"
                  name="usou_ia_quando_proibido"
                  value={form.usou_ia_quando_proibido}
                  onChange={handleChange}
                  required
                >
                  <option value="">Selecione uma opção</option>
                  <option value="SIM">Sim</option>
                  <option value="NAO">Não</option>
                  <option value="PREFIRO_NAO_RESPONDER">Prefiro não responder</option>
                </select>
              </div>

              <div className="form-field">
                <label htmlFor="usou_ia_em_provas">
                  3 - Você já usou IA em provas ou testes sem autorização dos professores, ou
                  conhece alguém que já fez isso?
                </label>
                <select
                  id="usou_ia_em_provas"
                  name="usou_ia_em_provas"
                  value={form.usou_ia_em_provas}
                  onChange={handleChange}
                  required
                >
                  <option value="">Selecione uma opção</option>
                  <option value="SIM">Sim, já usei</option>
                  <option value="CONHECO_QUEM_JA_USOU">
                    Não usei, mas conheço quem já usou
                  </option>
                  <option value="NAO">Não</option>
                  <option value="PREFIRO_NAO_RESPONDER">Prefiro não responder</option>
                </select>
              </div>

              <div className="form-field">
                <label htmlFor="percebe_impacto_aprendizado">
                  4 - De forma geral, como você percebe o impacto do uso de IA no seu aprendizado?
                </label>
                <select
                  id="percebe_impacto_aprendizado"
                  name="percebe_impacto_aprendizado"
                  value={form.percebe_impacto_aprendizado}
                  onChange={handleChange}
                  required
                >
                  <option value="">Selecione uma opção</option>
                  <option value="MUITO_NEGATIVO">Muito negativo</option>
                  <option value="NEGATIVO">Mais negativo do que positivo</option>
                  <option value="NEUTRO">Neutro</option>
                  <option value="POSITIVO">Mais positivo do que negativo</option>
                  <option value="MUITO_POSITIVO">Muito positivo</option>
                </select>
              </div>

              <div className="form-field">
                <label htmlFor="percepcao_etica">
                  5 - Na sua opinião, utilizar IA em trabalhos e atividades acadêmicas quando o
                  professor não solicita explicitamente é:
                </label>
                <select
                  id="percepcao_etica"
                  name="percepcao_etica"
                  value={form.percepcao_etica}
                  onChange={handleChange}
                  required
                >
                  <option value="">Selecione uma opção</option>
                  <option value="CORRETO">Correto</option>
                  <option value="DEPENDE">Depende da situação</option>
                  <option value="INCORRETO">Incorreto</option>
                </select>
              </div>
            </fieldset>

            <div className="form-actions">
              <button type="button" className="btn-secondary" onClick={() => navigate('/')}>
                Cancelar
              </button>
              <button type="submit" className="btn-primary" disabled={loading}>
                {loading ? 'Enviando...' : 'Enviar resposta'}
              </button>
            </div>

            {mensagem && <p className="form-message">{mensagem}</p>}
          </form>
        </div>
      </div>

      <footer className="page-footer">
        © {new Date().getFullYear()} Todos os direitos reservados · Desenvolvido por Renan Cavalcante
      </footer>
    </>
  )
}

export default StudentForm
