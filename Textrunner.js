/* DESIGN:
TO DO incriment text spaces while 
user presses N (NEW)
BackSpace when USER presses B
*/
class Textfield {
  constructor(i) {
    this.i = i.toString();
  }
  addtxtbox() {
	 var x = document.createElement("INPUT");
	 x.setAttribute("type", "text");
	 x.setAttribute("id", "Sequence_NUM_"+this.i);
	 document.body.appendChild(x); 
  } deltxtbox() {
	let node = document.getElementById("Sequence_NUM_"+(this.i-1));
	if (node.parentNode) {
		node.parentNode.removeChild(node);
	}
  } value() {
	  return document.getElementById("Sequence_NUM_"+this.i.toString).value;
  }
  
}

this.addEventListener('keydown', event => {
  const Nodes = document.querySelectorAll("input");
  var txt = new Textfield(Nodes.length);
  if (event.isComposing || event.keyCode === 229) {
    return;
  }
  
  if (event.keyCode == 78) {//n
	 txt.addtxtbox();
  } else if (event.keyCode == 66) {//b
	 try {
		 txt.deltxtbox();
	 } catch(e) {
		 alert("you must have at least one textbox before you delete one");
	 }	 
  }
})