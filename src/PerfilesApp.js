import React, { useEffect, useState } from 'react'
import{ UserItem } from './components/UserItem';
import{fetchUsers} from './helpers/fetchUsers'

export const PerfilesApp = ()=>  {

    const [search, setSearch] = useState('');
    const [filterdUsers, setFilterdUsers] = useState([]);
    const [users, setUsers] =useState([])

    useEffect(() => {
        fetchUsers()
            .then(data => setUsers(data))
    },[])

    useEffect(() => {
        setFilterdUsers(
            users.filter((usuario)=> 
            usuario.name.first.toLowerCase().includes(search.toLowerCase()) || usuario.name.last.toLowerCase().includes(search.toLowerCase())
            )
        );
    }, [search,users])

    return (
        <div className= "ctn-main">
            <div className="title">
            <h1>Perfiles de Usuarios</h1>
            <input className="input-search"
                type="text"
                placeholder="Ingrese el nombre del usuario a buscar"
                onChange= {(e) => setSearch(e.target.value)}
            />
            </div>
            {filterdUsers.length===0 && <div className="ctn-found"><h3>No se encontró ningún usuario con el nombre ingresado</h3>
                                            <img className="img-found" alt="imagen no encontrado"/></div>}
            <div className="ctn-user">
            {filterdUsers.map(usuario => {
                return <UserItem
                        key={usuario.login.uuid}
                        usuario={usuario}
                        users={users}
                        setUsers={setUsers}
                        />
            })}
            </div>
            
        </div>
    )
}
