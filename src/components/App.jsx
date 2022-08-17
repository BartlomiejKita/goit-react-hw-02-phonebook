import { Component } from 'react';
import { nanoid } from 'nanoid';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    name: '',
    number: '',
    filter: '',
  };

  getContacts = () => {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLocaleLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  handleSubmit = evt => {
    evt.preventDefault();
    this.addContact();
  };

  handleChange = evt => {
    const { name, value } = evt.target;
    this.setState({ [name]: value });
  };

  addContact = () => {
    let name = this.state.name;
    let number = this.state.number;
    const contact = { id: nanoid(), name: name, number: number };
    this.setState(({ contacts }) => ({ contacts: [contact, ...contacts] }));
  };

  render() {
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="">
            Name
            <input
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              onChange={this.handleChange}
              value={this.state.name}
            />
          </label>
          <label htmlFor="">
            Number
            <input
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
              onChange={this.handleChange}
              value={this.state.number}
            />
          </label>
          <button type="submit">Add contact</button>
        </form>
        <h2>Contacts</h2>
        <label htmlFor="">
          Find contacts by name
          <input
            type="text"
            name="filter"
            onChange={this.handleChange}
            value={this.state.filter}
          />
        </label>
        <ul>
          {this.getContacts().map(({ id, name, number }) => (
            <li key={id}>
              {name}: {number}
            </li>
          ))}
        </ul>
      </>
    );
  }
}

export default App;
