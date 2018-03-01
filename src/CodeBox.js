// Import React
import React from "react";
import Highlight from "react-highlight.js";


// Import Spectacle Core tags
import {
    BlockQuote,
    Cite,
    Deck,
    Heading,
    ListItem,
    List,
    Quote,
    Slide,
    Text,
    Layout,
    Fill,
    //Markdown
    
  } from "spectacle";

export default ({description, code, language}) => (
  <div style={{margin:"1em"}}>

    <Text padding="15px 15px 15px 15px" margin="0 0 0 0" bgColor="lightGray" textSize="1rem">
      {description}
    </Text>
    <Text margin="0 0 0 0" textAlign="left" bgColor="darker" textSize="1rem">
      <Highlight style={{ margin: 0 }} language={language}>
       {code}
      </Highlight>
    </Text>
  </div>
);
