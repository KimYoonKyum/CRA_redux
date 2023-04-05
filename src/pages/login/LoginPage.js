import React from "react";
import { getFireStoreDB } from "../../utils/FirebaseUtil";
import { collection, query, where, getDocs } from "@firebase/firestore";

export function LoginPage() {
  const onLogin = async () => {
    const db = getFireStoreDB();
    const userRef = collection(db, "users");

    const query = query(userRef, where("email", "==", "newalpha7@naver.com"));
    const querySnapshot = await getDocs(query);
    querySnapshot.forEach((doc) => {
      console.log(doc.id, " => ", doc.data());
    });
    console.log(querySnapshot);
  };
  return (
    <div>
      <div onClick={onLogin}>로그인</div>
    </div>
  );
}
