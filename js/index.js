//Populate list of entries
const listEntries = document.querySelector('ul');

function getEntries(listEntries) {
	fetch('http://localhost:3000/entries')
	.then(res => res.json())
	.then(entries => {
		entries.map(entrie => {
			listEntries.insertAdjacentHTML('beforeend',`<li><a href="${entrie.id}">${entrie.date}</li>`);
		});
	});
}

getEntries(listEntries)