import './ButtonForm.css'
const ButtonForm = (props) =>{
    return(
        <div className='button-form' onClick={props.onClick}>
        <button>{props.children}</button>
        </div>
    )
}

export default ButtonForm