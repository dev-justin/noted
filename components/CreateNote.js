// NextJS
import dynamic from "next/dynamic";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
// React Native
import { useState } from "react";
// Quill
import "react-quill/dist/quill.snow.css";
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });
// Icons
import { BiArrowBack } from "react-icons/bi";
// Formik
import { useFormik } from "formik";

// Firebase
import { collection, doc, setDoc } from "firebase/firestore";
import { db } from "../util/firebase";

function CreateNote({ uid }) {
  const router = useRouter();
  const [note, setNote] = useState("");
  const formik = useFormik({
    initialValues: {
      title: "",
      pinned: false,
    },
    onSubmit: async (values) => {
      const newDocRef = doc(collection(db, "users", uid, "notes"));
      await setDoc(newDocRef, {
        title: values.title,
        note: note,
        date: new Date(),
        uid,
        id: newDocRef.id,
        pinned: values.pinned,
      });
      values.title = "";
      setNote("");
      router.push("/mind");
    },
  });

  return (
    <div className="border-2 border-white/50 rounded-lg p-8 h-full overflow-hidden relative flex justify-center items-center ">
      <div className="w-full flex flex-col z-10 relative bg-white/40 backdrop-blur-lg rounded-lg px-8 py-4 border-2 border-white/40 shadow-lg max-w-[900px]">
        <div className="relative flex sm:justify-center items-center pb-2">
          <div className="sm:absolute left-0 bottom-0">
            <Link href="/mind">
              <div>
                <a className="text-bg-white uppercase font-bold inline-flex items-center gap-2 border px-4 py-1 rounded-full hover:bg-bg-white hover:text-bg-black active:scale-95 transition duration-300 ease-out">
                  <BiArrowBack className="mt-1 text-xl" />
                  Back
                </a>
              </div>
            </Link>
          </div>
          <div>
            <h1 className="text-bg-white text-4xl font-bold hidden sm:block">
              Create your note.
            </h1>
          </div>
        </div>
        <form
          className="flex flex-col gap-4 pt-4"
          id="noteform"
          onSubmit={formik.handleSubmit}
        >
          <div className="rounded-md border-2 border-bg-white px-3 py-2">
            <label
              htmlFor="title"
              className="block font-medium text-bg-white/50 pb-2"
            >
              Note Title
            </label>
            <input
              type="title"
              name="title"
              id="title"
              className="block w-full border-0 p-0 text-bg-white placeholder-white/40 focus:ring-0 sm:text-xl bg-transparent outline-none"
              placeholder="Guide to the Galaxy"
              required
              onChange={formik.handleChange}
              value={formik.values.title}
            />
          </div>
          <fieldset>
            <legend className="sr-only">Pin note</legend>
            <div className="relative flex items-start">
              <div className="flex h-5 items-center">
                <input
                  id="pinned"
                  aria-describedby="pinned-description"
                  name="pinned"
                  type="checkbox"
                  className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                  onChange={formik.handleChange}
                  value={true}
                />
              </div>
              <div className="ml-3 text-sm">
                <label
                  htmlFor="pinned"
                  className=" text-bg-white font-semibold"
                >
                  Pin this note
                </label>
              </div>
            </div>
          </fieldset>
          <ReactQuill
            theme="snow"
            value={note}
            onChange={setNote}
            className="text-bg-white rounded-lg h-[calc(100vh-451px)]"
          />
          <button
            type="submit"
            className="w-full py-4 rounded-lg font-bold text-bg-white border-2 hover:bg-bg-white hover:text-bg-black transition duration-300 active:scale-95 mt-12 border-bg-white"
          >
            Noted
          </button>
        </form>
      </div>
      <Image
        src="/images/featuredimage.jpg"
        layout="fill"
        objectFit="cover"
        className="z-0"
      ></Image>
    </div>
  );
}

export default CreateNote;
