import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import '../layout.css'

//const API_URL = 'http://sh00040.teste.website/~renan675/api/save_teacher.php' // troque pela URL real
const API_URL = 'https://bushidoacademia.com.br/api/save_teacher.php'


function TeacherForm() {
  const navigate = useNavigate()

  const [form, setForm] = useState({
    nome: '',
    departamento: '',
    utiliza_ia_planejamento: '',
    valida_informacoes_ia: '',
    provas_criadas_por: '',
    julga_ia_sala: '',
    julga_ia_fora_sala: '',
    ia_ajuda_ou_atrapalha: '',
    flagrou_alunos_ia: '',
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
          departamento: '',
          utiliza_ia_planejamento: '',
          valida_informacoes_ia: '',
          provas_criadas_por: '',
          julga_ia_sala: '',
          julga_ia_fora_sala: '',
          ia_ajuda_ou_atrapalha: '',
          flagrou_alunos_ia: '',
        })
      } else {
        setMensagem(data.message || 'Erro ao enviar resposta.')
      }
    } catch {
      setMensagem('Erro de conexão com o servidor.')
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

            <p className="app-tagline">PECS · UEMA · Professor(a)</p>
            <h1 className="app-title">Questionário para docentes</h1>
            <p className="app-subtitle">
              Responda sobre o uso de inteligência artificial no planejamento de aulas, elaboração
              de avaliações e sua percepção sobre o uso de IA pelos estudantes.
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
                  placeholder="Ex.: João Souza"
                />
              </div>

              <div className="form-field">
                <label htmlFor="departamento">Curso / Departamento:</label>
                <input
                  id="departamento"
                  name="departamento"
                  type="text"
                  value={form.departamento}
                  onChange={handleChange}
                  placeholder="Ex.: Departamento de Educação"
                  required
                />
              </div>
            </fieldset>

            <fieldset className="form-section">
              <legend className="form-section-title">Uso de IA na docência</legend>

              <div className="form-field">
                <label htmlFor="utiliza_ia_planejamento">
                  1) Você utiliza IA para criar, planejar ou organizar suas aulas?
                </label>
                <select
                  id="utiliza_ia_planejamento"
                  name="utiliza_ia_planejamento"
                  value={form.utiliza_ia_planejamento}
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
                <label htmlFor="valida_informacoes_ia">
                  2) Quando utiliza IA, você costuma validar as informações geradas?
                </label>
                <select
                  id="valida_informacoes_ia"
                  name="valida_informacoes_ia"
                  value={form.valida_informacoes_ia}
                  onChange={handleChange}
                  required
                >
                  <option value="">Selecione uma opção</option>
                  <option value="SEMPRE_VALIDO">Sempre valido em outras fontes</option>
                  <option value="QUASE_SEMPRE">
                    Quase sempre valido, mas confio bastante
                  </option>
                  <option value="AS_VEZES">Às vezes valido</option>
                  <option value="RARAMENTE">Raramente valido</option>
                  <option value="QUASE_NUNCA">Quase nunca valido</option>
                </select>
              </div>

              <div className="form-field">
                <label htmlFor="provas_criadas_por">
                  3) As provas e atividades avaliativas que você aplica são:
                </label>
                <select
                  id="provas_criadas_por"
                  name="provas_criadas_por"
                  value={form.provas_criadas_por}
                  onChange={handleChange}
                  required
                >
                  <option value="">Selecione uma opção</option>
                  <option value="MANUAL">Criadas manualmente por você</option>
                  <option value="IA">Geradas principalmente por IA</option>
                  <option value="MISTO">Uma combinação (você + IA)</option>
                </select>
              </div>

              <div className="form-field">
                <label htmlFor="julga_ia_sala">
                  4) Como você julga a utilização de IA por alunos <strong>dentro</strong> da sala
                  de aula?
                </label>
                <select
                  id="julga_ia_sala"
                  name="julga_ia_sala"
                  value={form.julga_ia_sala}
                  onChange={handleChange}
                  required
                >
                  <option value="">Selecione uma opção</option>
                  <option value="MUITO_NEGATIVO">Muito prejudicial</option>
                  <option value="NEGATIVO">Mais prejudicial do que positivo</option>
                  <option value="NEUTRO">Neutro</option>
                  <option value="POSITIVO">Mais positivo do que negativo</option>
                  <option value="MUITO_POSITIVO">Muito positivo</option>
                </select>
              </div>

              <div className="form-field">
                <label htmlFor="julga_ia_fora_sala">
                  5) E a utilização de IA pelos alunos <strong>fora</strong> da sala de aula, em
                  trabalhos e atividades domiciliares?
                </label>
                <select
                  id="julga_ia_fora_sala"
                  name="julga_ia_fora_sala"
                  value={form.julga_ia_fora_sala}
                  onChange={handleChange}
                  required
                >
                  <option value="">Selecione uma opção</option>
                  <option value="MUITO_NEGATIVO">Muito prejudicial</option>
                  <option value="NEGATIVO">Mais prejudicial do que positivo</option>
                  <option value="NEUTRO">Neutro</option>
                  <option value="POSITIVO">Mais positivo do que negativo</option>
                  <option value="MUITO_POSITIVO">Muito positivo</option>
                </select>
              </div>

              <div className="form-field">
                <label htmlFor="ia_ajuda_ou_atrapalha">
                  6) Na sua percepção, a IA, no geral, ajuda ou atrapalha o aprendizado real do
                  aluno?
                </label>
                <select
                  id="ia_ajuda_ou_atrapalha"
                  name="ia_ajuda_ou_atrapalha"
                  value={form.ia_ajuda_ou_atrapalha}
                  onChange={handleChange}
                  required
                >
                  <option value="">Selecione uma opção</option>
                  <option value="AJUDA">Mais ajuda do que atrapalha</option>
                  <option value="ATRAPALHA">Mais atrapalha do que ajuda</option>
                  <option value="NAO_ATRAPALHA">Não atrapalha</option>
                  <option value="NAO_SABE">Não sei dizer</option>
                </select>
              </div>

              <div className="form-field">
                <label htmlFor="flagrou_alunos_ia">
                  7) Em provas e atividades em sala, você já flagrou alunos usando IA sem autorização
                  do professor?
                </label>
                <select
                  id="flagrou_alunos_ia"
                  name="flagrou_alunos_ia"
                  value={form.flagrou_alunos_ia}
                  onChange={handleChange}
                  required
                >
                  <option value="">Selecione uma opção</option>
                  <option value="SIM">Sim</option>
                  <option value="NAO">Não</option>
                  <option value="DESCONFIO_MAS_NAO_COMPROVEI">
                    Desconfio, mas não consegui comprovar
                  </option>
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

export default TeacherForm
