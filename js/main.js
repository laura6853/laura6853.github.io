'use strict';

angular
    .module('caddisApp.main', ['ngMaterial'])
    .controller('mainCtrl', mainCtrl);

function mainCtrl($scope,$timeout) {

    var s = $scope;

    s.events = [
        {
            _id:'kenny',
            artist: 'Kenny Chesney w/ Grace Potter',
            city: 'Nashville',
            genre: 'Country',
            maxprice: 260,
            minprice: 30,
            photo:'../images/kenny.png',
            state: 'TN',
        },
        {
            _id:'gerald',
            artist: 'Gerald Albright Band',
            city: 'Atlanta',
            genre: 'Jazz',
            maxprice: 15,
            minprice: 90,
            photo:'../images/gerald.png',
            state: 'GA',
        },
        {
            _id:'rock',
            artist: 'The Rock Church',
            city: 'Birmingham',
            genre: 'Electronic',
            maxprice: 20,
            minprice: 40,
            photo:'../images/rock.png',
            state: 'AL',
        }
    ];

    // Set to show a featured event on certain screen sizes. Otherwise, empty.
    s.featured = undefined;

    activate();

    /* PUBLIC FN's */


    /* PRIVATE FN's */

    function _filterEvents() {
        var width = window.innerWidth;
        var shows = s.events;

        if (width > 320 && width < 1280) {

            if (s.events.length > 2) {
                s.featured = shows.splice(0,1);
            }
        }
    }

    /*  LISTENERS  */
    // Watches for window resize in order to add/remove a featured event
    window.addEventListener('resize', function() {
        $timeout(_filterEvents, 500);
    });


    /* INITIALIZATION */

    function activate() {

        _filterEvents();
    }

}