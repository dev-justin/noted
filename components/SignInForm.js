import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { useFormik } from "formik";
import { AiFillGoogleCircle } from "react-icons/ai";
import { GiLockedChest } from "react-icons/gi";
import { useState } from "react";

// Firebase
import { auth } from "../util/firebase";
import {
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";

export default function SignInForm({ open, setOpen }) {
  const [error, setError] = useState(null);

  const loginEmailUser = async (form) => {
    const { email, password } = form;
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
      })
      .catch((error) => {
        setError("Invalid email or password.");
      });
  };

  const handleGoogleLogin = async () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        // The signed-in user info.
        const user = result.user;
      })
      .catch((error) => {
        setError("Google be acting up.");
      });
  };

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      loginEmailUser(values);
    },
  });
  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={setOpen}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-opacity-75 transition-opacity bg-bg-black" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-bg-black px-4 pt-5 pb-4 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-sm sm:p-8 border-2 border-bg-white/20">
                {error && (
                  <p className="text-center pb-4 text-bg-fresh-lemon font-semibold italic">
                    {error}
                  </p>
                )}
                <h1 className="text-bg-white font-bold text-2xl pb-8 flex items-center gap-4">
                  Bring me to my world. <GiLockedChest />
                </h1>
                <form
                  className="flex flex-col gap-4"
                  onSubmit={formik.handleSubmit}
                >
                  <div className="rounded-md border border-bg-white px-3 py-2">
                    <label
                      htmlFor="email"
                      className="block text-xs font-medium text-bg-white"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      className="block w-full border-0 p-0 text-bg-white placeholder-gray-500 focus:ring-0 sm:text-lg bg-transparent"
                      placeholder="bobmarley@mymail.com"
                      required
                      onChange={formik.handleChange}
                      value={formik.values.email}
                    />
                  </div>
                  <div className="rounded-md border border-bg-white px-3 py-2">
                    <label
                      htmlFor="email"
                      className="block text-xs font-medium text-bg-white"
                    >
                      Password
                    </label>
                    <input
                      type="password"
                      name="password"
                      id="password"
                      className="block w-full border-0 p-0 text-bg-white placeholder-gray-500 focus:ring-0 sm:text-lg bg-transparent"
                      placeholder="ThreeLittleBirds"
                      required
                      onChange={formik.handleChange}
                      value={formik.values.password}
                    />
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <button
                      type="submit"
                      className="w-full py-4 rounded-lg font-bold text-bg-white border hover:bg-bg-white hover:text-bg-black transition duration-300 active:scale-95"
                    >
                      Login
                    </button>
                    <button
                      className="border-2 border-bg-white rounded-lg flex justify-center items-center h-[57px] w-[80px] hover:bg-bg-white transition duration-300 active:scale-95 group"
                      type="button"
                      onClick={() => handleGoogleLogin()}
                    >
                      <AiFillGoogleCircle className="text-bg-white text-3xl group-hover:text-bg-black" />
                    </button>
                  </div>
                </form>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
