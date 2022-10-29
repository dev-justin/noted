import { BsPinAngleFill } from "react-icons/bs";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../util/firebase";
import Image from "next/image";
import NotePopup from "./NotePopup";
import { useState } from "react";

function FeaturedBar({ notes, user }) {
  // Note popup
  const [showNotePopup, setShowNotePopup] = useState(false);
  const [notePopupData, setNotePopupData] = useState(null);
  const showNoteOnClick = (note) => {
    setNotePopupData(note);
    setShowNotePopup(true);
  };

  const unpinNote = async (id) => {
    await updateDoc(doc(db, "users", user.uid, "notes", id), {
      pinned: false,
    });
  };

  return (
    <div className="border-2 border-bg-white/50 rounded-lg px-8 pt-4 pb-8 text-bg-white relative overflow-clip">
      <div className="z-10 relative">
        <h1 className="font-bold text-xl pb-4">Pinned Notes</h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-4 gap-4">
          {notes.map((note) => (
            <div
              className="border rounded-lg p-4 relative bg-bg-white/20 backdrop-blur-lg border-white/30 shadow-md"
              key={note.id}
              onClick={() => showNoteOnClick(note)}
            >
              <button
                className="absolute -right-2 -top-3 text-xl text-green-400 hover:text-red-400 hover:scale-125 transition duration-300 ease-out"
                onClick={() => unpinNote(note.id)}
              >
                <BsPinAngleFill />
              </button>
              <div className="flex items-center justify-between flex-wrap md:flex-nowrap gap-2">
                <h3 className="font-bold md:text-xl">{note.title}</h3>
                <p className="text-xs md:text-sm opacity-50">
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
          ))}
        </div>
      </div>

      <Image
        src="/images/featuredimage.jpg"
        layout="fill"
        objectFit="cover"
        objectPosition={"top"}
        className="z-0 absolute top-0 left-0"
      ></Image>

      {showNotePopup && notePopupData && (
        <NotePopup
          note={notePopupData}
          open={showNotePopup}
          setOpen={setShowNotePopup}
          user={user}
        />
      )}
    </div>
  );
}

export default FeaturedBar;
