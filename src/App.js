import { useState } from 'react';
import Banner from './components/Banner';
import FormTools from './components/FormTools';
import ListItem from './components/ListItem';
import teams from './models/teams.js';

function App() {


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
          collaboratorsList={collaborators.filter(collaborator => collaborator.category === tool.name)}
        />

      )}
    </div>
  );
}

export default App;
