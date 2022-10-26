function FeaturedBar({ notes }) {
  const noteList = notes.docs.map((note) => note.data()).splice(0, 4);
  return (
    <div className="border-2 border-bg-white rounded-lg p-8 text-bg-white">
      <h1 className="font-bold text-4xl pb-8">Featured Notes</h1>
      <div className="grid grid-cols-4 gap-4">
        {noteList.map((note) => (
          <div className="border rounded-lg p-4">
            <h3 className="font-bold text-xl">{note.title}</h3>
            <p
              className="text-sm opacity-50"
              dangerouslySetInnerHTML={{ __html: note.note }}
            ></p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FeaturedBar;
