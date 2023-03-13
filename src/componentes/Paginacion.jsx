import React from 'react'

const Paginacion = ({prev, next, onPrevius, onNext}) => {

    const hprevius = () => {
        onPrevius();
    }

    const hnext = () => {
        onNext();
    }

  return (
    <nav className='my-5'>
        <ul className='pagination justify-content-center'>
            {
            prev ?(
            <li className='page-item'>
                <button className='page-link' onClick={hprevius}>Anterior</button>
            </li>
           ):null}
           {
            next ?(
            <li className='page-item'>
                <button className='page-link' onClick={hnext}>Siguiente</button>
            </li>
            ): null}
        </ul>
    </nav>
  )
}

export default Paginacion