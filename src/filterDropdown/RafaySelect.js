import React, { useEffect, useState } from "react";
import { TextField } from "@material-ui/core";
import Autocomplete from "@material-ui/lab/Autocomplete";

const defaultState = { label: "--Select--", value: null };

function RafaySelect({
  value,
  source,
  label,
  onSelect,
  placeholder,
  allowInput,
  error,
  helperText,
  ...rest
}) {
  const [options, setOptions] = useState([]);
  const [inputText, setInputText] = useState("");

  useEffect(() => {
    if (options.length === 0) {
      if (Array.isArray(source)) setOptions(source);
      if (typeof source === "function")
        source().then((list) => setOptions(list));
    }
  }, [source]);

  const handleInputChange = (_, inputValue, reason) => {
    onSelect(inputValue || "");
  };

  const handleChange = (_, value, reason) => {
    onSelect(value || "");
  };

  return (
    <Autocomplete
      {...rest}
      fullWidth
      freeSolo={allowInput}
      inputValue={inputText}
      value={value}
      options={options}
      getOptionLabel={(option) => option.label ?? option}
      onInputChange={handleInputChange}
      onChange={handleChange}
      renderInput={(params) => (
        <TextField
          {...rest}
          {...params}
          label={label}
          placeholder={placeholder}
          error={error}
          helperText={helperText}
        />
      )}
    />
  );
}

export default RafaySelect;
