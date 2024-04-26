import { useState } from 'react'
import { type Todo } from '../store/todoStore'
import { TodoContraint } from '../utils/todoValidation'
import Button from './Button'
import { Input } from './Input'
import { Textarea } from './Textarea'

interface TodoItemEditableProps extends Todo {
  updateOne: (id: string, todo: Todo) => void
  setEdit: (value: boolean) => void
  color: string
}

type ChangeEventHandler = React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>
interface ErrorsTodo { title: string | null, description: string | null }

const TodoItemEditable: React.FC<TodoItemEditableProps> = ({ color, title, description, id, isCompleted, updateOne, setEdit }) => {
  const [editValues, setEditValues] = useState({ title, description })
  const [errors, setErrors] = useState<ErrorsTodo>({ title: null, description: null })

  const handleChange: ChangeEventHandler = (e) => {
    setEditValues(prev => ({ ...prev, [e.target.id]: e.target.value }))
  }

  const handleClick: React.MouseEventHandler = () => {
    const isValid = TodoContraint.safeParse(editValues)

    if (!isValid.success) {
      const entries = isValid.error.issues.map(i => [i.path[0], i.message])
      const errors = Object.fromEntries(entries) as ErrorsTodo

      setErrors(errors)
      return
    }

    updateOne(id, { id, description: editValues.description, isCompleted, title: editValues.title })
    setEdit(false)
  }

  return (
    <div
      className='w-full h-full rounded-md p-3 text-white flex flex-col justify-between'
      style={{ backgroundColor: color }}
    >
      <div className='flex flex-col gap-3'>
        <Input
          type='text'
          id='title'
          name='title'
          value={editValues.title}
          onChange={handleChange}
          error={errors.title}
        />

        <Textarea
          id='description'
          name='description'
          value={editValues.description}
          onChange={handleChange}
          error={errors.description}
        />
      </div>
      <div className='flex items-center gap-2 mt-3'>
        <Button onClick={handleClick}>Guardar</Button>
      </div>
    </div >
  )
}

export default TodoItemEditable
