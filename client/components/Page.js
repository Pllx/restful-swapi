var React = require('react');
var $ = require('jQuery');

var SelectedView = require('./SelectedView');
var OptionsView = require('./OptionsView');

var Page = React.createClass({

    // Helper methods:
    updateSelected: function(selection) {
      console.log('Ouch!!', selection.name);
      this.setState({
        selected : selection
      });
      $.get(selection.homeworld, function(home) {
        this.state.selected.home = home.name;
        this.setState({});
      }.bind(this));
    },

    // Lifecycle methods:
    getInitialState : function() {
      return ({
        selected : {},
        options : []
      });
    },

    componentDidMount : function() {
      console.log('in component did mount');
      // $.get('http://pokeapi.co/api/v1/pokedex/', function(data){
      //   console.log('pokemon',data.objects[0].pokemon);
      // });

      // people, planets, species, vehicles, films
      $.get('http://swapi.co/api/people/', function(people1) {

        //get page 1 of people
        this.setState({
          selected : people1.results[0],
          options: people1.results
        });

        //get page 2 of people
        $.get(people1.next, function(people2) {
          console.log(people2.results);
          this.state.options = this.state.options.concat(people2.results);
          this.setState({});
          console.log('new options',this.state.options)
        }.bind(this));

        // set default selected to Luke
        $.get(people1.results[0].homeworld, function(home) {
          this.state.selected.home = home.name;
          this.setState({});
        }.bind(this));
      }.bind(this));
    },

    render : function() {
      return (
        <div style={style}>
          <SelectedView selected={this.state.selected} />
          <br />
          <OptionsView options={this.state.options} updateSelected={this.updateSelected} />
        </div>
      )
    }
  }
);

var style = {
  backgroundColor : '#151515'
};

module.exports = Page;
