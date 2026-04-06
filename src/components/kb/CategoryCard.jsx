import { MoreVertical } from "lucide-react";

function CategoryCard({ title, description, createdOn }) {
  return (
    <div className="flex h-full w-full flex-col rounded-lg border border-[#E7E7EF] bg-white px-4 py-4 shadow-[0_0_0_1px_rgba(0,0,0,0.01)]">
      <div className="flex items-start justify-between">
        <h3 className="text-[14px] font-semibold text-[#2A2A33]">{title}</h3>
        <button className="cursor-pointer text-[#7C7C89]">
          <MoreVertical size={16} />
        </button>
      </div>

      <p className="mt-3 min-h-[72px] text-[12px] leading-6 text-[#7A7A86]">
        {description}
      </p>

      <div className="mt-auto border-t border-[#EFEFF5] pt-3 text-[12px] text-[#7A7A86]">
        Created On: <span className="font-medium text-[#5F5F6E]">{createdOn}</span>
      </div>
    </div>
  );
}

export default CategoryCard;