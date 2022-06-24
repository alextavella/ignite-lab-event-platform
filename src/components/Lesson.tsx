import dayjs from 'dayjs'
import { CheckCircle, Lock } from 'phosphor-react'
import { Link, useParams } from 'react-router-dom'
import classNames from 'classnames'

interface LessonProps {
  title: string
  slug: string
  availableAt: Date
  type: 'live' | 'class'
}

export function Lesson({ title, slug, availableAt, type }: LessonProps) {
  const { slug: slugParam } = useParams<{ slug: string }>()

  const isActiveLesson = slugParam === slug

  const isLessonAvailable = dayjs(availableAt).isBefore(dayjs())

  const availableDateFormatted = dayjs(availableAt).format(
    'dddd [•] DD [de] MMMM [•] HH[h]mm'
  ) // Domingo • 20 de junho • 19h00

  return (
    <Link to={`/eventos/aula/${slug}`} className="group">
      <span className="text-gray-300">{availableDateFormatted}</span>

      <div
        className={classNames('rounded border p-4 mt-2', {
          'border-green-400': isActiveLesson,
          'border-gray-500 group-hover:border-green-500': !isActiveLesson,
        })}
      >
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
