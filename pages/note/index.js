import Navigation from "../../components/Navigation";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../util/firebase";
import { useRouter } from "next/router";
import { collection, query, orderBy } from "firebase/firestore";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { db } from "../../util/firebase";
import NotesTable from "../../components/NotesTable";

function Notes() {
  const [user, loading, error] = useAuthState(auth);
  const router = useRouter();

  const [notes] = useCollectionData(
    user && !loading
      ? query(
          collection(db, "users", user.uid, "notes"),
          orderBy("date", "desc")
        )
      : null
  );

  if (!user && !loading) return router.push("/");

  console.log(notes);

  return (
    user &&
    notes && (
      <div className="min-h-screen bg-bg-black flex">
        <div className="p-4 flex grow">
          {/* Left Navigation */}
          <Navigation />
          {/* Main Content */}
          <main className="grow pl-4 flex flex-col gap-4">
            <NotesTable notes={notes} user={user} />
          </main>
        </div>
      </div>
    )
  );
}

export default Notes;
