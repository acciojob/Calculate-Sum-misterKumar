//your JS code here. If required.
function twoSum (){
	const number1 = document.getElementById("n1");
	const number2 = document.getElementById("n2");
     const Sum = document.getElementById("Sum");
	const sumBtn = document.getElementById("sum_btn");

	sumBtn.addEventListener("click", function(){
		const num1 = Number(number1.value);
		const num2 = Number(number2.value);
		const total = num1 + num2 ;
		
		 Sum.textContent = total;
		
	});
}
	twoSum();









	
	