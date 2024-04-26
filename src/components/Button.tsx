
const buttonColors = {
  white: 'bg-white',
  success: 'bg-success',
  warning: 'bg-warning',
  error: 'bg-error'
}

const buttonSizing = {
  sm: 'w-28',
  md: 'w-40',
  lg: 'w-52',
  xl: 'w-64'
}

const buttonRounded = {
  sm: 'rounded-sm',
  md: 'rounded-md',
  lg: 'rounded-lg',
  xl: 'rounded-xl',
  none: 'rounded-none'
}

interface ButtonProps {
  children: React.ReactNode
  onClick: React.MouseEventHandler<HTMLButtonElement>
  color?: keyof typeof buttonColors
  border?: boolean
  size?: keyof typeof buttonSizing
  rounded?: keyof typeof buttonRounded
  className?: string
  type?: 'submit' | 'reset' | 'button'
  disabled?: boolean
}

const Button: React.FC<ButtonProps> = ({ children, color = 'white', border = false, size = 'sm', rounded = 'md', className, onClick, type = 'button', disabled = false }) => {
  const background = buttonColors[color]
  const bBorder = border ? 'border border-black' : 'border-none'
  const bSize = buttonSizing[size]
  const bRounded = buttonRounded[rounded]
  const buttonStyles = `py-2 px-6 text-black ${background} ${bSize} ${bRounded} ${bBorder} `

  return (
    <button
      className={buttonStyles.concat(className ?? '')}
      type={type}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  )
}

export default Button
