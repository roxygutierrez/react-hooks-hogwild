import React, { useState } from "react";

const NewHogForm = ({ handleNewHog }) => {
  const [name, setName] = useState("");
  const [specialty, setSpecialty] = useState("");
  const [weight, setWeight] = useState("");
  const [highestMedal, setHighestMedal] = useState("");
  const [image, setImage] = useState("");
  const [greased, setGreased] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e);
    const newHog = {
      name: name,
      specialty: specialty,
      greased: greased,
      weight: weight,
      "highest medal achieved": highestMedal,
      image: image,
    };
    handleNewHog(newHog);
  };

  return (
    <div className="">
      <form onSubmit={handleSubmit}>
        Name:
        <input
          type="text"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        ></input>
        Specialty:
        <input
          type="text"
          name="specialty"
          value={specialty}
          onChange={(e) => setSpecialty(e.target.value)}
        ></input>
        Greased:{" "}
        <input
          type="checkbox"
          name="greased"
          className="ui checkbox"
          onChange={(e) => setGreased(e.target.value)}
          checked={greased}
        />
        <br /> Highest Medal Achieved:
        <input
          type="text"
          name="weight"
          value={highestMedal}
          onChange={(e) => setHighestMedal(e.target.value)}
        ></input>
        Weight:
        <input
          type="text"
          name="higest-medal"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
        ></input>
        Image:
        <input
          type="text"
          name="image"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        ></input>
        <input type="submit"></input>
      </form>
    </div>
  );
};

export default NewHogForm;
