import {Header} from './components/Header';
import {Post} from './components/Post';
import { Sidebar } from './components/Sidebar';

import styles from './App.module.css';

import './global.css';

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/crgfilho15.png',
      name: 'Carlos Roberto',
      role: 'Web Developer'
    },
    content: [
      {type: 'paragraph', content: 'Fala galeraa 👋'},
      {type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifolio. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      {type: 'link', content: 'crgfilho15.design/doctorcare'},
      {type: 'link', content: '#novoprojeto #nlw #rocketseat'}
    ],
    publishedAt: new Date('2024-03-03 20:00:00'),
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/crgfilho15.png',
      name: 'Carlos Roberto',
      role: 'Web Developer'
    },
    content: [
      {type: 'paragraph', content: 'Ei pessoal!'},
      {type: 'paragraph', content: 'Alualizei o projeto DoctorCare no meu portifolio.'},
      {type: 'link', content: 'crgfilho15.design/doctorcare'},
      {type: 'link', content: '#atualização #nlw #rocketseat'}
    ],
    publishedAt: new Date('2024-03-04 21:00:00'),
  },
];

export function App() {
  return (
    <div>
      <Header/>

      <div className={styles.wrapper}>
        <Sidebar />
        
        <main>
          {posts.map(post => {
            return <Post key={post.id} author={post.author} content={post.content} publishedAt={post.publishedAt} />
          })}
        </main>
      </div>
    </div>
  )
}
