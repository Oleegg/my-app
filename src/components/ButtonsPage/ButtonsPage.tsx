import  './buttons_page.css';

function ButtonsPage() {
  return (
    <>
    <div className="button-container">
        <a href="https://www.instagram.com" className="instagram-button">Instagram</a>
    </div>
    <div className="switch-container">
        <label className="switch">
            <input type="checkbox"/>
            <span className="slider"></span>
        </label>
    </div>
    </>
  );
}

export default ButtonsPage;