<?php

if(!empty($_POST['data'])){
	$data = $_POST['data'];
	$data = str_replace('contenteditable="true"', 'contenteditable="false"', $data);
	$data = str_replace('<script type="text/javascript" src="../ew-editor.js"></script>', '', $data);
	$data = str_replace('<link rel="stylesheet" href="../ew-editor.css">', '', $data);
	$templateUrl = explode("/", $_POST['templateUrl']);
	end($templateUrl);
	$template = prev($templateUrl);
	$filename = $_POST['filename'];
	$fname = $template . "/web-" . $filename . ".html";
	$file = fopen("" .$fname, 'w');
	fwrite($file, $data);
	fclose($file);
}

if(!empty($_POST['data2'])){
	$data2 = $_POST['data2'];
	$data2 = "<!DOCTYPE html>" . $data2;
	$templateUrl = explode("/", $_POST['templateUrl']);
	end($templateUrl);
	$template = prev($templateUrl);
	$filename = $_POST['filename'];
	$fname = $template . "/editable-web-" . $filename . ".html";
	$file = fopen("" .$fname, 'w');
	fwrite($file, $data2);
	fclose($file);
}
