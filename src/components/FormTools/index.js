import './FormTools.css'
import TextField from '../TextField'
import DropDawnList from '../DropDawnList'
import ButtonForm from '../ButtonForm'
import { useState } from 'react'
const FormTools = (props) => {

        

    const onSalve = (event) => {
        event.preventDefault()
        

        props.IfRegisteredCollaborator({
            nome,
            objetivo,
            imagem,
            site,
            category: category
        })

    }

    const [nome, setNome] = useState('')
    const [objetivo, setObjetivo] = useState('')
    const [imagem, setImagem] = useState('')
    const [site, setSite] = useState('')
    const [category, setCategory] = useState(props.TeamsNames[0])

    


   


    return (
        <section className='form-tools'>
            <form onSubmit={onSalve} >
                <h2>Preencha o formulário para criar uma nova ferramenta</h2>
                <TextField
                    isEmpty={true}
                    label='Nome'
                    placeholder="Digite seu nome"
                    value={nome}
                    whenType={setNome}
                />

                <TextField
                    isEmpty={true}
                    label='Objetivo'
                    placeholder='Digite o objetivo da ferramenta'
                    value={objetivo}
                    whenType={setObjetivo}
                />
                <TextField
                    isEmpty={true}
                    label='Imagem'
                    placeholder='Digite o link da imagem da ferramenta'
                    value={imagem}
                    whenType={setImagem}
                />
               <TextField
                    isEmpty={true}
                    label='Site'
                    placeholder='Digite o link do site da ferramenta'
                    value={site}
                    whenType={setSite} />
                <DropDawnList
                    itens={props.TeamsNames}
                    label="Selecione uma categoria"
                    whenType={value => setCategory(value)}
                />
                <ButtonForm>Criar card</ButtonForm>
            </form>
        </section>
    )
}

export default FormTools