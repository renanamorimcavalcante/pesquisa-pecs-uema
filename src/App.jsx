import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import StudentForm from './pages/StudentForm'
import TeacherForm from './pages/TeacherForm'
import Admin from './pages/Admin' // novo

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/aluno" element={<StudentForm />} />
      <Route path="/professor" element={<TeacherForm />} />
      <Route path="/admin" element={<Admin />} /> {/* novo */}
    </Routes>
  )
}

export default App
