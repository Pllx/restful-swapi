var React = require('react');

var SelectedItem = React.createClass({

  render : function() {
    return (
      <div style={style}>
        Home world : {this.props.selected.home}
        <br/>
        Species : {this.props.selected.speciesName}
        <br/>
        Birth year : {this.props.selected.birth_year}
        <br/>
        Gender : {this.props.selected.gender}
        <br/>
        Height : {this.props.selected.height}
      </div>
    )
  }

});

var style = {
  backgroundColor: '#f2f2f2',
  color: 'black',
  padding: '5px'
};

module.exports = SelectedItem;
