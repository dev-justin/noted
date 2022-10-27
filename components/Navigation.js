import { MdNote } from "react-icons/md";
import Link from "next/link";
import { signOut } from "firebase/auth";
import { auth } from "../util/firebase";
import { useRouter } from "next/router";

function Navigation() {
  const router = useRouter();
  // Sign out function
  const signOutUser = () => {
    signOut(auth);
    router.push("/");
  };
  return (
    <div className="border-2 border-bg-white/50 p-8 rounded-lg flex-col flex shrink-0">
      <div>
        <Link href="/mind">
          <a>
            <div className="flex text-bg-white items-center text-2xl font-bold">
              <MdNote className="text-3xl" />
              <h1>Noted</h1>
            </div>
            <p className="text-bg-white/50 text-sm">Your personal notes app.</p>
          </a>
        </Link>
      </div>
      {/* Nav Links */}
      <div className="text-bg-white pt-8 grow flex flex-col gap-4">
        <Link href="/note/create">
          <a className="border rounded-lg p-2 text-sm block text-center hover:bg-bg-white hover:text-bg-black transition duration-300 active:scale-95">
            Create Note
          </a>
        </Link>
        <Link href="/note/notes">
          <a className="border rounded-lg p-2 text-sm block text-center hover:bg-bg-white hover:text-bg-black transition duration-300 active:scale-95">
            My Notes
          </a>
        </Link>
      </div>
      <div>
        <button
          className="border rounded-lg p-2 text-xs block text-center hover:bg-bg-white hover:text-bg-black transition duration-300 active:scale-95 border-bg-white text-bg-white w-full"
          onClick={() => signOutUser()}
        >
          Sign Out
        </button>
      </div>
    </div>
  );
}

export default Navigation;
