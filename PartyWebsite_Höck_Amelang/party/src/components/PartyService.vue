<template>
    <div class="">
        <h1>Party List</h1>
        <table border="0.5px" class="table  table-fixed">
            <thead class="thead-dark">
                <tr class="tr">
                    <th scope="col">ID</th>
                    <th scope="col">Name</th>
                    <th scope="col">Ort</th>
                    <th scope="col">Anzahl Leute</th>
                    <th scope="col">Datum</th>
                    <th scope="col"></th>
                </tr>
            </thead>
            <PartyServiceItem v-for="item in list" :key="item.ID"
            :ID="item.ID"
            :Name="item.Name"
            :Ort="item.Ort"
            :Anzahl_Leute="item.Anzahl_Leute"
            :Zeitpunkt="new Date(item.Zeitpunkt)"
            @deleteSuccess="loadData()"/>
        </table>
    </div>
</template>
<script>
import axios from 'axios'
import PartyServiceItem from './PartyServiceItem'

export default {
    name: "PartyService",
    data()
    {
        return {list:undefined}
    },
    mounted()
    {
        this.loadData()
    },
    components: {
        PartyServiceItem
    },
    methods:{
        loadData(){
            axios.get('http://localhost:8081/api/party')
        .then((resp) => {
            this.list = resp.data;
            console.warn(resp)
        })
        }
    }
}
</script>

<style>

.thead-dark th {
    position: sticky;
    top: 0;
    z-index: 2;
}
</style>