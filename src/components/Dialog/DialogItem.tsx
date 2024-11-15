import  './dialog.css';

function DialogItem({text, i}: {text: string, i: number}) {     
  return (   
    i % 2 
    ? <li className='item user'>{text}</li>
    : <li className='item bot'>{text}</li>
        
  );
}

export default DialogItem;