//Create a dynamic list
class RegisteredUser{
    fullname
    dob
    gender
    email
    phone
     
    constructor(fname,dob,gender,em,phone){
       this.fullname = fname
       this.dob = dob
       this.gender = gender
       this.email = em
       this.phone = phone
    }
 
    addtoList(){
     const div = document.createElement('div');
     div.id = "course_"+Math.floor(Math.random()*1000)
     div.class = "card"
     div.innerHTML = `<div class="card-header">
                         <h3>${this.fullname}</h3>
                      </div>
                         <div>
                            <div class="row">
                               <div class="col">
                                  <strong>Date of Birth:</strong>${this.dob} | <strong>Gender:</strong>${this.gender} | <strong>Email:</strong>${this.email} | <strong>Mobile Number:</strong>${this.phone}
                               </div>
                            </div>
                         </div>
                      `;
    document.querySelector('.userlist').appendChild(div);
 
    }
 }
 
 
 let form =document.getElementsByClassName("ex-form")[0];
 let valid = 1;
 form.addEventListener('submit',(event)=>{
      let fullname = document.getElementById('fullname').value;
 
      if(fullname == ''){
         document.getElementById('err').classList.remove('d-none');
         document.getElementById('err').innerText="Name field can't be left blank";
         valid = 0;
      }

      if(!/^[a-zA-Z ]+$/.test(fullname)){
        
         document.getElementById('err').classList.remove('d-none');
         document.getElementById('err').innerText="Invalid name format";
         valid = 0;
      }    

      let dob = document.getElementById('dob').value;

      if(dob == ''){
        document.getElementById('err').classList.remove('d-none');
        document.getElementById('err').innerText="Date of Birth field can't be left blank";
        valid = 0;
     }

      else if(/^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/.test(dob)){
        
        document.getElementById('err').classList.remove('d-none');
        document.getElementById('err').innerText="Invalid date of birth format";
        valid = 0;
     }    

     let radios =document.getElementsByName('gender');
      let gender =""; 
      for(let i=0;i<radios.length;i++){
          if(radios[i].checked){
             gender=radios[i].value;
          }
      }

      let email = document.getElementById('email').value;
 
      if(email == ''){
       document.getElementById('err').classList.remove('d-none');
       document.getElementById('err').innerText="Email field can't be left blank";
       valid = 0;
    }
      
      else if(!/^[a-zA-Z0-9.-_]+@[a-zA-Z0-9-]+.[a-zA-Z0-9]+[.a-zA-Z0-9]*$/.test(email)){
       document.getElementById('err').classList.remove('d-none');
       document.getElementById('err').innerText="Invalid email format";
       valid = 0;
      }

      let phone = document.getElementById('phone').value;
 
      if(phone == ''){
       document.getElementById('err').classList.remove('d-none');
       document.getElementById('err').innerText="Mobile number field can't be left blank";
       valid = 0;
    }
      
      else if(!/^[0-9]{10}$/.test(phone)){
       document.getElementById('err').classList.remove('d-none');
       document.getElementById('err').innerText="Invalid mobile number format";
       valid = 0;
      }
 
 
      
 
    //   let iagree ="";
      
    //   if(document.getElementById('agree').checked)
    //      iagree = document.getElementById('agree').value;
 
    if(valid == 1){
       const student = new RegisteredUser(fullname,dob,gender,email,phone);
       student.addtoList();
    }
 
    // else{
    //    document.getElementById('err').classList.remove('d-none');
    //      document.getElementById('err').innerHTML=error;
    // }
     
     event.preventDefault();
     //Prevent the normal charateristic of the event to happen; prevent is a generic event which looks for all the events happening
     //Through Ajax/Comment request data goes to the backend and gets submitted 
     //Calling an API is also an Ajax request
 })