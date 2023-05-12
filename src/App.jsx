import { useState } from "react";
import { BsFillChatQuoteFill } from "react-icons/bs";
import { FcPrevious, FcNext } from "react-icons/fc";
import people from "./Data";
function App() {
  const [index, setIndex] = useState(0);
  const { name, job, image, text } = people[index];

  const prevPerson = () => {
    setIndex((index) => {
      const newIndex = (index - 1 + people.length) % people.length;
      return newIndex;
    });
  };

  const nextPerson = () => {
    setIndex((index) => {
      const newIndex = (index + 1) % people.length;
      return newIndex;
    });
  };
  return (
    <main>
      <article className="review">
        <div className="img-container">
          <img src={image} alt={name} className="person-img" />
          <span className="quote-icon">
            <BsFillChatQuoteFill />
          </span>
        </div>
        <h4 className="author">{name}</h4>
        <p className="job">{job}</p>
        <p className="info">{text}</p>
        <div className="btn-container">
          <button className="prev-btn" onClick={prevPerson}>
            <FcPrevious />
          </button>
          <button className="next-btn" onClick={nextPerson}>
            <FcNext />
          </button>
        </div>
      </article>
    </main>
  );
}

export default App;
