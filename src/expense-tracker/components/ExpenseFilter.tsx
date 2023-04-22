import categories from "./categories";

interface Props {
  selectedCategory: (category: string) => void;
}

const ExpenseFilter = ({ selectedCategory }: Props) => {
  return (
    <div>
      <select
        className="form-select"
        onChange={(event) => selectedCategory(event.target.value)}
      >
        <option value="">All Categories</option>
        {categories.map((category) => (
          <option key={category} id={category} value={category}>
            {category}
          </option>
        ))}
      </select>
    </div>
  );
};

export default ExpenseFilter;
