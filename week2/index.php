<!DOCTYPE HTML>
<html>
  <meta charset='"utf-8"' />
  <title>Site de loutres</title>
</html>
<body>
	<div id='gallery'>
    <?php
		$array = scandir('/images');
		unset($array[0]);
		unset($array[1]);
		for($i = 2; i < count($array) ; ++$i) {
			echo '<a href="image/'.$i.'">';
			echo 			'<img src=image/'.$i.'"/>';
			echo '</a>';
		} ?>
	</div>
	<a href=''image''>
	  <img src='' alt='' />
	</a>
	</div>
</body>
