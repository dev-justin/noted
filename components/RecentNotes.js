import { BsPlusCircleDotted } from "react-icons/bs";
import Link from "next/link";

function RecentNotes({ notes }) {
  const recentNotes = notes.slice(0, 3);

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
        <div className="border rounded-lg p-4">
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
