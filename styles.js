
import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
*,
*::before,
 *::after {
    box-sizing: border-box;
  }

  :root {   
  /* --radius: 0.5rem;   
  --background:  #B3B49F;
  --background-foreground: #929252ff;
  --background-secondary: #202114;
  --background-tertiary: #626235;
  --card-foreground: #ffffff;
  --input: #000000;
  --card: #202114;
  --bookmark: #343607;
  --primary: #E3E363;
  --secondary:  #625235;
  --terciary: #676c70ff;   
  --primary-foreground:  #c6c667;
  --accent:  #7c6eba;   
  --accent-foreground:  #faf4b0;
  --alert: #9A3305;
  --alert-foreground: #C74004; */

  /* --background:  #EFEAD9;
--background-foreground: #C9C3AA;
--background-secondary: #2A291F;
--background-tertiary: #6D6A54;
--card-foreground: #FFFFFF;
--input: #1A1A14;
--card: #2A291F;
--bookmark: #8A8F3A;
--primary: #E6E28A;
--secondary:  #7A7556;
--terciary: #8A8E7C;
--primary-foreground: #FFF9C7;
--accent:  #B08FD9;
--accent-foreground: #FFF3FF;
--alert: #A8432D;
--alert-foreground: #FFD0C4; */

/* --background:  #E6EBEE;
--background-foreground: #B7C0C7;
--background-secondary: #1B232B;
--background-tertiary: #5E6A73;
--card-foreground: #FFFFFF;
--input: #0F1418;
--card: #1B232B;
--bookmark: #4A6B7A;
--primary: #8FB6C1;
--secondary:  #556E78;
--terciary: #7A8891;
--primary-foreground: #EAF6F8;
--accent:  #7A6ED1;
--accent-foreground: #F3F1FF;
--alert: #9B3A2E;
--alert-foreground: #F3B6AE; */

 --background:  #F5F3FB;
  --background-foreground: #2B2738;
  --background-secondary: #EAE6F7;
  --background-tertiary: #D8D2F0;

  --card: #FFFFFF;
  --card-foreground: #26233A;

  --input: #FFFFFF;

  --bookmark: #6FA8DC; /* soft blue pop */

  --primary: #7C6EE6;  /* saturated lavender */
  --primary-foreground: #F2F0FF;

  --secondary: #9AD1C5; /* minty contrast */
  --terciary: #7F7A9A;

  --accent: #F4A7C1;   /* pink pop */
  --accent-foreground: #3A1624;

  --alert: #E35D6A;
  --alert-foreground: #FFE3E6;

/* 
--background:  #1C1B16;
--background-foreground: #3A392F;
--background-secondary: #0F100C;
--background-tertiary: #4C4A3F;
--card-foreground: #F5F3E7;
--input: #000000;
--card: #0F100C;
--bookmark: #7A7F2E;
--primary: #D4C86A;
--secondary:  #5E5A3D;
--terciary: #6E7263;
--primary-foreground: #F2EFC8;
--accent:  #9A8FE0;
--accent-foreground: #F7F5FF;
--alert: #9F2F1B;
--alert-foreground: #F5B2A8; */

  --background:  #D6D9C6;
--background-foreground: #AEB39A;
--background-secondary: #1E2118;
--background-tertiary: #5F6652;
--card-foreground: #F6F7F2;
--card-foreground-correct: #f6faedff;
--input: #12130E;
--card: #1E2118;
--bookmark: #6F7A3B;
--primary: #C8D26A;
--secondary:  #6B7052;
--terciary: #7C8270;
--primary-foreground: #E8EDB5;
--accent:  #8A7FBF;
--accent-foreground: #F4F1FF;
--alert: #8E3A18;
--alert-foreground: #F2B8A1;
}
 svg {
    width: 32px;
    height: 32px;
    overflow: visible;
    display: block;
  }

 
    
 /* .dark {
--radius: 0.5rem;   
   --background:           #181910;  
    --background-foreground: #E5E5D5;   
    --background-secondary: #202114;  
    --background-tertiary:  #3b3d22;

    --card:                 #262716;
    --card-foreground:      #F7F7EA;

    --input:                #ffffff;

    --bookmark:             #C5C76A;  

    --primary:              #E3E363;  
    --primary-foreground:   #202114;   

    --secondary:            #A89F7A;
    --terciary:             #9AA0A4;

    --accent:               #A694FF;   
    --accent-foreground:    #202114;

    --alert:                #FF8A4A;
    --alert-foreground:     #3E1200;
} */

body {
  margin: 0;
  margin-bottom: 7rem;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  font-family: system-ui;
  background: var(--background);

}
`;
