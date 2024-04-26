import { FormTodo } from './components/FormTodo'
import { Footer } from './sections/Footer'
import { Header } from './sections/Header'
import { TodoContainer } from './sections/TodoContainer'

const App: React.FC = () => {
  return (
    <>
      <Header />
      <main className='w-full min-h-screen'>
        <FormTodo />
        <TodoContainer />
      </main>
      <Footer />
    </>
  )
}

export default App
