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
    "220", "190", "45", "10", "0",
    "220", "190", "50", "20",
    "56%", "63.5%", "12%", "2.5%", "s",
    "220", "115", "27", "80",
    "230", "130", "230", "130", "230", "130",
);

export const coordinatesB = new Coordinates(
    "340", "140", "85", "13", "0",
    "340",  "140", "90",  "23.5",
    "33%", "47%", "23%", "2.5%", "0s",
    "135", "65", "45", "150",
    "182", "77", "150", "89", "175", "99",
);

export const coordinatesC = new Coordinates(
    "240", "250", "150", "20", "0",
    "240",  "250", "170",  "23.5",
    "52%", "85%", "40%", "2.5%", "0s",
    "135", "65", "45", "150",
    "182", "77", "150", "89", "175", "99",
);

export const coordinatesD = new Coordinates(
    "450", "190", "50", "7", "0",
    "450",  "190", "55",  "10",
    "10%", "63%", "10%", "2.5%", "0s",
    "220", "50", "40", "190",
    "230", "70", "250", "80", "230", "70",
);

export const coordinatesE = new Coordinates(
    "330", "235", "30", "5", "0",
    "330", "235", "35", "10",
    "34.2%", "78%", "7%", "2.5%", "0s",
    "250", "80", "25", "130",
    "260", "95", "260", "95", "260", "95",
);

export const coordinatesF = new Coordinates(
    "221", "230", "21", "10", "0",
    "221", "230", "31", "15",
    "55%", "76%", "5.5%", "2.5%", "0s",
    "155", "150", "30", "130",
    "172", "163", "162", "173", "172", "163",
);

export const coordinatesG = new Coordinates(
    "272", "212", "20", "10", "0",
    "272", "212", "30", "15",
    "46%", "70.5%", "5%", "2.5%", "0s",
    "190", "120", "35", "90",
    "205", "135", "202", "145", "202", "155",
);

export const coordinatesH = new Coordinates(
    "272", "212", "70", "10", "0",
    "272", "212", "80", "15",
    "46%", "70.5%", "21%", "2.5%", "0s",
    "190", "120", "40", "90",
    "207", "135", "202", "145", "205", "155",
);