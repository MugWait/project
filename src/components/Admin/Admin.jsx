import React from "react";
import { createClient } from "@supabase/supabase-js";

const Admin = () => {
  const supabase = createClient(
    "https://yfzrjyemsqsjqmffllyd.supabase.co",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlmenJqeWVtc3FzanFtZmZsbHlkIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODA0NTczNDQsImV4cCI6MTk5NjAzMzM0NH0.-FBZAPlbn8SlsE7eTGd493614rqCY-APahcTGjTeNGM",
    {
      auth: {
        autoRefreshToken: false,
        persistSession: false,
      },
    }
  );

  // Access auth admin api
  const adminAuthClient = supabase.auth.admin;
  //   console.log(adminAuthClient);
  return (
    <div>{/* <button onClick={() => adminAuthClient}>Click</button> */}</div>
  );
};

export default Admin;
