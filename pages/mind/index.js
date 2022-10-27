import Navigation from "../../components/Navigation";
import FeaturedBar from "../../components/FeaturedBar";
import RecentNotes from "../../components/RecentNotes";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../util/firebase";
import { useRouter } from "next/router";
import { collection, query, orderBy, limit, where } from "firebase/firestore";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { db } from "../../util/firebase";

function Mind() {
  const [user, loading, error] = useAuthState(auth);
  const router = useRouter();

  const [notes] = useCollectionData(
    user && !loading
      ? query(
          collection(db, "users", user.uid, "notes"),
          orderBy("date", "desc"),
          limit(13)
        )
      : null
  );

  const [pinnedNotes, loadingNotes, errorNotes] = useCollectionData(
    user && !loading
      ? query(
          collection(db, "users", user.uid, "notes"),
          where("pinned", "==", true),
          limit(4)
          // orderBy("date", "desc")
        )
      : null
  );

  if (!user && !loading) return router.push("/");

  return (
    user &&
    notes &&
    pinnedNotes && (
      <div className="min-h-screen bg-bg-black flex">
        <div className="p-4 flex grow">
          {/* Left Navigation */}
          <Navigation />
          {/* Main Content */}
          <main className="grow pl-4 flex flex-col gap-4">
            <FeaturedBar notes={pinnedNotes} user={user} />
            <RecentNotes notes={notes} user={user} />
          </main>
        </div>
      </div>
    )
  );
}

export default Mind;
