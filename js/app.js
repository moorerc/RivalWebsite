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
        "id": 100,
        "title": "First Responder",
        "image": "badge_check.png",
        "description": "Be the first to respond to a team survey (sent out by the captains).",
        "created": "",
        "created_by": 8
      },
      {
        "id": 101,
        "title": "Bridge the Gap",
        "image": "badge_chat.png",
        "description": "Skype with a teammate not in your relative location (squad group). Take a mid-hangout screenshot and post it to slack.",
        "created": "",
        "created_by": 8
      },
      {
        "id": 102,
        "title": "Sweaty Selfie",
        "image": "badge_weight.png",
        "description": "Complete a workout outside of weekly pods/practices. Take a post workout selfie and post it to slack.",
        "created": "",
        "created_by": 8
      },
      {
        "id": 103,
        "title": "Plank Pro",
        "image": "badge_abs.png",
        "description": "Beat the team record for a standard forearm plank. See below for the current 'time to beat'. If nobody has earned the badge yet, time to beat is 0. Post a video to slack of your new record.",
        "created": "",
        "created_by": 8
      },
      {
        "id": 104,
        "title": "Dance Chain",
        "image": "badge_dance.png",
        "description": "Repeat all dance moves in the last posted 'dance chain' video, add one of your own moves to the end, and post a video of your performance of the new chain to slack.",
        "created": "",
        "created_by": 8
      },
      {
        "id": 105,
        "title": "Hi - Five",
        "image": "badge_hand.png",
        "description": "Get to know your buddies and introduce them to the team. Post five unique facts about each of them to slack.",
        "created": "",
        "created_by": 8
      },
      {
        "id": 106,
        "title": "Pump It Up",
        "image": "badge_headphones.png",
        "description": "Take a video of yourself lip-syncing to your favorite pump up song and post it to slack. (min length 10 second)",
        "created": "",
        "created_by": 8
      },
      {
        "id": 107,
        "title": "Superb Suggester",
        "image": "badge_lightbulb.png",
        "description": "Email tots with a new idea for a badge and the criteria to earn it.  Requirements: (1) everyone has a reasonably fair chance of earning (2) you could make a convincing argument on how it benefits the team / working towards our goals",
        "created": "",
        "created_by": 8
      },
      {
        "id": 108,
        "title": "Cheer Master",
        "image": "badge_megaphone.png",
        "description": "Come up with a new team cheer and share via slack.",
        "created": "",
        "created_by": 8
      },
      {
        "id": 109,
        "title": "Reporting for Duty",
        "image": "badge_officer.png",
        "description": "Volunteer for an officer or committee member role on our team.",
        "created": "",
        "created_by": 8
      },
      {
        "id": 110,
        "title": "Throwin' Around Trophy",
        "image": "badge_trophy.png",
        "description": "Throw with each member of our team for a minimum of one uninterrupted 15 min segment. Keep a log of when you threw with who and submit to tots for approval.",
        "created": "",
        "created_by": 8
      },
      {
        "id": 111,
        "title": "Happy Historian",
        "image": "badge_quill.png",
        "description": "Share a success story of one of your teammates via slack - can be recounting a sick play they made at a practice or tournament, sharing the work they've put in to reach a goal, or describing another way that their effort shines through.",
        "created": "",
        "created_by": 14
      },
      {
        "id": 112,
        "title": "Hydration",
        "image": "badge_bottle.png",
        "description": "Take a photo of yourself with your water bottle every day for 2 weeks straight and post it to slack.",
        "created": "",
        "created_by": 10
      },
      {
        "id": 113,
        "title": "Snack Attack",
        "image": "badge_cupcake.png",
        "description": "Bring a shareable amount of team snacks to a practice or tournament. Because snacks.",
        "created": "",
        "created_by": 8
    },
    {
      "id": 114,
      "title": "Neon Night",
      "image": "badge_moon.png",
      "description": "Wear neon to practice/pod/workout on 'Neon Night' 7/19. Post photo evidence to slack.",
      "created": "",
      "created_by": 8
  },
  {
    "id": 115,
    "title": "All-Star Supporter",
    "image": "badge_allstar.png",
    "description": "Watch an All Star Tour game (live stream or in person) and support women's ultimate and Stevie! Post photo evidence to slack.",
    "created": "",
    "created_by": 8
  }

  ];

  $scope.users = [
      {
          "id":1,
          "name": "sadie",
          "image": "user_sadie.jpg",
          "badges": [
              {
                  "id":109,
                  "date_earned":"1466292600000",
                  "details":"Travel Coordinator"
              },
              {
                  "id":100,
                  "date_earned":"1468805425000",
                  "details":"CHC Van Packet"
              },

          ]
      },
      {
          "id":2,
          "name": "ashley",
          "image": "user_ashley.jpg",
          "badges": [
          	{
                  "id":109,
                  "date_earned":"1466292600000",
                  "details":"Travel Coordinator"
            },
            {
                  "id":102,
                  "date_earned":"1468973760000",
                  "details":""
            },
        ]
      },
      {
          "id":3,
          "name": "shakes",
          "image": "user_shakes.jpg",
          "badges": [
              {
                  "id":109,
                  "date_earned":"1466292600000",
                  "details":"Uniform Committee"
              },
              {
                    "id":102,
                    "date_earned":"1468888920000",
                    "details":""
              },
              {
                    "id":114,
                    "date_earned":"1468985880000",
                    "details":""
              },

          ]
      },
      {
          "id":4,
          "name": "butts",
          "image": "user_butts.jpg",
          "badges": [
              {
                  "id":100,
                  "date_earned":"1465771961000",
                  "details":"ESC Dinner Survey"
              },
              {
                  "id":103,
                  "date_earned":"1468346280000",
                  "details":"New Record - 3:15"
              },
              {
                    "id":114,
                    "date_earned":"1468985880000",
                    "details":""
              },

          ]
      },
      {
          "id":5,
          "name": "stevie",
          "image": "user_stevie.jpg",
          "badges": [
              {
                  "id":100,
                  "date_earned":"1466594436000",
                  "details":"Buddy Match Survey"
              }
          ]
      },
      {
          "id":6,
          "name": "champ",
          "image": "user_champ.jpg",
          "badges": []
      },
      {
          "id":8,
          "name": "tots",
          "image": "user_tots.jpg",
          "badges": [
              {
                  "id":109,
                  "date_earned":"1466292600000",
                  "details":"Captain, Webmaster"
              },
              {
                  "id":107,
                  "date_earned":"1467838800000",
                  "details":"Snack Attack"
              },
              {
                  "id":103,
                  "date_earned":"1468275120000",
                  "details":"New Record - 2:30"
              },
              {
                  "id":101,
                  "date_earned":"1468382580000",
                  "details":"Google Hangout with TLo"
              },
              {
                    "id":102,
                    "date_earned":"1468884960000",
                    "details":""
              },
              {
                    "id":114,
                    "date_earned":"1468968000000",
                    "details":""
              },
              {
                  "id":104,
                  "date_earned":"1468632000000",
                  "details":"Link 1"
              }

          ]
      },
      {
          "id":9,
          "name": "janine",
          "image": "user_janine.jpg",
          "badges": [
              {
                  "id":109,
                  "date_earned":"1466292600000",
                  "details":"Captain"
              },
          ]
      },
      {
          "id":10,
          "name": "kristen",
          "image": "user_kristen.jpg",
          "badges": [
              {
                  "id":107,
                  "date_earned":"1468009800000",
                  "details":"Hydration"
              },
              {
                  "id":109,
                  "date_earned":"1468007880000",
                  "details":"Snack Captain"
              },
              {
                    "id":114,
                    "date_earned":"1468985880000",
                    "details":""
              },
              {
                  "id":113,
                  "date_earned":"1468674000000",
                  "details":"All the snacks. #snackcaptain"
              }
          ]
      },
      {
          "id":11,
          "name": "t-lo",
          "image": "user_tlo.jpg",
          "badges": [
              {
                  "id":109,
                  "date_earned":"1466292600000",
                  "details":"Social Media Master"
              },
              {
                  "id":103,
                  "date_earned":"1467706500000",
                  "details":"New Record - 2:00"
              },
              {
                  "id":105,
                  "date_earned":"1468004460000",
                  "details":""
              },
              {
                  "id":101,
                  "date_earned":"1468362000000",
                  "details":"Google Hangout with Tots"
              }
          ]
      },
      {
          "id":12,
          "name": "zeus",
          "image": "user_zeus.jpg",
          "badges": [
              {
                    "id":102,
                    "date_earned":"1468885020000",
                    "details":""
              },
              {
                    "id":114,
                    "date_earned":"1468985880000",
                    "details":""
              },
          ]
      },
      {
          "id":13,
          "name": "sam",
          "image": "user_sam.jpg",
          "badges": []
      },
      {
          "id":14,
          "name": "tz",
          "image": "user_tz.jpg",
          "badges": [
              {
                  "id":109,
                  "date_earned":"1466292600000",
                  "details":"Uniform Committee"
              },
              {
                  "id":107,
                  "date_earned":"1467936900000",
                  "details":"Happy Historian"
              },
              {
                    "id":114,
                    "date_earned":"1468968000000",
                    "details":""
              },
              {
                  "id":108,
                  "date_earned":"1469152500000",
                  "details":"A-W-E-S-O-M-E"
              }
          ]
      },
      {
          "id":15,
          "name": "brittany",
          "image": "user_brittany.jpg",
          "badges": [
              {
                    "id":102,
                    "date_earned":"1468888380000",
                    "details":""
              },
              {
                    "id":114,
                    "date_earned":"1468968000000",
                    "details":""
              },
              {
                  "id":104,
                  "date_earned":"1468632000000",
                  "details":"Link 3"
              }
          ]
      },
      {
          "id":16,
          "name": "jules",
          "image": "user_jules.jpg",
          "badges": [
              {
                  "id":109,
                  "date_earned":"1466292600000",
                  "details":"Uniform Committee, Social Media Master"
              },
              {
                    "id":114,
                    "date_earned":"1468985880000",
                    "details":""
              },
              {
                  "id":101,
                  "date_earned":"1468967760000",
                  "details":"Google Hangout with TLo"
              },
              {
                  "id":111,
                  "date_earned":"1468414560000",
                  "details":"Dani goes horizontal."
              }
          ]
      },
      {
          "id":18,
          "name": "harley",
          "image": "user_harley.jpg",
          "badges": [
              {
                  "id":109,
                  "date_earned":"1466292600000",
                  "details":"Captain"
              },
              {
                    "id":114,
                    "date_earned":"1468985880000",
                    "details":""
              },
              {
                  "id":101,
                  "date_earned":"1468628100000",
                  "details":"Google Hangout with Tots"
              }
          ]
      },
      {
          "id":20,
          "name": "sophie",
          "image": "user_sophie.jpg",
          "badges": [
              {
                  "id":109,
                  "date_earned":"1466292600000",
                  "details":"Webmaster"
              },
              {
                    "id":102,
                    "date_earned":"1468889220000",
                    "details":""
              },
              {
                    "id":114,
                    "date_earned":"1468985880000",
                    "details":""
              },
          ]
      },
      {
          "id":21,
          "name": "dani",
          "image": "user_dani.jpg",
          "badges": [
              {
                    "id":114,
                    "date_earned":"1468969620000",
                    "details":""
              },
          ]
      },
      {
          "id":22,
          "name": "talia",
          "image": "user_talia.jpg",
          "badges": [
              {
                    "id":102,
                    "date_earned":"1468888740000",
                    "details":""
              },
              {
                    "id":114,
                    "date_earned":"1468968000000",
                    "details":""
              },
          ]
      },
      {
          "id":27,
          "name": "bailey",
          "image": "user_bailey.jpg",
          "badges": []
      },
      {
          "id":28,
          "name": "monty",
          "image": "user_monty.jpg",
          "badges": [
              {
                  "id":109,
                  "date_earned":"1466292600000",
                  "details":"Treasurer"
              },
              {
                  "id":113,
                  "date_earned":"1468755900000",
                  "details":"Banana Bread"
              }
          ]
      },
      {
          "id":30,
          "name": "jodi",
          "image": "user_jodi.jpg",
          "badges": []
      },
      {
          "id":31,
          "name": "sara scott",
          "image": "user_sarascott.jpg",
          "badges": [
              {
                  "id":100,
                  "date_earned":"1465771254000",
                  "details":"Jersey Number Survey"
              },
              {
                    "id":102,
                    "date_earned":"1468884960000",
                    "details":""
              },
              {
                    "id":114,
                    "date_earned":"1468968720000",
                    "details":""
              },
              {
                  "id":104,
                  "date_earned":"1468632000000",
                  "details":"Link 2"
              }
          ]
      },
      {
          "id":37,
          "name": "hank",
          "image": "user_hank.jpg",
          "badges": [
              {
                  "id":109,
                  "date_earned":"1466292600000",
                  "details":"MI Pod Leader"
              },
              {
                    "id":102,
                    "date_earned":"1468888680000",
                    "details":""
              },
          ]
      },
      {
          "id":77,
          "name": "amanda",
          "image": "user_amanda.jpg",
          "badges": [
              {
                  "id":109,
                  "date_earned":"1466292600000",
                  "details":"Treasurer"
              },
          ]
      },
      {
          "id":400,
          "name": "deanna",
          "image": "user_deanna.jpg",
          "badges": [
              {
                    "id":114,
                    "date_earned":"1468985880000",
                    "details":""
              },
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