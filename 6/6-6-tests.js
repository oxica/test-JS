true && false && true;
// false

true || false || true;
//true

if (5 < 4) {
    console.log('A');
} else if (5 > 4) {
    console.log('B');
} else {
    console.log('C');
}
//B

3 && (null || ((15 / 3) - 5));
//0

if ('abc' > 'd') {
    console.log('A');
} else if (0) {
    console.log('B');
} else {
    console.log('C')
}

//C

if (5 && 'ten' && null) {
    console.log('A');
} else if (0 || undefined || "") {
    console.log('B');
} else if (false || -1 || !0) {
    console.log('C');
} else {
    console.log('D')
}
//C