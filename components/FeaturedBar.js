// Array of objects with random notes data
const notes = [
  {
    title: "Note 1",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    title: "Note 2",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    title: "Note 3",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    title: "Note 4",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
];

function FeaturedBar() {
  return (
    <div className="border-2 border-bg-white rounded-lg p-8 text-bg-white">
      <h1 className="font-bold text-4xl pb-8">Featured Notes</h1>
      <div className="grid grid-cols-4 gap-4">
        {notes.map((note) => (
          <div className="border rounded-lg p-4">
            <h3 className="font-bold text-xl">{note.title}</h3>
            <p className="text-sm opacity-50">{note.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FeaturedBar;
