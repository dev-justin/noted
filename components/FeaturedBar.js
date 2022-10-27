import { BsPinAngleFill } from "react-icons/bs";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../util/firebase";

function FeaturedBar({ notes, user }) {
  const unpinNote = async (id) => {
    await updateDoc(doc(db, "users", user.uid, "notes", id), {
      pinned: false,
    });
  };

  return (
    <div className="border-2 border-bg-white rounded-lg p-8 text-bg-white">
      <h1 className="font-bold text-4xl pb-8">Featured Notes</h1>
      <div className="grid grid-cols-4 gap-4">
        {notes.map((note) => (
          <div className="border rounded-lg p-4 relative" key={note.id}>
            <button
              className="absolute -right-2 -top-3 text-xl text-green-400 hover:text-red-400 hover:scale-125 transition duration-300 ease-out"
              onClick={() => unpinNote(note.id)}
            >
              <BsPinAngleFill />
            </button>
            <h3 className="font-bold text-xl">{note.title}</h3>
            <p
              className="text-sm opacity-50"
              dangerouslySetInnerHTML={{ __html: note.note }}
            ></p>
            <p className="text-sm opacity-50 pt-4">
              {new Date(note.date.seconds * 1000).toLocaleDateString("en-US", {
                month: "short",
                day: "numeric",
                year: "numeric",
              })}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FeaturedBar;
