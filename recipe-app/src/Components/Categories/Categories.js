import React from 'react';
import './Categories.css';
import { Link} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse,faCookie,faWhiskeyGlass,faPlateWheat,} from '@fortawesome/free-solid-svg-icons';


export default function Categories() {
  return (
    <div className='Categories'>
        <ul>
          <li>
            <Link className='Category' to="/">
              <FontAwesomeIcon className='Icon' icon={faHouse} />
              <p>Home</p>
            </Link>
          </li>
          <li>
            <Link className='Category' to="/dessert">
              <FontAwesomeIcon className='Icon' icon={faCookie} />
              <p>Dessert</p>
            </Link>
          </li>
          <li>
            <Link className='Category' to="/beverage">
              <FontAwesomeIcon className='Icon' icon={faWhiskeyGlass} />
              <p>Beverage</p>
            </Link>
          </li>
          <li>
            <Link className='Category' to="/soup">
            <FontAwesomeIcon className='Icon' icon={faPlateWheat} />
            <p>Soup</p>
            </Link>
          </li>
        </ul>
    </div>
  )
}
