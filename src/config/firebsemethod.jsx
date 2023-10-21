import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { getDatabase, ref, set, onValue, push } from "firebase/database";
import { app } from "./firebaseconfig";
import img2 from "../asset/img2.jpg";

let auth = getAuth(app);
let db = getDatabase(app);

export let fbLogin = (body) => {
  return new Promise((resolve, reject) => {
    if (!body.email || !body.password) {
      reject("Email and Password is Required");
    } else {
      signInWithEmailAndPassword(auth, body.email, body.password)
        .then((res) => {
          let id = res.user.uid;

          const referece = ref(db, `users/${id}`);

          onValue(referece, (data) => {
            if (data.exists()) {
              resolve(data.val());
            } else {
              reject(img2);
            }
          });
        })

        .catch((err) => {
          reject(err);
        });
    }
  });
};

export let fbSignUp = (body) => {
  console.log(body);
  return new Promise((resolve, reject) => {
    if (!body.email || !body.password) {
      reject("Email and Password is Required");
    } else {
      createUserWithEmailAndPassword(auth, body.email, body.password)
        .then((res) => {
          let id = res.user.uid;
          body.id = id;

          const referece = ref(db, `users/${id}`);

          set(referece, body)
            .then((user) => {
              resolve("User Created Succefully");
            })
            .catch((error) => {
              reject(error);
            });
        })
        .catch((err) => {
          reject(err);
        });
    }
  });
};

export let fbAuth = () => {
  return new Promise((resolve, rejects) => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // user is signed se docs for a list of available properties
        const uid = user.uid;
        resolve(uid);
      } else {
        rejects("no user is login");
      }
    });
  });
};

export let fbAdd = (nodeName, body) => {
  return new Promise((resolve, rejects) => {
    const TaskId = push(ref(db, `${nodeName}/`)).key;

    body.id = TaskId;

    const referece = ref(db, `${nodeName}/${body.id}`);
    set(referece, body)
      .then((res) => {
        resolve("data send successfully");
      })
      .catch((err) => {
        rejects(err);
      });
  });
};

export let fbGet = (nodeName, id) => {
  return new Promise((resolve, reject) => {
    const referece = ref(db, `${nodeName}/${id ? id : ""}`);

    onValue(referece, (data) => {
      if (data.exists()) {
        resolve(data.val());
      } else {
        reject("No Data Found");
      }
    });
  });
};

export let fbLogout = () => {
  return signOut(auth);
};

// export let LoginStatus = () => {
//   return isLoggedIn;
// };
