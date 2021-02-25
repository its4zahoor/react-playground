import React, { useEffect, useState } from "react";
import { TextField } from "@material-ui/core";
import Autocomplete from "@material-ui/lab/Autocomplete";

function SearchBox({
  value,
  sourceFunc,
  disabled,
  label,
  onSelect,
  placeholder,
  allowTextInput,
  error,
  errorText,
  ...rest
}) {
  const [options, setOptions] = useState([]);

  useEffect(() => {
    sourceFunc().then((result) => setOptions(result));
  }, [sourceFunc]);

  return (
    <div className="p-1">
      <Autocomplete
        id="rafay-select"
        fullWidth
        freeSolo={allowTextInput}
        disableListWrap
        inputValue={value?.value || value}
        disabled={disabled}
        options={options}
        getOptionLabel={(option) => option?.label || option}
        onInputChange={onSelect}
        onChange={onSelect}
        {...rest}
        renderInput={(params) => (
          <TextField
            {...params}
            label={label}
            size="small"
            variant="outlined"
            placeholder={placeholder}
            error={error}
            helperText={errorText}
          />
        )}
      />
    </div>
  );
}

export default SearchBox;
