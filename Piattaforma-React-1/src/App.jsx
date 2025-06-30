import React from 'react';
import Counter from './Components/Counter.jsx';
import TextInput from './Components/TextInput.jsx';
import LoginForm from './Components/LoginForm.jsx';
import UncontrolledInput from './Components/UncontrolledInput.jsx';
import ItemList from './Components/ItemList.jsx';
import Card from './Components/Card.jsx';

function App() {

  const Personi = ['Bambini', 'Uomini', 'Donne'];

  return (
    <>
      <Counter />
      <TextInput />
      <LoginForm />
      <UncontrolledInput />
      <ItemList items = {Personi} />
      <div>
        <Card>
          <h3>My Card</h3>
          <p>Lorem ipsum dolor sit amet.</p>
        </Card>
      </div>
    </>
  )
};

export default App
