<template>
  <div class="home">
      <div class='home-content'>
        <h1>Bring everyone together to build better products.</h1>
        <p>
            Manage makes it simple for software teams to plan day-to-day operations while
            keeping the larger team goals in view
        </p>
        <button>Get Started</button>
      </div>
      <div>
          <img src="../assets/illustration-intro.svg">
      </div>
  </div>
</template>

<style>
    .home {
        /* padding: 0 20px 0; */
        display: flex;
        justify-content: center;
        margin-top: 100px;
    }
    .curology   {
        width: 50%;
    }
    h1 {
        font-size: 60px;
        line-height:1.3;
    }
    .home-content {
            width: 35%;
            margin-right: 210px;
    }
    p {
        font-size: 17px;
        width: 69%;
        line-height: 1.6;
        color:hsl(227, 12%, 61%);
    }
    button {
        width:  150px;
        height: 40px;
        margin-top: 30px;
        border-radius: 25px;
        border: none;
        background-color: hsl(13, 100%, 76%);
        color:white;
        font-weight: 700;
        cursor: pointer;
    }
    button:hover {
        background-color: white;
        color: hsl(13, 100%, 76%);
        border-color: hsl(13, 100%, 76%);
        border:solid;
    }
</style>



