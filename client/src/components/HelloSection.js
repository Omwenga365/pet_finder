import './HelloSection.css';

function HelloSection() {
return (
    <div className="hello-section-container">
        <div className="hello-section-text">
            <h2>Find your Missing Pet</h2>
            <p>
                Are you sick of searching for your pets all over the
            <br></br>
                neighbourhood and making repetitive posts online? 
            <br></br>
                This app is for you!
            </p>

        <a href="#pet-list" className="view-btn">
            View Missing Pets
        </a>
        </div>
        <div className="hello-section-image">
            <img src="https://images.pexels.com/photos/33287/dog-viszla-close.jpg?auto=compress&cs=tinysrgb&w=1600" alt="hero-pet" />
        </div>
        
    </div>
);
}
export default HelloSection