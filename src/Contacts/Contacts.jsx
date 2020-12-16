import React, { Component } from "react";
import PropTypes from "prop-types";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { connect } from "react-redux";

import contactsActions from "../redux/contacts/contactsActions.js";

import style from "./Contacts.module.css";

class Contacts extends Component {
  componentDidMount() {
    this.props.toPostContacts();
  }

  componentDidUpdate(prevProps, prevState) {
    return this.props.contacts
      ? localStorage.setItem("contacts", JSON.stringify(this.props.contacts))
      : [];
  }

  render() {
    return (
      <TransitionGroup component="ul" className={style.list}>
        {this.props.contacts.length
          ? this.props.contacts.map((contact) => (
              <CSSTransition key={contact.id} timeout={250} classNames={style}>
                <li className={style.item} key={contact.id}>
                  {contact.name}: {contact.number}
                  <button
                    className={style.btn}
                    onClick={() => this.props.onDelete(contact.id)}
                    type="button"
                  >
                    Delete
                  </button>{" "}
                </li>
              </CSSTransition>
            ))
          : []}
      </TransitionGroup>
    );
  }
}

Contacts.propTypes = {
  contacts: PropTypes.array.isRequired,
  onDelete: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
  const filteredNames = state.contacts.items.filter((contact) =>
    contact.name.toLowerCase().includes(state.contacts.filter.toLowerCase())
  );
  return {
    contacts: filteredNames,
  };
};
const mapDispatchToProps = {
  onDelete: contactsActions.handleDelete,
  toPostContacts: contactsActions.postContacts,
};
export default connect(mapStateToProps, mapDispatchToProps)(Contacts);
