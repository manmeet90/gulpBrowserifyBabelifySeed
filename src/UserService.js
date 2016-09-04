export let UserService = {
    getUsers : function(){
        var dfd = new Promise((resolve, reject)=>{
            fetch("http://jsonplaceholder.typicode.com/users")
            .then(response=>{return response.json()})
            .then(response=>{
                if(response){
                    resolve(response);
                }    
            })
            .catch(err=>{
                reject(err);
            });
        });
        return dfd;
    }
};