import { MdNote } from "react-icons/md";
import Image from "next/image";
import SignUpForm from "./SignUpForm";
import SignInForm from "./SignInForm";
import { useState } from "react";
import Marquee from "react-fast-marquee";

function Splash() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="flex p-4 gap-4 min-h-screen">
        {/* Left Col */}
        <div className="border-2 border-bg-white p-8 rounded-lg items-center justify-center flex-col hidden md:flex relative shrink-0">
          <div className="text-bg-white flex flex-col absolute top-4 left-1/2 -translate-x-1/2 gap-2">
            <span className="opacity-30 text-xs whitespace-nowrap">
              Already have an account?
            </span>
            <button
              className="w-full py-2 text-xs rounded-lg font-bold text-bg-white border hover:bg-bg-white hover:text-bg-black transition duration-300 active:scale-95"
              onClick={() => setOpen(true)}
            >
              Login
            </button>
          </div>
          <div></div>
          <div>
            <div className="flex text-bg-white items-center text-2xl font-bold">
              <MdNote className="text-3xl" />
              <h1>Noted</h1>
            </div>
            <p className="text-bg-white/50 text-sm">Your personal notes app.</p>
          </div>
        </div>
        {/* Right Col */}
        <div className="grow">
          {/* Top Bar */}
          <div className="border-2 border-bg-white p-4 rounded-lg overflow-hidden relative mb-4 max-w-[calc(100vw-30px)]">
            <Marquee gradient={false} pauseOnHover={true} speed={40}>
              <h3 className="uppercase text-5xl font-extrabold text-bg-white h-[50px] overflow-hidden">
                Never forget &bull; Your Notes Only &bull; Always Available
                &bull; Mind Hive &bull;&nbsp;
              </h3>
            </Marquee>
          </div>

          <div className="flex gap-4 h-[calc(100vh-135px)]">
            {/* Left */}
            <div className="border-2 border-bg-white p-8 rounded-lg flex-1 relative overflow-hidden hidden lg:block">
              <Image
                src="/images/left-splash.jpg"
                layout="fill"
                objectFit="cover"
                objectPosition={"bottom"}
              ></Image>
            </div>
            {/* Right */}
            <div className="border-2 border-bg-white p-8 rounded-lg flex-1 overflow-hidden">
              <div className="flex flex-col gap-8 h-full">
                <div>
                  <div className="text-bg-white/50 flex pb-2 gap-4 md:hidden">
                    <p>Have an account?</p>
                    <button
                      className="py-1 px-4 text-xs rounded-lg font-bold text-bg-white border hover:bg-bg-white hover:text-bg-black transition duration-300 active:scale-95 opacity-50"
                      onClick={() => setOpen(true)}
                    >
                      Login
                    </button>
                  </div>
                  <h1 className="text-bg-white font-bold text-2xl pb-8">
                    Bring me to my world.
                  </h1>
                  <SignUpForm />
                </div>
                <p className="uppercase text-bg-white font-extrabold text-xl opacity-5 grow overflow-hidden">
                  Follow up with Ava about the 24th deadline &bull; Update code
                  dependencies to account for Python v3 release &bull; Feed the
                  dog at 9 and 5 &bull; Huddle with the team to discuss if the
                  leafs or canadians are better &bull; Change car tires before
                  the snow next week &bull; Update Analytics away from Google
                  Analytics towards Adobe Analytics &bull; Meeting at 3pm with
                  the CEO &bull; Call the client at 4pm to discuss the new
                  project &bull; Push out new product releases and monitor for
                  post launch bugs &bull; Follow up with Ava about the 24th
                  deadline &bull; Update code dependencies to account for Python
                  v3 release &bull; Feed the dog at 9 and 5 &bull; Huddle with
                  the team to discuss if the leafs or canadians are better
                  &bull; Change car tires before the snow next week &bull;
                  Update Analytics away from Google Analytics towards Adobe
                  Analytics &bull; Meeting at 3pm with the CEO &bull; Call the
                  client at 4pm to discuss the new project &bull; Push out new
                  product releases and monitor for post launch bugs &bull;
                  Follow up with Ava about the 24th deadline &bull; Update code
                  dependencies to account for Python v3 release &bull; Feed the
                  &bull; Update Analytics away from Google Analytics towards
                  Adobe Analytics &bull; Meeting at 3pm with the CEO &bull; Call
                  the client at 4pm to discuss the new project
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <SignInForm open={open} setOpen={setOpen} />
    </>
  );
}

export default Splash;
