import projectOne from '@/assets/projects/dice-challenge-project.png';
import projectTwo from '@/assets/projects/drum-kit-project.png';
import projectThree from '@/assets/projects/crypto-price-alert-project.png';
import projectFour from '@/assets/projects/dota-hero-finder-app-project.png';
import projectFive from '@/assets/projects/geo-memory-map.png';

const cards = [
  {
    id: 1,
    imgURL: projectOne,
    name: 'Dice Challenge',
    description: 'A simple javascript dice challenge project where the dice will roll a random number and who has the biggest dice number wins.',
  },
  {
    id: 2,
    imgURL: projectTwo,
    name: 'Drum Kit Play',
    description: 'Drum kit app where the user can press the image or press the assigned letter on image to their keyboard and the drum sound will be played.'
  },
  {
    id: 3,
    imgURL: projectThree,
    name: 'Simple Crypto Price Tracker',
    description: 'A simple Crypto Price Tracker made using Javascript fetching the price from Coingecko API.'    
  },
  {
    id: 4,
    imgURL: projectFour,
    name: 'Dota Hero Finder App',
    description: 'Dota hero finder is an app where you can search for your favorite hero and check their attributes.'
  },
  {
    id: 5,
    imgURL: projectFive,
    name: 'Geo Memory Map - Full Stack',
    description: 'Geo Memory Map is a full stack app where you can pin a location anywhere you are, then upload a photo and put description of the memory you have on that place.'
  },
];

export default cards;
