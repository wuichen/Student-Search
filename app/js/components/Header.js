'use strict';

var React = require('react/addons');
var StyleSheet = require('react-style');

var styles = StyleSheet.create({
    header: {
      color: 'white',
      backgroundColor: '#0099ff',
      textAlign: 'center',
      fontSize: '30px',
      fontFamily: 'cursive'
    }
})
var Header = React.createClass({

  render: function() {
    return (
      <header>

        <div styles={styles.header}>
        	Student Search 
        </div>

      </header>
    );
  }

});

module.exports = Header;