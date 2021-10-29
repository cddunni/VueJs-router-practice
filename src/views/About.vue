<template>
    <div class='about'>
        <div class='about1'>
            <h1 class='what'>What's diffrent about Manage?</h1>
            <p class=''> 
                Manage provides all the functionality your team needs, without 
                the complexity. Our software is tailor-made for modern digital 
                product teams.  Manage provides all the functionality your team needs, without 
                the complexity. Our software is tailor-made for modern digital 
                product teams.  Manage provides all the functionality your team needs, without 
                the complexity. Our software is tailor-made for modern digital 
                product teams.
            </p>
        </div>
        <div class='about2'>
            <div class='group'>
                    <div><h4 class='btn'>01</h4></div>
                    <div>
                        <h4> Track company-wide progress</h4>
                        <p>  
                            See how your day-to-day tasks fit into the wider vision. Go from 
                            tracking progress at the milestone level all the way done to the 
                            smallest of details. Never lose sight of the bigger picture again.
                        </p>
                    </div> 
            </div>
            <div class='group'>
                    <div><h4 class='btn'>02</h4></div>
                    <div>
                        <h4>  Advanced built-in reports</h4>
                        <p>  
                            Set internal delivery estimates and track progress toward company 
                            goals. Our customisable dashboard helps you build out the reports 
                            you need to keep key stakeholders informed.
                        </p>
                    </div>
            </div>
            <div class='group'>
                    <div><h4 class='btn'>03</h4></div>
                    <div>
                    <h4>  Everything you need in one place</h4>
                        <p>  
                            Stop jumping from one service to another to communicate, store files, 
                            track tasks and share documents. Manage offers an all-in-one team 
                            productivity solution.
                        </p>
                    </div>
            </div>
        </div>
    </div>
</template>


<script>
export default {
    
}
</script>


<style>
    .what {
        font-size: 40px;
    }
    .about {
        display: flex;
        justify-content: center;
        margin-top: 100px;
    }
    .group {
        display: flex
    }
    .about1{
        width: 40%;
    }
    .about2 {
        width: 40%;
    }
    .about p {
        width: 60%;
    }
    .btn {
        background-color: hsl(13, 100%, 76%);
        width: 70px;
        height: 35px;
        text-align: center;
        margin-right: 30px;
        padding-top: 10px;
        border-radius: 25px;
    }
</style>