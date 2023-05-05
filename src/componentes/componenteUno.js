import React from 'react'
import MiBoton from './miBoton';
import LoginForm from './login';
import AdminPanel from './adminPanel';


const user = {
    name: 'La Tigresa',
    imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
    imageSize: 90,
  };

const products = [
    { title: 'Cabbage', isFruit: false, id: 1 },
    { title: 'Garlic', isFruit: false, id: 2 },
    { title: 'Apple', isFruit: true, id: 3 },
];

const listItems = products.map(product =>
    <li
      key={product.id}
      style={{
        color: product.isFruit ? 'magenta' : 'darkgreen'
      }}
    >
      {product.title}
    </li>
);

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
            <ul>{listItems}</ul>
            <div>

            </div>
        </div>
    );
}

export default ComponenteUno;