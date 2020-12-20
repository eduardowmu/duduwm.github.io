function changeDIV(page)
{	if(page === "inicio")
	{	document.getElementById("div_inicio").style.display = "block";
		document.getElementById("div_contato").style.display = "none";
	}

	else
	{	document.getElementById("div_contato").style.display = "block";
		document.getElementById("div_inicio").style.display = "none";
	}
}