// NEW        FOR LANDING-4.HTML 
$(document).ready(function () {
    /*http://laravel.io/forum/02-08-2014-ajax-autocomplete-input*/
    var countries = {
        AD: "Andorra",
        A2: "Andorra Test",
        AE: "United Arab Emirates",
        AF: "Afghanistan",
        AG: "Antigua and Barbuda",
        AI: "Anguilla",
        AL: "Albania",
        AM: "Armenia",
        AN: "Netherlands Antilles",
        AO: "Angola",
        AQ: "Antarctica",
        AR: "Argentina",
        AS: "American Samoa",
        AT: "Austria",
        AU: "Australia",
        AW: "Aruba",
        AX: "\u00c5land Islands",
        AZ: "Azerbaijan",
        BA: "Bosnia and Herzegovina",
        BB: "Barbados",
        BD: "Bangladesh",
        BE: "Belgium",
        BF: "Burkina Faso",
        BG: "Bulgaria",
        BH: "Bahrain",
        BI: "Burundi",
        BJ: "Benin",
        BL: "Saint Barth\u00e9lemy",
        BM: "Bermuda",
        BN: "Brunei",
        BO: "Bolivia",
        BQ: "British Antarctic Territory",
        BR: "Brazil",
        BS: "Bahamas",
        BT: "Bhutan",
        BV: "Bouvet Island",
        BW: "Botswana",
        BY: "Belarus",
        BZ: "Belize",
        CA: "Canada",
        CC: "Cocos [Keeling] Islands",
        CD: "Congo - Kinshasa",
        CF: "Central African Republic",
        CG: "Congo - Brazzaville",
        CH: "Switzerland",
        CI: "C\u00f4te d\u2019Ivoire",
        CK: "Cook Islands",
        CL: "Chile",
        CM: "Cameroon",
        CN: "China",
        CO: "Colombia",
        CR: "Costa Rica",
        CS: "Serbia and Montenegro",
        CT: "Canton and Enderbury Islands",
        CU: "Cuba",
        CV: "Cape Verde",
        CX: "Christmas Island",
        CY: "Cyprus",
        CZ: "Czech Republic",
        DD: "East Germany",
        DE: "Germany",
        DJ: "Djibouti",
        DK: "Denmark",
        DM: "Dominica",
        DO: "Dominican Republic",
        DZ: "Algeria",
        EC: "Ecuador",
        EE: "Estonia",
        EG: "Egypt",
        EH: "Western Sahara",
        ER: "Eritrea",
        ES: "Spain",
        ET: "Ethiopia",
        FI: "Finland",
        FJ: "Fiji",
        FK: "Falkland Islands",
        FM: "Micronesia",
        FO: "Faroe Islands",
        FQ: "French Southern and Antarctic Territories",
        FR: "France",
        FX: "Metropolitan France",
        GA: "Gabon",
        GB: "United Kingdom",
        GD: "Grenada",
        GE: "Georgia",
        GF: "French Guiana",
        GG: "Guernsey",
        GH: "Ghana",
        GI: "Gibraltar",
        GL: "Greenland",
        GM: "Gambia",
        GN: "Guinea",
        GP: "Guadeloupe",
        GQ: "Equatorial Guinea",
        GR: "Greece",
        GS: "South Georgia and the South Sandwich Islands",
        GT: "Guatemala",
        GU: "Guam",
        GW: "Guinea-Bissau",
        GY: "Guyana",
        HK: "Hong Kong SAR China",
        HM: "Heard Island and McDonald Islands",
        HN: "Honduras",
        HR: "Croatia",
        HT: "Haiti",
        HU: "Hungary",
        ID: "Indonesia",
        IE: "Ireland",
        IL: "Israel",
        IM: "Isle of Man",
        IN: "India",
        IO: "British Indian Ocean Territory",
        IQ: "Iraq",
        IR: "Iran",
        IS: "Iceland",
        IT: "Italy",
        JE: "Jersey",
        JM: "Jamaica",
        JO: "Jordan",
        JP: "Japan",
        JT: "Johnston Island",
        KE: "Kenya",
        KG: "Kyrgyzstan",
        KH: "Cambodia",
        KI: "Kiribati",
        KM: "Comoros",
        KN: "Saint Kitts and Nevis",
        KP: "North Korea",
        KR: "South Korea",
        KW: "Kuwait",
        KY: "Cayman Islands",
        KZ: "Kazakhstan",
        LA: "Laos",
        LB: "Lebanon",
        LC: "Saint Lucia",
        LI: "Liechtenstein",
        LK: "Sri Lanka",
        LR: "Liberia",
        LS: "Lesotho",
        LT: "Lithuania",
        LU: "Luxembourg",
        LV: "Latvia",
        LY: "Libya",
        MA: "Morocco",
        MC: "Monaco",
        MD: "Moldova",
        ME: "Montenegro",
        MF: "Saint Martin",
        MG: "Madagascar",
        MH: "Marshall Islands",
        MI: "Midway Islands",
        MK: "Macedonia",
        ML: "Mali",
        MM: "Myanmar [Burma]",
        MN: "Mongolia",
        MO: "Macau SAR China",
        MP: "Northern Mariana Islands",
        MQ: "Martinique",
        MR: "Mauritania",
        MS: "Montserrat",
        MT: "Malta",
        MU: "Mauritius",
        MV: "Maldives",
        MW: "Malawi",
        MX: "Mexico",
        MY: "Malaysia",
        MZ: "Mozambique",
        NA: "Namibia",
        NC: "New Caledonia",
        NE: "Niger",
        NF: "Norfolk Island",
        NG: "Nigeria",
        NI: "Nicaragua",
        NL: "Netherlands",
        NO: "Norway",
        NP: "Nepal",
        NQ: "Dronning Maud Land",
        NR: "Nauru",
        NT: "Neutral Zone",
        NU: "Niue",
        NZ: "New Zealand",
        OM: "Oman",
        PA: "Panama",
        PC: "Pacific Islands Trust Territory",
        PE: "Peru",
        PF: "French Polynesia",
        PG: "Papua New Guinea",
        PH: "Philippines",
        PK: "Pakistan",
        PL: "Poland",
        PM: "Saint Pierre and Miquelon",
        PN: "Pitcairn Islands",
        PR: "Puerto Rico",
        PS: "Palestinian Territories",
        PT: "Portugal",
        PU: "U.S. Miscellaneous Pacific Islands",
        PW: "Palau",
        PY: "Paraguay",
        PZ: "Panama Canal Zone",
        QA: "Qatar",
        RE: "R\u00e9union",
        RO: "Romania",
        RS: "Serbia",
        RU: "Russia",
        RW: "Rwanda",
        SA: "Saudi Arabia",
        SB: "Solomon Islands",
        SC: "Seychelles",
        SD: "Sudan",
        SE: "Sweden",
        SG: "Singapore",
        SH: "Saint Helena",
        SI: "Slovenia",
        SJ: "Svalbard and Jan Mayen",
        SK: "Slovakia",
        SL: "Sierra Leone",
        SM: "San Marino",
        SN: "Senegal",
        SO: "Somalia",
        SR: "Suriname",
        ST: "S\u00e3o Tom\u00e9 and Pr\u00edncipe",
        SU: "Union of Soviet Socialist Republics",
        SV: "El Salvador",
        SY: "Syria",
        SZ: "Swaziland",
        TC: "Turks and Caicos Islands",
        TD: "Chad",
        TF: "French Southern Territories",
        TG: "Togo",
        TH: "Thailand",
        TJ: "Tajikistan",
        TK: "Tokelau",
        TL: "Timor-Leste",
        TM: "Turkmenistan",
        TN: "Tunisia",
        TO: "Tonga",
        TR: "Turkey",
        TT: "Trinidad and Tobago",
        TV: "Tuvalu",
        TW: "Taiwan",
        TZ: "Tanzania",
        UA: "Ukraine",
        UG: "Uganda",
        UM: "U.S. Minor Outlying Islands",
        US: "United States",
        UY: "Uruguay",
        UZ: "Uzbekistan",
        VA: "Vatican City",
        VC: "Saint Vincent and the Grenadines",
        VD: "North Vietnam",
        VE: "Venezuela",
        VG: "British Virgin Islands",
        VI: "U.S. Virgin Islands",
        VN: "Vietnam",
        VU: "Vanuatu",
        WF: "Wallis and Futuna",
        WK: "Wake Island",
        WS: "Samoa",
        YD: "People's Democratic Republic of Yemen",
        YE: "Yemen",
        YT: "Mayotte",
        ZA: "South Africa",
        ZM: "Zambia",
        ZW: "Zimbabwe",
        ZZ: "Unknown or Invalid Region"
    }
    var countriesString = [
        "Andorra",
        "Andorra Test",
        "United Arab Emirates"
    ];
    var countriesArray = $.map(countries, function (value, key) {
        return {
            value: value,
            data: key
        };
    });

    // Initialize ajax autocomplete:
    $('#autocomplete-words').autocomplete({
        // serviceUrl: '/autosuggest/service/url',
        //lookup: countriesString,
        lookup: countriesArray,
        lookupFilter: function (suggestion, originalQuery, queryLowerCase) {
            var re = new RegExp('\\b' + $.Autocomplete.utils.escapeRegExChars(queryLowerCase), 'gi');
            return re.test(suggestion.value);
        },
        onSelect: function (suggestion) {
            $('#selction-ajax').html('You selected: ' + suggestion.value + ', ' + suggestion.data);
        },
        onHint: function (hint) {
            $('#autocomplete-ajax-x').val(hint);
        },
        onInvalidateSelection: function () {
            $('#selction-ajax').html('You selected: none');
        }
    });

});
// FOR İNDEX.HTML
 $( document ).ready(function() {
    $('.car-carousel').owlCarousel({
      loop: false,
      rewind: true,
    margin: 5,
      nav: false,
      dots: false,
      autoplay: true,
      autoplayHoverPause: true,
      responsive: {
        0: {
          items: 4
        },
        600: {
          items: 4
        },
        1000: {
          items: 4
        },
        1200: {
          items: 5
        }
      }
    })
});
//  FİLE YÜKLƏMƏK ÜÇÜN
$(document).ready(function () {
FilePond.registerPlugin(
    FilePondPluginImageCrop,
    FilePondPluginImagePreview,
    FilePondPluginImageResize,
    FilePondPluginImageTransform
);

const inputElement = document.querySelector('.add-image[type="file"]');
const pond = FilePond.create(inputElement, {
    imageCropAspectRatio: 1,
    imageResizeTargetWidth: 100,
    imageEditInstantEdit: true,
    imageResizeMode: 'contain',
    imageTransformVariants: {},
    onaddfile: (err, fileItem) => {
        console.log(err, fileItem.getMetadata('resize'));
    },
    onpreparefile: (fileItem, outputFiles) => {
        outputFiles.forEach(output => {
            const img = new Image();
            img.src = URL.createObjectURL(output.file);
            document.body.appendChild(img);
        })
    }
});

//  SADƏCƏ ŞƏKİL FORMATINDA YÜKLƏMƏSİ ÜÇÜN
FilePond.create(document.querySelector('.add-image[type="file"]'), {
    acceptedFileTypes:['image/*'],
    fileValidateTypeDetectType: (source, type) => new Promise((resolve, reject) => {
        
        // Do custom type detection here and return with promise

        resolve(type);
    })
});
});
// NEW  FOR LANDING-4.HTML HEADER    
$(document).ready(function () {
$(window).on('scroll', function() {
  
    if( $(".navbar").hasClass("scrolled")){
       
        $('.header__language2 , .header__toggler2, .header__language:after').addClass('header-scroll');
      
    }else{
        $('.header__language2 , .header__toggler2, .dropdown-toggle:after').removeClass('header-scroll');
    }

});
});

//  SHOWING BADGE ON HAMBURGER MENU
$(document).ready(function () {
    $(function () { 
        $('.header__toggler').on('click', function () {
          
            if ($(this).attr( 'aria-expanded') === 'true') {
                $(".header__toggler--badge").css( "display", "block" );
            } else {
                $(".header__toggler--badge").css( "display", "none" );
            }
        });
    });
    });

// // DELIVERY DATE JS START
//  SHOW AND HIDE #DELIVERY DATE WHEN CLICKED SHEDULED(NON-URGENT)
$(document).ready(function () {
    $("#non-urgent-tab").prop("checked", true);
    
    $('input:radio[data-item-id="urgent"]').change(
    
      function () {
    
        if ($(this).is(':checked') && $(this).val() == 'non-urgent') {
          $('#delivery').css({
            'display': 'block'
          });
    
        } else if ($(this).is(':checked') && $(this).val() == 'urgent') {
          $('#delivery').css({
            'display': 'none'
          });
        }
      });
    
    
    
    // LOCAL STORAGE FOR INPUT RADIO 
    
    $(function () {
      $('input:radio[data-item-id="urgent"]').each(function () {
        var state = JSON.parse(localStorage.getItem('radio_' + $(this).attr('id')));
    
        if (state) this.checked = state.checked;
        if ($(this).is(':checked') && $(this).val() == 'non-urgent') {
          $('#delivery').css({
            'display': 'block'
          });
    
        } else if ($(this).is(':checked') && $(this).val() == 'urgent') {
          $('#delivery').css({
            'display': 'none'
          });
        }
      });
    });
    
    $(window).bind('unload', function () {
      $('input:radio[data-item-id="urgent"]').each(function () {
        localStorage.setItem('radio_' + $(this).attr('id'), JSON.stringify({
          checked: this.checked
        }));
      });
    });
    });
    
    // // DELIVERY DATE JS END


// //  DATEPICKER START

$(document).ready(function () {
    var date = new Date();

    date.setDate(date.getDate());
    $("#datepicker").datepicker({
        startDate: date,
        duration: "fast",
        gotoCurrent: true,
        firstDay: 1,
        isRTL: false,
        showMonthAfterYear: false,
        dateFormat: "dd/mm/yy",
        yearSuffix: "",
        minDate: 0, // disable past date
        minTime: 0, // disable past time

        // VAXTIN İNPUT NAME=DAY-DƏ  VƏ VALUE-SUNDA GÖRSƏNMƏSİ
        onSelect: function () {
            $( "input[data-item-id=calendarTimes]" ).prop( "checked", false );
            $("label[for='calendar']").text($(this).val());
            var calendarLabel = $(".calendar-label").text();
            var calendarVal = document.getElementById("calendar");
            calendarVal.value = calendarLabel ;
            
        }
    });
    // $("#datepicker").datepicker($.datepicker.regional["az"]); 
    // $("#datepicker").datepicker($.datepicker.regional["ru"]); 
    $("#datepicker").datepicker($.datepicker.regional["en-AU"]); 
  

    $("#calendar").click(function () {
        $("#datepicker").datepicker("show");
    });
});

// //  DATEPICKER END


//  MOMENT JS START

$(document).ready(function () {
    var dayHours = 24;
    var allHours = 24;
    var currentTime = moment().startOf('hour').add(1, 'h').format("HH:mm");
    var currentHour = moment().startOf('hour').add(1, 'h').format("HH");
    var enableHoursToday = dayHours - currentHour;
    var today = moment().locale("az").format("DD MMMM");
    var tomorrow = moment().add(1, 'days').format("DD MMMM");

    var todaySlash = moment().format('DD/MM/YYYY');
    var tomorrowSlash = moment().add(1, 'days').format('DD/MM/YYYY');

    var todayVal = document.getElementById("today");
    var tomorrowVal = document.getElementById("tomorrow");
    var calendarVal = document.getElementById("calendar");


    //  BUGÜN VƏ SABAHIN TARİXİNİN İNPUT NAME=DAY-DƏ GÖRSƏNMƏSİ
    $('#today-span').html(today);
    $('#tomorrow-span').html(tomorrow);

    var text = "";
    $(document).on('change', 'input:radio[data-item-id="day"]', function () {

        if ($(".today").prop("checked")) {
            $('#tomorrow').attr('value', '');
            $('#calendar').attr('value', '');
            $("label[for='calendar']").text('Pick a date');
            for (i = 0; i < allHours; i++) {
                $('#delivery__time').trigger('remove.owl.carousel', i).trigger('refresh.owl.carousel');
            }
            for (i = 0; i < enableHoursToday; i++) {
                var currentTime = moment().startOf('hour').add(i + 2, 'h').format("HH:mm");
                $('#delivery__time').trigger('add.owl.carousel', ['<div class="form-check">\n' +
                    '<input class="times__input form-check-input" type="radio" value="' + currentTime +
                    ' " name="todayTimes" data-item-id="todayTimes" id="' + i + '"/>' +
                    ' <label class="times__label  form-check-label"  for="' + i + '" >' + currentTime +
                    '</label>\n' +
                    '</div>'
                ]).trigger('refresh.owl.carousel');
            }

            $(document).on('change', 'input:radio[data-item-id=todayTimes]', function () {
                var TimeVal = $('input[data-item-id=todayTimes]:checked').val();
                todayVal.value = todaySlash + " " + TimeVal;

            });
        } else if ($(".tomorrow").prop("checked")) {
            $('#today').attr('value', '');
            $('#calendar').attr('value', '');
            $("label[for='calendar']").text('Pick a date');
            for (i = 0; i < allHours; i++) {
                $('#delivery__time').trigger('remove.owl.carousel', i).trigger('refresh.owl.carousel');
            }
            for (i = 0; i < dayHours; i++) {
                var tomorrowHours = moment().startOf('day').add(i, 'h').format("HH:mm");
                $('#delivery__time').trigger('add.owl.carousel', ['<div class="form-check">\n' +
                    '<input class="times__input form-check-input" type="radio" value="' + tomorrowHours +
                    ' " name="tomorrowTimes" data-item-id="tomorrowTimes" id="' + i + '" />' +
                    ' <label class="times__label  form-check-label"  for="' + i + '" >' + tomorrowHours +
                    '</label>\n' +
                    '</div>'
                ]).trigger('refresh.owl.carousel');
            }
            $(document).on('change', 'input:radio[data-item-id=tomorrowTimes]', function () {
                var TimeVal = $('input[data-item-id=tomorrowTimes]:checked').val();
                tomorrowVal.value = tomorrowSlash + " " + TimeVal;
            });
        } else if ($(".calendar-input").prop("checked")) {
            $('#tomorrow').attr('value', '');
            $('#today').attr('value', '');

            for (i = 0; i < dayHours; i++) {
                $('#delivery__time').trigger('remove.owl.carousel', i).trigger('refresh.owl.carousel');
            }

            for (i = 0; i < allHours; i++) {
                var calendarHours = moment().startOf('day').add(i, 'h').format("HH:mm");
                $('#delivery__time').trigger('add.owl.carousel', ['<div class="form-check">\n' +
                    '<input class="times__input form-check-input" type="radio" value="' + calendarHours +
                    '" name="calendarTimes" data-item-id="calendarTimes" id="' + i + '" />' +
                    ' <label class="times__label  form-check-label"  for="' + i + '" >' + calendarHours +
                    '</label>\n' +
                    '</div>'
                ]).trigger('refresh.owl.carousel');
            }

            $(document).on('change', 'input:radio[data-item-id=calendarTimes]', function () {
                var calendarLabel = $(".calendar-label").text();
                var TimeVal = $('input[data-item-id=calendarTimes]:checked').val();

                calendarVal.value = calendarLabel + " " + TimeVal;
            });
        }
    });
});

// MOMENT JS END



// PAYMENT METHODS START
function DropDown(el) {
    this.dd = el;
    this.placeholder = this.dd.children('div');
    this.opts = this.dd.find('ul.payment__drop li');
    this.val = '';
    this.index = -1;
    this.initEvents();
}

DropDown.prototype = {
    initEvents: function () {
        var obj = this;
        obj.dd.on('click', function (e) {
            e.preventDefault();
            e.stopPropagation();
            $(this).toggleClass('active');
           
        });
        obj.opts.on('click', function () {
            var checkmark = '<i class="fas fa-check color-purple ml-auto payment__drop--checkmark"></i>';
            var opt = $(this);
            obj.val = opt.html();
            obj.valText = opt.text();
            obj.index = opt.index();
            obj.placeholder.html(obj.val);
            opt.siblings().removeClass('selected');
            opt.siblings().children().last().removeClass( "fas fa-check payment__drop--checkmark" );
            // opt.siblings().remove( '<i class="fas fa-check color-purple ml-auto payment__drop--checkmark"></i>' );
            opt.filter(':contains("' + obj.valText + '")').addClass('selected');
            var dataID = $(".selected").attr('data-id');
            $("#payment-hidden").val(dataID);
            $( ".selected" ).children().last().addClass( "fas fa-check payment__drop--checkmark" );
            // $( ".selected" ).add('<i class="fas fa-check color-purple ml-auto payment__drop--checkmark"></i>' );
        }).change();
    },
    getValue: function () {
        return this.val;
    },
    getIndex: function () {
        return this.index;
    }
};

$(function () {
    // create new variable for each menu
    var dd1 = new DropDown($('#paymentMethod'));
    // var dd2 = new DropDown($('#other-gases'));
    $(document).click(function () {
        // close menu on document click
        $('.payment__wrap-drop').removeClass('active');
    });
});

// PAYMENT METHODS END





// INSURANCE START

$(document).ready(function () {
    $(".insurance__input").change(function () {

        if ($(this).prop("checked") == true) {
            // $('.insurance__div').html('<div class="form-label form__label mb-2">Daşınacaq yükün dəyəri :</div> <div class="input-group insurance__div--input-group">  <input type="text" pattern="\d*" class="form-control insurance__div--input" min="0" aria-label="Insurance input" aria-describedby="insurance__div--money" required> <div class="input-group-append">     <span class="input-group-text" id="insurance__div--money">AZN</span> </div> </div>');
            $('.insurance__div').html('<div class="form-label form__label mb-2">'+
             'Daşınacaq yükün dəyəri :</div> <div class="input-group insurance__div--input-group">'+
             '  <input type="text" pattern="\\d*" class="form-control insurance__div--input" min="1" aria-label="Insurance input" aria-describedby="insurance__div--money" required>'+
             ' <div class="input-group-append"> ' +
             '    <span class="input-group-text" id="insurance__div--money">AZN</span>'+' </div>'+' </div>');
        }
        else {
            var insuranceInputVal = $(".insurance__div--input").val();
            insuranceInputVal = $(".insurance__div--input").val('');
            var InsurancePercent = $(".insurance__percent").text('0');
            totalPrice = $('.total__money').text(parseInt($(".price").text()));
            $('.insurance__div').empty();
        }
    });
});

// INSURANCE END
//  NEW FOR LOADING-END.HTML
// This is the jQuery UI widget. The configurable bits and initialization are at the bottom of this file.

$(document).ready(function () {
	(function ($) {
		$.widget("eee.loadingSpinner", {

			options: {
				size: 200
			},

			_create: function () {
				el = this.element;
				var size = this.options.size;

				$.loader = function (element) {
					var dfd = $.Deferred();
					var spinner = $("#spinner-template").html();
					dfd.resolve(spinner, element);
					return dfd;
				}

				$.loader(el).done(function (spinner, element) {
					element.html(spinner);
					element.find(".spinner-container").css("width", size + "px");
					element.find(".spinner-container").css("height", size + "px");
				});
			},

			success: function () {
				el = this.element;
				el.find(".check").attr("class", "check check-complete success");
				el.find(".path").attr("class", "path path-complete success");
			},

			failure: function () {
				el = this.element;
				el.find(".cross").attr("class", "cross cross-complete danger");
				el.find(".path").attr("class", "path path-complete danger");
			},

			reset: function () {
				el.find(".path").attr("class", "path");
				el.find(".spinner-g").attr("class", "spinner-g");
				el.find(".check").attr("class", "check");
				el.find(".cross").attr("class", "cross");
			},

			_setOption: function (key, value) {
				if (key === "size") {
					value = this._constrain(value);
				}
				this._super(key, value);
			},
			_setOptions: function (options) {
				this._super(options);
			},

			_constrain: function (size) {
				if (size > 400) {
					size = 400;
				}
				if (size < 0) {
					size = 0;
				}
				return size;
			}
		});
	}(jQuery));
});
$(document).ready(function () {
	var myVar = setInterval(myTimer, 1000);
	var value = 0;
	// Initialize the spinner.
	// Change the "size" parameter to resize the spinner.
	var $spinner = $("div#spin").loadingSpinner({
		size: 400
	});
	setTimeout(function () {
		// You can set this to "failure" to see a red X instead of the checkmark
		$spinner.loadingSpinner("success");
	}, 2700)

	function myTimer() {
		value = value + 1;
		if (value == 6) {
			document.getElementById("spin").style.display = 'none';
		}
	}

});
// DATASTORE.JS START
let user = {
	id: 0,
	name: "Anish",
	number: "Kuryer name",
	pic: "img/asdsd12f34ASd231.png",
	courierNumber: "+994 50 3332211",
	orderNumber: 'Order No 1'
};

let contactList = [
	{
		id: 0,
		name: "Anish",
		number: "+994 50 3332211",
		pic: "img/asdsd12f34ASd231.png",
		lastSeen: "Apr 29 2018 17:58:02",
		courierNumber: "+994 50 3332211",
		orderNumber: 'Order No 1'
	},
	{
		id: 1,
		name: "Nitin",
		number: "Kuryer name",
		pic: "img/Ass09123asdj9dk0qw.jpg",
		lastSeen: "Apr 29 2018 17:58:02",
		courierNumber: "+994 70 5552233",
		orderNumber: 'Order No 2'
	},
	{
		id: 2,
		name: "Sanjay",
		number: "Kuryer name",
		pic: "img/asd1232ASdas123a.png",
		lastSeen: "Apr 28 2018 19:23:16",
		courierNumber: "+994 70 1112233",
		orderNumber: 'Order No 3'
	},
	{
		id: 3,
		name: "Suvro Mobile",
		number: "+91 98232 63547",
		pic: "img/Alsdk120asdj913jk.jpg",
		lastSeen: "Apr 29 2018 11:16:42",
		courierNumber: "+994 55 44874433",
		orderNumber: 'Order No 4'
	},
	{
		id: 4,
		name: "Dee",
		number: "+91 72781 38213",
		pic: "img/dsaad212312aGEA12ew.png",
		lastSeen: "Apr 27 2018 17:28:10",
		courierNumber: "+994 70 9998833",
		orderNumber: 'Order No 5'
	},
	{
		id: 5,
		name: "Dee",
		number: "+91 72781 38213",
		pic: "img/dsaad212312aGEA12ew.png",
		lastSeen: "Apr 27 2018 17:28:10",
		courierNumber: "+994 70 9998833",
		orderNumber: 'Order No 5'
	},
	{
		id: 6,
		name: "Dee",
		number: "+91 72781 38213",
		pic: "img/dsaad212312aGEA12ew.png",
		lastSeen: "Apr 27 2018 17:28:10",
		courierNumber: "+994 70 9998833",
		orderNumber: 'Order No 5'
	},
	{
		id: 7,
		name: "Dee",
		number: "+91 72781 38213",
		pic: "img/dsaad212312aGEA12ew.png",
		lastSeen: "Apr 27 2018 17:28:10",
		courierNumber: "+994 70 9998833",
		orderNumber: 'Order No 5'
	}
];

let groupList = [
	{
		id: 1,
		name: "Group",
		members: [0, 1, 3],
		pic: "img/0923102932_aPRkoW.jpg",
		orderNumber: "Order No 15"
	},
	{
		id: 2,
		name: "Web Developers",
		members: [0, 2],
		pic: "img/1921231232_Ag1asE.png",
		orderNumber: "Order No 14"
	},
	{
		id: 3,
		name: "notes",
		members: [0,4,5],
		pic: "img/8230192232_asdEWq2.png",
		orderNumber: 'Order No 13'
	},
	{
		id: 4,
		name: "notes",
		members: [0,4,7],
		pic: "img/8230192232_asdEWq2.png",
		orderNumber: 'Order No 12'
	},
	{
		id: 5,
		name: "notes",
		members: [0,3,5],
		pic: "img/8230192232_asdEWq2.png",
		orderNumber: 'Order No 11'
	}
];

// message status - 0:sent, 1:delivered, 2:read

let messages = [
	{
		id: 0,
		sender: 2,
		body: "where are you, buddy?",
		time: "April 25, 2018 13:21:03",
		status: 2,
		recvId: 3,
		recvIsGroup: false
	},
	{
		id: 1,
		sender: 3,
		body: "at home",
		time: "June 25, 2018 13:22:03",
		status: 2,
		recvId: 2,
		recvIsGroup: true
	},
	{
		id: 2,
		sender: 0,
		body: "how you doin'?",
		time: "April 25, 2018 18:15:23",
		status: 2,
		recvId: 3,
		recvIsGroup: true
	},
	{
		id: 3,
		sender: 3,
		body: "i'm fine...wat abt u?",
		time: "April 25, 2018 21:05:11",
		status: 2,
		recvId: 0,
		recvIsGroup: false
	},
	{
		id: 4,
		sender: 0,
		body: "i'm good too",
		time: "April 26, 2018 09:17:03",
		status: 1,
		recvId: 3,
		recvIsGroup: true
	},
	{
		id: 5,
		sender: 3,
		body: "anyone online?",
		time: "April 27, 2018 18:20:11",
		status: 0,
		recvId: 1,
		recvIsGroup: true
	},
	{
		id: 6,
		sender: 1,
		body: "have you seen infinity war?",
		time: "April 27, 2018 17:23:01",
		status: 1,
		recvId: 0,
		recvIsGroup: false
	},
	{
		id: 0,
		sender: 3,
		body: "are you going to the party tonight?",
		time: "April 27, 2018 08:11:21",
		status: 2,
		recvId: 0,
		recvIsGroup: false
	},
	{
		id: 8,
		sender: 2,
		body: "no, i've some work to do..are you?",
		time: "April 27, 2018 08:22:12",
		status: 2,
		recvId: 0,
		recvIsGroup: false
	},
	{
		id: 9,
		sender: 0,
		body: "yup",
		time: "June 27, 2018 08:31:23",
		status: 1,
		recvId: 2,
		recvIsGroup: true
	},
	{
		id: 10,
		sender: 0,
		body: "if you go to the movie, then give me a call",
		time: "April 27, 2018 22:41:55",
		status: 7,
		recvId: 4,
		recvIsGroup: true
	},
	{
		id: 11,
		sender: 5,
		body: "yeah, i'm online",
		time: "April 28 2018 17:10:21",
		status: 6,
		recvId: 2,
		recvIsGroup: true
	}
];

let MessageUtils = {
	getByGroupId: (groupId) => {
		return messages.filter(msg => msg.recvIsGroup && msg.recvId === groupId);
	},
	getByContactId: (contactId) => {
		return messages.filter(msg => {
			return !msg.recvIsGroup && ((msg.sender === user.id && msg.recvId === contactId) || (msg.sender === contactId && msg.recvId === user.id));
		});
	},
	getMessages: () => {
		return messages;
	},
	changeStatusById: (options) => {
		messages = messages.map((msg) => {
			if (options.isGroup) {
				if (msg.recvIsGroup && msg.recvId === options.id) msg.status = 2;
			} else {
				if (!msg.recvIsGroup && msg.sender === options.id && msg.recvId === user.id) msg.status = 2;
			}
			return msg;
		});
	},
	addMessage: (msg) => {
		msg.id = messages.length + 1;
		messages.push(msg);
	}
};

// DATASTORE.JS END

// DATAUTILS.JS START
const mDate = (dateString) => {
	
	let date = dateString ? new Date(dateString) : new Date();

	let dualize = (x) => x < 10 ? "0" + x : x;
	let getTime = () => dualize(date.getHours()) + ":" + dualize(date.getMinutes());
	let getDate = () => dualize(date.getDate()) + "/" + dualize(date.getMonth()) + "/" + dualize(date.getFullYear());

	return {
		subtract: (otherDateString) => {
			return date - new Date(otherDateString);
		},
		lastSeenFormat: () => {
			let dateDiff = Math.round(new Date() - date) / (1000 * 60 * 60 * 24);
			let value = (dateDiff === 0) ? "today" : (dateDiff === 1) ? "yesterday" : getDate();
			return value + " at " + getTime();
		},
		chatListFormat: () => {
			let dateDiff = Math.round((new Date() - date) / (1000 * 60 * 60 * 24));
			if (dateDiff === 0) {
				return getTime();
			} else if (dateDiff === 1) {
				return "Yesterday";
			} else {
				return getDate();
			}
		},
		getDate: () => {
			return getDate();
		},
		getTime: () => {
			return getTime();
		},
		toString:() => {
			return date.toString().substr(4, 20);
		},
	};
};

// DATAUTILS.JS END

// SCRIPT.JS START

let getById = (id, parent) => parent ? parent.getElementById(id) : getById(id, document);
let getByClass = (className, parent) => parent ? parent.getElementsByClassName(className) : getByClass(className, document);

const DOM = {
	chatListArea: getById("chat-list-area"),
	messageArea: getById("message-area"),
	inputArea: getById("input-area"),
	chatList: getById("chat-list"),
	messages: getById("messages"),
	chatListItem: getByClass("chat-list-item"),
	messageAreaName: getById("name", this.messageArea),
	messageAreaPic: getById("pic", this.messageArea),
	messageAreaNavbar: getById("message-navbar", this.messageArea),
	messageAreaDetails: getById("details", this.messageAreaNavbar),
	messageAreaOverlay: getByClass("overlay", this.messageArea)[0],
	messageInput: getById("input"),
	profileSettings: getById("profile-settings"),
	profilePic: getById("profile-pic"),
	profilePicInput: getById("profile-pic-input"),
	inputName: getById("input-name"),
	username: getById("username"),
	displayPic: getById("display-pic"),
	messagesLeftBtn: getById("my-messages-inner__btn"),
	map: getByClass("messages-map"),
	form: getByClass("messages-form"),
	rightNavbar: getByClass("message-area__navbar"),
	mapGroup: getById("my-messages-inner__map-group"),
	messagesbtn: getByClass("messages__btn")

};

let mClassList = (element) => {
	return {
		add: (className) => {
			element.classList.add(className);
			return mClassList(element);
		},
		remove: (className) => {
			element.classList.remove(className);
			return mClassList(element);
		},
		contains: (className, callback) => {
			if (element.classList.contains(className))
				callback(mClassList(element));
		}
	};
};

// 'areaSwapped' is used to keep track of the swapping
// of the main area between chatListArea and messageArea
// in mobile-view
let areaSwapped = false;

// 'chat' is used to store the current chat
// which is being opened in the message area
let chat = null;

// this will contain all the chats that is to be viewed
// in the chatListArea
let chatList = [];

// this will be used to store the date of the last message
// in the message area
let lastDate = "";



// 'populateChatList' will generate the chat list
// based on the 'messages' in the datastore
let populateChatList = () => {
	chatList = [];

	// 'present' will keep track of the chats
	// that are already included in chatList
	// in short, 'present' is a Map DS
	let present = {};

	MessageUtils.getMessages()

		.sort((a, b) => mDate(a.time).subtract(b.time))
		.forEach((msg) => {
			let chat = {};

			chat.isGroup = msg.recvIsGroup;
			chat.msg = msg;


			if (msg.recvIsGroup) {
				chat.group = groupList.find((group) => (group.id === msg.recvId));
				chat.name = chat.group.name;
				chat.orderNumber = chat.group.orderNumber;
			} else {
				chat.contact = contactList.find((contact) => (msg.sender !== user.id) ? (contact.id === msg.sender) : (contact.id === msg.recvId));
				chat.name = chat.contact.name;
				chat.orderNumber = chat.contact.orderNumber;
			}

			chat.unread = (msg.sender !== user.id && msg.status < 2) ? 1 : 0;

			if (present[chat.name] !== undefined) {
				chatList[present[chat.name]].msg = msg;
				chatList[present[chat.name]].unread += chat.unread;
			} else {
				present[chat.name] = chatList.length;
				chatList.push(chat);
			}
		});
};
//  LEFT SIDE
let viewChatList = () => {

	DOM.chatList.innerHTML = "";
	chatList
		.sort((a, b) => mDate(b.msg.time).subtract(a.msg.time))
		.forEach((elem, index) => {
			let statusClass = elem.msg.status < 2 ? "far" : "fas";
			let unreadClass = elem.unread ? "unread" : "";
			let orderNumber = elem.orderNumber;
			DOM.chatList.innerHTML += `<div class=" chat-list-group">
		<div class="chat-list-item p-2 border-bottom ${unreadClass}" onclick="generateMessageArea(this, ${index})">
			<img src="${elem.isGroup ? elem.group.pic : elem.contact.pic}" alt="Profile Photo" class="img-fluid rounded-circle mr-2" style="height:50px;">
			<div class=" messages-searching-div">
				<div class="order-number">${orderNumber}</div>
				<div class="small last-message">${elem.isGroup ? contactList.find(contact => contact.id === elem.msg.sender).name + ": " : ""}${elem.msg.sender === user.id ? "<i class=\"" + statusClass + " fa-check-circle mr-1\"></i>" : ""} ${elem.msg.body}</div>
			</div>
			
			<div class="flex-grow-1 text-right">
				<div class="small time">${mDate(elem.msg.time).chatListFormat()}</div>
				${elem.unread ? "<div class=\"badge badge-success badge-pill my-badge small\" id=\"unread-count\">" + elem.unread + "</div>" : ""}
			</div>
		</div>
		<div class="messages__btn color-purple " onclick="showMap(this, ${index})">
                                                                <i class="fas fa-share-square "></i>
															</div>
															</div>
		`;
		});
};

let generateChatList = () => {
	populateChatList();
	viewChatList();
};

let addDateToMessageArea = (date) => {
	DOM.messages.innerHTML += `
	<div class="mx-auto my-2 bg-primary text-white small py-1 px-2 rounded">
		${date}
	</div>
	`;
};

let addMessageToMessageArea = (msg) => {
	let msgDate = mDate(msg.time).getDate();
	if (lastDate != msgDate) {
		addDateToMessageArea(msgDate);
		lastDate = msgDate;
	}

	let htmlForGroup = `
	<div class="small font-weight-bold text-primary">
		${contactList.find(contact => contact.id === msg.sender).name}
	</div>
	`;

	let sendStatus = `<i class="${msg.status < 2 ? "far" : "fas"} fa-check-circle"></i>`;
	DOM.messages.innerHTML += `
	<div class="align-self-${msg.sender === user.id ? "end self" : "start"} p-1 my-1 mx-3 rounded bg-white shadow-sm message-item">
		<div class="options">
			<a href="#"><i class="fas fa-angle-down text-muted px-2"></i></a>
		</div>
		${chat.isGroup ? htmlForGroup : ""}
		<div class="d-flex flex-row">
			<div class="body m-1 mr-2">${msg.body}</div>
			<div class="time ml-auto small text-right flex-shrink-0 align-self-end text-muted" style="width:75px;">
				${mDate(msg.time).getTime()}
				${(msg.sender === user.id) ? sendStatus : ""}
			</div>
		</div>
	</div>
	`;

	DOM.messages.scrollTo(0, DOM.messages.scrollHeight);
};
// LEFT SIDE
let generateMessageArea = (elem, chatIndex) => {
	document.getElementById("messages").style.borderBottomRightRadius = "0";
	chat = chatList[chatIndex];

	mClassList(DOM.inputArea).contains("d-none", (elem) => elem.remove("d-none").add("d-flex"));

	mClassList(DOM.messageAreaOverlay).add("d-none");


	[...DOM.chatListItem].forEach((elem) => mClassList(elem).remove("active"));

	mClassList(elem).contains("unread", () => {
		MessageUtils.changeStatusById({
			isGroup: chat.isGroup,
			id: chat.isGroup ? chat.group.id : chat.contact.id
		});
		mClassList(elem).remove("unread");
		mClassList(elem.querySelector("#unread-count")).add("d-none");
	});

	if (window.innerWidth <= 575) {
		mClassList(DOM.chatListArea).remove("d-flex").add("d-none");
		mClassList(DOM.messageArea).remove("d-none").add("d-flex");
		areaSwapped = true;
	} else {
		mClassList(elem).add("active");
		DOM.mapGroup.style.display = "none";
		DOM.messagesLeftBtn.style.display = "none";
	}

	DOM.messageAreaName.innerHTML = chat.name;
	DOM.messageAreaPic.src = chat.isGroup ? chat.group.pic : chat.contact.pic;

	// Message Area details ("last seen ..." for contacts / "..names.." for groups)
	if (chat.isGroup) {
		let groupMembers = groupList.find(group => group.id === chat.group.id).members;
		let memberNames = contactList
			.filter(contact => groupMembers.indexOf(contact.id) !== -1)
			.map(contact => contact.id === user.id ? "You" : contact.name)
			.join(", ");

		DOM.messageAreaDetails.innerHTML = `${memberNames}`;
	} else {
		// DOM.messageAreaDetails.innerHTML = `last seen ${mDate(chat.contact.lastSeen).lastSeenFormat()}`;
		DOM.messageAreaDetails.innerHTML = chat.contact.courierNumber;
	}

	let msgs = chat.isGroup ? MessageUtils.getByGroupId(chat.group.id) : MessageUtils.getByContactId(chat.contact.id);

	DOM.messages.innerHTML = "";

	lastDate = "";
	msgs
		.sort((a, b) => mDate(a.time).subtract(b.time))
		.forEach((msg) => addMessageToMessageArea(msg));
};


// RIGHT SIDE
let showChatList = () => {
	if (areaSwapped) {
		mClassList(DOM.chatListArea).remove("d-none").add("d-flex");
		mClassList(DOM.messageArea).remove("d-flex").add("d-none");

		areaSwapped = false;
	}
};

let sendMessage = () => {
	let value = DOM.messageInput.value;
	DOM.messageInput.value = "";
	if (value === "") return;

	let msg = {
		sender: user.id,
		body: value,
		time: mDate().toString(),
		status: 1,
		recvId: chat.isGroup ? chat.group.id : chat.contact.id,
		recvIsGroup: chat.isGroup
	};

	addMessageToMessageArea(msg);
	MessageUtils.addMessage(msg);
	generateChatList();
};

// // LEFT SIDE SEARCH MESSAGES
// function searchMessages() {
// 	var input, filter, ul, li, i, txtValue;
// 	input = document.getElementById("searchMessages");
// 	filter = input.value.toUpperCase();
// 	ul = document.getElementById("chat-list");
// 	li = ul.getElementsByClassName("chat-list-item");
// 	for (i = 0; i < li.length; i++) {
// 		div = li[i].getElementsByClassName("messages-searching-div")[0];
// 		txtValue = div.textContent || div.innerText;
// 		if (txtValue.toUpperCase().indexOf(filter) > -1) {
// 			li[i].style.display = "";
// 		} else {
// 			li[i].style.display = "none";

// 		}
// 	}
// }


// LEFT SIDE SEARCH MESSAGES
function searchMessages() {
	var input, filter, ul, li, i, a, txtValue;
	input = document.getElementById("searchMessages");
	filter = input.value.toUpperCase();
	ul = document.getElementById("chat-list");
	li = ul.getElementsByClassName("chat-list-group");
	for (i = 0; i < li.length; i++) {
		div = li[i].getElementsByClassName("messages-searching-div")[0];
		txtValue = div.textContent || div.innerText;
		if (txtValue.toUpperCase().indexOf(filter) > -1) {
			li[i].style.display = "";
		} else {
			li[i].style.display = "none";

		}
	}
}
// SHOW HIDE PROFILE SETTINGS

let showProfileSettings = () => {
	// DOM.profileSettings.style.left = 0;
	DOM.profileSettings.style.display = "block";
	DOM.profilePic.src = user.pic;
	DOM.inputName.value = user.name;
};

let hideProfileSettings = () => {
	// DOM.profileSettings.style.left = "-110%";
	DOM.profileSettings.style.display = "none";
	DOM.username.innerHTML = user.name;
};
//  SHOWING MAP AREA
let showMap = (elem) => {
	let messages__btn = document.querySelectorAll(".messages__btn");
	for (let x in messages__btn) {
		messages__btn[x].onclick = function () {
			DOM.mapGroup.style.display = "block";
			DOM.messagesLeftBtn.style.display = "block";
			[...DOM.chatListItem].forEach((elem) => mClassList(elem).remove("active"));
			$(this).prev().addClass("active");
		}
	}
};

let hideMap = () => {



	let myMessagesInnerBtnleft = document.querySelectorAll(".my-messages-inner__btn--left");
	for (let y in myMessagesInnerBtnleft) {
		myMessagesInnerBtnleft[y].onclick = function () {
			DOM.mapGroup.style.display = "none";
			DOM.messagesLeftBtn.style.display = "none";
			// mClassList(DOM.messageAreaOverlay).add("d-block");
		}
	}


};

window.addEventListener("resize", e => {
	if (window.innerWidth > 575) showChatList();
});


let init = () => {
	DOM.username.innerHTML = user.name;
	DOM.displayPic.src = user.pic;
	DOM.profilePic.stc = user.pic;
	DOM.profilePic.addEventListener("click", () => DOM.profilePicInput.click());
	DOM.profilePicInput.addEventListener("change", () => console.log(DOM.profilePicInput.files[0]));
	DOM.inputName.addEventListener("blur", (e) => user.name = e.target.value);
	generateChatList();

	// console.log("Click the Image at top-left to open settings.");
};

init();

// SCRIPT.JS END
// // // FOR  INDEX.HTML  INDEX-3.HTML İNTERNATİONAL TELEPHONE İNPUT
$(document).ready(function () {

  var input = document.querySelector("#phoneNumber"),
    errorMsg = document.querySelector("#error-msg"),
    validMsg = document.querySelector("#valid-msg");
      //   // initialise plugin
  var iti = window.intlTelInput(input, {
    utilsScript: "libs/intl-tel-input/build/js/utils.js"
  });
  
  //   // here, the index maps to the error code returned from getValidationError - see readme
  var errorMap = ["Invalid number", "Invalid country code", "Too short", "Too long", "Invalid number"];

  // //   // FOR ACCOUNT-SIGN-IN-COVER2.HTML
  $("#phoneNumber").intlTelInput({
    // preferredCountries: ["us", "ca"],
    separateDialCode: false,
    initialCountry: "az",
    autoPlaceholder: "polite",
    // allowDropdown: false,

    // separateDialCode: true,

  });
   countryDialCode = $("#phoneNumber").intlTelInput("getSelectedCountryData").dialCode;
 
  $('#phoneNumber').val('+' + countryDialCode);
  input.addEventListener('countrychange', function () {

    var countryDialCode = $("#phoneNumber").intlTelInput("getSelectedCountryData").dialCode;
    console.log(countryDialCode);
    $('#phoneNumber').val('+' + countryDialCode);
    

    if (countryDialCode !== "994") {
      $("#use-sms").attr("disabled", "disabled");
    } else if (countryDialCode === "994") {
      $("#use-sms").removeAttr("disabled");
    }
  });











  let reset = function () {
    input.classList.remove("error");
    errorMsg.innerHTML = "";
    errorMsg.classList.add("valid-hide");
    validMsg.classList.add("valid-hide");
  };

  //   // on blur: validate
  input.addEventListener('blur', function () {
    reset();
    if (input.value.trim()) {
      if (iti.isValidNumber()) {
        validMsg.classList.remove("valid-hide");
      } else {
        input.classList.add("error");
        let errorCode = iti.getValidationError();
        errorMsg.innerHTML = errorMap[errorCode];
        errorMsg.classList.remove("valid-hide");
      }
    }
  });

  $('#use-sms').click(function () {
    console.log( $('#phoneNumber').val());
    reset();
    if (input.value.trim()) {
      if (iti.isValidNumber()) {
        validMsg.classList.remove("valid-hide");
      } else {
        input.classList.add("error");
        let errorCode = iti.getValidationError();
        errorMsg.innerHTML = errorMap[errorCode];
        errorMsg.classList.remove("valid-hide");
      }
    }
  });

  // on keyup / change flag: reset
  input.addEventListener('change', reset);
  input.addEventListener('keyup', reset);



});
//  NEW FOR INDEX-3.HTML
$(document).ready(function() {
	$("#lightgallery").lightGallery({

		thumbnail:true,
		animateThumb: false,
		showThumbByDefault: false
	}); 

});
// var directionsDisplay;
// var directionsService = new google.maps.DirectionsService();
// var map;

// var autocomplete_start, autocomplete_end;
// var place_start, place_end,marker;


// function initialize() {
//     directionsDisplay = new google.maps.DirectionsRenderer();
//     var thisCity = new google.maps.LatLng(40.409264, 49.867092);
//     var myOptions = {
//         zoom: 15,
//         mapTypeId: google.maps.MapTypeId.ROADMAP,
//         center: thisCity
//     }
//     map = new google.maps.Map(document.getElementById("map_canvas"), myOptions);
//     directionsDisplay.setMap(map);
//     directionsDisplay.setPanel(document.getElementById("directionsPanel"));

//     var input_start = document.getElementById("startPlace");
//     var input_end = document.getElementById("endPlace");
//     var options = {
//         componentRestrictions: { country: 'az' }
//     }
//     autocomplete_start = new google.maps.places.Autocomplete(input_start, options);
//     google.maps.event.addListener(autocomplete_start, 'place_changed', function () {
//         place_start = autocomplete_start.getPlace();
//     });

//     autocomplete_end = new google.maps.places.Autocomplete(input_end, options);
//     google.maps.event.addListener(autocomplete_end, 'place_changed', function () {
//         place_end = autocomplete_end.getPlace();
//     });



//     // google.maps.event.addListener(map, 'click', function (event) {

//     //     marker = new google.maps.Marker({ position: event.latLng, map: map });
//     //     alert("Latitude: " + event.latLng.lat() + " " + ", longitude: " + event.latLng.lng());
//     // });

    
// //add adress after click to map
//     google.maps.event.addListener(map, 'click', function (event) {
     
//         if (marker && marker.setMap) {
//             marker.setMap(null);
//         }
//         marker = new google.maps.Marker({ position: event.latLng, map: map });
       
//         var geocoder = new google.maps.Geocoder();
//         geocoder.geocode({
//             "latLng": event.latLng
//         }, 
//         function (results, status) {
//             console.log(results, status);
//             if (status == google.maps.GeocoderStatus.OK) {
//                 console.log(results);
//                 var lat = results[0].geometry.location.lat(),
//                     lng = results[0].geometry.location.lng(),
//                     placeName = results[0].address_components[0].long_name,
//                     latlng = new google.maps.LatLng(lat, lng);

//                 $("#startPlace").val(results[0].formatted_address);
//             }
//         });
    
//     });
// }

// function calcRoute() {
//     var start = document.getElementById("startPlace").value + ', Baku, Azerbaijan';
//     var end = document.getElementById("endPlace").value + ', Baku, Azerbaijan';

//     if (typeof (place_start) != 'undefined') {
//         start = new google.maps.LatLng(place_start.geometry.location.lat(), place_start.geometry.location.lng());
//         console.log(place_start);
//         console.log(start);
//     }
//     if (typeof (place_end) != 'undefined') {
//         end = new google.maps.LatLng(place_end.geometry.location.lat(), place_end.geometry.location.lng());
//         console.log(place_end);
//         console.log(end);
//     }

//     var request = {
//         origin: start,
//         destination: end,
//         travelMode: google.maps.TravelMode.DRIVING
//     };

//     directionsService.route(request, function (result, status) {
//         if (status == google.maps.DirectionsStatus.OK) {
//             directionsDisplay.setDirections(result);
//             var price_for_selected = document.getElementById('price_for_selected');
//             var myRoute = result.routes[0].legs[0];

//             var commonDistanse = myRoute.distance.value / 1000;

//             if (commonDistanse <= 3) {
//                 price = 2
//             } else if (commonDistanse > 3 && commonDistanse <= 12) {
//                 price = (commonDistanse - 3) * 0.5 + 2
//             } else if (commonDistanse > 12 && commonDistanse <= 70) {
//                 price = (commonDistanse - 12) * 0.4 + 2 + (9 * 0.5)
//             } else {
//                 price = (commonDistanse - 70) * 0.22 + (70 * 0.4)
//             }

//             var innerHtml = '<div class="alert alert-success" role="alert"> ';
//             innerHtml += '<p>Mesafe: <td>' + myRoute.distance.text + '';
//             innerHtml += '<p>Teqribi vaxt: <td>' + myRoute.duration.text + '';
//             innerHtml += '<p>Qiymet: ' + Math.ceil(price) + ' AZN';
//             innerHtml += '';
//             price_for_selected.innerHTML = innerHtml;
//         } else {
//             var price_for_selected = document.getElementById('price_for_selected');
//             var innerHtml = '<div class="alert alert-warning" role="alert"></div>';
//             price_for_selected.innerHTML = innerHtml;
//             var directionsPanel = document.getElementById('directionsPanel');
//             directionsPanel.innerHTML = '';
//         }
//     });
// }



// window.onload = initialize;


$(document).ready(function(){
    $(".getTocurrentLocation").click(function(){
      $(".inpBtn__box").hide();
      $(".currentLocation").show();
      $(".formBox").removeClass('d-none');
      $(".getStartLatLng").show();
    });
    
    $(".getToEndLocation").click(function(){
      $(".inpBtn__box").hide();
      $(".endLocation").show();
      $(".formBox").removeClass('d-none');
      $(".getEndLatLng").show();
    });

    $(".backToInpBtn__box").click(function(){
        $(".inpBtn__box").show();
        $(".currentLocation").hide();
        $(".endLocation").hide();
        $(".formBox").addClass('d-none');
        $(".getStartLatLng").hide();
    });

    $(".inpBtn__link").click(function(){
        $(".formBox").addClass('d-none');
        $(".mapBox").removeClass('d-none');
      });

    $(".backToFormBox").click(function(){
        $(".mapBox").addClass('d-none');
        $(".formBox").removeClass('d-none');
        $(".currentLocation").show();
        $(".getEndLatLng").hide();
        $(".getStartLatLng").hide();
    });

  
  });


// $(document).ready(function () {
//   $('#verify-number').mask('000000');
//   // $('#sign-in-form').parsley().on('field:validated', function () {
//   //   var ok = $('.parsley-error').length === 0

//   //   $("#phoneNumber").removeClass('parsley-success');
   

//   //   var parsleyError = $('#sign-in-form').find('.parsley-error')
//   //   // if(parsleyError){
//   //   //   $('#sign-in-form').find(".iti__selected-flag").css({
//   //   //     'height': '70%'
//   //   //   });
//   //   // }
  
   
//   //   // $("#phoneNumber").addEventListener('keyup', function() {
//   //   //   $("#phoneNumber").removeClass('parsley-error');
    
//   //   // });
//   // })





//   $('#first_form').parsley().on('field:validated', function () {
//     var ok = $('.parsley-error').length === 0

//     $('.insurance__div--input-group').find('.parsley-errors-list').css({
//       'order': '3',
    
//       'flexWrap': 'wrap',
//       'width': '100%'
//     });
    
//   })
//   $('#my-profile-form').parsley().on('field:validated', function () {
//     var ok = $('.parsley-error').length === 0

   
    
//   })
//     .on('form:submit', function () {
//       return false; // Don't submit form for this demo
//     });

// });
// SCROLL FOR INDEX7

// $(document).ready(function () {

//     var $scrollheight = $('scrollbar1'),
//     scrollBottom = 490;

//     var $window = $(window),
//         previousScrollTop = 0,
//         scrollLock = true;

//     $window.scroll(function (event) {
     
//         if (scrollLock) {
//             $window.scrollTop(previousScrollTop);
//         }
//         previousScrollTop = $window.scrollTop();
//     });
   
  
//     $(".scrollbar1").scroll(function () {
//         if ( $scrollheight.scrollTop(scrollBottom)) {        
//             scrollLock = false;
//         } else {
//             scrollLock = true;
//         }
//     })

  
// });
//  İNDEXDƏ OLAN SEARCH CAROUSELİ
 $( document ).ready(function() {
    $('.search-carousel').owlCarousel({
      loop: false,
      rewind: true,
      autoWidth:true,
      margin:10,
      nav: false,
      dots: false,
      autoplay: true,
      autoplayHoverPause: true,
      responsive: {
        0: {
          items: 2
        },
        600: {
          items: 4
        },
        1000: {
          items: 5
        },
        1200: {
          items: 7
        }
      }
    })
});
// İNDEXDƏ OLAN FORMUN İÇİNDƏKİ #LABOR  SPINNERIN İCONUNUN DƏYİŞMƏSİ
$(document).ready(function () {
function spinnerAction(count) {
    if(count == 0) {
        $("#user0").removeClass("d-none");
        $("#user1").addClass("d-none");
        $("#user2").addClass("d-none");
        $("#userMore").addClass("d-none");
    }
    else if (count == 1) {
        $("#user0").addClass("d-none");
        $("#user1").removeClass("d-none");
        $("#user2").addClass("d-none");
        $("#userMore").addClass("d-none");
    } else if (count == 2) {
        $("#user0").addClass("d-none");
        $("#user1").addClass("d-none");
        $("#user2").removeClass("d-none");
        $("#userMore").addClass("d-none");
    } else if (count >= 3) {
        $("#user0").addClass("d-none");
        $("#user1").addClass("d-none");
        $("#user2").addClass("d-none");
        $("#userMore").removeClass("d-none");
    }
}

var count = 0;

$("#spinner").on("keyup",function (e) {
    count = $(this).val();
    spinnerAction(count);
});

$("#icon-minus").on("click", function (e) {
    if (count != 0) {
        count = count - 1;
    }
    $("#spinner").val(count);
    spinnerAction(count);
});

$("#icon-plus").on("click", function (e) {
        count = count + 1;
    $("#spinner").val(count);
    spinnerAction(count);
});
});
//  SWIPE TRANSITION START
$(document).ready(function () {
    
    $(function () {

        function setCurrentSlide(ele, index, cssClass) {
            $(cssClass + " .swiper-slide").removeClass("active");
            $(cssClass + " .swiper-slide").attr("aria-selected", "false");
            ele.addClass("active");
            ele.attr("aria-selected", "true");



            var z = $('#car-tab-courier').attr("aria-selected");
            if (z == "true") {

                var insuranceInputVal = $(".insurance__div--input").val();
                insuranceInputVal = $(".insurance__div--input").val('');
                var InsurancePercent = $(".insurance__percent").text('0');
                totalPrice = $('.total__money').text(parseInt($(".price").text()));
                $(".insurance__input").prop("checked", false);
              
            }

            var x = $("#car-tab-truck").attr("aria-selected");
            if (x == "true") {
                $('#labor, #packing').css({
                    'display': 'block'
                });
                var insuranceInputVal = $(".insurance__div--input").val();
                insuranceInputVal = $(".insurance__div--input").val('');
                var InsurancePercent = $(".insurance__percent").text('0');
                totalPrice = $('.total__money').text(parseInt($(".price").text()));
                $(".insurance__input").prop("checked", false);
             
            } else {
                $('#labor, #packing').css({
                    'display': 'none'
                });
            }

            var y = $("#car-tab-evacutor").attr("aria-selected");
            if (y == "false") {
                $('#receiver').css({
                    'display': 'block'
                });
            } else {
                $('#receiver').css({
                    'display': 'none'
                });
                var insuranceInputVal = $(".insurance__div--input").val();
                insuranceInputVal = $(".insurance__div--input").val('');
                var InsurancePercent = $(".insurance__percent").text('0');
                totalPrice = $('.total__money').text(parseInt($(".price").text()));
                $(".insurance__input").prop("checked", false);
              
            }

            // SWIPE EDENDE TEK OLAN CAR INPUTUNU SECSIN

            var numItems = $('.swiper-slide-active').find(".car-pills__input").length;

            if (numItems == 1) {
                $(".swiper-slide-active").find(".car-pills__input").prop("checked", true);
            } else {
                $(".swiper-slide").find(".car-pills__input").prop("checked", false);
                $(".swiper-slide-active").find("#pedestrian").prop("checked", true);
            }

        }

        //check for anchor
        var locationHash = document.location.hash;

        //Open Tab to location hash
        if ($(locationHash).length) {
            console.log("exists");
        } else {
            console.log("no hash");
        }



        //find each component
        $('.tabcontainer').each(function (i) {

            //add unique id to tab container
            $(this).attr('id', 'tabcontainer-' + i);
            //cache unique id
            var el = '#tabcontainer-' + i;
            //add unique class to the tab list
            $(this).find('.swiper-tabs').addClass('navinstance-' + i);
            $(this).find('.swiper-tabs-panel').addClass('panelinstance-' + i);
            var tabNavClass = '.navinstance-' + i;
            var tabPnlClass = '.panelinstance-' + i;

            var mqls = [ // list of window.matchMedia() queries
                window.matchMedia("(max-width: 480px)"),
                window.matchMedia("(max-width: 979px)")
            ]

          







            //swiper stuff
            var swiper1 = new Swiper(tabNavClass, {
                slidesPerView: 3,
                paginationClickable: true,
                hashNavigation: true,
                spaceBetween: 1,
                freeMode: true,
                loop: false,
                noSwiping: true,
                noSwipingClass: 'swiper-no-swiping',
                observer: true,
                preventClicksPropagation: true,
                onTab: function (swiper) {
                    var n = swiper1.clickedIndex;
                    alert(1);
                },
                // breakpoints: {
                //     // when window width is <= 480px
                //     480: {
                //         slidesPerView: 3
                //     },
                //     // when window width is <= 980px
                //     980: {
                //         slidesPerView: 3
                //     }
                // }
            });
            swiper1.slides.each(function (index, val) {
                var ele = $(this);
                ele.on("click", function () {
                    setCurrentSlide(ele, index, tabNavClass);
                    swiper2.slideTo(index, 500, false);
                });


            });

            var swiper2 = new Swiper(tabPnlClass, {
                direction: 'horizontal',
                loop: false,
                autoHeight: true,
                observer: true,
                preventClicks: false,
                onSlideChangeEnd: function (swiper) {
                    var n = swiper.activeIndex;
                    setCurrentSlide($(tabNavClass + " .swiper-slide").eq(n), n,
                        tabNavClass);
                    swiper1.slideTo(n, 500, false);
                },
                // breakpoints: {
                //     // when window width is <= 480px
                //     480: {
                //         direction: 'vertical',
                //         noSwiping: true,
                //         noSwipingClass: 'swiper-no-swiping'
                //     }
                // }
            });

            if (locationHash) {
                swiper2.slideTo(swiper1.activeIndex);
            }

            function mediaqueryresponse(mql) {
                if (mqls[0].matches) {
                    //Mobile Mode
                    $('.swiper-container').addClass('swiper-no-swiping');
                    $('.swiper-wrapper').addClass('swiper-no-swiping');
                    $('.swiper-slide').addClass('swiper-no-swiping');
                } else if (mqls[1].matches) {
                    //Tablet Mode
                    $('.swiper-container').removeClass('swiper-no-swiping');
                    $('.swiper-wrapper').removeClass('swiper-no-swiping');
                    $('.swiper-slide').removeClass('swiper-no-swiping');
                } else {
                    //Desktop
                }
            }


            for (var i = 0; i < mqls.length; i++) {
                mediaqueryresponse(mqls[i]);
                mqls[i].addListener(
                    mediaqueryresponse); // call handler function whenever the media query is triggered
            }
        });
    });


    // CLICK EDENDE TEK OLAN CAR INPUTUNU SECSIN

    $(document).ready(function () {
        $('#car-tab-courier').click(function () {
            $("#evacuator").prop("checked", false);
            $("#truck").prop("checked", false);
            $(".swiper-slide-active").find("#pedestrian").prop("checked", true);
            $("#pedestrian").trigger("change");
            // $('input:radio[data-id=transition]:nth(0)').prop('checked', true).trigger("change");
            // setTimeout(function(){
            //     $("#pedestrian").prop('checked','checked');
            //   },10);

            // let who = $('input:radio[data-id=transition]:nth(0)').prop('id').trigger("change") ;
            // let checked = $(this).prop('checked') ? 'checked' : 'unchecked';
            // console.log(who + ' has been ' + checked);

         
        });
        $('#car-tab-evacutor').click(function () {
            $("#evacuator").prop("checked", true);
        });

        $('#car-tab-truck').click(function () {
            $("#truck").prop("checked", true);
        });

    });
});

//  SWIPE TRANSITION END

 $( document ).ready(function() {
    $('.times-carousel').owlCarousel({
      loop: false,
      rewind: true,
    
      nav: false,
      dots: false,
      // autoplay: true,
      // autoplayHoverPause: true,
      responsive: {
        0: {
          items: 4
        },
        600: {
          items: 4
        },
        1000: {
          items: 4
        },
        1200: {
          items: 5
        }
      }
    })
});
$(document).ready(function () {
    $('.tooltip-circle').bind('hover focus', function() {
        $(".form__tooltip").find(".tooltip-inner").addClass("tooltip--inner") ;      
    });
	
});
$(document).ready(function () {

    var priceText = parseInt($(".price").text());
    totalPrice = $('.total__money').text(priceText);
    console.log(totalPrice, 'this');
    

    $(document).on('keyup keypress blur', '.insurance__div--input', function (event) {
        var percent = 0.03;
        var insuranceInputVal = $(".insurance__div--input").val();
        var reg = /^0+/gi;
        if (this.value.match(reg)) {
            this.value = this.value.replace(reg, '');
        }
        //Input accept only digits
        $(this).val($(this).val().replace(/[^\d].+/, ""));
        if ((event.which < 48 || event.which > 57)) {
            event.preventDefault();
        }

        if (insuranceInputVal.length > 0) {
            totalPrice = $('.total__money').text(parseInt($(".price").text()));

            var totalPercentVal = percent * insuranceInputVal;
            var totalPercentValRound = Math.ceil(totalPercentVal * 100) / 100;
            var InsurancePercent = $(".insurance__percent").text(totalPercentValRound);
            var totalPrice = parseInt($('.total__money').text());
            // var total =totalPrice + totalPercentValRound;
            var total =Math.ceil((totalPrice + totalPercentValRound) *100) / 100;
            var totalMoney = $('.total__money').text(total);
        } else {
            var InsurancePercent = $(".insurance__percent").text('0');
            totalPrice = $('.total__money').text(parseInt($(".price").text()));
        }
    });
  

    $('input[type=radio][data-id=transition]').change(function() {
        var insuranceInputVal = $(".insurance__div--input").val();
        insuranceInputVal = $(".insurance__div--input").val('');
       var InsurancePercent = $(".insurance__percent").text('0');
       totalPrice = $('.total__money').text(parseInt($(".price").text()));
       $('.insurance__input').prop("checked",false) ;
       $('.insurance__div').empty();
     
    });
});


//  FOR  VERİFY-NUMBER.HTML 
$(document).ready(function () {
  $(function () {
    'use strict';

    var body = $('body');

    function goToNextInput(e) {
      var key = e.which,
        t = $(e.target),
        sib = t.next('.verification-input');

      if (key != 9 && (key < 48 || key > 57)) {
        e.preventDefault();
        return false;
      }

      if (key === 9) {
        return true;
      }

      if (!sib || !sib.length) {
        sib = body.find('.verification-input').eq(0);
      }
      sib.select().focus();
    }

    function onKeyDown(e) {
      var key = e.which;

      if (key === 9 || (key >= 48 && key <= 57)) {
        return true;
      }

      e.preventDefault();
      return false;
    }

    function onFocus(e) {
      $(e.target).select();
    }

    body.on('keyup', '.verification-input', goToNextInput);
    body.on('keydown', '.verification-input', onKeyDown);
    body.on('click', '.verification-input', onFocus);

  });
});