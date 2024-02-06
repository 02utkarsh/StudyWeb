import React from 'react'

export const Iconsbtn = ({text,onclick,children,disabled,outline=false,customClasses,type}) => {
  return (
    // <div>Iconsbtn</div>
    <button 
        disabled={disabled}
        onClick={onclick}
        type={type}
    >
        {
            children?(
                <div>
                    <span>
                        {text}
                    </span>
                    {children}
                </div>
            ):(text)
        }
    </button>
  )
}
