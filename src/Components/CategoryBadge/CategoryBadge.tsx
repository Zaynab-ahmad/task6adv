interface CategoryBadgeProps {
  category: string;
  colorClass: string; 
}

const CategoryBadge = ({ category, colorClass }: CategoryBadgeProps) => {
  return (
    <span
      className={`text-sm font-medium bg-blend-multiply py-[2px] px-[10px] rounded-2xl ${colorClass}`}
    >
      {category}
    </span>
  );
};

export default CategoryBadge;
