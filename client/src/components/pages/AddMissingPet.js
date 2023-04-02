import React, {useState} from 'react';
import './AddMissingPet.css';

function AddMissingPet() {
    const [newData, setNewData] = useState({
        name: "",
        breed: "",
        image_url: "",
        last_seen: "",
        user_id: 11
    });

    function handleSubmit(event){
        event.preventDefault();
        fetch("", {
            method: "POST",
            headers: {
            "Content-Type": "application/json",
            },
            body: JSON.stringify(newData),
        });
    }

    function handleChange(event){
        setNewData({
            ...newData,
            [event.target.id]: event.target.value
        })
    }

    return (
        <React.Fragment>
            <form className="newform" onSubmit={handleSubmit}>
                <div className = "form-title">
                    <h1>Add Missing Pet</h1>
                    <p>Kindly fill the form below</p>
                </div>
            <label className="label">
                Name
                <input
                onChange={(e) => handleChange(e)}
                id="name"
                value={newData.name}
                type="text"
                placeholder="  Add pet name"
                />
            </label>
            <label className="label">
                Breed
                <input
                onChange={(e) => handleChange(e)}
                id="breed"
                value={newData.breed}
                type="text"
                placeholder="  Add pet breed"
                />
            </label>
            <br />
            <label className="label">
                    Owner
                <input
                    onChange={(e) => handleChange(e)}
                    id="owner"
                    type="number"
                    value={newData.user_id}
                    />
                </label>
                <label className="label">
                    Image_url
                    <input
                    style={{ width: "420px" }}
                    type="img"
                    onChange={(e) => handleChange(e)}
                    id="image_url"
                    name="image"
                    placeholder="   Add image url"
                    value={newData.image_url}
                    ></input>
                </label>
                <br />
                <label className="label">
                    Last_Seen_Location
                    <textarea
                    className="dog-area"
                    style={{ width: "1025px" }}
                    onChange={(e) => handleChange(e)}
                    name="last_seen"
                    id="last_seen"
                    cols="50"
                    rows="3"
                    value={newData.last_seen}
                    ></textarea>
                </label>
                <br />
                <br />
                <button id="button1" className="adddog">
                    Add Missing Pet
                </button>
    </form>
            
        </React.Fragment>
    )
}

export default AddMissingPet;