<template>
        <tr scope="row" class="itemlist">
            <td>{{ ID }}</td>
            <td>{{ Name }}</td>
            <td>{{ Ort }}</td>
            <td>{{ Anzahl_Leute }}</td>
            <td>{{Zeitpunkt.toLocaleDateString()}} {{Zeitpunkt.toLocaleTimeString()}}</td>
            <td> <button @click="RmItem" class="btn-del btn button--wayrae"> Remove </button> </td>
        </tr>
</template>

<script>
import axios from 'axios'

export default {
    props: {
        ID: Number,
        Name: String,
        Ort: String,
        Anzahl_Leute: Number,
        Zeitpunkt: Date
    },
    methods: {
        RmItem() {
            if(this.ID != null){
                axios.delete("http://localhost:8081/api/party/" + this.ID).then(() => {
                    this.$emit("deleteSuccess")
                })
            }
        }
    }
}
</script>

<style>

.btn-del {
    min-width: 15px;
    max-width: 100px;
    max-height: 30px;
    font-size: 10px;  
    color: #ff4040 ;
    margin: 0 auto;
    display: block;
    padding: 0.5em 1em;
    border: none;
    background: none;
    color: inherit;
    position: relative;
    z-index: 1;
    -moz-osx-font-smoothing: grayscale;
    letter-spacing: 1px;
    text-transform: uppercase;
    font-weight: 600;
    border: 1px solid #ff4040;
    margin-top: 0!important;

}

.btn:focus {
    outline: none;
    color: white;
}

.button--wayrae {
    overflow: hidden;
    width: 245px;
    -webkit-transition: border-color 0.3s, color 0.3s;
    transition: border-color 0.3s, color 0.3s;
    -webkit-transition-timing-function: cubic-bezier(0.2, 1, 0.3, 1);
    transition-timing-function: cubic-bezier(0.2, 1, 0.3, 1);
}
.button--wayrae::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 150%;
    height: 100%;
    background: #37474f;
    z-index: -1;
    -webkit-transform: rotate3d(0, 0, 1, -45deg) translate3d(0, -3em, 0);
    transform: rotate3d(0, 0, 1, -45deg) translate3d(0, -3em, 0);
    -webkit-transform-origin: 0% 100%;
    transform-origin: 0% 100%;
    -webkit-transition: -webkit-transform 0.3s, opacity 0.3s, background-color 0.3s;
    transition: transform 0.3s, opacity 0.3s, background-color 0.3s;
}
.button--wayrae:hover {
    color: #fff;
    border-color: #ff4040;
}
.button--wayrae.button--inverted:hover {
    color: white;
    border-color: #fff;
}
.button--wayrae:hover::before {
    opacity: 1;
    background-color: #ff4040;
    -webkit-transform: rotate3d(0, 0, 1, 0deg);
    transform: rotate3d(0, 0, 1, 0deg);
    -webkit-transition-timing-function: cubic-bezier(0.2, 1, 0.3, 1);
    transition-timing-function: cubic-bezier(0.2, 1, 0.3, 1);
}
.button--wayrae.button--inverted:hover::before {
    background-color: #fff;
}

</style>