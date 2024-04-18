// "use client";
import Image from "next/image";
import { createClient } from "../utlis/supabase/server";
import { cookies } from "next/headers";
// import InitialButton from "@/components/initialButton";
import Thread from "@/components/thread";
// import Spline from "@splinetool/react-spline";

// export default async function Page() {
//   const cookieStore = cookies();
//   const supabase = createClient(cookieStore);

//   const { data: todos } = await supabase.from("todos").select();

//   return (
//     <ul>
//       {todos?.map((todo) => (
//         <li>{todo}</li>
//       ))}
//     </ul>
//   );
// }

export default async function Page() {
  const cookieStore = cookies();
  const supabase = createClient(cookieStore);

  const { data: todos } = await supabase.from("todos").select();

  return (
    <main className="main">
      <div className="messageThread">
        <Thread></Thread>
      </div>
      <div className="spline">
        {/* <Spline scene="https://prod.spline.design/3G7HY84V1ZUKGVgm/scene.splinecode" /> */}
      </div>
    </main>
  );
}
