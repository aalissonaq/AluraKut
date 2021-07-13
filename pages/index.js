import Head from 'next/head'

import MainGrid from '../src/components/MainGrid'
import Box from '../src/components/Box'
import { AlurakutMenu, AlurakutProfileSidebarMenuDefault, OrkutNostalgicIconSet } from '../src/lib/AlurakutCommons';
import { ProfileRelationsBoxWrapper } from '../src/components/ProfileRelations';

function ProfileSidebar(propriedades) {
  console.log(propriedades);
  return (
    <Box>
      <img src={`https://github.com/${propriedades.githubUser}.png`} style={{ borderRadius: '8px' }} />
      <hr />
      <p>
        <a class="boxLink" href={`https://github.com/${propriedades.githubUser}`}>
          @{propriedades.githubUser.toUpperCase()}
        </a>
      </p>
      <br />
      <AlurakutProfileSidebarMenuDefault />
    </Box>
  )
}

export default function Home() {
  const usuarioAleatorio = 'aalissonaq';
  const pessoasFavoritas = [
    'caririinovacao',
    'juunegreiros',
    'omariosouto',
    'peas',
    'rafaballerini',
    'marcobrunodev',
    'felipefialho',
    'rodrigorgtic',
    'luizomf'
  ]

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <title>AluraKut - Imersão React 3ªedição | aalissonaq </title>
        <link rel="icon" href="https://alurakut.vercel.app/logo.svg"></link>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <AlurakutMenu />
      <MainGrid>
        {/* <Box style="grid-area: profileArea;"> */}
        <div className="profileArea" style={{ gridArea: 'profileArea' }}>
          <ProfileSidebar githubUser={usuarioAleatorio} />
        </div>
        <div className="welcomeArea" style={{ gridArea: 'welcomeArea' }}>
          <Box>
            <h1 className="title">
              Bem vindo(a)
            </h1>

            <OrkutNostalgicIconSet fas={1} confiavel={3} legal={3} sexy={1} />
          </Box>
          <Box>
            <h2 className="subTitle">O que você deseja fazer?</h2>
            <form className="">
              <div>
                <input
                  placeholder="Qual vai ser o nome da sua comunidade?"
                  name="title"
                  aria-label="Qual vai ser o nome da sua comunidade?"
                  style={{ borderRadius: '8px' }}
                  type="text"
                />
              </div>
              <div>
                <input
                  placeholder="Coloque uma URL para usarmos de capa"
                  name="image"
                  aria-label="Coloque uma URL para usarmos de capa"
                  type=""
                  style={{ borderRadius: '8px' }}
                />
              </div>
              <button
                style={{ borderRadius: '8px' }}
              >
                Criar comunidade
              </button>
            </form>
          </Box>
        </div>
        <div className="profileRelationsArea" style={{ gridArea: 'profileRelationsArea' }}>
          <ProfileRelationsBoxWrapper>
            <h2 className="smallTitle">
              Pessoas da comunidade ({pessoasFavoritas.length})
            </h2>

            <ul>
              {pessoasFavoritas.map((itemAtual) => {
                return (
                  <li>
                    <a href={`/users/${itemAtual}`} key={itemAtual}>
                      <img src={`https://github.com/${itemAtual}.png`} />
                      <span>{itemAtual}</span>
                    </a>
                  </li>
                )
              })}
            </ul>
          </ProfileRelationsBoxWrapper>

          <Box>
            <h2 className="smallTitle">
              Comunidade Legais
            </h2>
          </Box>
        </div>
      </MainGrid>
    </>
  )
}
