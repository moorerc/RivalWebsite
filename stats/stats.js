var app = angular.module('myApp', []);

app.controller('MainCtrl', function($scope) {


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
      num = num + $scope.getPlayerStatsForGame($scope.playerstats_CHC2016_JW, player_id, statType);
       num = num + $scope.getPlayerStatsForGame($scope.playerstats_CHC2016_DISH, player_id, statType);
       num = num + $scope.getPlayerStatsForGame($scope.playerstats_CHC2016_SIEGE, player_id, statType);
       num = num + $scope.getPlayerStatsForGame($scope.playerstats_CHC2016_PPF, player_id, statType);
       num = num + $scope.getPlayerStatsForGame($scope.playerstats_CHC2016_CLE, player_id, statType);
       num = num + $scope.getPlayerStatsForGame($scope.playerstats_CHC2016_HEIST, player_id, statType);
      /* num = num + $scope.getPlayerStatsForGame($scope.playerstats_ESC2016_GMG, player_id, statType);
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
      return num;
  };

  $scope.getPlayerStatsForGame = function (gameStats, player_id, statType) {
      var statsStringSplit = Array();
      var statsString = "";
      for (statline of gameStats){
          if (statline.player_id == player_id) {
              statsString = statline.stats_string;
              statsStringSplit =  statline.stats_string.split("_");
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
