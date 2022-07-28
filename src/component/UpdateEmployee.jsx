import React,{Component} from 'react';
import serviceLayer from '../service/serviceLayer';

export default class UpdateEmployee extends Component {
    constructor(props) {
        super(props);
        this.state = {
            empId:this.props.emp ,
            fName:'', 
            lName:'',
            mob  :'',
            address  :''
        }
        this.changefname=this.changefname.bind(this);
        this.changelname=this.changelname.bind(this);   
        this.changecontact=this.changecontact.bind(this);
        this.changeaddress=this.changeaddress.bind(this);
        this.update=this.update.bind(this);
    }
    changefname=(event)=>{
        this.setState({fName : event.target.value})
    }    
    changelname=(event)=>{
        this.setState({lName : event.target.value})
    }    
    changecontact=(event)=>{
        this.setState({mob : event.target.value})
    }
    changeaddress=(event)=>{
        this.setState({address : event.target.value})
    }      
    update=(e)=>{
        e.preventDefault();        
        let emp = {fName: this.state.fName,
            lName:this.state.lName,
            mob:this.state.mob,
            address:this.state.address
        };  
        serviceLayer.updateEmp(this.state.empId,emp).then(res =>{
            window.location.reload();
            alert(this.state.fName +" Employee is Updated")
        });
    }    
    componentDidMount(){
        serviceLayer.getEmp(this.state.empId).then((res) => {
            let employee=res.data; 
            this.setState({
                fName: employee.fName,
                lName: employee.lName,
                mob: employee.mob, 
                address: employee.address
            });
        });
    }    
    render() { 
        return (
            <div className="container"><br/>
                    <h3 className="text-center text-secondary">Update Employee</h3>
                    <div>
                        <form>
                            <div  align="center" className="container"  ><br/>
                                <input fName name="fName" className="form-control col-5 m-3" value={this.state.fName}    onChange={this.changefname}/>
                                <input  name="lName" className="form-control col-5 m-3" value={this.state.lName}    onChange={this.changelname}/>
                                <input  name="mob" className="form-control col-5 m-3" value={this.state.mob}    onChange={this.changecontact}/>
                                <input  name="address" className="form-control col-5 m-3" value={this.state.address}    onChange={this.changeaddress}/>
                                <button className="btn btn-info m-5" onClick={this.update}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-save" viewBox="0 0 16 16">
                                <path d="M2 1a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H9.5a1 1 0 0 0-1 1v7.293l2.646-2.647a.5.5 0 0 1 .708.708l-3.5 3.5a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L7.5 9.293V2a2 2 0 0 1 2-2H14a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h2.5a.5.5 0 0 1 0 1H2z"/>
                                </svg>{" "}Update</button>
                            </div>
                        </form>
                    </div>
                </div>
                );
    }
}
    