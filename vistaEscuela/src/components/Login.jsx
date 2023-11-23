import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import * as API from '../services/data';

const Login = () => {
    const [teacher, setTeacher] = useState({usuario:'', pass:''})

    async function handleSubmit(e){
        e.preventDefault();
        const response = await API.login(teacher.usuario, teacher.pass);
        if(response.length != 0){
            alert('Usuario Autentivcado');
            navigate('/dashboard')
        }else{
            alert('datos no válidos');
        }
    }

    //Creamos objeto de navegar
    const navigate = useNavigate();

  return (
    <>
        <h1>Inicio Sesión</h1>
        <form id='formulario' onSubmit={handleSubmit()}>
            Usuario: <input type='text' id='usuario' onChange={
                event => setTeacher({...teacher, usuario: event.target.value})}/><br />
            Password: <input type="password" id='pass' onChange={
                event => setTeacher({...teacher, pass: event.target.value})}/> <br />
            <input type="submit"  id="enviar"/>
        </form>
    </>
  )
}

export default Login
