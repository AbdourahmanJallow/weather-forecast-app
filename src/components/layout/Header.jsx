import React from 'react'

function Header() {
    return (
        <div className='navbar bg-neutral p-6 shadow-lg mb-12 text-neutral-content'>
            <header className='container max-w-4xl mx-auto flex justify-between font-bold text-xl text-white'>
                <h1 className='text-cyan-300'>Weather Forecast</h1>
            </header>
        </div>
    )
}

export default Header