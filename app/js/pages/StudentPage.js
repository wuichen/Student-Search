
var React         = require('react/addons');
var Link          = require('react-router').Link;
var DocumentTitle = require('react-document-title');
var Reflux = require('reflux');
var StudentStore = require('../stores/StudentStore');
var StudentActions = require('../actions/StudentActions');


var styles = {

    cardDiv: {
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap'
    },
    card: {
        display: 'inline-block',
        background: '#FEFEFE',
        border: '2px solid #FAFAFA',
        boxShadow: '0 1px 2px rgba(34, 25, 25, 0.4)',
        margin: '0 2px 15px',
        padding: '15px',
        paddingBottom: '5px',
        background: '-webkit-linear-gradient(45deg, #FFF, #F9F9F9)'

    },
    cardImage: {
        width: '300px',
        borderBottom: '1px solid #ccc',
        paddingBottom: '15px',
        marginBottom: '5px'
    },
    cardDes: {
        font: '12px/18px Arial, sans-serif',
        color: '#333',
        margin: 0
    },
    searchDiv: {
        margin: '40px auto',
        width: '400px'
    },
    searchBox: {
        background: '#eee',
        padding: '10px',
        borderRadius:'10px 10px 10px 10px', 
        border:'0 none',
        width:'95%',
        textAlign: 'center'
    },
    searchButton: {
        background:'#0099ff',
        color:'white',
        font: 'helvetica',
        padding:'10px 20px',
        borderRadius:'0 10px 10px 0',
        border:'0 none',
        fontWeight:'bold'
    },
    allBtn:{
        width: '100%',
        marginTop: '20px',
        background:'#0099ff',
        color:'white',
        font: 'helvetica',
        padding:'10px 20px',
        border:'0 none',
        fontWeight:'bold'
    },
    gpaTitle:{
        margin: '10px auto',
        color: '#0099ff',
        textAlign: 'center'
    },
    range: {
        width: '100%'
    }
}
var StudentPage = React.createClass({

    mixins: [Reflux.connect(StudentStore)],

    setInputMajor(event) {
        StudentActions.setInputMajor(event.target.value);
    },
    // searchGPA(){
    //     StudentActions.setGPA(this.refs.gpa.getDOMNode().value);
    //     StudentActions.searchGPA(this.refs.gpa.getDOMNode().value);
    // },
    search() {
        StudentActions.search();
    },
    setMajor(e) {
        StudentActions.setMajor(e.target.value);
    },
    setGPA() {
        StudentActions.setGPA(this.refs.gpa.getDOMNode().value/10);
    },
    handleKeyDown(e) {
        if(e.which == 13){
          e.preventDefault();
            StudentActions.search();
        }
    },
    render() {
        var GPAScale;
        if(this.state.inputGPA != null){
            GPAScale = <div style={styles.gpaTitle}>{this.state.inputGPA}</div>
        }else{
            GPAScale = <div style={styles.gpaTitle}>Search GPA</div>;
        }
        return (

        	<DocumentTitle title="Students">
	        	<section>  
                    <div style={styles.searchDiv} onKeyDown={this.handleKeyDown}>                  
                        <input placeholder="search for majors" value={this.state.inputMajor} ref="major" style={styles.searchBox} type="text" onChange={this.setMajor} />
                        
                        <div>{{GPAScale}}</div>
                        
                        <input style={styles.range} type="range" ref="gpa"  min="0" max="40" onChange={this.setGPA} />

                        <button style={styles.allBtn} onClick={this.search}>
                            Search
                        </button>
                        <button style={styles.allBtn} onClick={StudentActions.getAll}>
                            Show All
                        </button>
                        
                    </div>

                    <div style={styles.cardDiv}>
                        {this.state.students.map(function(student) {
                          return <div style={styles.card} key={student.id}>
                                    <img style={styles.cardImage} src="https://scontent-sea.xx.fbcdn.net/hphotos-xfa1/t31.0-8/10448473_10203587589877858_516098939132365563_o.jpg" />
                                    <p style={styles.cardDes}>Name: {student.name}</p>
                                    <p style={styles.cardDes}>Major: {student.major}</p>
                                    <p style={styles.cardDes}>GPA: {student.gpa}</p>
                                </div>;
                        })}
                    </div>



	        	</section>

        	</DocumentTitle>

        );
    }
})

module.exports = StudentPage;