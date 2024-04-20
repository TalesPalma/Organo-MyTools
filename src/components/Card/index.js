import './Card.css'

const Card = ({name,objetive,colorHeader,imagem,link}) => {

    return (
        <div className='card'>
            <div  className='header' style={{backgroundColor: colorHeader}}>
                <img src={imagem} alt='image user' />
            </div>
            <div className='baseboard'>
                <h4>{name}</h4>
                <h5>{objetive}</h5>
                <a style={{backgroundColor:colorHeader}} href={link}  target="_blank" >Site</a>
            </div>
        </div>
    )

}


export default Card