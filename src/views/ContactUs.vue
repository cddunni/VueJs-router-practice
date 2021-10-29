<template>
    <div class='contact'>
        <div class='heading'>
            <h2>How Can We Help?</h2>
            <p> Please select a topic below related to your inquiry If you dont
                find what you need, fill out our contact form
            </p>
        </div>
        <div>
            <form>
                <div class="form-group">
                    <div class="field">
                        <label for= 'firstName'>FIRST NAME</label>
                        <input type="text" class="details name" >
                    </div>
                    <div class="field" id='lname'>
                        <label>LAST NAME</label>
                        <input type="text" vee-val name ='email' class="details name"  >
                    </div>
                </div>
                <div class="field">
                    <label>EMAIL</label>
                    <input type="email"  class="details email">
                </div>
                <div class="field">
                    <label>MESSAGE</label>
                    <input type="text" class="details" id= "message">
                </div>
                <div class="field">
                    <label>ADDITIONAL INFORMATION</label> 
                    <input type="text" class="details" id= "info">
                </div>
                <button type='submit' id='submit' v-on:click= 'submit'>Submit</button>
            </form>
        </div>

    </div>
</template>

<script>
export default {
        methods: {
            submit () {
                alert ('Thanks for reaching out, We will get back to you soon');
            }
        }
}
</script>


<style>
    .contact {
        background-image: url ("../assets/bg-tablet-pattern.svg");
        padding: 20px;     
        margin: 0 auto;   
    }
    .field {
        display: flex;
        flex-direction: column;
    }
    #message {
        height: 80px;
    }
    .heading {text-align: center}
    .heading p {
        width: 100%;
        }
    form {
        margin-top: 20px;
        width: 30%;
        height: 42em;
        margin: 0 auto;
        padding-top: 50px;
        padding: 50px 30px;
        /* border: solid; */
        /* border-width: 1px; */
        border-color:hsl(13, 100%, 76%);
        box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;
    }
    .details {
        height: 50px;
        margin-top: 8px;
        border:thin solid #B9B9B9 ;
    }
    input:focus {
        outline:none;
        border-color: hsl(13, 100%, 76%);
    }
    #info {
        height: 120px;
    }
    #lname {
        margin-left: 20px;
    }
    .field {
        margin-top: 30px;
    }
    .name {
        width: 250px;
    }
    .form-group {
        display: flex;
        justify-content: space-between;
    }
    #submit {
        width: 560px;
        height: 55px;
        background-color:hsl(13, 100%, 76%);
        border: none;
        outline: none;
        font-size: 18px;
        margin-top: 50px;
        color: white;
        font-weight: 500;
        border-radius: 5px;
    }
    label {
        font-weight: 600;
    }
</style>

