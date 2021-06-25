import React, { useState } from "react";
import RafaySelect from "./RafaySelect";
import axios from "axios";

const payload = {
  id: 1,
  name: "Zahoor",
  type: "xyz",
};

const complexOptions = [
  { label: "Abeer", value: "value_1", meta: payload },
  { label: "Nazir", value: "value_2", meta: payload },
  { label: "Mehran", value: "value_3", meta: payload },
  { label: "Rizwan", value: "value_4", meta: payload },
  { label: "Nabeel", value: "value_5", meta: payload },
  { label: "Yasir", value: "value_6", meta: payload },
  { label: "Saqib", value: "value_7", meta: payload },
  { label: "NNNNN", value: "value_n", meta: payload },
];
const arrayofStrings = ["alpha", "beta", "gamma", "yeta"];

const arrayofObj = [
  { label: "A L P H A", value: "alpha" },
  { label: "B E T A", value: "beta" },
  { label: "G A M M A", value: "gamma" },
  { label: "Y E T A ", value: "yeta" },
];
export default function App() {
  const [name, setName] = useState("");
  const [album, setAlbum] = useState("gamma");
  const [complex, setComplex] = useState("gamma");
  const [array, setArray] = useState("gamma");

  const getUsersList = () => {
    return axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        const usersList = response.data.map((x) => x.name);
        return usersList;
      });
  };

  const getAlbumsList = () => {
    return axios
      .get("https://jsonplaceholder.typicode.com/albums")
      .then((response) => {
        const albumsList = response.data.map((x) => x.title);
        return albumsList;
      });
  };

  const handleNameSelect = (value) => {
    setName(value || "");
  };

  const handleAlbumSelect = (value) => {
    setAlbum(value || "");
  };

  const handleComplexSelect = (index) => (value, reason) => {
    console.log("LogByZahoor => handleComplexSelect => value", value);
    if (reason === "create-option")
      complexOptions.push({ label: value, value });
    const temp = [...array];
    temp[index] = value;
    setArray(temp);
  };

  return (
    <div className="p-2">
      {/* <RafaySelect
        label="Full Name"
        value={name}
        source={getUsersList}
        allowInput
        onSelect={handleNameSelect}
        placeholder="Select User"
        error
        helperText="Error is for demonstration"
      />

      <RafaySelect
        label="Album Name"
        value={album}
        source={getAlbumsList}
        onSelect={handleAlbumSelect}
        placeholder="Select Album or Add new"
        variant="outlined"
        size="small"
      /> */}

      <RafaySelect
        label="Album Name"
        value={album}
        source={arrayofStrings}
        onSelect={handleAlbumSelect}
        placeholder="Select Album or Add new"
        variant="outlined"
        size="small"
      />

      <div style={{ height: 50 }}>..</div>
      {/* 
      <RafaySelect
        label="Album Name"
        value={album}
        source={arrayofObj}
        onSelect={handleAlbumSelect}
        placeholder="Select Album or Add new"
        variant="outlined"
        size="small"
      /> */}

      <div className="text-center m-2">Selected Name: {name}</div>
      <div className="text-center m-2">Selected Album: {album}</div>
      <div className="text-center m-2">
        Selected Complex: {JSON.stringify(array, null, 2)}
      </div>

      <div>
        <button onClick={() => setArray([...array, ""])}>Add More</button>
      </div>
    </div>
  );
}
