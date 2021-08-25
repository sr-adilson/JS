import { Person } from "./Models/Person.js"
import { TypeUser } from "./Models/TypeUser.js";
import { User } from "./Models/User.js";
import {PersonRepository} from "./Repository/PersonRepository.js"

let person = new Person();
let user = new User();
let typeUser = new TypeUser();

person.firstName = "Eita";
person.lastName = "Ramos";
person.birthDate = "1999-04-16T00:00:00";
person.document = "Seila";
person.user = user;

user.password = "FuckingPassword";
user.email = "Sr@seila";
user.typeUser = typeUser;

typeUser.Name = "T name";
typeUser.Description = "Descricao T";

let xis = new PersonRepository();
// xis.create(person);
// console.log(person)
// xis.read().then(list => {
//     list.forEach(e => {
//         console.log(e)
//     });
// });
// xis.read_by_Id(2).then(e => console.log(e));
person.id = 2;
// xis.update(person)
xis.delete(2)

