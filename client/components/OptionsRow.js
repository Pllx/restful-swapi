var React = require('react');
var OptionsItem = require('./OptionsItem');

var OptionsRow = React.createClass({

    getInitialState : function() {
      return ({

      });
    },

    render : function() {
      return (
        <div style={style}>
        <OptionsItem />
        <OptionsItem />
        <OptionsItem />
        </div>
      )
    }
  }
);

var style = {
  backgroundColor: 'white',
  border: 'black 1px solid',
  width: '100%',
  padding: '5px',
  margin: '2px'
};

module.exports = OptionsRow;
