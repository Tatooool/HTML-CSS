
	function printElements(num1,num2)
{
	var i;
		document.write("The repeating element is ");
			
	for (i = 0; i < num2; i++)
	{
		var abs_value = Math.abs(num1[i]);
		if (num1[abs_value - 1] > 0)
        num1[abs_value - 1] = -num1[abs_value - 1];
		else
			document.write( abs_value);
	}
			
	document.write("<br> and the missing element is ");
	for (i = 0; i < num2; i++)
	{
		if (num1[i] > 0)
			document.write (i + 1);
	}
}

    num1 = new Array ( 7, 3, 4, 5, 5, 6, 2 );
	n = num1.length;
	printTwoElements(num1, n);
