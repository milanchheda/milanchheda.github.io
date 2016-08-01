<?php

$resources = array();
$resources[0] = array('id' => 1,
						'data' => array(
							'title' => 'Stackpile',
							'description' => "A better way to install 3rd party apps",
							'url' => 'https://stackpile.io',
							'tags' => array('Analytics')
							)
						);
$resources[] = array('id' => 2,
						'data' => array(
							'title' => 'Bootstrap cheatsheet',
							'description' => "Bootstrap cheatsheet",
							'url' => 'http://hackerthemes.com/bootstrap-cheatsheet/',
							'tags' => array('Bootstrap', 'Cheatsheet')
							)
						);
$resources[] = array('id' => 3,
						'data' => array(
							'title' => 'Issue Manager Comparisons',
							'description' => "JIRA vs trello vs asana vs basecamp",
							'url' => 'https://www.g2crowd.com/compare/jira-vs-trello-vs-asana-vs-basecamp',
							'tags' => array('Comparisons', 'Issue tracker')
							)
						);
$resources[] = array('id' => 4,
						'data' => array(
							'title' => 'JS Grid',
							'description' => "jsGrid: a lightweight client-side data grid control based on jQuery",
							'url' => 'http://js-grid.com/',
							'tags' => array('JQuery', 'JavaScript')
							)
						);
$resources[] = array('id' => 5,
						'data' => array(
							'title' => 'Random HTML Tags',
							'description' => "For every loading of this page you will get a random HTML tag with a brief description and a link for more info",
							'url' => 'https://randomhtmltags.tech/',
							'tags' => array('HTML')
							)
						);
$resources[] = array('id' => 6,
						'data' => array(
							'title' => 'MarkSheet',
							'description' => "A free HTML & CSS tutorial",
							'url' => 'http://marksheet.io/',
							'tags' => array('HTML', 'CSS', 'Tutorial')
							)
						);
$resources[] = array('id' => 7,
						'data' => array(
							'title' => 'anime.js',
							'description' => "Anime is a flexible yet lightweight JavaScript animation library.",
							'url' => 'http://anime-js.com/',
							'tags' => array('JavaScript')
							)
						);

$resources[] = array('id' => 9,
						'data' => array(
							'title' => 'crontab.guru',
							'description' => "The quick and simple editor for cron schedule expressions..",
							'url' => 'http://crontab.guru/',
							'tags' => array('Cron')
							)
						);
file_put_contents('resources.json', json_encode($resources));

?>