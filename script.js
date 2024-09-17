//your JS code here. If required.

let circ=document.querySelectorAll(".circle")
let prev=document.querySelector("#prev");
let next=document.querySelector("#next");
let line=document.querySelectorAll(".line")
prev.disabled=true
let i=0,j=0;


 circ[i].classList.add("active");
next.addEventListener("click",gonext)
prev.addEventListener("click",goprev)

function gonext(e){
	
 	i++
	circ[i].classList.add("active");
	line[j].classList.add("change");
	if(i>0){
		prev.disabled=false
	}
	
	if(i==4){
		
		next.disabled=true
	}
	j++
	
}
function goprev(e) {
	j--;
	
	circ[i].classList.remove("active");
	line[j].classList.remove("change");
	
	i--;
	
	if(i<4){
		next.disabled=false
	}
	//if(i==1){
	if(i==0){
		prev.disabled=true
	}
	
	
}
