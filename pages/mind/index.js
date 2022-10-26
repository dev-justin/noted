import Navigation from "../../components/Navigation";
import FeaturedBar from "../../components/FeaturedBar";
import RecentNotes from "../../components/RecentNotes";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../util/firebase";
import { useRouter } from "next/router";
import { collection } from "firebase/firestore";
import { useCollection } from "react-firebase-hooks/firestore";
import { db } from "../../util/firebase";

function Mind() {
  const [user, loading, error] = useAuthState(auth);
  const router = useRouter();

  if (!user && !loading) return router.push("/");

  const [notes, loadingNotes, errorNotes] = useCollection(
    user ? collection(db, "users", user.uid, "notes") : null
  );

  return (
    user &&
    notes && (
      <div className="min-h-screen bg-bg-black flex">
        <div className="p-4 flex grow">
          {/* Left Navigation */}
          <Navigation />
          {/* Main Content */}
          <main className="grow pl-4 flex flex-col gap-4">
            <FeaturedBar notes={notes} />
            <RecentNotes notes={notes} />
          </main>
        </div>
      </div>
    )
  );
}

export default Mind;
