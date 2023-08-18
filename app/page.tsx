"use client";
import RankList from "@/components/rankList/page";
import RotateLucky from "@/components/rotateLucky/page";
import { RootState } from "@/redux/configure-store";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import Image from "next/image";

export default function Home() {
  const modal = useAppSelector((state: RootState) => state.app.modal);
  console.log(modal);
  return (
    <main>
      {modal ? modal : <></>}
      <RotateLucky />
      <RankList />
    </main>
  );
}
