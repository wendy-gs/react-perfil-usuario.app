export const fetchUsers = async() =>  {
    const url= 'https://randomuser.me/api/?results=15';
    const resp =await fetch(url);
    const {results} = await resp.json();
    return ( results);
}
