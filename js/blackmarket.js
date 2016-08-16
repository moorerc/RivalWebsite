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
        "description": "Ignore a captains instructions",
      },
      {
        "id": 501,
        "title": "Tot's Time",
        "image": "badge_late.png",
        "description": "Secretly make Tots late",
      },
      {
        "id": 502,
        "title": "Car Swiper",
        "image": "badge_thief.png",
        "description": "Steal a car",
      },
      {
        "id": 503,
        "title": "Car Show",
        "image": "badge_wheel.jpg",
        "description": "Visit all team cars at a tournament or practice",
      },
      {
        "id": 504,
        "title": "Pants Party",
        "image": "badge_pants.png",
        "description": "Pants Stevie or Tots",
      },
      {
        "id": 505,
        "title": "Car Topper",
        "image": "badge_cartopper.jpg",
        "description": "Sit on top of all team cars at a tournament or practice",
      }
  ];

  $scope.users = [
      {
          "id":1,
          "name": "sadie",
          "image": "user_sadie.jpg",
          "badges": [
            {id: 502}, {id: 504}
          ]
      },
      {
          "id":2,
          "name": "ashley",
          "image": "user_ashley.jpg",
          "badges": [


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
            {id: 500}
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


          ]
      },
      {
          "id":11,
          "name": "t-lo",
          "image": "user_tlo.jpg",
          "badges": [
            {id: 502}, {id: 503}, {id: 505}
          ]
      },
      {
          "id":12,
          "name": "zeus",
          "image": "user_zeus.jpg",
          "badges": [
            {id: 500}, {id: 502}
          ]
      },
      {
          "id":14,
          "name": "tz",
          "image": "user_tz.jpg",
          "badges": [

          ]
      },
      {
          "id":15,
          "name": "brittany",
          "image": "user_brittany.jpg",
          "badges": [

          ]
      },
      {
          "id":16,
          "name": "jules",
          "image": "user_jules.jpg",
          "badges": [

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
            {id: 500}, {id: 503}, {id: 505}
          ]
      },
      {
          "id":21,
          "name": "dani",
          "image": "user_dani.jpg",
          "badges": [

          ]
      },
      {
          "id":22,
          "name": "talia",
          "image": "user_talia.jpg",
          "badges": [

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

          ]
      },
      {
          "id":37,
          "name": "hank",
          "image": "user_hank.jpg",
          "badges": [

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
