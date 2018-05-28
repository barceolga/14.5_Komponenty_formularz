class ContactForm extends React.Component{
  constructor(contact) {
    super();
    this.state = {
      firstName: '',
      lastName: '',
      secondLastName: '',
      eMail: ''
    };

    this.handleChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event) {
      const target = event.target;
      const value = target.value;
      const name = target.name;

      this.setState({
        [name]: value
      });
    }

  handleSubmit(event) {
 this.props.addTolist({
   firstName: this.state.firstName,
   lastName: this.state.lastName,
   secondLastName: this.state.secondLastName.
   emai: this.stateEmail,
   id: (newDate().getTime())
 });

    event.preventDefault();
  }

  render() {

  return (
      <form className={'contactForm'} onSubmit={this.handleSubmit}>
          <input
              type="text"
              name="firstName"
              value={this.state.firstName}
              onChange={this.handleChange}
              placeholder="Nombre"
          />
          <input
              type="text"
              name="lastName"
              value={this.state.lastName}
              onChange={this.handleChange}
              placeholder="Primer apellido"
          />
          <input
              type="text"
              name="secondLastName"
              value={this.state.secondLastName}
              onChange={this.handleChange}
              placeholder="Segundo apellido"
          />
          <input
              type="text"
              name="eMail"
              value={this.state.eMail}
              onChange={this.handleChange}
              placeholder="Correo electrónico"
          />
        <input
              className={'submit'}
              type="submit"
              value= "Añadir contacto" />
      </form>
    );
  }
}
