import * as React from 'react';
import { useState } from 'react';
import {useEffect} from 'react';
import './style.css';

export default function App() {
  const [show, hide] = useState(false);
  //function to write modals 
  function Mycmp(){
    useEffect(() => {
      document.body.style.overflowY = "hidden";
      return () => {
        document.body.style.overflowY = "scroll";
      };
    }, []);
     return (
      <>
        <div
        //this div for to show blur or black part of the page:-
          className=" fixed left-0 right-0 top-0 bottom-0 bg-[rgba(189,189,189,0.9)] blur-[40px] brightness-50"
          onClick={()=>{hide(false)}}
        ></div>
        <div className="bg-gray-100  font-sans  max-h-[300px] max-w-[300px] p-4 rounded fixed left-96 right-96 drop-shadow-lg ">
          <h1 className="font-3xl font-bold pb-2 ml-[20px]">STAY TUREND</h1>
          <p className="mx-[20px] mt-[5px] ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
            assumenda distinctio ducimus fuga doloribus nihil et veniam deleniti
            dolorum perferendis?
          </p>
          <button
              onClick={()=>{hide(false)}}
            className="bg-gray-300 py-2 px-3 rounded mt-3 ml-[20px]"
          >
            I Accept
          </button>
        </div>
      </>
    )
  }
  
  return (
    <>
      <div className=" max-w-[1240px] bg-gray-800 rounded-b p-3">
        <button
          onClick={()=>{hide(true)}}
          className="bg-green-700 mt-20 ml-[70px] font-medium rounded py-2 px-3 text-xl hover:bg-green-900 duration-500"
        >
          open Modal
        </button>
        {show ? <Mycmp/> : null}
        <p className="mx-[70px] font-xl font-sans mt-5">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis nihil
          culpa impedit soluta nemo excepturi dolorum iusto voluptate et,
          molestias, cum cupiditate doloremque aliquam quibusdam modi libero quia
          ad harum numquam non, dolore doloribus sint tempora? Nihil officia.
        </p>
        <p className="mx-[70px] font-xl font-sans mt-20">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis nihil
          culpa impedit soluta nemo excepturi dolorum iusto voluptate et,
          molestias, cum cupiditate doloremque aliquam quibusdam modi libero quia
          ad harum numquam non, dolore doloribus sint tempora? Nihil officia.
        </p>
        <p className="mx-[70px] font-xl font-sans mt-20">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis nihil
          culpa impedit soluta nemo excepturi dolorum iusto voluptate et,
          molestias, cum cupiditate doloremque aliquam quibusdam modi libero quia
          ad harum numquam non, dolore doloribus sint tempora? Nihil officia.
        </p>
        <p className="mx-[70px] font-xl font-sans mt-20">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis nihil
          culpa impedit soluta nemo excepturi dolorum iusto voluptate et,
          molestias, cum cupiditate doloremque aliquam quibusdam modi libero quia
          ad harum numquam non, dolore doloribus sint tempora? Nihil officia.
        </p>
        <p className="mx-[70px] font-xl font-sans mt-20">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis nihil
          culpa impedit soluta nemo excepturi dolorum iusto voluptate et,
          molestias, cum cupiditate doloremque aliquam quibusdam modi libero quia
          ad harum numquam non, dolore doloribus sint tempora? Nihil officia.
        </p>
        <p className="mx-[70px] font-xl font-sans mt-20">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis nihil
          culpa impedit soluta nemo excepturi dolorum iusto voluptate et,
          molestias, cum cupiditate doloremque aliquam quibusdam modi libero quia
          ad harum numquam non, dolore doloribus sint tempora? Nihil officia.
        </p>
        <p className="mx-[70px] font-xl font-sans mt-20">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis nihil
          culpa impedit soluta nemo excepturi dolorum iusto voluptate et,
          molestias, cum cupiditate doloremque aliquam quibusdam modi libero quia
          ad harum numquam non, dolore doloribus sint tempora? Nihil officia.
        </p>
        <p className="mx-[70px] font-xl font-sans mt-20">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis nihil
          culpa impedit soluta nemo excepturi dolorum iusto voluptate et,
          molestias, cum cupiditate doloremque aliquam quibusdam modi libero quia
          ad harum numquam non, dolore doloribus sint tempora? Nihil officia.
        </p>
        <p className="mx-[70px] font-xl font-sans mt-20">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis nihil
          culpa impedit soluta nemo excepturi dolorum iusto voluptate et,
          molestias, cum cupiditate doloremque aliquam quibusdam modi libero quia
          ad harum numquam non, dolore doloribus sint tempora? Nihil officia.
        </p>
        <p className="mx-[70px] font-xl font-sans mt-20">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis nihil
          culpa impedit soluta nemo excepturi dolorum iusto voluptate et,
          molestias, cum cupiditate doloremque aliquam quibusdam modi libero quia
          ad harum numquam non, dolore doloribus sint tempora? Nihil officia.
        </p>
      </div>
    </>
  
  );
}
