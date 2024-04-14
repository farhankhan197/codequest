"use client"
import React from 'react';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Link from 'next/link';
const page: React.FC = () => {
  return (<>
    <Navbar/>
    
    <section className="text-gray-600 body-font -mt-12">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
          <Image className="object-cover object-center rounded" height={500} width={500} alt="codequest banner..." src= {"/codequest.jpg"} />
        </div>
        <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-300">Push Your Solutions
            <br className="hidden lg:inline-block text-blue-500" /> Directly to Github
          </h1>
          <div className="flex justify-center mt-10 mb-10">
            <Link className="inline-flex text-white bg-indigo-800 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg" href={"/login"}>Login</Link>
            <Link className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg" href={"/signup"}>Sign Up</Link>
          </div>
          <p className="mb-8 leading-relaxed text-gray-300">

Welcome to the Spark Club's Daily Coding Challenge, where every day brings a new opportunity to level up your programming skills! One Programming or Tech question will be provided in the Spark Club Group chat daily</p>
        </div>
      </div>
    </section>
    </>
  );
};

export default page;
