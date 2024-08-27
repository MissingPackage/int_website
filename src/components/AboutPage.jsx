import React from 'react';

const AboutPage = ({ onNavigate }) => {
  return (
      <>
        <h1 className='pt-20 text-3xl'>About Us</h1>
        <div className="about-section">
          <div className="about-left">
            <p>
              Our alliance is dedicate to create a strong and inclusive community where every member can feel at home.
              We are from all over the World: respecting and promoting diversity is one of our main strengths.
              A lot of our members happened to meet for playing but ended up forming strong bonds in real life.
            </p>
          </div>
          <div className="about-right">
            <img src="src/assets/hive.jpg" alt="Group" className="group-image" />
          </div>
        </div>
        <div className="features-section">
          <h2>Group Roles</h2>
          <div className="features">
            <div className="feature">
              <h3>The Leader</h3>
              <img src="src/assets/tanjiro.jpg" alt="Leader" className="feature-icon" />
              <p>The Leader, The Boss, The Heart of the Alliance</p>
            </div>
            <div className="feature">
              <h3>The Diplomatic</h3>
              <img src="src/assets/ginger.jpg" alt="Diplomacy" className="feature-icon" />
              <p>Maneuvering behind the scenes and entertaining good relationships with others</p>
            </div>
            <div className="feature head-office">
            <h3>The Head Office</h3>
              <div className="head-office-images">
                <img src="src/assets/paprika.png" alt="Head Office" className="feature-icon" />
                <img src="src/assets/red.png" alt="Head Office" className="feature-icon" />
              </div>
              <p>Recruiting new people and taking care of public relationships</p>
            </div>
            <div className="feature warlords">
            <h3>The Warlords</h3>
              <div className="warlords-images">
                <img src="src/assets/zoro.jpg" alt="Warlords" className="feature-icon" />
                <img src="src/assets/cinnamon.png" alt="Warlords" className="feature-icon" />
              </div>
              <p>Leading the alliance's legions on the Battlefield</p>
            </div>
            {/* Add more icons and descriptions if needed */}
          </div>
        </div>
      </>
  );
};

export default AboutPage;