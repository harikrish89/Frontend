

// Countries
var country_arr = new Array("Canada", "United States");
// States
var state_array = new Array();
state_array[0]="";
state_array[1]="Alberta|British Columbia|Manitoba|New Brunswick|Newfoundland|Northwest Territories|Nova Scotia|Nunavut|Ontario|Prince Edward Island|Quebec|Saskatchewan|Yukon Territory";
state_array[2]="Alabama|Alaska|Arizona|Arkansas|California|Colorado|Connecticut|Delaware|District of Columbia|Florida|Georgia|Hawaii|Idaho|Illinois|Indiana|Iowa|Kansas|Kentucky|Louisiana|Maine|Maryland|Massachusetts|Michigan|Minnesota|Mississippi|Missouri|Montana|Nebraska|Nevada|New Hampshire|New Jersey|New Mexico|New York|North Carolina|North Dakota|Ohio|Oklahoma|Oregon|Pennsylvania|Rhode Island|South Carolina|South Dakota|Tennessee|Texas|Utah|Vermont|Virginia|Washington|West Virginia|Wisconsin|Wyoming";
// Populate State 
function populateStates( countryElementId, stateElementId ){
	var selectedCountryIndex = document.getElementById( countryElementId ).selectedIndex;
	var stateElement = document.getElementById( stateElementId );
	stateElement.length=0;	
	stateElement.options[0] = new Option('Select State','');
	stateElement.selectedIndex = 0;
	var state_arr = state_array[selectedCountryIndex].split("|");
	for (var i=0; i<state_arr.length; i++) {
		stateElement.options[stateElement.length] = new Option(state_arr[i],state_arr[i]);
	}
}
// Populate Country
function populateCountries(countryElementId, stateElementId){
	var countryElement = document.getElementById(countryElementId);
	countryElement.length=0;
	countryElement.options[0] = new Option('Select One','-1');
	countryElement.selectedIndex = 0;
	for (var i=0; i<country_arr.length; i++) {
		countryElement.options[countryElement.length] = new Option(country_arr[i],country_arr[i]);
	}
	if( stateElementId ){
		countryElement.onchange = function(){
			document.getElementById("statediv").style.display = 'block';
			populateStates( countryElementId, stateElementId );
		};
	}
}