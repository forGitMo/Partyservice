<template>
<div>
     <h3 class="head2" style="color: white; font-size: 2.5em; margin-top: 2em;">Erstelle eine Party</h3> 
    <div class="lower-content">
      <form @submit="postdata">        
        <div class="input-group">
          <input type="text" name="Name" placeholder="Name:" class="textbox" v-model="Name" ><br>
          <span class="outline"></span>
       </div>
        <div class="input-group">
          <input type="text" name="Ort" placeholder="Ort:" class="textbox" v-model="Ort" ><br>
          <span class="outline"></span>
       </div>
        <div class="input-group">
          <input type="text" name="Gaeste" placeholder="anzahl Gäste:" class="textbox" v-model="Anzahl_Leute" ><br>
          <span class="outline"></span>
       </div>
        <div class="input-group">
          <input type="datetime-local" name="Datum" class="textbox" v-model="Zeitpunkt" ><br>
          <span class="outline"></span>
       </div>
        <button type="submit" class="btn1 button--wayra">button</button>
      </form>
    </div>
</div>
  
</template>

<script>
import axios from 'axios'

export default { 
    name: "PostComponent",
    data(){
        return {
              Name:null,
              Ort:null,
              Anzahl_Leute:null,
              Zeitpunkt:null
        }
    },
    methods:{
        postdata (e)
        {
          let data = [{
            name: this.Name,
            ort: this.Ort,
            anzahl_leute: this.Anzahl_Leute,
            zeitpunkt: this.Zeitpunkt
          }]
            axios.post("http://localhost:8081/api/party", data)
            .then((result)=>{
                console.warn(result)
            })
            e.priventDefault();
        }
    }   
}
</script>

<style>



.th {
  position: -webkit-sticky;
	position: sticky;
	top: 0;	
}

.lower-content{
  margin: 0 auto;
  max-width: 35%;
}
form {
  margin: 0 auto;
}

.input-group{
  font-size: 1.5rem; 
  border-radius: 2px; 
  border: solid white;
  text-align: center;
  display: flex;
  align-items: center;
  max-width: 100%;
  margin: 0 auto;
  transition: 0.3s;
}

.input-group:not(:last-of-type){
  margin-bottom: 1.5rem; 
}
.input-group:last-of-type{
  margin-bottom:2em;  
}

input {
  -moz-appearance: none;
  -webkit-appearance: none;
  appearance: none;
  outline: none; 
  font: inherit; 
  border: 2px solid transparent;
  padding-top: calc(0.5em - 1px);
  padding-bottom: calc(0.5em - 1px);
  padding-left: calc(0.5em - 1px);
  padding-right: calc(0.5em - 1px); 
  border-radius: 2px; 
  background: transparent;
  color: white;
  width: 100%;
  height: 100%;
}

input::placeholder{
    color: white;
    opacity: 0.9; 
    
}

.outline{
  cursor: pointer;
}

.outline::after{
  content:''; 
  position: absolute;
  z-index: -1;
  top: 0;
  left:0;
  width: calc(100% - 1px);
  height: calc(100% - 1px);
  border-radius: 2px;
  transition: box-shadow 0.3s ease; 
}

.input-group:hover {
  box-shadow: 0px 0px 1px 1px #3f51b5;
  border-color:  #3f51b5;
}

input:focus  {
outline: none;
  box-shadow: 0px 0px 2px 2.5px rgb(39, 62, 78);
  border-color:  #3f51b5;
  
}

::-webkit-calendar-picker-indicator {
    filter: invert(1);
}

.btn1 {
    margin: 0 auto;
    min-width: 150px;
    max-width: 250px;
    display: block;
    padding: 1em 2em;
    border: none;
    background: none;
    color: inherit;
    position: relative;
    z-index: 1;
    -moz-osx-font-smoothing: grayscale;
    color: #ECEFF1;
    border-color: #ECEFF1 ;
    font-size: 16px;
    letter-spacing: 2px;
    text-transform: uppercase;
    font-weight: 500;
    border: 2px solid;
    margin-bottom: 3em;
}

.btn:focus {
	outline: none;
}

.button--wayra {
	overflow: hidden;
	width: 245px;
	-webkit-transition: border-color 0.3s, color 0.3s;
	transition: border-color 0.3s, color 0.3s;
	-webkit-transition-timing-function: cubic-bezier(0.2, 1, 0.3, 1);
	transition-timing-function: cubic-bezier(0.2, 1, 0.3, 1);
}
.button--wayra::before {
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
.button--wayra:hover {
	color: #fff;
	border-color: #3f51b5;
}
.button--wayra.button--inverted:hover {
	color: #3f51b5;
	border-color: #fff;
}
.button--wayra:hover::before {
	opacity: 1;
	background-color: #3f51b5;
	-webkit-transform: rotate3d(0, 0, 1, 0deg);
	transform: rotate3d(0, 0, 1, 0deg);
	-webkit-transition-timing-function: cubic-bezier(0.2, 1, 0.3, 1);
	transition-timing-function: cubic-bezier(0.2, 1, 0.3, 1);
}
.button--wayra.button--inverted:hover::before {
	background-color: #fff;
}

@media screen and (max-width: 900px) {
  .btn {
    max-width: 50%;
  }
}

@media screen and (max-width: 10px) {
  .btn {
    max-width: 10%;
  }

}

</style>