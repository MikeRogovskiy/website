function Coordinates(
    cxInner, cyInner, rInner, strokeWidthInner, delay,
    cxOuter, cyOuter, rOuter, strokeWidthOuter,
    blackRight, blackTop,
    blackSize, blackSize2, blackDelay,
    rectX, rectY, rectH, rectW,
    textRectXA, textRectYA, textRectXB, textRectYB, textRectXC, textRectYC,

    ){
    /* Blue circles parameters */
    this.cxInner = cxInner;
    this.cyInner = cyInner;
    this.rInner = rInner;
    this.strokeWidthInner = strokeWidthInner;
    this.delay = delay;
    this.cxOuter = cxOuter;
    this.cyOuter = cyOuter;
    this.rOuter = rOuter;
    this.strokeWidthOuter = strokeWidthOuter;
    /* */

    /* Black inside circle parameters */
    this.blackRight = blackRight;
    this.blackTop = blackTop;
    this.blackSize = blackSize;
    this.blackSize2 = blackSize2;
    this.blackDelay = blackDelay;
    /* */

    /* White rectangle parameters */
    this.rectX = rectX;
    this.rectY = rectY;
    this.rectH = rectH;
    this.rectW = rectW;
    /* */

    /* Text for white rectangle paramenters*/
    this.textRectXA = textRectXA;
    this.textRectYA = textRectYA;
    this.textRectXB = textRectXB;
    this.textRectYB = textRectYB;
    this.textRectXC = textRectXC;
    this.textRectYC = textRectYC;
    /* */

};

export const coordinatesInitial = new Coordinates(
    "17.5%", "84%", "5.5%", "4%", "0",
    "17.5%", "84%", "10%", "10%",
    "82.5%", "84%", "3%", "2.5%", "0s",
    "30%", "50%", "13%", "18%",
    "39%", "55%", "39%", "60%", "0%", "0%",
);

export const coordinatesA = new Coordinates(
    "44%", "63%", "10%", "3%", "0",
    "44%", "63%", "13%", "8%",
    "56%", "63.5%", "12%", "2.5%", "0s",
    "45%", "34%", "11%", "17%",
    "53.5%", "40.5%", "53.5%", "37%", "53.5%", "43%",
);

export const coordinatesB = new Coordinates(
    "67%", "47%", "21%", "3%", "0",
    "67%", "47%", "24%",  "8%",
    "33%", "47%", "23%", "2.5%", "0s",
    "25%", "22%", "16%", "32%",
    "40%", "27%", "40.5%", "31%", "40%", "35%",
);

export const coordinatesC = new Coordinates(
    "47%", "85%", "35%", "5%", "0",
    "47%", "85%", "37%",  "9%",
    "52%", "85%", "40%", "2.5%", "0s",
    "27%", "19%", "16%", "32%",
    "42%", "24%", "42.5%", "28%", "42%", "32%",
);

export const coordinatesD = new Coordinates(
    "90%", "64%", "12%", "2%", "0",
    "90%", "64%", "15%", "5%",
    "10%", "63%", "10%", "2.5%", "0s",
    "43%", "20%", "13%", "39%",
    "62%", "25.5%", "62%", "30.5%", "62%", "35%",
);

export const coordinatesE = new Coordinates(
    "65.8%", "78%", "8%", "2.5%", "0",
    "65.8%", "78%", "9.5%", "5%",
    "34.2%", "78%", "7%", "2.5%", "0s",
    "52%", "22%", "10%", "27%",
    "65.3%", "28%", "65.3%", "30%", "65.3%", "29.5%",
);

export const coordinatesF = new Coordinates(
    "44%", "77%", "5.5%", "2.5%", "0",
    "44%", "77%", "7%", "5%",
    "56%", "76%", "5.5%", "2.5%", "0s",
    "30%", "50%", "12%", "29%",
    "44.3%", "54.5%", "44.3%", "58.5%", "44.3%", "60%",
);

export const coordinatesG = new Coordinates(
    "54.3%", "70.5%", "4%", "2.5%", "0",
    "54.3%", "70.5%", "6%", "5%",
    "46%", "71%", "4%", "2.5%", "0s",
    "37%", "42%", "12%", "17.5%",
    "46%", "47%", "46%", "51%", "39%", "55%",
);

export const coordinatesH = new Coordinates(
    "54%", "70%", "17.5%", "2.5%", "0",
    "54%", "70%", "19.5%", "5%",
    "46%", "70.5%", "21%", "2.5%", "0s",
    "45%", "20%", "16%", "18%",
    "53.5%", "25%", "53.7%", "29%", "53.5%", "33%",
);

export const coordinatesFinal = new Coordinates(
    "54%", "70%", "0%", "2.5%", "0",
    "54%", "70%", "0%", "5%",
    "46%", "70.5%", "0%", "0%", "0s",
    "45%", "20%", "0%", "0%",
    "50%", "35%", "50%", "40%", "50%", "57%",
);