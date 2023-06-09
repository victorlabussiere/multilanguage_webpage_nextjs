# Internacionalização de Webpage com Next.js e Typescript (useContext e useReducer)

## Principais techs utilizadas no projeto:

- [React](https://reactjs.org)
- [Next.js](https://nextjs.org)
- [Typescript](https://https://www.typescriptlang.org)
- [Styled Components](https://styled-components.com)
  
Mais informações sobre dependências podem ser acessadas no arquivo package.json

## Features
- Toda a aplicação possui layouts responsivos às medidas de smartphons, tables, notebooks e telas ultra-wide.

- Desenvolvi três paths que permitem ao usuário selecionar o idioma que deseja acessar o site. Por padrão, a plataforma irá redirecionar para o endpoint '/PT', Abrindo a versão em PT-BR.

- A principal dinâmica do comportamento das features requisitadas pelo desafio é o controle reativo de seus estados, utilizando os hooks ***useState*** e ***useEffect***, do **React** (alternando estados para exibir e ocultar elementos).

- Os textos do navbar e da lista de cards (seção detalhes) são gerados dinâmicamente através de uma requisição simulada, utilizando ***json-server***.

- Para o controle dinâmico dos idiomas dos textos, no navbar, foi utilizado o useEffect para requisição de dados de uma api mockada.

- Os dados passam por controle de estado com useContext, podendo ser acessados dinâmicamente por componentes filhos.

</br>
</br>

## Instruções de Desenvolvimento e Execução

### Pré-requisitos
\
Softwares e Pacotes necessário:
- Node.js (versão 14 ou superior)
- npm (normalmente instalado junto com o Node.js)
- json-server (instalado globalmente ou localmente no projeto)

## Instalação das Dependências:
- Para instalar as dependências do projeto, basta executar um comando no diretório raiz deste projeto:

```
npm install
```
Isso instalará todas as dependências listadas no arquivo package.json.

## Desenvolvimento
Durante o desenvolvimento, basta executar, também, apenas um comando no diretório raiz deste projeto

```
npm run dev
```
- Esse comando utilizará o pacote **concurrently** para executar, em paralelo, os comandos ``json-server`` e `` next dev``.
- O ***json-server*** será executado na porta 3001, assistindo ao arquivo *db.json*, que contém os dados simulados para o *challenge*.
- O servidor de desenvolvimento da aplicação **Next** será executado na porta 3000

Agora, você poderá acessar o aplicativo em seu navegador através do endereço <a>http://localhost:3000</a>

<br>
<br>

## Esta aplicação possui dois endpoints responsáveis por resgatar os dados simulados para o projeto:

</br>

#### **Soluções submenu**
> **/api/cardsdata**
> - Aqui é requisitado o copywriting dos cards que devem ser exibidos no submenu soluções, no navbar, nos idiomas: inglês, espanhol e pt-br.

#### **Navbar copywriting**
> **/api/mockdb**
> - Aqui é requisitado o copywriting dos outros conteúdos no navbar, nos idiomas: inglês, espanhol e pt-br

## Construção (Build)
Construa os arquivos estáticos com o comando build no diretório raiz deste projeto:
```
npm run build
```

## Execução em Produção
Após a construção do projeto, você pode executá-lo em um ambiente de produção localmente usando o seguinte comando:

```
npm start
```
Esse comando iniciará o servidor **Next**, que servirá o aplicativo a partir da pasta .next. Além disso, o json-server será executado na porta 3001 para fornecer os dados simulados do arquivo db.json.
Acesse o projeto em seu navegador através do link http://localhost:3000

## Créditos
- Desenvolvido por: **Victor Labussiere**
- E-mail para contato: victor.labussiere95@gmail.com
- Github: https://github.com/victorlabussiere
- Linkedin: https://linkedin.com/in/victorlabussiere
