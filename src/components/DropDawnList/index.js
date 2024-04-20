import './DropDawnList.css'
const DropDawnList = (props) => {


        const whenTypeInternal = (event) => {
            props.whenType(event.target.value)
        }
    
    

    return (
        <div className="drop-down-list" >
            <label>{props.label}</label>
            <select onChange={whenTypeInternal}>
                {props.itens.map(item => <option key={item}>{item}</option>)}
            </select>
        </div>
    )
}

export default DropDawnList