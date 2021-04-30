

var slider = document.getElementById("mySlider");
var pageviews = document.getElementById("myPageviews");
var price = document.getElementById("myPrice");
var switchButton = document.getElementById("mySwitch");

switchButton.onchange = function()
{
	let finalPrice;

	if (slider.value == 1)
	{
		pageviews.innerHTML = "10K PAGEVIEWS";
		
		finalPrice = 8;
	}
	
	else if (slider.value == 2)
	{
		pageviews.innerHTML = "50K PAGEVIEWS";
		
		finalPrice = 12;
		
	}

	else if (slider.value == 3)
	{
		pageviews.innerHTML = "100K PAGEVIEWS";

		finalPrice = 16;
	}

	else if (slider.value == 4)
	{
		pageviews.innerHTML = "500K PAGEVIEWS";

		finalPrice = 24;
	}

	else if (slider.value == 5)
	{
		pageviews.innerHTML = "1M PAGEVIEWS";

		finalPrice = 36;
	}

	if (switchButton.checked)
	{
		finalPrice = parseInt(finalPrice * 0.75);
	}

	price.innerHTML = "$" + finalPrice + ".00";	
}



slider.onchange = function()
{
	let finalPrice;

	if (this.value == 1)
	{
		pageviews.innerHTML = "10K PAGEVIEWS";
		
		finalPrice = 8;
	}
	
	else if (this.value == 2)
	{
		pageviews.innerHTML = "50K PAGEVIEWS";
		
		finalPrice = 12;
		
	}

	else if (this.value == 3)
	{
		pageviews.innerHTML = "100K PAGEVIEWS";

		finalPrice = 16;
	}

	else if (this.value == 4)
	{
		pageviews.innerHTML = "500K PAGEVIEWS";

		finalPrice = 24;
	}

	else if (this.value == 5)
	{
		pageviews.innerHTML = "1M PAGEVIEWS";

		finalPrice = 36;
	}

	if (switchButton.checked)
	{
		finalPrice = parseInt(finalPrice * 0.75);
	}

	price.innerHTML = "$" + finalPrice + ".00";	
}


function calculate()
{
	let finalPrice;

	if (slider.value == 1)
	{
		pageviews.innerHTML = "10K PAGEVIEWS";
		
		finalPrice = 8;
	}
	
	else if (slider.value == 2)
	{
		pageviews.innerHTML = "50K PAGEVIEWS";
		
		finalPrice = 12;
		
	}

	else if (slider.value == 3)
	{
		pageviews.innerHTML = "100K PAGEVIEWS";

		finalPrice = 16;
	}

	else if (slider.value == 4)
	{
		pageviews.innerHTML = "500K PAGEVIEWS";

		finalPrice = 24;
	}

	else if (slider.value == 5)
	{
		pageviews.innerHTML = "1M PAGEVIEWS";

		finalPrice = 36;
	}

	if (switchButton.checked)
	{
		finalPrice = parseInt(finalPrice * 0.75);
	}

	price.innerHTML = "$" + finalPrice + ".00";	

}

