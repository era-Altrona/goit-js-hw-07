const item = document.querySelectorAll('.item');

console.log(`Number of categories: ${item.length}`);
const titleList = document.querySelectorAll('ul#categories > li.item')
titleList.forEach((title) => {
   console.log('Category: ' + title.querySelector('h2').textContent);
    console.log('Elements:'+ title.querySelectorAll('li').length )
});
