import FormulaInput from "./components/FormulaInput";

const App = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-gray-50">
      {/* Logo */}
      <img 
        src="https://pry.co/favicon-32x32.png?v=9336f9b24d0b9e63cf57a961fec4fe52" 
        alt="Pry Logo" 
        className="mb-4 w-12 h-12"
      />

      <h1 className="text-2xl font-bold mb-4">Formula Editor</h1>

      <FormulaInput />
    </div>
  );
};

export default App;
