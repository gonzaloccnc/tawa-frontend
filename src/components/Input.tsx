interface InputProps {
  id: string
  name: string
  type: 'text' | 'number'
  value: string | number
  placeholder?: string
  onChange: React.ChangeEventHandler<HTMLInputElement>
  error?: string | null
}

const Input: React.FC<InputProps> = ({ type, value, placeholder, name, id, error, onChange }) => {
  return (
    <div className='flex flex-col max-w-56'>
      <input
        id={id}
        type={type}
        name={name}
        value={value}
        className='border-b border-black p-2 outline-none bg-transparent'
        onChange={onChange}
        placeholder={placeholder}
      />
      {
        error != null
          ? <span className='text-red-600 font-bold text-xs mt-2'>{error}</span>
          : null
      }
    </div>
  )
}

export { Input }

