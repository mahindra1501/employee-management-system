import React,{Component} from 'react'
import serviceLayer from '../service/serviceLayer';
import UpdateEmployee from './UpdateEmployee';

export default  class EmployeeList extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            Employees:[],
            eid:0           }
}
deleteEmp(id){
    serviceLayer.deleteEmp(id).then((res)=>{
        window.location.reload()
        alert("Employee ID "+ id +" Will be Deleted")
    });
}
    componentDidMount(){
        serviceLayer.EmpList().then((Resp)=>{
            this.setState({Employees:Resp.data});
        }); 
    } 
      render(){
        if (this.state.eid>0)
        {
                    return(
                            <div>
                                 <UpdateEmployee emp={this.state.eid} />
                            </div>               
                    )   
        } 
        else{
                const opstate=this.props.mode
                if (opstate=="update") {
                    return (  
                        <div>
                            <br/><h3 align="center " className=" text-secondary">List for Update Employee </h3>
                            <table  className="table table">      
                                <thead className="thead-light">
                                    <tr>
                                        <th> EmpId </th>
                                        <th> First Name</th>
                                        <th> Last Name </th>
                                        <th> Contact  </th>
                                        <th> Address </th>
                                        <th> Action </th>
                                    </tr>    
                                </thead>
                                <tbody>
                                    {this.state.Employees.map(Employee=>
                                            <tr key={Employee.id}>
                                                <td> {Employee.empId}</td>
                                                <td> {Employee.fName}</td>
                                                <td> {Employee.lName}</td>
                                                <td> {Employee.mob}</td>
                                                <td> {Employee.address}</td>                       
                                                <td><button className="btn btn-warning " onClick={()=> {this.setState({eid:Employee.empId})}}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
            <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
            <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
            </svg>  </button></td>
                                            </tr>
                                            )                                    
                                        }
                                </tbody>
                            </table>
                        </div>
                    );            
                }    
            if (opstate=="list") {
                return (  
                    <div>
                        <br/><h3 align="center" className=" text-secondary">List Of Employees</h3>
                        <table  className="table table">
                        <thead className="thead-light">
                                <tr>
                                    <th> EmpId </th>
                                    <th> First Name</th>
                                    <th> Last Name </th>
                                    <th> Contact  </th>
                                    <th> Address </th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.state.Employees.map(Employee=>
                                        <tr key={Employee.id}>
                                            <td> {Employee.empId}</td>
                                            <td> {Employee.fName}</td>
                                            <td> {Employee.lName}</td>
                                            <td> {Employee.mob}</td>
                                            <td> {Employee.address}</td>                       
                                        </tr>
                                        )                                
                                    }
                            </tbody>
                        </table>
                    </div>
                );
            }    
            if (opstate=="delete") {
                return (  
                    <div>
                        <br/><h3 align="center " className=" text-secondary">List for Delete Employee  </h3>
                        <table  className="table table">             
                        <thead className="thead-light">
                                <tr>
                                    <th> EmpId </th>
                                    <th> First Name</th>
                                    <th> Last Name </th>
                                    <th> Contact  </th>
                                    <th> Address </th>
                                    <th> Action </th>
                            </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.Employees.map(Employee=>
                                        <tr key={Employee.id}>
                                            <td> {Employee.empId}</td>
                                            <td> {Employee.fName}</td>
                                            <td> {Employee.lName}</td>
                                            <td> {Employee.mob}</td>
                                            <td> {Employee.address}</td>                       
                                            <td><button className="btn btn-danger" onClick={()=>this.deleteEmp(Employee.empId)}><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-person-x" viewBox="0 0 16 16">
                                            <path d="M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H1s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C9.516 10.68 8.289 10 6 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"/>
                                            <path fill-rule="evenodd" d="M12.146 5.146a.5.5 0 0 1 .708 0L14 6.293l1.146-1.147a.5.5 0 0 1 .708.708L14.707 7l1.147 1.146a.5.5 0 0 1-.708.708L14 7.707l-1.146 1.147a.5.5 0 0 1-.708-.708L13.293 7l-1.147-1.146a.5.5 0 0 1 0-.708z"/>
                                            </svg>  </button></td>
                                        </tr>
                                        )                                
                                    }
                            </tbody>
                        </table>
                    </div>
                );       
            }
            if (opstate=="error") {
                return (
                        <div align="center">
                            <h3 className="text-secondary">Select Action</h3>
                        <img src="https://cdn.crmsoftwareblog.com/wp-content/uploads/nomaintenance-noworries-isometric.png.pagespeed.ce.B4ZbAdklMV.png" alt=" Select Action " height="600" width="800"></img>
                        </div>
                );
    }       
  }}    
}