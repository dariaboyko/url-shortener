import classes from './Content.module.css'
import { useState } from 'react';
import ShortenedURL from './ShortenedURL';
import ShortenedURLwrapper from './ShortenedURLwrapper';
function Content() {
  const [URL, setURL] = useState('');
  const [toggle, setToggle] = useState(false);
  function handleSubmit(event) {
    event.preventDefault(); 
    setToggle(!toggle);
  }
  function handleChange(event) {
    setURL(event.target.value);
  }
  return (
    <div>
      <h1 className={classes.title}>short url</h1>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="enter the link here..."
          className={classes.input}
          name="url"
          onChange={handleChange}
        ></input>
        <p className={classes.text}>click the button to get a shortened link</p>
        <button type="submit" className={classes.sendURL} disabled={URL!==''?false:true}></button>
      </form>
      {toggle && (
        <ShortenedURLwrapper>
          <button
            className={classes.close}
            onClick={() => {
              setToggle(!toggle);
            }}
          ></button>
          <ShortenedURL url={URL}></ShortenedURL>
        </ShortenedURLwrapper>
      )}
    </div>
  );
}

export default Content;
