import { useState } from 'react';
import Banner from './components/Banner';
import FormTools from './components/FormTools';
import ListItem from './components/ListItem';


function App() {

  const teams = [
    {
      name: "DevOps",
      primaryColor: "#05224E",
      secondColor: "#92A5E0", 
    },
    {
      name: "Desing",
      primaryColor: "#382480",
      secondColor: "#6F47A2",
    },
    {
      name: "Organização",
      primaryColor: "#237CC4",
      secondColor: "#2D9CE0",
    },
    {
      name: "Ides",
      primaryColor: "#75457D",
      secondColor: "#9F5EA3",
    },
    {
      name: "Stacks",
      primaryColor: "#F55752",
      secondColor: "#F58A84",
    }
  ]


  const [collaborators, setCollaborator] = useState([])
  const IsRegisteredCollaborator = (collaborator) => {
    setCollaborator([...collaborators, collaborator])
    console.log(collaborators)
  }

  return (
    <div className="App">
      <Banner />
      <FormTools TeamsNames={teams.map ( t => t.name)} IfRegisteredCollaborator={collaborator => IsRegisteredCollaborator(collaborator)} />

      {teams.map(tool =>
        <ListItem
          key={tool.name}
          name={tool.name}
          primaryColor={tool.primaryColor}
          secondColor={tool.secondColor}
          collaboratorsList={collaborators}
        />
        
      )}
    </div>
  );
}

export default App;
