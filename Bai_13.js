function HiHi() {
    let nhaptienvao = +document.getElementById('nhaptien').value;
    console.log(nhaptienvao);
    let s1 = document.getElementById('s1').value;
    console.log(s1);
    let s2 = document.getElementById('s2').value;
    console.log(s2);
    let s3 = 25000;
    if(s1 == s2) {
        alert(nhaptienvao);
        document.getElementById('thanhdt').innerHTML = nhaptienvao;
    }
    if(s1=="v" && s2=="u") {
        alert(nhaptienvao/25000);
        document.getElementById('thanhdt').innerHTML = nhaptienvao/s3;
    }
    if(s1=="u" && s2=="v") {
        alert(nhaptienvao*25000);
        document.getElementById('thanhdt').innerHTML = nhaptienvao*25000;
    }


}
