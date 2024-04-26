import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export interface Todo {
  id: string
  title: string
  description: string
  isCompleted: boolean
}

interface TodoStoreActions {
  getAll: () => Todo[]
  addOne: (todo: Todo) => void
  updateOne: (id: string, todo: Todo) => void
  deleteOne: (id: string) => void
}

interface TodoStore extends TodoStoreActions {
  todos: Todo[]
}

const useTodoStore = create<TodoStore>()(persist(
  (set, get) => ({
    todos: [],

    getAll() {
      return []
    },

    addOne(todo) {
      const todos = get().todos
      set(() => ({ todos: [...todos, todo] }))
    },

    updateOne(id, todo) {
      const todosWithUpdate = get().todos.map(t => {
        if (t.id === id) t = { ...todo, id }
        return t
      })
      set(() => ({ todos: [...todosWithUpdate] }))
    },

    deleteOne(id) {
      const todosFilter = get().todos.filter(todo => todo.id !== id)
      set(() => ({ todos: [...todosFilter] }))
    }

  }),
  { name: 'todoStore' }
))

export { useTodoStore }

