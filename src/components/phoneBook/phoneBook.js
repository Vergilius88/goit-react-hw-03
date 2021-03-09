import { Component } from "react";
import createContact from "./createContact/createContact";
import ContactUsers from "./contactUsers/contactUsers";
import FormOfAdding from "./formOfAdding/formOfAdding";
import Filter from "./filterContacts/filterContacts";

export default class PhoneBook extends Component {
  static propTypes = {};

  static defaultProps = {};

  state = {
    contacts: [],
    filter: "",
  };

  componentDidMount() {
    const contactsLocalStorage = localStorage.getItem("contacts");
    const parsedContacts = JSON.parse(contactsLocalStorage);
    if (parsedContacts) {
      this.setState({ contacts: parsedContacts });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem("contacts", JSON.stringify(this.state.contacts));
    }
  }

  addContact = (newContact) => {
    this.setState((prevState) => {
      return {
        contacts: [...prevState.contacts, createContact(newContact)],
      };
    });
  };

  removeContact = (contactId) => {
    this.setState((prevState) => {
      return {
        contacts: [...prevState.contacts.filter(({ id }) => id !== contactId)],
      };
    });
  };

  findContact = ({ target }) => {
    const { value } = target;
    this.setState({ filter: value });
  };

  render() {
    const { contacts, filter } = this.state;

    return (
      <>
        <FormOfAdding onAddContact={this.addContact} />
        <Filter onChange={this.findContact} />
        <ContactUsers
          contacts={contacts}
          filter={filter}
          onRemoveContact={this.removeContact}
        />
      </>
    );
  }
}
