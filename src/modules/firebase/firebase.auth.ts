import { getAuth } from "firebase/auth";
import { firebaseApp } from ".";
const auth = getAuth(firebaseApp);
export { auth };
