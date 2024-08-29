// src/components/HomePage.jsx
import { Card } from '@material-tailwind/react';
import React from 'react';

export default function ContactPage() {
  return (
    <Card className='mt-20 bg-opacity-70 max-w-content p-5 flex flex-col gap-10'>
      <h1 className="font-bold text-3xl">Contact</h1>
      <div>
        <a href="https://discord.gg/UM6rDcv7" className="inline-block mt-4 bg-blue-600 text-white max-w-content no-underline rounded text-xl hover:bg-blue-700 px-2 py-1">Join Us On Discord</a>
      </div>
      <div>
        <h2>You cam contact our leader <b>༈Harrisa Habibi༈</b> in state <b>#1285</b> in-game</h2>
      </div>
      <div>
        <h2>You can contact the maintainers of this website by writing to <a className='font-bold' href="mailto:the.spice.cinna@gmail.com">the.spice.cinna@gmail.com</a></h2>
      </div>
      </Card>
  );
};