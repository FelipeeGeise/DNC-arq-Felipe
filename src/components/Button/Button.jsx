import "./Button.css"
import whiteSeta from '../../assets/Seta.svg'


function Button({arrow, buttonStyle, loading, children,...props}){
   return (
    <button className={`button ${buttonStyle}`} {...props}>
        {children} {arrow && <img src={whiteSeta} />}
    </button>
   )
  
}

export default Button