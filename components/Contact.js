var Contact = React.createClass({
  propTypes: {
    item: React.PropTypes.object.isRequired
  },

  render: function() {
    return (
      React.createElement('div', {className: 'contactItem'},
        React.createElement('img', {
          className: 'contactImage',
          src: './components/contact.png'
        }),
          React.createElement('p', {className: 'contactLabel'}, 'Nombre ',
            React.createElement('span', {className: 'contactLabel_span'}, this.props.item.firstName)),
          React.createElement('p', {className: 'contactLabel'}, 'Primer apellido ',
            React.createElement('span', {className: 'contactLabel_span'}, this.props.item.lastName)),
          React.createElement('p', {className: 'contactLabel'}, 'Segundo apellido ',
            React.createElement('span', {className: 'contactLabel_span'}, this.props.item.secondLastName)),
          React.createElement('p', {className: 'contactEmail'}, 'Correo ',
            React.createElement('a', {className: 'contactEmail_link', href: 'mailto:' + this.props.item.email}, this.props.item.email)
        )
      )
    )
  },
});
