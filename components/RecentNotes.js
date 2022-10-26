import { BsPlusCircleDotted } from "react-icons/bs";

function RecentNotes() {
  return (
    <div className="border-2 border-bg-white rounded-lg p-8 grid grid-cols-4 gap-4 text-bg-white grow">
      <div className="border border-bg-white rounded-lg p-4 flex justify-center items-center hover:bg-bg-white group transition duration-300 active:scale-95 relative overflow-hidden">
        <BsPlusCircleDotted className="text-5xl group-hover:text-bg-black" />
        <h3 className="absolute top-0 left-0 uppercase font-extrabold text-4xl opacity-5 break-all">
          Add Note &bull; Add Note &bull; Add Note &bull; Add Note &bull; Add
          Note &bull; Add Note &bull; Add Note &bull; Add Note &bull; Add Note
          &bull; Add Note &bull; Add Note &bull; Add Note &bull; Add Note &bull;
          Add Note &bull; Add Note &bull; Add Note &bull; Add Note &bull; Add
          Note &bull; Add Note &bull; Add Note &bull; Add Note &bull; Add Note
          &bull; Add Note &bull; Add Note &bull; Add Note &bull; Add Note &bull;
          Add Note &bull; Add Note &bull; Add Note &bull; Add Note &bull; Add
          Note &bull; Add Note &bull; Add Note &bull; Add Note &bull; Add Note
          &bull; Add Note &bull; Add Note &bull; Add Note &bull; Add Note &bull;
          Add Note &bull; Add Note &bull; Add Note &bull; Add Note &bull; Add
          Note &bull; Add Note &bull; Add Note &bull; Add Note &bull; Add Note
        </h3>
      </div>
      <div>Note</div>
      <div>Note</div>
      <div>Note</div>
    </div>
  );
}

export default RecentNotes;
