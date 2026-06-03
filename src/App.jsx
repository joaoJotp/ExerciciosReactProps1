import { useState } from 'react'
import Titulo from './titulo/Titulo'
import Paragrafo from './Paragrafo/Paragrafo'
import Imagem from './imagem/Imagem'
import Botao from './Botao/Botao'
import Nome from './Usuario/Usuario'
import Produto from './produto/Produto'
import Saudacao from './saudacao/Saudacao'
import CardSimples from './CardSimples/CardSimples'
import Rodape from './Rodape/Rodape'
import Status from './Status/Status'


function App() {
  return (
    <>
      <Titulo texto="Exercicios Props" />
      <Paragrafo conteudo="Futebol" />
      <Imagem src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_knvbiI3aybsbZpLJRzS54ZkiA_pxEqOxhw&s" alt="Imagem" />
      <Botao label="Isso é um Botão." />
      <Nome nome="João" idade="19" />
      <Produto nome="Iphone 15" preco=" R$ 3,500" />
      <Saudacao nome="João!" />
      <CardSimples titulo="Variavel" descricao="Variavel é algo que vareia" />
      <Rodape ano="©2026" />
      <Status mensagem="Ola mundo" />
    </>
  )
}

export default App

