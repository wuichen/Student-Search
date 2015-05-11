var Reflux = require('reflux');
var StudentActions = require('../actions/StudentActions');
var request = require('superagent');


var students = [
    {   id:1, 
        name: 'steven',
        major: 'info',
        gpa: '3.3'

    },{
        id:2, 
        name: 'john',
        major: 'arts',
        gpa: '3.9'

    },{
        id:3, 
        name: 'jack',
        major: 'business',
        gpa: '2.9'

    },    {   id:4, 
        name: 'steven',
        major: 'info',
        gpa: '3.3'

    },{
        id:5, 
        name: 'john',
        major: 'arts',
        gpa: '2.4'

    },{
        id:6, 
        name: 'jack',
        major: 'business',
        gpa: '2.1'

    },    {   id:7, 
        name: 'steven',
        major: 'info',
        gpa: '3.0'

    },{
        id:8, 
        name: 'john',
        major: 'arts',
        gpa: '3.1'

    },{
        id:9, 
        name: 'jack',
        major: 'business',
        gpa: '2.1'

    },    {   id:15, 
        name: 'steven',
        major: 'info',
        gpa: '3.3'

    },{
        id:10, 
        name: 'john',
        major: 'arts',
        gpa: '3.9'

    },{
        id:11, 
        name: 'jack',
        major: 'business',
        gpa: '2.4'

    },    {   id:12, 
        name: 'steven',
        major: 'info',
        gpa: '3.2'

    },{
        id:13, 
        name: 'john',
        major: 'arts',
        gpa: '2.2'

    },{
        id:14, 
        name: 'jack',
        major: 'business',
        gpa: '2.7'

    }

]
var StudentStore = Reflux.createStore({
    listenables: [StudentActions],
    init: function() {
        this.students = students;
        this.inputMajor = "";
        this.inputGPA = null;
    },

    onSearch() {
        var self = this;
        var results = [];
        if(self.inputMajor.length != 0 && self.inputGPA != null){
            students.forEach(function(student) {

                if(student.major == self.inputMajor && student.gpa == self.inputGPA){   
                    results.push(student);
                }
            });
            this.students = results;
            this.trigger({students: this.students});
        }else if(self.inputMajor.length != 0 && self.inputGPA == null){
            students.forEach(function(student) {

                if(student.major == self.inputMajor){   
                    results.push(student);
                }
            });
            this.students = results;
            this.trigger({students: this.students});
        }else if(self.inputMajor.length == 0 && self.inputGPA != null){
            students.forEach(function(student) {

                if(student.gpa == self.inputGPA){   
                    results.push(student);
                }
            });
            this.students = results;
            this.trigger({students: this.students});
        }



    },

    getAll(){
        this.trigger({students: students});
    },

    onSetMajor(input) {
        this.inputMajor = input;
        this.trigger({inputMajor: this.inputMajor});
    },
    onSetGPA(input) {
        // this.trigger({inputGPA: input});
        // console.log(this.inputGPA);
        this.inputGPA = input;
        this.trigger({inputGPA: this.inputGPA});
    },

    getInitialState() {
        return {inputMajor: this.inputMajor, inputGPA: this.inputGPA, students : this.students};
    }
});

module.exports = StudentStore;