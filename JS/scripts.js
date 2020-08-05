/*$(document).ready(function()
{	var url = window.location.href;
	$("#send").click(function()
	{	var email = $("#email").val();
		var msg = $("#msg").val();
		if((email === null || email === "" || email.indexOf("@") < 0) ||
			(msg === null || msg === ""))
		{alert("Favor preencher os campos corretamente.");}
		else
		{	$.ajax(
			{	url: "https://formspree.io/xlepzokv",
				method: "post",
				success: function() {alert("Mensagem enviada com sucesso! Obrigado.");},
				error: function()	{alert("Houve algum erro. Favor tentar novamente meais tarde.")},
				complete: function() {window.top.location.href = url;}
			});
		}
	});
});*/