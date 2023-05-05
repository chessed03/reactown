import React from 'react'
import MiBoton from './miBoton';
import LoginForm from './login';
import AdminPanel from './adminPanel';

const user = {
    name: 'La Tigresa',
    imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
    imageSize: 90,
  };

function ComponenteUno() {

    let isLoggedIn = true;
    
    let content;

    if (isLoggedIn) {
        content = <AdminPanel />;
    } else {
        content = <LoginForm />;
    }

    return (
        <div>

            <h1>Hola mundo</h1>
            <br></br>
            <div>
                <h1>Bienvenidos a mi espacio personal</h1>
                <MiBoton />
            </div>
            <img
                className="avatar"
                src={user.imageUrl}
                alt={'Photo of ' + user.name}
                style={{
                width: user.imageSize,
                height: user.imageSize
                }}
            />
            <div>
                {content}
            </div>
            
        </div>
    );
}

export default ComponenteUno;