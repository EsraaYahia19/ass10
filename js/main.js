var bookname = document.getElementById("sitename")
var bookurl = document.getElementById("site")
var bookmarks = []
if (localStorage.getItem("dataaaaa")) {
    var bookmarks = JSON.parse(localStorage.getItem("dataaaaa"))
    displayData()

}


function submit() {
//     var fccUrl= new URL(bookurl.value)  ;
// if ( new URL(bookurl.value) && bookname.value.length >= 3) {
    var book = {
        Bookname: bookname.value,
        Bookurl: bookurl.value
    }
    bookmarks.push(book)
    localStorage.setItem("dataaaaa", JSON.stringify(bookmarks))
    displayData()

  
// }else{
// document.getElementById("novalid").innerHTML=``

// }

}

function displayData() {
    var data = "";
    for (var i = 0; i < bookmarks.length; i++) {
        data += ` <tr>
        <td>`+ (i + 1) + `</td>
        <td>`+ bookmarks[i].Bookname + `</td>
        <td><a href="`+ bookmarks[i].Bookurl + `" target=_blank  class="text-decoration-none"> <button class="btn btn-visit" type="button"><i class="fa-solid fa-eye pe-2"></i> Visit</button></td></a>
        <td><button class="btn btn-delete" type="button"onclick="deletebook(`+ i + `)">  <i class="fa-solid fa-trash pe-2"></i>Delete</button></td>
      
    </tr>`
    }
    document.getElementById("tabledata").innerHTML = data
}

function deletebook(index) {
    bookmarks.splice(index, 1)
    localStorage.setItem("dataaaaa", JSON.stringify(bookmarks))
    displayData()

}




// function validinput1() {
//     var input1 = bookname.value
// if (input1.length >= 3) {
//     document.getElementById("input1v").innerHTML=` <label for="sitename" class="form-label"><i class="fa-solid fa-book-bookmark pe-2"></i> Site Name</label>
//     <input type="text" name="bookname" id="sitename" class="form-control is-valid" placeholder="Bookmark Name"/>`
    
// }else{
//     document.getElementById("input1v").innerHTML=` <label for="sitename" class="form-label"><i class="fa-solid fa-book-bookmark pe-2"></i> Site Name</label>
//     <input type="text" name="bookname" id="sitename" class="form-control is-invalid" placeholder="Bookmark Name"/>`
// }

// }

