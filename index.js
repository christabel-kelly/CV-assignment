function validate(){
     var f_name = document.form.f_name;
     var m_name = document.form.m_name;
     var l_name = document.form.l_name;
     var nametext= f_name.value + " " + m_name.value +" " + l_name.value;
     var gender = document.form.gender;
     var phone = document.form.phone;
     var email = document.form.email;
     var address = document.form.address;

     if (f_name.value != "" && l_name.value != "" && gender.value != "" && phone.value!= "" && email.value != "" && address.value != "") {

        //validate names
        //validate email
        //validate phone number
        
        var data = "You've entered the following details: \n " + "\n" +
        "Full Name: " +  nametext + "\n" +
        "Gender: " + gender.options[gender.selectedIndex].text + "\n" +
        "Phnone Number : " + phone.value +"\n" +
        "Email: " + email.value + "\n" +
        "Address: " + address.value + "\n\n" +
        "Create CV with this information ? ";
        
        var retVal = confirm(data);
        if( retVal == true ) {
            localStorage.setItem("name", nametext);
            localStorage.setItem("gender", gender.options[gender.selectedIndex].text );
            localStorage.setItem("phone", phone.value);
            localStorage.setItem("email", email.value);
            localStorage.setItem("address", address.value);
        //  document.location.href="cv.html"
            return true;
        } else {
            return false;
        } 

     }  
     
     else{

        window.alert("Please fill all required fields"); 
        f_name.focus(); 
        l_name.focus();
        gender.focus(); 
        phone.focus(); 
        email.focus(); 
        address.focus();
     }

/*      if (f_name.value== "")                                  
     { 
         window.alert("Please enter your first name."); 
         f_name.focus(); 
         return false; 
     } 
     if (l_name.value== "")                                  
     { 
         window.alert("Please enter your last name."); 
         l_name.focus(); 
         return false; 
     } 
      if (gender.value== "")                                  
     { 
         window.alert("Please select your gender."); 
         gender.focus(); 
         return false; 
     } 
     if (phone.value== "")                                  
     { 
         window.alert("Please enter your phone number."); 
         phone.focus(); 
         return false; 
     } 
     if (email.value== "")                                  
     { 
         window.alert("Please enter your email."); 
         email.focus(); 
         return false; 
     } 
     if (address.value== "")                                  
     { 
         window.alert("Please enter your address."); 
         email.focus(); 
         return false; 
     }  */
   
  }
    
 
