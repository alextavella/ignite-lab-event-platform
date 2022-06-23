import { DefaultUi, Player, Youtube } from '@vime/react'
import { CaretRight, DiscordLogo, FileArrowDown, Lightning } from 'phosphor-react'

// Default theme. ~960B
import '@vime/core/themes/default.css';
// Optional light theme (extends default). ~400B
import '@vime/core/themes/light.css';
import { gql, useQuery } from '@apollo/client';

interface VideoProps {
  slug: string
}

interface GetLessonBySlugResponse {
  lesson: {
    id: string
    title: string
    videoId: string
    description: string
    teacher: {
      avatarURL: string
      bio: string
      name: string
    }
  }
}

const GET_LESSON_BY_SLUG = gql`
  query GetLessonBySlug($slug: String) {
    lesson(where: {slug: $slug}) {
      id
      title
      videoId
      description
      teacher {
        avatarURL
        bio
        name
      }
    }
  }
`

export function Video({ slug }: VideoProps) {
  const { data, loading } = useQuery<GetLessonBySlugResponse>(GET_LESSON_BY_SLUG, {
    variables: {
      slug
    }
  })

  if (loading || !data) {
    return (
      <div className="flex-1 items-center justify-center">
        <p className='text-gray-500'>Carregando...</p>
      </div>
    )
  }

  return (
    <div className="flex-1">
      <div className="bg-black flex justify-center">
        <div className="h-full w-full max-w-[1100px] max-h-[60vh] aspect-video">
          <Player>
            <Youtube videoId="Ox_zb2cs9zM" />
            <DefaultUi />
          </Player>
        </div>
      </div>

      <div className="p-8 max-w-[1100px] mx-auto">
        <div className="flex items-start gap-16">
          <div className="flex-1">
            <h1 className="text-2xl font-bold">
              {data.lesson.title}
            </h1>
            <p className="mt-4 text-gray-200 leading-relaxed">
              {data.lesson.description}
            </p>

            <div className="flex items-center gap-4 mt-6">
              <img src={data.lesson.teacher.avatarURL} alt="Alex Tavella" className='h-16 w-16 rounded-full border-2 border-blue-500' />
              <div className='leading-relaxed'>
                <strong className='font-bold text-2xl block'>{data.lesson.teacher.name}</strong>
                <span className='text-gray-200 text-sm block'>{data.lesson.teacher.bio}</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <a
              href="#"
              className="p-4 text-sm bg-green-500 flex items-center  justify-center rounded font-bold uppercase gap-2 hover:bg-green-700 transition-colors"
            >
              <DiscordLogo size={24} />
              Comunidade no discord
            </a>
            <a
              href="#"
              className="p-4 text-sm border border-blue-500 text-blue-500 flex items-center justify-center rounded font-bold uppercase gap-2 hover:bg-blue-500 hover:text-gray-900 transition-colors"
            >
              <Lightning size={24} />
              Acesse o desafio
            </a>
          </div>
        </div>

        <div className='gap-8 mt-20 grid grid-cols-2'>
          <a href="#" className='bg-gray-700 rounded overflow-hidden flex items-stretch gap-6 hover:bg-gray-600 transition-colors'>
            <div className='bg-green-700 h-full p-6 flex items-center'>
              <FileArrowDown size={40} />
            </div>
            <div className='py-6 leading-relaxed'>
              <strong className='text-2xl'>Material complementar</strong>
              <p className='text-sm text-gray-200 mt-2'>Acesse o material complementar para acelerar o seu desenvolvimento</p>
            </div>
            <div className='h-full p-6 flex items-center'>
              <CaretRight size={24} />
            </div>
          </a>

          <a href="#" className='bg-gray-700 rounded overflow-hidden flex items-stretch gap-6 hover:bg-gray-600 transition-colors'>
            <div className='bg-green-700 h-full p-6 flex items-center'>
              <FileArrowDown size={40} />
            </div>
            <div className='py-6 leading-relaxed'>
              <strong className='text-2xl'>Wallpapers exclusivos</strong>
              <p className='text-sm text-gray-200 mt-2'>Baixe wallpapers exclusivos do Ignite Lab e personalize a sua máquina</p>
            </div>
            <div className='h-full p-6 flex items-center'>
              <CaretRight size={24} />
            </div>
          </a>
        </div>
      </div>
    </div>
  )
}
