import { BsPinAngleFill } from "react-icons/bs";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../util/firebase";
import Image from "next/image";
function FeaturedBar({ notes, user }) {
  const unpinNote = async (id) => {
    await updateDoc(doc(db, "users", user.uid, "notes", id), {
      pinned: false,
    });
  };

  return (
    <div className="border-2 border-bg-white/50 rounded-lg px-8 pt-4 pb-8 text-bg-white relative overflow-clip">
      <div className="z-10 relative">
        <h1 className="font-bold text-xl pb-4">Pinned Notes</h1>
        <div className="grid grid-cols-4 gap-4">
          {notes.map((note) => (
            <div
              className="border rounded-lg p-4 relative bg-bg-white/20 backdrop-blur-lg border-white/30 shadow-md"
              key={note.id}
            >
              <button
                className="absolute -right-2 -top-3 text-xl text-green-400 hover:text-red-400 hover:scale-125 transition duration-300 ease-out"
                onClick={() => unpinNote(note.id)}
              >
                <BsPinAngleFill />
              </button>
              <div className="flex items-center justify-between">
                <h3 className="font-bold text-xl">{note.title}</h3>
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
    </div>
  );
}

export default FeaturedBar;
