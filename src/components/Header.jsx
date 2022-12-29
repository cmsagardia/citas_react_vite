// export const Header = (props) => {...}
/**
 * en lugar de (props), puedo aplicar distructuring y pasar las propiedades
 * export const Header = ({numeros, isAdmin}) => {...}
 * el resultado por consola es: 1 false
 */

export const Header = () => {


  return (
    <>
      <h1 className='font-black text-5xl text-center md:w-2/3 mx-auto'>
        Seguimiento Pacientes {''}
        <span className='text-indigo-600'>Veterinaria</span>
      </h1>
    </>
  )
}
