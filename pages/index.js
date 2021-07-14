import React, { useState } from 'react';

import Head from 'next/head'

import MainGrid from '../src/components/MainGrid'
import Box from '../src/components/Box'
import { AlurakutMenu, AlurakutProfileSidebarMenuDefault, OrkutNostalgicIconSet } from '../src/lib/AlurakutCommons';
import { ProfileRelationsBoxWrapper } from '../src/components/ProfileRelations';

function ProfileSidebar(propriedades) {
  console.log(propriedades);
  return (
    <Box as="aside">
      <img src={`https://github.com/${propriedades.githubUser}.png`} style={{ borderRadius: '8px' }} />
      <hr />
      <p>
        <a className="boxLink" href={`https://github.com/${propriedades.githubUser}`}>
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

  const [community, setCommunity] = useState([
    {
      id: '1234567890',
      title: 'Eu odeio Acondar Cedo!',
      image: 'https://alurakut.vercel.app/capa-comunidade-01.jpg',
    },
    {
      id: '98765421',
      title: 'Cariri Inovação',
      image: 'https://caririinovacao.com.br/wp-content/uploads/2021/05/Logo_Vertical_Dark2-768x768.png',
    }
  ]);
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <title>AluraKut - Imersão React 3ªedição | aalissonaq </title>
        <link rel="icon" href="https://alurakut.vercel.app/logo.svg"></link>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <AlurakutMenu githubUser={usuarioAleatorio} />
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
            <form id="formCommunity"
              onSubmit={function handleCreateCommunity(e) {
                e.preventDefault();
                const dataForm = new FormData(e.target);
                if (dataForm.get('title') === '' || dataForm.get('image') === '') {
                  alert('Por favor preencha dos campos');
                } else {
                  const newCommunity = {
                    id: new Date().toISOString,
                    title: dataForm.get('title'),
                    image: dataForm.get('image')
                  }
                  const communityUpdate = [...community, newCommunity];
                  setCommunity(communityUpdate);
                  document.getElementById('formCommunity').reset();
                }

              }}>
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
                  <li key={itemAtual}>
                    <a href={`/users/${itemAtual}`} >
                      <img src={`https://github.com/${itemAtual}.png`} />
                      <span>{itemAtual}</span>
                    </a>
                  </li>
                )
              })}
            </ul>
          </ProfileRelationsBoxWrapper>
          {/*Comunidades*/}
          <ProfileRelationsBoxWrapper>
            <h2 className="smallTitle">
              Comunidade ({community.length})
            </h2>
            <ul>
              {community.map((itemAtual) => {
                return (
                  <li key={itemAtual.id}>
                    <a href={`/users/${itemAtual.title}`}>
                      <img src={itemAtual.image} alt={itemAtual.title} />
                      <span>{itemAtual.title}</span>
                    </a>
                  </li>
                )
              })}
            </ul>
          </ProfileRelationsBoxWrapper>
        </div>
      </MainGrid>
    </>
  )
}
