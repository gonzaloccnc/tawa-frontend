import TodoItem from '../components/TodoItem'
import { useTodoStore } from '../store/todoStore'


const TodoContainer: React.FC = () => {
  const todos = useTodoStore(s => s.todos)

  return (
    <section className='w-full py-10'>
      <div className='grid grid-cols-4 gap-5 place-items-center px-5'>
        {
          todos.map(todo => (
            <TodoItem
              key={todo.id}
              id={todo.id}
              title={todo.title}
              description={todo.description}
              isCompleted={todo.isCompleted}
            />
          ))
        }
      </div>
      {
        todos.length === 0
          ? <h2 className='text-center'>No hay tareas que mostrar</h2>
          : null
      }
    </section>
  )
}

export { TodoContainer }

