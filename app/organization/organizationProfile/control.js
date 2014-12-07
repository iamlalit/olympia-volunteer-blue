var areaoffocus_set = [{'value ':'Immigration','text':'Immigration'}, {'value':'Education','text':'Education'}, 
                {'value':'Job and Workplace','text':'Job and Workplace'}, {'value':'Conflict resolution','text':'Conflict resolution'}, 
                {'value':'Consumer protection','text':'Consumer protection'}, {'value':'Crime & Safety','text':'Crime & Safety'},
                {'value':'Civic engagement','text':'Civic engagement'}, {'value':'Risk Management','text':'Risk Management'}];

$('#areaofFocusVolunteer').tagsinput({
    itemValue: 'value',
    itemText: 'text',
    typeahead: {
        source: areaoffocus_set,
        sorter: function (items) {
            return items.sort();
        }
    }
});

/*Adding method to prevent enter from being click*/
$("#areaofFocusVolunteer").next().children('input').attr("onkeypress", "doNothing()");

function updateValueAOFCheck(){
    var listOfLan = [], listofLanObject = {};
  for( i=1 ; i <= 52 ; i++){
    if($("#areaOfFocus" + i +"").is(":checked")){
     listofLanObject = {'text' : ' ', 'value' : ' '};
      //getting current node elements
      currentnode = $("#areaOfFocus" + i +"").val();
      listofLanObject.text = currentnode;
      listofLanObject.value = currentnode;
      listOfLan.push(listofLanObject);
    }
  }
  $('#areaofFocusVolunteer').tagsinput('removeAll');
  $("#areaofFocusVolunteer").tagsinput("refresh");
  for(i = 0 ; i < listOfLan.length ; i++){
    $("#areaofFocusVolunteer").tagsinput('add', listOfLan[i]);
  }
}

//Adding input tag from dropdown
$('#areaofFocusVolunteer').on('itemAdded', function(event) {
   var lengthInputTag = $("#areaofFocusVolunteer").next().children().length;
    if (lengthInputTag == 1){
        $("#areaofFocusVolunteer").next().children('input').attr("placeholder", "Add area of focus");   
    } else if (lengthInputTag > 1){
      $("#areaofFocusVolunteer").next().children('input').attr("placeholder", " ");
    }
  // event.item: contains the item
});

/* On Removing tags */
$('#areaofFocusVolunteer').on('itemRemoved', function(event) {
  var lengthInputTag = $("#areaofFocusVolunteer").next().children().length;
  if (lengthInputTag == 1){
      $("#areaofFocusVolunteer").next().children('input').attr("placeholder", "Add area of focus");   
  } 
});

function updateValueAOFText(){
  $("#areaofFocusVolunteer").tagsinput("refresh");
  var tagsValue = $("#areaofFocusVolunteer").val();
  var tagsList = tagsValue.split(",");
  console.log(tagsList);
  for( i=1 ; i <= 52 ; i++){
        $("#areaOfFocus" + i + "").prop("checked", false);
  }
  for( i=1 ; i <= 52 ; i++){
    for( j = 0 ; j < tagsList.length ; j++ ){
      if($("#areaOfFocus" + i + "").val() === tagsList[j]){
        $("#areaOfFocus" + i + "").prop("checked", true);
      }
    }
  }
}
var address_element = "<div class='border-address col-sm-7 margin-left-80' id='address-block'>"+
                        "<button type='button' class='close pull-right' aria-hidden='true' onclick='closeAddress()'>&times;</button>" +
                        "<label>Time Zone</label>"+
                        "<br>"+
                        "<select>"+
                            "<option value='Ipsum'>UTC (Coordinated Universal Time)</option>"+
                            "<option value='Consectetur'>GMT (Greenwich Mean Time)</option>"+
                        "</select>"+
                        "<br>"+
                        "<label >Address</label>"+
                        "<br>"+
                        "<input type='text' class='form-control' id='form-control-weight' for='address' id='form-text-control'>"+
                        "<br>"+
                        "<label >City</label>"+
                        "<input type='text' class='form-control' id='form-control-weight' for='city' id='form-text-control'>"+
                        "<br>"+
                        "<label >Country</label>"+
                        "<br>"+
                        "<select>"+
                            "<option value='Ipsum'>Afghanistan</option>"+
                            "<option value='Consectetur'>Akrotiri</option>"+
                            "<option value='Ipsum'>Albania</option>"+
                            "<option value='Consectetur'>Algeria</option>"+
                            "<option value='Ipsum'>Angola</option>"+
                            "<option value='Consectetur'>Antarctica</option>"+
                            "<option value='Ipsum'>Antigua and Barbuda</option>"+
                            "<option value='Consectetur'>Argentina</option>"+
                            "<option value='Ipsum'>Australia</option>"+
                            "<option value='Consectetur'>Austria</option>"+
                            "<option value='Ipsum'>Bahamas, The</option>"+
                            "<option value='Consectetur'>Bangladesh</option>"+
                            "<option value='Ipsum'>Bassas da India</option>"+
                            "<option value='Consectetur'>Belarus</option>"+
                            "<option value='Ipsum'>Belgium</option>"+
                            "<option value='Consectetur'>Bermuda</option>"+
                            "<option value='Ipsum'>Bhutan</option>"+
                            "<option value='Consectetur'>Brazil</option>"+
                            "<option value='Ipsum'>British Indian Ocean Territory</option>"+
                            "<option value='Consectetur'>British Virgin Islands</option>"+
                            "<option value='Ipsum'>Bulgaria</option>"+
                            "<option value='Consectetur'>Burma</option>"+
                            "<option value='Ipsum'>Burundi</option>"+
                            "<option value='Consectetur'>Cambodia</option>"+
                            "<option value='Ipsum'>Cameroon</option>"+
                            "<option value='Consectetur'>Canada</option>"+
                            "<option value='Ipsum'>China</option>"+
                            "<option value='Consectetur'>Cocos (Keeling) Islands</option>"+
                            "<option value='Ipsum'>Colombia</option>"+
                            "<option value='Consectetur'>Comoros</option>"+
                            "<option value='Ipsum'>Congo, Democratic Republic of the</option>"+
                            "<option value='Consectetur'>Congo, Republic of the</option>"+
                            "<option value='Ipsum'>Cook Islands</option>"+
                            "<option value='Consectetur'>Cuba</option>"+
                            "<option value='Ipsum'>Cyprus</option>"+
                            "<option value='Consectetur'>Denmark</option>"+
                            "<option value='Ipsum'>Dominican Republic</option>"+
                            "<option value='Consectetur'>Ecuador</option>"+
                            "<option value='Ipsum'>Egypt</option>"+
                            "<option value='Consectetur'>Ethiopia</option>"+
                            "<option value='Ipsum'>Finland</option>"+
                            "<option value='Consectetur'>France</option>"+
                            "<option value='Ipsum'>Georgia</option>"+
                            "<option value='Consectetur'>Germany</option>"+
                            "<option value='Ipsum'>Greece</option>"+
                            "<option value='Consectetur'>Greenland</option>"+
                            "<option value='Ipsum'>Guinea</option>"+
                            "<option value='Consectetur'>Holy See (Vatican City)</option>"+
                            "<option value='Ipsum'>Hong Kong</option>"+
                            "<option value='Consectetur'>Iceland</option>"+
                            "<option value='Ipsum'>India</option>"+
                            "<option value='Consectetur'>Indonesia</option>"+
                            "<option value='Ipsum'>Iran</option>"+
                            "<option value='Consectetur'>Iraq</option>"+
                            "<option value='Ipsum'>Ireland</option>"+
                            "<option value='Consectetur'>Israel</option>"+
                            "<option value='Ipsum'>Italy</option>"+
                            "<option value='Consectetur'>Jamaica</option>"+
                            "<option value='Ipsum'>Japan</option>"+
                            "<option value='Consectetur'>Jersey</option>"+
                            "<option value='Ipsum'>Kazakhstan</option>"+
                            "<option value='Consectetur'>Kenya</option>"+
                            "<option value='Ipsum'>Korea</option>"+
                            "<option value='Consectetur'>Kuwait</option>"+
                            "<option value='Ipsum'>Laos</option>"+
                            "<option value='Consectetur'>Lebanon</option>"+
                            "<option value='Ipsum'>Liberia</option>"+
                            "<option value='Consectetur'>Macau</option>"+
                            "<option value='Ipsum'>Malaysia</option>"+
                            "<option value='Consectetur'>Maldives</option>"+
                            "<option value='Ipsum'>Mauritius</option>"+
                            "<option value='Consectetur'>Mexico</option>"+
                            "<option value='Ipsum'>Mozambique</option>"+
                            "<option value='Consectetur'>Namibia</option>"+
                            "<option value='Ipsum'>Nepal</option>"+
                            "<option value='Consectetur' selected='selected'>Netherlands</option>"+
                            "<option value='Ipsum'>New Zealand</option>"+
                            "<option value='Consectetur'>Norway</option>"+
                            "<option value='Ipsum'>Oman</option>"+
                            "<option value='Consectetur'>Pakistan</option>"+
                            "<option value='Ipsum'>Peru</option>"+
                            "<option value='Consectetur'>Philippines</option>"+
                            "<option value='Ipsum'>Poland</option>"+
                            "<option value='Consectetur'>Portugal</option>"+
                            "<option value='Ipsum'>Qatar</option>"+
                            "<option value='Consectetur'>Romania</option>"+
                            "<option value='Ipsum'>Russia</option>"+
                            "<option value='Consectetur'>Saudi Arabia</option>"+
                            "<option value='Ipsum'>Sierra Leone</option>"+
                            "<option value='Consectetur'>Singapore</option>"+
                            "<option value='Ipsum'>Solomon Islands</option>"+
                            "<option value='Consectetur'>Somalia</option>"+
                            "<option value='Ipsum'>South Africa</option>"+
                            "<option value='Consectetur'>Spain</option>"+
                            "<option value='Ipsum'>Sri Lanka</option>"+
                            "<option value='Consectetur'>Sweden</option>"+
                            "<option value='Ipsum'>Switzerland</option>"+
                            "<option value='Consectetur'>Syria</option>"+
                            "<option value='Ipsum'>Taiwan</option>"+
                            "<option value='Consectetur'>Thailand</option>"+
                            "<option value='Ipsum'>Turkey</option>"+
                            "<option value='Consectetur'>Uganda</option>"+
                            "<option value='Ipsum'>Ukraine</option>"+
                            "<option value='Consectetur'>United Arab Emirates</option>"+
                            "<option value='Ipsum'>United Kingdom</option>"+
                            "<option value='Consectetur'>United States</option>"+
                            "<option value='Ipsum'>Venezuela</option>"+
                            "<option value='Consectetur'>Vietnam</option>"+
                            "<option value='Ipsum'>Yemen</option>"+
                            "<option value='Consectetur'>Zambia</option>"+
                            "<option value='Ipsum'>Zimbabwe</option>"+
                        "</select>"+
                        "<br>"+
                        "<label >Zip code</label>"+
                        "<br>"+
                        "<input type='text' class='form-control' id='form-control-weight' for='inserting address' id='form-text-control' placeholder='Zip code'>"+
                    "</div>";
function addNewAddress(){
  $("#address").append( address_element );
}
function closeAddress(){
 $("#address div:last-child").remove(); 
}


//volunteer work value
var volunteer_set = [{'value':'Agriculture','text':'Agriculture'}, {'value':'Animals','text':'Animals'}, 
                  {'value':'Arts','text':'Arts'}, {'value':'Civic engegement','text':'Civic engegement'}, 
                  {'value':'Communications access','text':'Communications access'}, {'value':'Community development','text':'Community development'}, 
                  {'value':'Conflict resolution','text':'Conflict resolution'} , {'value':'Consumer protection','text':'Consumer protection'}, 
                  {'value':'Crime & Safety','text':'Crime & Safety'}, {'value':'Disability','text':'Disability'}, {'value':'Disaster relief','text':'Disaster relief'}, 
                  {'value':'Drug abuse','text':'Drug abuse'}, {'value':'Economic development','text':'Economic development'}, 
                  {'value':'Education','text':'Education'}, {'value':'Energy conservation','text':'Energy conservation'}, 
                  {'value':'Environment','text':'Environment'}, {'value':'Family','text':'Family'}, 
                  {'value':'Government reform','text':'Government reform'}, {'value':'Health & Medicine','text':'Health & Medicine'},
                  {'value':'Housing and homelessness','text':'Housing and homelessness'}, {'value':'Human rights','text':'Human rights'},
                  {'value':'Human services','text':'Human services'}, {'value':'Immigration','text':'Immigration'},
                  {'value':'International cooperation','text':'International cooperation'}, {'value':'International relations','text':'International relations'}, 
                  {'value':'Job & workplace','text':'Job & workplace'}, {'value':'Legal assistance','text':'Legal assistance'},
                  {'value':'LGBT','text':'LGBT'},{'value':'Library or resource center','text':'Library or resource center'},
                  {'value':'Media','text':'Media'},{'value':'Men','text':'Men'},
                  {'value':'Mental health','text':'Mental health'},{'value':'Microedit','text':'Microedit'},
                  {'value':'Multi-service agency','text':'Multi-service agency'},{'value':'Museums and history','text':'Museums and history'},
                  {'value':'Network of nonprofits','text':'Network of nonprofits'},{'value':'Personal finance','text':'Personal finance'},
                  {'value':'Philanthropy','text':'Philanthropy'},{'value':'Politics','text':'Politics'},
                  {'value':'Poverty and hunger','text':'Poverty and hunger'},{'value':'Prison reform','text':'Prison reform'},
                  {'value':'Professional association','text':'Professional association'},{'value':'Race and ethnicity','text':'Race and ethnicity'},
                  {'value':'Religion and spirituality','text':'Religion and spirituality'},{'value':'Research and science','text':'Research and science'},
                  {'value':'Rural','text':'Rural'},{'value':'Social enterprise','text':'Social enterprise'},
                  {'value':'Sports and recreation','text':'Sports and recreation'},{'value':'Technology','text':'Technology'},
                  {'value':'Travel and transportation','text':'Travel and transportation'},{'value':'Urban','text':'Urban'},
                  {'value':'Veterans','text':'Veterans'},{'value':'Victim support','text':'Victim support'},
                  {'value':'Volunteering','text':'Volunteering'},{'value':'Women','text':'Women'},
                  {'value':'Youth','text':'Youth'}];
$('#volunteer-tag').tagsinput({
  itemValue: 'value',
  itemText: 'text',
  typeahead: {
    source: volunteer_set,
    sorter: function (items) {
        return items.sort();
    }
  }
});
function updateValueVolunteerInterest() {
    var listOfVolunteerWork = [], listOfVolunteerWorkObject = {};
    for (i = 1 ; i <= 56 ; i++) {
        var target = $("#desiredWork" + i).children("span");
        tickCheck=target[0].className.indexOf("tick");
        if(tickCheck>-1){
          listOfVolunteerWorkObject = {'text' : ' ', 'value' : ' '};
          //getting current node elements
          var currentnode = $("#desiredWork" + i).children("label").text();
          listOfVolunteerWorkObject.text = currentnode;
          listOfVolunteerWorkObject.value = currentnode;
          listOfVolunteerWork.push(listOfVolunteerWorkObject);
          
        }
    }
    $('#volunteer-tag').tagsinput('removeAll');
    $("#volunteer-tag").tagsinput("refresh");
    for (i = 0 ; i < listOfVolunteerWork.length ; i++) {
        $("#volunteer-tag").tagsinput('add', listOfVolunteerWork[i]);
    }
    $("#volunteer-tag").next().children('input').attr("placeholder", " ");
}

/* On Removing tags */
$('#volunteer-tag').on('itemRemoved', function(event) {
  var lengthInputTag = $("#volunteer-tag").next().children().length;
  if (lengthInputTag == 1){
      $("#volunteer-tag").next().children('input').attr("placeholder", "Add volunteer work area");   
  }
});

function clearVolunteerInterest(){
  $(".jsBlank").click();
}

function updateValueVolunteerInterestText(){
  
  $("#volunteer-tag").tagsinput("refresh");
  var tagsValue = $("#volunteer-tag").val();
  var tagsList = tagsValue.split(",");
  console.log(tagsList);
  for( i=1 ; i <= 57 ; i++){
        $("#v" + i + "").prop("checked", false);
  }
  for( i=1 ; i <= 57 ; i++){
    for( j = 0 ; j < tagsList.length ; j++ ){
      if($("#v" + i + "").val() === tagsList[j]){
        $("#v" + i + "").prop("checked", true);
      }
    }
  }
}


//Stop enter from being execute.
function doNothing() {  
var keyCode = event.keyCode ? event.keyCode : event.which ? event.which : event.charCode;
    if( keyCode == 13 ) {
      if(!e) var e = window.event;
        e.cancelBubble = true;
        e.returnValue = false;

      if (e.stopPropagation) {
        e.stopPropagation();
        e.preventDefault();
      }
    }
}
