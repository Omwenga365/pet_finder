import React, {useEffect, useState} from 'react';
import './Cards.css';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';
import Card from 'react-bootstrap/Card';

function Cards() {
  const [dogs, setDogs] = useState ([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
  fetch("")
    .then((response) => response.json())
    .then((data) => setDogs(data))
    .catch(console.log);
}, [setDogs]);

function handleClick (index){
  setCurrentIndex(index);
}

return (
  <>
  <div id="pet-list">
    <h1>Missing Pets</h1>
  </div>
    {dogs.length && (
      <React.Fragment>
      <Card className = "dog-card" body>
      <h1>Have you seen me ? </h1>
        <div>
          <div className="dog-info">
          <img src={dogs[currentIndex].image_url} alt={dogs[currentIndex].name}/>
            <div>
              <h4 className="bold-text"><b>Name: </b>{dogs[currentIndex].name}</h4>
              <h4 className="bold-text"><b>Breed:</b> {dogs[currentIndex].breed}</h4>
            </div>
            <p className="p-text"><b>Last Seen: </b> {dogs[currentIndex].last_seen}</p>
          </div>
        </div>
        <div className="center-btn">
          <div className="left-btn" onClick={() => handleClick(currentIndex === 0 ? dogs.length - 1 : currentIndex - 1)}>
            <HiChevronLeft />
          </div>
          <div className="right-btn" onClick={() => handleClick(currentIndex === dogs.length - 1 ? 0 : currentIndex + 1)}>
            <HiChevronRight />
          </div>
        </div>
        </Card>
      </React.Fragment>
    )}
  </>
)}

export default Cards; 
