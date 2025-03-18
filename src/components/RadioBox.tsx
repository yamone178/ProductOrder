type PropsType = {
  checked: boolean,
    handleInputChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
  name: string,
  value: string,
  title: string
  
}
const RadioBox = ({ checked, handleInputChange, name, value, title }: PropsType) => {
  return (
    <label className="flex items-center p-4 border border-gray-200 cursor-pointer">
      <div className="relative flex items-center">
        <input
          type="radio"
          name={name}
          value={value}
          checked={checked}
          onChange={handleInputChange}
          className="sr-only" 
        />
        {/* Custom radio button */}
        <div
          className={`w-5 h-5 rounded-full border ${
            checked ? "border-primary" : "border-gray-300"
          } flex items-center justify-center`}
        >
          {/* Green dot that appears when checked */}
          {checked && <div className="w-3 h-3 rounded-full bg-primary"></div>}
        </div>
      </div>
      <span className="ml-2">{title}</span>
    </label>
  )
}

export default RadioBox