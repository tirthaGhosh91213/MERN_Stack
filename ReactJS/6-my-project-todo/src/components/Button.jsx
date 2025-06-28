const Button = ({btnType, btnText, handler}) => {

  if (btnType === 'success') {
    return <button className="btn mb-11 btn-success button" onClick={handler}>{btnText}</button>;
  
  } else if (btnType === 'danger') {
    return <button className="btn btn-danger mb-6 button" onClick={handler}>{btnText}</button>;
  
  } else {
    return <button className="btn btn-primary button" onClick={handler}>{btnText}</button>;
  }
};

export default Button;