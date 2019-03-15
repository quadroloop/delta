// delta.js

var socket = io();

function el(element){
	return document.getElementById(element);
}

function pre(datax){
   var p0 = datax.split("[").join("<span style='font-weight:700;color:blue'>[</span>");
   var p1 = p0.split("]").join("<span style='font-weight:700;color:blue'>]</span>");
   var p2 = p1.split(",").join("<span style='font-weight:700;' class='text-primary'>,</span>");
   var p3 = p2.split("{").join("<span style='font-weight:700;' class='text-success'>{</span>");
   var p4 = p3.split("}").join("<span style='font-weight:700;' class='text-success'>}</span>");


   return p4;
}

var parseCount = 1;

socket.on("parseData",(delta)=>{

el('delta').innerHTML += `
    <div class="border rounded p-3 mb-2 data-panel" id="d${parseCount}">
          <span><strong class="text-info">${parseCount}.)</strong>
           
             <strong class="text-warning">[${delta.origin}]</strong> -  <span class=" rounded p-2"/>
               ${pre(delta.data)}
           </span>
         </div>
`;

 el('cdata').href=`#d${parseCount}`;
 el('cdata').click();

parseCount++;

});

