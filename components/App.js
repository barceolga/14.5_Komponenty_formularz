
var contacts = [
  {
    id: 1,
    firstName: 'Juan',
    lastName: 'López',
    secondLastName: 'Carrillo',
    email: 'juan.lopezcarrillo@example.com',
  },
  {
    id: 2,
    firstName: 'María',
    lastName: 'Delgado',
    secondLastName: 'Pérez',
    email: 'maria.delgadoperez@example.com',
  },
  {
    id: 3,
    firstName: 'Iker',
    lastName: 'Mendietta',
    secondLastName: 'Piñeiro',
    email: 'iker.mendiettapineiro@example.com',
  }
];

var contactForm = {
  firstName: '',
  lastName: '',
  secondLastName: '',
  email: ''
}


var App = React.createClass({
  render: function() {
    return (
      React.createElement('div', {className: 'app'},
        React.createElement(ContactForm, {contact: contactForm}),
        React.createElement(Contacts, {items: contacts}, {})
      )
    );
  }
});
