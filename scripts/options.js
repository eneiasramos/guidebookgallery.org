function showOptions()
{
	document.getElementById('box1button').style.display='none';
	document.getElementById('box1').style.display='';
}

function uncheckAllGUIs()
{
	form=document.getElementById('options').elements;
	for (i=0;i<form.length;i++) form[i].checked='';
}

function checkAllGUIs()
{
	form=document.getElementById('options').elements;
	for (i=0;i<form.length;i++) form[i].checked='checked';
}
