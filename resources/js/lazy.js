$(document).ready(function(){
	$( 'ul#lazy_load' ).lazyjson({
		noResultsText: '',
		noResults: '',
		pagination: {
			active: true,
			pages: 2,
			count: 5,
			lazyLoad: true,
		},
		api: {
			uri: 'resources.json'
		}
	});

	$('#searchString').keyup(function(){
        var searchField = $('#searchString').val();
        var regex = new RegExp(searchField, "i");
        var output = '';
        var count = 1;
        $.getJSON('resources.json', function(response) {
          	$.each(response, function(key, val){
                if ((val.data.title.search(regex) != -1) || (val.data.description.search(regex) != -1)) {
                	output += '<li id="template-lazy_load"><a href="' + val.data.url + '">' + val.data.title + '</a><p>' + val.data.description + '</p></li>';
                }
          	});
          $('ul#lazy_load').html(output);
        }); 
    });
});
		
		