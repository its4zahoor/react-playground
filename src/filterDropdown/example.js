import React, { useState } from "react";
import FilterDropdown from "./";
import axios from "axios";

const complexOptions = [
  { label: "Option 1", value: "value_1" },
  { label: "Option 2", value: "value_2" },
  { label: "Option 3", value: "value_3" },
  { label: "Option 4", value: "value_4" },
];

export default function App() {
  const [name, setName] = useState("");
  const [album, setAlbum] = useState("");
  const [complex, setComplex] = useState("");

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

  const handleComplexSelect = (value) => {
    console.log("LogByZahoor => handleComplexSelect => value", value);
    setComplex(value || "");
  };

  return (
    <div className="p-2">
      <FilterDropdown
        label="Full Name"
        value={name}
        source={getUsersList}
        allowInput
        onSelect={handleNameSelect}
        placeholder="Select User"
      />

      <FilterDropdown
        label="Album Name"
        value={album}
        source={getAlbumsList}
        onSelect={handleAlbumSelect}
        placeholder="Select Album or Add new"
        variant="outlined"
        size="small"
      />

      <FilterDropdown
        label="Complex Options"
        value={complex}
        source={complexOptions}
        onSelect={handleComplexSelect}
        error
        helperText="Error is for demonstration"
        placeholder="Select Option"
      />

      <div className="text-center m-2">Selected Name: {name}</div>
      <div className="text-center m-2">Selected Album: {album}</div>
      <div className="text-center m-2">
        Selected Complex: {JSON.stringify(complex, null, 2)}
      </div>
    </div>
  );
}
