// Import React
import React from "react";
import * as atomOneDark from "./themes/soat/atom-one-dark.css";

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
  Fit,
  Image
  //Markdown
} from "spectacle";

import CodeBox from "./CodeBox";
import Highlight from "react-highlight.js";
//import Highlight from "react-highlight"
import docker from "./assets/docker-white.svg";

// Import theme
import createTheme, { backgroundImage } from "./themes/soat";

// Require CSS
require("normalize.css");

const theme = createTheme();

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck
        transition={["zoom", "slide"]}
        transitionDuration={500}
        theme={theme}
        contentWidth={1800}
        contentHeight={900}
      >
        <Slide
          align="center flex-start"
          transition={["zoom"]}
          bgColor="bg"
          bgImage={backgroundImage}
        >
        <Layout>
            <Fill> <Text padding="15px 15px 15px 15px" caps textAlign="left" >Build</Text></Fill>
            <Fill> <Text padding="15px 15px 15px 15px" caps textAlign="left" >Build</Text></Fill>
           
          </Layout>
          <Layout>
            <CodeBox description="Create an image from a Dockerfile." language="shell" code='docker build [options] . -t "app/container_name"    # name' />
            <CodeBox />
            <CodeBox />
            <CodeBox />
          </Layout>

          <Layout>
            <CodeBox />
            <CodeBox />
            <CodeBox />
            <CodeBox />
          </Layout>

          <Layout>
            <CodeBox />
            <CodeBox />
            <CodeBox />
            <CodeBox />
          </Layout>

          <Layout>
            <Fill>
              <CodeBox />
            </Fill>
            <Fill>
              <CodeBox />
            </Fill>
          </Layout>
          <Layout>

            <Fill><Image src={docker} /></Fill>
            <Fill></Fill>
            <Fill></Fill>
            <Fill></Fill>
            <Fill></Fill>
        
          </Layout>
        </Slide>
      
      </Deck>
    );
  }
}
