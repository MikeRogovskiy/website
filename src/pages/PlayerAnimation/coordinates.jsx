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

export const coordinatesA = new Coordinates(
    "44%", "63%", "10%", "3%", "0",
    "44%", "63%", "13%", "8%",
    "56%", "63.5%", "12%", "2.5%", "s",
    "45%", "34%", "11%", "17%",
    "47%", "40.5%", "47%", "37%", "47%", "43%",
);

export const coordinatesB = new Coordinates(
    "67%", "47%", "21%", "3%", "0",
    "67%", "47%", "24%",  "8%",
    "33%", "47%", "23%", "2.5%", "0s",
    "25%", "22%", "16%", "32%",
    "33%", "27%", "27%", "31%", "32%", "35%",
);

export const coordinatesC = new Coordinates(
    "47%", "85%", "35%", "5%", "0",
    "47%", "85%", "37%",  "9%",
    "52%", "85%", "40%", "2.5%", "0s",
    "27%", "19%", "16%", "32%",
    "35%", "24%", "29%", "28%", "34%", "32%",
);

export const coordinatesD = new Coordinates(
    "90%", "64%", "12%", "2%", "0",
    "90%", "64%", "15%", "5%",
    "10%", "63%", "10%", "2.5%", "0s",
    "43%", "20%", "13%", "39%",
    "44%", "25.5%", "49%", "30.5%", "44%", "35%",
);

export const coordinatesE = new Coordinates(
    "65.8%", "78%", "8%", "2.5%", "0",
    "65.8%", "78%", "9.5%", "5%",
    "34.2%", "78%", "7%", "2.5%", "0s",
    "52%", "22%", "10%", "27%",
    "53.5%", "28%", "53.5%", "30%", "53.5%", "29.5%",
);

export const coordinatesF = new Coordinates(
    "44%", "77%", "5.5%", "2.5%", "0",
    "44%", "77%", "7%", "5%",
    "56%", "76%", "5.5%", "2.5%", "0s",
    "30%", "50%", "12%", "29%",
    "33%", "54.5%", "31%", "58.5%", "31%", "60%",
);

export const coordinatesG = new Coordinates(
    "54.3%", "70.5%", "4%", "2.5%", "0",
    "54.3%", "70.5%", "6%", "5%",
    "46%", "71%", "4%", "2.5%", "0s",
    "37%", "42%", "12%", "17.5%",
    "39%", "47%", "38.5%", "51%", "39%", "55%",
);

export const coordinatesH = new Coordinates(
    "54%", "70%", "17.5%", "2.5%", "0",
    "54%", "70%", "19.5%", "5%",
    "46%", "70.5%", "21%", "2.5%", "0s",
    "45%", "20%", "16%", "18%",
    "48%", "25%", "46%", "29%", "48%", "33%",
);