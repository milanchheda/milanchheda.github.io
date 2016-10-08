var teamsArray = [];
var playersArray = [];


$(document).ready(function(){
  $("#playersWithCards,#dreamTeam,#injuredPlayers,#unavailablePlayers").click(function(){
    
    if($(this).hasClass('active')) {
      $(this).removeClass('active');  
    } else {
      $(this).addClass('active');
    }
    if($(".active").length == 2) {
      $(".active").removeClass('active');
      $(this).addClass('active');
    }
    getValuesAndShowData();
    return false;
  });

  $("#teamOptions").append(new Option('All teams', 0));
  $.getJSON('teams.json', function(teamsJson){
      $.each(teamsJson, function(k, v){
          teamsArray[v.id] = v.name;
          $("#teamOptions").append(new Option(v.name, v.id));
      });
  });

  var roles = [];
  roles[1] = 'GKP'
  roles[2] = 'DEF'
  roles[3] = 'MID'
  roles[4] = 'FWD';
  $("#positionOptions").append(new Option('All positions', 0));
  $.each(roles, function(k, v){
    if($.trim(v) != '')
      $("#positionOptions").append(new Option(v, v));
  });

  $("#teamOptions,#positionOptions").change(function(){
    getValuesAndShowData();
  });

	$.getJSON('https://fantasy.premierleague.com/drf/elements', function(json) {
    var rowHtml = "<table class='eplFantasyTable sortable' id='eplTable'><thead><tr>" +
      "<th title='Player name'>Name</th>" +
      "<th title='players club name'>Team</th>" +
      "<th title='Position'>Pos</th>" +
      "<th title='Total points by this player in EPL fantays'>Total points</th>" +
      "<th title='Players current value/cost'>Value</th>" +
      "<th title='Goals scored'>GS</th>" +
      "<th title='Goals conceded'>GC</th>" +
      "<th title='Own goals'>OG</th>" +
      "<th title='Clean sheets'>CS</th>" +
      "<th title='Total assists'>Assists</th>" +
      "<th title='Gameweek points'>GW points</th>" +
      "<th title='Red cards'>RC</th>" +
      "<th title='Yellow cards'>YC</th>" +
      "<th title='Penalties missed'>PM</th>" +
      "<th title='Penalties saved'>PS</th>" +
      "<th title='Dream team appearances'>DA</th>" +
      "<th title='Minutes played'>Mins</th>" +
      "<th title='Players selected by how many users'>Selected by %</th>" +
      "<th title='News about this player'>News</th>" +
    '</tr></thead><tbody>';

		$.each(json, function(k, v) {
      var cardPlayers = '';
      var unavailable = '';
      var injured = '';
      if(v.red_cards > 0 || v.yellow_cards > 0)
        cardPlayers = 'cardPlayers';
      if(v.status == 'u')
        unavailable = 'unavailable';
      if(v.status == 'i')
        injured = 'injured';
      rowHtml += "<tr class='"+v.team+" "+v.in_dreamteam+" "+cardPlayers+" "+unavailable+" "+injured+" "+roles[v.element_type]+"'>" +
                "<td>"+ v.web_name + "</td>" + 
                "<td>"+ teamsArray[v.team] + "</td>" + 
                "<td>"+ roles[v.element_type] + "</td>" + 
                "<td>"+ v.total_points + "</td>" + 
                "<td>"+ v.value_season + "</td>" + 
                "<td>"+ v.goals_scored + "</td>" + 
                "<td>"+ v.goals_conceded + "</td>" + 
                "<td>"+ v.own_goals + "</td>" + 
                "<td>"+ v.clean_sheets + "</td>" + 
                "<td>"+ v.assists + "</td>" + 
                "<td>"+ v.event_points + "</td>" + 
                "<td>"+ v.red_cards + "</td>" + 
                "<td>"+ v.yellow_cards + "</td>" + 
                "<td>"+ v.penalties_missed + "</td>" + 
                "<td>"+ v.penalties_saved + "</td>" +
                "<td>"+ v.dreamteam_count + "</td>" +
                "<td>"+ v.minutes + "</td>" +
                "<td>"+ v.selected_by_percent + "</td>" +
                "<td>"+ v.news + "</td>" +
                "</tr>";
    });
    rowHtml += "</tbody></table>";
    $(".container").html(rowHtml);
    sorttable.makeSortable(document.getElementById('eplTable'));
	});
});

function getValuesAndShowData() {
  var teamOptions;
  var findClass = '';
  if($("#teamOptions").val() != 0){
    teamOptions = $("#teamOptions").val();
    findClass += "." + teamOptions;
  }
  var positionOptions = '';
  if($("#positionOptions").val() != 0) {
    positionOptions = $("#positionOptions").val();
    findClass += "." + positionOptions;
  }

  switch($('.active').attr('id')) {
    case 'playersWithCards':
      findClass += ".cardPlayers";
      break;
    case 'dreamTeam':
      findClass += ".true";
      break;
    case 'injuredPlayers':
      findClass += ".injured";
      break;
    case 'unavailablePlayers':
      findClass += ".unavailable";
      break;
  }
  var rows = $('table.eplFantasyTable tbody tr');
  if($.trim(findClass) == '') {
    rows.show();
  } else {
    rows.hide();
    rows.filter(findClass).show();
  }
}