import React from 'react';
import './index.scss';
import Button from './Button';
import Hero from './Hero';

const ChooseRace = () => {
  const name = 'ernack warrior';
  const description = 'Short description of recruits';

  return (
    <div className="chooserace">
      <h2 className="chooserace__subtitle">three unique races</h2>
      <h1 className="chooserace__heading heading">which side will you choose?</h1>
      <p className="chooserace__text">
        Each of / Rush three races has its own fascinating personality and playstyle,
        with a varied and distinct suite of specialized units and buildings. Choose one to master, or play all three!
      </p>

      <div className="chooserace__content">
        <div className="chooserace__buttons">
          <Button active={true} text="ernacks" number="1" />
          <Button text="marauders" number="2" />
          <Button text="highborne" number="3" />
        </div>

        <h2 className="chooserace__title">Resourceful ernacks with varied technology and plenty of attitude.</h2>
        <p className="chooserace__text">
          Relative newcomers to the Koprulu sector, the terrans are the descendants of a disastrous colonization expedition
          launched from Earth centuries ago. With neither the advanced technology of the protoss nor the natural prowess of the zerg,
          terran military forces rely on a varied mix of resilient, versatile units to outwit their foes.
        </p>

        <div className="chooserace__heroes">
          <Hero />
        </div>
      </div>
    </div>
  );
};

export default ChooseRace;