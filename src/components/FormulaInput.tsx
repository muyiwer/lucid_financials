import { useState } from "react";
import { Card, Select } from "antd";
import { useFormulaStore } from "@/hooks/useFormulaStore";
import { evaluateFormula } from "@/utils/evaluateFormula";
import { useAutocomplete } from "@/hooks";

const FormulaInput = () => {
  const { formula, setFormula } = useFormulaStore();
  const [inputValue, setInputValue] = useState("");
  const [open, setOpen] = useState(false);
  const { data: suggestions = [], isLoading } = useAutocomplete(inputValue);

  const handleSelect = (value: string) => {
    setFormula([...formula, value]);
    setInputValue("");
    setOpen(false);
  };

  const handleChange = (values: string[]) => {
    setFormula(values);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      setOpen(false);
    }
  };

  return (
    <Card
      title="Formula Input"
      bordered
      style={{ width: "100%", borderRadius: 8 }}
    >
      <Select
        mode="multiple"
        open={open}
        onDropdownVisibleChange={setOpen}
        value={formula}
        onChange={handleChange}
        onSearch={(val) => {
          setInputValue(val);
          setOpen(true);
        }}
        onSelect={handleSelect}
        onKeyDown={handleKeyDown}
        filterOption={false}
        placeholder="Enter formula..."
        style={{ width: "100%" }}
        options={[
          ...suggestions.map((item) => ({
            value: item.name,
            label: item.name,
          })),
          { value: "+", label: "+" },
          { value: "-", label: "-" },
          { value: "*", label: "*" },
          { value: "/", label: "/" },
          { value: "^", label: "^" },
          { value: "(", label: "(" },
          { value: ")", label: ")" },
        ]}
        loading={isLoading}
      />

      <div className="mt-4 p-2 border rounded bg-gray-100">
        <strong>Result:</strong> {evaluateFormula(formula, suggestions)}
      </div>
    </Card>
  );
};

export default FormulaInput;
