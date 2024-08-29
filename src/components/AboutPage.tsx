import React from 'react';
import { Card } from '@material-tailwind/react';

export default function AboutPage() {
  return (
      <Card className='mt-20 bg-opacity-70 max-w-content p-5 flex flex-col gap-10'>
        <h1 className='text-3xl font-bold mb-6 bg-opacity-100'>About Us</h1>
        <div className="flex flex-row flex-wrap content-start justify-center items-center gap-10">
          <div className="mx-w-full w-80 text-justify">
              Our alliance is dedicate to create a strong and inclusive community where every member can feel at home.
              We are from all over the World: respecting and promoting diversity is one of our main strengths.
              A lot of our members happened to meet for playing but ended up forming strong bonds in real life.
          </div>
          <div>
            <img src="src/assets/hive.jpg" alt="Group" className="group-image" />
          </div>
        </div>
          
        <div className="flex flex-col flex-wrap content-start justify-center items-center gap-10 m-auto mb-5">
          <h2 className='text-justify'>Group Roles</h2>
          <div className="feature">
            <h3 className='text-center'>The Leader</h3>
            <img src="src/assets/tanjiro.jpg" alt="Leader" className="m-auto" />
            <p className='text-center'>The Leader, The Boss, The Heart of the Alliance</p>
          </div>
          <div className="feature">
            <h3>The Diplomatic</h3>
            <img src="src/assets/ginger.jpg" alt="Diplomacy" className="m-auto" />
            <p>Maneuvering behind the scenes and entertaining good relationships with others</p>
          </div>
          <div className="feature head-office">
          <h3>The Head Office</h3>
            <div className="flex flex-wrap gap-5">
              <img src="src/assets/paprika.png" alt="Head Office" className="m-auto" />
              <img src="src/assets/red.png" alt="Head Office" className="m-auto" />
            </div>
            <p>Recruiting new people and taking care of public relationships</p>
          </div>
          <div className="feature warlords">
          <h3>The Warlords</h3>
            <div className="flex flex-wrap gap-5">
              <img src="src/assets/zoro.jpg" alt="Warlords" className="m-auto" />
              <img src="src/assets/cinnamon.png" alt="Warlords" className="m-auto" />
            </div>
            <p>Leading the alliance's legions on the Battlefield</p>
          </div>
          {/* Add more icons and descriptions if needed */}
        </div>
      </Card>
  );
};