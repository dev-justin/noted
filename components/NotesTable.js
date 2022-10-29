import Image from "next/image";
import Link from "next/link";

function NotesTable({ notes }) {
  return (
    <div className="border-2 border-bg-white/50 rounded-lg p-8 text-bg-white grow relative overflow-clip">
      <div className="relative z-10 grid-rows-1 gap-4">
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="sm:flex sm:items-center">
            <div className="sm:flex-auto">
              <h1 className="text-xl font-semibold">Notes Hive</h1>
              <p className="mt-2 text-sm">A list of all your notes.</p>
            </div>
            <div className="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
              <Link href="/note/create">
                <span
                  className="inline-flex items-center justify-center rounded-md
                bg-white/20 backdrop-blur-sm px-4 py-2 font-semibold border-2
                border-white/20"
                >
                  Add note
                </span>
              </Link>
            </div>
          </div>
          <div className="mt-8 flex flex-col">
            <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
                  <table className="min-w-full divide-y divide-gray-300 bg-white/50 backdrop-blur-sm max-h-full overflow-scroll">
                    <thead className="bg-black/50">
                      <tr>
                        <th
                          scope="col"
                          className="py-3.5 pl-4 pr-3 text-left font-bold sm:pl-6"
                        >
                          Note
                        </th>
                        <th
                          scope="col"
                          className="px-3 py-3.5 text-left font-bold"
                        >
                          Date
                        </th>
                        <th
                          scope="col"
                          className="px-3 py-3.5 text-left font-bold"
                        >
                          Pinned
                        </th>
                        <th
                          scope="col"
                          className="relative py-3.5 pl-3 pr-4 sm:pr-6"
                        >
                          <span className="sr-only">Edit</span>
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200 text-white font-semibold">
                      {notes.map((note) => (
                        <tr key={note.id}>
                          <td className="whitespace-nowrap px-3 py-4 text-sm">
                            {new Date(
                              note.date.seconds * 1000
                            ).toLocaleDateString("en-US", {
                              month: "short",
                              day: "numeric",
                              year: "numeric",
                            })}
                          </td>
                          <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm sm:pl-6">
                            <div className="font-medium">{note.title}</div>
                          </td>
                          {/* <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                            <span className="inline-flex rounded-full bg-green-100 px-2 text-xs font-semibold leading-5 text-green-800">
                              Active
                            </span>
                          </td>
                          <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                            {person.role}
                          </td>
                          <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                            <a
                              href="#"
                              className="text-indigo-600 hover:text-indigo-900"
                            >
                              Edit
                              <span className="sr-only">, {person.name}</span>
                            </a>
                          </td> */}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Image
        src="/images/featuredimage.jpg"
        layout="fill"
        objectFit="cover"
        className="z-0"
      ></Image>
    </div>
  );
}

export default NotesTable;
