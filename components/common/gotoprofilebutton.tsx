import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

type gotoprofileProps = {
  buttonClass: string;
  buttonText: string;
  id: string;
};

export default function GoToProfile({
  buttonClass,
  buttonText,
  id,
}: gotoprofileProps) {
  const router = useRouter();

  function handleClick(userId: string) {
    router.push(`/user/${userId}`);
  }

  return (
    <>
      <div>
        <button onClick={()=>handleClick(id)} className={`${buttonClass}`}>
          {buttonText}
        </button>
      </div>
    </>
  );
}
