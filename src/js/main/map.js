$(document).ready(function () {
    function initialize() {


        var mapOptions = {
            zoom: 13, //  BÖYÜTMƏK
            center: new google.maps.LatLng(40.42557252485824, 49.84169001645499), // ENLİK UZUNLUQ
            mapTypeId: google.maps.MapTypeId.ROADMAP //  XƏRİTƏ NÖVÜ
        };

        var geocoder = new google.maps.Geocoder;

        map = new google.maps.Map(document.getElementById('map_nextV'), mapOptions);

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
                        $(".formBox").addClass('d-none');
                        $(".currentLocation").hide();
                        $(".endLocation").hide();
                        $(".mapBox").removeClass('d-none');
                        $(".form__down-div").removeClass('d-none');
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
                                        if (results[0]) {
                                            var selecteEndAdress = results[0]
                                                .formatted_address;
                                            var valueEnd = selecteEndAdress.split(",");

                                            count = valueEnd.length;
                                            country = valueEnd[count - 1];
                                            state = valueEnd[count - 2];
                                            city = valueEnd[count - 3];
                                            console.log(selecteEndAdress);
                                            $(".insurance__input").prop("disabled", false);
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
                    if (results[0]) {

                        var myAdress = results[0].formatted_address;
                        console.log(myAdress);
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




    $(".getTocurrentLocation").click(function () {
            $(".inpBtn__box").hide();
            $(".currentLocation").show();
            $(".formBox").removeClass('d-none');
            $(".getStartLatLng").show();
            $(".form__down-div").addClass('d-none');
 
           
         
        
    });

$(".getToEndLocation").click(function () {
    $(".inpBtn__box").hide();
    $(".endLocation").show();
    $(".formBox").removeClass('d-none');
    $(".form__down-div").addClass('d-none');
    $(".getEndLatLng").show();
});

$(".backToInpBtn__box").click(function () {
    $(".inpBtn__box").show();
    $(".currentLocation").hide();
    $(".endLocation").hide();
    $(".formBox").addClass('d-none');
    $(".form__down-div").removeClass('d-none');
    $(".getStartLatLng").hide();
});

$(".inpBtn__link").click(function () {
    $(".formBox").addClass('d-none');
    // $(".form__down-div").addClass('d-none');
    $(".mapBox").removeClass('d-none');
});

$(".backToFormBox").click(function () {
    $(".mapBox").addClass('d-none');
    $(".formBox").removeClass('d-none');
    // $(".form__down-div").removeClass('d-none');
    $(".currentLocation").show();
    $(".getEndLatLng").hide();
    $(".getStartLatLng").hide();
});


});