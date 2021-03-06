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

	document.getElementById("spinner-apply-success").style.display = 'none'
	$('.next-for-apply').click(function(){
		var $spinner = $("div#spinner-apply-success").loadingSpinner({
			size: 400
		});

		$(".driver-progressbar-third").addClass("active");
	
		setTimeout(function () {
			// You can set this to "failure" to see a red X instead of the checkmark
			$spinner.loadingSpinner("success");
		}, 2000)
		document.getElementById("spinner-apply-success").style.display = 'block'
var myVar = setInterval(myTimer, 1000);
	var value = 0;
	function myTimer() {
		value = value + 1;
		if (value == 5) {
			document.getElementById("spinner-apply-success").style.display = 'none'
		}
	}
	$('.driver-apply__content').delay(5000).queue(function (next) {
        $(this).css('display', 'block');
        next();
    });
	});


   
});