var firebaseConfig = {
    apiKey: 'AIzaSyD4FRyWOxywD7NoZP6INqAkAxyS1eoGpc8',
    authDomain: 'mvp-web-youlink.firebaseapp.com',
    databaseURL: 'https://mvp-web-youlink.firebaseio.com',
    projectId: 'mvp-web-youlink',
    storageBucket: 'mvp-web-youlink.appspot.com',
    messagingSenderId: '321860454252',
    appId: '1:321860454252:web:453b69e821380776bfd549',
    measurementId: 'G-DY0EFCNVEK'
}

// Initialize Firebase
firebase.initializeApp(firebaseConfig)

firebase.auth.Auth.Persistence.LOCAL

$('#btn-login').click(function() {
    var email = $('#email').val()
    var password = $('#pass').val()

    if (email != '' && password != '') {
        var result = firebase.auth().signInWithEmailAndPassword(email, password)
        result.catch(function(error) {
            var errorCode = error.code
            var errorMessage = error.message

            console.log(errorCode)
            console.log(errorMessage)
            window.alert('Message' + errorMessage)
        })
    } else {
        //資料未填寫完整
        window.alert('資料未填寫完整，請輸入所有欄位')
    }
})

$('#btn-signupmodal').click(function() {
    var smname = $('#signupmodalname').val()
    var smemail = $('#signupmodalemail').val()
    var smpassword = $('#signupmodalpass').val()
    var smcpassword = $('#signupmodalcpass').val()
    if (smname != '' && smemail != '' && smpassword != '' && smcpassword != '') {
        if (smpassword == smcpassword) {
            var result = firebase
                .auth()
                .createUserWithEmailAndPassword(smemail, smpassword)
            result.catch(function(error) {
                var errorCode = error.code
                var errorMessage = error.message

                console.log(errorCode)
                console.log(errorMessage)
                window.alert('Message' + errorMessage)
            })
        } else {
            window.alert('密碼不一致，請重新確認')
        }
    } else {
        //資料未填寫完整
        window.alert('資料未填寫完整，請輸入所有欄位')
    }
})

$('#btn-logout').click(function() {
    firebase.auth().signOut()
})

$('#btn-resetPassword').click(function() {
    var auth = firebase.auth();
    var email = $("#forgotmodalemail").val()
    if (email != "") {
        auth.sendPasswordResetEmail(email).then(function() {
                window.alert("Email has been sent to you, please check and verify.")
            })
            .catch(function(error) {
                var errorCode = error.code
                var errorMessage = error.message
                console.log(errorCode)
                console.log(errorMessage)
                window.alert("Message:" + errorMessage)
            })

    }
})

//update profile setting
$('#btn-update').click(function() {
    var name = $('#name').val()
    var gender = $('#gender').val()
    var phone = $('#phone').val()
    var career = $('#career').val()
    var city = $('#city').val()
    var bio = $('#bio').val()

    var rootRef = firebase.database().ref().child("Users")
    var userID = firebase.auth().currentUser.uid
    var userRef = roomRef.child(userID)
    if (name != "" && gender != "" && phone != "" && career != "" && city != "" && bio != "") {
        var userData = {
            "name": name,
            "gender": gender,
            "phone": phone,
            "career": career,
            "city": city,
            "bio": bio
        }
        userRef.set(userData, function(error) {
            if (error) {
                var errorCode = error.code
                var errorMessage = error.message
                console.log(errorCode)
                console.log(errorMessage)
                window.alert("Message" + errorMessage)
            } else {
                window.location.href = "HomePage.html"

            }


        })
    } else {
        window.alert("Form is incomplete. Please fill out all fields.")

    }


})


//upload id file animation
function readFile(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function(e) {
            var htmlPreview =
                '<img width="200" src="' + e.target.result + '" />' +
                '<p>' + input.files[0].name + '</p>';
            var wrapperZone = $(input).parent();
            var previewZone = $(input).parent().parent().find('.preview-zone');
            var boxZone = $(input).parent().parent().find('.preview-zone').find('.box').find('.box-body');

            wrapperZone.removeClass('dragover');
            previewZone.removeClass('hidden');
            boxZone.empty();
            boxZone.append(htmlPreview);
        };

        reader.readAsDataURL(input.files[0]);
    }
}

function reset(e) {
    e.wrap('<form>').closest('form').get(0).reset();
    e.unwrap();
}

$(".dropzone").change(function() {
    readFile(this);
});

$('.dropzone-wrapper').on('dragover', function(e) {
    e.preventDefault();
    e.stopPropagation();
    $(this).addClass('dragover');
});

$('.dropzone-wrapper').on('dragleave', function(e) {
    e.preventDefault();
    e.stopPropagation();
    $(this).removeClass('dragover');
});

$('.remove-preview').on('click', function() {
    var boxZone = $(this).parents('.preview-zone').find('.box-body');
    var previewZone = $(this).parents('.preview-zone');
    var dropzone = $(this).parents('.form-group').find('.dropzone');
    boxZone.empty();
    previewZone.addClass('hidden');
    reset(dropzone);
});