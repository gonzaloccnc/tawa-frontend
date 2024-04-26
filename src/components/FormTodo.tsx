import { useState } from 'react'
import { useTodoStore } from '../store/todoStore'
import { TodoContraint } from '../utils/todoValidation'
import Button from './Button'
import { Input } from './Input'
import { Textarea } from './Textarea'

const intialFormState = {
  title: {
    value: '',
    error: null
  },
  description: {
    value: '',
    error: null
  },
  success: false
}

type ChangeEventHandler = React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>

const FormTodo: React.FC = () => {
  const [form, setForm] = useState(intialFormState)
  const addOne = useTodoStore(s => s.addOne)

  const handleChange: ChangeEventHandler = (e) => {
    const key = e.target.id
    const value = e.target.value
    const nextTodo = {
      description: form.description.value,
      title: form.title.value,
      [key]: value
    }

    const validModel = TodoContraint.safeParse(nextTodo)

    if (!(validModel.success)) {
      const error = validModel.error.issues.find(is => is.path[0] === key)?.message ?? null
      setForm(prev => ({ ...prev, [key]: { value, error }, success: validModel.success }))
      return
    }

    setForm(prv => ({ ...prv, [key]: { value, error: null }, success: validModel.success }))
  }

  const handleSubmit: React.FormEventHandler = (e) => {
    e.preventDefault()

    if (!form.success) {
      console.error('todos los campos son obligatorios')
      return
    }

    addOne({
      description: form.description.value,
      title: form.title.value,
      isCompleted: false,
      id: crypto.randomUUID()
    })
    setForm(intialFormState)
  }

  const handleClick: React.MouseEventHandler = () => {
    addOne({
      description: form.description.value,
      title: form.title.value,
      isCompleted: false,
      id: crypto.randomUUID()
    })
    setForm(intialFormState)
  }

  return (
    <section>
      <form onSubmit={handleSubmit} className='mt-5 flex flex-col gap-5 w-56 mx-auto'>
        <Input
          type='text'
          name='title'
          id='title'
          value={form.title.value}
          onChange={handleChange}
          placeholder='Sprint 1'
          error={form.title.error}
        />

        <Textarea
          name='description'
          id='description'
          onChange={handleChange}
          placeholder='Durante este Sprint se realizara ...'
          value={form.description.value}
          error={form.description.error}
        />
      </form>
      <div className='w-full grid place-content-center'>
        <Button
          className='text-white py-3 mt-4 disabled:bg-green-300'
          disabled={!form.success}
          type='submit'
          onClick={handleClick}
          color='success'
          size='md'
        >
          Agregar
        </Button>
      </div>
    </section>
  )
}

export { FormTodo }

