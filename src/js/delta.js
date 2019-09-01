// delta.js

var socket = io();

function el(element){
	return document.getElementById(element);
}

socket.on('delta',(data)=>{
  if(Object.keys(data).length !==0){
        let datax = data.data
      try {
         var hexDelta = JSON.parse(datax);

         el('state').className = "text-success"
        el('state').innerHTML = "Active";

        let parsedData = '';

        let panelCount = 1;

        hexDelta.forEach(item=>{
           let datalist = ''
           let dataobj = Object.keys(item);

           dataobj.forEach(dataz=>{
            datalist += `<li><strong><span class="text-info">${dataz}</span> : <span class="text-warning">${item[dataz]}</span></strong></li>`; 
           })

           parsedData += `
             <div class="col-md-3 data-card m-2 p-3">
          <p>Data Panel: ${panelCount}</p>
            ${datalist}
      </div>
           `
           panelCount++;
        })


         el('delta').innerHTML = parsedData;

      }

      catch(error){
        console.log(error)
        console.log("wrong dataset!");
        el('state').className = "text-danger"
        el('state').innerHTML = "Broken";
      }
  }
})

