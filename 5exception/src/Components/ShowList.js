import React from "react";
import CreateList from "./CreateList";
import request from 'superagent';
import axios from 'axios';

class ShowList extends React.Component {
constructor(props) {
super(props);
  state = {
         getData:''
      
  };
}
componentDidMount() {
   this.loadSaveData();
 }
loadSaveData=e=>{
    axios.get('http://localhost/api/getAllData.php',{crossDomain: true},{
      headers: {
          'Access-Control-Allow-Origin': '*',
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          "Access-Control-Allow-Methods": "GET,HEAD,OPTIONS,POST,PUT"
        }
    }
    ).then(res=>
    {
      if(res.data!='error'){
         alert('Data insert');
      }else{
         alert('Something went wrong');
         
      }
    console.log(res.data);
    })
 }
  render() {
    let { formDetails } = this.state;
    return (
      <div className="content container">
        <form onSubmit={this.handleSubmit} onChange={this.handleChange}>
          <div className="row mx-auto" style={{ marginTop: 20 }}>
            <div className="col-sm-12">
              <h2 className="text-center"> Enter Book Details</h2>
              <div className="container">
                <div className="row">
                  <CreateList
                    add={this.addNewRow}
                    delete={this.clickOnDelete.bind(this)}
                    formDetails={formDetails}
                  />
                </div>
                <div className="row" >
                   <button type="submit" className="btn btn-primary">Save</button>
                </div>   
              </div>
            </div>
          </div>
        </form>
      </div>
    );
  }
}
export default ShowList;
