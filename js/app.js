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

    $scope.getTotalBadgesEarned = function() {
        var total = 0;
        for (user of $scope.users) {
            total = total + user.badges.length;
        }
        return total;
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
},
{
  "id": 116,
  "title": "Bonding Badge Badge",
  "image": "badge_pals.png",
  "description": "Take a photo of yourself and a teammate doing a non-frisbee related activity together and post it to slack. Photo must include participants hanging out together during the week, outside of your homes. (Pictures at practice, workouts, to/from rival events, eating after practice, or solely with people you live with do not count!)",
  "created": "",
  "created_by": 16
},
{
  "id": 117,
  "title": "Sleeping Beauty",
  "image": "badge_zs.png",
  "description": "Take a selfie with a sleeping teammate (during non-normal sleep hours) and post it to slack.",
  "created": "",
  "created_by": 31
},
{
  "id": 118,
  "title": "Snapchat Soulmates",
  "image": "badge_ghost.png",
  "description": "Achieve 'best friend' status (the smiling face or yellow heart emoji) on Snapchat with a teammate not in your pod! Post screenshot proof to slack channel. ",
  "created": "",
  "created_by": 15
},
{
  "id": 119,
  "title": "Border Patrol",
  "image": "badge_car.png",
  "description": "Take a photo of/by a state border sign and post it to slack. Only one photo needed per group. After a state border is claimed, nobody else can earn badge credit for that state.",
  "created": "",
  "created_by": 31
},
{
  "id": 120,
  "title": "RAK",
  "image": "badge_heart.png",
  "description": "Complete a random act of kindness for a Rival teammate/coach. Share evidence (photo or description) of the act you've committed or award badge credit to someone for an act you received via slack.",
  "created_by": 8
},
{
  "id": 121,
  "title": "Decathlon",
  "image": "badge_torch.png",
  "description": "Complete each of the following exercises (see email) in succession as fast as possible. Exercises can be completed in any order but full quantity must be completed before switching. Post a before and after photo along with your time as evidence of completion to slack.",
  "created_by": 8
},
{
  "id": 122,
  "title": "Pokemon No",
  "image": "badge_pokeball.png",
  "description": "Catch someone else (stranger/teammate/etc) playing Pokemon Go. Take a selfie with them in the shot and post to slack. No credit if player catches you in the act.",
  "created_by": 8
},
{
  "id": 123,
  "title": "Fifty Plates",
  "image": "badge_licenseplate.png",
  "description": "Take a photo of / selfie with a state license plate and post it to slack. Individual credit only, no groups. After a state is claimed, nobody else can earn badge credit for that state.",
  "created_by": 11
},
{
  "id": 124,
  "title": "Rusty Rampage",
  "image": "badge_burger.png",
  "description": "Snap a photo of a teammate eating unhealthy food (or really digging in to any food) and post it to slack. Can’t be at team dinners (ex: if we all get ice cream during a tourney or something).",
  "created_by": 11
},
{
  "id": 125,
  "title": "Idyllic Improvement",
  "image": "badge_arrowcircle.png",
  "description": "Solicit feedback from a teammate, coach, or captain on how to improve your game. Prepare and complete a next step that incorporates their advice. Summarize your experience via Slack for credit.",
  "created_by": 8
},
{
  "id": 126,
  "title": "Walker Stalker",
  "image": "badge_stalker.png",
  "description": "Take 5 photos of a teammate wearing 5 different outfits without getting caught. If you are caught you can no longer use that person to get this badge … you must stalk someone else. Can't be a housemate.",
  "created_by": 9
},
{
  "id": 127,
  "title": "On Track",
  "image": "badge_track.png",
  "description": "Take a picture of yourself at a track post sprint workout (let’s get ready for regionals)!!",
  "created_by": 9
},
{
  "id": 128,
  "title": "Anaconda",
  "image": "badge_snake.png",
  "description": "Take a video or post picture of you anaconda-ing someone. What is an anaconda? One of the three forms of armpit tickling of course -- make sure you have an unsuspecting target, create a fake scenario that causes them to lift their arm up (or they may create an opening on their own). When you see the prime opportunity, cup your hand and like an anaconda, pounce grabbing mid armpit and yelling ANACONDA!!",
  "created_by": 9
},
{
  "id": 129,
  "title": "Teammate Terror",
  "image": "badge_scream.png",
  "description": "Videotape yourself scaring a teammate and upload to slack.",
  "created_by": 9
},
{
  "id": 130,
  "title": "Innovation Station",
  "image": "badge_brain.png",
  "description": "Can receive badge three times. Must include picture of innovation space/ innovated equipment or exercise amendment. Can include picture of self if person has to modify workout for solo completion (i.e. Fakes instead of throws, throwing into nets). [See email for full explanation]",
  "created_by": 16
},
{
  "id": 131,
  "title": "Hucking Habit",
  "image": "badge_throw.png",
  "description": "Work on your individual drive to improve! Throw 50 forehand hucks, 50 backhand hucks, 20 IO hucks, 20 OI hucks, and 15 hammers. By yourself. Take a pic of you and your friend Disc; post to slack for a #badge.",
  "created_by": 14
},
{
  "id": 132,
  "title": "Fab Five",
  "image": "badge_five.png",
  "description": "Earn this badge by earning five other badges between RBQ updates.",
  "created_by": 28
},
{
  "id": 133,
  "title": "Hometown Hero",
  "image": "badge_house.png",
  "description": "Share something you love about your hometown or the city that you're currently living in via a site-specific selfie. Must explain in comment what it is and why it's important to you.",
  "created_by": 14
},
{
  "id": 134,
  "title": "The Ruler",
  "image": "badge_ruler.png",
  "description": "Complete this badge by taking a stab at the 2014 Club Nationals Rules Quiz (see email for link). Email me your answers to the twelve multiple choice questions and get at least 70% correct for badge credit. ",
  "created_by": 8
},
{
  "id": 135,
  "title": "Gold Star",
  "image": "badge_goldstar.png",
  "description": "Earned by attempting a badge and giving full effort but not quite meeting the requirements. (Ex: attempting the Plank Pro but falling short of the record).",
  "created_by": 31
},
{
  "id": 136,
  "title": "Rise and Shine",
  "image": "badge_alarm.png",
  "description": "Earned by taking a selfie upon waking up (and before getting out of bed) for five consecutive mornings and submitting the photos to slack.",
  "created_by": 31
},
{
  "id": 137,
  "title": "Adulting",
  "image": "badge_adult.png",
  "description": "Submit an example to slack of a time when were very 'adult' and a time when you really weren't. Because rival is all about balance. (Ex: I pulled the hair out of the drain and then ate candy for dinner. )",
  "created_by": 4
},

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
              {
                  "id":115,
                  "date_earned":"1469315520000",
                  "details":"vs Traffic"
              },
              {
                  "id":118,
                  "date_earned":"1470005460000",
                  "details":"Brittany, Sophie"
              },
              {
                  "id":119,
                  "date_earned":"1470009840000",
                  "details":"West Virginia"
              },
              {
                  "id":115,
                  "date_earned":"1470871620000",
                  "details":"vs Brute Squad"
              },
              {
                  "id":119,
                  "date_earned":"1471048080000",
                  "details": "Indiana"
              },
              {
                  "id":117,
                  "date_earned":"1471203480000",
                  "details":"Stevie ZZZ"
              },
              {
                    "id":123,
                    "date_earned":"1471645260000",
                    "details":"West Virginia"
              },
              {
                    "id":123,
                    "date_earned":"1471652820000",
                    "details":"Kentucky"
              },
              {
                    "id":123,
                    "date_earned":"1471655160000",
                    "details":"New Jersey"
              },
              {
                    "id":123,
                    "date_earned":"1471655220000",
                    "details":"Tennessee"
              },
              {
                  "id":116,
                  "date_earned":"1473167760000",
                  "details":"Sadie/Kristen/Sophie/Harley/D Cbus Bond"
              },
              {
                  "id":124,
                  "date_earned":"1473513360000",
                  "details":"sophie breakfast"
              },
              {
                  "id":100,
                  "date_earned":"1473720000000",
                  "details":"Natties Roster Info"
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
            {
                "id":115,
                "date_earned":"1469588760000",
                "details":"vs Fury/Nightlock"
            },
            {
                "id":113,
                "date_earned":"1469278800000",
                "details":"CHC Snacks"
            },
            {
                "id":109,
                "date_earned":"1469278800000",
                "details":"CHC Stats Team"
            },
            {
                  "id":134,
                  "date_earned":"1472584800000",
                  "details":""
            },
            {
                "id":100,
                "date_earned":"1473709500000",
                "details":"Post Regionals Practice Prefs"
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
              {
                    "id":127,
                    "date_earned":"1471795620000",
                    "details":""
              },
              {
                  "id":116,
                  "date_earned":"1471663860000",
                  "details":"Zeus/Sophie/Shakes do AA"
              },
              {
                    "id":123,
                    "date_earned":"1472223840000",
                    "details":"New Mexico"
              },
              {
                    "id":123,
                    "date_earned":"1472267100000",
                    "details":"Montana"
              },
              {
                    "id":123,
                    "date_earned":"1472592360000",
                    "details":"Rhode Island"
              },
              {
                  "id":120,
                  "date_earned":"1473386040000",
                  "details":"backrubs for janine"
              },
              {
                  "id":117,
                  "date_earned":"1473639840000",
                  "details":"Jules ZZZ"
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
              {
                  "id":109,
                  "date_earned":"1469278800000",
                  "details":"CHC Stats Team"
              },
              {
                  "id":118,
                  "date_earned":"1469999640000",
                  "details":"Tots"
              },
              {
                  "id":115,
                  "date_earned":"1470871620000",
                  "details":"vs Brute Squad"
              },
              {
                    "id":102,
                    "date_earned":"1471090320000",
                    "details":""
              },
              {
                    "id":123,
                    "date_earned":"1471403100000",
                    "details":"Ohio"
              },
              {
                    "id":123,
                    "date_earned":"1471816260000",
                    "details":"Kansas"
              },
              {
                    "id":123,
                    "date_earned":"1471639560000",
                    "details":"Massachusetts"
              },
              {
                    "id":123,
                    "date_earned":"1472249220000",
                    "details":"Washington"
              },
              {
                    "id":135,
                    "date_earned":"1473375540000",
                    "details":"Hometown Hero Attempt (+ all other close badge attempts )"
              },
              {
                    "id":136,
                    "date_earned":"1473857760000",
                    "details":""
              },
              {
                  "id":107,
                  "date_earned":"1473551280000",
                  "details":"Adulting"
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
              },
              {
                  "id":116,
                  "date_earned":"1470937080000",
                  "details":"TLo & Stevie"
              },
          ]
      },
      {
          "id":6,
          "name": "champ",
          "image": "user_champ.jpg",
          "badges": [
              {
                  "id":115,
                  "date_earned":"1469315520000",
                  "details":"vs Traffic"
              },
              {
                  "id":109,
                  "date_earned":"1469278800000",
                  "details":"CHC Stats Team"
              },
              {
                    "id":123,
                    "date_earned":"1471636260000",
                    "details":"Indiana"
              },
              {
                    "id":123,
                    "date_earned":"1471732560000",
                    "details":"Oklahoma"
              },
              {
                    "id":123,
                    "date_earned":"1471732560000",
                    "details":"Illinois"
              },
              {
                    "id":123,
                    "date_earned":"1471732680000",
                    "details":"Maine"
              },
              {
                    "id":102,
                    "date_earned":"1471483800000",
                    "details":""
              },
              {
                    "id":123,
                    "date_earned":"1472245500000",
                    "details":"Hawaii"
              },
          ]
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
              },
              {
                  "id":106,
                  "date_earned":"1469239140000",
                  "details":""
              },
              {
                  "id":115,
                  "date_earned":"1469588520000",
                  "details":"vs Fury/Nightlock"
              },
              {
                  "id":118,
                  "date_earned":"1470003780000",
                  "details":"Sara Scott, Butts, Kristen, Jules, Zeus"
              },
              {
                  "id":103,
                  "date_earned":"1470704220000",
                  "details":"New Record - 3:20"
              },
              {
                  "id":112,
                  "date_earned":"1471231020000",
                  "details":""
              },
              {
                    "id":123,
                    "date_earned":"1471404000000",
                    "details":"California"
              },
              {
                    "id":123,
                    "date_earned":"1471615380000",
                    "details":"Texas"
              },
              {
                    "id":123,
                    "date_earned":"1471811040000",
                    "details":"Nevada"
              },
              {
                    "id":123,
                    "date_earned":"1471790700000",
                    "details":"Florida"
              },
              {
                    "id":127,
                    "date_earned":"1471838820000",
                    "details":""
              },
              {
                    "id":121,
                    "date_earned":"1471492920000",
                    "details":""
              },
              {
                  "id":105,
                  "date_earned":"1471927560000",
                  "details":""
              },
              {
                    "id":102,
                    "date_earned":"1472133660000",
                    "details":""
              },
              {
                  "id":107,
                  "date_earned":"1472528520000",
                  "details":"The Ruler"
              },
              {
                  "id":113,
                  "date_earned":"1472922000000",
                  "details":"Gatorade"
              },
              {
                  "id":103,
                  "date_earned":"1473255000000",
                  "details":"New Record - 3:31"
              },
              {
                  "id":116,
                  "date_earned":"1473269040000",
                  "details":"Tots/Sara coffe + studying"
              },
              {
                    "id":123,
                    "date_earned":"1473734640000",
                    "details":"Real Life Hawaii"
              },
              {
                    "id":133,
                    "date_earned":"1473375060000",
                    "details":"Sandwiches"
              },
              {
                  "id":117,
                  "date_earned":"1473635040000",
                  "details":"TLo ZZZ"
              },
              {
                  "id":113,
                  "date_earned":"1473544800000",
                  "details":"Regionals Rice Krispies"
              },

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
              {
                  "id":119,
                  "date_earned":"1470262080000",
                  "details":"Montana"
              },
              {
                    "id":102,
                    "date_earned":"1470262020000",
                    "details":""
              },
              {
                  "id":107,
                  "date_earned":"1470939960000",
                  "details":"Walker Stalker"
              },
              {
                  "id":107,
                  "date_earned":"1470940140000",
                  "details":"On Track"
              },
              {
                  "id":107,
                  "date_earned":"1470940560000",
                  "details":"Anaconda Badge"
              },
              {
                  "id":107,
                  "date_earned":"1470940620000",
                  "details":"Teammate Terror"
              },
              {
                  "id":119,
                  "date_earned":"1470937560000",
                  "details":"Minnesota"
              },
              {
                  "id":119,
                  "date_earned":"1470937560000",
                  "details":"Wyoming"
              },
              {
                  "id":119,
                  "date_earned":"1470937560000",
                  "details":"Idaho"
              },
              {
                  "id":119,
                  "date_earned":"1470937980000",
                  "details": "Wisconsin"
              },
              {
                  "id":128,
                  "date_earned":"1471790400000",
                  "details":"Kristen"
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
              },
              {
                  "id":111,
                  "date_earned":"1469408100000",
                  "details":"Sophie and the Speaker"
              },
              {
                  "id":115,
                  "date_earned":"1469841720000",
                  "details":"vs Molly Brown"
              },
              {
                  "id":115,
                  "date_earned":"1469841720000",
                  "details":"in Person Bonus"
              },
              {
                  "id":116,
                  "date_earned":"1469934360000",
                  "details":"Buddy Bonding"
              },
              {
                    "id":121,
                    "date_earned":"1470788820000",
                    "details":""
              },
              {
                  "id":116,
                  "date_earned":"1473167760000",
                  "details":"Sadie/Kristen/Sophie/Harley/D Cbus Bond"
              },
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
              },
              {
                    "id":102,
                    "date_earned":"1469558280000",
                    "details":""
              },
              {
                  "id":107,
                  "date_earned":"1471089240000",
                  "details":"Fifty Plates"
              },
              {
                  "id":107,
                  "date_earned":"1470937140000",
                  "details":"Rusty Rampage"
              },
              {
                  "id":115,
                  "date_earned":"1470887820000",
                  "details":"vs Brute Squad"
              },
              {
                  "id":115,
                  "date_earned":"1470887820000",
                  "details":"In Person Bonus"
              },
              {
                  "id":116,
                  "date_earned":"1470937080000",
                  "details":"TLo & Stevie"
              },
              {
                  "id":117,
                  "date_earned":"1471117980000",
                  "details":"Talia ZZZ"
              },
              {
                  "id":117,
                  "date_earned":"1471205040000",
                  "details":"Brittany ZZZ"
              },
              {
                  "id":117,
                  "date_earned":"1471209120000",
                  "details":"Hank ZZZ"
              },
              {
                    "id":123,
                    "date_earned":"1471439220000",
                    "details":"Wisconsin"
              },
              {
                    "id":123,
                    "date_earned":"1471524840000",
                    "details":"Colorado"
              },
              {
                    "id":123,
                    "date_earned":"1471731120000",
                    "details":"Alaska"
              },
              {
                    "id":123,
                    "date_earned":"1471801860000",
                    "details":"Connecticut"
              },
              {
                    "id":123,
                    "date_earned":"1471795740000",
                    "details":"Nebraska"
              },
              {
                    "id":102,
                    "date_earned":"1471532400000",
                    "details":""
              },
              {
                  "id":118,
                  "date_earned":"1471528680000",
                  "details":"Jules, Dani"
              },
              {
                  "id":116,
                  "date_earned":"1471663860000",
                  "details":"Zeus/Sophie/Shakes do AA"
              },
              {
                  "id":116,
                  "date_earned":"1471663860000",
                  "details":"Zeus/Sophie/Shakes do AA"
              },
              {
                  "id":116,
                  "date_earned":"1471663860000",
                  "details":"Zeus/Sophie/Shakes do AA"
              },
              {
                  "id":124,
                  "date_earned":"1471671240000",
                  "details":""
              },
              {
                  "id":124,
                  "date_earned":"1471705260000",
                  "details":""
              },
              {
                  "id":108,
                  "date_earned":"1471704900000",
                  "details":"Shenanigans"
              },
              {
                  "id":122,
                  "date_earned":"1471706580000",
                  "details":"Zeus"
              },
              {
                  "id":120,
                  "date_earned":"1472132760000",
                  "details":"pre-colonial map gift for tz"
              },
              {
                    "id":134,
                    "date_earned":"1472568660000",
                    "details":""
              },
              {
                    "id":134,
                    "date_earned":"1472568660000",
                    "details":"Score Bonus"
              },
              {
                  "id":112,
                  "date_earned":"1472590260000",
                  "details":""
              },
              {
                  "id":117,
                  "date_earned":"1472590500000",
                  "details":"Zeus ZZZ"
              },
              {
                  "id":126,
                  "date_earned":"1472833800000",
                  "details":"Stalked Sophie"
              },
              {
                  "id":120,
                  "date_earned":"1474749360000",
                  "details":"map for tots"
              },
              {
                  "id":132,
                  "date_earned":"1473102000000",
                  "details":"before update 8"
              },
              {
                  "id":124,
                  "date_earned":"1473464940000",
                  "details":"sara cookies"
              },
              {
                  "id":117,
                  "date_earned":"1473543600000",
                  "details":"TZ ZZZ"
              },
              {
                  "id":111,
                  "date_earned":"1473684240000",
                  "details":"Shoutouts for Dani"
              },

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
              {
                  "id":108,
                  "date_earned":"1469471340000",
                  "details":"Win the Party"
              },
              {
                  "id":111,
                  "date_earned":"1469471280000",
                  "details":"Kristens Box Out 'Jump'"
              },
              {
                  "id":115,
                  "date_earned":"1469841720000",
                  "details":"vs Molly Brown"
              },
              {
                  "id":115,
                  "date_earned":"1469841720000",
                  "details":"in Person Bonus"
              },
              {
                  "id":116,
                  "date_earned":"1469934360000",
                  "details":"Buddy Bonding"
              },
              {
                  "id":119,
                  "date_earned":"1470003360000",
                  "details":"Colorado"
              },
              {
                  "id":119,
                  "date_earned":"1471048080000",
                  "details": "Indiana"
              },
              {
                  "id":117,
                  "date_earned":"1471132500000",
                  "details":"Stevie ZZZ"
              },
              {
                  "id":117,
                  "date_earned":"1471204740000",
                  "details":"Stevie ZZZ"
              },
              {
                  "id":122,
                  "date_earned":"1471121520000",
                  "details":"Sadie"
              },
              {
                  "id":118,
                  "date_earned":"1471699320000",
                  "details":"TLo"
              },
              {
                  "id":116,
                  "date_earned":"1471663860000",
                  "details":"Zeus/Sophie/Shakes do AA"
              },
              {
                  "id":116,
                  "date_earned":"1471663860000",
                  "details":"Zeus/Sophie/Shakes do AA"
              },
              {
                  "id":116,
                  "date_earned":"1471663860000",
                  "details":"Zeus/Sophie/Shakes do AA"
              },
              {
                  "id":124,
                  "date_earned":"1471672440000",
                  "details":""
              },
              {
                    "id":123,
                    "date_earned":"1471880100000",
                    "details":"Minnesota"
              },
              {
                    "id":123,
                    "date_earned":"1471881900000",
                    "details":"Virginia"
              },
              {
                    "id":123,
                    "date_earned":"1472253420000",
                    "details":"Maryland"
              },
              {
                    "id":134,
                    "date_earned":"1472561760000",
                    "details":""
              },
              {
                    "id":134,
                    "date_earned":"1472561760000",
                    "details":"Score Bonus"
              },
              {
                  "id":126,
                  "date_earned":"1472834820000",
                  "details":"Stalked Hank"
              },
              {
                  "id":126,
                  "date_earned":"1474737840000",
                  "details":"Stalked Kristen"
              },
              {
                  "id":126,
                  "date_earned":"1474737900000",
                  "details":"Stalked Shakes"
              },
              {
                  "id":132,
                  "date_earned":"1473102000000",
                  "details":"before update 8"
              },
              {
                    "id":123,
                    "date_earned":"1473293400000",
                    "details":"Mississippi"
              },
          ]
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
              },
              {
                  "id":106,
                  "date_earned":"1469239140000",
                  "details":""
              },
              {
                  "id":116,
                  "date_earned":"1469587560000",
                  "details":"Silent Disco"
              },
              {
                    "id":102,
                    "date_earned":"1470061500000",
                    "details":""
              },
              {
                  "id":107,
                  "date_earned":"1470791400000",
                  "details":"Idyllic Improvement"
              },
              {
                  "id":113,
                  "date_earned":"1471089600000",
                  "details":"SFI Cookies"
              },
              {
                  "id":103,
                  "date_earned":"1471397640000",
                  "details":"New Record - 3:30"
              },
              {
                    "id":102,
                    "date_earned":"1471311420000",
                    "details":""
              },
              {
                  "id":107,
                  "date_earned":"1471399260000",
                  "details":"Hucking Habit"
              },
              {
                  "id":116,
                  "date_earned":"1471663860000",
                  "details":"Zeus/Sophie/Shakes do AA"
              },
              {
                  "id":122,
                  "date_earned":"1472131080000",
                  "details":"Random Kids"
              },
              {
                  "id":122,
                  "date_earned":"1472131140000",
                  "details":"Zeus"
              },
              {
                  "id":124,
                  "date_earned":"1472131740000",
                  "details":""
              },
              {
                    "id":121,
                    "date_earned":"1472132040000",
                    "details":""
              },
              {
                    "id":102,
                    "date_earned":"1472230260000",
                    "details":""
              },
              {
                    "id":123,
                    "date_earned":"1472132160000",
                    "details":"North Carolina"
              },
              {
                  "id":107,
                  "date_earned":"1472134920000",
                  "details":"Hometown Hero"
              },
              {
                    "id":134,
                    "date_earned":"1472644740000",
                    "details":""
              },
              {
                  "id":113,
                  "date_earned":"1472950800000",
                  "details":"Cookies"
              },
              {
                  "id":103,
                  "date_earned":"1473255060000",
                  "details":"New Record - 4:00 (completed 9/5)"
              },
              {
                    "id":123,
                    "date_earned":"1473594300000",
                    "details":"South Dakota"
              },
              {
                  "id":125,
                  "date_earned":"1473427260000",
                  "details":"No Bounce Hucks"
              },
              {
                  "id":117,
                  "date_earned":"1473635040000",
                  "details":"TLo ZZZ"
              },
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
              },
              {
                  "id":106,
                  "date_earned":"1469239140000",
                  "details":""
              },
              {
                  "id":107,
                  "date_earned":"1469238420000",
                  "details":"Snapchat Soulmates"
              },
              {
                  "id":115,
                  "date_earned":"1469315520000",
                  "details":"vs Traffic"
              },
              {
                  "id":116,
                  "date_earned":"1469587560000",
                  "details":"Silent Disco"
              },
              {
                  "id":117,
                  "date_earned":"1471117440000",
                  "details":"Talia ZZZ"
              },
              {
                    "id":123,
                    "date_earned":"1471403460000",
                    "details":"Michigan"
              },
              {
                    "id":123,
                    "date_earned":"1471403640000",
                    "details":"Pennsylvania"
              },
              {
                    "id":123,
                    "date_earned":"1471456740000",
                    "details":"New York"
              },
              {
                  "id":116,
                  "date_earned":"1471663860000",
                  "details":"Zeus/Sophie/Shakes do AA"
              },
              {
                  "id":116,
                  "date_earned":"1471663860000",
                  "details":"Zeus/Sophie/Shakes do AA"
              },
              {
                  "id":116,
                  "date_earned":"1471663860000",
                  "details":"Zeus/Sophie/Shakes do AA"
              },
              {
                    "id":123,
                    "date_earned":"1471882860000",
                    "details":"Alabama"
              },
              {
                    "id":123,
                    "date_earned":"1471882920000",
                    "details":"Idaho"
              },
              {
                  "id":112,
                  "date_earned":"1473975360000",
                  "details":""
              },

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
              },
              {
                  "id":107,
                  "date_earned":"1469588340000",
                  "details":"Bonding Badge Badge"
              },
              {
                  "id":108,
                  "date_earned":"1469238720000",
                  "details":"Swap Horses"
              },
              {
                  "id":119,
                  "date_earned":"1470009540000",
                  "details":"Ohio"
              },
              {
                  "id":115,
                  "date_earned":"1470871620000",
                  "details":"vs Brute Squad"
              },
              {
                    "id":102,
                    "date_earned":"1470785340000",
                    "details":""
              },
              {
                    "id":121,
                    "date_earned":"1470788820000",
                    "details":""
              },
              {
                  "id":107,
                  "date_earned":"1471482120000",
                  "details":"Innovation Station"
              },
              {
                    "id":102,
                    "date_earned":"1471478820000",
                    "details":""
              },
              {
                  "id":100,
                  "date_earned":"1471822500000",
                  "details":"Regionals Van Packet"
              },
              {
                  "id":131,
                  "date_earned":"1471883100000",
                  "details":""
              },
              {
                  "id":108,
                  "date_earned":"1473708000000",
                  "details":"Who Runz the World?"
              },
              {
                  "id":117,
                  "date_earned":"1473647040000",
                  "details":"Shakes ZZZ"
              },
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
              },
              {
                  "id":115,
                  "date_earned":"1470701400000",
                  "details":"vs Scandal"
              },
              {
                  "id":115,
                  "date_earned":"1470871620000",
                  "details":"vs Brute Squad"
              },
              {
                    "id":121,
                    "date_earned":"1470788820000",
                    "details":""
              },
              {
                  "id":100,
                  "date_earned":"1470841020000",
                  "details":"Sectionals Prefs"
              },
              {
                  "id":116,
                  "date_earned":"1473167760000",
                  "details":"Sadie/Kristen/Sophie/Harley/D Cbus Bond"
              },

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
              {
                  "id":115,
                  "date_earned":"1469588580000",
                  "details":"vs Fury/Nightlock"
              },
              {
                  "id":118,
                  "date_earned":"1470141300000",
                  "details":"Sadie"
              },
              {
                  "id":119,
                  "date_earned":"1471048080000",
                  "details": "Indiana"
              },
              {
                  "id":122,
                  "date_earned":"1471210440000",
                  "details":"Sadie"
              },
              {
                    "id":121,
                    "date_earned":"1470788820000",
                    "details":""
              },
              {
                  "id":116,
                  "date_earned":"1471663860000",
                  "details":"Zeus/Sophie/Shakes do AA"
              },
              {
                  "id":116,
                  "date_earned":"1471663860000",
                  "details":"Zeus/Sophie/Shakes do AA"
              },
              {
                  "id":116,
                  "date_earned":"1471663860000",
                  "details":"Zeus/Sophie/Shakes do AA"
              },
              {
                  "id":129,
                  "date_earned":"1471721160000",
                  "details":"Hank"
              },
              {
                    "id":134,
                    "date_earned":"1472586300000",
                    "details":""
              },
              {
                  "id":116,
                  "date_earned":"1473167760000",
                  "details":"Sadie/Kristen/Sophie/Harley/D Cbus Bond"
              },
              {
                    "id":102,
                    "date_earned":"1474158240000",
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
              {
                  "id":108,
                  "date_earned":"1469300580000",
                  "details":"Red Wagon"
              },
              {
                  "id":109,
                  "date_earned":"1469278800000",
                  "details":"CHC Stats Team"
              },
              {
                    "id":102,
                    "date_earned":"1471913760000",
                    "details":""
              },
              {
                  "id":111,
                  "date_earned":"1473699600000",
                  "details":"Shoutouts for TZ"
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
              {
                  "id":111,
                  "date_earned":"1469401740000",
                  "details":"Brittanys Backhand"
              },
              {
                  "id":115,
                  "date_earned":"1469590500000",
                  "details":"vs Fury/Nightlock"
              },
              {
                  "id":116,
                  "date_earned":"1469587560000",
                  "details":"Silent Disco"
              },
              {
                  "id":119,
                  "date_earned":"1470012960000",
                  "details":"Michigan"
              },
              {
                  "id":117,
                  "date_earned":"1471204920000",
                  "details":"Brittany ZZZ"
              },
              {
                  "id":117,
                  "date_earned":"1471209120000",
                  "details":"Hank ZZZ"
              },
              {
                  "id":130,
                  "date_earned":"1472171160000",
                  "details":"Playground Throwing"
              },
              {
                    "id":123,
                    "date_earned":"1472413980000",
                    "details":"(The Real) Montana"
              },
          ]
      },
      {
          "id":27,
          "name": "bailey",
          "image": "user_bailey.jpg",
          "badges": [
              {
                  "id":117,
                  "date_earned":"1471119780000",
                  "details":"TZ ZZZ"
              },
              {
                  "id":117,
                  "date_earned":"1471208160000",
                  "details":"TZ ZZZ"
              },
              {
                  "id":122,
                  "date_earned":"1471121520000",
                  "details":"Stevie"
              },
              {
                  "id":122,
                  "date_earned":"1471304460000",
                  "details":"Strangers at Work"
              },
              {
                    "id":123,
                    "date_earned":"1471724940000",
                    "details":"Georgia"
              },
              {
                    "id":123,
                    "date_earned":"1471724940000",
                    "details":"Arkansas"
              },
              {
                    "id":102,
                    "date_earned":"1471865700000",
                    "details":""
              },
              {
                    "id":123,
                    "date_earned":"1472246460000",
                    "details":"South Carolina"
              },
              {
                    "id":123,
                    "date_earned":"1472252700000",
                    "details":"Missouri"
              },
          ]
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
              },
              {
                  "id":112,
                  "date_earned":"1469755800000",
                  "details":"Adventures of Monty and Gene"
              },
              {
                  "id":115,
                  "date_earned":"1469315520000",
                  "details":"vs Traffic"
              },
              {
                  "id":118,
                  "date_earned":"1470249120000",
                  "details":"Sadie"
              },
              {
                  "id":119,
                  "date_earned":"1471014900000",
                  "details": "Virginia"
              },
              {
                    "id":123,
                    "date_earned":"1471739280000",
                    "details":"Oregon"
              },
              {
                    "id":127,
                    "date_earned":"1471613280000",
                    "details":""
              },
              {
                    "id":123,
                    "date_earned":"1472087100000",
                    "details":"Vermont"
              },
              {
                    "id":123,
                    "date_earned":"1472227860000",
                    "details":"North Dakota"
              },
              {
                  "id":107,
                  "date_earned":"1472145900000",
                  "details":"Fab Five"
              },
              {
                    "id":123,
                    "date_earned":"1472686320000",
                    "details":"New Hampshire"
              },
          ]
      },
      {
          "id":30,
          "name": "jodi",
          "image": "user_jodi.jpg",
          "badges": [
              {
                    "id":123,
                    "date_earned":"1471457160000",
                    "details":"Arizona"
              },
          ]
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
              },
              {
                  "id":106,
                  "date_earned":"1469239140000",
                  "details":""
              },
              {
                  "id":107,
                  "date_earned":"1469239980000",
                  "details":"Sleeping Beauty"
              },
              {
                  "id":107,
                  "date_earned":"1469239380000",
                  "details":"Border Patrol"
              },
              {
                  "id":111,
                  "date_earned":"1469401380000",
                  "details":"Brittanys a Baller"
              },
              {
                  "id":113,
                  "date_earned":"1469278800000",
                  "details":"Chocolate Chip Cookies"
              },
              {
                  "id":115,
                  "date_earned":"1469590500000",
                  "details":"vs Fury/Nightlock"
              },
              {
                  "id":116,
                  "date_earned":"1469587560000",
                  "details":"Silent Disco"
              },
              {
                  "id":116,
                  "date_earned":"1469934360000",
                  "details":"Buddy Bonding"
              },
              {
                  "id":118,
                  "date_earned":"1470003960000",
                  "details":"Tots, Kristen, Jules, TLo"
              },
              {
                  "id":112,
                  "date_earned":"1470068220000",
                  "details":""
              },
              {
                    "id":134,
                    "date_earned":"1472673600000",
                    "details":""
              },
              {
                  "id":120,
                  "date_earned":"1474749120000",
                  "details":"package for tots"
              },
              {
                  "id":107,
                  "date_earned":"1472673900000",
                  "details":"Gold Star"
              },
              {
                  "id":107,
                  "date_earned":"1472940000000",
                  "details":"Rise and Shine"
              },
              {
                  "id":116,
                  "date_earned":"1473269040000",
                  "details":"Tots/Sara coffe + studying"
              },
              {
                    "id":123,
                    "date_earned":"1473547200000",
                    "details":"Utah"
              },
              {
                  "id":126,
                  "date_earned":"1473544920000",
                  "details":"Stalked Tots"
              },
              {
                  "id":125,
                  "date_earned":"1473387600000",
                  "details":"Vocal Deep Cuts for Hank"
              },
              {
                  "id":124,
                  "date_earned":"1473476340000",
                  "details":"tlo/tz cookies"
              },
              {
                  "id":124,
                  "date_earned":"1473512580000",
                  "details":"tots donut"
              },
              {
                  "id":117,
                  "date_earned":"1473635040000",
                  "details":"TLo ZZZ"
              },
              {
                  "id":113,
                  "date_earned":"1473544800000",
                  "details":"Regionals Cookies"
              },

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
              {
                  "id":115,
                  "date_earned":"1469590500000",
                  "details":"vs Fury/Nightlock"
              },
              {
                  "id":116,
                  "date_earned":"1469587560000",
                  "details":"Silent Disco"
              },
              {
                  "id":119,
                  "date_earned":"1470012960000",
                  "details":"Michigan"
              },
              {
                  "id":117,
                  "date_earned":"1471118100000",
                  "details":"Talia ZZZ"
              },
              {
                  "id":116,
                  "date_earned":"1471663860000",
                  "details":"Zeus/Sophie/Shakes do AA"
              },
              {
                  "id":116,
                  "date_earned":"1471663860000",
                  "details":"Zeus/Sophie/Shakes do AA"
              },
              {
                  "id":116,
                  "date_earned":"1471663860000",
                  "details":"Zeus/Sophie/Shakes do AA"
              },
              {
                    "id":123,
                    "date_earned":"1472000700000",
                    "details":"Iowa"
              },
              {
                    "id":134,
                    "date_earned":"1472747700000",
                    "details":""
              },
              {
                    "id":134,
                    "date_earned":"1472747700000",
                    "details":"Score Bonus"
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
              {
                  "id":115,
                  "date_earned":"1469588760000",
                  "details":"vs Fury/Nightlock"
              },
              {
                  "id":119,
                  "date_earned":"1471014900000",
                  "details": "Virginia"
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
              {
                  "id":116,
                  "date_earned":"1473167760000",
                  "details":"Sadie/Kristen/Sophie/Harley/D Cbus Bond"
              },
          ]
      },
      {
          "id":401,
          "name": "theiss",
          "image": "user_theiss.jpg",
          "badges": [
              {
                    "id":134,
                    "date_earned":"1472564580000",
                    "details":""
              },
              {
                    "id":134,
                    "date_earned":"1472564580000",
                    "details":"Score Bonus"
              },
          ]
      }
  ];

});
