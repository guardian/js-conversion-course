document.querySelectorAll('#modifiers .item').forEach(e => e.style.backgroundColor = 'hotpink');

var created = document.createElement('li');

created.classList.add('item');
created.innerHTML = 'document.createElement';
document.getElementById('modifiers').appendChild(created);

var languages = document.querySelectorAll('#language option');

languages.forEach(language => {
    if (language.value === 'javascript') {
        language.selected = true;
    }
});

var checkbox = document.createElement('input');

checkbox.setAttribute('type', 'checkbox');
checkbox.checked = true;

created.prepend(checkbox);

var classlistItems = document.querySelectorAll('#classlist .item');

classlistItems.forEach(item => {
    item.classList.add('classlist-item');
});

classlistItems[0].classList.remove('classlist-item');

classlistItems.forEach(item => {
    item.classList.toggle('classlist-item');
});

classlistItems.forEach(item => {
    if (item.classList.contains('classlist-item')) {
        item.style.fontWeight = 'bold';
    }
});

var options = {
    method: 'GET'
};

fetch('data.json', options)
    .then(resp => {
        return resp.json();
    })
    .then(body => {
        document.getElementById('year').value = body.year;

        var select = document.getElementById('country');

        body.countries.forEach(country => {
            var option = document.createElement('option');

            option.value = country;
            option.innerHTML = country;
            select.appendChild(option);
        });
    });
