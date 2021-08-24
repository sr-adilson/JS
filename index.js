import { Person } from "./Models/Person.js"
import { TypeUser } from "./Models/TypeUser.js";
import { TypeUser } from "./Models/TypeUser.js";
import { User } from "./Models/User.js";
import { Crud } from "./Repository/XRepository.js"

let M = new User();
let K = new TypeUser();
// M.id = 585;
// M.fisrtName = "Adilson";
// M.lastName = "Ramos";
// M.birthDate = "23/08/1989";

// M.user.id = 549;
// M.user.document = "Sei la";
M.email = "Sr@seila";
M.password = "FuckingPassword";
M.typeUser = typeUser.id;
// M.Name = "Eita porra";
// M.Description = "oque é isso eu nao sei";
let xis = new Crud();
xis.create(M);
console.log(M)


