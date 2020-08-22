$(document).ready(function()
{	var url = window.location.href;
	$("#send").on("click", function()
	{	var email = $("#email").val();
		var msg = $("#msg").val();
		if((email === null || email === "" || email.indexOf("@") < 0) ||
			(msg === null || msg === ""))
		{alert("Favor preencher os campos corretamente.");}
		else
		{	$.ajax(
			{	url: "https://formspree.io/xlepzokv",
				method: "post",
				data: JSON.stringify({
					"_replyto": email,
					"message": msg
				}),
				dataType : "json",
				contentType : "application/json;charset=UTF-8",
				success: function()
				{	window.top.location.href = url;	
					alert("Sua mensagem foi enviada! Obrigado.");
					
				},
				error: function()
				{	window.top.location.href = url;	
					alert("Erro interno. Favor tente novamente.");
				}
			});
		}
	});
});