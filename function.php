<?php




$data = file_get_contents("data-1.json");


$propiedades = json_decode($data, true);


function Ciudad($data){
	$i=0;
	foreach($data as $prop){
		$city[$i] = $prop[Ciudad];
		$i++;
	}
	$cityList = array_values(array_unique($city));
	$a = count($cityList);
	for($b=0; $b<$a;$b++){
		$estructura .= "<option value='$cityList[$b]'>";
		$estructura .= $cityList[$b];
		$estructura .= "</option>";
	}
	echo $estructura;
}


function Tipo($data){
	$i=0;
	foreach($data as $prop){
		$propiedad[$i] = $prop[Tipo];
		$i++;
	}
	$propiedadList = array_values(array_unique($propiedad));
	$a = count($propiedadList);
	for($b=0; $b<$a;$b++){
		$estructura .= "<option value='$propiedadList[$b]'>";
		$estructura .= $propiedadList[$b];
		$estructura .= "</option>";
	}
	echo $estructura;
}
?>