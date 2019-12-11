//função que irá somar o quanto a pessoa quer receber e armazenar nas variaveis de parcela
function soma() {
    var valor = document.querySelector('.valor').value;
    let trocaClasse = document.querySelector('.container');
    trocaClasse.classList.remove('container');
    trocaClasse.classList.add('containerTroca');

    let trocaClasseContainer = document.querySelector('.container2');
    trocaClasseContainer.classList.remove('conatiner2');
    trocaClasseContainer.classList.add('voltaParcelas');

    let trocaClasseBtn = document.querySelector('.btnSomarPrimeiro');
    trocaClasseBtn.classList.remove('btnSomarPrimeiro');
    trocaClasseBtn.classList.add('somarParcela');




    
    let parcela1 = '';
    let parcela2 = '';
    let parcela3 = '';
    let parcela4 = '';
    let parcela5 = '';
    let parcela6 = '';
    let parcela7 = '';
    let parcela8 = '';
    let parcela9 = '';
    let parcela10 = '';
    let parcela11 = '';
    let parcela12 = '';

    toda();

    function toda(){


    armazenaValor();

    function armazenaValor(){


    if (valor <= 2000) {

         parcela1 = valor * 1.07950;
         parcela2 = valor * 0.56038;
         parcela3 = valor * 0.38768;
         parcela4 = valor * 0.30158;
         parcela5 = valor * 0.25013;
         parcela6 = valor * 0.21599;
         parcela7 = valor * 0.19174;
         parcela8 = valor * 0.17368;
         parcela9 = valor * 0.15975;
         parcela10 = valor * 0.14869;
         parcela11 = valor * 0.13974;
         parcela12 = valor * 0.13235;

    
    } else if(valor > 2000 && valor < 5000){
        parcela1 = valor * 1.06950;
        parcela2 = valor * 0.55271;
        parcela3 = valor * 0.38070;
        parcela4 = valor * 0.29489;
        parcela5 = valor * 0.24356;
        parcela6 = valor * 0.20947;
        parcela7 = valor * 0.18523;
        parcela8 = valor * 0.16714;
        parcela9 = valor * 0.15316;
        parcela10 = valor * 0.14205;
        parcela11 = valor * 0.13302;
        parcela12 = valor * 0.12557;

    } else if(valor > 5000 && valor <= 7000) {
        parcela1 = valor * 1.05950;
        parcela2 = valor * 0.54505;
        parcela3 = valor * 0.37376;
        parcela4 = valor * 0.28826;
        parcela5 = valor * 0.23707;
        parcela6 = valor * 0.20304;
        parcela7 = valor * 0.17882;
        parcela8 = valor * 0.16072;
        parcela9 = valor * 0.14670;
        parcela10 = valor * 0.13555;
        parcela11 = valor * 0.12647;
        parcela12 = valor * 0.11895;

	
    }else if (valor > 7000 && valor <= 10000){

        parcela3 = valor * 0.36686;
        parcela4 = valor * 0.28168;
        parcela5 = valor * 0.23066;
        parcela6 = valor * 0.19670;
        parcela7 = valor * 0.17251;
        parcela8 = valor * 0.15441;
        parcela9 = valor * 0.14038;
        parcela10 = valor * 0.12919;
        parcela11 = valor * 0.12007;
        parcela12 = valor * 0.11251;

    }else if (valor > 10000){
        parcela3 = valor * 0.36001;
        parcela4 = valor * 0.27517;
        parcela5 = valor * 0.22431;
        parcela6 = valor * 0.19045;
        parcela7 = valor * 0.16630;
        parcela8 = valor * 0.14822;
        parcela9 = valor * 0.13419;
        parcela10 = valor * 0.12298;
        parcela11 = valor * 0.11384;
        parcela12 = valor * 0.10624;
    }

    }


    escrever();

    function escrever(){

    //Escrevendo na tela a apartir de um container
    const corpo = document.body;

    let divDom = document.createElement('div');
    divDom.classList.add('container1')


    let parcelas1 = document.createElement('div');
    parcelas1.classList.add('parcelas1');
    divDom.appendChild(parcelas1);


    let pulaLinha = document.createElement('br')

    let textDivDom = document.createElement('h1');
    textDivDom.textContent = 'Bem na hora! Aqui estão as opções:';
    textDivDom.classList.add('h1DivDom');
    parcelas1.appendChild(textDivDom);


    let text3 = document.createElement('p');
    text3.textContent = '3x de R$' + parcela3.toFixed(2);
    parcelas1.appendChild(text3);

    let text4 = document.createElement('p');
    text4.textContent = '4x de R$' + parcela4.toFixed(2);
    parcelas1.appendChild(text4);

    let text5 = document.createElement('p');
    text5.textContent = '5x de R$' + parcela5.toFixed(2);
    parcelas1.appendChild(text5);

    let text6 = document.createElement('p');
    text6.textContent = '6x de R$' + parcela6.toFixed(2);
    parcelas1.appendChild(text6);

    let text7 = document.createElement('p');
    text7.textContent = '7x de R$' + parcela7.toFixed(2);
    parcelas1.appendChild(text7);

    let linhaParcelas = document.createElement('hr');
    linhaParcelas.classList.add('linhaParcelas');
    divDom.appendChild(linhaParcelas);

    let parcelas2 = document.createElement('div');
    parcelas2.classList.add('parcelas2');
    divDom.appendChild(parcelas2);

    let text8 = document.createElement('p');
    text8.textContent = '8x de R$' + parcela8.toFixed(2);
    parcelas2.appendChild(text8);

    let text9 = document.createElement('p');
    text9.textContent = '9x de R$' + parcela9.toFixed(2);
    parcelas2.appendChild(text9);

    let text10 = document.createElement('p');
    text10.textContent = '10x de R$' + parcela10.toFixed(2);
    parcelas2.appendChild(text10);

    let text11 = document.createElement('p');
    text11.textContent = '11x de R$' + parcela11.toFixed(2);
    parcelas2.appendChild(text11);

    let text12 = document.createElement('p');
    text12.textContent = '12x de R$' + parcela12.toFixed(2);
    parcelas2.appendChild(text12);


    let contratar = document.createElement('button');
    contratar.classList.add('btnParcelas');
    contratar.textContent = 'CONTRATAR';
    divDom.appendChild(contratar);

    function linkWpp() {
        window.location.href = 'https://api.whatsapp.com/send?phone=5562920005778&text=Bem%20na%20hora!';
    }  

    
    contratar.onclick = linkWpp;
    corpo.appendChild(divDom);


    
}
    }

}



