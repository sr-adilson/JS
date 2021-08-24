import axios from "axios";
export class Crud{
    ip_base_url = "http://192.168.0.141/api/";
    api; 
    constructor(){
        this.api = axios.create({baseURL:this.ip_base_url});
    }
    create(model){
        this.api.post("User", model).then(x=> console.log(x.status));
    }
    // async Read(){
    //     await(this.api.get("this.x").then(list => list.forEach(e => {
    //         console.log(e)      
    //     }))).data;
    // }
    // async Read_by_Id(Id){
    //     await(this.api.get(`this.x/${Id}`).then()).data;
    // }
    // Update(model){
    //     this.api.put(`this.x/${Id}`, model).then(u=>console.log(u.status));
    // }
    // Delete(Id){
    //     this.api.delete(`this.x/${Id}`).then().status;
    // }
}


