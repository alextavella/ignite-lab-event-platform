import dayjs from 'dayjs'
import { CheckCircle, Lock } from 'phosphor-react'
import { Link } from 'react-router-dom'

interface LessonProps {
  title: string
  slug: string
  availableAt: Date
  type: 'live' | 'class'
}

export function Lesson({ title, slug, availableAt, type }: LessonProps) {
  const isLessonAvailable = dayjs(availableAt).isBefore(dayjs())

  const availableDateFormatted = dayjs(availableAt).format(
    'dddd [•] DD [de] MMMM [•] HH[h]mm'
  ) // Domingo • 20 de junho • 19h00

  return (
    <Link to={`/eventos/aula/${slug}`} className="group">
      <span className="text-gray-300">{availableDateFormatted}</span>

      <div className="rounded border border-gray-500 p-4 mt-2 group-hover:border-green-500">
        <header className="flex items-center justify-between">
          {isLessonAvailable ? (
            <span className="flex items-center gap-2 text-sm text-blue-500 font-medium">
              <CheckCircle size={20} />
              Contéudo liberado
            </span>
          ) : (
            <span className="flex items-center gap-2 text-sm text-orange-500 font-medium">
              <Lock size={20} />
              Em breve
            </span>
          )}
          <span className="rounded px-2 py-[0.125rem] text-xs text-green-500 font-bold uppercase border border-green-500">
            {type === 'live' ? `AO VIVO` : `AULA PRÁTICA`}
          </span>
        </header>

        <strong className="text-gray-200 mt-5 block">{title}</strong>
      </div>
    </Link>
  )
}
