import { useEffect, useState } from 'react';
import  './list.css';
import { DIALOG, LIST } from './Data';
import Dialog from '../Dialog/Dialog';
import ListItem from './ListItem';

function List() {
    // const [message, setMessage] = useState('');
    const [list, setList] = useState<any[]>(LIST);
    const [dialogData, setDialogData] = useState<string[]>(DIALOG);

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
            {list.map((data,i) => {
                return (
                   <ListItem key={i} data={data}/>
                )
            })}  
          </ul>
      </div>
      <div className="main-content">
              <Dialog dialogData={dialogData}/>
      </div>
    </div>
  );
}

export default List;