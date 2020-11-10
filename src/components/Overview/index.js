import React from 'react';
import './index.scss';
import Button from '../Button';

const Overview = () => {
  return (
    <div className="overview">
      <div className="overview__content">
        <h1 className="heading overview__heading">about</h1>
        <p className="overview__text">
          The Crystal Storm has wreaked havoc upon the many races of the Hermeian Galaxy and it is down to
          the player to guide the races in their efforts to rebuild and survive.
        </p>

        <p className="overview__text overview__text--light">
          Fight and defend against Crystal Scourge as it works to corrupt every planet and living being that it encounters,
          explore your planet to secure valuable resources, and build thriving settlements as you work to cleanse your planet
          and defeat the Crystal Scourge.
        </p>

        <Button
          text="gameplay video"
          layout={
            <div className="play-round">
              <div className="play-triangle"></div>
            </div>
          }
        />
      </div>
    </div>
  );
};

export default Overview;