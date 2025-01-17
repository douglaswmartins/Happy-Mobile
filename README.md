<h1
  align="center"
>
  Happy
</h1>


<p align="center">
  <img height="492" src="https://raw.githubusercontent.com/douglaswmartins/Happy-Mobile/master/.github/map.png" alt="Map">

  <img height="492" src="https://raw.githubusercontent.com/douglaswmartins/Happy-Mobile/master/.github/datails-orphanage.png" alt="Detalhes do orfanato">

  <img height="492" src="https://raw.githubusercontent.com/douglaswmartins/Happy-Mobile/master/.github/create-orphanage.png" alt="Criar novo orfanato">
</p>


---

## :rocket: Tecnologias

![react native](https://img.shields.io/badge/react_native%20-%2320232a.svg?&style=for-the-badge&logo=react&logoColor=%2361DAFB)
![Typescript](https://img.shields.io/badge/typescript%20-%23007ACC.svg?&style=for-the-badge&logo=typescript&logoColor=white)
![HTLM5](https://img.shields.io/badge/html5%20-%23E34F26.svg?&style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/css3%20-%231572B6.svg?&style=for-the-badge&logo=css3&logoColor=white)
![Expo](https://img.shields.io/badge/expo%20-%2320232a.svg?&style=for-the-badge&logo=expo&logoColor=white)

---

## :computer: Projeto

Essa é a parte mobile da aplicação desenvolvida durante o workshop Next Level Week 3 da [rocketseat](https://rocketseat.com.br/).

O objetivo da aplicação é conectar pessoas e casas de acolhimento.

---

## :black_nib: Layout

* [VERSÃO MOBILE](https://www.figma.com/file/X27FfVxAgy9f5IFa7ONlph/Happy-Mobile)

---

## :gear: Iniciando Projeto

### Ferramentas necessarias para rodar o projeto

* [Node.js](https://nodejs.org/)
* [Yarn](https://classic.yarnpkg.com/)
* [Expo](https://expo.io/)

### Para ter uma experiencia completo da aplicação, precisara clonar a parte da api do Happy e seguir as intruções de instalaçao

* [Happy-API](https://github.com/douglaswmartins/Happy-Api)

### Instalando as Dependências

````
yarn install
````

### Inicializando

````
expo start
````

---

## :warning: **Observação importante** :warning:

Se caso for rodar em um aparelho físico, precisara alterar a **baseURL** (que fica no arquivo [api.ts](https://github.com/douglaswmartins/Happy-Mobile/blob/master/src/services/api.ts)) para o ip do seu computador, lembre de manter a porta **3333**

````
baseURL: 'http://{{IP_DO_COMPUTADOR}}:3333'
````
