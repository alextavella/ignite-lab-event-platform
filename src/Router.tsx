import { Route, Routes } from 'react-router-dom'
import { Subscribe } from './pages/Subscribe'
import { Events } from './pages/Events'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Subscribe />} />
      <Route path="/eventos" element={<Events />} />
      <Route path="/eventos/aula/:slug" element={<Events />} />
    </Routes>
  )
}
