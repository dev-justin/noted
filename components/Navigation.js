import { MdNote } from "react-icons/md";
import Link from "next/link";
import { signOut } from "firebase/auth";
import { auth } from "../util/firebase";
import { useRouter } from "next/router";
import Image from "next/image";
import { BsPlusCircleFill } from "react-icons/bs";
import { ImBooks } from "react-icons/im";
import { AiOutlineLogout, AiFillHome } from "react-icons/ai";

function Navigation() {
  const router = useRouter();
  // Sign out function
  const signOutUser = () => {
    signOut(auth);
    router.push("/");
  };
  return (
    <div className="border-2 border-bg-white/50 md:p-8 rounded-lg flex-col flex shrink-0 overflow-hidden relative p-2">
      <div className="z-10 relative">
        <Link href="/mind">
          <a>
            <div className="hidden md:block">
              <div className="flex text-bg-white items-center font-bold text-2xl">
                <MdNote className="text-3xl" />
                <h1>Noted</h1>
              </div>
              <p className="text-bg-white/50 text-sm">
                Your personal notes app.
              </p>
            </div>
            <div>
              <AiFillHome className="text-3xl text-bg-white md:hidden mt-4" />
            </div>
          </a>
        </Link>
      </div>
      {/* Nav Links */}
      <div className="text-bg-white pt-8 grow flex flex-col gap-4 z-10 relative items-center md:items-stretch">
        <Link href="/note/create">
          <div>
            <a className="border rounded-lg p-2 text-sm text-center hover:bg-bg-white hover:text-bg-black transition duration-300 active:scale-95 hidden md:block">
              Create Note
            </a>
            <a className="md:hidden">
              <BsPlusCircleFill className="text-white text-2xl inline-flex" />
            </a>
          </div>
        </Link>
        <Link href="/note">
          <div>
            <a className="border rounded-lg p-2 text-sm text-center hover:bg-bg-white hover:text-bg-black transition duration-300 active:scale-95 hidden md:block">
              My Notes
            </a>
            <a className="md:hidden">
              <ImBooks className="text-white text-2xl inline-flex " />
            </a>
          </div>
        </Link>
      </div>
      <div className="z-10 relative flex justify-center">
        <button
          className="border rounded-lg p-2 text-xs text-center hover:bg-bg-white hover:text-bg-black transition duration-300 active:scale-95 border-bg-white text-bg-white w-full hidden md:block"
          onClick={() => signOutUser()}
        >
          Sign Out
        </button>
        <button>
          <AiOutlineLogout
            className="text-white text-2xl inline-flex md:hidden mb-4"
            onClick={() => signOutUser()}
          />
        </button>
      </div>
      <Image
        src="/images/featuredimage.jpg"
        layout="fill"
        objectFit="cover"
        className="z-0"
        objectPosition={"left"}
      ></Image>
    </div>
  );
}

export default Navigation;
