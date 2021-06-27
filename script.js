const calcula = document.getElementById('calcula');

function imc () {
	const altura = document.getElementById('altura').value;
	const peso = document.getElementById('peso').value;
	const resultado = document.getElementById('resultado');
	
	if (altura !== ''  &&  peso !== '' ){
		const valorIMC = (peso / (altura * altura)).toFixed(2);
		
	 
		
		if (valorIMC < 18.5){
			resultado.textContent = 'Seu IMC é '+ valorIMC + ' e você está abaixo do peso!';
		}else if (valorIMC > 18.5 && valorIMC < 26) {
			resultado.textContent = 'Seu IMC é '+ valorIMC + ' e você está no peso ideal!';
		}else if (valorIMC > 25) {
			resultado.textContent = 'Seu IMC é '+ valorIMC + ' e você está acima do peso!';
		}
		
	}else{
		alert('Preencha corretamente os campos!!')
	} 
	
}

calcular.addEventListener('click', imc);