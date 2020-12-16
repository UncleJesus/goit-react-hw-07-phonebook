import React, { Component } from "react";
import { connect } from "react-redux";
import contactsActions from "../redux/contacts/contactsActions";

import style from "./ContactForm.module.css";

class ContactForm extends Component {
  state = {
    name: "",
    number: "",
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.toAddContacts(this.state.name, this.state.number);
    this.setState({
      name: "",
      number: "",
    });
  };
  render() {
    return (
      <form className={style.form} onSubmit={this.handleSubmit}>
        <label className={style.inputTitle}>
          Name
          <input
            className={style.input}
            name="name"
            type="text"
            value={this.state.name}
            onChange={this.handleChange}
          />
        </label>
        <label className={style.inputTitle}>
          Number
          <input
            className={style.input}
            name="number"
            type="phone"
            value={this.state.number}
            onChange={this.handleChange}
          />
          <button
            type="submit"
            disabled={!this.state.name.length || !this.state.number.length}
            className={style.btn}
          >
            Add contact
          </button>
        </label>
      </form>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  // const { name, number } = this.state
  return {
    toAddContacts: (name, number) =>
      dispatch(contactsActions.addContacts(name, number)),
  };
};
export default connect(null, mapDispatchToProps)(ContactForm);
