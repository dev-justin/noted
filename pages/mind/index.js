import Navigation from "../../components/Navigation";
import FeaturedBar from "../../components/FeaturedBar";
import RecentNotes from "../../components/RecentNotes";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../util/firebase";
import { useRouter } from "next/router";

function Mind() {
  const [user, loading, error] = useAuthState(auth);
  const router = useRouter();

  if (!user && !loading) router.push("/");

  return (
    user && (
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
    )
  );
}

export default Mind;
