import Head from 'next/head'
import { useValue } from './../fetchData/index';
import { useUser } from './../context/userContext';
import Button from "./../components/Mui/CustomButtons/Button";
import Router from 'next/router';
import React from 'react';


export default function Home() {

  const go = () => Router.push("/twee");



  return (
    <div className="container">
      <Head>
        <title>Titel</title>
      </Head>
      <Button onClick={go}>Test</Button>

      <style jsx global>
        {`
        body, html {
          background: #555;
          font-family: sans-serif;
          color: white;

        }
        .push {
          height: 60px;
        }
        *:focus {
            outline: none;
        }

        `}
        </style>

    </div>
  )
}
