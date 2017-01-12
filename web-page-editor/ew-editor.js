
var count = 0;

contentEditable();

function contentEditable() {
    $('.editable').froalaEditor({
        toolbarInline: true,
        charCounterCount: false,
        toolbarVisibleWithoutSelection: true,
        toolbarButtons: ['fullscreen', 'bold', 'italic', 'underline', 'strikeThrough', 'subscript', 'superscript', 'fontFamily', 'fontSize', '|', 'color', 'emoticons', 'inlineStyle', 'paragraphStyle', '|', 'paragraphFormat', 'align', 'formatOL', 'formatUL', 'outdent', 'indent', '-', 'insertLink', 'insertImage', 'insertVideo', 'insertFile', 'insertTable', '|', 'quote', 'insertHR', 'undo', 'redo', 'clearFormatting', 'selectAll', 'html'],
        pluginsEnabled: null,
        language: 'es'
    });
}

function color(elementId, jscolor) {
    sectionId = getSectionId(elementId);
    $('#' + sectionId).css('backgroundColor', '#' + jscolor);
    $('#' + sectionId).css('backgroundImage', "none");
}

function getSectionId(elementId) {
    sectionId = $(elementId).closest('section').attr('id');
    if (sectionId == null) {
        sectionId = $(elementId).closest('header').attr('id');
    }
    return sectionId;
}

function getNextSectionId(elementId) {
    sectionId = $(elementId).closest('section').nextAll("section[id]").attr('id');
    if (sectionId == null) {
        sectionId = $(elementId).closest('header').nextAll("header[id]").attr('id');
    }
    return sectionId;
}

function down(elementId) {
    sectionId = getSectionId(elementId);
    var b = document.getElementById(sectionId).nextElementSibling;
    $('#' + sectionId).before($('#' + b.id));
}

function up(elementId) {
    sectionId = getSectionId(elementId);
    var b = document.getElementById(sectionId).previousElementSibling;
    $('#' + b.id).before($('#' + sectionId));
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

function remove(elementId) {
    if (confirm("¿Eliminar esta sección?")) {
        sectionId = getSectionId(elementId);
        $('#' + sectionId).remove();
    }
}

function save() {
    $('.ew-tools').hide();
    $('.ew-gear').hide();
    $('.ew-save').hide();
    var data = new FormData();
    data.append("data", document.documentElement.outerHTML);
    data.append("templateUrl", window.location.href);
    var today = new Date();
    filename = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate() + '-' + today.getHours() + today.getMinutes() + today.getSeconds();
    data.append("filename", filename);
    var xhr = new XMLHttpRequest();
    xhr.open('post', '../ew-saver.php', true);
    xhr.send(data);
    alert("La página se guardó correctamente.");
    setTimeout(function () {
        console.log("Saving Web...");
    }, 3000);
    window.open('web-' + filename + '.html', '_blank');
    $('.ew-tools').show();
    $('.ew-gear').show();
    $('.ew-save').show();
}

$('.ew-save').hide();

$('.ew-tools').css('visibility', 'hidden');

$('.ew-gear').click(function () {
    if ($('.ew-tools').css('visibility') === 'hidden') {
        $('.ew-tools').css('visibility', 'visible').hide().fadeIn("fast");
    } else {
        $('.ew-tools').fadeOut("fast", function () {
            $(this).css({"visibility": "hidden"});
            $(this).css({"display": "block"});
        });
    }
    $('.ew-save').toggle("fast");
    return false;
});

$('.ew-save').click(function () {
    save();
    return false;
});
