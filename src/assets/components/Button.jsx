import React from 'react' 
 
const Button = ({varient, children, ...props}) => { 
    let ButtonName = 'px-4 py-2 rounded-full' 
    if (varient==='red'){ 
        ButtonName += ' bg-red-600 hover:bg-red-800 text-white font-normal outline outline-1 outline-red-500 hover:outline-red-700' 
    } 
    else if (varient==='transparant'){ 
        ButtonName += ' bg-transparent text-red-600 font-normal outline outline-offset-1 outline-red-600' 
    } 
  return ( 
    <button className={ButtonName} {...props}> 
        {children} 
    </button> 
  ) 
} 
 
export default Button