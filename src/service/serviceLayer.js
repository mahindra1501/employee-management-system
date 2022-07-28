import axios from 'axios'
const REST_API="http://localhost:8080//usermaster/"

class serviceLayer {   
    EmpList(){
        return axios.get(REST_API+'getallrecorde')
    }
    addEmp(emp){//AddEmp
        return axios.post(REST_API+'newrecorde',emp)
    }    
    getEmp(empid){//One Emp(FindById)
        return axios.get(REST_API+'emp/'+empid)
    }
    updateEmp(empid,emp){//UpdateEmp
        return axios.put(REST_API +'edit/'+empid,emp)
    }
    deleteEmp(empId){//deleteEmp
        return axios.delete(REST_API+'delete/'+empId)
    }
}
 
export default new serviceLayer;