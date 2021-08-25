import axios from "axios";

export class Crud{
    #ip_base_url = "http://192.168.0.141/api/";
    #api;
    #endpoint;

    constructor(endpoint){
        this.#endpoint = endpoint;
        this.#api = axios.create({baseURL:this.#ip_base_url});
    }
    create(model){
        this.#api.post(this.#endpoint, model).then(x=> console.log(x.status));

    }
    async read(){
        return (await(this.#api.get(this.#endpoint).then())).data;
    }
    async read_by_Id(id){
        return (await(this.#api.get(`${this.#endpoint}/${id}`).then())).data;
    }
    update(model){
        this.#api.put(`${this.#endpoint}/${model.id}`, model).then(u=>console.log(u.status));
    }
    delete(Id){
        this.#api.delete(`${this.#endpoint}/${Id}`).then().status;
    }
}