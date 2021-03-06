var app = angular.module('myApp', []);

app.controller('MainCtrl', function($scope) {


    angular.element(document).ready(function () {
        $('#statTable').DataTable({
          bPaginate: false,
          bAutoWidth: false,
        });
    });

    $scope.getUserImageURL = function() {
        return "img/userimages/" + $scope.selectedUser.image;
    }


  $scope.players = [
      {
          "id":1,
          "name": "sadie",
          "image": "user_sadie.jpg",
      },
      {
          "id":2,
          "name": "ashley",
          "image": "user_ashley.jpg",
      },
      {
          "id":3,
          "name": "shakes",
          "image": "user_shakes.jpg",
      },
      {
          "id":4,
          "name": "butts",
          "image": "user_butts.jpg",
      },
      {
          "id":5,
          "name": "stevie",
          "image": "user_stevie.jpg",
      },
      {
          "id":6,
          "name": "champ",
          "image": "user_champ.jpg",
      },
      {
          "id":8,
          "name": "tots",
          "image": "user_tots.jpg",
      },
      {
          "id":9,
          "name": "janine",
          "image": "user_janine.jpg",
      },
      {
          "id":10,
          "name": "kristen",
          "image": "user_kristen.jpg",
      },
      {
          "id":11,
          "name": "t-lo",
          "image": "user_tlo.jpg",
      },
      {
          "id":12,
          "name": "zeus",
          "image": "user_zeus.jpg",
      },
      {
          "id":13,
          "name": "sam",
          "image": "user_sam.jpg",
      },
      {
          "id":14,
          "name": "tz",
          "image": "user_tz.jpg",
      },
      {
          "id":15,
          "name": "brittany",
          "image": "user_brittany.jpg",
      },
      {
          "id":16,
          "name": "jules",
          "image": "user_jules.jpg",
      },
      {
          "id":18,
          "name": "harley",
          "image": "user_harley.jpg",
      },
      {
          "id":20,
          "name": "sophie",
          "image": "user_sophie.jpg",
      },
      {
          "id":21,
          "name": "dani",
          "image": "user_dani.jpg",
      },
      {
          "id":22,
          "name": "talia",
          "image": "user_talia.jpg",
      },
      {
          "id":27,
          "name": "bailey",
          "image": "user_bailey.jpg",
      },
      {
          "id":28,
          "name": "monty",
          "image": "user_monty.jpg",
      },
      {
          "id":30,
          "name": "jodi",
          "image": "user_jodi.jpg",
      },
      {
          "id":31,
          "name": "sara scott",
          "image": "user_sarascott.jpg",
      },
      {
          "id":37,
          "name": "hank",
          "image": "user_hank.jpg",
      },
      {
          "id":77,
          "name": "amanda",
          "image": "user_amanda.jpg",
      },
  ];



  $scope.selectedSubSheet = $scope.subsheet_CHC2016_HEIST;

  $scope.totalPointsInSubsheet = function() {

      return 6;

  }

  $scope.getAllStatsForTournamentID = function(tourneyID) {
      var returnStats = Array();
      for (var tournament of $scope.allStats){
          if (tournament.id == tourneyID){
              angular.forEach(tournament.games, function(gamestats, gameID) {
                  returnStats.push(gamestats);
              });
          }
      }

      return returnStats;
  };

  $scope.getPlayerStatsTotals = function(player_id, statType) {
      var num = 0;
      num = num + $scope.getPlayerStatsForGame($scope.playerstats_NAT2016_WILDFIRE, player_id, statType);
      num = num + $scope.getPlayerStatsForGame($scope.playerstats_NAT2016_BRUTE, player_id, statType);
       num = num + $scope.getPlayerStatsForGame($scope.playerstats_NAT2016_SHOWDOWN, player_id, statType);
       num = num + $scope.getPlayerStatsForGame($scope.playerstats_NAT2016_TRAFFIC, player_id, statType);
       num = num + $scope.getPlayerStatsForGame($scope.playerstats_NAT2016_GMG, player_id, statType);
       num = num + $scope.getPlayerStatsForGame($scope.playerstats_NAT2016_HEIST, player_id, statType);
       num = num + $scope.getPlayerStatsForGame($scope.playerstats_NAT2016_PHOENIX, player_id, statType);
      /*num = num + $scope.getPlayerStatsForGame($scope.playerstats_SFI2016_ELEVATE, player_id, statType);
       num = num + $scope.getPlayerStatsForGame($scope.playerstats_SFI2016_SNAP, player_id, statType);
        num = num + $scope.getPlayerStatsForGame($scope.playerstats_SFI2016_ENCORE, player_id, statType);*/
      /*num = num + $scope.getPlayerStatsForGame($scope.playerstats_CHC2016_JW, player_id, statType);
       num = num + $scope.getPlayerStatsForGame($scope.playerstats_CHC2016_DISH, player_id, statType);
       num = num + $scope.getPlayerStatsForGame($scope.playerstats_CHC2016_SIEGE, player_id, statType);
       num = num + $scope.getPlayerStatsForGame($scope.playerstats_CHC2016_PPF, player_id, statType);
       num = num + $scope.getPlayerStatsForGame($scope.playerstats_CHC2016_CLE, player_id, statType);
       num = num + $scope.getPlayerStatsForGame($scope.playerstats_CHC2016_HEIST, player_id, statType);*/
      /* num = num + $scope.getPlayerStatsForGame($scope.playerstats_ESC2016_GMG, player_id, statType);
        num = num + $scope.getPlayerStatsForGame($scope.playerstats_ESC2016_GMG, player_id, statType);
        num = num + $scope.getPlayerStatsForGame($scope.playerstats_ESC2016_SB, player_id, statType);
        num = num + $scope.getPlayerStatsForGame($scope.playerstats_ESC2016_OZONE, player_id, statType);
        num = num + $scope.getPlayerStatsForGame($scope.playerstats_ESC2016_HEIST, player_id, statType);
        num = num + $scope.getPlayerStatsForGame($scope.playerstats_ESC2016_NEMESIS, player_id, statType);
        num = num + $scope.getPlayerStatsForGame($scope.playerstats_ESC2016_HM, player_id, statType);*/
      return num;

  };

  $scope.generateStatSheet = function() {

      //console.log($scope.totalPointsInGame($scope.playerstats_CHC2016_JW));
     totalPoints = $scope.totalPointsInGame($scope.playerstats_CHC2016_JW);
     console.log(totalPoints);
     var game = Array();

     for (var i = 0; i < totalPoints; i++){
         game.push($scope.playersOnPoint($scope.playerstats_CHC2016_JW,i))
     }

     return game;

 };

 $scope.playersOnPoint = function(gameStats, pointNum) {
     var players = Array();

     for (statline of gameStats){
         statsString = statline.stats_string;
         statsStringSplit = statline.stats_string.split("_");
         console.log(statsStringSplit);

         for (point of statsStringSplit){
             point = point.replace("T","");
             point = point.replace("D","");
             point = point.replace("A","");
             point = point.replace("S","");
             point = point.replace("C","");
             point = point.replace(/\*/g,"")
             if (parseInt(point) == pointNum) {
                 players.push(statline.player_id);
             }
         }
     }

     return players;
 }

  $scope.totalPointsInGame = function(gameStats){
      var totalPoints = 0;

      for (statline of gameStats){
          statsString = statline.stats_string;
          statsStringSplit = statline.stats_string.split("_");
          console.log(statsStringSplit);

          for (point of statsStringSplit){
              point = point.replace("T","");
              point = point.replace("D","");
              point = point.replace("A","");
              point = point.replace("S","");
              point = point.replace("C","");
              point = point.replace(/\*/g,"")
              if (parseInt(point) > totalPoints) {
                  console.log(point + ">" + totalPoints);
                  totalPoints = parseInt(point);
              }
          }
      }

      return totalPoints;

  };

  $scope.getPlayerPointTotalFromSubSheets = function(player_id) {
      var num = 0;
      angular.forEach($scope.subsheet_CHC2016_JW.points, function(points, pointnum) {
          if (points.players.indexOf(player_id) >= 0){
            num++;
          }
      });
      angular.forEach($scope.subsheet_CHC2016_DISH.points, function(points, pointnum) {
          if (points.players.indexOf(player_id) >= 0){
            num++;
          }
      });
      angular.forEach($scope.subsheet_CHC2016_SIEGE.points, function(points, pointnum) {
          if (points.players.indexOf(player_id) >= 0){
            num++;
          }
      });
      angular.forEach($scope.subsheet_CHC2016_PPF.points, function(points, pointnum) {
          if (points.players.indexOf(player_id) >= 0){
            num++;
          }
      });
      angular.forEach($scope.subsheet_CHC2016_CLE.points, function(points, pointnum) {
          if (points.players.indexOf(player_id) >= 0){
            num++;
          }
      });
      angular.forEach($scope.subsheet_CHC2016_HEIST.points, function(points, pointnum) {
          if (points.players.indexOf(player_id) >= 0){
            num++;
          }
      });
      //get points of other game through stat sheet instead of sub sheet

      return num;
  };

  $scope.getPlayerStatsForGame = function (gameStats, player_id, statType) {
      var statsStringSplit = Array();
      var statsString = "";
      for (statline of gameStats){
          if (statline.player_id == player_id) {
              statsString = statline.stats_string;
              if (statsString == ""){
                  statsStringSplit = [];
              }
              else {
                  statsStringSplit =  statline.stats_string.split("_");
              }

          }
      }

      if (statType == "pointsPlayed") {
          return statsStringSplit.length;
      }
      else if (statType == "turns") {
          return $scope.countSymbolInString(statsString, "T");
      }
      else if (statType == "scores") {
          return $scope.countSymbolInString(statsString, "S");
      }
      else if (statType == "assists") {
          return $scope.countSymbolInString(statsString, "A");
      }
      else if (statType == "touches") {
          return $scope.countSymbolInString(statsString.replace(/\*/g,"u"), "u");
      }
      else if (statType == "ds") {
          return $scope.countSymbolInString(statsString, "D");
      }
      else if (statType == "calahans") {
          return $scope.countSymbolInString(statsString, "C");
      }


      return "";

  };

  $scope.countSymbolInString = function(str, symbol) {
      var re = new RegExp(symbol, 'g');
      if (str.match(re)) {
          return str.match(re).length;
      }
      else {
            return 0;
      }
  }


  // NATIONALS 2016 DATA

  $scope.playerstats_NAT2016_WILDFIRE = [
      { "player_id": 27, "stats_string": ""},
      { "player_id": 21, "stats_string": "2_6_8_12**_13*_16*_18_22*T_26*"},
      { "player_id": 37, "stats_string": "1*TD****_3_5_7***A_9_11**_13*S_15*_17*_19*TD*T_21*_23**_27*T**"},
      { "player_id": 18, "stats_string": "1*T*_3***_5*_7**_9*_11**_13_15**_17_18_19*T**_20*D******T_21**A_23_25*_27**D*_28***"},
      { "player_id": 9, "stats_string": "4**_14_24***"},
      { "player_id": 30, "stats_string": "1*_3**_7S_9_11*A_15**_17_19*T_20*T_23_25D*A_27"},
      { "player_id": 3, "stats_string": "6"},
      { "player_id": 5, "stats_string": "2**_4*****_6_8*T_10*T*T_16***_22_25**"},
      { "player_id": 22, "stats_string": "5**A_10**T_12*_14_16***T_20******T_21**_24****A_26_28*******"},
      { "player_id": 11, "stats_string": "2**T_4*T***T_8_10*_12*_14*_18*T_22*T_24*_26*_28******T*"},
      { "player_id": 77, "stats_string": ""},
      { "player_id": 2, "stats_string": ""},
      { "player_id": 15, "stats_string": "4**_10_12*A_16**_22_25*"},
      { "player_id": 4, "stats_string": ""},
      { "player_id": 6, "stats_string": "2_6_14_18_24_26"},
      { "player_id": 16, "stats_string": ""},
      { "player_id": 10, "stats_string": "2_3*_5*_8_10*_14*_16_18_20****_22_24**S_25**_28S"},
      { "player_id": 28, "stats_string": ""},
      { "player_id": 1, "stats_string": "2_4*T*_6_8_10D*_12*S_14*T_16*T**_22_24****_26*T"},
      { "player_id": 31, "stats_string": "1*TS_3*A_5*S_6_7_9*A_11*_12*_13_15*A_17_18_19*_20*T*_21_23*TS_25_27TT*T*T_28****A"},
      { "player_id": 20, "stats_string": "1*T*_3S_5_7_8_9_11*_13*A_14_15*T_17S_19_20*_21*S_23*A_26_27_28"},
      { "player_id": 8, "stats_string": "1**A_5_7_9*S_11_15*_17*A_19D_21_23_27"},
      { "player_id": 14, "stats_string": "2_4**T_6_8_10_12_13_16*_18_22_24***_26D"},
      { "player_id": 12, "stats_string": "1_3_4*_7_9_11S_13_15S_17_19_20_21_23_25T*S_27D*_28"},
  ];

  $scope.subsheet_NAT2016_WILDFIRE = {
      "gameid": "1",
      "opponent": "WILDFIRE",
      "gameto": 15,
      "score_us": 15,
      "score_them": 13,
      "startedon": "o",
      "points":{
        "1": {"scoredby":"us", "players": [37,18,30,31,20,12,8]},
        "2": {"scoredby":"them", "players": [11,5,21,10,14,1,6]},
        "3": {"scoredby":"us", "players": [37,18,30,31,20,12,10]},
        "4": {"scoredby":"them", "players": [11,9,5,12,14,1,15]},
        "5": {"scoredby":"us", "players": [37,18,22,31,20,10,8]},
        "6": {"scoredby":"them", "players": [5,21,3,31,14,1,6]},
        "7": {"scoredby":"us", "players": [37,18,30,31,20,12,8]},
        "8": {"scoredby":"them", "players": [11,5,21,20,10,14,1]},
        "9": {"scoredby":"us", "players": [37,18,30,31,20,12,8]},
        "10": {"scoredby":"them", "players": [11,22,5,10,14,1,15]},
        "11": {"scoredby":"us", "players": [37,18,30,31,20,12,8]},
        "12": {"scoredby":"us", "players": [11,22,21,31,14,1,15]},
        "13": {"scoredby":"us", "players": [37,18,21,31,20,12,14]},
        "14": {"scoredby":"them", "players": [11,9,22,20,10,1,6]},
        "15": {"scoredby":"us", "players": [37,18,30,31,20,12,8]},
        "16": {"scoredby":"them", "players": [22,5,21,10,14,1,15]},
        "17": {"scoredby":"us", "players": [37,18,30,31,20,12,8]},
        "18": {"scoredby":"them", "players": [18,11,21,31,10,14,6]},
        "19": {"scoredby":"them", "players": [37,18,30,31,20,12,8]},
        "20": {"scoredby":"them", "players": [18,22,30,31,20,12,10]},
        "21": {"scoredby":"us", "players": [37,18,22,31,20,12,8]},
        "22": {"scoredby":"them", "players": [11,5,21,10,14,1,15]},
        "23": {"scoredby":"us", "players": [37,18,30,31,20,12,8]},
        "24": {"scoredby":"us", "players": [11,9,22,10,14,1,6]},
        "25": {"scoredby":"us", "players": [18,30,5,31,12,10,15]},
        "26": {"scoredby":"them", "players": [11,22,21,20,14,1,15]},
        "27": {"scoredby":"them", "players": [37,18,30,31,20,12,8]},
        "28": {"scoredby":"us", "players": [18,11,22,31,20,12,10]},
      }
  };

  $scope.playerstats_NAT2016_BRUTE = [
      { "player_id": 27, "stats_string": "8*_11_13_17*_19A"},
      { "player_id": 21, "stats_string": "1*T_4_9_12*T_14_16*T_18**T**"},
      { "player_id": 37, "stats_string": "2****_6*T**A_8_10T**_15**"},
      { "player_id": 18, "stats_string": "2*T_3_6*D*T_7*_11*T_15**_19*"},
      { "player_id": 9, "stats_string": "4_7*****T_10*_13***T_17*T_20*"},
      { "player_id": 30, "stats_string": "2_6_9_11D*T_15*_19*"},
      { "player_id": 3, "stats_string": "4_12_16_18*D_20"},
      { "player_id": 5, "stats_string": "1*T_5*T**T_10*T_14_17*"},
      { "player_id": 22, "stats_string": "3*_5**_8**_13****_16*T*_20**T"},
      { "player_id": 11, "stats_string": "1_3*_5**T*_9*_12*_14T_18****T"},
      { "player_id": 77, "stats_string": "14_18*T"},
      { "player_id": 2, "stats_string": "11_16"},
      { "player_id": 15, "stats_string": "3_4_6_8_19*"},
      { "player_id": 4, "stats_string": "12_19S"},
      { "player_id": 6, "stats_string": "1_4_9_12T"},
      { "player_id": 16, "stats_string": "13D_17"},
      { "player_id": 10, "stats_string": "1_3_6D*_7*_9_11_13**_17**"},
      { "player_id": 28, "stats_string": "10_15_20"},
      { "player_id": 1, "stats_string": "1_4_8D_10**T_16*_18*"},
      { "player_id": 31, "stats_string": "2**T_3*A_5D_6*S_7*_9*T_11_13TD**T*A_15_17_19*"},
      { "player_id": 20, "stats_string": "2*T_3S_5*T_6*T*_7*T_10*D*_12_16_18***T_20"},
      { "player_id": 8, "stats_string": "2*D_5*_8_9_11_15S_17_19"},
      { "player_id": 14, "stats_string": "1_4_7**_10*_13***S_16_20"},
      { "player_id": 12, "stats_string": "2*_5_7**_8*T*T_12*_14_15*A_18*_20"},
  ];


  $scope.subsheet_NAT2016_BRUTE = {
      "gameid": "2",
      "opponent": "BRUTE",
      "gameto": 15,
      "score_us": 5,
      "score_them": 15,
      "startedon": "d",
      "points":{
        "1": {"scoredby":"them", "players": [11,5,21,10,14,1,6]},
        "2": {"scoredby":"them", "players": [37,18,30,31,20,12,8]},
        "3": {"scoredby":"us", "players": [18,11,22,31,20,10,15]},
        "4": {"scoredby":"them", "players": [9,21,3,14,1,15,6]},
        "5": {"scoredby":"them", "players": [11,22,5,31,20,12,8]},
        "6": {"scoredby":"us", "players": [37,18,30,31,20,10,15]},
        "7": {"scoredby":"them", "players": [18,9,31,20,12,10,14]},
        "8": {"scoredby":"them", "players": [37,22,27,12,8,1,15]},
        "9": {"scoredby":"them", "players": [11,30,21,31,10,8,6]},
        "10": {"scoredby":"them", "players": [37,9,5,20,14,1,28]},
        "11": {"scoredby":"them", "players": [18,30,27,31,10,8,2]},
        "12": {"scoredby":"them", "players": [11,21,3,20,12,6,4]},
        "13": {"scoredby":"us", "players": [9,22,27,31,10,14,16]},
        "14": {"scoredby":"them", "players": [11,5,21,20,12,15,77]},
        "15": {"scoredby":"us", "players": [37,18,30,31,12,8,28]},
        "16": {"scoredby":"them", "players": [22,21,3,20,14,1,2]},
        "17": {"scoredby":"them", "players": [9,5,27,31,10,8,16]},
        "18": {"scoredby":"them", "players": [11,21,3,20,12,1,77]},
        "19": {"scoredby":"us", "players": [18,30,27,31,8,15,4]},
        "20": {"scoredby":"them", "players": [9,22,3,20,12,14,28]},
      }
  };

  $scope.playerstats_NAT2016_SHOWDOWN = [
      { "player_id": 27, "stats_string": ""},
      { "player_id": 21, "stats_string": "4_6**_10S_14_18_22"},
      { "player_id": 37, "stats_string": "1****T_3**A_5*T**_8*_9**T**T*T*S_12***_15*T***A_17**A_19*T*T*T_23****_25"},
      { "player_id": 18, "stats_string": "1***D_3*_5*D*_7_8***_11*_13*_15*_17*_19S_21***_23*T**_25*_26*_27**"},
      { "player_id": 9, "stats_string": "2_6**_10**_13_16_20D*_22"},
      { "player_id": 30, "stats_string": "1S_3S_7_9*D*T_13_14_18_19*_21***_23**TD_25_26*_27"},
      { "player_id": 3, "stats_string": "11"},
      { "player_id": 5, "stats_string": "4_7_11*_14*T_16_20_24*T"},
      { "player_id": 22, "stats_string": "2_5_9****A_12***D**D**_15*_17_20*T_21***_24_26**_27*"},
      { "player_id": 11, "stats_string": "2_4_6*_8****T_10_12*****T*_16_18*T_22_24*T**T"},
      { "player_id": 77, "stats_string": ""},
      { "player_id": 2, "stats_string": ""},
      { "player_id": 15, "stats_string": "3_6*A_10_13_16_22"},
      { "player_id": 4, "stats_string": ""},
      { "player_id": 6, "stats_string": "2_4_7_10*_16_18D"},
      { "player_id": 16, "stats_string": ""},
      { "player_id": 10, "stats_string": "1**T_4_6*_9_12*T***_14_15_18_20_21*_24D_25"},
      { "player_id": 28, "stats_string": ""},
      { "player_id": 1, "stats_string": "2_4D*T_6_10*A_11_14_16_18_20_22_24"},
      { "player_id": 31, "stats_string": "1*T*_3_5*_6S_7_8*_9*_11*_12*T**T*13S_15_17_19**_20_21_23*T*AS_24D*D_26*A_27*A"},
      { "player_id": 20, "stats_string": "1*T*TD*A_3*_5**A_7_8**_9_12D*D*TD**_14_15_17*_19*_21*A_22_23_25T_26S_27S"},
      { "player_id": 8, "stats_string": "2_5*_8_9*D*_12*T**_17*S_19_23**"},
      { "player_id": 14, "stats_string": "2_4_6_10*_11*T_13*A_14_16_18_20_22_24D_25*_26*_27"},
      { "player_id": 12, "stats_string": "1*_3*_5_7_8*_9_11_13_15S_17_19*A_21*S_23_25_26_27"},
  ];


  $scope.subsheet_NAT2016_SHOWDOWN = {
      "gameid": "3",
      "opponent": "SHOWDOWN",
      "gameto": 15,
      "score_us": 14,
      "score_them": 13,
      "startedon": "o",
      "points":{
        "1": {"scoredby":"us", "players": [37,18,30,31,20,12,10]},
        "2": {"scoredby":"them", "players": [11,9,22,8,14,1,6]},
        "3": {"scoredby":"us", "players": [37,18,30,31,20,12,15]},
        "4": {"scoredby":"them", "players": [11,5,21,10,14,1,6]},
        "5": {"scoredby":"us", "players": [37,18,22,31,20,12,8]},
        "6": {"scoredby":"us", "players": [11,9,21,10,14,1,15]},
        "7": {"scoredby":"them", "players": [18,30,5,31,20,12,6]},
        "8": {"scoredby":"them", "players": [37,18,11,31,20,12,8]},
        "9": {"scoredby":"us", "players": [37,22,30,31,20,10,8]},
        "10": {"scoredby":"us", "players": [11,9,21,14,1,15,6]},
        "11": {"scoredby":"them", "players": [18,5,3,31,12,14,1]},
        "12": {"scoredby":"them", "players": [37,11,22,31,20,10,8]},
        "13": {"scoredby":"us", "players": [18,9,30,31,12,14,15]},
        "14": {"scoredby":"them", "players": [30,5,21,20,10,14,1]},
        "15": {"scoredby":"us", "players": [37,18,22,31,20,12,10]},
        "16": {"scoredby":"them", "players": [11,9,5,14,1,15,6]},
        "17": {"scoredby":"us", "players": [37,18,22,31,20,12,8]},
        "18": {"scoredby":"them", "players": [11,30,21,10,14,1,6]},
        "19": {"scoredby":"us", "players": [37,18,30,31,20,12,8]},
        "20": {"scoredby":"them", "players": [9,22,5,31,10,14,1]},
        "21": {"scoredby":"us", "players": [18,22,30,31,20,12,10]},
        "22": {"scoredby":"them", "players": [11,9,21,20,14,1,15]},
        "23": {"scoredby":"us", "players": [37,18,30,31,20,12,8]},
        "24": {"scoredby":"them", "players": [11,22,5,31,10,14,1]},
        "25": {"scoredby":"them", "players": [37,18,30,20,12,10,1]},
        "26": {"scoredby":"us", "players": [18,22,30,31,20,12,14]},
        "27": {"scoredby":"us", "players": [18,22,30,31,20,12,14]}, // line not written, same as above?
      }
  };

  $scope.playerstats_NAT2016_TRAFFIC = [
      { "player_id": 27, "stats_string": ""},
      { "player_id": 21, "stats_string": "5*T*_9**T_11_16***_19_23_25*"},
      { "player_id": 37, "stats_string": "1*_3*T_7**T_9**T_11*_13*_16*_18*A_20*_22_24**A_26"},
      { "player_id": 18, "stats_string": "1_2_4***_7*_8**_10****D**TD*T_13_14*_16S_18S_20_22_24**S_26"},
      { "player_id": 9, "stats_string": "3_6T_12_17_22*T"},
      { "player_id": 30, "stats_string": "3_5****A_7_10***_13*_15*T_18_20*_21_25*"},
      { "player_id": 3, "stats_string": ""},
      { "player_id": 5, "stats_string": "5_9_12_17_23_25"},
      { "player_id": 22, "stats_string": "2_4******_6D*_8**_10*_12_14*_15****_19_21*T_24***_26"},
      { "player_id": 11, "stats_string": "1S_2*_4***T***_6*T**T_8***_10**T*T******_14**_15******_17_19_21*D*_23**"},
      { "player_id": 77, "stats_string": ""},
      { "player_id": 2, "stats_string": ""},
      { "player_id": 15, "stats_string": "6_11S_12_16*"},
      { "player_id": 4, "stats_string": ""},
      { "player_id": 6, "stats_string": "5*T_9*_12_16_23"},
      { "player_id": 16, "stats_string": ""},
      { "player_id": 10, "stats_string": "3_4**D**A_6*_7*_9*_11_13_14*_15**_18_21_22_24**"},
      { "player_id": 28, "stats_string": ""},
      { "player_id": 1, "stats_string": "1*A_2_5_9_12_16D*_17_19_23*_25*A_26"},
      { "player_id": 31, "stats_string": "1_2*A_3_5D*T*_7_8**A_10****_11_13*T_14*T_15*****A_18_19_20_21_22_24*T_25S_26"},
      { "player_id": 20, "stats_string": "1_2S_4**S_6*_7_8**S_10*DT*_13*_14_15*S_17_18_19_20_21*T_23_25*_26"},
      { "player_id": 8, "stats_string": "4**_7_8_10**_14*_17_20T_22_24*"},
      { "player_id": 14, "stats_string": "1_2_3_5*D*S_9_11*A_12_16*A_17_19_22_23*_25*_26"},
      { "player_id": 12, "stats_string": "3_4*_6_8_10***T**T_13T_15*TD*_18_20_21_24"},
  ];


  $scope.subsheet_NAT2016_TRAFFIC = {
      "gameid": "4",
      "opponent": "TRAFFIC",
      "gameto": 15,
      "score_us": 11,
      "score_them": 15,
      "startedon": "d",
      "points":{
        "1": {"scoredby":"us", "players": [37,18,11,31,20,14,1]},
        "2": {"scoredby":"us", "players": [18,11,22,31,20,14,1]},
        "3": {"scoredby":"them", "players": [37,9,30,31,12,10,14]},
        "4": {"scoredby":"us", "players": [18,11,22,20,12,10,8]},
        "5": {"scoredby":"us", "players": [30,5,21,31,14,1,6]},
        "6": {"scoredby":"them", "players": [11,9,22,20,12,10,15]},
        "7": {"scoredby":"them", "players": [37,18,30,31,20,10,8]},
        "8": {"scoredby":"us", "players": [18,11,22,31,20,12,8]},
        "9": {"scoredby":"them", "players": [37,5,21,10,14,1,6]},
        "10": {"scoredby":"them", "players": [18,11,30,31,20,12,8]},
        "11": {"scoredby":"us", "players": [37,22,21,31,10,14,15]},
        "12": {"scoredby":"them", "players": [9,22,5,14,1,15,6]},
        "13": {"scoredby":"them", "players": [37,18,30,31,20,12,10]},
        "14": {"scoredby":"them", "players": [18,11,22,31,20,10,8]},
        "15": {"scoredby":"us", "players": [11,22,30,31,20,12,10]},
        "16": {"scoredby":"us", "players": [37,18,21,14,1,15,6]},
        "17": {"scoredby":"them", "players": [11,9,21,20,8,14,1]},
        "18": {"scoredby":"us", "players": [37,18,30,31,20,12,10]},
        "19": {"scoredby":"them", "players": [11,22,21,31,20,14,1]},
        "20": {"scoredby":"them", "players": [37,18,30,31,20,12,8]},
        "21": {"scoredby":"them", "players": [11,22,30,31,20,12,10]},
        "22": {"scoredby":"them", "players": [37,18,9,31,10,8,14]},
        "23": {"scoredby":"them", "players": [11,5,21,20,14,1,6]},
        "24": {"scoredby":"us", "players": [37,18,22,31,12,10,8]},
        "25": {"scoredby":"us", "players": [30,5,21,31,20,14,1]},
        "26": {"scoredby":"them", "players": [37,18,22,31,20,14,1]},
      }
  };

  $scope.playerstats_NAT2016_GMG = [
      { "player_id": 27, "stats_string": "22"},
      { "player_id": 21, "stats_string": "2_6*_7_12*_16**_20********A"},
      { "player_id": 37, "stats_string": "1*_3****A_5*****_8*D*_11***A_13D*_15***_17_18_19****_21***_23****T*T"},
      { "player_id": 18, "stats_string": "1_3***_5*****_9*_11**_13_15****_17_19***T_20***T**"},
      { "player_id": 9, "stats_string": "4_9***_14_16****S_20D**T**T***_23**T*"},
      { "player_id": 30, "stats_string": "1*TDS_3**T_5***_8**_10_11_15*_18**_20"},
      { "player_id": 3, "stats_string": "10_12*_17_21*D*"},
      { "player_id": 5, "stats_string": "2_4*T_10_14D*_20***_22D*T"},
      { "player_id": 22, "stats_string": "4_6*_7_9***_12**S_13_19**_20*T**_22**T*TD**"},
      { "player_id": 11, "stats_string": "2_6**A_7_8**T**T**T_14***T_16*_18**T_21****_23*TD***T*T**T*T*T"},
      { "player_id": 77, "stats_string": ""},
      { "player_id": 2, "stats_string": "21S"},
      { "player_id": 15, "stats_string": "2_4_6_10_12_14_16***_20*T*S_21T**"},
      { "player_id": 4, "stats_string": "22"},
      { "player_id": 6, "stats_string": "2_4_6_10_12D*_14**T_16*_20*T**_21_22"},
      { "player_id": 16, "stats_string": "20D"},
      { "player_id": 10, "stats_string": "2_4_6S_8*T_10_11*_14**_16*T*_18_19*D*_20DS_23*"},
      { "player_id": 28, "stats_string": ""},
      { "player_id": 1, "stats_string": ""},
      { "player_id": 31, "stats_string": "1*_3_5***A_7_8****D*_9***T_11*_12****_13**A_15**A_17_18*_19*A_20**D***A_22*T"},
      { "player_id": 20, "stats_string": "1*A_3S_5S_7_8***D*T_9*A_11S_13S_15S_17_18_19S_20*T**T**A_23D**"},
      { "player_id": 8, "stats_string": "1*_3_5*_8t_11*_15_17_19**_23*"},
      { "player_id": 14, "stats_string": "2_4_6_7_9*_10_12**A_13_14**_16****A_20*D*_21**_23***"},
      { "player_id": 12, "stats_string": "1_3_5***_7_9*TD*S_13_15_17_18T_20*T*****_22D*T"},
  ];


  $scope.subsheet_NAT2016_GMG = {
      "gameid": "5",
      "opponent": "GMG",
      "gameto": 15,
      "score_us": 14,
      "score_them": 10,
      "startedon": "o",
      "points":{
        "1": {"scoredby":"us", "players": [37,18,30,31,20,12,8]},
        "2": {"scoredby":"them", "players": [11,5,21,10,14,15,6]},
        "3": {"scoredby":"us", "players": [37,18,30,31,20,12,8]},
        "4": {"scoredby":"them", "players": [9,22,5,10,14,15,6]},
        "5": {"scoredby":"us", "players": [37,18,30,31,20,12,8]},
        "6": {"scoredby":"us", "players": [11,22,21,10,14,15,6]},
        "7": {"scoredby":"them", "players": [11,22,21,31,20,12,14]},
        "8": {"scoredby":"them", "players": [37,11,30,31,20,10,8]},
        "9": {"scoredby":"us", "players": [18,9,22,31,20,12,14]},
        "10": {"scoredby":"them", "players": [30,5,3,10,14,15,6]},
        "11": {"scoredby":"us", "players": [37,18,30,31,20,10,8]},
        "12": {"scoredby":"us", "players": [22,21,3,31,14,15,6]},
        "13": {"scoredby":"us", "players": [37,18,22,31,20,12,14]},
        "14": {"scoredby":"them", "players": [11,9,5,10,14,15,6]},
        "15": {"scoredby":"us", "players": [37,18,30,31,20,12,8]},
        "16": {"scoredby":"us", "players": [11,9,21,10,14,15,6]},
        "17": {"scoredby":"them", "players": [37,18,3,31,20,12,8]},
        "18": {"scoredby":"them", "players": [37,11,30,31,20,12,10]},
        "19": {"scoredby":"us", "players": [37,18,22,31,20,10,8]},
        "20": {"scoredby":"us", "players": [9,5,21,12,14,15,6]},
        "21": {"scoredby":"us", "players": [18,22,30,31,20,10,16]},
        "22": {"scoredby":"us", "players": [37,11,27,20,14,15,2]},
        "23": {"scoredby":"them", "players": [22,5,27,31,12,6,4]},
        "24": {"scoredby":"them", "players": [37,11,9,20,10,8,14]},
      }
  };

  $scope.playerstats_NAT2016_HEIST = [
      { "player_id": 27, "stats_string": "13*A_16**_20_22"},
      { "player_id": 21, "stats_string": "3**T**_7***D_13*T**_17_19**_22**"},
      { "player_id": 37, "stats_string": "1**A_4*T_6*_8*T_10***_11*****_13*T*_16***A_18_20*A"},
      { "player_id": 18, "stats_string": "2_4*T_6_8*_10**T_11**T_13*_14**A_16*D**_22**"},
      { "player_id": 9, "stats_string": "3***_7**D*_11**T*T*_15T*T*D*T_21"},
      { "player_id": 30, "stats_string": "1_4_8_10**_14*D_18*_21"},
      { "player_id": 3, "stats_string": "12_15_19_21_23"},
      { "player_id": 5, "stats_string": "1_5_9_12_14**_17_19T_23"},
      { "player_id": 22, "stats_string": "1_5_6_9**t_13_15D****_20*"},
      { "player_id": 11, "stats_string": "1_3***_5*_7**T**T_9*_10*_12_13***_17_18*_23"},
      { "player_id": 77, "stats_string": "15_19"},
      { "player_id": 2, "stats_string": "13_18S_21_23"},
      { "player_id": 15, "stats_string": "3*T_7*T_9_13S_17"},
      { "player_id": 4, "stats_string": "10*_17_21"},
      { "player_id": 6, "stats_string": "1_3_7_9_12_13*_15**T_19_23"},
      { "player_id": 16, "stats_string": "14_20"},
      { "player_id": 10, "stats_string": "2_4_6_8_10*TD*_12_14DD_17_19*T*_22"},
      { "player_id": 28, "stats_string": "12_16*_22"},
      { "player_id": 1, "stats_string": ""},
      { "player_id": 31, "stats_string": "1_2_4_5*T_6*A_8_9_11*A_13**A_14*TS_16*TS_18*_20*_22**A_23"},
      { "player_id": 20, "stats_string": "2*S_4_5_6S_8_10*_11*S_13S*T_16_18*_20S_22*S"},
      { "player_id": 8, "stats_string": "2_4_6_8_11*_13**t*_15_18_21"},
      { "player_id": 14, "stats_string": "1_3*T_5*_7D*_9_12_13_15*_17_19**_21_23"},
      { "player_id": 12, "stats_string": "1_3**T*D_5_7**T_10_11D**_13*_16_20*"},
  ];


  $scope.subsheet_NAT2016_HEIST = {
      "gameid": "6",
      "opponent": "HEIST",
      "gameto": 15,
      "score_us": 10,
      "score_them": 14,
      "startedon": "d",
      "points":{
        "1": {"scoredby":"them", "players": [11,22,5,31,12,14,6]},
        "2": {"scoredby":"us", "players": [37,18,30,31,20,10,8]},
        "3": {"scoredby":"them", "players": [11,9,21,12,14,15,6]},
        "4": {"scoredby":"them", "players": [37,18,30,31,20,10,8]},
        "5": {"scoredby":"them", "players": [11,22,5,31,20,12,14]},
        "6": {"scoredby":"us", "players": [37,18,22,31,20,10,8]},
        "7": {"scoredby":"them", "players": [11,9,21,12,14,15,6]},
        "8": {"scoredby":"them", "players": [37,18,30,31,20,10,8]},
        "9": {"scoredby":"them", "players": [11,22,5,31,14,15,6]},
        "10": {"scoredby":"them", "players": [37,18,30,20,12,10,4]},
        "11": {"scoredby":"us", "players": [37,18,9,31,20,12,8]},
        "12": {"scoredby":"them", "players": [11,5,3,10,14,6,28]},
        "13": {"scoredby":"us", "players": [37,18,22,31,20,8,2]},
        "14": {"scoredby":"us", "players": [11,21,27,12,14,15,6]},
        "15": {"scoredby":"us", "players": [18,30,5,31,20,10,16]},
        "16": {"scoredby":"them", "players": [9,22,3,8,14,6,77]},
        "17": {"scoredby":"us", "players": [37,18,27,31,20,12,28]},
        "18": {"scoredby":"them", "players": [11,5,21,10,14,15,4]},
        "19": {"scoredby":"us", "players": [37,11,30,31,20,8,2]},
        "20": {"scoredby":"them", "players": [5,21,3,10,14,6,77]},
        "21": {"scoredby":"us", "players": [37,22,27,31,20,12,16]},
        "22": {"scoredby":"them", "players": [9,30,3,8,14,15,4]},
        "23": {"scoredby":"us", "players": [18,21,27,31,20,10,28]},
        "24": {"scoredby":"them", "players": [11,5,3,31,14,6,2]},
      }
  };

  $scope.playerstats_NAT2016_PHOENIX = [
      { "player_id": 27, "stats_string": "5***_19***_24"},
      { "player_id": 21, "stats_string": "4_7**_11_15_18_22_25"},
      { "player_id": 37, "stats_string": "1***_3*_5******_7*T****A_9*_10*_12***_14****_17***A_19**_21*****T**_24****_25**********T*"},
      { "player_id": 18, "stats_string": "1*_3*_5***T****A_9*_10*_12**T**_13_14****_17***_19***A_21**D*_24***_25*********D*"},
      { "player_id": 9, "stats_string": "2_6_11_15_20_23**"},
      { "player_id": 30, "stats_string": "1_6_10**_13_14***_17**S_21**S_26*T****T"},
      { "player_id": 3, "stats_string": "4_8*_20_25"},
      { "player_id": 5, "stats_string": "2_8****_13_16_18_22_25"},
      { "player_id": 22, "stats_string": "3***A_7S_9_12***T**_16_18_23**"},
      { "player_id": 11, "stats_string": "2_4_6_8**T**T***T_11_!5_16_20_22_23***"},
      { "player_id": 77, "stats_string": "6_20"},
      { "player_id": 2, "stats_string": "4_15_22"},
      { "player_id": 15, "stats_string": "2_6_9*T_12_15_16_18_23"},
      { "player_id": 4, "stats_string": "4_16_24S"},
      { "player_id": 6, "stats_string": "2_4_6_8*_11_13_15_18_20_25"},
      { "player_id": 16, "stats_string": "5*S_17_26"},
      { "player_id": 10, "stats_string": "1*T*_3**_5***_7**_8D*_10*_11_12*_14*_16_19*_21***_24_25_26*****"},
      { "player_id": 28, "stats_string": "2_13_21***_25"},
      { "player_id": 1, "stats_string": "18_20*_22_23***T"},
      { "player_id": 31, "stats_string": ""},
      { "player_id": 20, "stats_string": "1**_3S_5*****_7*_8_9_11_12D**S_14*S_17*_19_21*T*T*_24_25_26"},
      { "player_id": 8, "stats_string": "1S_3_7_9*_10*A_13_14*A_17_19S_22_23*_24*"},
      { "player_id": 14, "stats_string": "2_4_6_8D**_10*S_11_13_15_16_18_20D**T_22_23*_24*"},
      { "player_id": 12, "stats_string": "1**A_3*_5*_7*_9_10T*A_14_17*_19*_21*TD*T***A"},
  ];


  $scope.subsheet_NAT2016_PHOENIX = {
      "gameid": "7",
      "opponent": "PHOENIX",
      "gameto": 15,
      "score_us": 11,
      "score_them": 15,
      "startedon": "o",
      "points":{
        "1": {"scoredby":"us", "players": [37,18,30,20,12,10,8]},
        "2": {"scoredby":"them", "players": [11,9,5,14,15,6,28]},
        "3": {"scoredby":"us", "players": [37,18,22,20,12,10,8]},
        "4": {"scoredby":"them", "players": [11,21,3,14,6,4,2]},
        "5": {"scoredby":"us", "players": [37,18,27,20,12,10,16]},
        "6": {"scoredby":"them", "players": [11,9,30,14,15,6,77]},
        "7": {"scoredby":"us", "players": [37,22,21,20,12,10,8]},
        "8": {"scoredby":"them", "players": [11,5,3,20,10,14,6]},
        "9": {"scoredby":"them", "players": [37,18,22,20,12,8,15]},
        "10": {"scoredby":"us", "players": [37,18,30,12,10,8,14]},
        "11": {"scoredby":"them", "players": [11,9,21,20,10,14,6]},
        "12": {"scoredby":"us", "players": [37,18,22,20,12,10,15]},
        "13": {"scoredby":"them", "players": [30,5,21,8,14,6,28]},
        "14": {"scoredby":"us", "players": [37,18,30,20,12,10,8]},
        "15": {"scoredby":"them", "players": [11,9,21,14,15,6,2]},
        "16": {"scoredby":"them", "players": [11,22,5,10,14,15,4]},
        "17": {"scoredby":"us", "players": [37,18,30,20,12,8,16]},
        "18": {"scoredby":"them", "players": [22,5,21,14,1,15,6]},
        "19": {"scoredby":"us", "players": [37,18,27,20,12,10,8]},
        "20": {"scoredby":"them", "players": [11,9,3,14,1,6,77]},
        "21": {"scoredby":"us", "players": [37,18,30,20,12,10,28]},
        "22": {"scoredby":"them", "players": [11,5,21,8,14,1,2]},
        "23": {"scoredby":"them", "players": [11,9,22,8,14,1,15]},
        "24": {"scoredby":"us", "players": [37,18,27,20,10,14,4]},
        "25": {"scoredby":"them", "players": [5,21,3,20,10,6,28]},
        "26": {"scoredby":"them", "players": [37,18,30,20,10,8,16]},
      }
  };


  // REGIONALS 2016 DATA







  // ESC 2016 DATA

  $scope.playerstats_ESC2016_GMG = [
      { "player_id": 2, "stats_string": "7*T_14*"},
      { "player_id": 27, "stats_string": "2*_7"},
      { "player_id": 15, "stats_string": "6_16*"},
      { "player_id": 4, "stats_string": "1*S"},
      { "player_id": 6, "stats_string": "1*_3_5_9*S_12"},
      { "player_id": 21, "stats_string": "1**T_3_5**_8_10*_13******_15**"},
      { "player_id": 37, "stats_string": "1**T_4***_6_8**_10_12*****S_15*****"},
      { "player_id": 18, "stats_string": "2******T*_3_5*T*_7**_9**T*_11_12***A_13******_14**_16**T**A" },
      { "player_id": 9, "stats_string": "2*****T_4******_6_9**T**_11****_15*******" },
      { "player_id": 30, "stats_string": "9_16*"},
      { "player_id": 16, "stats_string": "14**"},
      { "player_id": 10, "stats_string": "2*_3_6_7***A_11_12**_13**_15**"},
      { "player_id": 28, "stats_string": "10"},
      { "player_id": 1, "stats_string": "2**T*_5*A_7***_9**A_11*TD**_14_15***A"},
      { "player_id": 13, "stats_string": "6_16**"},
      { "player_id": 31, "stats_string": "1**D*_3_4*TD*S_6_8D**A_10D*D**A_11*_13*_14*T_16*S"},
      { "player_id": 3, "stats_string": "4*_9*_11_14**T"},
      { "player_id": 20, "stats_string": "1_3_4D***A_6_8**_10*S_12S_15**T"},
      { "player_id": 5, "stats_string": "1*_3*T_5**_7***_8**_10*T*_12**_13***_14**T_15*_16**"},
      { "player_id": 8, "stats_string": "2**_4T*_7S_9_12*_13*TS_15***S"},
      { "player_id": 14, "stats_string": "5_8*_10*A_16*"},
      { "player_id": 12, "stats_string": "2D_4**_8S_11_13**A_14*"},
  ];

  $scope.playerstats_ESC2016_SB = [
      { "player_id": 2, "stats_string": "8_16"},
      { "player_id": 27, "stats_string": "3_7*_13*_16"},
      { "player_id": 15, "stats_string": "4*T**TD_10*_17*"},
      { "player_id": 4, "stats_string": "5*_14*_18*"},
      { "player_id": 6, "stats_string": "1_4_6*_9_14S_15*_18*T**"},
      { "player_id": 21, "stats_string": "2****T_5**T*_9**_12*_15****S_18******"},
      { "player_id": 37, "stats_string": "1_4****_6***A"},
      { "player_id": 18, "stats_string": "2***D*_3***_4D**_7***D*A_9***_10***_12*_14**_16_17***"},
      { "player_id": 9, "stats_string": "2****T*_5*D*_7******T_10**_11**_14***A_15**_18****"},
      { "player_id": 30, "stats_string": "7_15*_18**T"},
      { "player_id": 16, "stats_string": "8_14_16"},
      { "player_id": 10, "stats_string": "2*_3_7**_11*_12S_13_!6"},
      { "player_id": 28, "stats_string": "6_15*A"},
      { "player_id": 1, "stats_string": "2_5**_9S_11*_12_13_17"},
      { "player_id": 13, "stats_string": "6*_14_15**T**_18**"},
      { "player_id": 31, "stats_string": "1_3_4**S_6D**TD*T**_8_9_11_12_13*A_16"},
      { "player_id": 3, "stats_string": "1*T_5_8_10_17D"},
      { "player_id": 20, "stats_string": "1*_3***A_4*_6***_8_9***A_11**T_12*_16_17**T"},
      { "player_id": 5, "stats_string": "1*_3***A_4*_6***_8_9***A_11**T_12*_16_17**T"},
      { "player_id": 8, "stats_string": "2***T**T_7TD*_11*_13_17S"},
      { "player_id": 14, "stats_string": "1_3S_5*A_6*S_8_10**T*A_11_13S_18**T"},
      { "player_id": 12, "stats_string": "2*_5***S_7D*S_10*_13_17**A"},
  ];

  $scope.playerstats_ESC2016_OZONE = [
      { "player_id": 2, "stats_string": "11*_16*"},
      { "player_id": 27, "stats_string": "8_14*******"},
      { "player_id": 15, "stats_string": "14*DS"},
      { "player_id": 4, "stats_string": "15*_17"},
      { "player_id": 6, "stats_string": "3S_4_6S_9*_11_13"},
      { "player_id": 21, "stats_string": "1*_2*_5**_7_9**_11***T_13***T"},
      { "player_id": 37, "stats_string": "3*_9****_11***_12***_15****"},
      { "player_id": 18, "stats_string": "1***_2*_4**_6*_7*T_9*_11****_12****D*_14************_16**T*"},
      { "player_id": 9, "stats_string": "1***_3D*_4_6****_8D*_10*T_13**T*_14*****A_15**T*_17"},
      { "player_id": 30, "stats_string": "15**S"},
      { "player_id": 16, "stats_string": "16**T"},
      { "player_id": 10, "stats_string": "1**_5_7_8_11**_13*_14**D**T****_17"},
      { "player_id": 28, "stats_string": "13_17"},
      { "player_id": 1, "stats_string": "2*A_3*A_5**T_7_8*T_10D*_12*T*T_16_17*T)"},
      { "player_id": 13, "stats_string": "13***_16*"},
      { "player_id": 31, "stats_string": "1*T*_2_4_6*_7_9*D*A_10_12T_15**T**"},
      { "player_id": 3, "stats_string": "4_7_10_15_17"},
      { "player_id": 20, "stats_string": "1*T_2S_5_6*_8_9*_11**_12T_16D"},
      { "player_id": 5, "stats_string": "2*_3_5_6*****_8*T**_10_12*_14*T**T****T*T******T*_16*"},
      { "player_id": 8, "stats_string": "1_4_5D*T_8_13_14***_17"},
      { "player_id": 14, "stats_string": "3_4_6**A_9*T*TS_10**_12**_15D*A"},
      { "player_id": 12, "stats_string": "2_3_5*_7_10_14*"},
  ];
  $scope.playerstats_ESC2016_HEIST = [
      { "player_id": 2, "stats_string": "14_18*D"},
      { "player_id": 27, "stats_string": ""},
      { "player_id": 15, "stats_string": "13_17*"},
      { "player_id": 4, "stats_string": "15_18*"},
      { "player_id": 6, "stats_string": "1D*_3_7_10_13_16*T**A_19"},
      { "player_id": 21, "stats_string": ""},
      { "player_id": 37, "stats_string": "1**_3_5_7_8**_10_12*T******T_15**_18******"},
      { "player_id": 18, "stats_string": "1*_2*******T*_4***D**A_5_7_8**_9*_11**_12********_14*****_16***_18********A"},
      { "player_id": 9, "stats_string": "2***_3_4****_6**********_7_9***_10*T_11**T_13**T_17***_19"},
      { "player_id": 30, "stats_string": "10_15_19"},
      { "player_id": 16, "stats_string": "14**_17**"},
      { "player_id": 10, "stats_string": "2**_4**_6*S_8*_9**S_11*_12*****_16***"},
      { "player_id": 28, "stats_string": "16"},
      { "player_id": 1, "stats_string": "2*T***_5_6*T***A_9****_13**_14**T_16**S_19"},
      { "player_id": 13, "stats_string": "14**_15**T_17*T_19"},
      { "player_id": 31, "stats_string": "1T_3_4**_5_7_8****_9*A_11*_12***T*_17"},
      { "player_id": 3, "stats_string": "3_5_6****_10_13_14****_16**_18****"},
      { "player_id": 20, "stats_string": "1_3_4S_5_7_8**_10D_11***_13**_14**_18**"},
      { "player_id": 5, "stats_string": "1_2*A_4**T_6*****_8**T_9****_11**_12**_15***_17*_19"},
      { "player_id": 8, "stats_string": "2*_6**_8T_11T_12****_16"},
      { "player_id": 14, "stats_string": "1*S_3_5_7_9_10_13_15*_17D"},
      { "player_id": 12, "stats_string": "2****_4_6_12***_15_18**T*S"},
  ];
  $scope.playerstats_ESC2016_NEMESIS = [
      { "player_id": 2, "stats_string": "4*_9_20"},
      { "player_id": 27, "stats_string": "3*****_7_11***_13*_20****"},
      { "player_id": 15, "stats_string": "4*_12_16*"},
      { "player_id": 4, "stats_string": "6S_15*"},
      { "player_id": 6, "stats_string": "2_6*_10_12_20*"},
      { "player_id": 21, "stats_string": "4*"},
      { "player_id": 37, "stats_string": ""},
      { "player_id": 18, "stats_string": "1**_3*******_4***A_6**_8**_9_11*******_13**_14******_16*****_17_18*_19*****"},
      { "player_id": 9, "stats_string": "1_3******A_5******_8*_11******_13**T_14******_16*******A_18**_19*_21**A"},
      { "player_id": 30, "stats_string": "2_5*_7_10_12_15_17*T_20******_21D*"},
      { "player_id": 16, "stats_string": "7_17"},
      { "player_id": 10, "stats_string": "1*_3_7_8_11*****A_13_14**_16***S_18*T_19"},
      { "player_id": 28, "stats_string": "5_15*T"},
      { "player_id": 1, "stats_string": "2_4**_6*A_9S_10_12_15D_20***A"},
      { "player_id": 13, "stats_string": "4*_6_9*_15_21"},
      { "player_id": 31, "stats_string": "1*A_2_5***T**A_7_8**A_10_13_14**_17_18_19_20"},
      { "player_id": 3, "stats_string": "2_6_8*_10_12_16**_18**"},
      { "player_id": 20, "stats_string": "1S_3****_5**D*S_8*S_9*A_10_11*_13_14*A_17_19*_20"},
      { "player_id": 5, "stats_string": "1*_2_5*T*_7_9*_12_14**_15_17*_19*****A_20***S"},
      { "player_id": 8, "stats_string": "1_3*S_8_11***_13_14*S_16_18"},
      { "player_id": 14, "stats_string": "2_4S_5_7_9_12_17_20***_21"},
      { "player_id": 12, "stats_string": "3*_6_10_11*TS_15_16_18_19S_21*S"},
  ];

  $scope.playerstats_ESC2016_HM = [
      { "player_id": 2, "stats_string": "3T_8*_15"},
      { "player_id": 27, "stats_string": "2_4T_9_13*_16_19"},
      { "player_id": 15, "stats_string": "6_10_17*A_21"},
      { "player_id": 4, "stats_string": "6_14_20"},
      { "player_id": 6, "stats_string": "2_6_12_15_19_20"},
      { "player_id": 21, "stats_string": ""},
      { "player_id": 37, "stats_string": ""},
      { "player_id": 18, "stats_string": "1*_2**_4****_5***_7***_9*T_10*T_12_13**_15*S_18_19*_21**_22"},
      { "player_id": 9, "stats_string": "1_2*_4****_6_8*_10***_12*_14****A_16_17**_19*_20_22"},
      { "player_id": 30, "stats_string": "3_5*_7***_11*S_14_16*_18_20"},
      { "player_id": 16, "stats_string": "11_16_22"},
      { "player_id": 10, "stats_string": "1_2S_4**_5**_7****_910_13_14***_17_19*A_21*"},
      { "player_id": 28, "stats_string": "7_12_18"},
      { "player_id": 1, "stats_string": "3*_5**A_9_11_13_15**_18_19_22"},
      { "player_id": 13, "stats_string": "6_8*_12*T_15_22"},
      { "player_id": 31, "stats_string": "2*A_4**T_6_8D*_10_11**A_13_14*TD_16_18_20_22"},
      { "player_id": 3, "stats_string": "3_7***T*_10_11_12_14S_17*_21**A"},
      { "player_id": 20, "stats_string": "1_3_5*S_7**A_9_10**_12D_15*_17S_18_21S"},
      { "player_id": 5, "stats_string": "1**T_3*_5**_6_8_9**_11*T**_13*T_15*A_17*_18_20_21"},
      { "player_id": 8, "stats_string": "1_2_4_7*S_9_13_17_21"},
      { "player_id": 14, "stats_string": "3_5_8*_11_14_16*T_20_22"},
      { "player_id": 12, "stats_string": "1_4*_8_12_16_19S"},
  ];





  $scope.playerstats_CHC2016_JW = [
      { "player_id": 18, "stats_string": "1*_3*_5_8***_10***A_12*_14*_15A_17" },
      { "player_id": 37, "stats_string": "2*_5*_9_12**_16***"},
      { "player_id": 21, "stats_string": "2_3*_6_9_12T_14_16*_18**"},
      { "player_id": 22, "stats_string": "2*_4*_6_8_11*_13**_15*_17"},
      { "player_id": 3, "stats_string": "2_3*_6_9_12T_14_16*_18**"},
      { "player_id": 27, "stats_string": "1*_4*_8*_10_13_15_18"},
      { "player_id": 30, "stats_string": "3D*_7_9_11_14_17"},
      { "player_id": 20, "stats_string": "1S_3*A_5D*A_9_12**A_14*A_18**TD"},
      { "player_id": 8, "stats_string": "1_7_8S_10_13_16*"},
      { "player_id": 31, "stats_string": "2D*T*A_4*A_6D*_8A_11_15*_18*D*A"},
      { "player_id": 12, "stats_string": "1_3*S_6**A_7_12*S_16***A"},
      { "player_id": 10, "stats_string": "1_4_5_7D_10*_12**"},
      { "player_id": 14, "stats_string": "2S_5_9_11*T_14*_17"},
      { "player_id": 1, "stats_string": "2_5S_7A_10**T*S_13D**A_15*"},
      { "player_id": 6, "stats_string": "2_7S_9_12*_15*_17"},
      { "player_id": 15, "stats_string": "6*_7_10_14D_17"},
      { "player_id": 16, "stats_string": "3_6S_11_14*S_17"},
      { "player_id": 4, "stats_string": "4_9_13_16*S_18*T*S"},
      { "player_id": 2, "stats_string": "4S_8*_10_11_13*S_16DT"},
      { "player_id": 28, "stats_string": "5_8_11_15*S_18"},
  ];

  $scope.subsheet_CHC2016_JW = {
      "gameid": "1",
      "opponent": "Jackwagon",
      "gameto": 15,
      "score_us": 15,
      "score_them": 3,
      "startedon": "o",
      "points":{
        "1": {"scoredby":"us", "players": [18,21,27,20,8,12,10]},
        "2": {"scoredby":"us", "players": [37,22,3,31,14,1,6]},
        "3": {"scoredby":"us", "players": [18,3,30,20,12,16,28]},
        "4": {"scoredby":"us", "players": [21,22,27,31,10,4,2]},
        "5": {"scoredby":"us", "players": [18,37,20,10,14,1,28]},
        "6": {"scoredby":"us", "players": [21,22,3,31,12,15,16]},
        "7": {"scoredby":"us", "players": [30,8,12,10,1,6,15]},
        "8": {"scoredby":"us", "players": [18,22,27,8,31,2,28]},
        "9": {"scoredby":"them", "players": [37,3,30,20,14,6,4]},
        "10": {"scoredby":"us", "players": [18,21,27,8,10,1,15]},
        "11": {"scoredby":"them", "players": [22,30,31,14,16,2,28]},
        "12": {"scoredby":"us", "players": [18,37,3,20,10,12,6]},
        "13": {"scoredby":"us", "players": [21,22,27,8,1,4,2]},
        "14": {"scoredby":"us", "players": [18,3,30,20,14,15,16]},
        "15": {"scoredby":"us", "players": [18,22,27,31,1,6,28]},
        "16": {"scoredby":"us", "players": [37,21,3,8,12,4,2]},
        "17": {"scoredby":"them", "players": [18,22,30,14,15,16]},
        "18": {"scoredby":"us", "players": [21,3,27,20,31,4,28]},
      }
  };

  $scope.playerstats_CHC2016_DISH = [
      { "player_id": 18, "stats_string": "1**_4*T*_5**_7*A_9_10_12*_13****_16******_18**_20**" },
      { "player_id": 37, "stats_string": "2*_6*_9_11*"},
      { "player_id": 21, "stats_string": "1****A_3***T_6*_12*_14*_16****T*_19*A"},
      { "player_id": 22, "stats_string": "2*_4_6_8***_10*_12*_14*_16****T*****_18**_20***"},
      { "player_id": 3, "stats_string": "3_5*_8_11*T_14*_17_19*"},
      { "player_id": 27, "stats_string": "1*_3*_5_10**_13*_15*D_17_19"},
      { "player_id": 30, "stats_string": "2_4D*_7*_9_11_13*_15T**_17_18_20"},
      { "player_id": 20, "stats_string": "1**S_3_5**S_8*S_10TD*A_12*A_14_16**D**S_19"},
      { "player_id": 8, "stats_string": "1_4S_7S_10_12_16**_19"},
      { "player_id": 31, "stats_string": "2**S_5**A_6*A_9*_11_13*A_15**TD_17_19*T"},
      { "player_id": 12, "stats_string": "1*_4_12S_15*T_18S"},
      { "player_id": 10, "stats_string": "1*_4*_9_12*_16***A_18*"},
      { "player_id": 14, "stats_string": "2*A_5*_8*A_11_13S_17_20"},
      { "player_id": 1, "stats_string": "2*T_4**A_8**_10*TS_13D_17_20D***T*A"},
      { "player_id": 6, "stats_string": "2_6*S_9*T_11_14**_18**A"},
      { "player_id": 15, "stats_string": "3*_8*_10*_15D_18*"},
      { "player_id": 16, "stats_string": "3D*_6*_13_15*_19S"},
      { "player_id": 4, "stats_string": "6_8T*_17_20*T"},
      { "player_id": 2, "stats_string": "3*T_7_9TS_20**S"},
      { "player_id": 28, "stats_string": "5_7*_11_16*"},
  ];

  $scope.subsheet_CHC2016_DISH = {
      "gameid": "2",
      "opponent": "Dish",
      "gameto": 15,
      "score_us": 15,
      "score_them": 5,
      "startedon": "o",
      "points":{
        "1": {"scoredby":"us", "players": [18,21,27,20,8,12,10]},
        "2": {"scoredby":"us", "players": [37,22,30,31,14,1,6]},
        "3": {"scoredby":"them", "players": [21,3,27,20,15,16,2]},
        "4": {"scoredby":"us", "players": [18,22,30,8,12,10,1]},
        "5": {"scoredby":"us", "players": [18,3,27,20,31,14,28]},
        "6": {"scoredby":"us", "players": [37,21,22,31,6,16,4]},
        "7": {"scoredby":"us", "players": [18,27,30,8,12,2,28]},
        "8": {"scoredby":"us", "players": [22,3,20,14,1,15,4]},
        "9": {"scoredby":"them", "players": [37,21,30,31,10,6,2]},
        "10": {"scoredby":"us", "players": [8,22,27,20,8,1,15]},
        "11": {"scoredby":"them", "players": [37,3,30,31,14,6,28]},
        "12": {"scoredby":"us", "players": [18,21,22,20,8,12,10]},
        "13": {"scoredby":"us", "players": [18,27,30,31,14,1,16]},
        "14": {"scoredby":"us", "players": [21,22,3,20,6,4,2]},
        "15": {"scoredby":"them", "players": [18,27,30,31,12,15,16]},
        "16": {"scoredby":"us", "players": [18,21,22,20,8,10,28]},
        "17": {"scoredby":"them", "players": [3,27,30,31,14,1,4]},
        "18": {"scoredby":"us", "players": [18,22,30,12,10,6,15]},
        "19": {"scoredby":"us", "players": [21,3,27,20,8,31,16]},
        "20": {"scoredby":"us", "players": [18,22,30,14,1,4,2]},
      }
  };

  $scope.playerstats_CHC2016_SIEGE = [
      { "player_id": 18, "stats_string": "1**T**_3*_4_5_6****TD**S_8*****T_9****D*S_11*T_13_14*****16_17**_19***_21**_22*_24A" },
      { "player_id": 37, "stats_string": "2*_7_10**_12**A_14***S_16_19***T**A_21**24***"},
      { "player_id": 21, "stats_string": "1****T_3_5_7*T_9*****_12*_13_15**T_17*_18_20*_21*_23*_25"},
      { "player_id": 22, "stats_string": "1D**_3*_5*T_6*****_8*_10*_13*_15**_18_20_22***_23*_25**"},
      { "player_id": 3, "stats_string": "2_7*_9***_11_16_19_23*"},
      { "player_id": 27, "stats_string": "4_8_11_17*_25*"},
      { "player_id": 30, "stats_string": "2**_4_6***_10**_12****_14**_15DS_18*T_20S_22**S_24***"},
      { "player_id": 20, "stats_string": "1*T*A_5_6**A_7_8*_10S_12*S_14*15_17*S_18_20**A_21*D_24*S_25*"},
      { "player_id": 8, "stats_string": "1_3*_5_6**T***_9*_12**_14_17*A_19*TS_22*_24*"},
      { "player_id": 31, "stats_string": "2_3*_4_6*T*D***_7DI"},
      { "player_id": 12, "stats_string": "1S_4_8**TD_11_14**_15_17*_19_22*A_23***TD_25A"},
      { "player_id": 10, "stats_string": "1*_3S_5_6****_8_9***T*A_12**_14****A_17_19**_21_22*_24*"},
      { "player_id": 14, "stats_string": "2*T_4_7_9*_11_13_15D_16_18_20*_23*_24**"},
      { "player_id": 1, "stats_string": "2_4_7_10**A_11_13*T_15*A_16_19_21*T*T_23D**T"},
      { "player_id": 6, "stats_string": "2*_7_10_13*_16_18_20_22_25S"},
      { "player_id": 15, "stats_string": "5_12*_23"},
      { "player_id": 16, "stats_string": "10_18"},
      { "player_id": 4, "stats_string": "11_20"},
      { "player_id": 2, "stats_string": "9*T_16_25"},
      { "player_id": 28, "stats_string": "13_21*"},
  ];

  $scope.subsheet_CHC2016_SIEGE = {
      "gameid": "3",
      "opponent": "Siege",
      "gameto": 15,
      "score_us": 14,
      "score_them": 11,
      "startedon": "o",
      "points":{
        "1": {"scoredby":"us", "players": [18,21,22,20,8,12,10]},
        "2": {"scoredby":"them", "players": [37,3,30,31,14,1,6]},
        "3": {"scoredby":"us", "players": [18,21,22,20,8,31,10]},
        "4": {"scoredby":"them", "players": [18,27,30,31,12,14,1]},
        "5": {"scoredby":"them", "players": [37,21,22,20,8,10,15]},
        "6": {"scoredby":"us", "players": [18,22,30,20,8,31,10]},
        "7": {"scoredby":"them", "players": [37,21,3,31,14,1,6]},
        "8": {"scoredby":"them", "players": [18,22,27,30,12,10]},
        "9": {"scoredby":"us", "players": [18,21,3,8,10,14,2]},
        "10": {"scoredby":"us", "players": [37,22,30,20,1,6,16]},
        "11": {"scoredby":"them", "players": [18,3,27,12,14,1,4]},
        "12": {"scoredby":"us", "players": [37,21,30,20,8,10,15]},
        "13": {"scoredby":"them", "players": [18,21,22,14,1,6,28]},
        "14": {"scoredby":"us", "players": [18,37,30,20,8,12,10]},
        "15": {"scoredby":"us", "players": [21,22,30,20,12,14,1]},
        "16": {"scoredby":"them", "players": [18,37,3,14,1,6,2]},
        "17": {"scoredby":"us", "players": [18,21,27,20,8,12,10]},
        "18": {"scoredby":"them", "players": [2122,30,20,14,6,16]},
        "19": {"scoredby":"us", "players": [18,37,3,8,12,10,1]},
        "20": {"scoredby":"us", "players": [21,22,30,20,14,6,4]},
        "21": {"scoredby":"them", "players": [18,37,21,20,10,1,28]},
        "22": {"scoredby":"us", "players": [18,22,30,8,12,10,6]},
        "23": {"scoredby":"them", "players": [21,22,3,12,14,1,15]},
        "24": {"scoredby":"us", "players": [18,37,30,20,8,10,14]},
        "25": {"scoredby":"us", "players": [21,22,27,20,12,6,2]},
      }
  };

  $scope.playerstats_CHC2016_PPF = [
      { "player_id": 18, "stats_string": "2***T_4*_6*_8******_9***A_13_14****_17***"},
      { "player_id": 37, "stats_string": "1*T*T**S_3**T***_6*_9**T*_15A_18*******T***T"},
      { "player_id": 21, "stats_string": "1**I_3**D*A_5**A_7***_10_14***T*T**_16*"},
      { "player_id": 22, "stats_string": "2***T_4*_7***T_8***_10*A_14*******_17***"},
      { "player_id": 3, "stats_string": "1_3****_5_10_13_15_16_18******T*T"},
      { "player_id": 27, "stats_string": "1i*_4*_6_8***A_13_15*_17*D*"},
      { "player_id": 30, "stats_string": "2_5_7**_9**_16*T_18*T**"},
      { "player_id": 20, "stats_string": "2_3**_5_7*_8*T_10_13_14T*T_17**A"},
      { "player_id": 8, "stats_string": "3*T_7*_8*I_14*T*A_17*T"},
      { "player_id": 31, "stats_string": "1D*T***A_3S_6**T_9*S_10_15D*_18*****T**"},
      { "player_id": 12, "stats_string": "2_4D**_7*T_8iS_12S_16"},
      { "player_id": 10, "stats_string": "3*****_6_8**_14****TS_17***S"},
      { "player_id": 14, "stats_string": "1_4*_6*_9_13_15_18***TD*"},
      { "player_id": 1, "stats_string": "2*TD*_4_7_16"},
      { "player_id": 6, "stats_string": "1D*_5_8D_13_15*_18"},
      { "player_id": 15, "stats_string": "5*_10*S_14**_18***"},
      { "player_id": 16, "stats_string": "2*T_9*_15*TDS"},
      { "player_id": 4, "stats_string": "4S_10D_12A_16"},
      { "player_id": 2, "stats_string": "1_6_16"},
      { "player_id": 28, "stats_string": "5S_9*_13_17"},
  ];

  $scope.subsheet_CHC2016_PPF = {
      "gameid": "4",
      "opponent": "PPF",
      "gameto": 13,
      "score_us": 12,
      "score_them": 6,
      "startedon": "d",
      "points":{
        "1": {"scoredby":"us", "players": [37,31,3,31,14,6,2]},
        "2": {"scoredby":"us", "players": [18,3,30,20,12,1,16]},
        "3": {"scoredby":"us", "players": [37,21,3,20,8,31,10]},
        "4": {"scoredby":"us", "players": [18,22,27,12,14,1,4]},
        "5": {"scoredby":"us", "players": [21,3,30,20,6,15,28]},
        "6": {"scoredby":"us", "players": [18,37,27,31,10,14,2]},
        "7": {"scoredby":"us", "players": [21,22,30,20,8,12,1]},
        "8": {"scoredby":"us", "players": [18,22,27,20,8,10,6]},
        "9": {"scoredby":"us", "players": [18,37,30,31,14,16,28]},
        "10": {"scoredby":"us", "players": [21,22,3,20,31,15,4]},
        "11": {"scoredby":"us", "players": [18,22,27,20,8,10,2]},
        "12": {"scoredby":"us", "players": [37,21,30,31,12,1,4]},
        "13": {"scoredby":"us", "players": [18,3,27,20,14,6,28]},
        "14": {"scoredby":"us", "players": [18,21,22,20,8,10,15]},
        "15": {"scoredby":"us", "players": [37,3,27,31,14,6,16]},
        "16": {"scoredby":"us", "players": [21,3,30,12,1,4,2]},
        "17": {"scoredby":"us", "players": [18,22,27,20,8,10,28]},
        "18": {"scoredby":"us", "players": [37,3,30,31,14,6,15]},
      }
  };

  $scope.playerstats_CHC2016_CLE = [
      { "player_id": 18, "stats_string": "1*T*T**D*_2_4*T_6**_8D****TT***_10*****T*_13**"},
      { "player_id": 37, "stats_string": "3*****S_5***T****T***_8*I_10*****T"},
      { "player_id": 21, "stats_string": "1**_4_6**T**T**_9**T*A_11*S_13*"},
      { "player_id": 22, "stats_string": "1D***_3*****_5*****A_7**_9*T*T***D*_11*_12D*T*T**_14*"},
      { "player_id": 3, "stats_string": "2_6_8_12*T_14"},
      { "player_id": 27, "stats_string": "2_4_7_10**_12*T_14"},
      { "player_id": 30, "stats_string": "3**_5*T****D_7*_9D*_11_13*"},
      { "player_id": 20, "stats_string": "1D**T*_3*A_4_6***_9S_12*T*A"},
      { "player_id": 8, "stats_string": "3**_5**_7*A_8i**D**_10_13*S"},
      { "player_id": 31, "stats_string": "2_3_5*TD**TDT*S_8**D***T*_10"},
      { "player_id": 12, "stats_string": "1**A_4_6*T*_8*T***A_11_13*"},
      { "player_id": 10, "stats_string": "3****_5******T*_7*_10*_12D*S"},
      { "player_id": 14, "stats_string": "2*T_4*_6_9**_11*A_14S"},
      { "player_id": 1, "stats_string": "1*T_4*TD_7_11*_14*A"},
      { "player_id": 6, "stats_string": "2D_5*_9_12*"},
      { "player_id": 15, "stats_string": "6*_11*_14"},
      { "player_id": 16, "stats_string": "8*T*_12"},
      { "player_id": 4, "stats_string": "1*S_8*T*S_13*A"},
      { "player_id": 2, "stats_string": "2_9**T*_14"},
      { "player_id": 28, "stats_string": "7S_10T_13"},
  ];

  $scope.subsheet_CHC2016_CLE = {
      "gameid": "5",
      "opponent": "CLE",
      "gameto": 13,
      "score_us": 11,
      "score_them": 3,
      "startedon": "d",
      "points":{
        "1": {"scoredby":"us", "players": [18,21,22,20,12,1,4]},
        "2": {"scoredby":"them", "players": [18,3,27,31,14,6,2]},
        "3": {"scoredby":"us", "players": [37,22,30,20,8,31,10]},
        "4": {"scoredby":"them", "players": [18,21,27,20,12,14,1]},
        "5": {"scoredby":"us", "players": [37,22,30,8,31,10,6]},
        "6": {"scoredby":"us", "players": [18,21,3,20,12,14,15]},
        "7": {"scoredby":"us", "players": [22,27,30,8,10,1,28]},
        "8": {"scoredby":"us", "players": [18,37,3,31,12,16,4]},
        "9": {"scoredby":"us", "players": [21,22,8,20,14,6,2]},
        "10": {"scoredby":"them", "players": [18,37,27,8,31,10,28]},
        "11": {"scoredby":"us", "players": [21,22,20,12,14,1,15]},
        "12": {"scoredby":"us", "players": [22,3,27,20,10,6,16]},
        "13": {"scoredby":"us", "players": [18,21,30,8,12,4,28]},
        "14": {"scoredby":"us", "players": [22,3,27,14,1,15,2]},
      }
  };

  $scope.playerstats_CHC2016_HEIST = [
      { "player_id": 18, "stats_string": "1_2***T***_5_7*_9**_10**_12*T_13*_15*_16***A_18*_20**T*A_21**T**A_24*" },
      { "player_id": 37, "stats_string": "1_4*_7_9**_11_13***_16_19*T*T****_22*A_23"},
      { "player_id": 21, "stats_string": "1_3_5**_7_9_11_14*A_15_17_18*_20***_22_23_24*T"},
      { "player_id": 22, "stats_string": "2*********T*A_4**T_6****A_8_10***_13*_16**_17_19****T_21**_22_23"},
      { "player_id": 3, "stats_string": "3_6**_8_12_17_20**"},
      { "player_id": 27, "stats_string": "3D*T*T_5*_11_14_18"},
      { "player_id": 30, "stats_string": "2**_4_6*S_8_10*12_14_15_19***_21*_24"},
      { "player_id": 20, "stats_string": "1_2**S_5**_7*A_9***_11_13***A_15_18_20**S_22S_23"},
      { "player_id": 8, "stats_string": "2***D*_4_8_12_13*_16*S_18**T"},
      { "player_id": 31, "stats_string": "1_3_4_6*T**T**TD*_8_10**A_13**_14_15_17_19*_21**_22_23_24"},
      { "player_id": 12, "stats_string": "2*T_5*A_7_9**T_12_16**_19**T_21_24"},
      { "player_id": 10, "stats_string": "2********_4_5*S_9**_10***_12_13**S_16**_18*_19*_22_23_24"},
      { "player_id": 14, "stats_string": "1_3_6*_8_11_14_15_17_20***"},
      { "player_id": 1, "stats_string": "1_4*_7S_10***TS_14S_17_20**_24"},
      { "player_id": 6, "stats_string": "3_6_10*_15_19*_21*S"},
      { "player_id": 15, "stats_string": "3_8_11_16_22_23"},
      { "player_id": 16, "stats_string": "7_14"},
      { "player_id": 4, "stats_string": "5_9_17_21T**"},
      { "player_id": 2, "stats_string": "11_20"},
      { "player_id": 28, "stats_string": "6_12_18*"},
  ];

  $scope.subsheet_CHC2016_HEIST = {
      "gameid": "6",
      "opponent": "HEIST",
      "gameto": 13,
      "score_us": 11,
      "score_them": 13,
      "startedon": "d",
      "points":{
        "1": {"scoredby":"them", "players": [18,37,21,20,31,14,1]},
        "2": {"scoredby":"us", "players": [18,22,30,20,8,12,10]},
        "3": {"scoredby":"them", "players": [21,3,27,31,14,6,15]},
        "4": {"scoredby":"them", "players": [37,22,30,8,31,10,1]},
        "5": {"scoredby":"us", "players": [18,21,27,20,12,10,4]},
        "6": {"scoredby":"us", "players": [22,3,27,31,14,6,28]},
        "7": {"scoredby":"us", "players": [18,37,21,20,12,1,16]},
        "8": {"scoredby":"them", "players": [21,3,30,8,31,14,15]},
        "9": {"scoredby":"them", "players": [18,37,21,20,12,10,4]},
        "10": {"scoredby":"us", "players": [18,22,30,31,10,1,6]},
        "11": {"scoredby":"them", "players": [37,21,27,20,14,15,2]},
        "12": {"scoredby":"them", "players": [18,3,30,8,12,10,28]},
        "13": {"scoredby":"us", "players": [18,37,22,20,8,31,10]},
        "14": {"scoredby":"us", "players": [21,27,30,31,14,1,15]},
        "15": {"scoredby":"them", "players": [18,21,30,20,31,14,6]},
        "16": {"scoredby":"us", "players": [18,37,22,8,12,10,15]},
        "17": {"scoredby":"them", "players": [21,22,3,31,14,1,4]},
        "18": {"scoredby":"them", "players": [18,21,27,20,8,10,28]},
        "19": {"scoredby":"them", "players": [37,22,30,31,12,10,6]},
        "20": {"scoredby":"us", "players": [18,21,3,20,14,1,2]},
        "21": {"scoredby":"us", "players": [18,22,30,31,12,6,4]},
        "22": {"scoredby":"us", "players": [37,21,22,20,31,10,15]},
        "23": {"scoredby":"them", "players": [37,21,22,20,31,10,15]},
        "24": {"scoredby":"them", "players": [18,21,30,31,12,10,1]},
      }
  };

  $scope.playerstats_SFI2016_ELEVATE = [
    { "player_id": 27, "stats_string": "*********A"},
    { "player_id": 21, "stats_string": "*****A***A******T*"},
    { "player_id": 37, "stats_string": "****A****************T"},
    { "player_id": 30, "stats_string": "*******T*S"},
    { "player_id": 3, "stats_string": ""},
    { "player_id": 5, "stats_string": "********C"},
    { "player_id": 22, "stats_string": "*T**T**A*****A****"},
    { "player_id": 11, "stats_string": "****T*****T**T****T*****A**"},
    { "player_id": 2, "stats_string": "*T**"},
    { "player_id": 15, "stats_string": "*S**AS"},
    { "player_id": 6, "stats_string": ""},
    { "player_id": 28, "stats_string": "*S"},
    { "player_id": 1, "stats_string": "*TS*A***AS*DT*TS*T"},
    { "player_id": 31, "stats_string": ""},
    { "player_id": 20, "stats_string": "*S****S*T***TD*D**A"},
    { "player_id": 8, "stats_string": "*****D**"},
    { "player_id": 14, "stats_string": "DTDS*S**"},
    { "player_id": 12, "stats_string": "**S*A*"},
  ];

  $scope.subsheet_SFI2016_ELEVATE = {
      "gameid": "1",
      "opponent": "ELEVATE",
      "gameto": 13,
      "score_us": 13,
      "score_them": 6,
      "startedon": "d",
      "points":{
        "5": {"scoredby":"us", "players": [16,18]},
        "37": {"scoredby":"them", "players": [2,4,6,8,10,12,15,17]},
        "11": {"scoredby":"us", "players": [2,4,5,7,9,12,14,16,19]},
        "22": {"scoredby":"them", "players": [1,3,5,6,8,10,11,13,15,17,18]},
        "21": {"scoredby":"us", "players": [2,3,5,7,9,11,13,14,16,18,19]},
        "30": {"scoredby":"us", "players": [1,3,6,8,9,11,13,15,19]},
        "3": {"scoredby":"us", "players": []},
        "27": {"scoredby":"us", "players": [2,4,7,10,12,14,17]},
        "31": {"scoredby":"us", "players": []},
        "20": {"scoredby":"them", "players": [2,3,5,6,8,9,11,12,14,16,17,19]},
        "8": {"scoredby":"us", "players": [2,4,5,7,9,11,12,15,16,18]},
        "12": {"scoredby":"us", "players": [2,4,6,7,9,10,12,14,15,17,19]},
        "14": {"scoredby":"us", "players": [1,3,6,8,9,11,13,15,17,18]},
        "1": {"scoredby":"us", "players": [1,3,5,7,10,11,13,14,16,18]},
        "6": {"scoredby":"us", "players": []},
        "15": {"scoredby":"us", "players": [1,4,5,7,10,12,14,16,18]},
        "2": {"scoredby":"us", "players": [1,3,6,8,13,19]},
        "28": {"scoredby":"us", "players": [2,4,8,10,13,15,17,19]},
      }
  };

  $scope.playerstats_SFI2016_SNAP = [
    { "player_id": 27, "stats_string": "**T**T****A"},
    { "player_id": 21, "stats_string": "*************T****T**T**T*"},
    { "player_id": 37, "stats_string": "*****************"},
    { "player_id": 30, "stats_string": "**AD***"},
    { "player_id": 3, "stats_string": ""},
    { "player_id": 5, "stats_string": "**A*****A***T***T"},
    { "player_id": 22, "stats_string": "***T*T*****A***D*"},
    { "player_id": 11, "stats_string": "*T**A***T**T"},
    { "player_id": 2, "stats_string": "S*T**"},
    { "player_id": 15, "stats_string": "**S*SD**AS*"},
    { "player_id": 6, "stats_string": ""},
    { "player_id": 28, "stats_string": "S*S"},
    { "player_id": 1, "stats_string": "**A*T*T*A"},
    { "player_id": 31, "stats_string": ""},
    { "player_id": 20, "stats_string": "*S**D*S*T**TS*AS**S"},
    { "player_id": 8, "stats_string": "D*T**A**AD*A**"},
    { "player_id": 14, "stats_string": "*S*TDT**"},
    { "player_id": 12, "stats_string": "*****S*T*"},
  ];

  $scope.subsheet_SFI2016_SNAP = {
      "gameid": "2",
      "opponent": "SNAP",
      "gameto": 13,
      "score_us": 13,
      "score_them": 6,
      "startedon": "d",
      "points":{
        "5": {"scoredby":"us", "players": [1,3,5,6,8,10,11,12,14,15,17,18]},
        "37": {"scoredby":"them", "players": [1,4,7,9,12,14,16,19]},
        "11": {"scoredby":"us", "players": [2,4,6,8,11,13,15,18]},
        "22": {"scoredby":"them", "players": [2,4,7,9,11,13,16,18]},
        "21": {"scoredby":"us", "players": [1,3,5,8,10,13,16,17,19]},
        "30": {"scoredby":"us", "players": [2,5,7,10,14,17]},
        "3": {"scoredby":"us", "players": []},
        "27": {"scoredby":"us", "players": [3,6,9,12,15,19]},
        "31": {"scoredby":"us", "players": []},
        "20": {"scoredby":"them", "players": [1,3,5,6,8,9,11,12,14,16,17,19]},
        "8": {"scoredby":"us", "players": [1,3,4,7,8,10,11,13,15,17,19]},
        "12": {"scoredby":"us", "players": [1,3,5,7,9,11,13,14,16,18]},
        "14": {"scoredby":"us", "players": [2,4,5,7,9,10,12,15,17,18]},
        "1": {"scoredby":"us", "players": [2,4,6,8,12,14,15,18]},
        "6": {"scoredby":"us", "players": []},
        "15": {"scoredby":"us", "players": [1,4,6,8,10,12,14,16,17,19]},
        "2": {"scoredby":"us", "players": [2,6,9,13,15,19]},
        "28": {"scoredby":"us", "players": [2,3,5,7,10,11,13,16,18]},
      }
  };

  $scope.playerstats_SFI2016_ENCORE = [
    { "player_id": 27, "stats_string": "*****T*"},
    { "player_id": 21, "stats_string": "***T********TD**A****C"},
    { "player_id": 37, "stats_string": "****T************T***********T"},
    { "player_id": 30, "stats_string": "*T**A***T**"},
    { "player_id": 3, "stats_string": ""},
    { "player_id": 5, "stats_string": "D******T******A******"},
    { "player_id": 22, "stats_string": "***DS************"},
    { "player_id": 11, "stats_string": "*****T*******T************T"},
    { "player_id": 2, "stats_string": "*T"},
    { "player_id": 15, "stats_string": "D*S*SST"},
    { "player_id": 6, "stats_string": ""},
    { "player_id": 28, "stats_string": "*SS*T**D*S"},
    { "player_id": 1, "stats_string": "**A******A*T****A**A**A"},
    { "player_id": 31, "stats_string": ""},
    { "player_id": 20, "stats_string": "***AD**S**A***S"},
    { "player_id": 8, "stats_string": "*****S*****AD***"},
    { "player_id": 14, "stats_string": "**T**S*****A"},
    { "player_id": 12, "stats_string": "T******S"},
  ];

  $scope.subsheet_SFI2016_ENCORE = {
      "gameid": "3",
      "opponent": "ENCORE",
      "gameto": 13,
      "score_us": 13,
      "score_them": 4,
      "startedon": "d",
      "points":{
        "5": {"scoredby":"us", "players": [1,3,5,7,8,10,11,12,14,16,17]},
        "37": {"scoredby":"them", "players": [1,4,6,8,11,13,15]},
        "11": {"scoredby":"us", "players": [1,3,5,8,10,12,14,16]},
        "22": {"scoredby":"them", "players": [2,4,6,9,11,13,15]},
        "21": {"scoredby":"us", "players": [2,5,7,9,10,12,16,17]},
        "30": {"scoredby":"us", "players": [2,4,7,9,14,17]},
        "3": {"scoredby":"us", "players": []},
        "27": {"scoredby":"us", "players": [3,6,13,15]},
        "31": {"scoredby":"us", "players": []},
        "20": {"scoredby":"them", "players": [1,3,4,6,7,9,10,11,12,14,15]},
        "8": {"scoredby":"us", "players": [2,4,5,7,8,10,12,14,16,17]},
        "12": {"scoredby":"us", "players": [2,4,5,7,8,10,11,12,14,16]},
        "14": {"scoredby":"us", "players": [1,3,4,6,8,9,11,13,15]},
        "1": {"scoredby":"us", "players": [1,3,5,6,9,11,13,15,17]},
        "6": {"scoredby":"us", "players": []},
        "15": {"scoredby":"us", "players": [2,5,7,8,10,12,14,16,17]},
        "2": {"scoredby":"us", "players": [2,6,13,15]},
        "28": {"scoredby":"us", "players": [1,3,9,13,16,17]},
      }
  };


  $scope.allStats = [{"year": 2016,
                      "tournamentID": "CHC2016",
                      "games": {
                            "1-Jackwagon": $scope.playerstats_CHC2016_JW,
                            "2-Dish": $scope.playerstats_CHC2016_DISH,
                            "3-Siege": $scope.playerstats_CHC2016_SIEGE,
                            "4-PPF": $scope.playerstats_CHC2016_PPF,
                            "5-CLE": $scope.playerstats_CHC2016_CLE,
                            "6-Heist": $scope.playerstats_CHC2016_HEIST
                        }
                      }
                  ];


});
