import './App.css';
import EmployeeList from './component/EmployeeList';
import React, {Component} from 'react'
import AddEmployee from './component/AddEmployee';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      value:''       
    }    
  }  
  render(){
   const opstate=this.state.value
   console.log(opstate+"  opstate  Render===<<<<");   
   let displays;   
   if (opstate=="") {
     displays=<EmployeeList mode="error"/>
   }
    if (opstate == "list")
     {
      displays=<EmployeeList mode="list"/>
    }
    if  (opstate=="add") {
      displays=<AddEmployee/> 
    }
   if (opstate=="update")
    {
      displays=<EmployeeList mode="update"/>
    }
    if (opstate=="delete") {
      displays=<EmployeeList mode="delete"/>
    }
  return (
      <div className="app ">
                  <hr/>
                  <img src="https://www.neovasolutions.com/wp-content/uploads/2019/09/neova-tech-e1619439363239.png" className="ml-5" width="170" alt="Neova Solutions"></img>
                  <hr/>
                    <h3 className="text-light bg-dark  shadow  text-center"> Employee Management System </h3>
                    <div className="row   p-3  mb-5 bg-body rounded ">   
                                <div className=" col-2 bg-light text-dark" >
                                    
                                     <img src="https://findicons.com/files/icons/2526/bloggers/256/admin.png" className="rounded-circle" width="170" alt="Neova Solutions"></img>
                                  <br/><h3 align="center " className=" text-secondary">Admin DashBoard </h3><br/>
                                    <button className="btn btn-info btn-block p-2 mb-3     " onClick={ ()=> this.setState({value:"list"}) } >
                                      <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
                                      <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
                                        </svg>   Emp List 
                                    </button>
                                    <button className="btn btn-primary btn-block p-2 mb-3  " onClick={ ()=> this.setState({value:"add"})}   ><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-person-plus" viewBox="0 0 16 16">
                                        <path d="M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H1s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C9.516 10.68 8.289 10 6 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"/>
                                        <path fill-rule="evenodd" d="M13.5 5a.5.5 0 0 1 .5.5V7h1.5a.5.5 0 0 1 0 1H14v1.5a.5.5 0 0 1-1 0V8h-1.5a.5.5 0 0 1 0-1H13V5.5a.5.5 0 0 1 .5-.5z"/>
                                      </svg>   Add Emp 
                                    </button>
                                    <button className="btn btn-warning btn-block p-2 mb-3  " onClick={ ()=> this.setState({value:"update"})}><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
                                        <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                                        <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
                                      </svg> Update Emp </button>
                                    <button className="btn btn-danger btn-block p-2 mb-3   " onClick={ ()=> this.setState({value:"delete"})}><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-person-x" viewBox="0 0 16 16">
                                        <path d="M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H1s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C9.516 10.68 8.289 10 6 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"/>
                                        <path fill-rule="evenodd" d="M12.146 5.146a.5.5 0 0 1 .708 0L14 6.293l1.146-1.147a.5.5 0 0 1 .708.708L14.707 7l1.147 1.146a.5.5 0 0 1-.708.708L14 7.707l-1.146 1.147a.5.5 0 0 1-.708-.708L13.293 7l-1.147-1.146a.5.5 0 0 1 0-.708z"/>
                                      </svg> Delete Emp 
                                    </button>  
                                </div>
                          <div className="col-10 bg-light text-light">
                               {displays}                               
                          </div>
                     </div> 
                     <footer className="footer">
                    <div className="footer-copyright text-center ">© 2020 Copyright : 
                      <a href="https://www.neovasolutions.com/" className="text-dark"> Neova Solutions</a>
                    </div>
                  </footer>                        
      </div>
    );
  }
}
