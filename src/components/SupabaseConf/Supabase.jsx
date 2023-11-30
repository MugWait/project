import React, { useEffect, useState } from "react";

import { createClient } from "@supabase/supabase-js";
// import SignUp from "../../views/SignUp/SignUp";
// import Index from "../../views/Index/Index";

export const supabase = createClient(
  "https://yfzrjyemsqsjqmffllyd.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlmenJqeWVtc3FzanFtZmZsbHlkIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODA0NTczNDQsImV4cCI6MTk5NjAzMzM0NH0.-FBZAPlbn8SlsE7eTGd493614rqCY-APahcTGjTeNGM"
);

// const Supabase = () => {
//   const [countries, setCountries] = useState([]);
//   // const [newParam, setNewParam] = useState('')
//   // icaupxL9xJIRh7M2
//   // const user = null
//   const [user, setUser] = useState([]);

//   useEffect(() => {
//     getCountries();
//     getUserInfo();
//   }, []);

//   async function getCountries() {
//     const { data } = await supabase.from("cars").select();
//     setCountries(data);
//   }

//   async function signInWithGoogle() {
//     const { data, error } = await supabase.auth.signInWithOAuth({
//       provider: "google",
//     });
//   }

//   async function signout() {
//     const { error } = await supabase.auth.signOut();
//     setUser(null);
//   }

//   async function getUserInfo() {
//     const { data } = await supabase.auth.getUser();
//     setUser(data);
//     console.log(data);
//   }

//   // return (
//   // <ul>
//   //   <img src="https://lh3.googleusercontent.com/a/AGNmyxbzJRKNyn38pDeiIzwmssjHFp-CCUFYcZdPzqyF=s96-c" />
//   //   {/* {user == null ? <SignUp /> : <Index />} */}
//   //   <input type="email" placeholder="Enter email" />
//   //   <button onClick={() => signInWithGoogle()}>Login</button>
//   //   <button onClick={() => signout()}>signout</button>
//   //   <input type="file" accept="image/png, image/jpeg" />

//   //   {countries.map((country) => (
//   //     <li key={country.id}>{country.car_name}</li>
//   //   ))}
//   // </ul>
//   // );
// };

// export default Supabase;
