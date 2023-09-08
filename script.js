// -------fetch method--------

//  const res = fetch("https://jsonplaceholder.typicode.com/users")
//    res.then((data)=>data.json()).then((data1)=>{
//     for(let i=0;i<data1.length;i++){
//        const div=document.createElement("div")
//        div.innerHTML=` <div class="card" style="width: 18rem;">
//        <div class="card-body">
//          <h6 class="card-title">Name : ${data1[i].name}</h6>
//          <p class="card-text">Email : ${data1[i].email}</p>
//          <p class="card-text">Street : ${data1[i].address.street}</p>
//          <p class="card-text">City : ${data1[i].address.city}</p>
//        </div>
//      </div>`
//      document.body.append(div);
//     }
//     })

// ---------async & await method--------

async function api() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  return await res.json();
}
api().then((data1) => {
  for (let i = 0; i < data1.length; i++) {
    const div = document.createElement("div");
    div.innerHTML = ` <div class="card" style="width: 18rem;">
    <div class="card-body">
      <h6 class="card-title">Name : ${data1[i].name}</h6>
      <p class="card-text">Email : ${data1[i].email}</p>
      <p class="card-text">Street : ${data1[i].address.street}</p>
      <p class="card-text">City : ${data1[i].address.city}</p> 
    </div>
  </div>`;
    document.body.append(div);
  }
});
