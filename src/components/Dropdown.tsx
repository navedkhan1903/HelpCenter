import Select from "react-select";

interface Props {
  options: any;
  onChange: any;
  value: string;
}

export default function DropDown({ options, onChange, value }: Props) {
  return (
    <div className="w-full">
      <Select
        placeholder="State"
        options={options}
        onChange={onChange}
        value={value != "" ? { value: value, label: value } : null}
        styles={{
          control: (baseStyles, state) => ({
            ...baseStyles,
            borderColor: state.isFocused ? "#767676" : "#f5f5f5",
            borderWidth: 2,
            height: 47,
            ":hover": {
              borderColor: state.isFocused ? "#767676" : "#f5f5f5",
            },
            boxShadow: "none",
            paddingLeft: 4,
            fontWeight: 500,
            fontSize: 14,
          }),
          option: (styles, { isSelected }) => ({
            ...styles,
            color: isSelected ? "white" : "#1a1a1a",
            fontWeight: 500,
            fontSize: 14,
          }),
          placeholder: (base) => ({
            ...base,
            color: "#767676",
          }),
          menuList: (base) => ({
            ...base,
            maxHeight: 200,
          }),
        }}
      />
    </div>
  );
}
