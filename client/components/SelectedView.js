var React = require('react');
var SelectedItem = require('./SelectedItem');

var SelectedView = React.createClass({

    getInitialState : function() {
      return ({

      })
    },

    render : function() {
      return (
        <div style={style}>
        <h1>{this.props.selected.name}</h1>
          <SelectedItem selected = {this.props.selected}/>
        </div>
      )
    }
  }
);

var style = {
  backgroundColor: '#900',
  color: '#FC0',
  padding: '5px'
};

module.exports = SelectedView;
