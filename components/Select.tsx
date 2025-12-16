import { useState } from "react";

export default function CustomSelect({
  options,
  onChange,
  placeholder,
}: {
  placeholder: string;
  options: string[];
  onChange?: (value: string) => void;
}) {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");
  return (
    <div className="relative w-full">
      <div
        onClick={() => setOpen(!open)}
        className="
          w-full
          px-[30px] py-3  border border-[#2B59FF] rounded-lg
          cursor-pointer flex justify-between items-center
          hover:border-[#2B59FF]
        "
      >
        <div className="flex-1">
          {" "}
          {value ? (
            value
          ) : (
            <span className="text-[16px] color-[#222222]">{placeholder}</span>
          )}
        </div>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="ic/&#233;&#161;&#182;&#233;&#131;&#168;/&#228;&#184;&#139;&#230;&#139;&#137;">
            <g id="icon/&#233;&#161;&#182;&#233;&#131;&#168;/&#228;&#184;&#139;&#230;&#139;&#137;">
              <rect
                id="&#231;&#159;&#169;&#229;&#189;&#162;"
                opacity="0.01"
                width="24"
                height="24"
                fill="white"
              />
            </g>
            <g id="&#233;&#128;&#154;&#231;&#148;&#168;&#231;&#187;&#132;&#228;&#187;&#182;/ic/&#228;&#184;&#139;&#230;&#139;&#137;/&#231;&#187;&#134;/&#228;&#184;&#139;">
              <rect
                id="&#231;&#159;&#169;&#229;&#189;&#162;_2"
                opacity="0.01"
                width="24"
                height="24"
                fill="white"
              />
              <path
                id="&#229;&#189;&#162;&#231;&#138;&#182;&#231;&#187;&#147;&#229;&#144;&#136;"
                d="M5.46973 8.46973C5.73008 8.20938 6.13446 8.18032 6.42676 8.38281L6.53027 8.46973L12 13.9395L17.4697 8.46973L17.5732 8.38281C17.8655 8.18032 18.2699 8.20938 18.5303 8.46973C18.8232 8.76262 18.8232 9.23738 18.5303 9.53027L12.5303 15.5303C12.2699 15.7906 11.8655 15.8197 11.5732 15.6172L11.4697 15.5303L5.46973 9.53027C5.17683 9.23738 5.17683 8.76262 5.46973 8.46973Z"
                fill="#0077FF"
              />
            </g>
          </g>
        </svg>
      </div>

      {open && (
        <div className="absolute left-0 top-full mt-2 w-full bg-white border border-[#0077FF]  rounded-lg z-10 overflow-hidden">
          {options.map((opt) => (
            <div
              key={opt}
              onClick={() => {
                setValue(opt);
                setOpen(false);
                onChange?.(opt);
              }}
              className={`px-4 py-2 cursor-pointer hover:bg-[#0077FF] hover:text-white text-[#222222] ${
                opt === value ? "bg-[#0077FF] text-white" : ""
              }`}
            >
              {opt}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
