// import React, { useState } from "react";
// import Select, { MultiValue, StylesConfig } from "react-select";

// // Define the shape of an option
// interface Option {
//   value: string;
//   label: string;
// }

// // Options for the dropdown
// const options: Option[] = [
//   { value: "english", label: "English" },
//   { value: "chinese", label: "中文" },
//   { value: "spanish", label: "Español" },
//   { value: "urdu", label: "اردو" },
//   { value: "arabic", label: "العربية" },
//   { value: "hindi", label: "हिन्दी" },
//   { value: "portuguese", label: "Português" },
//   { value: "russian", label: "русский" },
//   { value: "turkish", label: "Türkçe" },
//   { value: "french", label: "Français" },
//   { value: "german", label: "Deutsch" },
//   { value: "albanian", label: "Shqip" },
// ];

// const customStyles: StylesConfig<Option, true> = {
//   control: (provided) => ({
//     ...provided,
//     padding: "8px 2px",
//     border: "1px solid #ddd",
//     borderRadius: "8px",
//     boxShadow: "none",
//     ":hover": {
//       borderColor: "#aaa",
//     },
//   }),
//   menu: (provided) => ({
//     ...provided,
//     marginTop: "0",
//     borderRadius: "4px",
//     overflow: "hidden",
//   }),
//   option: (provided, state) => ({
//     ...provided,
//     backgroundColor: state.isFocused ? "#F3E8FF" : "white", // Hover background color
//     color: state.isFocused ? "#333" : "#000", // Hover text color
//     cursor: "pointer",
//     ":active": {
//       backgroundColor: "#F3E8FF", // Active (clicked) background color
//     },
//   }),
//   multiValue: (provided) => ({
//     ...provided,
//     backgroundColor: "#F3E8FF",
//     borderRadius: "6px",
//     padding: "2px 4px",
//   }),
//   multiValueLabel: (provided) => ({
//     ...provided,
//     color: "#1E293B",
//   }),
//   multiValueRemove: (provided) => ({
//     ...provided,
//     color: "#98A2B3",
//     cursor: "pointer",
//     ":hover": {
//       // backgroundColor: "#ddbdf5",
//       color: "#4a36a5",
//     },
//   }),
// };

// const LanguageSelector: React.FC = () => {
//   const [selectedOptions, setSelectedOptions] = useState<MultiValue<Option>>(
//     []
//   );

//   const handleChange = (selected: MultiValue<Option>) => {
//     setSelectedOptions(selected);
//   };

//   return (
//     <div className="searchInput">
//       <Select
//         options={options}
//         value={selectedOptions}
//         onChange={handleChange}
//         isMulti
//         placeholder="Search language"
//         styles={customStyles}
//       />
//     </div>
//   );
// };

// export default LanguageSelector;

import React, { useState } from "react";
import Select, { MultiValue, StylesConfig } from "react-select";

// Define the shape of an option
interface Option {
  value: string;
  label: string;
}

// Language options
const languageOptions: Option[] = [
  { value: "english", label: "English" },
  { value: "urdu", label: "اردو" },
  { value: "arabic", label: "العربية" },
  { value: "hindi", label: "हिन्दी" },
  { value: "portuguese", label: "Português" },
  { value: "russian", label: "русский" },
  { value: "turkish", label: "Türkçe" },
  { value: "french", label: "Français" },
  { value: "german", label: "Deutsch" },
  { value: "albanian", label: "Shqip" },
];

// Skills options
const skillsOptions: Option[] = [
  { value: "Gynecologic", label: "Gynecologic" },
  { value: "Sports Medicine", label: "Sports Medicine" },
  { value: "General Health", label: "General Health" },
];

const shiftsOptions: Option[] = [
  { value: "Morning", label: "Morning" },
  { value: "After noon", label: "After noon" },
  { value: "Evening", label: "Evening" },
  { value: "Night", label: "Night" },
];

const WorkOptions: Option[] = [
  { value: "On-site", label: "On-site" },
  { value: "Remote", label: "Remote" },
  { value: "Flexible Hours", label: "Flexible Hours" },
  { value: "Hybrid", label: "Hybrid" },
];
const customGroupTagsOptions: Option[] = [
  { value: "Auckland", label: "Auckland" },
  { value: "Hamilton", label: "Hamilton" },
];

const jobTypeOptions: Option[] = [
  { value: "Part-time", label: "Part-time" },
  { value: "Full-time", label: "Full-time" },
];

const locationOptions: Option[] = [
  { value: "Auckland", label: "Auckland" },
  { value: "Hamilton", label: "Hamilton" },
];

const requiredSkillsOptions: Option[] = [
  { value: "Auckland", label: "Auckland" },
  { value: "Hamilton", label: "Hamilton" },
  { value: "Casual Shift", label: "Casual Shift" },
];

const experienceLevelOptions: Option[] = [
  { value: "Entry-Level", label: "Entry-Level" },
  { value: "Mid-Level", label: "Mid-Level" },
  { value: "Expert", label: "Expert" },
];

// Define custom styles for the dropdown
const customStyles: StylesConfig<Option, true> = {
  control: (provided) => ({
    ...provided,
    padding: "8px 2px",
    border: "1px solid #ddd",
    borderRadius: "8px",
    boxShadow: "none",
    ":hover": {
      borderColor: "#aaa",
    },
  }),
  menu: (provided) => ({
    ...provided,
    marginTop: "0",
    borderRadius: "4px",
    overflow: "hidden",
  }),
  option: (provided, state) => ({
    ...provided,
    backgroundColor: state.isFocused ? "#F3E8FF" : "white", // Hover background color
    color: state.isFocused ? "#333" : "#000", // Hover text color
    cursor: "pointer",
    ":active": {
      backgroundColor: "#F3E8FF", // Active (clicked) background color
    },
  }),
  multiValue: (provided) => ({
    ...provided,
    backgroundColor: "#F3E8FF",
    borderRadius: "6px",
    padding: "2px 4px",
  }),
  multiValueLabel: (provided) => ({
    ...provided,
    color: "#1E293B",
  }),
  multiValueRemove: (provided) => ({
    ...provided,
    color: "#98A2B3",
    cursor: "pointer",
    ":hover": {
      color: "#4a36a5",
    },
  }),
};

interface LanguageSelectorProps {
  languages?: boolean;
  skills?: boolean;
  shift?: boolean;
  groups?: boolean;
  workstype?: boolean;
  jobType?: boolean;
  locationOpt?: boolean;
  reqSkills?: boolean;
  expLevel?: boolean;
  onSelectChange: (selected: MultiValue<Option>) => void;
}

const LanguageSelector: React.FC<LanguageSelectorProps> = ({
  languages,
  skills,
  shift,
  groups,
  workstype,
  jobType,
  locationOpt,
  onSelectChange,
  reqSkills,
  expLevel,
}) => {
  const [selectedOptions, setSelectedOptions] = useState<MultiValue<Option>>(
    []
  );

  const handleChange = (selected: MultiValue<Option>) => {
    setSelectedOptions(selected);
    onSelectChange(selected); // Trigger the callback with selected values
  };

  // Determine the options to show based on props
  const options = languages
    ? languageOptions
    : skills
    ? skillsOptions
    : shift
    ? shiftsOptions
    : groups
    ? customGroupTagsOptions
    : workstype
    ? WorkOptions
    : jobType
    ? jobTypeOptions
    : locationOpt
    ? locationOptions
    : reqSkills
    ? requiredSkillsOptions
    : expLevel
    ? experienceLevelOptions
    : [];

  return (
    <div className="searchInput">
      <Select
        options={options}
        value={selectedOptions}
        onChange={handleChange}
        isMulti
        placeholder={
          workstype
            ? "Search Work type"
            : languages
            ? "Search language"
            : skills
            ? "Search skill"
            : shift
            ? "Search shifts"
            : groups
            ? "Search Custom group tags"
            : "Select options"
        }
        styles={customStyles}
      />
    </div>
  );
};

export default LanguageSelector;
