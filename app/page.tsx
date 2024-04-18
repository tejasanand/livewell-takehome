import Image from "next/image";
// import InitialButton from "@/components/initialButton";
import Thread from "@/components/thread";

export default function Home() {
  return (
    <main>
      <div className="initialButton">
        {/* <InitialButton></InitialButton> */}
      </div>
      <div className="messageThread">
        <Thread></Thread>
      </div>
    </main>
  );
}
