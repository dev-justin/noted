import { BsPlusCircleDotted, BsPinAngleFill } from "react-icons/bs";
import Link from "next/link";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../util/firebase";
import { clsx } from "clsx";
import Image from "next/image";
import NotePopup from "./NotePopup";
import { useState } from "react";

function RecentNotes({ notes, user }) {
  const recentNotes = notes.slice(0, 13);

  // Pin note
  const pinNote = async (id) => {
    await updateDoc(doc(db, "users", user.uid, "notes", id), {
      pinned: true,
    });
  };

  // Note popup
  const [showNotePopup, setShowNotePopup] = useState(false);
  const [notePopupData, setNotePopupData] = useState(null);
  const showNoteOnClick = (note) => {
    setNotePopupData(note);
    setShowNotePopup(true);
  };
  return (
    <div className="border-2 border-bg-white/50 rounded-lg p-8 text-bg-white grow relative overflow-clip">
      <div className="relative z-10 grid grid-cols-4 grid-rows-1 gap-4 ">
        <Link href="/note/create">
          <div className="border row-span-full  rounded-lg p-4 flex justify-center items-center hover:bg-bg-white group transition duration-300 active:scale-95 relative overflow-hidden bg-bg-white/20 backdrop-blur-lg border-white/30 shadow-md">
            <BsPlusCircleDotted className="text-5xl group-hover:text-bg-black" />
            <h3 className="absolute top-0 left-0 uppercase font-extrabold text-4xl opacity-5 break-all">
              Add Note &bull; Add Note &bull; Add Note &bull; Add Note &bull;
              Add Note &bull; Add Note &bull; Add Note &bull; Add Note &bull;
              Add Note &bull; Add Note &bull; Add Note &bull; Add Note &bull;
              Add Note &bull; Add Note &bull; Add Note &bull; Add Note &bull;
              Add Note &bull; Add Note &bull; Add Note &bull; Add Note &bull;
              Add Note &bull; Add Note &bull; Add Note &bull; Add Note &bull;
              Add Note &bull; Add Note &bull; Add Note &bull; Add Note &bull;
            </h3>
          </div>
        </Link>
        {recentNotes.map((note) => (
          <div
            className="border rounded-lg p-4 relative bg-bg-white/20 backdrop-blur-lg border-white/30 shadow-md group"
            key={note.id}
            onClick={() => showNoteOnClick(note)}
          >
            <div className="flex items-center justify-between">
              <h3 className="font-bold text-xl">{note.title}</h3>
              <div className="flex items-center gap-2">
                <p className="text-sm opacity-50">
                  {new Date(note.date.seconds * 1000).toLocaleDateString(
                    "en-US",
                    {
                      month: "short",
                      day: "numeric",
                      year: "numeric",
                    }
                  )}
                </p>
                <button
                  className={clsx(
                    "hover:text-green-400 hover:scale-125 transition duration-300 ease-out",
                    (note.pinned && "text-green-400/40 hover:scale-100") ||
                      "text-white/40"
                  )}
                  onClick={() => pinNote(note.id)}
                >
                  <BsPinAngleFill />
                </button>
              </div>
            </div>
            <p
              className="text-sm opacity-50 pt-2 flex"
              dangerouslySetInnerHTML={{
                __html:
                  note.note.length > 40
                    ? note.note.slice(0, 40) + "..."
                    : note.note,
              }}
            ></p>
          </div>
        ))}
      </div>
      <Image
        src="/images/featuredimage.jpg"
        layout="fill"
        objectFit="cover"
        className="z-0"
      ></Image>
      {showNotePopup && notePopupData && (
        <NotePopup
          note={notePopupData}
          open={showNotePopup}
          setOpen={setShowNotePopup}
        />
      )}
    </div>
  );
}

export default RecentNotes;
