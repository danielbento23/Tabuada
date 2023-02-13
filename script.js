function calcular(){
    var tnum = (document.getElementById('txtnum'));
    var num = Number(tnum.value);
    var res = document.getElementById('resul1');

    if(num == ''){
        alert('Insira um Numero')
    }else{
        res.innerHTML = ''
        for(let i = 1; i <= 10; i++) {
            res.innerHTML += `<br>${num} x ${i} = ${num * i}`
            
        }
        resul1.style.background = '#add8e6'
        resul1.style.boxShadow ='3px 3px #21e5f3a1'
    }

}