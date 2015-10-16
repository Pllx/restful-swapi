var React = require('react');

var OptionsItem = React.createClass({

    selectCurrent : function() {
      {this.props.updateSelected(this.props.option)}
    },

    getInitialState : function() {
      return ({

      })
    },

    render : function() {
      return (
        <div style={style} onClick={this.selectCurrent}>
        {this.props.option.name}
        </div>
      )
    }
  }
);

var style = {
  backgroundColor: '#FC0',
  color : '#900',
  border: 'black 1px solid',
  width: '100px',
  height: '100px',
  display: 'inline-block',
  margin: '5px',
  padding: '5px',
  verticalAlign: 'top'
};

module.exports = OptionsItem;
