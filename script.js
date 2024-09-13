//your JS code here. If required.
let circ=document.querySelectorAll(".circle")
let prev=document.querySelector("#prev");
let next=document.querySelector("#next");
let line=document.querySelectorAll(".line")
let i=1,j=0;
prev.disabled=true

 circ[0].classList.add("active");
next.addEventListener("click",gonext)
prev.addEventListener("click",goprev)

function gonext(e) {
	
	circ[i].classList.add("active");
	line[j].classList.add("change");
	j++
 	i++
	if(i==5){
		prev.disabled=false
		next.disabled=true
	}
}
function goprev(e) {
	circ[i-1].classList.remove("active");
	line[j-1].classList.remove("change");
	j--;
	i--;
	if(i<5){
		next.disabled=false
	}
	if(i==1){
		prev.disabled=true
	}
	
}
