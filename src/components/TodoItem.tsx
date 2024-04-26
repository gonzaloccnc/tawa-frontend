import { useMemo, useState } from 'react'
import { useTodoStore, type Todo } from '../store/todoStore'
import { getRamdonColor } from '../utils/getRandomColor'
import Button from './Button'
import TodoItemEditable from './TodoItemEditable'

interface TodoItemProps extends Todo { }

const TodoItem: React.FC<TodoItemProps> = ({ id, description, isCompleted, title }) => {
  const { updateOne, deleteOne } = useTodoStore()
  const [isEdit, setIsEdit] = useState(false)
  const color = useMemo(
    () => getRamdonColor(),
    []
  )

  if (isEdit) {
    return (
      <TodoItemEditable
        id={id}
        description={description}
        isCompleted={isCompleted}
        title={title}
        color={color}
        updateOne={updateOne}
        setEdit={setIsEdit}
      />
    )
  }

  return (
    <div
      className='w-full h-full rounded-md p-3 text-white flex flex-col justify-between'
      style={{ backgroundColor: color }}
      onDoubleClick={() => { updateOne(id, { id, description, isCompleted: !isCompleted, title }) }}
    >
      <div className={`${isCompleted ? 'line-through' : 'no-underline'}`}>
        <h3 className='text-2xl uppercase'>
          {title}
        </h3>
        <p className='font-light italic'>
          {description}
        </p>
      </div>
      <div className='flex items-center gap-2 mt-3'>
        <Button
          rounded='none'
          border
          onClick={() => { setIsEdit(!isEdit) }}
        >
          Editar
        </Button>
        <Button
          className='text-white'
          rounded='none'
          border
          color='error'
          onClick={() => { deleteOne(id) }}
        >
          Eliminar
        </Button>
      </div>
    </div>
  )
}

export default TodoItem
