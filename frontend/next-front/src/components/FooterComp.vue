<template>
    <div class="footer">
        <div class="fotternews">
            <div>
                <h2>Latest News</h2>
                <p>Stay updated with the latest news and updates from our team.</p>
            </div>
        </div>
        <div class="footerlinks">
            <div>
                <h2>Quick Links</h2>
                <ul>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">About Us</a></li>
                    <li><a href="#services">Services</a></li>
                    <li><a href="#contact">Contact Us</a></li>
                </ul>
            </div>
        </div>
        <div class="copyright">
            <div>
                <p>&copy; 2025 Your Company. All rights reserved.</p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'FooterComp',
    }
</script>

<style scoped>
    .footer{
        width: 100%;
    }

    .fotternews{
        width: 100%;
        background: linear-gradient(90deg, #50002c 0%, #ff8c3f 100%);
        padding: 20px;
        display: flex;
        justify-content: center;
    }

    .fotternews div{
        width: 95%;
    }

    .fotternews h2{
        color: #fff;
        margin: 0;
        font-size: 42px;
    }

    .footerlinks{
        width: 100%;
        background-color: #202020;
        padding: 20px;
        display: flex;
        justify-content: center;
    }

    .footerlinks div{
        width: 95%;
    }

    .footerlinks ul{
        list-style: none;
        padding: 0;
    }

    .footerlinks ul li{
        margin: 5px 0;
    }

    .footerlinks ul li a{
        text-decoration: none;
        color: #fff;
    }

    .copyright{
        width: 100%;
        background-color: rgb(48, 48, 48);
        padding: 20px;
        display: flex;
        justify-content: center;
    }

</style>