import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';


const App = () => {

  return (
      <div style={{ display: "flex", flexDirection: "column", gap: "15px", margin: "0 auto", padding: "30px"}}>
        <h1>Phonebook</h1>
        <ContactForm />
        <h2>Contacts</h2>
        <Filter />
        <ContactList />
      </div>
    );

  };

export default App
