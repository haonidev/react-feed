import { Header } from './components/Header'
import { Post } from './components/Post'
import styles from './App.module.css'
import './style-global.css'
import { Sidebar } from './Sidebar'

export default function App() {

  const posts = [

    {
      id: 1,
      PublishedAt: '2024-10-10',
      author: {
        name: 'Cristiano',
        role: 'Data Scientist and Python Developer',
        avatarUrl: 'https://avatars.githubusercontent.com/u/23725635?v=4'
      },
      title: 'Bayesian Optimization',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vitae nunc sit amet odio pharetra egestas id non nisl. Morbi dignissim fringilla luctus. Duis eget sapien vel nulla tempus iaculis vel in nisi. Etiam sodales vitae arcu at lobortis. Sed pharetra suscipit lobortis. In a pretium sem, et mattis augue. In egestas neque elit, quis ultrices turpis varius ut. Cras condimentum maximus lectus, quis scelerisque augue tristique et. Morbi in cursus arcu. Nunc dapibus ornare euismod.',
    },
    {
      id: 2,
      title: 'Aprendendo React',
      content: 'Ut non nunc luctus, tristique orci ut, rhoncus tellus. Donec cursus sagittis augue, et condimentum tortor. In pretium interdum odio, quis ultrices erat dapibus dictum. Nunc metus lorem, semper eget tempor sed, volutpat in dui. Proin tempor fermentum dolor vitae faucibus. Nullam eget efficitur lectus. In quis faucibus diam. Sed pellentesque ut lacus ac volutpat. Nunc dictum eros urna. Pellentesque dapibus libero eros, quis auctor dolor mollis in. Duis vel tellus nec elit lobortis vulputate quis quis augue.',
    },
    {
      id: 3,
      title: 'Typescript',
      content: 'Nullam laoreet orci sem, non auctor nisi blandit sed. Morbi efficitur id purus nec blandit. Aliquam tellus erat, pharetra malesuada risus eu, congue egestas augue. Pellentesque malesuada ultricies mi sit amet gravida. Praesent arcu dui, pretium ut augue ac, auctor luctus sem. Donec eu lectus nec enim commodo tincidunt. Proin volutpat justo nibh. Morbi vel odio mollis, euismod purus nec, lobortis dolor. Duis non efficitur sem. Donec semper eros ac augue tempor interdum.',
    }
  ]


  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar/>
        <main>
          <Post />
          <Post />
          <Post />
        </main>
      </div>
      </>
      )
}