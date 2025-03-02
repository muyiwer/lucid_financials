import { Card, Select } from "antd";
import { evaluateFormula } from "@/utils";
import { useFormulaInput } from "@/hooks";

const OPERATORS = ["+", "-", "*", "/", "^", "(", ")"];

const FormulaInput = () => {
  const {
    open,
    formula,
    setOpen,
    handleChange,
    setInputValue,
    handleKeyDown,
    handleSelect,
    suggestions,
    isLoading,
  } = useFormulaInput();

  return (
    <Card
      title="Formula Input"
      bordered
      style={{ width: "100%", borderRadius: 8 }}
    >
      <Select
        mode="tags"
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
        tokenSeparators={[" "]} 
        options={[
          ...suggestions.map((item) => ({
            value: item.name,
            label: item.name,
          })),
          ...OPERATORS.map((op) => ({ value: op, label: op })),
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
