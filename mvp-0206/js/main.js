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