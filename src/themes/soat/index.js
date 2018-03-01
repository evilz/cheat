import screen from './screen';
import print from './print';
import bgImg from "./back.svg" 

import * as raleway from "./font/Raleway/raleway.css"

const styles = (colors, fonts) => ({
  screen: screen(colors, fonts),
  print: print()
});

export default styles;

export const backgroundImage = bgImg;
