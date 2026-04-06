import { useState } from "react";
import { ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight, Plus } from "lucide-react";
import Modal from "../components/common/Modal";
import Button from "../components/common/Button";
import CategoryCard from "../components/kb/CategoryCard";
import SearchBar from "../components/kb/SearchBar";
import Sidebar from "../components/kb/Sidebar";
import { knowledgeBaseItems } from "../data/categories";
import TopNavbar from "../layout/TopNavbar";

function HomePage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#F5F6FA] p-2">
      <div className="overflow-hidden rounded-xl border border-[#E7E8F0] bg-white">
        <TopNavbar />

        <div className="flex min-h-[calc(100vh-68px)]">
          <Sidebar />

          <main className="flex flex-1 flex-col bg-white px-4 py-4">
            <div>
              <div className="mb-4 flex items-center justify-between">
                <h1 className="text-[20px] font-bold text-[#2D2D35]">
                  Knowledge Base
                </h1>

                <div className="flex items-center gap-3">
                  <div className="w-[170px]">
                    <SearchBar />
                  </div>

                  <Button onClick={() => setIsModalOpen(true)} className="h-10 gap-2">
                    <Plus size={14} />
                    Create New
                  </Button>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-3 rounded-lg border border-[#E7E7EF] p-3 md:grid-cols-2 xl:grid-cols-3">
                {knowledgeBaseItems.map((item) => (
                  <CategoryCard
                    key={item.id}
                    title={item.title}
                    description={item.description}
                    createdOn={item.createdOn}
                  />
                ))}
              </div>
            </div>

            <div className="mt-auto pt-6 flex flex-col gap-4 text-[12px] text-[#4F4F5B] md:flex-row md:items-center md:justify-between">
              <div className="font-bold">6 rows</div>

              <div className="flex flex-wrap items-center gap-5">
                <div className="flex items-center gap-2">
                  <span className="font-bold">Rows per page</span>
                  <div className="flex h-8 items-center gap-2 rounded-md border border-[#E5E7EF] px-3 text-[#6A6A76]">
                    <span>10</span>
                    <span className="text-[10px]">▾</span>
                  </div>
                </div>

                <div className="font-bold">page 1 of 1</div>

                <div className="flex items-center gap-2">
                  <button className="flex h-8 w-8 items-center justify-center rounded-md border border-[#E5E7EF] text-[#B4B4BF]">
                    <ChevronsLeft size={14} />
                  </button>
                  <button className="flex h-8 w-8 items-center justify-center rounded-md border border-[#E5E7EF] text-[#B4B4BF]">
                    <ChevronLeft size={14} />
                  </button>
                  <button className="flex h-8 w-8 items-center justify-center rounded-md border border-[#E5E7EF] text-[#B4B4BF]">
                    <ChevronRight size={14} />
                  </button>
                  <button className="flex h-8 w-8 items-center justify-center rounded-md border border-[#E5E7EF] text-[#B4B4BF]">
                    <ChevronsRight size={14} />
                  </button>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}

export default HomePage;