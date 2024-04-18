"use client";

import Image from "next/image";
// import InitialButton from "@/components/initialButton";
import Thread from "@/components/thread";
// import Spline from "@splinetool/react-spline";

export default function Home() {
  return (
    <main className="main">
      <div className="messageThread">
        <Thread></Thread>
      </div>
      {/* <div className="spline">
        <Spline scene="https://prod.spline.design/3G7HY84V1ZUKGVgm/scene.splinecode" />
      </div> */}
    </main>
  );
}
