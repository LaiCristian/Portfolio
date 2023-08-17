const claps = document.querySelectorAll('.clap');
const blackclaps = document.querySelectorAll('.black_clap');

const instrbtn = document.querySelector('.instruct');
const instrbtnTxt = document.querySelector('.inst_txt');
const notes = document.querySelectorAll('.notes');

const controlsbtn = document.querySelector('.controls');
const controlsbtnTxt = document.querySelector('.controls_txt');
const contr = document.querySelectorAll('.contr');

const songbtn = document.querySelector('.song');
const songbtnTxt = document.querySelector('.song_txt');1

const sustainbtn = document.querySelector('.sustain');
const sustainbtnTxt = document.querySelector('.sustain_txt');

const pianoBoard = document.querySelector('.piano_board');
const title = document.querySelector('.name');
const pianoClaps = document.querySelector('.piano_claps');
const instructBar = document.querySelector('.instruct_bar');

const playground = document.querySelector('.playground');
const counterStyle = document.querySelector('.counterStyle');

const songcontr = document.querySelectorAll('[id=songcontr]');

const alertare = document.querySelector('.alert');

let c2 = document.getElementById('c2');
let d2 = document.getElementById('d2');
let e2 = document.getElementById('e2');
let f2 = document.getElementById('f2');
let g2 = document.getElementById('g2');
let a2 = document.getElementById('a2');
let b2 = document.getElementById('b2');

let c3 = document.getElementById('c3');
let d3 = document.getElementById('d3');
let e3 = document.getElementById('e3');
let f3 = document.getElementById('f3');
let g3 = document.getElementById('g3');
let a3 = document.getElementById('a3');
let b3 = document.getElementById('b3');

let c4 = document.getElementById('c4');
let d4 = document.getElementById('d4');
let e4 = document.getElementById('e4');
let f4 = document.getElementById('f4');
let g4 = document.getElementById('g4');
let a4 = document.getElementById('a4');
let b4 = document.getElementById('b4');

let c5 = document.getElementById('c5');
let d5 = document.getElementById('d5');
let e5 = document.getElementById('e5');
let f5 = document.getElementById('f5');
let g5 = document.getElementById('g5');
let a5 = document.getElementById('a5');
let b5 = document.getElementById('b5');

let c6 = document.getElementById('c6');

let c2b = document.getElementById('c2#');
let d2b = document.getElementById('d2#');
let f2b = document.getElementById('f2#');
let g2b = document.getElementById('g2#');
let a2b = document.getElementById('a2#');

let c3b = document.getElementById('c3#');
let d3b = document.getElementById('d3#');
let f3b = document.getElementById('f3#');
let g3b = document.getElementById('g3#');
let a3b = document.getElementById('a3#');

let c4b = document.getElementById('c4#');
let d4b = document.getElementById('d4#');
let f4b = document.getElementById('f4#');
let g4b = document.getElementById('g4#');
let a4b = document.getElementById('a4#');

let c5b = document.getElementById('c5#');
let d5b = document.getElementById('d5#');
let f5b = document.getElementById('f5#');
let g5b = document.getElementById('g5#');
let a5b = document.getElementById('a5#');

for( let i = 0; i<29; i++){
    claps[i].addEventListener('click', function () {
        claps[i].classList.add('active');
        setTimeout(function () {
            claps[i].classList.remove('active');
        }, 150);
    })
}

for( let i = 0; i<20; i++){
    blackclaps[i].addEventListener('click', function () {
        blackclaps[i].classList.add('active');
        setTimeout(function () {
            blackclaps[i].classList.remove('active');
        }, 150);
    })
}

const whiteKey = ['`','2','4','5','7','9','-','=','q','e','r','y','i','p','[','\\','s','d','g','j','l',';','Enter','x','c','b','m','.','/'];
const blackKey = ['1','3','6','8','0','Backspace','w','t','u','o',']','a','f','h','k','\'','z','v','n',','];
/*
document.addEventListener('keydown', (event) => {
    let name = event.key;
    if(event.repeat) return
        for(let i = 0; i<49; i++){
            if (name === whiteKey[i]){
                const newAudio = clapsS[i].cloneNode()
                newAudio.play()
                claps[i].classList.add('active');
                setTimeout(function () {
                    claps[i].classList.remove('active');
                }, 150);
            }
            if (name === blackKey[i]){
                const newAudio = blackclapsS[i].cloneNode()
                newAudio.play()
                blackclaps[i].classList.add('active');
                setTimeout(function () {
                    blackclaps[i].classList.remove('active');
                }, 150);
            }
        }
    }, false);
*/
let instructBtnCounter = 0;
instrbtn.addEventListener('click', function () {
    if(instructBtnCounter==0){
        instrbtn.classList.add('active');
        instrbtnTxt.classList.add('active');
        for( let i = 0; i<29; i++){
            notes[i].classList.remove('active');
        }
        instructBtnCounter = 1;

        controlsbtn.classList.remove('active');
        controlsbtnTxt.classList.remove('active');
        for( let i = 0; i<49; i++){
            contr[i].classList.add('active');
        }
        controlsBtnCounter = 0;

    }else if(instructBtnCounter==1){
        instrbtn.classList.remove('active');
        instrbtnTxt.classList.remove('active');
        for( let i = 0; i<29; i++){
            notes[i].classList.add('active');
        }
        instructBtnCounter = 0;
    }
});

let controlsBtnCounter = 0;
let songBtnCounter = 0;
songbtn.addEventListener('click', function () {
    if (document.URL.includes("index.html")){
                   
    }else{
        if(songBtnCounter==0 && controlsBtnCounter==1){
            songbtn.classList.add('active');
            songbtnTxt.classList.add('active');
            songBtnCounter = 1;

            pianoBoard.classList.add('active');
            title.classList.add('active');
            pianoClaps.classList.add('active');
            instructBar.classList.add('active');

            if(key == 0){
            for( let i = 0; i<49; i++){
                songcontr[i].textContent="";
            } 
            songcontr[2].textContent="Q";   //D2
            songcontr[4].textContent="W";   //E2
            songcontr[9].textContent="R";   //A2
            songcontr[14].textContent="T";  //D3
            songcontr[16].textContent="Y";  //E3
            songcontr[21].textContent="I";  //A3
            songcontr[26].textContent="P";  //D4
            songcontr[28].textContent="[";  //E4
            songcontr[33].textContent="C";  //A4
            songcontr[35].textContent="V";  //B4
            songcontr[38].textContent="N";  //D5
            songcontr[40].textContent="M";  //E5
            songcontr[45].textContent=".";  //A5

            songcontr[6].textContent="E";   //F2b
            songcontr[18].textContent="U";   //F3b
            songcontr[25].textContent="O";   //C4b
            songcontr[30].textContent="Z";   //F4b
            songcontr[32].textContent="X";   //G4b
            songcontr[37].textContent="B";   //C5b
            songcontr[42].textContent=",";   //F5b
            }else if(key==2){
            for( let i = 0; i<49; i++){
               songcontr[i].textContent="";
            }
            songcontr[2].textContent="Q";   //D2
            songcontr[4].textContent="W";   //E2
            songcontr[9].textContent="R";   //A2
            songcontr[14].textContent="T";  //D3
            songcontr[16].textContent="Y";  //E3
            songcontr[21].textContent="I";  //A3
            songcontr[26].textContent="P";  //D4
            }

        }else if(songBtnCounter==0 && controlsBtnCounter==0){
            songbtn.classList.add('active');
            songbtnTxt.classList.add('active');
            songBtnCounter = 1;

            pianoBoard.classList.add('active');
            title.classList.add('active');
            pianoClaps.classList.add('active');
            instructBar.classList.add('active');

        }else if(songBtnCounter==1){
            songbtn.classList.remove('active');
            songbtnTxt.classList.remove('active');

            pianoBoard.classList.remove('active');
            title.classList.remove('active');
            pianoClaps.classList.remove('active');
            instructBar.classList.remove('active');
            songBtnCounter = 0;
        }
    }
});


controlsbtn.addEventListener('click', function () {
    if(controlsBtnCounter==0){
        controlsbtn.classList.add('active');
        controlsbtnTxt.classList.add('active');
        for( let i = 0; i<49; i++){
            contr[i].classList.remove('active');
        }
        controlsBtnCounter = 1;

        if(songBtnCounter == 1 && key==0){
            for( let i = 0; i<49; i++){
                songcontr[i].textContent="";
            } 

            songcontr[2].textContent="Q";   //D2
            songcontr[4].textContent="W";   //E2
            songcontr[9].textContent="R";   //A2
            songcontr[14].textContent="T";  //D3
            songcontr[16].textContent="Y";  //E3
            songcontr[21].textContent="I";  //A3
            songcontr[26].textContent="P";  //D4
            songcontr[28].textContent="[";  //E4
            songcontr[33].textContent="C";  //A4
            songcontr[35].textContent="V";  //B4
            songcontr[38].textContent="N";  //D5
            songcontr[40].textContent="M";  //E5
            songcontr[45].textContent=".";  //A5

            songcontr[6].textContent="E";   //F2b
            songcontr[18].textContent="U";   //F3b
            songcontr[25].textContent="O";   //C4b
            songcontr[30].textContent="Z";   //F4b
            songcontr[32].textContent="X";   //G4b
            songcontr[37].textContent="B";   //C5b
            songcontr[42].textContent=",";   //F5b

        } else if(songBtnCounter == 1 && key==2){
            for( let i = 0; i<49; i++){
                songcontr[i].textContent="";
            } 

            songcontr[2].textContent="Q";   //D2
            songcontr[4].textContent="W";   //E2
            songcontr[9].textContent="R";   //A2
            songcontr[14].textContent="T";  //D3
            songcontr[16].textContent="Y";  //E3
            songcontr[21].textContent="I";  //A3
            songcontr[26].textContent="P";  //D4
        }

        instrbtn.classList.remove('active');
        instrbtnTxt.classList.remove('active');
        for( let i = 0; i<29; i++){
            notes[i].classList.add('active');
        }
        instructBtnCounter = 0;

    }else if(controlsBtnCounter==1){
        controlsbtn.classList.remove('active');
        controlsbtnTxt.classList.remove('active');
        for( let i = 0; i<49; i++){
            contr[i].classList.add('active');
        }
        controlsBtnCounter = 0;
    }
});

const clapsS = [c2, d2, e2, f2, g2, a2, b2, c3, d3, e3, f3, g3, a3, b3, c4, d4, e4, f4, g4, a4, b4, c5, d5, e5, f5, g5, a5, b5, c6];
const blackclapsS = [c2b, d2b, f2b, g2b, a2b, c3b, d3b, f3b, g3b, a3b, c4b, d4b, f4b, g4b, a4b, c5b, d5b, f5b, g5b, a5b,];

for(let i=0; i<29; i++){
    claps[i].addEventListener('click', function PlayAudio(){
        newAudio = clapsS[i].cloneNode()
        newAudio.play()
    });
}
for(let i=0; i<20; i++){
    blackclaps[i].addEventListener('click', function PlayAudio(){
        newAudio = blackclapsS[i].cloneNode()
        newAudio.play()
    });
}


/*----------------------------------------------------------------------------------------------------------------------------------*/

const semnal = document.querySelectorAll('.semnal')

let on = true;

function playNote(index, time){
    setTimeout(function(){
        semnal[index].classList.add('active');
    },time)
    setTimeout(function(){
        dispare(index);   
    }, time+3100);
}

function playNoteAIW(index, index2, time, index3){
    setTimeout(function(){
        newAudio = songWhiteClaps[index].cloneNode()
        newAudio.play()
        claps[index2].classList.add('active');
    setTimeout(function () {
        claps[index2].classList.remove('active');
    }, 150);
    },time+2700);
    setTimeout(function(){
        semnal[index3].classList.add('active');
        semnal[index3].classList.add('auto');
    },time)
    setTimeout(function(){
        dispare(index3);   
    }, time+3100);
}

function playNoteAIB(index, index2, time, index3){
    setTimeout(function(){
        newAudio = songBlackClaps[index].cloneNode()
        newAudio.play()
        blackclaps[index2].classList.add('active');
        setTimeout(function () {
            blackclaps[index2].classList.remove('active');
        }, 150);
    },time+2700);
    setTimeout(function(){
        semnal[index3].classList.add('active');
        semnal[index3].classList.add('auto');
    },time)
    setTimeout(function(){
        dispare(index3);   
    }, time+3100);
}

function dispare(indexx){
    semnal[indexx].classList.add('reset');
}

function resetSong(){
    for(let i=0; i<36; i++){
        semnal[i].classList.remove('active');
        semnal[i].classList.remove('reset');
    }
}

var difficulty = 0;
function getDifficulty(){
    difficulty = document.getElementById("difficulty").value; 
    console.log(difficulty);
}

var songChoice = 0;

function getSong(){
        songChoice = document.getElementById("song_choice").value;
        if (songChoice==1 && (document.URL.includes("index.html") || document.URL.includes("interstellar.html"))){
            window.location.assign("thenight.html");
            key = 1;
        }else if(songChoice==2 && (document.URL.includes("index.html") || document.URL.includes("thenight.html"))){
            window.location.assign("interstellar.html");
            key = 2;
        }
}

function mySong(){
    setTimeout(function () {
    counterStyle.classList.add('active');
    //D2
    playNote(0,24894);
    playNote(1,39370);
    playNote(2,53854);
    playNote(3,61129);
    playNote(4,68350);
    playNote(5,75577);
    playNote(6,82793);
    playNote(7,97350);
    playNote(8,98350);
    playNote(9,99350);
    playNote(10,100350);
    playNote(11,111800);
    playNote(12,112800);
    playNote(13,113800);
    playNote(14,114800);
    playNote(15,119010);
    playNote(16,120010);
    playNote(17,121010);
    playNote(18,122010);
    playNote(19,126290);
    playNote(20,127290);
    playNote(21,128290);
    playNote(22,129290);
    playNote(23,133500);
    playNote(24,134500);
    playNote(25,135500);
    playNote(26,136500);
    playNote(27,140770);
    playNote(28,141770);
    playNote(29,142820);
    playNote(30,143167);
    playNote(31,143500);
    playNote(32,143850);
    playNote(33,144212);
    playNote(34,144550);
    playNote(35,184210);  

    //E2
    playNote(36,16603);
    playNote(37,31097);
    playNote(38,45588);
    playNote(39,103509);
    playNote(40,175235);
    playNote(41,182485);

    //F2b
    playNote(42,14567);
    playNote(43,21772);
    playNote(44,29019);
    playNote(45,36261);
    playNote(46,43505);
    playNote(47,50745);
    playNote(48,57990);
    playNote(49,65198);
    playNote(50,72480);
    playNote(51,79695);
    playNote(52,94215);
    playNote(53,95233);
    playNote(54,101419);
    playNote(55,102482);
    playNote(56,108665);
    playNote(57,109728);
    playNote(58,115909);
    playNote(59,116934);
    playNote(60,123156);
    playNote(61,124218);
    playNote(62,130400);
    playNote(63,131450);
    playNote(64,137638);
    playNote(65,138638);
    playNote(66,173838);
    playNote(67,175574);
    playNote(68,181101);
    playNote(69,182824);

    //A2
    playNote(70,17641);
    playNote(71,23861);
    playNote(72,32114);
    playNote(73,38348);
    playNote(74,46627);
    playNote(75,60042);
    playNote(76,67281);
    playNote(77,74527);
    playNote(78,81777);
    playNote(79,90045);
    playNote(80,91070);
    playNote(81,92090);
    playNote(82,93120);
    playNote(83,96261);
    playNote(84,104556);
    playNote(85,105586);
    playNote(86,106606);
    playNote(87,107626);
    playNote(88,110745);
    playNote(89,110745);
    playNote(90,117992);
    playNote(91,125234);
    playNote(92,132480);
    playNote(93,139722);
    playNote(94,147997);
    playNote(95,175917);
    playNote(96,183160);

    //D3
    playNote(97,10394);
    playNote(98,155236);
    playNote(99,169698);
    playNote(100,176960);
   
    //E3
    playNote(101,2129);
    playNote(102,89062);
    playNote(103,146965);
    playNote(104,161455);
    
    //F3b
    playNote(105,1);
    playNote(106,7288);
    playNote(107,86968);
    playNote(108,144885);
    playNote(109,152095);
    playNote(110,159375);
    playNote(111,166615);

    //A3
    playNote(112,3182);
    playNote(113,9354);
    playNote(114,154175);
    playNote(115,162455);
    playNote(116,168695);

    //C4b
    playNote(117,3148);
    playNote(118,7288);
    playNote(119,17637);
    playNote(120,21777);
    playNote(121,174195);
    playNote(122,175581);
    playNote(123,176285);


    //D4
    playNote(124,186624);
    playNote(125,187979);

    //E4
    playNote(126,9340);
    playNote(127,23858);
    playNote(128,174530);
    playNote(129,175220);
    playNote(130,176612);
    playNote(131,186956);
    playNote(132,187623);

    //F4b
    playNote(133,10401);
    playNote(134,24858);
    playNote(135,39343);
    playNote(136,53819);
    playNote(137,97320);
    playNote(138,111773);
    playNote(139,155243);
    playNote(140,169690);
    playNote(141,176956);
    playNote(142,187284);

    //G4b
    playNote(143,2124);
    playNote(144,16578);

    //A4
    playNote(145,1);
    playNote(146,14565);
    playNote(147,29354);
    playNote(148,29740);
    playNote(149,30100);
    playNote(150,30770);
    playNote(151,31761);
    playNote(152,36628);
    playNote(153,36968);
    playNote(154,37310);
    playNote(155,39000);
    playNote(156,42808);
    playNote(157,43170);
    playNote(158,43535);
    playNote(159,43858);
    playNote(160,44558);
    playNote(161,45253);
    playNote(162,46245);
    playNote(163,50055);
    playNote(164,50388);
    playNote(165,50388);
    playNote(166,50590);
    playNote(167,51770);
    playNote(168,53506);
    playNote(169,57296);
    playNote(170,57646);
    playNote(171,57846);
    playNote(172,59054);
    playNote(173,60737);
    playNote(174,67107);
    playNote(175,67980);
    playNote(176,68680);
    playNote(177,71780);
    playNote(178,72120);
    playNote(179,72332);
    playNote(180,73522);
    playNote(181,75222);
    playNote(182,83122);
    playNote(183,90552);
    playNote(184,93522);
    playNote(185,93842);
    playNote(186,94062);
    playNote(187,95235);
    playNote(188,96965);
    playNote(189,105105);
    playNote(190,107635);
    playNote(191,107973);
    playNote(192,108331);
    playNote(193,108531);
    playNote(194,109721);
    playNote(195,111444);
    playNote(196,115210);
    playNote(197,115556);
    playNote(198,115756);
    playNote(199,116935);
    playNote(200,118645);
    playNote(201,126595);
    playNote(202,129695);
    playNote(203,129695);
    playNote(204,130065);
    playNote(205,130265);
    playNote(206,131455);
    playNote(207,133171);
    playNote(208,141081);
    playNote(209,148322);
    playNote(210,151434);
    playNote(211,151794);
    playNote(212,151994);
    playNote(213,153151);
    playNote(214,154868);
    playNote(215,162998);
    playNote(216,165921);
    playNote(217,166261);
    playNote(218,166461);
    playNote(219,167656);
    playNote(220,169354);
    playNote(221,174881);
    playNote(222,177301);
    playNote(223,179014);
    playNote(224,184214);

    //B4
    playNote(225,31108);
    playNote(226,38341);
    playNote(227,45581);
    playNote(228,48301);
    playNote(229,52798);
    playNote(230,60042);
    playNote(231,61102);
    playNote(232,66592);
    playNote(233,67292);
    playNote(234,68312);
    playNote(235,74526);
    playNote(236,75555);
    playNote(237,81111);
    playNote(238,81806);
    playNote(239,82496);
    playNote(240,82796);
    playNote(241,90376);
    playNote(242,96266);
    playNote(243,104380);
    playNote(244,104890);
    playNote(245,110750);
    playNote(246,117995);
    playNote(247,125245);
    playNote(248,125895);
    playNote(249,126255);
    playNote(250,132475);
    playNote(251,133515);
    playNote(252,139365);
    playNote(253,139725);
    playNote(254,140425);
    playNote(255,140782);
    playNote(256,148175);
    playNote(257,154175);
    playNote(258,162805);
    playNote(259,168695);

    //C5b
    playNote(260,32085);
    playNote(261,32635);
    playNote(262,38015);
    playNote(263,46615);
    playNote(264,47125);
    playNote(265,48485);
    playNote(266,52475);
    playNote(267,61435);
    playNote(268,64535);
    playNote(269,64865);
    playNote(270,65085);
    playNote(271,66255);
    playNote(272,75895);
    playNote(273,79025);
    playNote(274,79355);
    playNote(275,79555);
    playNote(276,80745);
    playNote(277,86275);
    playNote(278,86635);
    playNote(279,89385);
    playNote(280,89585);
    playNote(281,90045);
    playNote(282,95905);
    playNote(283,100725);
    playNote(284,101105);
    playNote(285,103685);
    playNote(286,104015);
    playNote(287,104575);
    playNote(288,110385);
    playNote(289,119015);
    playNote(290,119495);
    playNote(291,122495);
    playNote(292,122825);
    playNote(293,123005);
    playNote(294,124215);
    playNote(295,133845);
    playNote(296,136585);
    playNote(297,136955);
    playNote(298,137275);
    playNote(299,137485);
    playNote(300,138665);
    playNote(301,144195);
    playNote(302,144545);
    playNote(303,147145);
    playNote(304,147495);
    playNote(305,147995);
    playNote(306,153855);
    playNote(307,158675);
    playNote(308,159035);
    playNote(309,161635);
    playNote(310,161955);
    playNote(311,162455);
    playNote(312,168345);
    playNote(313,183145);

    //D5
    playNote(314,177665);
    playNote(315,178695);
    playNote(316,179345);
    playNote(317,180735);

    //E5
    playNote(318,88335);
    playNote(319,88545);
    playNote(320,89055);
    playNote(321,102815);
    playNote(322,103025);
    playNote(323,103515);
    playNote(324,146275);
    playNote(325,146485);
    playNote(326,146985);
    playNote(327,160765);
    playNote(328,160965);
    playNote(329,161485);
    playNote(330,178325);
    playNote(331,179705);
    playNote(332,180005);

    //F5b
    playNote(333,86965);
    playNote(334,87495);
    playNote(335,88015);
    playNote(336,101435);
    playNote(337,101965);
    playNote(338,102475);
    playNote(339,144885);
    playNote(340,145395);
    playNote(341,145925);
    playNote(342,159375);
    playNote(343,159915);
    playNote(344,160415);
    playNote(345,177995);
    playNote(346,180045);

    //A5
    playNote(347,181105);

        if (difficulty == 1){
            //D2
            playNoteAIW(0,1,39370,1);
            playNoteAIW(0,1,53854,2);
            playNoteAIW(0,1,61129,3);
            playNoteAIW(0,1,68350,4);
            playNoteAIW(0,1,75577,5);
            playNoteAIW(0,1,82793,6);
            playNoteAIW(0,1,97350,7);
            playNoteAIW(0,1,98350,8);
            playNoteAIW(0,1,99350,9);
            playNoteAIW(0,1,100350,10);
            playNoteAIW(0,1,111800,11);
            playNoteAIW(0,1,112800,12);
            playNoteAIW(0,1,113800,13);
            playNoteAIW(0,1,114800,14);
            playNoteAIW(0,1,119010,15);
            playNoteAIW(0,1,120010,16);
            playNoteAIW(0,1,121010,17);
            playNoteAIW(0,1,122010,18);
            playNoteAIW(0,1,126290,19);
            playNoteAIW(0,1,127290,20);
            playNoteAIW(0,1,128290,21);
            playNoteAIW(0,1,129290,22);
            playNoteAIW(0,1,133500,23);
            playNoteAIW(0,1,134500,24);
            playNoteAIW(0,1,135500,25);
            playNoteAIW(0,1,136500,26);
            playNoteAIW(0,1,140770,27);
            playNoteAIW(0,1,141770,28);
            playNoteAIW(0,1,142820,29);
            playNoteAIW(0,1,143167,30);
            playNoteAIW(0,1,143500,31);
            playNoteAIW(0,1,143850,32);
            playNoteAIW(0,1,144212,33);
            playNoteAIW(0,1,144550,34);
            playNoteAIW(0,1,184210,35);
        
            //E2
            playNoteAIW(1,2,31097,37);
            playNoteAIW(1,2,45588,38);
            playNoteAIW(1,2,103509,39);
            playNoteAIW(1,2,175235,40);
            playNoteAIW(1,2,182485,41);
        

            //F2b
            playNoteAIB(0,2,29019,44);
            playNoteAIB(0,2,36261,45);
            playNoteAIB(0,2,43505,46);
            playNoteAIB(0,2,50745,47);
            playNoteAIB(0,2,57990,48);
            playNoteAIB(0,2,65198,49);
            playNoteAIB(0,2,72480,50);
            playNoteAIB(0,2,79695,51);
            playNoteAIB(0,2,94215,52);
            playNoteAIB(0,2,95233,53);
            playNoteAIB(0,2,101419,54);
            playNoteAIB(0,2,102482,55);
            playNoteAIB(0,2,108665,56);
            playNoteAIB(0,2,109728,57);
            playNoteAIB(0,2,115909,58);
            playNoteAIB(0,2,116934,59);
            playNoteAIB(0,2,123156,60);
            playNoteAIB(0,2,124218,61);
            playNoteAIB(0,2,130400,62);
            playNoteAIB(0,2,131450,63);
            playNoteAIB(0,2,137638,64);
            playNoteAIB(0,2,138638,65);
            playNoteAIB(0,2,173838,66);
            playNoteAIB(0,2,175574,67);
            playNoteAIB(0,2,181101,68);
            playNoteAIB(0,2,182824,69);
        
            //A2
            playNoteAIW(2,5,32114,72);
            playNoteAIW(2,5,38348,73);
            playNoteAIW(2,5,46627,74);
            playNoteAIW(2,5,60042,75);
            playNoteAIW(2,5,67281,76);
            playNoteAIW(2,5,74527,77);
            playNoteAIW(2,5,81777,78);
            playNoteAIW(2,5,90045,79);
            playNoteAIW(2,5,91070,80);
            playNoteAIW(2,5,92090,81);
            playNoteAIW(2,5,93120,82);
            playNoteAIW(2,5,96261,83);
            playNoteAIW(2,5,104556,84);
            playNoteAIW(2,5,105586,85);
            playNoteAIW(2,5,106606,86);
            playNoteAIW(2,5,107626,87);
            playNoteAIW(2,5,110745,88);
            playNoteAIW(2,5,110745,89);
            playNoteAIW(2,5,117992,90);
            playNoteAIW(2,5,125234,91);
            playNoteAIW(2,5,132480,92);
            playNoteAIW(2,5,139722,93);
            playNoteAIW(2,5,147997,94);
            playNoteAIW(2,5,175917,95);
            playNoteAIW(2,5,183160,96);
        
            //D3
            playNoteAIW(3,8,155236,98);
            playNoteAIW(3,8,169698,99);
            playNoteAIW(3,8,176960,100);
            
            //E3
            playNoteAIW(4,9,89062,102);
            playNoteAIW(4,9,146965,103);
            playNoteAIW(4,9,161455,104);

            //F3b
            
            playNoteAIB(1,7,86968,107);
            playNoteAIB(1,7,144885,108);
            playNoteAIB(1,7,152095,109);
            playNoteAIB(1,7,159375,110);
            playNoteAIB(1,7,166615,111);
            
            //A3
            playNoteAIW(5,12,154175,114);
            playNoteAIW(5,12,162455,115);
            playNoteAIW(5,12,168695,116);

            //C4b
            playNoteAIB(2,10,174195,121);
            playNoteAIB(2,10,175581,122);
            playNoteAIB(2,10,176285,123);

            //D4
            playNoteAIW(6,15,186624,124);
            playNoteAIW(6,15,187979,125);
        
            //D5
            playNoteAIW(10,22,177665,314);
            playNoteAIW(10,22,178695,315);
            playNoteAIW(10,22,179345,316);
            playNoteAIW(10,22,180735,317);

            //E5
            playNoteAIW(11,23,88335,318);
            playNoteAIW(11,23,88545,319);
            playNoteAIW(11,23,89055,320);
            playNoteAIW(11,23,102815,321);
            playNoteAIW(11,23,103025,322);
            playNoteAIW(11,23,103515,323);
            playNoteAIW(11,23,146275,324);
            playNoteAIW(11,23,146485,325);
            playNoteAIW(11,23,146985,326);
            playNoteAIW(11,23,160765,327);
            playNoteAIW(11,23,160965,328);
            playNoteAIW(11,23,161485,329);
            playNoteAIW(11,23,178325,330);
            playNoteAIW(11,23,179705,331);
            playNoteAIW(11,23,180005,332);
        
            //F5b
            playNoteAIB(6,17,86965,333);
            playNoteAIB(6,17,87495,334);
            playNoteAIB(6,17,88015,335);
            playNoteAIB(6,17,101435,336);
            playNoteAIB(6,17,101965,337);
            playNoteAIB(6,17,102475,338);
            playNoteAIB(6,17,144885,339);
            playNoteAIB(6,17,145395,340);
            playNoteAIB(6,17,145925,341);
            playNoteAIB(6,17,159375,342);
            playNoteAIB(6,17,159915,343);
            playNoteAIB(6,17,160415,344);
            playNoteAIB(6,17,177995,345);
            playNoteAIB(6,17,180045,346);
        
            //A5
            playNoteAIW(12,26,181105,347);

        }else if (difficulty == 2){
            //D2
            playNoteAIW(0,1,39370,1);
            playNoteAIW(0,1,53854,2);
            playNoteAIW(0,1,61129,3);
            playNoteAIW(0,1,68350,4);
            playNoteAIW(0,1,75577,5);
            playNoteAIW(0,1,82793,6);
            playNoteAIW(0,1,97350,7);
            playNoteAIW(0,1,98350,8);
            playNoteAIW(0,1,99350,9);
            playNoteAIW(0,1,100350,10);
            playNoteAIW(0,1,111800,11);
            playNoteAIW(0,1,112800,12);
            playNoteAIW(0,1,113800,13);
            playNoteAIW(0,1,114800,14);
            playNoteAIW(0,1,119010,15);
            playNoteAIW(0,1,120010,16);
            playNoteAIW(0,1,121010,17);
            playNoteAIW(0,1,122010,18);
            playNoteAIW(0,1,126290,19);
            playNoteAIW(0,1,127290,20);
            playNoteAIW(0,1,128290,21);
            playNoteAIW(0,1,129290,22);
            playNoteAIW(0,1,133500,23);
            playNoteAIW(0,1,134500,24);
            playNoteAIW(0,1,135500,25);
            playNoteAIW(0,1,136500,26);
            playNoteAIW(0,1,140770,27);
            playNoteAIW(0,1,141770,28);
            playNoteAIW(0,1,142820,29);
            playNoteAIW(0,1,143167,30);
            playNoteAIW(0,1,143500,31);
            playNoteAIW(0,1,143850,32);
            playNoteAIW(0,1,144212,33);
            playNoteAIW(0,1,144550,34);
            playNoteAIW(0,1,184210,35);
        
            //E2
            playNoteAIW(1,2,31097,37);
            playNoteAIW(1,2,45588,38);
            playNoteAIW(1,2,103509,39);
            playNoteAIW(1,2,175235,40);
            playNoteAIW(1,2,182485,41);
        

            //F2b
            playNoteAIB(0,2,29019,44);
            playNoteAIB(0,2,36261,45);
            playNoteAIB(0,2,43505,46);
            playNoteAIB(0,2,50745,47);
            playNoteAIB(0,2,57990,48);
            playNoteAIB(0,2,65198,49);
            playNoteAIB(0,2,72480,50);
            playNoteAIB(0,2,79695,51);
            playNoteAIB(0,2,94215,52);
            playNoteAIB(0,2,95233,53);
            playNoteAIB(0,2,101419,54);
            playNoteAIB(0,2,102482,55);
            playNoteAIB(0,2,108665,56);
            playNoteAIB(0,2,109728,57);
            playNoteAIB(0,2,115909,58);
            playNoteAIB(0,2,116934,59);
            playNoteAIB(0,2,123156,60);
            playNoteAIB(0,2,124218,61);
            playNoteAIB(0,2,130400,62);
            playNoteAIB(0,2,131450,63);
            playNoteAIB(0,2,137638,64);
            playNoteAIB(0,2,138638,65);
            playNoteAIB(0,2,173838,66);
            playNoteAIB(0,2,175574,67);
            playNoteAIB(0,2,181101,68);
            playNoteAIB(0,2,182824,69);
        
            //A2
            playNoteAIW(2,5,32114,72);
            playNoteAIW(2,5,38348,73);
            playNoteAIW(2,5,46627,74);
            playNoteAIW(2,5,60042,75);
            playNoteAIW(2,5,67281,76);
            playNoteAIW(2,5,74527,77);
            playNoteAIW(2,5,81777,78);
            playNoteAIW(2,5,90045,79);
            playNoteAIW(2,5,91070,80);
            playNoteAIW(2,5,92090,81);
            playNoteAIW(2,5,93120,82);
            playNoteAIW(2,5,96261,83);
            playNoteAIW(2,5,104556,84);
            playNoteAIW(2,5,105586,85);
            playNoteAIW(2,5,106606,86);
            playNoteAIW(2,5,107626,87);
            playNoteAIW(2,5,110745,88);
            playNoteAIW(2,5,110745,89);
            playNoteAIW(2,5,117992,90);
            playNoteAIW(2,5,125234,91);
            playNoteAIW(2,5,132480,92);
            playNoteAIW(2,5,139722,93);
            playNoteAIW(2,5,147997,94);
            playNoteAIW(2,5,175917,95);
            playNoteAIW(2,5,183160,96);
        
            //D3
            playNoteAIW(3,8,155236,98);
            playNoteAIW(3,8,169698,99);
            playNoteAIW(3,8,176960,100);
            
            //E3
            playNoteAIW(4,9,89062,102);
            playNoteAIW(4,9,146965,103);
            playNoteAIW(4,9,161455,104);

            //F3b
            
            playNoteAIB(1,7,86968,107);
            playNoteAIB(1,7,144885,108);
            playNoteAIB(1,7,152095,109);
            playNoteAIB(1,7,159375,110);
            playNoteAIB(1,7,166615,111);
            
            //A3
            playNoteAIW(5,12,154175,114);
            playNoteAIW(5,12,162455,115);
            playNoteAIW(5,12,168695,116);

            //F5b
            playNoteAIB(6,17,86965,333);
            playNoteAIB(6,17,87495,334);
            playNoteAIB(6,17,88015,335);
            playNoteAIB(6,17,101435,336);
            playNoteAIB(6,17,101965,337);
            playNoteAIB(6,17,102475,338);
            playNoteAIB(6,17,144885,339);
            playNoteAIB(6,17,145395,340);
            playNoteAIB(6,17,145925,341);
            playNoteAIB(6,17,159375,342);
            playNoteAIB(6,17,159915,343);
            playNoteAIB(6,17,160415,344);
            playNoteAIB(6,17,177995,345);
            playNoteAIB(6,17,180045,346);
        
            //A5
            playNoteAIW(12,26,181105,347);
        }else if (difficulty == 3){
            //D2
            playNoteAIW(0,1,39370,1);
            playNoteAIW(0,1,53854,2);
            playNoteAIW(0,1,61129,3);
            playNoteAIW(0,1,68350,4);
            playNoteAIW(0,1,75577,5);
            playNoteAIW(0,1,82793,6);
            playNoteAIW(0,1,97350,7);
            playNoteAIW(0,1,98350,8);
            playNoteAIW(0,1,99350,9);
            playNoteAIW(0,1,100350,10);
            playNoteAIW(0,1,111800,11);
            playNoteAIW(0,1,112800,12);
            playNoteAIW(0,1,113800,13);
            playNoteAIW(0,1,114800,14);
            playNoteAIW(0,1,119010,15);
            playNoteAIW(0,1,120010,16);
            playNoteAIW(0,1,121010,17);
            playNoteAIW(0,1,122010,18);
            playNoteAIW(0,1,126290,19);
            playNoteAIW(0,1,127290,20);
            playNoteAIW(0,1,128290,21);
            playNoteAIW(0,1,129290,22);
            playNoteAIW(0,1,133500,23);
            playNoteAIW(0,1,134500,24);
            playNoteAIW(0,1,135500,25);
            playNoteAIW(0,1,136500,26);
            playNoteAIW(0,1,140770,27);
            playNoteAIW(0,1,141770,28);
            playNoteAIW(0,1,142820,29);
            playNoteAIW(0,1,143167,30);
            playNoteAIW(0,1,143500,31);
            playNoteAIW(0,1,143850,32);
            playNoteAIW(0,1,144212,33);
            playNoteAIW(0,1,144550,34);
            playNoteAIW(0,1,184210,35);
        
            //E2
            playNoteAIW(1,2,31097,37);
            playNoteAIW(1,2,45588,38);
            playNoteAIW(1,2,103509,39);
            playNoteAIW(1,2,175235,40);
            playNoteAIW(1,2,182485,41);
        

            //F2b
            playNoteAIB(0,2,29019,44);
            playNoteAIB(0,2,36261,45);
            playNoteAIB(0,2,43505,46);
            playNoteAIB(0,2,50745,47);
            playNoteAIB(0,2,57990,48);
            playNoteAIB(0,2,65198,49);
            playNoteAIB(0,2,72480,50);
            playNoteAIB(0,2,79695,51);
            playNoteAIB(0,2,94215,52);
            playNoteAIB(0,2,95233,53);
            playNoteAIB(0,2,101419,54);
            playNoteAIB(0,2,102482,55);
            playNoteAIB(0,2,108665,56);
            playNoteAIB(0,2,109728,57);
            playNoteAIB(0,2,115909,58);
            playNoteAIB(0,2,116934,59);
            playNoteAIB(0,2,123156,60);
            playNoteAIB(0,2,124218,61);
            playNoteAIB(0,2,130400,62);
            playNoteAIB(0,2,131450,63);
            playNoteAIB(0,2,137638,64);
            playNoteAIB(0,2,138638,65);
            playNoteAIB(0,2,173838,66);
            playNoteAIB(0,2,175574,67);
            playNoteAIB(0,2,181101,68);
            playNoteAIB(0,2,182824,69);
        
            //A2
            playNoteAIW(2,5,32114,72);
            playNoteAIW(2,5,38348,73);
            playNoteAIW(2,5,46627,74);
            playNoteAIW(2,5,60042,75);
            playNoteAIW(2,5,67281,76);
            playNoteAIW(2,5,74527,77);
            playNoteAIW(2,5,81777,78);
            playNoteAIW(2,5,90045,79);
            playNoteAIW(2,5,91070,80);
            playNoteAIW(2,5,92090,81);
            playNoteAIW(2,5,93120,82);
            playNoteAIW(2,5,96261,83);
            playNoteAIW(2,5,104556,84);
            playNoteAIW(2,5,105586,85);
            playNoteAIW(2,5,106606,86);
            playNoteAIW(2,5,107626,87);
            playNoteAIW(2,5,110745,88);
            playNoteAIW(2,5,110745,89);
            playNoteAIW(2,5,117992,90);
            playNoteAIW(2,5,125234,91);
            playNoteAIW(2,5,132480,92);
            playNoteAIW(2,5,139722,93);
            playNoteAIW(2,5,147997,94);
            playNoteAIW(2,5,175917,95);
            playNoteAIW(2,5,183160,96);
        
            //D3
            playNoteAIW(3,8,155236,98);
            playNoteAIW(3,8,169698,99);
            playNoteAIW(3,8,176960,100);
            
            //E3
            playNoteAIW(4,9,89062,102);
            playNoteAIW(4,9,146965,103);
            playNoteAIW(4,9,161455,104);

            //F3b
            
            playNoteAIB(1,7,86968,107);
            playNoteAIB(1,7,144885,108);
            playNoteAIB(1,7,152095,109);
            playNoteAIB(1,7,159375,110);
            playNoteAIB(1,7,166615,111);
            
            //A3
            playNoteAIW(5,12,154175,114);
            playNoteAIW(5,12,162455,115);
            playNoteAIW(5,12,168695,116);
        }
    }, 4000);
}
let key = 1;

function startSong(){
    if (document.URL.includes("index.html")){
        alert('Choose a song');           
    }else{
        if(on){
            title.classList.add('dissapear');
            playground.classList.remove('active');
            on = false;
            setTimeout(function () {
                counterStyle.classList.remove('active');
            }, 1000);
            document.getElementById("counter").textContent="3";
            setTimeout(function (){
                newAudio = blackclapsS[17].cloneNode()
                newAudio.play()
            }, 1100)
                
            setTimeout(function () {
                document.getElementById("counter").textContent="2";
                newAudio = blackclapsS[18].cloneNode()
                newAudio.play()
            }, 2000);
            setTimeout(function () {
                document.getElementById("counter").textContent="1";
                newAudio = blackclapsS[19].cloneNode()
                newAudio.play()
            }, 3000);
                if(document.URL.includes("thenight.html")){
                    mySong();
                    key = 0;
                }else if(document.URL.includes("interstellar.html")){
                    interstellar(); 
                    key = 2;  
                }
            
        }else{
            playground.classList.add('active');
            title.classList.remove('dissapear');
            counterStyle.classList.add('active');
            on = true;
            window.location.assign("index.html");
            key = 1;
        }
    }
}

const songWhiteClaps=[d2, e2, a2, d3, e3, a3, d4, e4, a4, b4, d5, e5, a5]; //d2 e2 f2b a2 d3 e3 f3b a3
const songBlackClaps=[f2b, f3b, c4b, f4b, g4b, c5b, f5b]; // f4b g4b a4 b4 c5b d5 e5 f5b a5  

const songWhiteKeys=['q','w','r','t','y','i','p','[','c','v','n','m','.'];
const songBlackKeys=['e','u','o','z','x','b',','];

//==============================================================================================================
function sustainF(){
    sustainValue = document.getElementById("sustain").value;
}
function Released(soun){
    sustainF();
    setTimeout(function(){
        soun.pause();   
    }, sustainValue);
}


function playResolvedSusW(number){
    sustainNotePlay(suneteleWhite[number], number);
}

function playResolvedSusB(number){
    sustainNotePlayBlack(suneteleBlack[number], number);
}


//==============================================================================================================

suneteleWhite = ['Sounds/C2.mp3','Sounds/D2.mp3','Sounds/E2.mp3',
'Sounds/F2.mp3','Sounds/G2.mp3','Sounds/A2.mp3',
'Sounds/B2.mp3','Sounds/C3.mp3','Sounds/D3.mp3','Sounds/E3.mp3',
'Sounds/F3.mp3','Sounds/G3.mp3','Sounds/A3.mp3',
'Sounds/B3.mp3','Sounds/C4.mp3','Sounds/D4.mp3','Sounds/E4.mp3',
'Sounds/F4.mp3','Sounds/G4.mp3','Sounds/A4.mp3',
'Sounds/B4.mp3','Sounds/C5.mp3','Sounds/D5.mp3','Sounds/E5.mp3',
'Sounds/F5.mp3','Sounds/G5.mp3','Sounds/A5.mp3',
'Sounds/B5.mp3','Sounds/C6.mp3'];

suneteleBlack = ['Sounds/C2_Black.mp3','Sounds/D2_Black.mp3','Sounds/F2_Black.mp3','Sounds/G2_Black.mp3',
'Sounds/A2_Black.mp3','Sounds/C3_Black.mp3','Sounds/D3_Black.mp3','Sounds/F3_Black.mp3','Sounds/G3_Black.mp3',
'Sounds/A3_Black.mp3','Sounds/C4_Black.mp3','Sounds/D4_Black.mp3','Sounds/F4_Black.mp3','Sounds/G4_Black.mp3',
'Sounds/A4_Black.mp3','Sounds/C5_Black.mp3','Sounds/D5_Black.mp3','Sounds/F5_Black.mp3','Sounds/G5_Black.mp3',
'Sounds/A5_Black.mp3'];

suneteleSongWhite = ['Sounds/D2.mp3','Sounds/E2.mp3','Sounds/A2.mp3','Sounds/D3.mp3','Sounds/E3.mp3',
'Sounds/A3.mp3','Sounds/D4.mp3','Sounds/E4.mp3','Sounds/A4.mp3','Sounds/B4.mp3','Sounds/D5.mp3','Sounds/E5.mp3',
'Sounds/A5.mp3'];

suneteleSongBlack = ['Sounds/F2_Black.mp3','Sounds/F3_Black.mp3','Sounds/C4_Black.mp3','Sounds/F4_Black.mp3',
'Sounds/G4_Black.mp3','Sounds/C5_Black.mp3','Sounds/F5_Black.mp3'];

var pressedKeys = {};
window.onkeyup = function(e) { pressedKeys[e.keyCode] = false; }
window.onkeydown = function(e) { pressedKeys[e.keyCode] = true; }

function sustainNotePlay(sursa, index){
    claps[index].classList.add('active');
let saw = new Wad({source : sursa,
    env : {
        attack : 0.005, 
        decay : .001, 
        sustain : 1, 
        hold : 100, 
        release : 0.7
    }});
    saw.play();
    document.addEventListener('keyup', (event) => {
        Released(saw);
        claps[index].classList.remove('active');
    })
}

function sustainNotePlayBlack(sursa, index){
    blackclaps[index].classList.add('active');
let saw = new Wad({source : sursa,
    env : {
        attack : 0.005, 
        decay : .001, 
        sustain : 1, 
        hold : 100, 
        release : 0.7
    }});
    saw.play();
    document.addEventListener('keyup', (event) => {
        Released(saw);
        blackclaps[index].classList.remove('active');
    })
}
document.addEventListener('keydown', (event) => {
    if (event.repeat) return
    let name = event.key;
        if(key==0){
            if (name === songWhiteKeys[0]){
                if (!pressedKeys['81']){  
                    sustainNotePlay(suneteleSongWhite[0],1);
                }
            }else if(name === songWhiteKeys[1]){
                if (!pressedKeys['87']){
                    sustainNotePlay(suneteleSongWhite[1],2);
                }
            }else if(name === songWhiteKeys[2]){
                if (!pressedKeys['82']){
                    sustainNotePlay(suneteleSongWhite[2],5);
                }
            }else if(name === songWhiteKeys[3]){
                if (!pressedKeys['84']){
                    sustainNotePlay(suneteleSongWhite[3],8);
                }
            }else if(name === songWhiteKeys[4]){
                if (!pressedKeys['89']){
                    sustainNotePlay(suneteleSongWhite[4],9);
                }
            }else if(name === songWhiteKeys[5]){
                if (!pressedKeys['73']){
                    sustainNotePlay(suneteleSongWhite[5],12);
                }
            }else if(name === songWhiteKeys[6]){
                if (!pressedKeys['80']){
                    sustainNotePlay(suneteleSongWhite[6],15);
                }
            }else if(name === songWhiteKeys[7]){
                if (!pressedKeys['219']){
                    sustainNotePlay(suneteleSongWhite[7],16);
                }
            }else if(name === songWhiteKeys[8]){
                if (!pressedKeys['67']){
                    sustainNotePlay(suneteleSongWhite[8],19);
                }
            }else if(name === songWhiteKeys[9]){
                if (!pressedKeys['86']){
                    sustainNotePlay(suneteleSongWhite[9],20);
                }
            }else if(name === songWhiteKeys[10]){
                if (!pressedKeys['78']){
                    sustainNotePlay(suneteleSongWhite[10],22);
                }
            }else if(name === songWhiteKeys[11]){
                if (!pressedKeys['77']){
                    sustainNotePlay(suneteleSongWhite[11],23);
                }
            }else if(name === songWhiteKeys[12]){
                if (!pressedKeys['190']){
                    sustainNotePlay(suneteleSongWhite[12],26);
                }
            }else if(name === songBlackKeys[0]){
                if (!pressedKeys['69']){
                    sustainNotePlayBlack(suneteleSongBlack[0],2);
                }
            }else if(name === songBlackKeys[1]){
                if (!pressedKeys['85']){
                    sustainNotePlayBlack(suneteleSongBlack[1],7);
                }
            }else if(name === songBlackKeys[2]){
                if (!pressedKeys['79']){
                    sustainNotePlayBlack(suneteleSongBlack[2],10);
                }
            }else if(name === songBlackKeys[3]){
                if (!pressedKeys['90']){
                    sustainNotePlayBlack(suneteleSongBlack[3],12);
                }
            }else if(name === songBlackKeys[4]){
                if (!pressedKeys['88']){
                    sustainNotePlayBlack(suneteleSongBlack[4],13);
                }
            }else if(name === songBlackKeys[5]){
                if (!pressedKeys['66']){
                    sustainNotePlayBlack(suneteleSongBlack[5],15);
                }
            }else if(name === songBlackKeys[6]){
                if (!pressedKeys['188']){
                    sustainNotePlayBlack(suneteleSongBlack[6],17);
                }
            }
        }else if(key==2){
            
        }else if(key==1){
            if (name === whiteKey[0]){
                if (!pressedKeys['192']){
                    playResolvedSusW(0)
                }
            }else if(name === whiteKey[1]){
                if (!pressedKeys['50']){
                    playResolvedSusW(1)
                }
            }else if(name === whiteKey[2]){
                if (!pressedKeys['52']){
                    playResolvedSusW(2)
                }
            }else if(name === whiteKey[3]){
                if (!pressedKeys['53']){
                    playResolvedSusW(3)
                }
            }else if(name === whiteKey[4]){
                if (!pressedKeys['55']){
                    playResolvedSusW(4)
                }
            }else if(name === whiteKey[5]){
                if (!pressedKeys['57']){
                    playResolvedSusW(5)
                }
            }else if(name === whiteKey[6]){
                if (!pressedKeys['189']){
                    playResolvedSusW(6)
                }
            }else if(name === whiteKey[7]){
                if (!pressedKeys['187']){
                    playResolvedSusW(7)
                }
            }else if(name === whiteKey[8]){
                if (!pressedKeys['81']){
                    playResolvedSusW(8)
                }
            }else if(name === whiteKey[9]){
                if (!pressedKeys['69']){
                    playResolvedSusW(9)
                }
            }else if(name === whiteKey[10]){
                if (!pressedKeys['82']){
                    playResolvedSusW(10)
                }
            }else if(name === whiteKey[11]){
                if (!pressedKeys['89']){
                    playResolvedSusW(11)
                }
            }else if(name === whiteKey[12]){
                if (!pressedKeys['73']){
                    playResolvedSusW(12)
                }
            }else if(name === whiteKey[13]){
                if (!pressedKeys['80']){
                    playResolvedSusW(13)
                }
            }else if(name === whiteKey[14]){
                if (!pressedKeys['219']){
                    playResolvedSusW(14)
                }
            }else if(name === whiteKey[15]){
                if (!pressedKeys['220']){
                    playResolvedSusW(15)
                }
            }else if(name === whiteKey[16]){
                if (!pressedKeys['83']){
                    playResolvedSusW(16)
                }
            }else if(name === whiteKey[17]){
                if (!pressedKeys['68']){
                    playResolvedSusW(17)
                }
            }else if(name === whiteKey[18]){
                if (!pressedKeys['71']){
                    playResolvedSusW(18)
                }
            }else if(name === whiteKey[19]){
                if (!pressedKeys['74']){
                    playResolvedSusW(19)
                }
            }else if(name === whiteKey[20]){
                if (!pressedKeys['76']){
                    playResolvedSusW(20)
                }
            }else if(name === whiteKey[21]){
                if (!pressedKeys['186']){
                    playResolvedSusW(21)
                }
            }else if(name === whiteKey[22]){
                if (!pressedKeys['13']){
                    playResolvedSusW(22)
                }
            }else if(name === whiteKey[23]){
                if (!pressedKeys['88']){
                    playResolvedSusW(23)
                }
            }else if(name === whiteKey[24]){
                if (!pressedKeys['67']){
                    playResolvedSusW(24)
                }
            }else if(name === whiteKey[25]){
                if (!pressedKeys['66']){
                    playResolvedSusW(25)
                }
            }else if(name === whiteKey[26]){
                if (!pressedKeys['77']){
                    playResolvedSusW(26)
                }
            }else if(name === whiteKey[27]){
                if (!pressedKeys['190']){
                    playResolvedSusW(27)
                }
            }else if(name === whiteKey[28]){
                if (!pressedKeys['191']){
                    playResolvedSusW(28)
                }
            }else if(name === blackKey[0]){
                if (!pressedKeys['49']){
                    playResolvedSusB(0)
                }
            }else if(name === blackKey[1]){
                if (!pressedKeys['51']){
                    playResolvedSusB(1)
                }
            }else if(name === blackKey[2]){
                if (!pressedKeys['54']){
                    playResolvedSusB(2)
                }
            }else if(name === blackKey[3]){
                if (!pressedKeys['56']){
                    playResolvedSusB(3)
                }
            }else if(name === blackKey[4]){
                if (!pressedKeys['48']){
                    playResolvedSusB(4)
                }
            }else if(name === blackKey[5]){
                if (!pressedKeys['8']){
                    playResolvedSusB(5)
                }
            }else if(name === blackKey[6]){
                if (!pressedKeys['87']){
                    playResolvedSusB(6)
                }
            }else if(name === blackKey[7]){
                if (!pressedKeys['84']){
                    playResolvedSusB(7)
                }
            }else if(name === blackKey[8]){
                if (!pressedKeys['85']){
                    playResolvedSusB(8)
                }
            }else if(name === blackKey[9]){
                if (!pressedKeys['79']){
                    playResolvedSusB(9)
                }
            }else if(name === blackKey[10]){
                if (!pressedKeys['221']){
                    playResolvedSusB(10)
                }
            }else if(name === blackKey[11]){
                if (!pressedKeys['65']){
                    playResolvedSusB(11)
                }
            }else if(name === blackKey[12]){
                if (!pressedKeys['70']){
                    playResolvedSusB(12)
                }
            }else if(name === blackKey[13]){
                if (!pressedKeys['72']){
                    playResolvedSusB(13)
                }
            }else if(name === blackKey[14]){
                if (!pressedKeys['75']){
                    playResolvedSusB(14)
                }
            }else if(name === blackKey[15]){
                if (!pressedKeys['222']){
                    playResolvedSusB(15)
                }
            }else if(name === blackKey[16]){
                if (!pressedKeys['90']){
                    playResolvedSusB(16)
                }
            }else if(name === blackKey[17]){
                if (!pressedKeys['86']){
                    playResolvedSusB(17)
                }
            }else if(name === blackKey[18]){
                if (!pressedKeys['78']){
                    playResolvedSusB(18)
                }
            }else if(name === blackKey[19]){
                if (!pressedKeys['188']){
                    playResolvedSusB(19)
                }
            }
        }
    }, false);


//=========================================================================================================================================
const colorPicker = document.getElementById('colorPicker');
const color_h = '--color';

const defaultColor = "#00EAFF";
colorPicker.value = defaultColor;

function getHValue(color) {
    const hslColor = tinycolor(color).toHsl();
    return hslColor.h;
}

function updateHValue() {
    const selectedColor = colorPicker.value;
    const val = getHValue(selectedColor);
    document.documentElement.style.setProperty(color_h, val);
}

colorPicker.addEventListener('input', updateHValue);
updateHValue();

//=========================================================================================================================================