import {React,useState} from 'react';
import './Home.css';
import {db} from '../Firebase';
export const Home = () =>{

    const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [loader, setLoader] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoader(true);

    db.collection("contacts")
      .add({
        name: name,
        email: email,
        message: message,
      })
      .then(() => {
        setLoader(false);
        alert("Your message has been submitted👍");
      })
      .catch((error) => {
        alert(error.message);
        setLoader(false);
      });

    setName("");
    setEmail("");
    setMessage("");
  };

    return(
        <div>
        <div id = "home" className="img">
         <div className="content">
           <a href = "#home" style={{color:"green",textDecoration:"none"}}>Home</a><br></br><br></br>
           <a href="#about" style={{color:"white",textDecoration:"none"}}>About</a><br></br><br></br>
           <a href="#resume" style={{color:"white",textDecoration:"none"}}>&nbsp;Resume</a><br></br><br></br>
           <a href ="#project" style={{color:"white",textDecoration:"none"}}>Projects</a><br></br><br></br>
           <a href = "#contact" style={{color:"white",textDecoration:"none"}}>Contact</a><br></br><br></br>
         </div>
        </div>

        <div id = "about" className="img1">

        </div>

        <div id = "resume" className="img2">
           <h1>Resume</h1>
        </div>

        <div id = "project" className="img3">
        <h1>Projects</h1>
        <div className="pos">
        <a className="button1" href = "https://deepakchinnadurai.github.io/sorting_visualizer/">click me</a>
        </div>

        <div className="pos1">
        <a className="button1"  href = "http://deepakchinnadurai.github.io/Astar">click me</a>
        </div>

        <div className="pos2">
        <a className="button1" href = "https://github.com/deepakchinnadurai?tab=repositories"  >click me</a>
        </div>

        <div className="pos3">
        <a className="button1" href="https://deepakchinnadurai.github.io/react_git_expense_tracker/" >click me</a>
        </div>
        </div>

        <div id = "contact" className="img4">
        <form className="form" onSubmit={handleSubmit}>
      <h1>Contact Us 🤳</h1>

      <label>Name</label>
      <input
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <label>Email</label>
      <input
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <label>Message</label>
      <textarea
        placeholder="Message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      ></textarea>

      <button
        type="submit"
        style={{ background: loader ? "#ccc" : " rgb(2, 2, 110)" }}
      >
        Submit
      </button>
    </form>
        </div>

        </div>
    )
}