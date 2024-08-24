 const usersDiv = document.querySelector('.users');
const getUser = async () =>{
    const url = 'https://jsonplaceholder.typicode.com/users';
     try{
        const response = await fetch(url);
        if(!response.ok){
            throw new Error(`Response status: ${response.status}`);
        }
        return await response.json();

     }catch(err){
       return err.message
     }
  
    

}
const drawUi = async () => {
    const users = await getUser();
    for(let user of users ){
        usersDiv.innerHTML += `<div class='card'>
         <h1>ism: ${user.name}</h1>
        <p>Username: ${user.username}</p>
        <p>Manzil: ${user.address.street}, </p>
        <p>Email: ${user.email}</p>
        
        </div>`;
        
        
    }
}

drawUi();