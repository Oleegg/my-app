import  './list.css';

function List() {
  return (
    <div className="list">       
      <div className="sidebar">
          <h2>Список Диалогов</h2>
          <ul>
              <li>
                  <img src="avatar1.png" alt="Аватар" className="avatar"/>
                  <div className="dialog-preview">
                      <span className="dialog-title">Диалог 1</span>
                      <span className="dialog-last-message">Последнее сообщение...</span>
                  </div>
              </li>
              <li>
                  <img src="avatar2.png" alt="Аватар" className="avatar"/>
                  <div className="dialog-preview">
                      <span className="dialog-title">Диалог 2</span>
                      <span className="dialog-last-message">Последнее сообщение...</span>
                  </div>
              </li>
              <li>
                  <img src="avatar3.png" alt="Аватар" className="avatar"/>
                  <div className="dialog-preview">
                      <span className="dialog-title">Диалог 3</span>
                      <span className="dialog-last-message">Последнее сообщение...</span>
                  </div>
              </li>
              <li>
                  <img src="avatar4.png" alt="Аватар" className="avatar"/>
                  <div className="dialog-preview">
                      <span className="dialog-title">Диалог 4</span>
                      <span className="dialog-last-message">Последнее сообщение...</span>
                  </div>
              </li>
              <li>
                  <img src="avatar5.png" alt="Аватар" className="avatar"/>
                  <div className="dialog-preview">
                      <span className="dialog-title">Диалог 5</span>
                      <span className="dialog-last-message">Последнее сообщение...</span>
                  </div>
              </li>
          </ul>
      </div>
      <div className="main-content">
          <div className="dialog-content">
              <div className="switch-container">
                  <label className="switch">
                      <input type="checkbox"/>
                      <span className="slider"></span>
                  </label>
              </div>
              <h2>Полный Диалог</h2>
              <p>Выберите диалог из списка, чтобы увидеть его полное содержание.</p>
          </div>
      </div>
    </div>
  );
}

export default List;