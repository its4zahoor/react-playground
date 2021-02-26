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

  const getComplexOptions = () => Promise.resolve(complexOptions);

  const handleNameSelect = (_e, value) => {
    setName(value || "");
  };

  const handleAlbumSelect = (_e, value) => {
    setAlbum(value || "");
  };

  const handleComplexSelect = (_e, value) => {
    setComplex(value || "");
  };

  return (
    <div className="p-2">
      <FilterDropdown
        label="Full Name"
        value={name}
        sourceFunc={getUsersList}
        onSelect={handleNameSelect}
        placeholder="Select User"
      />

      <FilterDropdown
        label="Album Name"
        value={album}
        sourceFunc={getAlbumsList}
        onSelect={handleAlbumSelect}
        allowInput
        placeholder="Select Album or Add new"
        size="small"
      />

      <FilterDropdown
        label="Complex Options"
        value={complex}
        sourceFunc={getComplexOptions}
        onSelect={handleComplexSelect}
        error
        errorText="Error is for demonstration"
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
