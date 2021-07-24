<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="css/style.css">
    <title>Curd in php and fetch</title>
</head>

<body>
    <div id="error-message">asdfasdfsd</div>
    <div id="success-message">adfasdfasd</div>
    <div class="heading">
        <h1>Crud operation width javascript Fetch</h1>
    </div>
    <div class="card">
        <div class="count">
            <h4> users ( <span id="total-count"></span> )</h4>
        </div>
        <div class="right-button">
            <button class="btn btn-black" onclick="show_model()">Add New</button>
        </div>
    </div>
    <div class="form-group">
        <input type="text" placeholder="Search Here..." id="search" onkeyup="search_data()" class="form-control">
        <!-- <input type="text" placeholder="Search Here..." id="search" class="form-control">
        <button class="btn btn-primray" id="search-btn">search</button> -->
    </div>
    <div class="table">
        <table>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Age</th>
                    <th>City</th>
                    <th>Edit</th>
                    <th>Delete</th>
                </tr>
            </thead>
            <tbody id="tbody">

            </tbody>
        </table>
        <h1 id="notFound"></h1>

    </div>
    <div id="modal">
        <div class="modal-content">
            <form method="POST" id="form-model">
                <h2>Add New Student</h2>
                <div class="form-group">
                    <label for="">Enter Your Name</label>
                    <input type="text" name="uname" id="uname" class="form-control">
                </div>
                <div class="form-group">
                    <label for="">Enter Your Age</label>
                    <input type="text" name="age" id="age" class="form-control">
                </div>
                <div class="form-group">
                    <label for="">Enter Your City</label>
                    <input type="text" name="city" id="city" class="form-control">
                </div>
                <div class="form-group">
                    <button class="btn btn-black" type="submit" id="savebtn">Save</button>
                </div>
            </form>
            <div class="close-btn">
                <button class="btn btn-danger" onclick="hide_model()">X</button>
            </div>
        </div>

    </div>

    <!-- update model -->

    <div id="updateModal">
        <div class="modal-content">
            <form action="" method="POST" id="form-model">
                <h2>Update Student</h2>
                <div class="form-group">
                    <label for="">Enter Your Name</label>
                    <input type="text" name="uname" id="edit-uname" class="form-control">
                    <input type="hidden" name="id" id="edit-id" class="form-control">
                </div>
                <div class="form-group">
                    <label for="">Enter Your Age</label>
                    <input type="text" name="age" id="edit-age" class="form-control">
                </div>
                <div class="form-group">
                    <label for="">Enter Your City</label>
                    <input type="text" name="city" id="edit-city" class="form-control">
                </div>
                <div class="form-group">
                    <button class="btn btn-black" id="updatebtn">Update</button>
                </div>
            </form>
            <div class="close-btn">
                <button class="btn btn-danger" onclick="hide_model()">X</button>
            </div>
        </div>

    </div>
    <script src="js/app.js"></script>
</body>

</html>