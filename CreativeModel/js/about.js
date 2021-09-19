function About()
{
	this.init();	
}

About.prototype = 
{
	container: null,

	init: function()
	{
		var text, containerText;
		
		this.container = document.createElement("div");
		this.container.className = 'gui';
		this.container.style.position = 'absolute';
		this.container.style.top = '0px';
		this.container.style.visibility = 'hidden';
		
		containerText = document.createElement("div");
		containerText.style.margin = '20px 20px';
		containerText.style.textAlign = 'centre';
		this.container.appendChild(containerText);

		text = document.createElement("p");
		text.style.textAlign = 'center';		
		text.innerHTML = '<strong>ABOUT THIS PROJECT</strong> <a href="changelog.txt" target="_blank">';
		containerText.appendChild(text);

		text = document.createElement("p");
		text.innerHTML = 'This creative AI application was made as a part of a research project for the MSc Data Science & AI for the Creative Industries final thesis 2021.';
		containerText.appendChild(text);

		text = document.createElement("p");
		text.style.textAlign = 'center';
		text.innerHTML = '<a href="https://github.com/HallaBjork/hallabjork.github.io/tree/main/CreativeModel" target="_blank">Source Code</a>';
		containerText.appendChild(text);

		text = document.createElement("hr");
		containerText.appendChild(text);

		text = document.createElement("p");
		text.innerHTML = 'The model was inspired by the project <a href="https://nbenko1.github.io/#/" target="_blank">Picbreeder</a> and the drawing board is adapted from <a href="https://mrdoob.com/projects/harmony/" target="_blank">Harmony</a> source code. The brushes <em>Sketchy</em>, <em>Shaded</em>, <em>Chrome</em>, <em>Fur</em>, <em>LongFur</em> and <em>Web</em> were first implemented in <a href="http://www.zefrank.com/scribbler/" target="_blank">The Scribbler</a>.';
		containerText.appendChild(text);
		
	},
	
	show: function()
	{
		this.container.style.visibility = 'visible';		
	},
	
	hide: function()
	{
		this.container.style.visibility = 'hidden';
	}
}