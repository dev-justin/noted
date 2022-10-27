import { BsPlusCircleDotted, BsPinAngleFill } from "react-icons/bs";
import Link from "next/link";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../util/firebase";
import { clsx } from "clsx";

function RecentNotes({ notes, user }) {
  const recentNotes = notes.slice(0, 3);
  const pinNote = async (id) => {
    await updateDoc(doc(db, "users", user.uid, "notes", id), {
      pinned: true,
    });
  };
  return (
    <div className="border-2 border-bg-white rounded-lg p-8 grid grid-cols-4 gap-4 text-bg-white grow">
      <Link href="/note/create">
        <div className="border border-bg-white rounded-lg p-4 flex justify-center items-center hover:bg-bg-white group transition duration-300 active:scale-95 relative overflow-hidden">
          <BsPlusCircleDotted className="text-5xl group-hover:text-bg-black" />
          <h3 className="absolute top-0 left-0 uppercase font-extrabold text-4xl opacity-5 break-all">
            Add Note &bull; Add Note &bull; Add Note &bull; Add Note &bull; Add
            Note &bull; Add Note &bull; Add Note &bull; Add Note &bull; Add Note
            &bull; Add Note &bull; Add Note &bull; Add Note &bull; Add Note
            &bull; Add Note &bull; Add Note &bull; Add Note &bull; Add Note
            &bull; Add Note &bull; Add Note &bull; Add Note &bull; Add Note
            &bull; Add Note &bull; Add Note &bull; Add Note &bull; Add Note
            &bull; Add Note &bull; Add Note &bull; Add Note &bull; Add Note
            &bull; Add Note &bull; Add Note &bull; Add Note &bull; Add Note
            &bull; Add Note &bull; Add Note &bull; Add Note &bull; Add Note
            &bull; Add Note &bull; Add Note &bull; Add Note &bull; Add Note
            &bull; Add Note &bull; Add Note &bull; Add Note &bull; Add Note
            &bull; Add Note &bull; Add Note &bull; Add Note
          </h3>
        </div>
      </Link>
      {recentNotes.map((note) => (
        <div className="border rounded-lg p-4 relative" key={note.id}>
          <button
            className={clsx(
              "absolute -right-2 -top-3 text-xl hover:text-green-400 hover:scale-125 transition duration-300 ease-out",
              (note.pinned && "text-green-400") || "text-white/50"
            )}
            onClick={() => pinNote(note.id)}
          >
            <BsPinAngleFill />
          </button>
          <h3 className="font-bold text-xl">{note.title}</h3>
          <p
            className="text-sm opacity-50"
            dangerouslySetInnerHTML={{ __html: note.note }}
          ></p>
        </div>
      ))}
    </div>
  );
}

export default RecentNotes;
