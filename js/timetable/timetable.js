const selectValue = document.querySelector('.select')
const table = document.querySelectorAll('.timetable') 


selectValue.onchange = function() {
    let item = selectValue.value;
    for (let i = 0; i < table.length; i++) {
        table[i].classList.remove('active');
        if (table[i].id === item) {
            table[i].classList.add('active');
        }
    }
}
