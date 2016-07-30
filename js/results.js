var app = angular.module('myApp', []);

app.controller('ResultsCtrl', function($scope) {

      //$scope.results = $scope.results2016;

      $scope.tournaments2016 = [
          {
              "tourneyid": 1,
              "sanctioned": false,
              "name": "Beachfront Invitational",
              "teampic": "img/Beachfront2015_TeamPhoto.JPG",
              "date": "June 6-7, 2015",
              "location": "Joliet, IL",
              "result": "Not Sanctioned",
              "infolink": "http://play.usaultimate.org/events/Beachfront-Instant-Classic-Invitational/",
              "mapslink": "https://goo.gl/maps/uMbDC2MsxYA2",
              "games": [
                  {
                      "gamenum": 1,
                      "opponent": "Heist Y",
                      "type": "Pool Play",
                      "score_us": 4,
                      "score_them": 10,
                  },
                  {
                      "gamenum": 2,
                      "opponent": "Dish",
                      "type": "Pool Play",
                      "score_us": 7,
                      "score_them": 10,
                  },
                  {
                      "gamenum": 3,
                      "opponent": "Nemesis",
                      "type": "Pool Play",
                      "score_us": 7,
                      "score_them": 10,
                  },
                  {
                      "gamenum": 4,
                      "opponent": "Spicy Tuna",
                      "type": "Pool Play",
                      "score_us": 11,
                      "score_them": 5,
                  },
                  {
                      "gamenum": 5,
                      "opponent": "Heist X",
                      "type": "Pool Play",
                      "score_us": 8,
                      "score_them": 9,
                  },
                  {
                      "gamenum": 6,
                      "opponent": "Dish",
                      "type": "Pool Play",
                      "score_us": 11,
                      "score_them": 9,
                  },
              ]
          },
          {
              "tourneyid": 2,
              "sanctioned": true,
              "name": "Elite Select Challenge",
              "teampic": "img/ESC2015_TeamPhoto.JPG",
              "date": "July 11-12, 2015",
              "location": "Hilliard, OH",
              "result": "Thirteenth Place",
              "infolink": "http://play.usaultimate.org/events/TCT-Elite-Select-Challenge-2015/",
              "mapslink": "https://goo.gl/maps/66xTaQsLBUP2",
              "games": [
                  {
                      "gamenum": 1,
                      "opponent": "Nemesis",
                      "type": "Pool Play",
                      "score_us": 7,
                      "score_them": 11,
                  },
                  {
                      "gamenum": 2,
                      "opponent": "Hot Metal",
                      "type": "Pool Play",
                      "score_us": 7,
                      "score_them": 11,
                  },
                  {
                      "gamenum": 3,
                      "opponent": "Underground",
                      "type": "Pool Play",
                      "score_us": 9,
                      "score_them": 13,
                  },
                  {
                      "gamenum": 4,
                      "opponent": "Dish",
                      "type": "Consolation",
                      "score_us": 11,
                      "score_them": 10,
                  },
                  {
                      "gamenum": 5,
                      "opponent": "Maeve",
                      "type": "Consolation",
                      "score_us": 9,
                      "score_them": 6,
                  },
                  {
                      "gamenum": 6,
                      "opponent": "Encore",
                      "type": "Consolation",
                      "score_us": 11,
                      "score_them": 10,
                  }
              ]
          }
    ];

      $scope.tournaments2015 = [
          {
              "tourneyid": 1,
              "sanctioned": false,
              "name": "Beachfront Invitational",
              "teampic": "img/Beachfront2015_TeamPhoto.JPG",
              "date": "June 6-7, 2015",
              "location": "Joliet, IL",
              "result": "Not Sanctioned",
              "infolink": "http://play.usaultimate.org/events/Beachfront-Instant-Classic-Invitational/",
              "mapslink": "https://goo.gl/maps/uMbDC2MsxYA2",
              "games": [
                  {
                      "gamenum": 1,
                      "opponent": "Heist Y",
                      "type": "Pool Play",
                      "score_us": 4,
                      "score_them": 10,
                  },
                  {
                      "gamenum": 2,
                      "opponent": "Dish",
                      "type": "Pool Play",
                      "score_us": 7,
                      "score_them": 10,
                  },
                  {
                      "gamenum": 3,
                      "opponent": "Nemesis",
                      "type": "Pool Play",
                      "score_us": 7,
                      "score_them": 10,
                  },
                  {
                      "gamenum": 4,
                      "opponent": "Spicy Tuna",
                      "type": "Pool Play",
                      "score_us": 11,
                      "score_them": 5,
                  },
                  {
                      "gamenum": 5,
                      "opponent": "Heist X",
                      "type": "Pool Play",
                      "score_us": 8,
                      "score_them": 9,
                  },
                  {
                      "gamenum": 6,
                      "opponent": "Dish",
                      "type": "Pool Play",
                      "score_us": 11,
                      "score_them": 9,
                  },
              ]
          },
          {
              "tourneyid": 2,
              "sanctioned": true,
              "name": "Elite Select Challenge",
              "teampic": "img/ESC2015_TeamPhoto.JPG",
              "date": "July 11-12, 2015",
              "location": "Hilliard, OH",
              "result": "Thirteenth Place",
              "infolink": "http://play.usaultimate.org/events/TCT-Elite-Select-Challenge-2015/",
              "mapslink": "https://goo.gl/maps/66xTaQsLBUP2",
              "games": [
                  {
                      "gamenum": 1,
                      "opponent": "Nemesis",
                      "type": "Pool Play",
                      "score_us": 7,
                      "score_them": 11,
                  },
                  {
                      "gamenum": 2,
                      "opponent": "Hot Metal",
                      "type": "Pool Play",
                      "score_us": 7,
                      "score_them": 11,
                  },
                  {
                      "gamenum": 3,
                      "opponent": "Underground",
                      "type": "Pool Play",
                      "score_us": 9,
                      "score_them": 13,
                  },
                  {
                      "gamenum": 4,
                      "opponent": "Dish",
                      "type": "Consolation",
                      "score_us": 11,
                      "score_them": 10,
                  },
                  {
                      "gamenum": 5,
                      "opponent": "Maeve",
                      "type": "Consolation",
                      "score_us": 9,
                      "score_them": 6,
                  },
                  {
                      "gamenum": 6,
                      "opponent": "Encore",
                      "type": "Consolation",
                      "score_us": 11,
                      "score_them": 10,
                  }
              ]
          },
          {
              "tourneyid": 3,
              "sanctioned": true,
              "name": "Motown Throwdown",
              "teampic": "img/MotownThrowdown2015_TeamPhoto.jpg",
              "date": "July 25-26, 2015",
              "location": "Sylvania, OH",
              "result": "First Place",
              "infolink": "http://play.usaultimate.org/events/Motown-Throwdown-2015/",
              "mapslink": "https://goo.gl/maps/AcU6m9TtzYr",
              "games": [
                  {
                      "gamenum": 1,
                      "opponent": "Belle",
                      "type": "Pool Play",
                      "score_us": 13,
                      "score_them": 2,
                  },
                  {
                      "gamenum": 2,
                      "opponent": "Notorious CLE",
                      "type": "Pool Play",
                      "score_us": 13,
                      "score_them": 1,
                  },
                  {
                      "gamenum": 3,
                      "opponent": "RevoLOUtion",
                      "type": "Pool Play",
                      "score_us": 13,
                      "score_them": 2,
                  },
                  {
                      "gamenum": 4,
                      "opponent": "RevoLOUtion",
                      "type": "Semis",
                      "score_us": 15,
                      "score_them": 5,
                  },
                  {
                      "gamenum": 5,
                      "opponent": "Notrious CLE",
                      "type": "Finals",
                      "score_us": 15,
                      "score_them": 5,
                  }
              ]
          },
          {
              "tourneyid": 4,
              "sanctioned": true,
              "name": "Chicago Heavyweights",
              "teampic": "img/Heavyweights2015_TeamPhoto.JPG",
              "date": "August 8-9, 2015",
              "location": "Rockford, IL",
              "result": "Fourth Place",
              "infolink": "http://play.usaultimate.org/events/Heavyweights-2015/",
              "mapslink": "https://goo.gl/maps/MEFQUCpBvRS2",
              "games": [
                  {
                      "gamenum": 1,
                      "opponent": "Dish",
                      "type": "Pool Play",
                      "score_us": 12,
                      "score_them": 8,
                  },
                  {
                      "gamenum": 2,
                      "opponent": "Snap",
                      "type": "Pool Play",
                      "score_us": 13,
                      "score_them": 4,
                  },
                  {
                      "gamenum": 3,
                      "opponent": "RevoLOUtion",
                      "type": "Pool Play",
                      "score_us": 13,
                      "score_them": 4,
                  },
                  {
                      "gamenum": 4,
                      "opponent": "Heist",
                      "type": "Pool Play",
                      "score_us": 5,
                      "score_them": 13,
                  },
                  {
                      "gamenum": 5,
                      "opponent": "Notorious CLE",
                      "type": "Quarters",
                      "score_us": 15,
                      "score_them": 1,
                  },
                  {
                      "gamenum": 6,
                      "opponent": "Nemesis",
                      "type": "Semis",
                      "score_us": 10,
                      "score_them": 15,
                  },
                  {
                      "gamenum": 7,
                      "opponent": "Small Batch",
                      "type": "Consolation",
                      "score_us": 10,
                      "score_them": 15,
                  }
              ]
          },
          {
              "tourneyid": 5,
              "sanctioned": true,
              "name": "East Plains Sectionals",
              "teampic": "img/Sectionals2015_TeamPhoto.JPG",
              "date": "August 29-30, 2015",
              "location": "Versailles, OH",
              "result": "First Place",
              "infolink": "http://play.usaultimate.org/events/East-Plains-Womens-Sectionals-2015/",
              "mapslink": "https://goo.gl/maps/QMYj1jWz4gJ2",
              "games": [
                  {
                      "gamenum": 1,
                      "opponent": "Notorious CLE",
                      "type": "Pool Play",
                      "score_us": 13,
                      "score_them": 5,
                  },
                  {
                      "gamenum": 2,
                      "opponent": "Belle",
                      "type": "Pool Play",
                      "score_us": 13,
                      "score_them": 7,
                  },
                  {
                      "gamenum": 3,
                      "opponent": "Dayton",
                      "type": "Pool Play",
                      "score_us": 13,
                      "score_them": 1,
                  },
                  {
                      "gamenum": 4,
                      "opponent": "Flo",
                      "type": "Pool Play",
                      "score_us": 13,
                      "score_them": 2,
                  }
              ]
          },
          {
              "tourneyid": 6,
              "sanctioned": true,
              "name": "Great Lakes Regionals",
              "teampic": "img/Regionals2015_TeamPhoto.jpg",
              "date": "September 12-13, 2015",
              "location": "West Chester, OH",
              "result": "Second Place",
              "infolink": "http://play.usaultimate.org/events/Great-Lakes-Womens-Regionals-2015/",
              "mapslink": "https://goo.gl/maps/cLzrgMRDEuA2",
              "games": [
                  {
                      "gamenum": 1,
                      "opponent": "Frenzy",
                      "type": "Pool Play",
                      "score_us": 13,
                      "score_them": 0,
                  },
                  {
                      "gamenum": 2,
                      "opponent": "Spicy Tuna",
                      "type": "Pool Play",
                      "score_us": 13,
                      "score_them": 4,
                  },
                  {
                      "gamenum": 3,
                      "opponent": "Nemesis",
                      "type": "Pool Play",
                      "score_us": 8,
                      "score_them": 12,
                  },
                  {
                      "gamenum": 4,
                      "opponent": "Dish",
                      "type": "Pool Play",
                      "score_us": 13,
                      "score_them": 9,
                  },
                  {
                      "gamenum": 5,
                      "opponent": "Notorious CLE",
                      "type": "Pool Play",
                      "score_us": 13,
                      "score_them": 4,
                  },
                  {
                      "gamenum": 6,
                      "opponent": "Belle",
                      "type": "Pool Play",
                      "score_us": 13,
                      "score_them": 6,
                  }
              ]
          },


      ];



});