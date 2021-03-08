import { Component } from "react";

import contactUsersStyles from "./contactUsersStyles";

const { H2, Ul, Li, Name, Button } = contactUsersStyles;

export default class ContactUsers extends Component {
  static propTypes = {};

  static defaultProps = {};

  filterContact = (contents, filter) => {
    return contents.filter(
      ({ name }) => !name.toLowerCase().indexOf(filter.toLowerCase())
    );
  };

  render() {
    const { contacts, filter, onRemoveContact } = this.props;
    const filteredContacts = this.filterContact(contacts, filter);
    return (
      <>
        <H2>Contacts </H2>
        <Ul>
          {filteredContacts.map(({ id, name, number }) => {
            return (
              <Li key={id}>
                <Name>
                  {name} :{number}
                </Name>
                <Button onClick={() => onRemoveContact(id)}>Delete</Button>
              </Li>
            );
          })}
        </Ul>
      </>
    );
  }
}
