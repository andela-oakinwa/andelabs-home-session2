(function(){
	'use strict';

	module.exports = {
		reverseString : function(stringArg){
			var result = (typeof stringArg != 'string') ? "Input must be a string":
						(stringArg == "") ? null : reverse(stringArg);
			return result;

			function reverse(stringArg){
				
				var reverseResult = (stringArg.split("").reverse().join("") == stringArg) ? true : stringArg.split("").reverse().join("");
				return reverseResult;
			}

		}
	};
})();