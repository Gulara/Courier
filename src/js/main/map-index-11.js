$(document).ready(function () {
    //////////////////////////////////////////
    //                MAP LEFT             //
    ////////////////////////////////////////
    
    
    
        function initialize() {
            var mapOptions = {
                zoom: 13, //  BÖYÜTMƏK
                center: new google.maps.LatLng(40.42557252485824, 49.84169001645499), // ENLİK UZUNLUQ
                mapTypeId: google.maps.MapTypeId.ROADMAP //  XƏRİTƏ NÖVÜ
            };
    
            var geocoder = new google.maps.Geocoder;
    
            map = new google.maps.Map(document.getElementById('map_nextV'), mapOptions);
            mapRight = new google.maps.Map(document.getElementById('map_canvas'), mapOptions);
    
            $(function () {
                var searchInput = $(".typeahead");
                var sessionToken = new google.maps.places.AutocompleteSessionToken();
                var service = new google.maps.places.AutocompleteService();
                var predictions, status;
    
                $(".typeahead").typeahead({ // SEARCH INPUT
                    highlight: true,
                    minLength: 1,
                    autoselect: true,
    
    
                }, {
                    async: true,
                    display: 'address',
                    source: function (query, process, aProcess) {
                        service.getPlacePredictions({
                            input: query,
                            sessionToken: sessionToken
                        }, function (predictions, status) {
                            aProcess(formatAddress(predictions, status));
                        });
    
                    },
                    templates: {
                        empty: [
                            '<div class="empty-message text-center" style="">',
                            'No address available.<br/>',
                            '</div>',
                        ].join('\n'),
                        suggestion: function (data) {
                            // console.log(data);
                            return ['<div class="custom-result" data-place-id="' + data.placeId +
                                '" ><div class=" custom-result__icon"><i class="fas fa-map-marker-alt "></i></div><div class="custom-result__text"><div class="custom-result__text--all"> ' +
                                data.address +
                                ' </div></div><div class="custom-result__map"><span>Map</span></div></div>'
                            ].join('\n');
                        },
                        footer: '<div style="text-align:right; padding-right: 10px;"><img src="https://cdn.doordash.com/static/img/consumer/share/powered_by_google_on_white_hdpi.png" style="height:18px;"/></div>'
                    }
    
                });
    
                var formatAddress = function (predictions, status) {
                    // console.log("Predictions", predictions);
                    // console.log("Status", status);
                    var formatttedAddress = [];
                    var placeObj = {};
                    if (status === "OK") {
                        predictions.forEach(function (prediction) {
                            placeObj.address = prediction.description;
                            placeObj.placeId = prediction.place_id;
                            formatttedAddress.push(placeObj)
                            placeObj = {};
                        });
                    }
                    // console.log("FormattedAddress", formatttedAddress);
                    return formatttedAddress;
                }
                $(document).on("click", ".custom-result__map", function () {
    
    
                    var resultPlaceId = $(this).parent().data("place-id");
                    // console.log(resultPlaceId);
                    var forFrom = $(this).parent().parent().parent().parent().next().data("id")
                    console.log("forform:", forFrom);
                    var Mycontainer = document.getElementById("Mycontainer");
                    console.log(Mycontainer);
                    var service = new google.maps.places.PlacesService(Mycontainer);
                    var MycontainerEnd = document.getElementById("MycontainerEnd");
                    var serviceEnd = new google.maps.places.PlacesService(MycontainerEnd);
                    if (forFrom < 2) {
                        service.getDetails({
                            placeId: resultPlaceId
                        }, function (place, status) {
                            var inputResultLat = place.geometry.location.lat();
                            var inputResultLng = place.geometry.location.lng();
                            console.log(inputResultLat, inputResultLng);
                            inputResultLatLng = new google.maps.LatLng(inputResultLat,
                                inputResultLng)
                            map.setCenter(inputResultLatLng)
    
    
                            $(".insurance__input").prop("disabled", false);
                            $("#map_canvas").removeClass('d-none');
                        $(".map-img").addClass('d-none');
                            $(".formBox").addClass('d-none');
                            $(".currentLocation").hide();
                            $(".endLocation").hide();
                            $(".mapBox").removeClass('d-none');
                            $(".form__down-div").removeClass('d-none');

                            $(".except-location-div").removeClass('d-none');
                        })
    
                    } else {
                        serviceEnd.getDetails({
                            placeId: resultPlaceId
                        }, function (place, status) {
                            var inputResultLat = place.geometry.location.lat();
                            var inputResultLng = place.geometry.location.lng();
                            console.log(inputResultLat, inputResultLng);
                            inputResultLatLng = new google.maps.LatLng(inputResultLat,
                                inputResultLng)
                            map.setCenter(inputResultLatLng)
    
                            $(".formBox").addClass('d-none');
                            $(".currentLocation").hide();
                            $(".endLocation").hide();
                            $(".mapBox").removeClass('d-none');
                            $(".except-location-div").removeClass('d-none');
                        })
                    }
    
                    // var myLatlng = { lat: parseFloat(markerLat), lng: parseFloat(markerLng) };
                    // console.log(myLatlng);
                });
    
                $(document).on("click", ".custom-result__text", function () {
                    // this input is the input that needs the imdb_id value
                    //alert(datum.placeId);
                    var inpResultPlaceId = $(this).parent().data("place-id");
                    var forFrom = $(".typeahead").parent().next().data("id");
                    console.log('forForm', forFrom);
                    var test = $(this).parent().parent().parent().parent().next().data("id");
                    var MycontainerID = $("#Mycontainer").data("id");
                    var Mycontainer = document.getElementById("Mycontainer");
                    console.log(test);
                    var service = new google.maps.places.PlacesService(Mycontainer);
                    var MycontainerEnd = document.getElementById("MycontainerEnd");
                    var serviceEnd = new google.maps.places.PlacesService(MycontainerEnd);
    
                    if (test < 2) {
                        service.getDetails({
                            placeId: inpResultPlaceId
                        }, function (place, status) {
    
                            if (status === google.maps.places.PlacesServiceStatus.OK) {
                                // document.getElementById("container").innerHTML = "Lat :" + place.geometry.location.lat() + "<br/>" + "Lan:" + place.geometry.location.lng()
                                console.log("Lat", place.geometry.location.lat());
                                console.log("Lan", place.geometry.location.lng());
    
                                var selectedLatlng = new google.maps.LatLng(place.geometry.location
                                    .lat(), place.geometry.location.lng());
    
                                geocoder.geocode({
                                        'latLng': selectedLatlng
                                    },
                                    function (results, status) {
                                        if (status == google.maps.GeocoderStatus.OK) {
                                             $(".insurance__input").prop("disabled", false);
                                                $("#map_canvas").removeClass('d-none');
                        $(".map-img").addClass('d-none');
                                            if (results[0]) {
                                                var selectedAdress = results[0]
                                                    .formatted_address;
                                                var value = selectedAdress.split(",");
    
                                                count = value.length;
                                                country = value[count - 1];
                                                state = value[count - 2];
                                                city = value[count - 3];
                                                console.log(selectedAdress);
                                                $("#fromAdress").text(selectedAdress);
                                                $(".inpBtn__box").show();
                                                $(".currentLocation").hide();
                                                $(".endLocation").hide();
                                                $(".formBox").addClass('d-none');
                                                $(".form__down-div").removeClass('d-none');
    
                                            } else {
                                                alert("address not found");
                                            }
                                        } else {
                                            alert("Geocoder failed due to: " + status);
                                        }
                                    }
                                );
    
    
                            }
                        })
                    } else {
                        serviceEnd.getDetails({
                            placeId: inpResultPlaceId
                        }, function (place, status) {
    
                            if (status === google.maps.places.PlacesServiceStatus.OK) {
                                // document.getElementById("container").innerHTML = "Lat :" + place.geometry.location.lat() + "<br/>" + "Lan:" + place.geometry.location.lng()
                                console.log("Lat", place.geometry.location.lat());
                                console.log("Lan", place.geometry.location.lng());
    
                                var selectedEndLatlng = new google.maps.LatLng(place.geometry
                                    .location.lat(), place.geometry.location.lng());
    
                                geocoder.geocode({
                                        'latLng': selectedEndLatlng
                                    },
                                    function (results, status) {
                                        if (status == google.maps.GeocoderStatus.OK) {
                                            $(".insurance__input").prop("disabled", false);
                    //                         $("#map_canvas").removeClass('d-none');
                    // $(".map-img").addClass('d-none');
                                            if (results[0]) {
                                                var selecteEndAdress = results[0]
                                                    .formatted_address;
                                                var valueEnd = selecteEndAdress.split(",");
    
                                                count = valueEnd.length;
                                                country = valueEnd[count - 1];
                                                state = valueEnd[count - 2];
                                                city = valueEnd[count - 3];
                                                console.log(selecteEndAdress);
                                               
                                                $("#toAdress").text(selecteEndAdress);
                                                $(".inpBtn__box").show();
                                                $(".currentLocation").hide();
                                                $(".endLocation").hide();
                                                $(".formBox").addClass('d-none');
                                                $(".form__down-div").removeClass('d-none');
                                            } else {
                                                alert("address not found");
                                            }
                                        } else {
                                            alert("Geocoder failed due to: " + status);
                                        }
                                    });
                            }
                        })
                    }
    
    
    
    
                });
    
    
    
    
            });
    
            $(".getStartLatLng").click(function () {
                var markerLat = map.getCenter().lat();
                var markerLng = map.getCenter().lng();
                console.log(markerLat, markerLng);
    
                var myLatlng = {
                    lat: parseFloat(markerLat),
                    lng: parseFloat(markerLng)
                };
                console.log(myLatlng);
    
                geocoder.geocode({
                    'location': myLatlng
                }, function (results, status) {
    
                    if (status === 'OK') {
                        $(".insurance__input").prop("disabled", false);
                        $("#map_canvas").removeClass('d-none');
                        $(".map-img").addClass('d-none');
    
                        if (results[0]) {
    
                            var myAdress = results[0].formatted_address;
                            // console.log(myAdress);
                            $("#fromAdress").text(myAdress);
                            $(".form__down-div").removeClass('d-none');
                        }
                    }
                });
                $(".mapBox").addClass('d-none');
                $(".inpBtn__box").show();
                $(".getStartLatLng").hide();
                $(".form__down-div").removeClass('d-none');
            });
    
            $(".getEndLatLng").click(function () {
                var markerLat = map.getCenter().lat();
                var markerLng = map.getCenter().lng();
                console.log(markerLat, markerLng);
    
                var myLatlng = {
                    lat: parseFloat(markerLat),
                    lng: parseFloat(markerLng)
                };
                console.log(myLatlng);
    
                geocoder.geocode({
                    'location': myLatlng
                }, function (results, status) {
    
                    if (status === 'OK') {
                        $(".insurance__input").prop("disabled", false);
                        // $("#map_canvas").removeClass('d-none');
                        // $(".map-img").addClass('d-none');
                        if (results[0]) {
    
                            var myAdress = results[0].formatted_address;
                            console.log(myAdress);
                            $("#toAdress").text(myAdress);
                            $(".form__down-div").removeClass('d-none');
                        }
                    }
                });
                $(".form__down-div").removeClass('d-none');
                $(".mapBox").addClass('d-none');
                $(".inpBtn__box").show();
                $(".getEndLatLng").hide();
    
            });
        }
        
        google.maps.event.addDomListener(window, 'load', initialize);
    
    //////////////////////////////////////////
    //     CLICK INPUT &  MAP LEFT       //
    ////////////////////////////////////////
    
        $(".getTocurrentLocation").click(function () {
            $(".inpBtn__box").hide();
            $(".currentLocation").show();
            $(".formBox").removeClass('d-none');
            $(".getStartLatLng").show();
            $(".form__down-div").addClass('d-none');
            $(".except-location-div").addClass('d-none');
          
    
    
    
    
        });
    
        $(".getToEndLocation").click(function () {
            $(".inpBtn__box").hide();
            $(".endLocation").show();
            $(".currentLocation").hide();
            $(".formBox").removeClass('d-none');
            $(".form__down-div").addClass('d-none');
            $(".getEndLatLng").show();
            $(".except-location-div").addClass('d-none');
        });
    
        $(".backToInpBtn__box").click(function () {
            $(".inpBtn__box").show();
            $(".currentLocation").hide();
            $(".endLocation").hide();
            $(".formBox").addClass('d-none');
            $(".form__down-div").removeClass('d-none');
            $(".getStartLatLng").hide();
            $(".except-location-div").removeClass('d-none');
        });
    
        $(".inpBtn__link").click(function () {
            $(".formBox").addClass('d-none');
            // $(".form__down-div").addClass('d-none');
            $(".mapBox").removeClass('d-none');
            $(".except-location-div").addClass('d-none');
        });
    
        $(".backToFormBox").click(function () {
            $(".mapBox").addClass('d-none');
            $(".formBox").removeClass('d-none');
            // $(".form__down-div").removeClass('d-none');
            $(".currentLocation").show();
            $(".getEndLatLng").hide();
            $(".getStartLatLng").hide();
            $(".except-location-div").removeClass('d-none');
        });
    });
    
    //////////////////////////////////////////
    //           MAP RIGHT                 //
    ////////////////////////////////////////
    $(document).ready(function () {
 
        var directionsDisplay;
        var directionsService = new google.maps.DirectionsService(); // ISTİQAMƏTİ ÖLÇMƏK
        var map;
        var autocomplete_start, autocomplete_end;
        var place_start, place_end, marker;
        var startPos = [40.4050531, 49.8346519]; // BAKININ KOORDİNATI
        var speed = 80; // km/h
        var delay = 100;
    
    
        function animateMarker(marker, coords, km_h) {
            var target = 0;
            var km_h = km_h || 50;
            coords.push([startPos[0], startPos[1]]);
    
            function goToPoint() {
                var lat = marker.position.lat(); // enlik 
                var lng = marker.position.lng(); // uzunluq
                var step = (km_h * 1000 * delay) / 3600000; // in meters
    
                var dest = new google.maps.LatLng(
                    coords[target][0], coords[target][1]);
    
                var distance =
                    google.maps.geometry.spherical.computeDistanceBetween(
                        dest, marker.position); // in meters
    
                var numStep = distance / step;
                var i = 0;
                var deltaLat = (coords[target][0] - lat) / numStep;
                var deltaLng = (coords[target][1] - lng) / numStep;
    
                function moveMarker() {
                    lat += deltaLat;
                    lng += deltaLng;
                    i += step;
    
                    if (i < distance) {
                        marker.setPosition(new google.maps.LatLng(lat, lng));
                        setTimeout(moveMarker, delay);
                    } else {
                        marker.setPosition(dest);
                        target++;
                        if (target == coords.length) {
                            target = 0;
                        }
    
                        setTimeout(goToPoint, delay);
                    }
                }
                moveMarker();
            }
            goToPoint();
        }
    
        function initialize() {
    
            directionsDisplay = new google.maps
                .DirectionsRenderer(); //  məsafə, növbələrin sayı və digər amilləri göstərmək üçün  istifadə olunur
            var thisCity = new google.maps.LatLng(40.4050531, 49.8346519); //  enlik uzunluq
            var myOptions = {
                zoom: 12, // BÖYÜTMƏK
                mapTypeId: google.maps.MapTypeId.ROADMAP, //  XƏRİTƏ  NÖVÜ
                center: thisCity // KOORDINAT 
            }
            map = new google.maps.Map(document.getElementById("map_canvas"), myOptions); // XƏRİTƏNİN GÖSTƏRİLƏCƏYİ YER
            directionsDisplay.setMap(map); // XƏRİTƏNİN SON VERSİYASININ GÖSTƏRİLMƏSİ    
            new AutocompleteDirectionsHandler(map);
    
            var image = { // AVTOMOBİLLƏ DAŞIMA 
                url: 'img/carMarker.png',
                scaledSize: new google.maps.Size(35, 35),
            };
            marker = new google.maps.Marker({
                position: new google.maps.LatLng(startPos[0], startPos[1]),
                icon: image,
                map: map
            });
    
            google.maps.event.addListenerOnce(map, 'idle', function () { // AVTOMOBİL HƏRƏKƏTİ
                animateMarker(marker, [
                    // The coordinates of each point you want the marker to go to.
                    // You don't need to specify the starting position again.
                    [40.4048204, 49.83358990000001],
                    [40.40219039999999, 49.83461519999999],
                    [40.4015122, 49.8315717],
                    [40.3788527, 49.8400521],
                    [40.3793502, 49.8418695],
                    [40.37025, 49.84570060000001],
                    [40.37091119999999, 49.8478119],
                    [40.37025, 49.84570060000001, ]
    
                    // [42.42300508749226, -83.29679489135742],
                    // [42.42304468678425, -83.29434871673584],
                    // [42.424882066428424, -83.2944130897522],
                    // [42.42495334300206, -83.29203128814697]
                ], speed);
            });
    
            var image = { // MOTOSİKLET DAŞIMA 
                url: 'img/mapMarker.png',
                scaledSize: new google.maps.Size(35, 35),
            };
            marker1 = new google.maps.Marker({
                position: new google.maps.LatLng(40.3752692, 49.8128778),
                icon: image,
                map: map
            });
    
            google.maps.event.addListenerOnce(map, 'idle', function () { // MOTOSİKLET HƏRƏKƏTİ
                animateMarker(marker1, [
                    // The coordinates of each point you want the marker to go to.
                    // You don't need to specify the starting position again.
                    [40.3751928, 49.8119447],
                    [40.40219039999999, 49.83461519999999],
                    [40.3775918, 49.811615],
                    [40.37770099999999, 49.8134018],
                    [40.3761736, 49.8136082],
                    [40.3762931, 49.8157333],
                    [40.3726486, 49.8162402],
                    [40.3728445, 49.8183952]
    
                    // [42.42300508749226, -83.29679489135742],
                    // [42.42304468678425, -83.29434871673584],
                    // [42.424882066428424, -83.2944130897522],
                    // [42.42495334300206, -83.29203128814697]
                ], 100);
            });
    
            var image = { // PİYADA DAŞIMA 
                url: 'img/Untitlffed-3ddd.png',
                scaledSize: new google.maps.Size(35, 35),
            };
            marker2 = new google.maps.Marker({
                position: new google.maps.LatLng(40.40219039999999, 49.83461519999999),
                icon: image,
                map: map
            });
    
            google.maps.event.addListenerOnce(map, 'idle', function () { // PİYADA  HƏRƏKƏTİ
                animateMarker(marker2, [
                    // The coordinates of each point you want the marker to go to.
                    // You don't need to specify the starting position again.
    
                    [40.3775918, 49.811615],
                    [40.37770099999999, 49.8134018],
                    [40.3761736, 49.8136082],
                    [40.3762931, 49.8157333],
                    [40.3726486, 49.8162402],
                    [40.3728445, 49.8183952]
    
                    // [42.42300508749226, -83.29679489135742],
                    // [42.42304468678425, -83.29434871673584],
                    // [42.424882066428424, -83.2944130897522],
                    // [42.42495334300206, -83.29203128814697]
                ], 100);
            });
    
            var image = { // YÜK MAŞINI İLƏ DAŞIMA 
                url: 'img/44.png',
                scaledSize: new google.maps.Size(35, 35),
            };
            marker3 = new google.maps.Marker({
                position: new google.maps.LatLng(40.3761736, 49.8136082),
                icon: image,
                map: map
            });
    
            google.maps.event.addListenerOnce(map, 'idle', function () { // YÜK MAŞINI  HƏRƏKƏTİ
                animateMarker(marker3, [
                    // The coordinates of each point you want the marker to go to.
                    // You don't need to specify the starting position again.
    
                    [40.3775918, 49.811615],
                    [40.37770099999999, 49.8134018],
                    [40.3761736, 49.8136082],
                    [40.3762931, 49.8157333],
                    [40.3726486, 49.8162402],
                    [40.3728445, 49.8183952]
    
                    // [42.42300508749226, -83.29679489135742],
                    // [42.42304468678425, -83.29434871673584],
                    // [42.424882066428424, -83.2944130897522],
                    // [42.42495334300206, -83.29203128814697]
                ], 50);
            });
    
        }
    
        function AutocompleteDirectionsHandler(map) {
            this.map = map;
            this.originPlaceId = null;
            this.destinationPlaceId = null;
            this.travelMode = 'TRANSIT';
            this.directionsService = new google.maps.DirectionsService;
            this.directionsRenderer = new google.maps
                .DirectionsRenderer; //  məsafə, növbələrin sayı və digər amilləri göstərmək üçün  istifadə olunur
            this.directionsRenderer.setMap(map); //  xəritənin yenilənməsi
    
            // var originInput = document.getElementById('startPlace');
            // var destinationInput = document.getElementById('endPlace');
    
            // var originAutocomplete = new google.maps.places.Autocomplete(originInput);
            // Specify just the place data fields that you need.
            originAutocomplete.setFields(['place_id']);
            console.log("placeid", originAutocomplete.setFields(['place_id']));
    
    
    
            var destinationAutocomplete = new google.maps.places.Autocomplete(destinationInput);
            // Specify just the place data fields that you need.
            destinationAutocomplete.setFields(['place_id']);
    
            // this.setupClickListener('pedestrian', 'WALKING');
            this.setupClickListener('pedestrian', 'TRANSIT');
            this.setupClickListener('motorbike', 'DRIVING');
            this.setupClickListener('car', 'DRIVING');
            this.setupClickListener('evacuator', 'DRIVING');
            this.setupClickListener('truck', 'DRIVING');
    
            this.setupPlaceChangedListener(originAutocomplete, 'ORIG');
            this.setupPlaceChangedListener(destinationAutocomplete, 'DEST');
    
        }
    
        // Sets a listener on a radio button to change the filter type on Places
        // Autocomplete.
        AutocompleteDirectionsHandler.prototype.setupClickListener = function ( id, mode) {
            var radioButton = document.getElementById(id);
            var me = this;
    
            radioButton.addEventListener('change', function () {
                me.travelMode = mode;
                me.route();
                
            });
        };
    
        AutocompleteDirectionsHandler.prototype.setupPlaceChangedListener = function (
            autocomplete, mode) {
            var me = this;
            autocomplete.bindTo('bounds', this.map);
    
    
            autocomplete.addListener('place_changed', function () { // İSTİQAMƏTİN DƏYİŞMƏSİ FUNKSİYASI
                var place = autocomplete.getPlace();
                var service = new google.maps.places.PlacesService(map);
                if (!place.place_id) {
                    window.alert('Please select an option from the dropdown list.');
                    return;
                }
                if (mode === 'ORIG') {
                    me.originPlaceId = place.place_id;
                    var service = new google.maps.places.PlacesService(map);
                    service.getDetails({
                        placeId: place.place_id
                    }, function (place, status) {
                        var inputResultLat = place.geometry.location.lat(); // ENLIK
                        var inputResultLng = place.geometry.location.lng(); //  UZUNLUQ
                        console.log(inputResultLat, inputResultLng);
    
                        var hidenInputStartLat = document.getElementById("startPlaceLat");
                        hidenInputStartLat.value = inputResultLat;
                        var hidenInputStartLng = document.getElementById("startPlaceLng");
                        hidenInputStartLng.value = inputResultLng;
    
                        $(".insurance__input").prop("disabled", false);
    
    
                    })
    
                } else {
                    me.destinationPlaceId = place.place_id;
                    console.log('end', place.place_id);
    
                    var service = new google.maps.places.PlacesService(map);
                    service.getDetails({
                        placeId: place.place_id
                    }, function (place, status) {
                        var inputResultLat = place.geometry.location.lat(); // ENLIK
                        var inputResultLng = place.geometry.location.lng(); //  UZUNLUQ
                        console.log(inputResultLat, inputResultLng);
    
                        var hidenInputEndLat = document.getElementById("endPlaceLat");
                        hidenInputEndLat.value = inputResultLat;
    
                        var hidenInputEndLng = document.getElementById("endPlaceLng");
                        hidenInputEndLng.value = inputResultLng;
    
    
    
                    })
                }
                me.route();
            });
        };
    
        AutocompleteDirectionsHandler.prototype.route = function () {
            if (!this.originPlaceId || !this.destinationPlaceId) {
                return;
            }
            var me = this;
    
            this.directionsService.route( // ROUTE  marşrut mənşəyindən  göstərilən yerə çatmağın yolunu göstərir
                {
                    origin: {
                        'placeId': this.originPlaceId
                    }, // BAŞLANĞIC NÖQTƏ
                    destination: {
                        'placeId': this.destinationPlaceId
                    }, // SON NÖQTƏ
                    travelMode: this.travelMode // DAŞIMA NÖVÜ
                },
                function (response, status) {
                    if (status === 'OK') {
                        me.directionsRenderer.setDirections(response);
                    } else {
                        window.alert('Directions request failed due to ' + status);
                    }
                });
    
    
    
            var request = {
                origin: {
                    'placeId': this.originPlaceId
                },
                destination: {
                    'placeId': this.destinationPlaceId
                },
                travelMode: this.travelMode
            };
    
            directionsService.route(request, function (result, status) {
                if (status == google.maps.DirectionsStatus
                    .OK) { // düzgün istiqamətləndirmə nəticəsini  göstərir.
                    directionsDisplay.setDirections(
                        result); // xəritədə dəyişiklik baş verərkən avtomatik xəritənin dəyişməsi
                    var price_for_selected = document.getElementById('price_for_selected');
                    var myRoute = result.routes[0].legs[0];
    
                    var commonDistanse = myRoute.distance.value / 1000; // ÜMUMİ MƏSAFƏNİN HESABLANMASI
    
                    if (commonDistanse <= 3) { // PULUN HESABLANMASI
                        price = 2
                    } else if (commonDistanse > 3 && commonDistanse <= 12) {
                        price = (commonDistanse - 3) * 0.5 + 2
                    } else if (commonDistanse > 12 && commonDistanse <= 70) {
                        price = (commonDistanse - 12) * 0.4 + 2 + (9 * 0.5)
                    } else {
                        price = (commonDistanse - 70) * 0.22 + (70 * 0.4)
                    }
    
                    var roadPrice = Math.ceil(price); // PUL
                    var roadDistance = myRoute.distance.text; // MƏSAFƏ
                    var roadTime = Math.round(myRoute.duration.value / 60) + ' dəq'; // ZAMAN
    
    
                    $('.price').text(roadPrice);
                    $('.distance').text(roadDistance);
                    $('.transition-time').text(roadTime);
                    var priceText = $(".price").text();
                    totalPrice = $('.total__money').text(priceText);
    
    
    
                    console.log(myRoute.distance.text);
                    console.log(myRoute.duration.text);
                    console.log(Math.ceil(price));
                } else {
                    var price_for_selected = document.getElementById('price_for_selected');
                    var innerHtml = '<div class="alert alert-warning" role="alert"></div>';
                    price_for_selected.innerHTML = innerHtml;
                    var directionsPanel = document.getElementById('directionsPanel');
                    directionsPanel.innerHTML = '';
                }
            });
    
        };
    
        window.onload = initialize;
    
    });