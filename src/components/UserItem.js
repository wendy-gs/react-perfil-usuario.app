import React from 'react'

export const UserItem = ({usuario,users,setUsers}) => {

    const deleteUser= (id) => {
       const newUser= users.filter((user)=> {
            return user.login.uuid !== id
        });
        setUsers(newUser)
    }
    return (
        <div className="item-user">
            <div className="header-item">
                <img src={usuario.picture.large} alt={usuario.name.first}/>
                <div className="header-title">
                    <h3>{usuario.name.first} {usuario.name.last}</h3>
                   {usuario.gender==='male'? <p>&#9794; {usuario.gender}</p> : <p>&#9792; {usuario.gender}</p> }
                </div>
            </div>
            <div className="body-item">
               <table >
               <tbody>
                   <tr>
                      <th>&#9993; Email:</th>
                      <th>{usuario.email}</th>
                   </tr>
                   <tr>
                       <th> &#9742; Cell:</th>
                       <th>{usuario.cell}</th>
                   </tr>
                   <tr>
                       <th>&#127988; Location:</th>
                       <th>{usuario.location.city} - {usuario.location.country}</th>
                   </tr>
                </tbody>
               </table>
            </div>
            
            <button className="btn-delete" onClick={() => {deleteUser(usuario.login.uuid)}}> &#8211; Eliminar</button>
        </div>
    )
}
