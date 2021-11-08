import React from "react";
import CreateList from "./CreateList";
import request from 'superagent';
import axios from 'axios';

class Dynamicform extends React.Component {
  state = {
    formDetails: [
      {
        index: Math.random(),
        image: "",
        title: "",
        discription: "",
        qty: "",
        price: "",
        date: "",

      }
    ]
  };
  handleChange = e => {
    if (
      ["image", "title", "discription", "qty", "price","date"].includes(
        e.target.name
      )
    ) {
       let formDetails = [...this.state.formDetails];
        if(e.target.name=='image'){
          const fd = new FormData();
            fd.append('image',e.target.files[0], e.target.files[0].name);
            axios.post('http://localhost/api/upload.php', fd,{crossDomain: true}
            ).then(res=>
            {
              // if(res.data!='error'){
              formDetails[e.target.dataset.id][e.target.name] =res.data;

              // }
            console.log(res.data);
            })

        }else{
          formDetails[e.target.dataset.id][e.target.name] = e.target.value;

        }
     
    } else {
      this.setState({ [e.target.name]: e.target.value });
    }
  };
  imageChanged=(item)=>{
       
   const headers= {
            'Access-Control-Allow-Origin': '*',
          }
    const fd = new FormData();
    fd.append('image',item, item.name);
    axios.post('http://localhost/api/upload.php', fd,{crossDomain: true}
    ).then(res=>
    {
      // if(res.data!='error'){
        return res.data;
      // }
    console.log(res.data);
    })
  }
  addNewRow = e => {
    this.setState(prevState => ({
      formDetails: [
        ...prevState.formDetails,
        {
          index: Math.random(),
          image: "",
          title: "",
          discription: "",
          qty: "",
          price: "",
          date: "",
        }
      ]
    }));
  };
 handleSubmit=e=>{
    e.preventDefault();
    console.log(this.state.formDetails)
    var url = "http://localhost/api/savedata.php";

    var data = JSON.stringify(this.state.formDetails);
    const fd = new FormData();
    fd.append('data',data);
    axios.post('http://localhost/api/savedata.php',fd,{crossDomain: true},{
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
  deteteRow = index => {
    this.setState({
      formDetails: this.state.formDetails.filter(
        (s, sindex) => index !== sindex
      )
    });
  };

  clickOnDelete(record) {
    this.setState({
      formDetails: this.state.formDetails.filter(r => r !== record)
    });
  }
  render() {
    let { formDetails } = this.state;
    return (
      <div className="content container">
       <div className="row mx-auto mb-4">
           <a href="/list" className="btn btn-primary ml-3">List</a>

       </div>
        <form onSubmit={this.handleSubmit} onChange={this.handleChange}>
          <div className="row mx-auto" style={{ marginTop: 20 }}>
            <div className="col-sm-12">
              <h2 className="text-center"> Enter  Details</h2>
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
export default Dynamicform;
