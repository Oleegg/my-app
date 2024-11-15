import './asistent.css';
import { O } from './halper';
import chat from '../../../src/images/whatsapp-svgrepo-com.svg'

function Asistent() {
  return (
    <div className='asistent-wrapper'>
      {O.map((el, i) =>
        <span key={i} style={{ animationDuration: `${el.d}s`, left: `${el.l}%`, top: `${el.t}%` }}></span>)}
      <div className="content">
        <h1 className='title'>Привет! Это тестовый <br />
          AI-ассистент.</h1>
        <h3 className='sub-title'>Выбранная ниша - школа бухучета. <br />
          Для того чтобы начать - нажми на кнопку справа в нижнем углу и открой диалог.</h3>
          <div className="chat"><button><img src={chat} alt="chat" width={60} height={60} /></button></div>
      </div>

    </div>
  );
}

export default Asistent;