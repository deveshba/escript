function getCookie(cname) {
   var name = cname + "=";
   var ca = document.cookie.split(';');
   for(var i = 0; i<ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0)==' ') c = c.substring(1);
      if (c.indexOf(name) == 0) return c.substring(name.length, c.length);
   }
   return "";
}


Ecwid.OnPageLoaded.add(function(page)
   {
      if('CHECKOUT_SHIPPING_ADDRESS' == page.type) {

         //Hide shipping form if pickup shipping is selected
         Ecwid.OnCartChanged.add(function(cart)
            {
               //  console.log(cart);
               if(cart) {
                  //alert(getCookie("instore-shipping-title"));
                  if(cart.shippingMethod=='Dine-In')
                  {
                      if(document.getElementsByClassName('ecwid-ProductBrowser-auth-logged').length > 0){
                     document.getElementsByClassName('ecwid-ProductBrowser-auth-logged')[0].style.display='none';
                     }
                  } else {
                     if(document.getElementsByClassName('ecwid-ProductBrowser-auth-logged').length > 0){
                     document.getElementsByClassName('ecwid-ProductBrowser-auth-logged')[0].style.display='block';
                     }
                  }


                  if(cart.shippingMethod=='In My Car')
                  {
                     processInMyCar();
                  } else if(cart.shippingMethod=='Take Away') {
                     processTakeAway();
                  } else if(cart.shippingMethod=='Dine-In') {
                     processInStore();
                  } else if(cart.shippingMethod=='At Home Or Office') {
                     processHomeOrOffice();
                  } else {
                     processInMyCar();
                  }
               }
            }
         );

      }

      if('CHECKOUT_PLACE_ORDER' == page.type) {

            console.log(document.getElementsByClassName('ecwid-btn--placeOrder').length);
            if(document.getElementsByClassName('ecwid-btn--placeOrder').length >=0){
            setTimeout(function(){
            document.getElementsByClassName('ecwid-btn--placeOrder')[0].click();
            },2000);
            }


      }

      if('ORDER_CONFIRMATION' == page.type) {

          if(getCookie("yeohShippingMethod")!='Dine-In'){
               setTimeout(function()
            {
            if(document.getElementsByClassName('ecwid-Invoice-share-textPanel').length > 0){
                document.getElementsByClassName('ecwid-Invoice-share-textPanel')[0].style.display='block';
            }
            if(document.getElementsByClassName('ecwid-Invoice-share-buttonPanel').length > 0){
               document.getElementsByClassName('ecwid-Invoice-share-buttonPanel')[0].style.display='block';
            }
            if(document.getElementsByClassName('ecwid-productBrowser-head-share-purchase').length > 0){
               document.getElementsByClassName('ecwid-productBrowser-head-share-purchase')[0].style.display='block';
            }
            if(document.getElementsByClassName('ecwid-Invoice-footer-orderConfirmation').length > 0){
               document.getElementsByClassName('ecwid-Invoice-footer-orderConfirmation')[0].style.display='block';
            }
             },2000);
          } else {



            setTimeout(function(){
                window.location='http://www.yeoh.in';
       },10000);

          }

     }

   }
);


Ecwid.OnPageLoad.add(function(page)
   {
      if('CHECKOUT_SHIPPING_ADDRESS' == page.type) {
      Ecwid.OnCartChanged.add(function(cart)
            {
               //  console.log(cart);
               if(cart && cart.shippingMethod) {
               document.cookie="yeohShippingMethod="+cart.shippingMethod;

                if(cart.shippingMethod=='Dine-In')
                  {
                  if(document.getElementsByClassName('ecwid-ProductBrowser-auth-logged').length > 0){
                     document.getElementsByClassName('ecwid-ProductBrowser-auth-logged')[0].style.display='none';
                     }

                  } else {
                     if(document.getElementsByClassName('ecwid-ProductBrowser-auth-logged').length > 0){
                     document.getElementsByClassName('ecwid-ProductBrowser-auth-logged')[0].style.display='block';
                     }
                  }
              }
            });

         //Hide shipping form if pickup shipping is selected
         /*Ecwid.OnCartChanged.add(function(cart)
            {
               //  console.log(cart);
               if(cart && cart.shippingMethod) {
                  //alert(getCookie("instore-shipping-title"));
                  if(cart.shippingMethod=='In My Car')
                  {
                     //processInMyCar();
                  } else if(cart.shippingMethod=='Take Away') {
                     //processTakeAway();
                  } else if(cart.shippingMethod=='Dine-In') {
                     processInStoreCheckout();
                  } else if(cart.shippingMethod=='At Home Or Office') {
                     //processHomeOrOffice();
                  } else {
                     //processInMyCar();
                  }
               }
            }
         );*/

      }

	  if('CHECKOUT_PAYMENT_DETAILS' == page.type) {

		   Ecwid.OnCartChanged.add(function(cart)
            {


		   if(cart && cart.shippingMethod) {
                  if(cart.shippingMethod=='Dine-In'){
					 setTimeout(function(){
			if(document.getElementsByName("email").length > 0){
			   document.getElementsByName("email")[0].disabled = true;
               document.getElementsByName('email')[0].value='instore@yeoh.in';
			   document.getElementsByClassName('ecwid-btn--continue')[0].click();
              }
            }, 1000);
           } else {
			setTimeout(function(){
			  	if(document.getElementsByName("email").length > 0){
                 document.getElementsByName("email")[0].disabled = false;
                 if(document.getElementsByName('email')[0].value=='instore@yeoh.in'){
			  document.getElementsByName('email')[0].value='';
              }
              }
            }, 1000);
            if(document.getElementsByClassName('ecwid-productBrowser-CheckoutPaymentDetailsPage').length > 0){
			    document.getElementsByClassName('ecwid-productBrowser-CheckoutPaymentDetailsPage')[0].style.display='block';
            }

		   }
	      }
	    });
	  }


      if('CHECKOUT_PLACE_ORDER' == page.type) {

             if(document.getElementsByClassName('ecwid-btn--placeOrder').length >= 0){
               setTimeout(function(){
               console.log("order Success");
               document.getElementsByClassName('ecwid-btn--placeOrder')[0].click();
               },1000);
            }


      }

      if('ORDER_CONFIRMATION' == page.type) {

          if(getCookie("yeohShippingMethod")!='Dine-In'){

          jQuery(document).ready(function(){
             jQuery('#proceed-counter').remove();
          });

                if(document.getElementsByClassName('ecwid-Invoice-share-textPanel').length > 0){
                document.getElementsByClassName('ecwid-Invoice-share-textPanel')[0].style.display='block';
            }
            if(document.getElementsByClassName('ecwid-Invoice-share-buttonPanel').length > 0){
               document.getElementsByClassName('ecwid-Invoice-share-buttonPanel')[0].style.display='block';
            }
            if(document.getElementsByClassName('ecwid-productBrowser-head-share-purchase').length > 0){
               document.getElementsByClassName('ecwid-productBrowser-head-share-purchase')[0].style.display='block';
            }
            if(document.getElementsByClassName('ecwid-Invoice-footer-orderConfirmation').length > 0){
               document.getElementsByClassName('ecwid-Invoice-footer-orderConfirmation')[0].style.display='block';
            }

                if(document.getElementsByClassName('ecwid-ProductBrowser-auth-logged').length > 0){
                     document.getElementsByClassName('ecwid-ProductBrowser-auth-logged')[0].style.display='block';
                     }


          } else {

             if(document.getElementsByClassName('ecwid-ProductBrowser-auth-logged').length > 0){
                     document.getElementsByClassName('ecwid-ProductBrowser-auth-logged')[0].style.display='none';
                     }


           jQuery(document).ready(function(){
             console.log("order Success");
            setTimeout(function(){
            if(jQuery('#proceed-counter').length < 1){
            jQuery('.ecwid-Invoice-buttons-panel').prepend('<p id="proceed-counter">Please note your order number and proceed to counter for payment.</p>');
            }
            },1000);

           });
             setTimeout(function(){
                window.location='http://www.yeoh.in/pizza';
       },30000);
          }



     }


   }
);

Ecwid.OnAPILoaded.add(function() {
  Ecwid.setSignInProvider({
    signOut: function () {

      window.location='http://www.yeoh.in/pizza';
    }
  });
});


jQuery(document).ready(function()
   {

      jQuery('body').on('change', '#city-dropdown', function()
         {
            jQuery('.ecwid-AddressForm-city').val(jQuery(this).val());
         }
      );

      jQuery('body').on('change', '#outlet-dropdown', function()
         {
            jQuery('.ecwid-AddressForm-address1').val(jQuery(this).val());
         }
      );



      processInMyCar = function() {
          var instoreUserCity = '.';
         var instoreUserCountry = 'IN';
         var instoreUserState = 'MH';
         var instoreUserZip = '.';
         var instorePhone = '9999999999';
         fields = {
            //  'address1': 'address1',
         'address2': '.',
            //    'city': instoreUserCity,
         'country': instoreUserCountry,
         'state': instoreUserState,
         'zip': instoreUserZip,
         //'phone': instorePhone
         };

         fields1 = {
         'address1': '.',
         'city': instoreUserCity,
         'phone': instorePhone
         };
         // fill in the fields above


               for (var i in fields) {
                  jQuery('.ecwid-AddressForm-' + i)
                  .parents('.ecwid-fieldWrapper').hide();
               }

               for (var i1 in fields1) {
                  jQuery('.ecwid-AddressForm-' + i1)
                  .parents('.ecwid-fieldWrapper').show();
               }



               // if(jQuery('.ecwid-AddressForm-address1').val()=="") {
               jQuery('#outlet-dropdown').hide();
               jQuery('.ecwid-AddressForm-address1').val('').show();
               jQuery('.ecwid-AddressForm-address1').parents('.ecwid-fieldWrapper').find('.ecwid-fieldLabel').html('Car Number');
               jQuery('.ecwid-AddressForm-address1').parents('.ecwid-fieldWrapper').find('.ecwid-note').hide();
               // }

               //if(jQuery('.ecwid-AddressForm-city').val()=="") {
               //  jQuery('.ecwid-AddressForm-city').val(instoreUserCity);
               if(jQuery('#city-dropdown').length < 1) {
                  jQuery('<select id="city-dropdown" name="city-dropdown" class="city-dropdown">' +
                     '<option></option>' +
                     '<option>Orange County Indirapuram</option>' +
                     '</select>').insertAfter('.ecwid-AddressForm-city');
               } else {
                  jQuery('#city-dropdown').remove();
                   jQuery('<select id="city-dropdown" name="city-dropdown" class="city-dropdown">' +
                     '<option></option>' +
                     '<option>Orange County Indirapuram</option>' +
                     '</select>').insertAfter('.ecwid-AddressForm-city');

               }
               jQuery('#city-dropdown').show().trigger('change');


               jQuery('.ecwid-AddressForm-city').hide();
               jQuery('.ecwid-AddressForm-city').parents('.ecwid-fieldWrapper').find('.ecwid-fieldLabel').html('Outlet Location');
               // }

               jQuery('#select-Country-Box').val(instoreUserCountry).change(function()
                  {
                     if(jQuery('#select-State-Box option:selected').val()=="") {
                        jQuery('#select-State-Box').val(instoreUserState).change();
                     }
                  }
               );

               jQuery('.ecwid-AddressForm-phone').parents('.ecwid-fieldWrapper').find('.ecwid-fieldLabel').html('Mobile');

               ///if(jQuery('.ecwid-AddressForm-phone').val()=='') {
                  jQuery('.ecwid-AddressForm-phone').val('');
               //}


               if(jQuery('.ecwid-AddressForm-zip').val()=="") {
                  jQuery('.ecwid-AddressForm-zip').val(instoreUserZip);
               }

               if(jQuery('input[name="state-suggest"]').val()=="") {
                  jQuery('input[name="state-suggest"]').val(instoreUserState);
               }

               jQuery('#select-Country-Box').trigger('change');

               if(jQuery('#custom-outlet-message').length < 1) {
                  jQuery('<p id="custom-outlet-message">Please come in front of our Outlet in next 15 Minutes, we will deliver in your car.</p>').insertAfter('.ecwid-AddressForm-fields');
               }


      }

      processTakeAway = function() {
         var instoreUserCity = '.';
         var instoreUserCountry = 'IN';
         var instoreUserState = 'MH';
         var instoreUserZip = '.';
         var instorePhone = '9999999999';
         fields = {
         'address1': '.',
         'address2': '.',
       // 'city': instoreUserCity,
         'country': instoreUserCountry,
         'state': instoreUserState,
         'zip': instoreUserZip,
        // 'phone': instorePhone
         };
         // fill in the fields above

         fields1 = {
         'city': instoreUserCity,
         'phone': instorePhone
         }
         jQuery(document).ready(function()
            {
               for (var i in fields) {
                  jQuery('.ecwid-AddressForm-' + i)
                  .parents('.ecwid-fieldWrapper').hide();
               }

               for (var i1 in fields1) {
                  jQuery('.ecwid-AddressForm-' + i1)
                  .parents('.ecwid-fieldWrapper').show();
               }




              jQuery('.ecwid-AddressForm-address1').val('.');

              if(jQuery('#city-dropdown').length < 1) {
                  jQuery('<select id="city-dropdown" name="city-dropdown" class="city-dropdown">' +
                     '<option></option>' +
                     '<option>Orange County Indirapuram</option>' +
                     '</select>').insertAfter('.ecwid-AddressForm-city');
               } else {
                  jQuery('#city-dropdown').remove();
                   jQuery('<select id="city-dropdown" name="city-dropdown" class="city-dropdown">' +
                     '<option></option>' +
                     '<option>Orange County Indirapuram</option>' +
                     '</select>').insertAfter('.ecwid-AddressForm-city');

               }
               jQuery('#city-dropdown').show().trigger('change');


               jQuery('.ecwid-AddressForm-city').hide();
               jQuery('.ecwid-AddressForm-city').parents('.ecwid-fieldWrapper').find('.ecwid-fieldLabel').html('Outlet Location');



              // if(jQuery('.ecwid-AddressForm-phone').val()=='') {
                  jQuery('.ecwid-AddressForm-phone').val('');
              // }

               //if(jQuery('.ecwid-AddressForm-zip').val()=='') {
                  jQuery('.ecwid-AddressForm-zip').val('');
               //}

               if(jQuery('#custom-outlet-message').length > 0) {
                  jQuery('#custom-outlet-message').remove();
               }

               jQuery('input[name="state-suggest"]').val('');
               jQuery('#select-Country-Box').trigger('change');

               if(jQuery('#custom-outlet-message').length < 1) {
                  jQuery('<p id="custom-outlet-message"> Please collect from our Outlet in next 15 minutes.</p>').insertAfter('.ecwid-AddressForm-fields');
               }

            }
         );
      }

      processInStore = function() {
          var instoreUserCity = '.';
         var instoreUserCountry = 'IN';
         var instoreUserState = 'MH';
         var instoreUserZip = '.';
         var instorePhone = '9999999999';
         fields = {
         'address1': '.',
         'address2': '.',
         'city': instoreUserCity,
         'country': instoreUserCountry,
         'state': instoreUserState,
         'zip': instoreUserZip
        // 'phone': instorePhone
         };


         // fill in the fields above



               for (var i in fields) {
                  jQuery('.ecwid-AddressForm-' + i)
                  .parents('.ecwid-fieldWrapper').hide();
               }
                jQuery('.ecwid-AddressForm-name').val('');

               jQuery('.ecwid-AddressForm-address1').val('.');


               if(jQuery('.ecwid-AddressForm-city').val()=='') {
                  //                  jQuery('.ecwid-AddressForm-city').show();
                  //                jQuery('#city-dropdown').hide();
                  jQuery('.ecwid-AddressForm-city').val(instoreUserCity);
                  //              jQuery('.ecwid-AddressForm-city').parents('.ecwid-fieldWrapper').find('.ecwid-fieldLabel').html('City');
               }

               //if(jQuery('.ecwid-AddressForm-phone').val()=='') {
                  jQuery('.ecwid-AddressForm-phone').val(instorePhone);
               //}

               if(jQuery('.ecwid-AddressForm-zip').val()=='') {
                  jQuery('.ecwid-AddressForm-zip').val(instoreUserZip);
               }

               if(jQuery('#custom-outlet-message').length > 0) {
                  jQuery('#custom-outlet-message').remove();
               }

               jQuery('input[name="state-suggest"]').val('');
               jQuery('#select-Country-Box').trigger('change');

      }

      processHomeOrOffice = function() {

         var instoreUserCity = '.';
         var instoreUserCountry = 'IN';
         var instoreUserState = 'MH';
         var instoreUserZip = '.';
         var instorePhone = '9999999999';
         fields = {
            // 'address1': 'address1',
         'address2': 'address2',
         //'city': instoreUserCity,
         'country': instoreUserCountry,
         'state': instoreUserState,
         'zip': instoreUserZip,
        // 'phone': instorePhone
         };

         fields1 = {
             'address1': 'address1',
         'city': instoreUserCity,
         'phone': instorePhone
         };
         // fill in the fields above



               for (var i in fields) {
                  jQuery('.ecwid-AddressForm-' + i).parents('.ecwid-fieldWrapper').hide();
               }

               for (var i1 in fields1) {
                  jQuery('.ecwid-AddressForm-' + i1).parents('.ecwid-fieldWrapper').show();
               }



               jQuery('.ecwid-AddressForm-address1').val('');
               jQuery('.ecwid-AddressForm-address1').parents('.ecwid-fieldWrapper').find('.ecwid-fieldLabel').html('Address 1');

               if(jQuery('#city-dropdown').length < 1) {
                  jQuery('<select id="city-dropdown" name="city-dropdown" class="city-dropdown">' +
                     '<option></option>' +
                     '<option>Noida 62</option>' +
                     '<option>Noida 63</option>' +
                     '<option>Indirapuram</option>' +
                     '<option>Vaishali</option>' +
                     '</select>').insertAfter('.ecwid-AddressForm-city');
               } else {
               jQuery('#city-dropdown').remove();
               jQuery('<select id="city-dropdown" name="city-dropdown" class="city-dropdown">' +
                     '<option></option>' +
                     '<option>Noida 62</option>' +
                     '<option>Noida 63</option>' +
                     '<option>Indirapuram</option>' +
                     '<option>Vaishali</option>' +
                     '</select>').insertAfter('.ecwid-AddressForm-city');

               }
               jQuery('#city-dropdown').show().trigger('change');


               jQuery('.ecwid-AddressForm-city').hide();
               jQuery('.ecwid-AddressForm-city').parents('.ecwid-fieldWrapper').find('.ecwid-fieldLabel').html('Location');

              // if(jQuery('.ecwid-AddressForm-phone').val()==instorePhone) {
                  jQuery('.ecwid-AddressForm-phone').val('');
              // }

               if(jQuery('.ecwid-AddressForm-zip').val()=='') {
                  jQuery('.ecwid-AddressForm-zip').val(instoreUserZip);
               }

               if(jQuery('#custom-outlet-message').length > 0) {
                  jQuery('#custom-outlet-message').remove();
               }

               jQuery('input[name="state-suggest"]').val('');
               jQuery('#select-Country-Box').trigger('change');


      }

   }
);
