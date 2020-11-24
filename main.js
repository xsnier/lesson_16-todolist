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

		checkBox.addEventListener('click', () => this.done(input));

		removeButton.addEventListener('click', () => this.remove(itemBox));

	}
	
	done(input) {
		input.classList.toggle('done');
	}

	remove(item) {
		container.removeChild(item);
	}
}

function check() {
	if(input.value != "") {
		new Item(input.value);
		input.value = "";
	}
}

addButton.addEventListener('click', check);

window.addEventListener('keydown', (e) => {
	if(e.which == 13) {
		check();
	}
})

