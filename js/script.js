var user = [
    {
        name: 'Alice',
        gender: 'F',
        hobby: 'movies',
        avatar: 'avatar2.jpg'
    },
    {
        name: 'Melih',
        gender: 'M',
        hobby: 'coding',
        avatar: 'photo.jpg'
    },
    {
        name: 'Camsy',
        gender: 'F',
        hobby: 'make-up',
        avatar: 'images.jpg'
    },
    {
        name: 'Samuel',
        gender: 'M',
        hobby: 'walking',
        avatar: 'index.jpg'
    }
];

window.addEventListener('load', function() {
    var result = this.document.getElementById('result');
    function search() {
        //get hobby
        var hobbyField = document.getElementById('hobby');
        var hobby = hobbyField.value;
        //get gender
        var genderField = document.getElementById('gender');
        var s = genderField.selectedIndex;
        var gender = genderField.options[s].value;
        var resultHtml = '';
        var userLength = user.length;
        for (var i=0; i<userLength; i++) {
            //check gender
            if(gender == 'A' || gender == user[i].gender) {
                //check hobby
                if(hobby == '' || hobby == user[i].hobby) {
                    resultHtml += '<div class="person-row">\
                            <img src="images/' + user[i].avatar + '"/>\
                            <div class="person-info">\
                            <div>' + user[i].name + '</div>\
                            <div>' + user[i].hobby + '</div></div>\
                            <button>Add as a friend</button></div>';
                }
            }
        }
        result.innerHTML = resultHtml;
    }
    var searchBtn = document.getElementById('searchBtn');
    searchBtn.addEventListener('click', search);
});