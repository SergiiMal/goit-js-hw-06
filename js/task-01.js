const quantiOfCategories = document.querySelectorAll('li.item');
console.log(`Number of categories: ${quantiOfCategories.length}`);



const categories = quantiOfCategories.forEach(category => {
	console.log(`Category: ${category.querySelector("h2").textContent}`);
	console.log(`Elements:${category.querySelectorAll("h2 + ul > li").length}`)
});
