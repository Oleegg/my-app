import { useState } from 'react';
import  './dialog.css';

function Dialog() {  
   const [checked,setChecked] = useState(true) 
  return (    
          <div className="dialog-content">
              <div className="switch-container">
                  <label className="switch">
                      <input type="checkbox" checked={checked} onChange={()=>setChecked(!checked)}/>
                      <span className="slider"></span>
                  </label>
              </div>
              <h2>Полный Диалог</h2>
              <p>Выберите диалог из списка, чтобы увидеть его полное содержание.</p>
          </div>
  );
}

export default Dialog;