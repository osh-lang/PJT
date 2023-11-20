<template>
  <div>
  <body>
      <div class="login-wrapper">
          <h2>SignUp</h2>
          <form method="post" action="서버의url" id="login-form">
              <input type="text" name="userName" placeholder="이름을 입력해 주세요">
              <input type="password" name="userPassword" placeholder="비밀번호를 입력해 주세요">
              <input type="password" name="userPassword" placeholder="비밀번호를 다시 입력해 주세요">
              <input type="password" name="userPassword" placeholder="이메일을 입력해 주세요">
              <input type="submit" value="SignUp">
          </form>
      </div>
  </body>
  </div>
  <!-- </RouterLink> -->
  </template>
  
  <script setup>
  
  </script>
  
  <style scoped>
  *{
      padding: 0;
      margin: 0;
      border: none;
  }
  body{
      font-size: 14px;
      font-family: 'Roboto', sans-serif;
  }
  .underline{
    text-decoration-line: none;
  }
  .login-wrapper{
      width: 600px;
      height: 500px;
      padding: 40px;
      margin-top: 90px;
      margin-left: auto;
      margin-right: auto;
      margin-bottom: 90px;
      text-align: center;
      box-sizing: border-box;
      border: solid 2px rgb(167, 185, 181);
      border-radius: 15%;
    }
  
  .login-wrapper > h2{
      font-size: 24px;
      color: rgb(36, 174, 254);
      margin-bottom: 20px;
  }
  #login-form > input{
      width: 100%;
      height: 48px;
      padding: 0 10px;
      box-sizing: border-box;
      margin-bottom: 16px;
      border-radius: 6px;
      background-color: #F8F8F8;
  }
  #login-form > input::placeholder{
      color: #D2D2D2;
  }
  #login-form > input[type="submit"]{
      color: #fff;
      font-size: 16px;
      background-color: rgb(135, 205, 245);;
      margin-top: 20px;
  }
  #login-form > input[type="checkbox"]{
      display: none;
  }
  #login-form > label{
      color: #999999;
  }
  #login-form input[type="checkbox"] + label{
      cursor: pointer;
      padding-left: 26px;
      background-image: url("checkbox.png");
      background-repeat: no-repeat;
      background-size: contain;
  }
  #login-form input[type="checkbox"]:checked + label{
      background-image: url("checkbox-active.png");
      background-repeat: no-repeat;
      background-size: contain;
  }
  </style>