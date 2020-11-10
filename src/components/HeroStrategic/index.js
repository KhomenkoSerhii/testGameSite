import React from 'react';
import './index.scss';
import archer from '../../assets/about/card-unit-ernack-archer.png';
import raken from '../../assets/about/raken-archer.png';
import swordsman from '../../assets/about/swordsman.png';

const classes = [
  {
    img: archer,
    title: 'swordsman',
    text: `The Ernacks are incredibly adaptable so when the threat of the Crystal Scourge came to light,
      they were quickly able to train themselves in the arts of swordplay. The Swordsman is the backbone of the Ernack armies and makes use of Slash damage.`
  },
  {
    img: raken,
    title: 'raken archer',
    text: `The close bond that the Ernacks have with the Raken has allowed them to train together and form a mounted force. Like the standard foot
      Archers trained in the barracks, the Raken Archers make use of piercing damage. `
  },
  {
    img: swordsman,
    title: 'trogg',
    text: `Troggs are Ernacks that were trapped in collapsed mines and muted by the dark powers of the crystals. However, they remain friendly to the
      Ernacks, and thanks to their powerful bodies are living siege weapons, making use of Blunt damage.`
  }
];
const HeroStrategic = () => {

  return (
    <div className="strategic">
      <h1 className="heading strategic__heading">Strategic Combat System</h1>
      <p className="galaxy__text">
        Every unit  comes with a specific type of damage, along with a set of resistances towards the damage types.
      </p>
      <p className="galaxy__text">
        Players will need to pay attention to the type of enemy monster that they engage in combat as every unit its own resistances.
        For example, the powerful Ursara has a lot of muscles and fur that protects them from Blunt damage (high resistance)
        and Slashing damage (medium resistance), but are more vulnerable to Piercing damage.
      </p>

      <div className="strategic__classes">
        {classes.map(({ img, title, text }) => (
          <div className="strategic__class">
            <img className="strategic__img" src={img} alt={title} />
            <span className="strategic__name">{title}</span>
            <p className="strategic__text">{text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HeroStrategic;