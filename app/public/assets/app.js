const {fetch,alert}=window
let information
document.addEventListener('DOMContentLoaded', function() {

  var elems = document.querySelectorAll('.modal');
  var instances = M.Modal.init(elems);
  
  var singleModalElem = document.querySelector('#modal1');
  var instance = M.Modal.getInstance(singleModalElem);
  const modalbtn = document.querySelector('#submit_button')
  modalbtn.addEventListener('click', () => {
    //call function that does the fetch for the data
    //then open the modal
    FetchData()
    instance.open();
    // Do other stuff
  })
});
document.addEventListener('DOMContentLoaded', function() {
    console.log('fired')
    var elems = document.querySelectorAll('select');
    console.log(elems)
   var options = document.querySelectorAll('select').options;

    var instances = M.Dropdown.init(elems,options);
  });
  

//fetch function
function FetchData(){
  let prom=new Promise((resolve,reject)=>
                {
                       information={name:document.querySelector("#yourName").value,
                       imageURL:document.querySelector("#yourImage").value,
                       q1:document.querySelectorAll('select')[0].selectedIndex,
                       q2:document.querySelectorAll('select')[1].selectedIndex,
                       q3:document.querySelectorAll('select')[2].selectedIndex,
                       q4:document.querySelectorAll('select')[3].selectedIndex,
                       q5:document.querySelectorAll('select')[4].selectedIndex,
                       q6:document.querySelectorAll('select')[5].selectedIndex,
                       q7:document.querySelectorAll('select')[6].selectedIndex,
                       q8:document.querySelectorAll('select')[7].selectedIndex,
                       q9:document.querySelectorAll('select')[8].selectedIndex,
                       q10:document.querySelectorAll('select')[9].selectedIndex}
                 fetch('/friend',{method:'POST',
                 headers:{'content-Type':'application/json'},
                body:JSON.stringify(information)})
                .then(r=>r.json())
                .then(data=>{
                  document.querySelector("#modal1").innerHTML=
                  `
                  <div class="modal-content">
                    <h4>${data.name}</h4>
                    <img src=${data.imageURL} alt="freindPicture">

                    </div>
                  <div class="modal-footer">
                    <a href="#!" class="modal-close waves-effect waves-green btn-flat">Agree</a>
                  </div>
                  `
                  resolve(data)
                }
                )
                .catch(e=>{
                  reject(e)
                })
        })
     
    return(prom)
  }
  //logic to grab dropdown answers
  //fetch request
  //add results modal by editing the html

