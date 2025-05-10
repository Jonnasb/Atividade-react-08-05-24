import React, { useState } from 'react';
import './styless.css'


const UserList = ({ usuarios }) => {
    return(
        <div className='user-list'>
            <h2>Lista de usuários</h2>
            <ol>
                {usuarios.map((usuarios, index) => (
                    <li key={index}>{usuario}</li>
                ))}
            </ol>
        </div>
    );
};

export default UserList;