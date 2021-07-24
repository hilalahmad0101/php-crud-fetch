const model = document.getElementById("modal");
const updateModel = document.getElementById("updateModal");


// load data 

const loadData = () => {
    fetch(`php/fetch-data.php`)
        .then(response => response.json())
        .then((data) => {
            var tbody = document.getElementById("tbody");
            var notFound = document.getElementById("notFound");
            var tr = "";
            if (data["empty"] != "empty") {
                for (var i in data) {
                    tr += ` <tr>
                                <td>${ parseInt(i)+1 }</td>
                                <td>${data[i].username}</td>
                                <td>${data[i].age}</td>
                                <td>${data[i].city}</td>
                                <td><button  onclick=editData(${data[i].id})  class="btn btn-pirmary" >Edit</button></td>
                                <td><button onclick=deleteData(${data[i].id}) class="btn btn-danger" >Delete</button></td>
                            </tr>`;
                }
                tbody.innerHTML = tr;
            } else {
                tbody.innerHTML = "<h3 class='head'>Record Not Found</h3>"

            }

        })
        .catch((error) => {
            // alert("data are not fetch");
        })
}

loadData();


const load_count = () => {
    fetch(`php/total-count-data.php`)
        .then(response => response.json())
        .then((data) => {
            var count = document.getElementById("total-count");
            count.innerHTML = data;
        })
}
load_count();
// show model for save data
const show_model = () => {
    model.style.display = "flex";
}

// hide model 
const hide_model = () => {
    document.getElementById("modal").style.display = "none";
    document.getElementById("updateModal").style.display = "none";
}

// declare variable for save button
const saveButton = document.querySelector("#savebtn");
// save data
saveButton.addEventListener("click", (e) => {
    e.preventDefault();
    var username = document.getElementById("uname").value;
    var age = document.getElementById("age").value;
    var city = document.getElementById("city").value;
    if (username === "" || age === "" || city === "") {
        console.log("Please fill all data");
        return false;
    } else {
        var myObj = {
            "uname": username,
            "age": age,
            "city": city
        }
        var jsondata = JSON.stringify(myObj);
        // console.log(jsondata)
        fetch("php/insert-data.php", {
                method: "POST",
                body: jsondata,
                header: {
                    'Content-type': 'applicatin/json'
                }
            })
            .then(response => response.json())
            .then((data) => {
                if (data.insert === "success") {
                    loadData();
                    hide_model();
                    load_count();
                    document.getElementById("form-model").reset();
                    show_message("success", "Data insert successfully")
                } else {
                    hide_model();
                    show_message("error", "Data Not insert successfully")
                }
            })
            .catch((error) => {
                show_message("error", "Something woring")
            })
    }

})


// get data for update
const editData = (id) => {
    updateModel.style.display = "flex";
    if (id == "") {
        alert("id is required");
    } else {
        fetch(`php/edit-data.php?id=${id}`)
            .then(response => response.json())
            .then((data) => {
                if (data["empty"] == "emtpy") {
                    alert("some thing wroing")
                } else {
                    for (var i in data) {
                        document.getElementById("edit-uname").value = data[i].username;
                        document.getElementById("edit-id").value = data[i].id;
                        document.getElementById("edit-age").value = data[i].age;
                        document.getElementById("edit-city").value = data[i].city;
                    }
                }
            }).catch((error) => {
                show_message("error", "Something woring")

            })
    }
}


// update btn
const updateButton = document.querySelector("#updatebtn");
// update form 
updateButton.addEventListener("click", (e) => {
    e.preventDefault();
    const edit_id = document.querySelector("#edit-id").value;
    const edit_uname = document.querySelector("#edit-uname").value;
    const edit_age = document.querySelector("#edit-age").value;
    const edit_city = document.querySelector("#edit-city").value;

    if (edit_uname === "" || edit_age === "" || edit_city === "") {
        alert('all field is require');
    } else {
        var myUpdateObj = {
            "id": edit_id,
            "uname": edit_uname,
            "age": edit_age,
            "city": edit_city
        }
        var jsonUpdateData = JSON.stringify(myUpdateObj);
        fetch("php/update-data.php", {
                method: "PUT",
                body: jsonUpdateData,
                header: {
                    'Content-type': 'application/json'
                }
            })
            .then(response => response.json())
            .then((data) => {
                if (data.update == "success") {
                    loadData();
                    hide_model();
                    load_count();
                    document.getElementById("form-model").reset();
                    show_message("success", "Data update successfully")

                } else {
                    show_message("error", "Data Not update successfully")

                }
            })
            .catch((error) => {
                show_message("error", "Something woring")

            })
    }
})

// for delete

const deleteData = (did) => {
    if (confirm("Are you Sure you want to delete")) {
        fetch(`php/delete-data.php?id=${did}`, {
                method: "DELETE"
            })
            .then(response => response.json())
            .then((data) => {
                if (data.delete == "success") {
                    loadData();
                    load_count();
                    show_message("success", "Data delete successfully")

                } else {
                    show_message("error", "Data Not delete successfully")

                }
            })
            .catch((error) => {
                show_message("error", "Something woring")

            })
    }
}


// search record


const search_data = () => {
    var search = document.getElementById("search").value;
    // console.log(search)
    fetch(`php/search-data.php?search=${search}`)
        .then(response => response.json())
        .then((data) => {
            var tbody = document.getElementById("tbody");

            var tr = "";
            if (data["empty"] != "empty") {
                for (var i in data) {
                    tr += ` <tr>
                                <td>${ parseInt(i)+1 }</td>
                                <td>${data[i].username}</td>
                                <td>${data[i].age}</td>
                                <td>${data[i].city}</td>
                                <td><button  onclick=editData(${data[i].id})  class="btn btn-pirmary" >Edit</button></td>
                                <td><button onclick=deleteData(${data[i].id}) class="btn btn-danger" >Delete</button></td>
                            </tr>`;
                }
                tbody.innerHTML = tr;
            } else {
                tbody.innerHTML = "<h3 class='head'>Record Not Found</h3>"

            }
        })
}

// const search_btn = document.getElementById("search-btn");
// search_btn.addEventListener("click", search_data)


const hide_models_on_body_click = (e) => {
    if (e.target == model) {
        model.style.display = "none";
    }
    if (e.target == updateModel) {
        updateModel.style.display = "none";
    }
}

window.addEventListener("click", hide_models_on_body_click);


const show_message = (type, text) => {
    if (type === "error") {
        var message_box = document.getElementById("error-message");
    } else {
        var message_box = document.getElementById("success-message");
    }

    message_box.style.display = "block";
    message_box.innerHTML = text;
    setTimeout(() => {
        message_box.style.display = "none";
    }, 3000);
}