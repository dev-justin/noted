import Splash from "../components/Splash";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../util/firebase";
import { useRouter } from "next/router";

function Home() {
  const [user, loading, error] = useAuthState(auth);
  const router = useRouter();

  if (user) router.push("/mind");

  return (
    <>
      <div className="min-h-screen flex flex-col justify-between bg-bg-black">
        <Splash />
      </div>
    </>
  );
}

export default Home;
