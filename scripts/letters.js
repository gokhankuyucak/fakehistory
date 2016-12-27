var letterA = new Array(5);
for (var i = 0; i < 5; i++) {
    letterA[i] = new Array(7);
}

function initLetterA() {
    letterA[2][1] = 1; //  #
    letterA[1][2] = 1; // # #
    letterA[3][2] = 1; //#   #
    letterA[0][3] = 1; //#####
    letterA[4][3] = 1; //#   #
    letterA[0][4] = 1;
    letterA[1][4] = 1;
    letterA[2][4] = 1;
    letterA[3][4] = 1;
    letterA[4][4] = 1;
    letterA[0][5] = 1;
    letterA[4][5] = 1;
    return letterA;
}

var letterB = new Array(4);
for (var i = 0; i < 4; i++) {
    letterB[i] = new Array(7);
}

function initLetterB() {
    letterB[0][1] = 1; //####
    letterB[0][2] = 1; //#   #
    letterB[0][3] = 1; //####
    letterB[0][4] = 1; //#   #
    letterB[0][5] = 1; //####
    letterB[1][1] = 1;
    letterB[2][1] = 1;
    letterB[3][2] = 1;
    letterB[1][3] = 1;
    letterB[2][3] = 1;
    letterB[3][4] = 1;
    letterB[1][5] = 1;
    letterB[2][5] = 1;
    return letterB;
}

var letterC = new Array(4);
for (var i = 0; i < 4; i++) {
    letterC[i] = new Array(7);
}

function initLetterC() {
    letterC[1][1] = 1; // ####
    letterC[2][1] = 1; //#
    letterC[3][1] = 1; //#
    letterC[0][2] = 1; //#
    letterC[0][3] = 1; // ####
    letterC[0][4] = 1;
    letterC[1][5] = 1;
    letterC[2][5] = 1;
    letterC[3][5] = 1;

    return letterC;
}

var letterD = new Array(4);
for (var i = 0; i < 4; i++) {
    letterD[i] = new Array(7);
}

function initLetterD() {
    letterD[0][1] = 1;
    letterD[0][2] = 1;
    letterD[0][3] = 1;
    letterD[0][4] = 1;
    letterD[0][5] = 1;
    letterD[1][1] = 1;
    letterD[1][5] = 1;
    letterD[2][1] = 1;
    letterD[2][5] = 1;
    letterD[3][2] = 1;
    letterD[3][3] = 1;
    letterD[3][4] = 1;

    return letterD;
}

var letterE = new Array(4);
for (var i = 0; i < 4; i++) {
    letterE[i] = new Array(7);
}

function initLetterE() {
    letterE[0][1] = 1;
    letterE[0][2] = 1;
    letterE[0][3] = 1;
    letterE[0][4] = 1;
    letterE[0][5] = 1;
    letterE[1][1] = 1;
    letterE[1][3] = 1;
    letterE[1][5] = 1;
    letterE[2][1] = 1;
    letterE[2][3] = 1;
    letterE[2][5] = 1;
    letterE[3][1] = 1;
    letterE[3][3] = 1;
    letterE[3][5] = 1;
    return letterE;
}

var letterF = new Array(4);
for (var i = 0; i < 4; i++) {
    letterF[i] = new Array(7);
}

function initLetterF() {
    letterF[0][1] = 1;
    letterF[0][2] = 1;
    letterF[0][3] = 1;
    letterF[0][4] = 1;
    letterF[0][5] = 1;
    letterF[1][1] = 1;
    letterF[1][3] = 1;
    letterF[2][1] = 1;
    letterF[2][3] = 1;
    letterF[3][1] = 1;

    return letterF;
}

var letterG = new Array(4);
for (var i = 0; i < 4; i++) {
    letterG[i] = new Array(7);
}

function initLetterG() {
    letterG[0][2] = 1;
    letterG[0][3] = 1;
    letterG[0][4] = 1;
    letterG[1][1] = 1;
    letterG[1][5] = 1;
    letterG[2][1] = 1;
    letterG[2][3] = 1;
    letterG[2][5] = 1;
    letterG[3][1] = 1;
    letterG[3][3] = 1;
    letterG[3][4] = 1;
    letterG[3][5] = 1;

    return letterG;
}
var letterH = new Array(4);
for (var i = 0; i < 4; i++) {
    letterH[i] = new Array(7);
}

function initLetterH() {
    letterH[0][1] = 1;
    letterH[0][2] = 1;
    letterH[0][3] = 1;
    letterH[0][4] = 1;
    letterH[0][5] = 1;
    letterH[1][3] = 1;
    letterH[2][3] = 1;
    letterH[3][1] = 1;
    letterH[3][2] = 1;
    letterH[3][3] = 1;
    letterH[3][4] = 1;
    letterH[3][5] = 1;

    return letterH;
}

var letterI = new Array(3);
for (var i = 0; i < 3; i++) {
    letterI[i] = new Array(7);
}

function initLetterI() {
    letterI[0][1] = 1;
    letterI[0][5] = 1;
    letterI[1][1] = 1;
    letterI[1][2] = 1;
    letterI[1][3] = 1;
    letterI[1][4] = 1;
    letterI[1][5] = 1;
    letterI[2][1] = 1;
    letterI[2][5] = 1;

    return letterI;
}
var letterJ = new Array(4);
for (var i = 0; i < 4; i++) {
    letterJ[i] = new Array(7);
}

function initLetterJ() {
    letterJ[0][4] = 1;
    letterJ[1][5] = 1;
    letterJ[2][5] = 1;
    letterJ[3][1] = 1;
    letterJ[3][2] = 1;
    letterJ[3][3] = 1;
    letterJ[3][4] = 1;

    return letterJ;
}
var letterK = new Array(4);
for (var i = 0; i < 4; i++) {
    letterK[i] = new Array(7);
}

function initLetterK() {
    letterK[0][1] = 1;
    letterK[0][2] = 1;
    letterK[0][3] = 1;
    letterK[0][4] = 1;
    letterK[0][5] = 1;
    letterK[1][3] = 1;
    letterK[2][2] = 1;
    letterK[2][4] = 1;
    letterK[3][1] = 1;
    letterK[3][5] = 1;

    return letterK;
}
var letterL = new Array(4);
for (var i = 0; i < 4; i++) {
    letterL[i] = new Array(7);
}

function initLetterL() {
    letterL[0][1] = 1;
    letterL[0][2] = 1;
    letterL[0][3] = 1;
    letterL[0][4] = 1;
    letterL[0][5] = 1;
    letterL[1][5] = 1;
    letterL[2][5] = 1;
    letterL[3][5] = 1;

    return letterL;
}
var letterM = new Array(5);
for (var i = 0; i < 5; i++) {
    letterM[i] = new Array(7);
}

function initLetterM() {
    letterM[0][1] = 1;
    letterM[0][2] = 1;
    letterM[0][3] = 1;
    letterM[0][4] = 1;
    letterM[0][5] = 1;
    letterM[1][2] = 1;
    letterM[2][3] = 1;
    letterM[3][2] = 1;
    letterM[4][1] = 1;
    letterM[4][2] = 1;
    letterM[4][3] = 1;
    letterM[4][4] = 1;
    letterM[4][5] = 1;

    return letterM;
}
var letterN = new Array(5);
for (var i = 0; i < 5; i++) {
    letterN[i] = new Array(7);
}

function initLetterN() {
    letterN[0][1] = 1;
    letterN[0][2] = 1;
    letterN[0][3] = 1;
    letterN[0][4] = 1;
    letterN[0][5] = 1;
    letterN[1][2] = 1;
    letterN[2][3] = 1;
    letterN[3][4] = 1;
    letterN[4][1] = 1;
    letterN[4][2] = 1;
    letterN[4][3] = 1;
    letterN[4][4] = 1;
    letterN[4][5] = 1;

    return letterN;
}
var letterO = new Array(4);
for (var i = 0; i < 4; i++) {
    letterO[i] = new Array(7);
}

function initLetterO() {
    letterO[0][2] = 1;
    letterO[0][3] = 1;
    letterO[0][4] = 1;
    letterO[1][1] = 1;
    letterO[1][5] = 1;
    letterO[2][1] = 1;
    letterO[2][5] = 1;
    letterO[3][2] = 1;
    letterO[3][3] = 1;
    letterO[3][4] = 1;

    return letterO;
}
var letterP = new Array(4);
for (var i = 0; i < 4; i++) {
    letterP[i] = new Array(7);
}

function initLetterP() {
    letterP[0][1] = 1;
    letterP[0][2] = 1;
    letterP[0][3] = 1;
    letterP[0][4] = 1;
    letterP[0][5] = 1;
    letterP[1][1] = 1;
    letterP[1][3] = 1;
    letterP[2][1] = 1;
    letterP[2][3] = 1;
    letterP[3][2] = 1;

    return letterP;
}
var letterR = new Array(4);
for (var i = 0; i < 4; i++) {
    letterR[i] = new Array(7);
}

function initLetterR() {
    letterR[0][1] = 1;
    letterR[0][2] = 1;
    letterR[0][3] = 1;
    letterR[0][4] = 1;
    letterR[0][5] = 1;
    letterR[1][1] = 1;
    letterR[1][3] = 1;
    letterR[2][1] = 1;
    letterR[2][3] = 1;
    letterR[3][2] = 1;
    letterR[3][4] = 1;
    letterR[3][5] = 1;

    return letterR;
}
var letterS = new Array(4);
for (var i = 0; i < 4; i++) {
    letterS[i] = new Array(7);
}

function initLetterS() {
    letterS[0][1] = 1;
    letterS[0][2] = 1;
    letterS[0][3] = 1;
    letterS[0][5] = 1;
    letterS[1][1] = 1;
    letterS[1][3] = 1;
    letterS[1][5] = 1;
    letterS[2][1] = 1;
    letterS[2][3] = 1;
    letterS[2][5] = 1;
    letterS[3][1] = 1;
    letterS[3][3] = 1;
    letterS[3][4] = 1;
    letterS[3][5] = 1;

    return letterS;
}
var letterT = new Array(5);
for (var i = 0; i < 5; i++) {
    letterT[i] = new Array(7);
}

function initLetterT() {
    letterT[0][1] = 1;
    letterT[1][1] = 1;
    letterT[2][1] = 1;
    letterT[2][2] = 1;
    letterT[2][3] = 1;
    letterT[2][4] = 1;
    letterT[2][5] = 1;
    letterT[3][1] = 1;
    letterT[4][1] = 1;

    return letterT;
}
var letterU = new Array(5);
for (var i = 0; i < 5; i++) {
    letterU[i] = new Array(7);
}

function initLetterU() {
    letterU[0][1] = 1;
    letterU[0][2] = 1;
    letterU[0][3] = 1;
    letterU[0][4] = 1;
    letterU[1][5] = 1;
    letterU[2][5] = 1;
    letterU[3][5] = 1;
    letterU[4][1] = 1;
    letterU[4][2] = 1;
    letterU[4][3] = 1;
    letterU[4][4] = 1;

    return letterU;
}
var letterV = new Array(5);
for (var i = 0; i < 5; i++) {
    letterV[i] = new Array(7);
}

function initLetterV() {
    letterV[0][1] = 1;
    letterV[0][2] = 1;
    letterV[0][3] = 1;
    letterV[1][4] = 1;
    letterV[2][5] = 1;
    letterV[3][4] = 1;
    letterV[4][1] = 1;
    letterV[4][2] = 1;
    letterV[4][3] = 1;

    return letterV;
}
var letterY = new Array(5);
for (var i = 0; i < 5; i++) {
    letterY[i] = new Array(7);
}

function initLetterY() {
    letterY[0][1] = 1;
    letterY[1][2] = 1;
    letterY[2][3] = 1;
    letterY[2][4] = 1;
    letterY[2][5] = 1;
    letterY[3][2] = 1;
    letterY[4][1] = 1;

    return letterY;
}
var letterZ = new Array(4);
for (var i = 0; i < 4; i++) {
    letterZ[i] = new Array(7);
}

function initLetterZ() {
    letterZ[0][1] = 1;
    letterZ[0][5] = 1;
    letterZ[1][1] = 1;
    letterZ[1][4] = 1;
    letterZ[1][5] = 1;
    letterZ[2][1] = 1;
    letterZ[2][3] = 1;
    letterZ[2][5] = 1;
    letterZ[3][1] = 1;
    letterZ[3][2] = 1;
    letterZ[3][5] = 1;

    return letterZ;
}
var letter = new Array(1);
for (var i = 0; i < 1; i++) {
    letter[i] = new Array(7);
}

function initLetter() {
    return letter;
}
var letter1 = new Array(3);
for (var i = 0; i < 3; i++) {
    letter1[i] = new Array(7);
}

function initLetter1() {
    letter1[0][2] = 1;
    letter1[0][5] = 1;
    letter1[1][1] = 1;
    letter1[1][2] = 1;
    letter1[1][3] = 1;
    letter1[1][4] = 1;
    letter1[1][5] = 1;
    letter1[2][5] = 1;

    return letter1;
}
var letter2 = new Array(4);
for (var i = 0; i < 4; i++) {
    letter2[i] = new Array(7);
}

function initLetter2() {
    letter2[0][2] = 1;
    letter2[0][5] = 1;
    letter2[1][1] = 1;
    letter2[1][4] = 1;
    letter2[1][5] = 1;
    letter2[2][1] = 1;
    letter2[2][3] = 1;
    letter2[2][5] = 1;
    letter2[3][2] = 1;
    letter2[3][5] = 1;

    return letter2;
}
var letter3 = new Array(4);
for (var i = 0; i < 4; i++) {
    letter3[i] = new Array(7);
}

function initLetter3() {
    letter3[0][2] = 1;
    letter3[0][4] = 1;
    letter3[1][1] = 1;
    letter3[1][5] = 1;
    letter3[2][1] = 1;
    letter3[2][3] = 1;
    letter3[2][5] = 1;
    letter3[3][2] = 1;
    letter3[3][4] = 1;

    return letter3;
}
var letter4 = new Array(4);
for (var i = 0; i < 4; i++) {
    letter4[i] = new Array(7);
}

function initLetter4() {
    letter4[0][4] = 1;
    letter4[1][3] = 1;
    letter4[1][4] = 1;
    letter4[2][2] = 1;
    letter4[2][4] = 1;
    letter4[3][1] = 1;
    letter4[3][2] = 1;
    letter4[3][3] = 1;
    letter4[3][4] = 1;
    letter4[3][5] = 1;

    return letter4;
}
var letter5 = new Array(4);
for (var i = 0; i < 4; i++) {
    letter5[i] = new Array(7);
}

function initLetter5() {
    letter5[0][1] = 1;
    letter5[0][2] = 1;
    letter5[0][3] = 1;
    letter5[0][5] = 1;
    letter5[1][1] = 1;
    letter5[1][3] = 1;
    letter5[1][5] = 1;
    letter5[2][1] = 1;
    letter5[2][3] = 1;
    letter5[2][5] = 1;
    letter5[3][1] = 1;
    letter5[3][3] = 1;
    letter5[3][4] = 1;
    letter5[3][5] = 1;

    return letter5;
}
var letter6 = new Array(4);
for (var i = 0; i < 4; i++) {
    letter6[i] = new Array(7);
}

function initLetter6() {
    letter6[0][1] = 1;
    letter6[0][2] = 1;
    letter6[0][3] = 1;
    letter6[0][4] = 1;
    letter6[0][5] = 1;
    letter6[1][1] = 1;
    letter6[1][3] = 1;
    letter6[1][5] = 1;
    letter6[2][1] = 1;
    letter6[2][3] = 1;
    letter6[2][5] = 1;
    letter6[3][1] = 1;
    letter6[3][3] = 1;
    letter6[3][4] = 1;
    letter6[3][5] = 1;

    return letter6;
}
var letter7 = new Array(4);
for (var i = 0; i < 4; i++) {
    letter7[i] = new Array(7);
}

function initLetter7() {
    letter7[0][1] = 1;
    letter7[1][1] = 1;
    letter7[2][1] = 1;
    letter7[3][1] = 1;
    letter7[3][2] = 1;
    letter7[3][3] = 1;
    letter7[3][4] = 1;
    letter7[3][5] = 1;

    return letter7;
}
var letter8 = new Array(4);
for (var i = 0; i < 4; i++) {
    letter8[i] = new Array(7);
}

function initLetter8() {
    letter8[0][1] = 1;
    letter8[0][2] = 1;
    letter8[0][3] = 1;
    letter8[0][4] = 1;
    letter8[0][5] = 1;
    letter8[1][1] = 1;
    letter8[1][3] = 1;
    letter8[1][5] = 1;
    letter8[2][1] = 1;
    letter8[2][3] = 1;
    letter8[2][5] = 1;
    letter8[3][1] = 1;
    letter8[3][2] = 1;
    letter8[3][3] = 1;
    letter8[3][4] = 1;
    letter8[3][5] = 1;

    return letter8;
}
var letter9 = new Array(4);
for (var i = 0; i < 4; i++) {
    letter9[i] = new Array(7);
}

function initLetter9() {
    letter9[0][1] = 1;
    letter9[0][2] = 1;
    letter9[0][3] = 1;
    letter9[0][5] = 1;
    letter9[1][1] = 1;
    letter9[1][3] = 1;
    letter9[1][5] = 1;
    letter9[2][1] = 1;
    letter9[2][3] = 1;
    letter9[2][5] = 1;
    letter9[3][1] = 1;
    letter9[3][2] = 1;
    letter9[3][3] = 1;
    letter9[3][4] = 1;
    letter9[3][5] = 1;

    return letter9;
}