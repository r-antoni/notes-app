"use client"
import { UserButton, useClerk, useUser } from "@clerk/nextjs"
import Link from "next/link"

const Navbar = () => {
  const {isSignedIn, user} = useUser()

  return (
    <nav className="flex items-center border-b h-16 px-20">
       <div className="container flex justify-between items-center ">
            <Link href="/">
                <h1 className="font-bold text-3xl">Logo</h1>
            </Link>
       </div>
       <div className="flex items-center gap-x-5">
        {isSignedIn ? (
            <div className="flex items-center gap-x-3">
                <UserButton />
                {user.firstName}
            </div>
            ) : (
            <div className="flex items-center gap-x-5">
                <Link href="/sign-in">
                    <button className="w-[100px] items-center p-2 rounded-md bg-gray-200">
                        Sign In
                    </button>
                </Link>
                <Link href="/sign-up">
                    <button className="w-[100px] items-center p-2 rounded-md bg-gray-200">
                        Sign Up
                    </button>
                </Link>
            </div>
            )}      
       </div>
    </nav>
  )
}

export default Navbar