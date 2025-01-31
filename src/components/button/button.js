import React from 'react'
import './button.css'

function Button({name, active, onClick}){


    return(
        <div className='containerButton'>
            <button onClick={() => onClick(20)} className={active ? 'button' : 'disabledButton'}>{name}</button>
            <span>Seus dados estão a salvo conosco</span>
        </div>
    )
}

export default Button