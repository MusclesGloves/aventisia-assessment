import { X, ChevronDown } from "lucide-react";
import Button from "./Button";

function Modal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50">
      <div
        className="absolute inset-0 bg-black/30"
        onClick={onClose}
      />

      <div className="rounded-xl absolute right-0 top-0 h-full w-full max-w-[500px] bg-white shadow-2xl">
        <div className="flex h-full flex-col">
          <div className="flex items-start justify-between border-b border-[#EFEFF4] px-4 py-4">
            <div>
              <h2 className="text-[16px] font-semibold text-[#2B2B35]">
                Create New Knowledge Base
              </h2>
              <p className="mt-1 text-[11px] text-[#8A8A96]">
                Best for quick answers from documents, websites and text files.
              </p>
            </div>

            <button onClick={onClose} className="text-[#757582]">
              <X size={18} />
            </button>
          </div>

          <div className="flex-1 space-y-4 overflow-y-auto px-4 py-4">
            <div>
              <label className="mb-1.5 block text-[12px] font-medium text-[#4B4B59]">
                Name (Cannot be edited later)*
              </label>
              <input
                type="text"
                placeholder="Name"
                className="h-10 w-full rounded-md border border-[#E5E6EE] px-3 text-[12px] outline-none placeholder:text-[#A0A0AE] focus:border-[#5B54F6]"
              />
            </div>

            <div>
              <label className="mb-1.5 block text-[12px] font-medium text-[#4B4B59]">
                Description
              </label>
              <textarea
                placeholder="Description"
                rows={4}
                className="w-full resize-none rounded-md border border-[#E5E6EE] px-3 py-2 text-[12px] outline-none placeholder:text-[#A0A0AE] focus:border-[#5B54F6]"
              />
            </div>

            <div>
              <label className="mb-1.5 block text-[12px] font-medium text-[#4B4B59]">
                Vector Store*
              </label>
              <div className="flex h-10 items-center justify-between rounded-md border border-[#E5E6EE] px-3 text-[12px] text-[#666674]">
                <span>Qdrant</span>
                <ChevronDown size={16} />
              </div>
            </div>

            <div>
              <label className="mb-1.5 block text-[12px] font-medium text-[#4B4B59]">
                LLM Embedding Model*
              </label>
              <div className="flex h-10 items-center justify-between rounded-md border border-[#E5E6EE] px-3 text-[12px] text-[#666674]">
                <span>text-embedding-ada-002</span>
                <ChevronDown size={16} />
              </div>
            </div>
          </div>

          <div className="border-t border-[#EFEFF4] px-4 py-4">
            <div className="flex justify-end">
              <Button className="min-w-[82px]">Create</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;