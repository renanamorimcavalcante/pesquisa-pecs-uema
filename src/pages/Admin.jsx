import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import '../layout.css'

//const API_URL = 'http://sh00040.teste.website/~renan675/api/get_stats.php' // ajuste para sua URL real
const API_URL = 'https://bushidoacademia.com.br/api/get_stats.php'

function Admin() {
  const navigate = useNavigate()
  const [stats, setStats] = useState({
    visitantes_unicos: 0,
    respostas_alunos: 0,
    respostas_professores: 0,
  })
  const [loading, setLoading] = useState(true)
  const [erro, setErro] = useState('')
  const [lastUpdate, setLastUpdate] = useState(null)


  useEffect(() => {
    async function fetchStats() {
      setLoading(true)
      setErro('')

      try {
        const res = await fetch(API_URL)
        const data = await res.json()

        if (!data.success) {
          setErro(data.message || 'Não foi possível carregar as estatísticas.')
        } else {
          setStats(data.stats)
          setLastUpdate(new Date())
        }
      } catch {
        setErro('Erro de conexão com o servidor de estatísticas.')
      } finally {
        setLoading(false)
      }
    }

    fetchStats()
  }, [])

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

            <p className="app-tagline">PECS · UEMA · Área restrita</p>
            <h1 className="app-title">Painel da pesquisa</h1>
            <p className="app-subtitle">
              Visão geral das respostas e do alcance da pesquisa sobre o uso de inteligência
              artificial na educação.
            </p>
          </header>

          {loading ? (
            <p>Carregando estatísticas...</p>
          ) : (
            <>
              <div className="admin-cards">
                <div className="admin-card">
                  <p className="admin-card-title">Visitantes únicos</p>
                  <p className="admin-card-number">{stats.visitantes_unicos}</p>
                  <p className="admin-card-caption">
                    Total aproximado de dispositivos/navegadores que acessaram a página.
                  </p>
                </div>

                <div className="admin-card">
                  <p className="admin-card-title">Respostas de alunos</p>
                  <p className="admin-card-number">{stats.respostas_alunos}</p>
                  <p className="admin-card-caption">
                    Questionários respondidos pelo perfil de aluno(a).
                  </p>
                </div>

                <div className="admin-card">
                  <p className="admin-card-title">Respostas de professores</p>
                  <p className="admin-card-number">{stats.respostas_professores}</p>
                  <p className="admin-card-caption">
                    Questionários respondidos pelo perfil de professor(a).
                  </p>
                </div>
              </div>

              {lastUpdate && (
                <p className="admin-last-update">
                  Última atualização: {lastUpdate.toLocaleString('pt-BR')}
                </p>
              )}

              {erro && <p className="admin-error">{erro}</p>}
            </>
          )}
        </div>
      </div>

      <footer className="page-footer">
        © {new Date().getFullYear()} Todos os direitos reservados · Desenvolvido por Renan Cavalcante
      </footer>
    </>
  )
}

export default Admin
