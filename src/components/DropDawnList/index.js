import './DropDawnList.css'
const DropDawnList = (props) => {
    return (
        <div className="drop-down-list">
            <label>{props.label}</label>
            <select>
                {props.itens.map(item => <option key={item}>{item}</option>)}
            </select>
        </div>
    )
}

export default DropDawnList