import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { FiEdit3, FiTrash2 } from "react-icons/fi";
import { BsPinAngleFill } from "react-icons/bs";

function NotePopup({ open, setOpen, note }) {
  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={setOpen}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-opacity-75 transition-opacity bg-black/40 backdrop-blur-sm" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white/40 backdrop-blur-sm px-4 pt-5 pb-4 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-4xl sm:p-8 border-2 border-bg-white/20">
                <div className="flex items-start justify-between">
                  <div className="flex gap-2 flex-col-reverse">
                    <h1 className="text-bg-white font-bold text-2xl flex items-center gap-4">
                      {note.title}
                    </h1>
                    <p className="text-sm text-white/50">
                      {new Date(note.date.seconds * 1000).toLocaleDateString(
                        "en-US",
                        {
                          month: "short",
                          day: "numeric",
                          year: "numeric",
                        }
                      )}
                    </p>
                  </div>
                </div>
                <p
                  className="text-sm text-white pt-8"
                  dangerouslySetInnerHTML={{
                    __html: note.note,
                  }}
                ></p>
                <div className="flex gap-4 pt-8 border-t-2 border-white/20 mt-8 justify-center">
                  <button className="bg-white/70 backdrop-blur-sm p-4 h-12 w-12 rounded-full border-2 border-white/40 font-semibold flex items-center gap-3">
                    <BsPinAngleFill />
                  </button>
                  <button className="bg-white/70 backdrop-blur-sm p-4 h-12 w-12 rounded-full border-2 border-white/40 font-semibold flex items-center gap-3">
                    <FiEdit3 />
                  </button>
                  <button className="bg-red-400/70 backdrop-blur-sm p-4 h-12 w-12 rounded-full border-2 border-red-300/40 font-semibold flex items-center gap-3">
                    <FiTrash2 />
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}

export default NotePopup;
