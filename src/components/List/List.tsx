import { useEffect, useState } from 'react';
import './list.css';
import Dialog from '../Dialog/Dialog';
import ListItem from './ListItem';
import { IDialogMini, IDialogData } from '../../types';
import { sortList } from './helper';
import ApiService from '../../requests/API';

const List = () => {
  const [list, setList] = useState<IDialogMini[]>([]);
  const [dialogData, setDialogData] = useState<IDialogData | null>(null);
  const [loading, setLoading] = useState<boolean>(true); // Состояние загрузки
  const [error, setError] = useState<string | null>(null); // Состояние ошибки

  useEffect(() => {
    const getDialogs = async () => {
      const response = await ApiService.getDialogs()
      // Обработка успешного ответа
      console.log('getDialogs=========', response);
      setList(sortList(response));
      if (response) setLoading(false); // Завершение загрузки    
    };

    getDialogs();
  }, [loading]);

  return (
    <div className="list">
      <div className="sidebar">
        <h2>Список Диалогов</h2>
        {loading ? (
          <p>Загрузка...</p>
        ) : (
          <ul>
            {error ? (
              <li>{error}</li>
            ) : (
              list.map((item, i) => (
                <ListItem key={i} item={item} setDialogData={setDialogData} />
              ))
            )}
          </ul>
        )}
      </div>
      <div className="main-content">
        <Dialog dialogData={dialogData} setLoading={setLoading} />
      </div>
    </div>
  );
}

export default List;