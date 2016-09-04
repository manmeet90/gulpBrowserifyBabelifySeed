import "babel-polyfill";
import { User } from "./User";
import "whatwg-fetch";
import { UserService } from "./UserService";


async function getAllUsers(){
    try{
        let users = await UserService.getUsers();
        users.forEach(_user => {
            let user = new User(_user.name, _user.email);
            let _elem = document.createElement("p");
            _elem.innerText = user.toString(); 
            document.querySelector("#target").appendChild(_elem);
        });
    }catch(err){
        console.log(err);
    }
}


getAllUsers();