import './ButtonCloseOpen.css'

const ButtonCloseOpen = (props) => {

    return(
        <div className='button-close-open'>
            <button style={{backgroundColor: props.buttonColor}} onClick={props.onClick}>{props.children}</button>
        </div>
    )
}

export default ButtonCloseOpen