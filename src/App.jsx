import Spinner from './components/Spinner'
import ProjectCard from './components/ProjectCard'
import './App.css'
import ProjectContainer from './components/ProjectContainer'

function App() {
  return (
    <div className="App">
      <div className='flex justify-between'>
      </div>
      <div className='animate-land pb-10 pt-8'>
        <h1 className="font-bold text-7xl font-mono">
          Felipe Aguilar
        </h1>
        <h2 className='font-bold text-3xl items-center justify-center'>Engineering student @ UC | Chile 🇨🇱</h2>
      </div>
      <div>
      </div>
      <div>
        <div className='animate-land pt-12 pb-10'>
          <h1 className=" font-bold text-6xl font-mono">
            Projects
          </h1>
        </div>
        <div className='animate-land text-xl text-justify max-w-prose'>
          <ProjectContainer>
            <ProjectCard
              title='Ubicate v2.0'
              src='https://avatars.githubusercontent.com/u/26145246'
              desc='Interactive map for all UC campuses in Chile'
              repo={'https://github.com/open-source-uc/UbiCate-v2'}>
            </ProjectCard>

            <ProjectCard
              title='Stonks bot'
              src="https://en.meming.world/images/en/8/81/Stonks.jpg"
              desc="Discord bot that scrapes stock data from Emol news website">
            </ProjectCard>
          </ProjectContainer>
        </div>
      </div>

    </div>

  )
}

export default App
