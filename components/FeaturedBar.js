function FeaturedBar({ notes }) {
  // Make notes array only have first 4 notes
  const featuredNotes = notes.slice(0, 4);

  return (
    <div className="border-2 border-bg-white rounded-lg p-8 text-bg-white">
      <h1 className="font-bold text-4xl pb-8">Featured Notes</h1>
      <div className="grid grid-cols-4 gap-4">
        {featuredNotes.map((note) => (
          <div className="border rounded-lg p-4" key={note.date.nanoseconds}>
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
