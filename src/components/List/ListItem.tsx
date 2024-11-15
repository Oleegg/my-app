import './list.css';

interface IData {
  img: string,
  title: string,
  message: string,
}

interface IProps{ 
  data: IData
}

function ListItem({ data}: IProps) {
  const {img, title, message} = data
  return (
    <li>
      <img src={img} alt="Аватар" className="avatar" />
      <div className="dialog-preview">
        <span className="dialog-title">{title}</span>
        <span className="dialog-last-message">{message}</span>
      </div>
    </li>
  )        
}

export default ListItem;