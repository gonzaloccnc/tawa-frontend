const Header: React.FC = () => {
  return (
    <header className='w-full py-4 px-6 bg-red-300 flex justify-between text-white'>
      <h1 className='text-xl'>
        <a href='/'>
          Tawa - Tareas
        </a>
      </h1>
      <nav className='flex gap-4 text-white'>
        <a href='#About' className='hover:text-black'>
          Nostros
        </a>
        <a href='#Contact' className='hover:text-black'>
          Contactanos
        </a>
        <a href='#Projects' className='hover:text-black'>
          Proyectos
        </a>
      </nav>
    </header>
  )
}

export { Header }

