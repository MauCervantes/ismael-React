const URL = 'http://localhost:5261/api/';


export function login(usuario, password){
    let datos = {
        usuario: usuario,
        pass: password
    }

    return fetch(URL + 'autent', {
        method: 'POST',
        body: JSON.stringify(datos),
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(data => data.text());
}