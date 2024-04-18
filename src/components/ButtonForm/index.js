import './ButtonForm.css'
const ButtonForm = (props) =>{
    return(
        <div className='button-form'>
        <button>{props.children}</button>
        </div>
    )
}

export default ButtonForm