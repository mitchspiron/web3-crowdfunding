import React from "react";

type FormProps = {
  labelName: string;
  placeholder: string;
  inputType?: string;
  isTextArea?: boolean;
  value: string;
  handleChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
};

const FormField: React.FC<FormProps> = ({
  labelName,
  placeholder,
  inputType,
  isTextArea,
  value,
  handleChange,
}) => {
  return (
    <div className="space-y-2">
      <label className="block text-sm font-medium">{labelName}</label>
      {isTextArea ? (
        <textarea
          className="w-full px-4 py-3 bg-zinc-900 rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-400 placeholder-gray-400"
          rows={5}
          placeholder={placeholder}
          value={value}
          onChange={handleChange}
          required
        />
      ) : (
        <input
          type={inputType}
          className="w-full px-4 py-3 bg-zinc-900 rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-400 placeholder-gray-400"
          placeholder={placeholder}
          value={value}
          onChange={handleChange}
          step={0.0001}
          min="0"
          required
        />
      )}
    </div>
  );
};

export default FormField;
