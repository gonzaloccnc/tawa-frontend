interface TextareaProps {
  id: string
  name: string
  value: string | number
  placeholder?: string
  onChange: React.ChangeEventHandler<HTMLTextAreaElement>
  error?: string | null
}

const Textarea: React.FC<TextareaProps> = ({ id, value, name, placeholder, onChange, error }) => {
  return (

    <div className='flex flex-col max-w-56'>
      <textarea
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className='border-b p-2 border-black outline-none max-w-56 h-24 resize-none bg-transparent'
      />
      {
        error != null
          ? <span className='text-red-600 font-bold text-xs mt-2'>{error}</span>
          : null
      }
    </div>
  )
}

export { Textarea }

