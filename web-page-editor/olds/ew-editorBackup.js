
var count = 0;

var cutElement;

contentEditable();

function contentEditable() {
	$(function() {
		$('.editable').froalaEditor({
		  toolbarInline: true,
		  charCounterCount: false,
		  toolbarVisibleWithoutSelection: true,
		  toolbarButtons: ['fullscreen', 'bold', 'italic', 'underline', 'strikeThrough', 'subscript', 'superscript', 'fontFamily', 'fontSize', '|', 'color', 'emoticons', 'inlineStyle', 'paragraphStyle', '|', 'paragraphFormat', 'align', 'formatOL', 'formatUL', 'outdent', 'indent', '-', 'insertLink', 'insertImage', 'insertVideo', 'insertFile', 'insertTable', '|', 'quote', 'insertHR', 'undo', 'redo', 'clearFormatting', 'selectAll', 'html'],
		  pluginsEnabled: null,
		  language: 'es',
		  key: '0qxfB-21jB-13mE-11B-9C2A-7pmC5cq==',
		})
	});
}

function color(elementId,jscolor) {
	sectionId = getSectionId(elementId);
	document.getElementById(sectionId).style.backgroundColor = '#' + jscolor;
	document.getElementById(sectionId).style.backgroundImage = "none";
	//$('#'+sectionId).css('background-color','#' + jscolor);
	//document.getElementById(sectionId).style.backgroundImage = 'url(img/bg-cta.jpg)';
}

function getSectionId(elementId) {
	sectionId = $(elementId).closest('section').attr('id');
	if (sectionId == null){
		sectionId = $(elementId).closest('header').attr('id');
	}
	return sectionId;
}

function getNextSectionId(elementId) {
	sectionId = $(elementId).closest('section').nextAll("section[id]").attr('id');
	if (sectionId == null){
		sectionId = $(elementId).closest('header').nextAll("header[id]").attr('id');
	}
	return sectionId;
}

function down(elementId) {
	sectionId = getSectionId(elementId);
	var b = document.getElementById(sectionId).nextElementSibling;
	$('#'+sectionId).before($('#'+b.id));
}

function up(elementId) {
	sectionId = getSectionId(elementId);
	var b = document.getElementById(sectionId).previousElementSibling;
	$('#'+b.id).before($('#'+sectionId));
}

function create1(elementId) {
	count = count + 1;
	sectionId = getSectionId(elementId);
	var newsection = 
    '<section id="seccion-' + count + '" class="text-center"> \
		<div class="container"> \
			<div class="row editable"> \
				<div class="col-md-12"> \
					<h4> COLUMNA 1 </h4> \
				</div> \
			</div>\
			<div class="row ew-tools text-left">\
				<div class="col-lg-12">\
					<button onclick="down(this)" style="color:black;" title="Bajar Sección"><i class="fa fa-fw fa-arrow-down"></i></button>\
					<button onclick="up(this)" style="color:black;" title="Subir Sección"><i class="fa fa-fw fa-arrow-up"></i></button>\
					<input type="button" onchange="color(this, this.jscolor)" class="jscolor" value="..." ></input>\
					<button onclick="create(this)" style="color:black;" title="Nueva Sección"><i class="fa fa-fw fa-plus-square-o"></i></button>\
					<button onclick="duplicate(this)" style="color:black;" title="Duplicar Sección"><i class="fa fa-fw fa-copy"></i></button>\
					<button onclick="remove(this)" style="color:black;" title="Eliminar Sección"><i class="fa fa-fw fa-trash-o"></i></button>\
				</div>\
			</div>\
		</div>\
    </section>';

	var sectionRow = document.getElementById(sectionId);
	var sectionRowClone = sectionRow.cloneNode(true);
	sectionRowClone.id = sectionId + count;
	sectionRow.parentNode.insertBefore(sectionRowClone, sectionRow.nextSibling);
	
	document.getElementById(sectionRowClone.id).outerHTML = newsection;
	
	contentEditable();
	jscolor.installByClassName("jscolor");
}

function create3(elementId) {
	count = count + 1;
	sectionId = getSectionId(elementId);
	var newsection = 
    '<section id="seccion-' + count + '" class="text-center"> \
		<div class="container"> \
			<div class="row editable"> \
				<div class="col-md-4"> \
					<h4> COLUMNA 1 </h4> \
				</div> \
				<div class="col-md-4"> \
					<h4> COLUMNA 2 </h4>\
				</div>\
				<div class="col-md-4">\
					<h4> COLUMNA 3 </h4>\
				</div>\
			</div>\
			<div class="row ew-tools text-left">\
				<div class="col-lg-12">\
					<button onclick="down(this)" style="color:black;" title="Bajar Sección"><i class="fa fa-fw fa-arrow-down"></i></button>\
					<button onclick="up(this)" style="color:black;" title="Subir Sección"><i class="fa fa-fw fa-arrow-up"></i></button>\
					<input type="button" onchange="color(this, this.jscolor)" class="jscolor" value="..." ></input>\
					<button onclick="create(this)" style="color:black;" title="Nueva Sección"><i class="fa fa-fw fa-plus-square-o"></i></button>\
					<button onclick="duplicate(this)" style="color:black;" title="Duplicar Sección"><i class="fa fa-fw fa-copy"></i></button>\
					<button onclick="remove(this)" style="color:black;" title="Eliminar Sección"><i class="fa fa-fw fa-trash-o"></i></button>\
				</div>\
			</div>\
		</div>\
    </section>';

	var sectionRow = document.getElementById(sectionId);
	var sectionRowClone = sectionRow.cloneNode(true);
	sectionRowClone.id = sectionId + count;
	sectionRow.parentNode.insertBefore(sectionRowClone, sectionRow.nextSibling);
	
	document.getElementById(sectionRowClone.id).outerHTML = newsection;
	
	contentEditable();
	jscolor.installByClassName("jscolor");
}

function create12(elementId) {
	count = count + 1;
	sectionId = getSectionId(elementId);
	var newsection = 
    '<section id="seccion-' + count + '" class="text-center"> \
		<div class="container"> \
			<div class="row editable"> \
				<div class="col-md-1"> \
					<h4> C1 </h4> \
				</div> \
				<div class="col-md-1"> \
					<h4> C2 </h4> \
				</div> \
				<div class="col-md-1"> \
					<h4> C3 </h4> \
				</div> \
				<div class="col-md-1"> \
					<h4> C4 </h4> \
				</div> \
				<div class="col-md-1"> \
					<h4> C5 </h4> \
				</div> \
				<div class="col-md-1"> \
					<h4> C6 </h4> \
				</div> \
				<div class="col-md-1"> \
					<h4> C7 </h4> \
				</div> \
				<div class="col-md-1"> \
					<h4> C8 </h4> \
				</div> \
				<div class="col-md-1"> \
					<h4> C9 </h4> \
				</div> \
				<div class="col-md-1"> \
					<h4> C10 </h4> \
				</div> \
				<div class="col-md-1"> \
					<h4> C11 </h4> \
				</div> \
				<div class="col-md-1"> \
					<h4> C12 </h4> \
				</div> \
			</div>\
			<div class="row ew-tools text-left">\
				<div class="col-lg-12">\
					<button onclick="down(this)" style="color:black;" title="Bajar Sección"><i class="fa fa-fw fa-arrow-down"></i></button>\
					<button onclick="up(this)" style="color:black;" title="Subir Sección"><i class="fa fa-fw fa-arrow-up"></i></button>\
					<input type="button" onchange="color(this, this.jscolor)" class="jscolor" value="..." ></input>\
					<button onclick="create(this)" style="color:black;" title="Nueva Sección"><i class="fa fa-fw fa-plus-square-o"></i></button>\
					<button onclick="duplicate(this)" style="color:black;" title="Duplicar Sección"><i class="fa fa-fw fa-copy"></i></button>\
					<button onclick="remove(this)" style="color:black;" title="Eliminar Sección"><i class="fa fa-fw fa-trash-o"></i></button>\
				</div>\
			</div>\
		</div>\
    </section>';

	var sectionRow = document.getElementById(sectionId);
	var sectionRowClone = sectionRow.cloneNode(true);
	sectionRowClone.id = sectionId + count;
	sectionRow.parentNode.insertBefore(sectionRowClone, sectionRow.nextSibling);
	
	document.getElementById(sectionRowClone.id).outerHTML = newsection;
	
	contentEditable();
	jscolor.installByClassName("jscolor");
}

function newsection(elementId) {
	$('.columns').toggle("fast");
}

function cut(elementId) {
	sectionId = getSectionId(elementId);
	cutElement = document.getElementById(sectionId);
	$('#'+sectionId).remove();
}

function duplicate(elementId) {
	count = count + 1;
	sectionId = getSectionId(elementId);
	var sectionRow = document.getElementById(sectionId);
	var sectionRowClone = sectionRow.cloneNode(true);
	sectionRowClone.id = sectionId + count;
	sectionRow.parentNode.insertBefore(sectionRowClone, sectionRow.nextSibling);
	contentEditable();
	jscolor.installByClassName("jscolor");
}

function paste(elementId) {
	count = count + 1;
	sectionId = getSectionId(elementId);
	var sectionRowClone = cutElement.cloneNode(true);
	sectionRowClone.id = sectionId + count;
	document.getElementById(sectionId).parentNode.insertBefore(sectionRowClone, document.getElementById(sectionId).nextSibling);
	contentEditable();
	jscolor.installByClassName("jscolor");
}

function remove(elementId) {
	if (confirm("¿Eliminar esta sección?")) {
		sectionId = getSectionId(elementId);
		$('#' + sectionId).remove();
	}
	/*http://demo.tutorialzine.com/2010/12/better-confirm-box-jquery-css3/*/
}

function save() {
	
	var data2 = new FormData();
	data2.append("data2", document.documentElement.outerHTML);
	data2.append("templateUrl", window.location.href);
	var today = new Date();
	filename = today.getFullYear() + '-' + (today.getMonth() + 1 ) + '-' + today.getDate() + '-' + today.getHours() + today.getMinutes() + today.getSeconds();
	data2.append("filename", filename);
	var xhr = new XMLHttpRequest();
	xhr.open( 'post', '../ew-saver.php', true );
	xhr.send(data2);
	alert("La página se guardó correctamente.");
	window.open('editable-web-' + filename + '.html','_blank');
	
	
	$('.ew-tools').hide();
	$('.ew-bars').hide();
	$('.ew-gear').hide();
	$('.ew-save').hide();
	
	var data = new FormData();
	data.append("data", document.documentElement.outerHTML);
	data.append("templateUrl", window.location.href);
	var today = new Date();
	filename = today.getFullYear() + '-' + (today.getMonth() + 1 ) + '-' + today.getDate() + '-' + today.getHours() + today.getMinutes() + today.getSeconds();
	data.append("filename", filename);
	var xhr = new XMLHttpRequest();
	xhr.open( 'post', '../ew-saver.php', true );
	xhr.send(data);
	
	alert("La página se guardó correctamente.");
	setTimeout(function(){
		console.log("Saving Web...");
	}, 3000);
	window.open('web-' + filename + '.html','_blank');
	
	$('.ew-tools').show();
	$('.ew-bars').show();
	$('.ew-gear').show();
	$('.ew-save').show();
}

function configure() {
	$('.ew-tools').toggle( "slow" );
}

$('.ew-tools').css('visibility','hidden');

$('.ew-save').hide();

$('.ew-bars').click(function () {
	$('.ew-gear').toggle(400);
	$('.ew-save').toggle(400);
	return false;
});

$('.ew-gear').click(function(){
	if ( $('.ew-tools').css('visibility') == 'hidden' ) {
		$('.ew-tools').css('visibility','visible').hide().fadeIn("fast");
	} else {
		$('.ew-tools').fadeOut("fast", function() {
			$(this).css({"visibility":"hidden"});
			$(this).css({"display":"block"});
		});
	}
	$('.ew-save').toggle("fast");
	return false;
});

$('.ew-save').click(function () {
	save();
	return false;
});
