const users = [
    {
      "id": "319054995",
      "username": "Yazan",
      "phone": "052-6464234",
      "address": "123 Main St, Anytown, AN 12345",
      "email": "yazan1999@example.com"
    },
    {
      "id": "2235537",
      "username": "Saed",
      "phone": "234-567-8901",
      "address": "234 Oak St, Othertown, OT 23456",
      "email": "user2@example.net"
    },
    {
      "id": "1679673",
      "username": "Alaa",
      "phone": "345-678-9012",
      "address": "345 Pine St, Sometown, ST 34567",
      "email": "Alaa21@example.org"
    },
    {
      "id": "346436",
      "username": "Bshara",
      "phone": "456-789-0123",
      "address": "456 Elm St, Newtown, NT 45678",
      "email": "user4@example.co"
    },
    {
      "id": "568569",
      "username": "Majd",
      "phone": "567-890-1234",
      "address": "567 Maple St, Yourtown, YT 56789",
      "email": "user5@example.io"
    }
  ];

  const list = document.querySelector( ".list" );

  // const newList = users.forEach( elem => {
  //   const item = document.createElement( 'li' );
  //   item.className = "item";
  //   item.innerHTML = `
  //             <span>${elem.username}</span>
  //             <button onclick="func(event)">Edit</button>
  //             `;
  //   list.append( item );
  // } );
  // function func ( event ) {
  //   const liParent = event.target.parentElement;
  //   console.log( liParent.querySelector( 'span' ).textContent );
  //   // event.target.parentElement.nodeName;
  // }





  // const newList = users.forEach( elem => {
  //   const item = document.createElement( 'li' );
  //   item.className = "item";
  //   item.innerHTML = `
  //             <span>${elem.username}</span>
  //             <button onclick="func(${elem.id})">Edit</button>
  //             `;
  //   list.append( item );
  // } );
  // function func ( indLi ) {
  //   // console.log( users[indLi].username );
  //   // console.log( users[indLi].phone );

  // }



  // function saveUserInfoAfterEdit(){
  //   const popuper = document.getElementById( 'myModal' );
  //   for(let t =0; t<list.length-1;t++){
  //   list[t].id=popuper.querySelector( "#inputUserId").value.trim();  
  //   list[t].username=popuper.querySelector( "#inputUserName" ).value.trim();
  //   list[t].phone=popuper.querySelector( "#inputUserPhone" ).value.trim();
  //   list[t].address=popuper.querySelector( "#inputUserAddress" ).value.trim() ;
  //   list[t].email=popuper.querySelector( "#inputUserEmail" ).value.trim();
  //     popuper.style.display='none';
  //     }

  //   }

    // console.log( users[indLi].username );
    // console.log( users[indLi].phone );
    // function saveUserInfoAfterEdit(){
    //   users[indLi].id=popup.querySelector( "#inputUserId").value;
    //   users[indLi].username=popup.querySelector( "#inputUserName" ).value;
    //   users[indLi].phone=popup.querySelector( "#inputUserPhone" ).value;
    //   users[indLi].address=popup.querySelector( "#inputUserAddress" ).value ;
    //   users[indLi].email=popup.querySelector( "#inputUserEmail" ).value;
    //   popup.style.display='none';

    // }

  

  function deleteTheList(){
    let newList = users.forEach( ( elem, ind ) => {
    const item = document.createElement( 'li' );
    item.className = "item";
    list.remove( item );
  } );
  }


  let newList = users.forEach( ( elem, ind ) => {
    const item = document.createElement( 'li' );
    item.className = "item";
    item.innerHTML = `
              <div class="name-person-div">${elem.username}</div>
              <div class="spaned_div">
              <button onclick="funcinfo(${ind})">Info</button>
              <button onclick="func(${ind})">Edit</button>
              <button onclick="funcdelete(${item})">Delete</button>
              </div>
              `;
    list.append( item );
  } );
  // function func ( indLi ) {
  //   const popup = document.getElementById( 'myModal' );
  //   // console.log( popup.getElementById( "inputUserName" ) );
  //   popup.style.display = 'flex';
  //   popup.querySelector( "#inputUserId").value = users[indLi].id;
  //   popup.querySelector( "#inputUserName" ).value = users[indLi].username;
  //   popup.querySelector( "#inputUserPhone" ).value = users[indLi].phone;
  //   popup.querySelector( "#inputUserAddress" ).value = users[indLi].address;
  //   popup.querySelector( "#inputUserEmail" ).value = users[indLi].email;
    
  //   // console.log( users[indLi].username );
  //   // console.log( users[indLi].phone );
  //   // function saveUserInfoAfterEdit(){
  //   //   users[indLi].id=popup.querySelector( "#inputUserId").value;
  //   //   users[indLi].username=popup.querySelector( "#inputUserName" ).value;
  //   //   users[indLi].phone=popup.querySelector( "#inputUserPhone" ).value;
  //   //   users[indLi].address=popup.querySelector( "#inputUserAddress" ).value ;
  //   //   users[indLi].email=popup.querySelector( "#inputUserEmail" ).value;
  //   //   popup.style.display='none';

  //   // }

  // }

  // function saveUserInfoAfterEdit(){
  //   const popuper = document.getElementById( 'myModal' );
  //   for(let t =0; t<users.length-1;t++){
  //   users[t].id=popuper.querySelector( "#inputUserId").value;
  //     users[t].username=popuper.querySelector( "#inputUserName" ).value;
  //     users[t].phone=popuper.querySelector( "#inputUserPhone" ).value;
  //     users[t].address=popuper.querySelector( "#inputUserAddress" ).value ;
  //     users[t].email=popuper.querySelector( "#inputUserEmail" ).value;
  //     popuper.style.display='none';
  //     }

  //   }





  
  const newList2=newList;
  newList2 = users.forEach( ( eleme , indLi) => {
    let main = document.createElement('div');
    main=document.getElementById('myModalinfo');
    main.className='modalinfo';
    // main.style.display='flex';

    main.innerHTML = `
              <button class="close-btn" id="closeinfoBtn" onclick="closeinfoModal(event)">&times;</button>
              <ul class="contact-info">
              <li class="modal-content-info" id="user-id">ID: ${users[indLi].id}</li>
              <li class="modal-content-info" id="name-id">UserName: ${users[indLi].username}</li>
              <li class="modal-content-info" id="phone-id">Phone: ${users[indLi].phone}</li>
              <li class="modal-content-info" id="address-id">Address: ${users[indLi].address}</li>
              <li class="modal-content-info" id="email-id">E-mail: ${users[indLi].email}</li>
              </ul>

              `;


  });
  
  function funcinfo (indLi){

    main=document.getElementById('myModalinfo');
    main.className='modalinfo';
    main.style.display='flex';

    main.querySelector("#user-id").innerHTML="ID: "+users[indLi].id;
    main.querySelector("#name-id").innerHTML="UserName: "+users[indLi].username;
    main.querySelector("#phone-id").innerHTML="Phone: "+users[indLi].phone;
    main.querySelector("#address-id").innerHTML="Address: "+users[indLi].address;
    main.querySelector("#email-id").innerHTML="E-mail: "+users[indLi].email;
  

  }


 function openAddModal(){

  let z = document.getElementById('add-modal');
  z.style.display='block';

  }
  function SavingContact(){

let newCo = document.getElementById('add-modal');
newCo.className='AddModal';
let idd = newCo.querySelector("#inputId").value;
let name = newCo.querySelector("#inputName").value;
let ph = newCo.querySelector("#inputPhone").value;
let address = newCo.querySelector("#inputAddress").value;
let mail = newCo.querySelector("#inputEmail").value;
let person ={"id":idd,
          "username":name,
          "phone":ph,
          "address":address,
          "email":mail
          };
users.push(person);
const ig = document.createElement('li');
// ig.innerHTML=users[users.length-1].username;
    ig.innerHTML = `
              <div class="name-person-div">${users[users.length-1].username}</div>
              <div class="spaned_div">
              <button onclick="funcinfo(${[users.length-1]})">Info</button>
              <button onclick="func(${[users.length-1]})">Edit</button>
              <button onclick="funcdelete(${[users.length-1]})">Delete</button>
              </div>
              `;
    list.append(ig);
//   // .forEach( ( person, ind ) => {
//   const item = document.createElement( 'li' );
//   item.className = "item";
//   item.innerHTML = `
//             <div class="name-person-div">${person.username.value}</div>
//             <div class="spaned_div">
//             <button onclick="funcinfo(${ind})">Info</button>
//             <button onclick="func(${ind})">Edit</button>
//             <button onclick="funcdelete(${ind})">Delete</button>
//             </div>
//             `;
//   list.append( item );
// // });
}

//   function SavingContact(){

//     let newCo = document.getElementById('add-modal');
//     newCo.className='AddModal';
//     let idd = newCo.querySelector("#inputId").value;
//     let name = newCo.querySelector("#inputName").value;
//     let ph = newCo.querySelector("#inputPhone").value;
//     let address = newCo.querySelector("#inputAddress").value;
//     let mail = newCo.querySelector("#inputEmail").value;
//     let person ={"id":"idd",
//                 "username":"name",
//                 "phone":"ph",
//                 "address":"address",
//                 "email":"mail"
//                 };
                
//     users.push(person);

    
    

//     newList = users;
//   //   // .forEach( ( person, ind ) => {
//   //   const item = document.createElement( 'li' );
//   //   item.className = "item";
//   //   item.innerHTML = `
//   //             <div class="name-person-div">${person.username.value}</div>
//   //             <div class="spaned_div">
//   //             <button onclick="funcinfo(${ind})">Info</button>
//   //             <button onclick="func(${ind})">Edit</button>
//   //             <button onclick="funcdelete(${ind})">Delete</button>
//   //             </div>
//   //             `;
//   //   list.append( item );
//   // // });
// }
  function closeAddModal(event){
    if ( event.target === document.getElementById( 'add-modal' ) || event.target === document.getElementById( 'closeAddBtn' ) ) {
      document.getElementById('add-modal').style.display = 'none';
    }
  }
  


  // function openModal () {
  //     document.getElementById( 'myModal' ).style.display = 'flex';
  //   }

  function func(indLi) {
    const popup = document.getElementById('myModal');
    
    // Display the modal
    popup.style.display = 'flex';
  
    // Fill modal fields with user data based on indLi index
    popup.querySelector("#inputUserId").value = users[indLi].id;
    popup.querySelector("#inputUserName").value = users[indLi].username;
    popup.querySelector("#inputUserPhone").value = users[indLi].phone;
    popup.querySelector("#inputUserAddress").value = users[indLi].address;
    popup.querySelector("#inputUserEmail").value = users[indLi].email;
  }

  function EditModal(event) {
    if (event.target === document.getElementById('myModal') || event.target === document.getElementById('closeModalBtn')) {
      const newInfo = document.getElementById('myModal');
  
      // Extract user input values
      let newId = newInfo.querySelector("#inputUserId").value;
      let newName = newInfo.querySelector("#inputUserName").value;
      let newPh = newInfo.querySelector("#inputUserPhone").value;
      let newAd = newInfo.querySelector("#inputUserAddress").value;
      let newMail = newInfo.querySelector("#inputUserEmail").value;
  
      // Create new user object
      let newInfoperson = {
        "id": newId,
        "username": newName,
        "phone": newPh,
        "address": newAd,
        "email": newMail
      };
  
      // Replace existing user data in users array
      users.push(newInfoperson);
  
      // Clear existing list content
      list.innerHTML = '';
  
      // Rebuild the list with updated user data
      for (let s = 0; s < users.length; s++) {
        const igN = document.createElement('li');
        igN.innerHTML = `
          <div class="name-person-div">${users[s].username}</div>
          <div class="spaned_div">
            <button onclick="funcinfo(${s})">Info</button>
            <button onclick="funcedit(${s})">Edit</button>
            <button onclick="funcdelete(${s})">Delete</button>
          </div>
        `;
        list.appendChild(igN);
      }
  
      // Hide the modal after updating
      document.getElementById('myModal').style.display = 'none';
    }
  }
  






//   function closeModal ( event ) {
//     if ( event.target === document.getElementById( 'myModal' ) || event.target === document.getElementById( 'closeModalBtn' ) ) {
//       const newInfo = document.getElementById( 'myModal' );
//       for(let s=0;s<users.length;s++){
// users.splice(s,s);
//         newInfo.className='myModal';
// let newId = newInfo.querySelector("#inputUserId").value;
// let newName = newInfo.querySelector("#inputUserName").value;
// let newPh = newInfo.querySelector("#inputUserPhone").value;
// let newAd = newInfo.querySelector("#inputUserAddress").value;
// let newMail = newInfo.querySelector("#inputUserEmail").value;
// let newInfoperson ={"id":newId,
//           "username":newName,
//           "phone":newPh,
//           "address":newAd,
//           "email":newMail
//           };
// users.push(newInfoperson);
// list.splice(s,s);
// const igN = document.createElement('li');

// // ig.innerHTML=users[users.length-1].username;
//     igN.innerHTML = `
//               <div class="name-person-div">${users[s].username}</div>
//               <div class="spaned_div">
//               <button onclick="funcinfo(${s})">Info</button>
//               <button onclick="func(${s})">Edit</button>
//               <button onclick="funcdelete(${s})">Delete</button>
//               </div>
//               `;
//     list.appendChild(igN);
       

//       }


//       document.getElementById( 'myModal' ).style.display = 'none';
//     }
//     // document.getElementById('myModal').style.display = 'none';
//   }

  
  
  function closeinfoModal ( event ) {
    if ( event.target === document.getElementById( 'myModalinfo' ) || event.target === document.getElementById( 'closeinfoBtn' ) ) {
      document.getElementById( 'myModalinfo' ).style.display = 'none';
      

    }

    // document.getElementById('myModal').style.display = 'none';
  }