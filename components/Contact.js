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
          React.createElement('p', {className: 'contactLabel'}, 'Nombre ' + this.props.item.firstName),
          React.createElement('p', {className: 'contactLabel'}, 'Primer apellido ' + this.props.item.lastName),
          React.createElement('p', {className: 'contactLabel'}, 'Segundo apellido ' + this.props.item.secondLastName),
          React.createElement('a', {className: 'contactEmail', href: 'mailto:' + this.props.item.email}, this.props.item.email
        )
      )
    )
  },
});
