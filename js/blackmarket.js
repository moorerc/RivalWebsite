var app = angular.module('myApp', []);

app.controller('MainCtrl', function($scope) {
    $scope.selectedUser = null;
    $scope.selectedBadge = null;
    $scope.selectedBadgeHistory = Array();
    $scope.currentView = "overall";

    $scope.selectView = function(view) {
        $scope.currentView = view;
    }


    $scope.selectUser = function(uid) {
        for (user of $scope.users){
            if (user.id == uid) {
                $scope.selectedUser = user;
            }
        }
        $scope.currentView = "user";
    }

    $scope.getBadgeHistory = function() {
        $scope.selectedBadgeHistory = Array();

        for (user of $scope.users) {
            for (earnedBadge of user.badges){
                console.log(earnedBadge);
                if (earnedBadge.id == $scope.selectedBadge.id){
                    $scope.selectedBadgeHistory.push({'user':user.name, 'date':earnedBadge.date_earned, 'details':earnedBadge.details})
                }
            }
        }

    }

    $scope.getBadgeTitleById = function(bid) {
        var title = "";
        for (badge of $scope.badges){
            if (badge.id == bid){
                console.log(badge);
                title = badge.title;
            }
        }
        return title;
    }

    $scope.selectBadge= function(index) {
        $scope.selectedBadge = $scope.badges[index];
        $scope.currentView = "badge";
        $scope.getBadgeHistory();
    }

    $scope.getRanking = function(id) {
            return id;
    };

    $scope.getUserImageURL = function() {
        return "img/userimages/" + $scope.selectedUser.image;
    }

    $scope.selectedUserHasBadge = function(badgeID) {
        for (badge of $scope.selectedUser.badges){
            if (badge.id == badgeID) {
                return true;
            }
        }
        return false;
    }

    $scope.userHasSelectedBadge = function(userIndex) {
        for (badge of $scope.users[userIndex].badges){
            if (badge.id == $scope.selectedBadge.id) {
                return true;
            }
        }
        return false;
    }

  $scope.badges = [
      {
        "id": 500,
        "title": "No Captains, No Rules",
        "image": "badge_norules.jpg",
        "description": "Ignore a captains instructions"
      },
      {
        "id": 501,
        "title": "Tot's Time",
        "image": "badge_late.png",
        "description": "Secretly make Tots late"
      },
      {
        "id": 502,
        "title": "Car Swiper",
        "image": "badge_thief.png",
        "description": "Steal a car"
      },
      {
        "id": 503,
        "title": "Car Show",
        "image": "badge_wheel.jpg",
        "description": "Visit all team cars at a tournament or practice"
      },
      {
        "id": 504,
        "title": "Pants Party",
        "image": "badge_pants.png",
        "description": "Pants Stevie or Tots"
      },
      {
        "id": 505,
        "title": "Car Topper",
        "image": "badge_cartopper.jpg",
        "description": "Sit on top of all team cars at a tournament or practice"
      },
      {
        "id": 506,
        "title": "One More Huck",
        "image": "badge_huck.jpg",
        "description": "Throw a successful huck as a good decision"
      },
      {
        "id": 507,
        "title": "Theiss-A-Like",
        "image": "badge_theiss.jpg",
        "description": "Stand like Theiss"
      },
      {
        "id": 508,
        "title": "Duntz",
        "image": "badge_duntz.jpg",
        "description": "Make a teammate look silly"
      },
      {
        "id": 509,
        "title": "Chubby Bunny",
        "image": "badge_bunny.jpeg",
        "description": "Post a picture with as much food in your mouth as possible"
      },
      {
        "id": 510,
        "title": "Tears of Glory",
        "image": "badge_tears.png",
        "description": "Make a teammate cry"
      },
      {
        "id": 511,
        "title": "#NotMyPinny",
        "image": "badge_pinny.jpg",
        "description": "Steal a teammate's article of clothing, and take a selfie with her, then let her find out through the black market"
      },
      {
        "id": 512,
        "title": "OB 1 Kenobi",
        "image": "badge_ob.jpg",
        "description": "Pull the disc far out of bounds"
      },
      {
        "id": 513,
        "title": "Cheer Commandeer",
        "image": "badge_cheer.jpg",
        "description": "Usurping the cheer"
      },
      {
        "id": 514,
        "title": "Sabotage",
        "image": "badge_sabotage.jpg",
        "description": "Self explanatory. Given for unexplanatory reasons"
      },
      {
        "id": 515,
        "title": "Spot Sniper",
        "image": "badge_sniper.jpg",
        "description": "Stealing someones point when not called on"
      },
      {
        "id": 516,
        "title": "Sleep Stacking",
        "image": "badge_sleep.jpg",
        "description": "Stacking as many objects as possible on sleeping teammates"
      },
      {
        "id": 517,
        "title": "Negligent Mother",
        "image": "badge_badmom.jpg",
        "description": "Leave child in car with no cracked windows"
      }
  ];

  $scope.users = [
      {
          "id":1,
          "name": "sadie",
          "image": "user_sadie.jpg",
          "badges": [
            {
              "id": 502,
              "date_earned": "1471099029000",
              "details": "Sophie's car"
            }, 
            {
              "id": 504,
              "date_earned": "1471108200000",
              "details": "Pantsed Stevie"
            },
            {
              "id": 506,
              "date_earned": "1471183800000",
              "details": "SFI Day 2"
            },
            {
              "id": 507,
              "date_earned": "1471108200000",
              "details": "Post-lightning delay SFI"
            },
            {
              "id": 512,
              "date_earned": "1471183800000",
              "details": "Bad"
            }
          ]
      },
      {
          "id":2,
          "name": "ashley",
          "image": "user_ashley.jpg",
          "badges": [
            {
              "id": 507,
              "date_earned": "1471108200000",
              "details": "Post-lightning delay SFI"
            }

          ]
      },
      {
          "id":3,
          "name": "shakes",
          "image": "user_shakes.jpg",
          "badges": [


          ]
      },
      {
          "id":4,
          "name": "butts",
          "image": "user_butts.jpg",
          "badges": [


          ]
      },
      {
          "id":5,
          "name": "stevie",
          "image": "user_stevie.jpg",
          "badges": [
            {
              "id": 500,
              "date_earned": "1471120629000",
              "details": "Went back to hotels when Tots said to stay"
            },
            {
              "id": 507,
              "date_earned": "1471108200000",
              "details": "Post-lightning delay SFI"
            }
          ]
      },
      {
          "id":6,
          "name": "champ",
          "image": "user_champ.jpg",
          "badges": [

          ]
      },
      {
          "id":8,
          "name": "tots",
          "image": "user_tots.jpg",
          "badges": [


          ]
      },
      {
          "id":9,
          "name": "janine",
          "image": "user_janine.jpg",
          "badges": [

          ]
      },
      {
          "id":10,
          "name": "kristen",
          "image": "user_kristen.jpg",
          "badges": [
            {
              "id": 508,
              "date_earned": "1471183800000",
              "details": "Sending shark attack video"
            }

          ]
      },
      {
          "id":11,
          "name": "t-lo",
          "image": "user_tlo.jpg",
          "badges": [
            {
              "id": 502,
              "date_earned": "1471099029000",
              "details": "Sophie's car"
            }, 
            {
              "id": 503,
              "date_earned": "1471099029000",
              "details": "SFI Lightning Delay"
            }, 
            {
              "id": 505,
              "date_earned": "1471099029000",
              "details": "SFI Lightning Delay"
            },
            {
              "id": 507,
              "date_earned": "1471108200000",
              "details": "Post-lightning delay SFI"
            },
            {
              "id": 512,
              "date_earned": "1471183800000",
              "details": "Bad"
            },
            {
              "id": 513,
              "date_earned": "1471183800000",
              "details": "Silly T-lo"
            },
            {
              "id": 516,
              "date_earned": "1471183800000",
              "details": "Not even one object on basically awake Brittany"
            },
            {
              "id": 517,
              "date_earned": "1471183800000",
              "details": "Left Brittany in car"
            }
          ]
      },
      {
          "id":12,
          "name": "zeus",
          "image": "user_zeus.jpg",
          "badges": [
            {
              "id": 500,
              "date_earned": "1471120629000",
              "details": "Went back to hotels when Tots said to stay"
            }, 
            {
              "id": 502,
              "date_earned": "1471099029000",
              "details": "Sophie's car"
            },
            {
              "id": 507,
              "date_earned": "1471108200000",
              "details": "Post-lightning delay SFI"
            },
            {
              "id": 516,
              "date_earned": "1471183800000",
              "details": "Many objects on sleepy Stevie"
            }
          ]
      },
      {
          "id":14,
          "name": "tz",
          "image": "user_tz.jpg",
          "badges": [
            {
              "id": 507,
              "date_earned": "1471108200000",
              "details": "Post-lightning delay SFI"
            }
          ]
      },
      {
          "id":15,
          "name": "brittany",
          "image": "user_brittany.jpg",
          "badges": [
            {
              "id": 507,
              "date_earned": "1471108200000",
              "details": "Post-lightning delay SFI"
            }

          ]
      },
      {
          "id":16,
          "name": "jules",
          "image": "user_jules.jpg",
          "badges": [
            {
              "id": 508,
              "date_earned": "1471183800000",
              "details": "Making fun of Kristen's Pitts?"
            }
          ]
      },
      {
          "id":18,
          "name": "harley",
          "image": "user_harley.jpg",
          "badges": [

          ]
      },
      {
          "id":20,
          "name": "sophie",
          "image": "user_sophie.jpg",
          "badges": [
            {
              "id": 500,
              "date_earned": "1471120629000",
              "details": "Went back to hotels when Tots said to stay"
            }, 
            {
              "id": 503,
              "date_earned": "1471099029000",
              "details": "SFI Lightning Delay"
            },
            {
              "id": 505,
              "date_earned": "1471099029000",
              "details": "SFI Lightning Delay"
            },
            {
              "id": 507,
              "date_earned": "1471108200000",
              "details": "Post-lightning delay SFI"
            }
          ]
      },
      {
          "id":21,
          "name": "dani",
          "image": "user_dani.jpg",
          "badges": [
            {
              "id": 507,
              "date_earned": "1471108200000",
              "details": "Post-lightning delay SFI"
            }
          ]
      },
      {
          "id":22,
          "name": "talia",
          "image": "user_talia.jpg",
          "badges": [
            { 
              "id": 507,
              "date_earned": "1471108200000",
              "details": "Post-lightning delay SFI"
            }
          ]
      },
      {
          "id":27,
          "name": "bailey",
          "image": "user_bailey.jpg",
          "badges": [
            {
              "id": 507,
              "date_earned": "1471108200000",
              "details": "Post-lightning delay SFI"
            }
          ]
      },
      {
          "id":28,
          "name": "monty",
          "image": "user_monty.jpg",
          "badges": [
            {
              "id": 507,
              "date_earned": "1471108200000",
              "details": "Post-lightning delay SFI"
            }
          ]
      },
      {
          "id":30,
          "name": "jodi",
          "image": "user_jodi.jpg",
          "badges": [
          {
              "id": 507,
              "date_earned": "1471108200000",
              "details": "Post-lightning delay SFI"
            }
            ]
      },
      {
          "id":31,
          "name": "sara scott",
          "image": "user_sarascott.jpg",
          "badges": [
            {
              "id": 514,
              "date_earned": "1471183800000",
              "details": "Reasons have not been given. SS sabotage needs no reasoning"
            },
            {
              "id": 515,
              "date_earned": "1471183800000",
              "details": "Always wants to play"
            }
          ]
      },
      {
          "id":37,
          "name": "hank",
          "image": "user_hank.jpg",
          "badges": [
            {
              "id": 507,
              "date_earned": "1471108200000",
              "details": "Post-lightning delay SFI"
            },
            {
              "id": 515,
              "date_earned": "1471183800000",
              "details": "Always wants to play"
            }
          ]
      },
      {
          "id":77,
          "name": "amanda",
          "image": "user_amanda.jpg",
          "badges": [

          ]
      },
      {
          "id":400,
          "name": "deanna",
          "image": "user_deanna.jpg",
          "badges": [

          ]
      },
      {
          "id":401,
          "name": "theiss",
          "image": "user_theiss.jpg",
          "badges": [
          ]
      }
  ];

});
