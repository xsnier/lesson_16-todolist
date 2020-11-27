const addButton = document.querySelector('.addButton');
let input = document.querySelector('.input');
const container = document.querySelector('.container');

class Item {
	constructor(itemName) {
		this.createDiv(itemName);
	}

	createDiv(itemName) {
		let input = document.createElement('input');
		input.value = itemName;
		input.disabled = true;
		input.classList.add('item_input');
		input.type = 'text';

		let itemBox = document.createElement('div');
		itemBox.classList.add('item');
		
		let checkBox = document.createElement('input');
		checkBox.type = 'checkbox';
		checkBox.checked = false;

		let removeButton = document.createElement('button');
		removeButton.innerHTML = 'REMOVE';
		removeButton.classList.add('removeButton');

		container.appendChild(itemBox);

		itemBox.appendChild(input);
		itemBox.appendChild(checkBox);
		itemBox.appendChild(removeButton);
	}
}
	
class ToDoState {
	constructor(state) {
		this.state = state;
	}
	
	addToDo () {
		if(input.value != "") {
			new Item(input.value);
			input.value = ""; 
		}
	};

	removeToDo () {
		if (event.target.classList == 'removeButton') {		
			let removeBtn = event.target;
			let removeTask = removeBtn.closest('div');
			removeTask.remove();
		}
	};

	toggleToDo () {
		if (event.target.type == 'checkbox') {
			let checkbox = event.target;
			let doneTask = checkbox.closest('div').firstChild;
			doneTask.classList.toggle('done');
		};
	};

	editTaskToDo () {
		if (event.target.type == 'text') {
			let input = event.target;
			
			if (input.disabled == true) {
				input.disabled = !input.disabled;
			}
		}
	}
};

const listState = new ToDoState('workOn');

addButton.addEventListener('click', listState.addToDo);
container.addEventListener('click', listState.removeToDo);
container.addEventListener('click', listState.toggleToDo);
container.addEventListener('click', listState.editTaskToDo);

window.addEventListener('keydown', (e) => {
	if(e.which == 13) {
		listState.addToDo();
	}
})