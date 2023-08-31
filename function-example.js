function getAvarage(assingment1, assingment2, assingment3) {
    var total = assingment1 + assingment2 + assingment3;
    var avarage = total/3;
    return avarage;
}

const ass1Mark=98;
const ass2Mark=88;
const ass3Mark=78;

var myAverage= getAvarage(ass1Mark,ass2Mark,ass3Mark);
console.log(myAverage);


function getSubject(math,physics,biology){
    var total=math+physics+biology;
    var marks=total/3;
    return marks;
}

const mathMark=87;
const physicsMark=83;
const biologyMark=97;

var getMarks= getSubject(mathMark,physicsMark,biologyMark);
console.log(getMarks);


function name(o,n,e,t,w){
    var total=o+n+e+t+w;
    var mark= total/3;
    return mark;
}

const o=1;
const n=2;
const e=3;
const t=4;
const w=5;

var main= name(0,n,e,t,w);
console.log(main);

