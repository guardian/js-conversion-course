/*********************
 * Exercise 2
 *********************/

/* Question 1 */
var created = document.createElement('li');

created.classList.add('item');
created.innerHTML = 'document.createElement';
document.getElementById('modifiers').appendChild(created);

/* Question 2 */
document.querySelectorAll('#modifiers .item').forEach(e => e.style.backgroundColor = 'hotpink');

/* Question 3 */
var checkbox = document.createElement('input');

checkbox.setAttribute('type', 'checkbox');
checkbox.checked = true;

created.prepend(checkbox);

/* Question 4 */
var languages = document.querySelectorAll('#language option');

languages.forEach(language => {
    if (language.value === 'javascript') {
        language.selected = true;
    }
});

/*********************
 * Exercise 3
 *********************/

/* Question 1 */
var classlistItems = document.querySelectorAll('#classlist .item');

classlistItems.forEach(item => {
    item.classList.add('classlist-item');
});

/* Question 2 */
classlistItems[0].classList.remove('classlist-item');

/* Question 3 */
classlistItems.forEach(item => {
    item.classList.toggle('classlist-item');
});

/* Question 4 */
classlistItems.forEach(item => {
    if (item.classList.contains('classlist-item')) {
        item.style.fontWeight = 'bold';
    }
});

/*********************
 * Exercise 4
 *********************/

var options = {
    method: 'GET'
};

fetch('data.json', options)
    .then(resp => resp.json())
    .then(body => {

        /* Question 1 */
        document.getElementById('year').value = body.year;

        /* Question 2 */
        var select = document.getElementById('country');

        body.countries.forEach(country => {
            var option = document.createElement('option');

            option.value = country;
            option.innerHTML = country;
            select.appendChild(option);
        });
    });
