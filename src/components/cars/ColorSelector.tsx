interface ColorSelectorProps {
  colors: string[];
  selectedColor: number;
  onColorSelect: (index: number) => void;
}

const ColorSelector = ({ colors, selectedColor, onColorSelect }: ColorSelectorProps) => {
  return (
    <div>
      <h3 className="text-xl font-semibold mb-4">Colors</h3>
      <div className="flex flex-wrap gap-2 mb-6">
        {colors.map((color, index) => (
          <button
            key={color}
            className={`w-8 h-8 rounded-full border-2 transition-all ${
              selectedColor === index ? 'border-primary scale-110' : 'border-transparent'
            }`}
            style={{ backgroundColor: color }}
            onClick={() => onColorSelect(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default ColorSelector;