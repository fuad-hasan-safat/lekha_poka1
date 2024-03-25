"use client"
import { useEffect } from "react";
import type { RootState } from "@/lib/store";
import { UseSelector, useDispatch } from "react-redux";
import { makeTrueFalse } from "@/lib/features/navbar-footer/showNavbarFooterSlice";
import LoginPage from "../../../components/login/login";
import "../../../app/globals.css";



export default function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(makeTrueFalse());
    return () => {
      dispatch(makeTrueFalse());
    }
  }, [dispatch])
  return (
    <div className="h-screen flex items-center justify-center ">
      <LoginPage />
    </div>
  );
}
