import Navigation from "../../components/Navigation";
import FeaturedBar from "../../components/FeaturedBar";
import RecentNotes from "../../components/RecentNotes";

function Mind() {
  return (
    <div className="min-h-screen bg-bg-black flex">
      <div className="p-4 flex grow">
        {/* Left Navigation */}
        <Navigation />
        {/* Main Content */}
        <main className="grow pl-4 flex flex-col gap-4">
          <FeaturedBar />
          <RecentNotes />
        </main>
      </div>
    </div>
  );
}

export default Mind;
