import React from 'react'

const NosotrosDetalles = () => {
    return (
        <>
            <h2 className='text-center my-5 fs-1'>Nuestra Prioridad</h2>
            <div className='d-flex justify-content-between gap-3'>
                <div className='w-100 d-flex flex-column justify-content-center align-items-center'>
                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-lock" width="100" height="100" viewBox="0 0 24 24" strokeWidth="1" stroke="#ff9300" fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <rect x="5" y="11" width="14" height="10" rx="2" />
                        <circle cx="12" cy="16" r="1" />
                        <path d="M8 11v-4a4 4 0 0 1 8 0v4" />
                    </svg>
                    <h3 className='mb-5'>SEGURIDAD</h3>
                    <p className='text-center'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer eleifend, dui eu scelerisque elementum,
                        ante est mattis mi, id semper turpis augue eget purus. Suspendisse sit amet lectus interdum.
                    </p>
                </div>
                <div className='w-100 d-flex flex-column justify-content-center align-items-center'>
                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-cash" width="100" height="100" viewBox="0 0 24 24" strokeWidth="1" stroke="#ff9300" fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <rect x="7" y="9" width="14" height="10" rx="2" />
                        <circle cx="14" cy="14" r="2" />
                        <path d="M17 9v-2a2 2 0 0 0 -2 -2h-10a2 2 0 0 0 -2 2v6a2 2 0 0 0 2 2h2" />
                    </svg>
                    <h3 className='mb-5'>PRECIO</h3>
                    <p className='text-center'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer eleifend, dui eu scelerisque elementum,
                        ante est mattis mi, id semper turpis augue eget purus. Suspendisse sit amet lectus interdum.
                    </p>
                </div>
                <div className='w-100 d-flex flex-column justify-content-center align-items-center'>
                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-clock" width="100" height="100" viewBox="0 0 24 24" strokeWidth="1" stroke="#ff9300" fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <circle cx="12" cy="12" r="9" />
                        <polyline points="12 7 12 12 15 15" />
                    </svg>
                    <h3 className='mb-5'>A TIEMPO</h3>
                    <p className='text-center'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer eleifend, dui eu scelerisque elementum,
                        ante est mattis mi, id semper turpis augue eget purus. Suspendisse sit amet lectus interdum.
                    </p>
                </div>
            </div>
        </>
    )
}

export default NosotrosDetalles
