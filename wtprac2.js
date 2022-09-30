function validation(){
    var fname = document.getElementById("fname").value;
    var lname = document.getElementById("lname").value;
    var mail = document.getElementById("mail").value;
    var pass = document.getElementById("pass").value;
    var cpass = document.getElementById("cpass").value;
    let regex = new RegExp('[a-z0-9]+@[a-z]+\.[a-z]{2,3}');
    let regex2 = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{5,})");
    
    if(fname.length!=0 && lname.length!=0){
        document.getElementById("fname").style.borderColor= "rgb(9, 255, 0)";
        document.getElementById("lname").style.borderColor= "rgb(9, 255, 0)";
        if(mail!=0){
            if(regex.test(mail)){
                document.getElementById("mail").style.borderColor= "rgb(9, 255, 0)";
                if(pass!=0){
                    if(cpass!=0){
                        if(pass==cpass){
                            if(pass.length>5){
                                if(regex2.test(pass)){
                                    document.getElementById("pass").style.borderColor= "rgb(9, 255, 0)";
                                    document.getElementById("cpass").style.borderColor= "rgb(9, 255, 0)";
                                    alert("Submitted");
                                }
                                else{
                                    alert("Password must contain at least 1 lowercase alphabetical character, at least 1 uppercase alphabetical character, at least 1 numeric character and contain at least one special character.");
                                    document.getElementById("cpass").style.borderColor= "rgb(255, 0, 0)";
                                    document.getElementById("pass").style.borderColor= "rgb(255, 0, 0)";
                                }
                            }
                            else{
                                alert("Password is less Then 5 Words");
                                document.getElementById("cpass").style.borderColor= "rgb(255, 0, 0)";
                                document.getElementById("pass").style.borderColor= "rgb(255, 0, 0)";
                            }
                        }
                        else{
                            alert("Password and Confirm PassWord do not Match");
                            document.getElementById("cpass").style.borderColor= "rgb(255, 0, 0)";
                            document.getElementById("pass").style.borderColor= "rgb(255, 0, 0)";

                        }
                    }
                    else{
                        document.getElementById("cpass").style.borderColor= "rgb(255, 0, 0)";
                    }
                }
                else{
                    document.getElementById("pass").style.borderColor= "rgb(255, 0, 0)";
                }
            }
            else{
                alert("Please Enter Valid Email");
                document.getElementById("mail").style.borderColor= "rgb(255, 0, 0)";
            }
        }
        else{
            document.getElementById("mail").style.borderColor= "rgb(255, 0, 0)";
        }
    }
    else{
    document.getElementById("fname").style.borderColor= "rgb(255, 0, 0)";
    document.getElementById("lname").style.borderColor= "rgb(255, 0, 0)";
    }
}

function validation2(){
    var mail = document.getElementById("mail").value;
    var pass = document.getElementById("pass").value;
    let regex = new RegExp('[a-z0-9]+@[a-z]+\.[a-z]{2,3}');
    let regex2 = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{5,})");
    
        if(mail!=0){
            if(regex.test(mail)){
                document.getElementById("mail").style.borderColor= "rgb(9, 255, 0)";
                if(pass!=0){
                    if(pass.length>5){
                        if(regex2.test(pass)){
                            document.getElementById("pass").style.borderColor= "rgb(9, 255, 0)";
                            alert("Submitted");
                        }
                        else{
                            alert("Password must contain at least 1 lowercase alphabetical character, at least 1 uppercase alphabetical character, at least 1 numeric character and contain at least one special character.");
                            document.getElementById("pass").style.borderColor= "rgb(255, 0, 0)";
                        }
                    }
                    else{
                        alert("Password is less Then 5 Words");
                        document.getElementById("pass").style.borderColor= "rgb(255, 0, 0)";
                    }   
                }
                else{
                    document.getElementById("pass").style.borderColor= "rgb(255, 0, 0)";
                }
            }
            else{
                alert("Please Enter Valid Email");
                document.getElementById("mail").style.borderColor= "rgb(255, 0, 0)";
            }
        }
        else{
            document.getElementById("mail").style.borderColor= "rgb(255, 0, 0)";
        }
}