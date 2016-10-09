$(document).ready(function(){
	$("#generateCard").click(function(){
		var username = $("#username").val();
		var stackOverflowId = $("#stackOverflowId").val();
		if(username != '' && $.trim(username) != '') {
			showGitCard(username);
		} else {
			$("#username").addClass('error');
		}

		// if(stackOverflowId != '' && $.trim(stackOverflowId) != '') {
		// 	showStackOverflowCard(stackOverflowId);
		// } else {
		// 	$("#stackOverflowId").addClass('error');
		// }
		return false;
	});
});

// function showStackOverflowCard(stackOverflowId) {
// 	$.ajax("http://api.stackexchange.com/2.2/users/"+stackOverflowId+"/?site=stackoverflow", {
// 		success: function(data) {
			
// 			var cardHtml = "<div class='github-card'>";
// 			cardHtml += '<article class="user">'+
// 			'<dl class="user-data"><a class="top-section" href="'+data.items[0].link+'">' + 
// 				'<dt>Avatar:</dt>' + 
// 				'<dd class="user-avatar">' + 
// 					'<img src="'+data.items[0].profile_image+'">' + 
// 				'</dd>' + 
// 				'<dt>Fullname:</dt>' + 
// 				'<dd class="user-name">'+data.items[0].display_name+'</dd>' + 
// 			'</a></dl>' + 
// 			'<dl class="additional-data">' + 
// 				'<dt>Reputation:</dt>' + 
// 				'<dd class="user-reputation">' + ((data.items[0].reputation != null) ? data.items[0].reputation : "") + '</dd>' + 
// 			'</dl>' + 
// 			'<dl class="user-stats">' + 
// 				'<dt>Bronze</dt>' + 
// 				'<dd class="user-repos bronze" data-stats="Bronze">'+data.items[0].badge_counts.bronze+'</dd>' + 
// 				'<dt>Silver</dt>' + 
// 				'<dd class="user-followers silver" data-stats="Silver">'+data.items[0].badge_counts.silver+'</dd>' +
// 				'<dt>Gold</dt>' + 
// 				'<dd class="user-following gold" data-stats="Gold">'+data.items[0].badge_counts.gold+'</dd>' +
// 			'</dl>' +
// 			'</article>';
// 			$(".stackCard").html(cardHtml);
// 		}
// 	});
// }

function showGitCard(username){
	$.ajax("https://api.github.com/users/" + username, {
		success: function(data) {
			var hireableHtml = '<div class="footer"><a class="hireLink" href="javascript:void(0);">Not available for hire.</a>';
			if(data.hireable) {
				hireableHtml = '<div class="footer"><a class="hireLink" href="mailto:'+data.email+'" target="_top">Available for hire.</a>';
			}

			hireableHtml += '<a class="followButton" href="'+data.html_url+'">Follow</a></div>';

			var cardHtml = "<div class='github-card'>";
			cardHtml += '<article class="user">'+
			'<dl class="user-data"><a class="top-section" href="'+data.html_url+'">' + 
				'<dt>Avatar:</dt>' + 
				'<dd class="user-avatar">' + 
					'<img src="'+data.avatar_url+'">' + 
				'</dd>' + 
				'<dt>Fullname:</dt>' + 
				'<dd class="user-name">'+data.name+'</dd>' + 
				'<dt>Account:</dt>' + 
				'<dd class="user-account">@'+data.login+'</dd>' + 
			'</a></dl>' + 
			'<dl class="additional-data">' + 
				'<dt>Location:</dt>' + 
				'<dd class="user-location">' + ((data.location != null) ? data.location : "") + '</dd>' + 
				'<dt>Blog:</dt>' + 
				'<dd class="user-blog"><a href="'+((data.blog != null) ? data.blog : "#")+'">'+((data.blog != null) ? data.blog : "-")+'</a></dd>' + 
				'<dt>Company:</dt>' + 
				'<dd class="user-company">'+((data.company != null) ? data.company : "")+'</dd>' + 
			'</dl>' + 
			'<dl class="user-stats">' + 
				'<dt>Repos</dt>' + 
				'<a href="'+data.repos_url+'" target="_BLANK"><dd class="user-repos" data-stats="repos">'+data.public_repos+'</dd></a>' + 
				'<dt>Followers</dt>' + 
				'<a href="'+data.followers_url+'" target="_BLANK"><dd class="user-followers" data-stats="followers">'+data.followers+'</dd></a>' +
				'<dt>Following</dt>' + 
				'<a href="'+data.html_url+'?tab=following" target="_BLANK"><dd class="user-following" data-stats="following">'+data.following+'</dd></a>' +
			'</dl>' + hireableHtml +
			'</article>';
			$(".showCard").html(cardHtml);
			if($(".user-name").text().length > 17) {
				$(".user-name").css('font-size', '20px');
			}
			$(".user").css('transition')
		}
   	});
}