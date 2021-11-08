import React from "react";
import CreateList from "./CreateList";
import request from 'superagent';
import axios from 'axios';

class DisplayList extends React.Component {
constructor(props) {
super(props);
  this.state = {
         getData:[],
         isLoading:true,
         base_url: 'http://localhost/',        

      
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
         // alert('Data insert');
         // let data=JSON.parse(res.data);
         this.setState({getData:res.data})
         this.setState({isLoading:false})
      }else{
         alert('Something went wrong');
         
      }
    console.log(res.data);
    })
 }
 renderRows(){
  let html=[];
    let listDetails  = this.state.getData;
console.log(listDetails)
  listDetails.map((data,i)=>{
          console.log(data)
           html.push(
               <tr key={data.index}>
                <td><img src={this.state.base_url+data.image} width="50" height="50"/></td>
                <td>{data.title}</td>
                <td>{data.discription}</td>
                <td>{data.qty}</td>
                <td>{data.price}</td>
                <td>{data.date}</td>

              </tr>
            )
           })
    return html;       
 }
  render() {
    console.log(this.state.isLoading)
    let isLoading=this.state.isLoading
    return (
      <div className="content container">
              <h2 className="text-center mt-5"> Details</h2>
        <div className="row mx-auto mb-4">
           <a href="/" className="btn btn-primary">Add Data</a>
       </div>

        
         { isLoading ? (
            <p>Loading ...</p>
             ) :
             <table className='table'>
             <thead>
              <tr>
                <th>Image</th>
                <th>Title</th>
                <th>Discription</th>
                <th>Quantity</th>
                <th>Price</th>
                <th>Date</th>

              </tr>
             </thead>

              <tbody>
            { this.renderRows()}
              </tbody>
          </table>
             }
        
        
       

      </div>
    );
  }
}
export default DisplayList;
