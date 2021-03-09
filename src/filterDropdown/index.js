import React, { useEffect, useState } from "react";
import { TextField } from "@material-ui/core";
import Autocomplete from "@material-ui/lab/Autocomplete";

function SearchBox({
  label,
  value,
  source,
  onSelect,
  allowInput,
  placeholder,
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

  useEffect(() => {
    setInputText(value?.label ?? value);
  }, [value]);

  const handleInputChange = (_, inputValue) => {
    setInputText(inputValue);
  };

  const handleChange = (_, value, reason) => {
    onSelect(value, reason);
  };

  return (
    <Autocomplete
      {...rest}
      fullWidth
      freeSolo={allowInput}
      inputValue={inputText}
      options={options}
      getOptionLabel={(option) => option?.label ?? option}
      onInputChange={handleInputChange}
      onChange={handleChange}
      renderInput={(params) => (
        <TextField
          {...rest}
          {...params}
          label={label}
          value={value?.value ?? value}
          placeholder={placeholder}
          error={error}
          helperText={helperText}
        />
      )}
    />
  );
}

export default SearchBox;
