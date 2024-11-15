import { useEffect } from 'react';
import  './list.css';
import { LIST } from './Data';
import Dialog from '../Dialog/Dialog';

function List() {
    // const [message, setMessage] = useState('');

    useEffect(() => {
        const socket = new WebSocket('ws://mm-ai.eu/test:6789');

        socket.onmessage = (event) => {
            console.log('WebSocket---',event);
            
            // const data = JSON.parse(event.data);
            // setMessage(data.message);
        };

        return () => {
            socket.close();
        };
    }, []);

  return (
    <div className="list">       
      <div className="sidebar">
          <h2>Список Диалогов</h2>
          <ul>
            {LIST.map((data,i) => {
                return (
                    <li key={i}>
                  <img src={data.img} alt="Аватар" className="avatar"/>
                  <div className="dialog-preview">
                      <span className="dialog-title">{data.title}</span>
                      <span className="dialog-last-message">{data.message}</span>
                  </div>
              </li>
                )
            })}  
          </ul>
      </div>
      <div className="main-content">
              <Dialog/>
      </div>
    </div>
  );
}

export default List;