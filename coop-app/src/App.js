import React from 'react';
import ReactDOM from 'react-dom';

import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header></Header>
      </header>
        <div id="body">
        <HowItWorks></HowItWorks>
        <Positions></Positions>
        </div>
      <div>
      <Schools></Schools>
      feedback: ccarrster@gmail.com
      </div>
    </div>
  );
}

class Header extends React.Component {
  render(){
    return (
      <div className="head">
        <div className="headerFloat">
          <img src="sundial.jpg" alt="sundial"></img>
        </div>
        <div className="headerFloat">
        <h1>Sundial</h1>
        <ul>
          <li>One job posting, many schools.</li>
        </ul>
        </div>
        <ProfileView></ProfileView>
      </div>
    );
  }
}


class HowItWorks extends React.Component {
  render(){
    return (
      <div className="howitworks">
        <div className="howtext">
        <h1>How It Works</h1>
        <ul>
          <li>Why post your Co Op position to all these Ontario Universities and Colleges?</li>
          <li>Why exclude students from other schools?</li>
          <li>Submit once with Sundial and we will post it to every University and College you want.</li>
          <li>You submit one Co Op job posting.</li>
          <li>We submit it to all the schools you want.</li>
          <li>We list your position for students to find.</li>
          <li>You review all applicants through one interface.</li>
        </ul>
        </div>
          <div className="howimage">
            <img src="how.png" alt="how"></img>
          </div>
          <div className="clear"></div>
      </div>
      
    );
  }
}


class Application extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      term: 0,
      length: 0,
      field: 0,
      schools: [],
      description: ""
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event){
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit(event){
    alert(this.state.term);
    positions.push({id: 555, companyid: 1, title: "new job", schoolids: [], termid: this.state.term, lengthid: this.state.length, fieldid: this.state.field, description: this.state.description, status: 0});
    console.log(positions);
    event.preventDefault();


    positionList=positions.map((position, index)=>{
      return <tr key={position.id}>
        <td>{position.title}</td><td>{terms[position.termid]}</td><td>{lengths[position.lengthid]}</td><td>{fields[position.fieldid]}</td><td>{appliantCount(position.id)}</td><td>{statuses[position.status]}</td><td><a href={position.id}>Details</a></td>
      </tr>
    });


    ReactDOM.render(
      <div>
        <HowItWorks></HowItWorks>
        <Positions></Positions>
      </div>,
      document.getElementById('body')
    );
  }

  render(){
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
        <div>
          <div>
            Term
          </div>
          <div>
            <select name="term" onChange={this.handleInputChange}>
              {termsList}
            </select>
          </div>
        </div>
        <div>
          <div>
            Length
          </div>
          <div>
          <select name="length" onChange={this.handleInputChange}>
              {lengthList}
            </select>
          </div>
        </div>
        <div>
          <div>
            Study Field
          </div>
          <div>
            <select name="field" onChange={this.handleInputChange}>
              {fieldList}
            </select>
          </div>
        </div>
        <div>
          <div>
            Schools
          </div>
          <div>
            <SchoolSelections></SchoolSelections>
          </div>
        </div>
        <div>
          <div>
            Job Description
          </div>
          <div>
            <textarea name="description" onChange={this.handleInputChange}></textarea>
          </div>
        </div>
        <div>
          <div>
            <input type="submit"></input>
          </div>
        </div>
        </form>
      </div>
    );
  }
}


class ProfileView extends React.Component {
  render(){
    return (
      <div className="profileView">
        <img src="goat.JPG" alt="profile headshot" className="profilePic"></img>
        Chris
        <img src="hamburger.png" alt="profile menu"></img>
      </div>
    );
  }
}

class Profile extends React.Component {
  render(){
    return (
      <div>
        <div>
          <div>
            Email
          </div>
          <div>
            <input type="text"></input>
          </div>
        </div>
        <div>
          <div>
            Password
          </div>
          <div>
            <input type="password"></input>
          </div>
        </div>
        <div>
          <div>
            Company
          </div>
          <div>
            <input type="text"></input>
          </div>
        </div>
        <div>
          <div>
            Address
          </div>
          <div>
            <input type="text"></input>
          </div>
        </div>
        <div>
          <div>
            <input type="submit"></input>
          </div>
        </div>
      </div>
    );
  }
}

class Schools extends React.Component {
  render() {
    return (
      <div className="schoollist">
        {schoolList}
      </div>
    );
  }
}

class SchoolSelections extends React.Component {
  render() {
    return (
      <div className="schoolselection">
        {schoolSelection}
      </div>
    );
  }
}

function newPosition(){
  ReactDOM.render(
    <Application/>,
    document.getElementById('body')
  );
}

class Positions extends React.Component {
  render() {
    return (
      <div>
        <div>
          <input type="button" value="New Co Op Position" onClick={newPosition}></input>
          </div>
      <div>
        <h3>Co Op Positions</h3>
      </div>
      <table>
        <thead>
        <tr>
          <td>Title</td>
          <td>Term</td>
          <td>Length</td>
          <td>Field</td>
          <td>Applicants</td>
          <td>Status</td>
        </tr>
        </thead>
        <tbody>
        {positionList}
        </tbody>
      </table>
      </div>
    );
  }
}

let schools = [
  {id: 1, name: "Algoma", image: "algoma.gif", url: "https://www.algomau.ca/academics/co-operative-education/"},
  {id: 2, name: "Algonquin College", image: "algonquin_college.png", url: "https://www.algonquincollege.com/coop/"},
  {id: 3, name: "Anishinabek Educational Institute", image: "anishinabek-12-19.png", url: "https://aeipostsecondary.ca/"},
  {id: 4, name: "College Boreal", image: "boreal.png", url: "https://www.collegeboreal.ca/"},
  {id: 5, name: "Brock University", image: "brock2.gif", url: "https://brocku.ca/ccee/co-op-education/"},
  {id: 6, name: "Cambrian College", image: "cambrian.gif", url: "https://www.algomau.ca/academics/co-operative-education/"},
  {id: 7, name: "Canadore College", image: "canadore.png", url: "https://www.canadorecollege.ca/support/student-employment"},
  {id: 8, name: "Carleton University", image: "carleton.gif", url: "https://carleton.ca/co-op/"},
  {id: 9, name: "Centennial College", image: "centennial.jpg", url: "https://www.centennialcollege.ca/student-life/career-services-and-co-operative-education/co-op-education-at-centennial/"},
  {id: 10, name: "Conestoga College", image: "conestog.gif", url: "https://www.conestogac.on.ca/co-operative-education"},
  {id: 11, name: "Confederation College", image: "confed.gif", url: "https://www.confederationcollege.ca/co-op-work-placement-services"},
  {id: 12, name: "Durham College", image: "durhamLogo.jpg", url: "https://durhamcollege.ca/student-life/student-services/co-operative-education"},
];
let schoolList=schools.map((school, index)=>{
  return <span className="School" key={school.id}>
    <a href={school.url} target="_blank"><img src={school.image} alt="School"></img></a>
    </span>
});

let schoolSelection=schools.map((school, index)=>{
  return <div className="SelectionSchool" key={school.id}>
      <input type="checkbox" name={school.id}></input>{school.name} <img src={school.image} alt="School"></img>
    </div>
});

let companies = [
  {id: 1, name: "Test Company", email: "testemail@example.com", address: "address"}
];

let positions = [
  {id: 1, companyid: 1, title: "Test Job", schoolids: [1, 3, 4, 5, 6], termid: 1, lengthid: 1, fieldid: 1, description: "Test description", status: 0},
  {id: 2, companyid: 1, title: "Test Job2", schoolids: [4, 5, 6, 12], termid: 2, lengthid: 2, fieldid: 2, description: "Test description 2", status: 1},
  {id: 3, companyid: 1, title: "Test Job3", schoolids: [4, 5, 6, 12], termid: 2, lengthid: 2, fieldid: 2, description: "Test description 3", status: 2},
  {id: 1, companyid: 2, title: "Test Job", schoolids: [1, 3, 4, 5, 6], termid: 1, lengthid: 1, fieldid: 1, description: "Test description", status: 0},
  {id: 2, companyid: 3, title: "Test Job2", schoolids: [4, 5, 6, 12], termid: 2, lengthid: 2, fieldid: 2, description: "Test description 2", status: 1},
  {id: 3, companyid: 4, title: "Test Job3", schoolids: [4, 5, 6, 12], termid: 2, lengthid: 2, fieldid: 2, description: "Test description 3", status: 2},
  {id: 1, companyid: 5, title: "Test Job", schoolids: [1, 3, 4, 5, 6], termid: 1, lengthid: 1, fieldid: 1, description: "Test description", status: 0},
  {id: 2, companyid: 6, title: "Test Job2", schoolids: [4, 5, 6, 12], termid: 2, lengthid: 2, fieldid: 2, description: "Test description 2", status: 1},
  {id: 3, companyid: 7, title: "Test Job3", schoolids: [4, 5, 6, 12], termid: 2, lengthid: 2, fieldid: 2, description: "Test description 3", status: 2}

];

let applicants = [
  {id: 1, position: 1, name: "Test Appliant 1", school: 1},
  {id: 2, position: 1, name: "Test Appliant 2", school: 5},
  {id: 3, position: 2, name: "Test Appliant 3", school: 4},
  {id: 4, position: 2, name: "Test Appliant 4", school: 5},
  {id: 5, position: 3, name: "Test Appliant 5", school: 6},
  {id: 6, position: 3, name: "Test Appliant 6", school: 12},
  {id: 7, position: 3, name: "Test Appliant 7", school: 12}
];

function appliantCount(positionId){
  let count = 0;
  for(let key in applicants){
    let applicant = applicants[key];
    if(applicant.position == positionId){
      count += 1;
    }
  }
  return count;
}

let terms = ["Spring 2021", "Summer 2021", "Fall 2021", "Winter 2021","Spring 2022", "Summer 2022", "Fall 2022", "Winter 2022"];
let lengths = ["2 Months", "3 Months", "4 Months", "5 Months","6 Months"];
let fields = ["IT", "Software Deveopment", "Art", "Administration", "Education"];
let statuses = ["Pending", "Posted", "Closed", "Work", "Completed", "Cancelled"];

let positionList=positions.map((position, index)=>{
  if(position.companyid != 1){
    return;
  } else {
  return <tr key={position.id}>
    <td>{position.title}</td><td>{terms[position.termid]}</td><td>{lengths[position.lengthid]}</td><td>{fields[position.fieldid]}</td><td>{appliantCount(position.id)}</td><td>{statuses[position.status]}</td><td><a href={position.id}>Details</a></td>
  </tr>
  }
});

let termsList=terms.map((term, index)=>{
  return <option value={index}>{term}</option>
});

let lengthList=lengths.map((length, index)=>{
  return <option value={index}>{length}</option>
});

let fieldList=fields.map((field, index)=>{
  return <option value={index}>{field}</option>
});

export default App;

