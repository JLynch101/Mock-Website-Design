

/* Functions to create the product.html table, build by up byJSON*/
$(document).ready(function(){
var service = [
{
      "service": "Photo Edit",
      "delivery": "1 Day",
      "price": "€20"
		},
		{
      "service": "Logo Design",
      "delivery": "2 Days",
      "price": "€50"
		},
		{
      "service": "Business Card Design",
      "delivery": "2 Days",
      "price": "€60"

		},
		{
      "service": "Flyer Design",
      "delivery": "2 Days",
      "price": "€60"
		},
            {
      "service": "Full Social Media Page Design",
      "delivery": "5 Days",
      "price": "€200"
            },
                  {
      "service": "Full Website with maintenance",
      "delivery": "7 Days",
      "price": "€600"
            }
	]	
 
/* Outputs the JSON table*/
var template = $('#handlebars-demo').html();
var templateScript = Handlebars.compile(template);
var html = templateScript(service);
$("section").append(html);
});