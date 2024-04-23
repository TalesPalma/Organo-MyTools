import './ListItem.css'
import Card from '../Card'

const ListItem = (props) => {


    return (
        <section className='list-item' style={{ backgroundColor: props.secondColor }} >
            <h3 style={{ borderColor: props.primaryColor }} >{props.name}</h3>
            <div className='card-list'>
                {
                    props.collaboratorsList.map(collaborator =>
                        <Card
                            key={collaborator.nome}
                            name={collaborator.nome}
                            objetive={collaborator.objetivo}
                            colorHeader={props.primaryColor}
                            imagem={collaborator.imagem}
                            link={collaborator.site}
                        />
                    )
                }
            </div>
        </section>
    )

}

export default ListItem