import "styled-components";

//and extend them!

declare module "style-components" {
  export interface DefaultTheme {
    textColor: string;
    bgColor: string;
    btnColor: string;
  }
}
