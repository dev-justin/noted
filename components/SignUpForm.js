import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { auth, db } from "../util/firebase";
import { useFormik } from "formik";
import { AiFillGoogleCircle } from "react-icons/ai";

function SignUpForm() {
  // Register a new user with Google
  const handleGoogleSignUp = async () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        // ...
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
  };

  // Register a new user with email and password
  const registerEmailUser = async (form) => {
    const { email, name, password } = form;
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
  };

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      registerEmailUser(values);
    },
  });

  return (
    <form className="flex flex-col gap-4" onSubmit={formik.handleSubmit}>
      <div className="rounded-md border border-bg-white px-3 py-2">
        <label
          htmlFor="name"
          className="block text-xs font-medium text-bg-white"
        >
          Name
        </label>
        <input
          type="text"
          name="name"
          id="name"
          className="block w-full border-0 p-0 text-bg-white placeholder-gray-500 focus:ring-0 sm:text-lg bg-transparent"
          placeholder="Bob Marley"
          required
          onChange={formik.handleChange}
          value={formik.values.name}
        />
      </div>
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
          Join
        </button>
        <button
          className="border-2 border-bg-white rounded-lg flex justify-center items-center h-[57px] w-[80px] hover:bg-bg-white transition duration-300 active:scale-95 group"
          type="button"
          onClick={() => handleGoogleSignUp()}
        >
          <AiFillGoogleCircle className="text-bg-white text-3xl group-hover:text-bg-black" />
        </button>
      </div>
    </form>
  );
}

export default SignUpForm;
