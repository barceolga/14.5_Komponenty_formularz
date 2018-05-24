class ContactForm extends React.Component{
  constructor(contact) {
    super(contact);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    //React.createElement(Contact, {item: item})
    event.preventDefault();
  }

  render() {

  return (
      <form onSubmit={this.handleSubmit}>
          <input type="text" value={this.state.value} onChange={this.handleChange} placeholder="Nombre"/>
          <input type="text" value={this.state.value} onChange={this.handleChange} placeholder="Primer apellido"/>
          <input type="text" value={this.state.value} onChange={this.handleChange} placeholder="Segundo apellido" />
          <input type="text" value={this.state.value} onChange={this.handleChange} placeholder="Correo electrónico"/>
        <button type="submit" value="Añadir contacto" />
      </form>
    );
  }
}
