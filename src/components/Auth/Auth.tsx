import { FormEvent, useState } from 'react';
import axios from 'axios';
import  './auth.css';

function Auth() {
  const [username,setUsername] = useState('')
  const [password,setPassword] = useState('')
 

  const onSubmitHandler = async (e: FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    console.log('username',username);
    console.log('password',password);
    try {
      const response = await axios.post('https://mm-ai.eu/test/login', {
        username,
        password,
      });

      // Обработка успешного ответа
      console.log('Успешный вход:', response.data);
      // Здесь вы можете сохранить токен или выполнить другие действия
    } catch (err) {
      // Обработка ошибки
      // setError('Ошибка авторизации. Проверьте ваши учетные данные.');
      console.error(err);
    }
  }
  
  return (
    <div className="form-container">
        <h2>Авторизация</h2>
        <form className='form'>
            <input className='input' type="text" name="username" placeholder="Логин" required value={username} onChange={(e)=>setUsername(e.target.value)}/>
            <input className='input' type="password" name="password" placeholder="Пароль" required value={password} onChange={(e)=>setPassword(e.target.value)}/>
            <button type='submit' onClick={e=>onSubmitHandler(e)}>Войти</button>
        </form>
    </div>
  );
}

export default Auth;