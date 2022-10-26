// User Auth Check
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../../util/firebase";
import { useRouter } from "next/router";

import Navigation from "../../../components/Navigation";
import CreateNote from "../../../components/CreateNote";

// Component
function index() {
  const [user, loading, error] = useAuthState(auth);
  const router = useRouter();
  if (!user && !loading) router.push("/");

  return (
    user && (
      <div className="h-screen bg-bg-black flex overflow-hidden">
        <div className="flex grow p-4 gap-4">
          {/* Left Navigation */}
          <Navigation />
          {/* Main Content */}
          <main className="grow">
            <CreateNote {...user} />
          </main>
        </div>
      </div>
    )
  );
}

export default index;
