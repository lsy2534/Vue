<template>
<div class="memo">
    <div class="act">
        <button id='test1' type="button" class="btn btn-primary" @click="add()">+ 추가</button>
        <button id='test2' type="button" class="btn btn-outline-danger" @click="del()">- 삭제</button>
    </div>

    <ul>
        <li v-for="d in state.data" :key="d.ID" @click="edit(d.ID)">{{ d.MEMO_CONT }}</li>
    </ul>
</div>
</template>
<script>
import { reactive } from 'vue';
import axios from "axios";

export default {
    setup() {
        const state = reactive({
        data : [],
        });
        const add =()=>{
            const contents = prompt('insert content.');
            if(!contents){
                alert('내용을 입력해주세요.');
                return;
            }
            axios.post("/api/memos", { contents: contents }).then((res)=>{
            console.log(res.data)
            state.data = res.data;
        })
        };
        const edit =(id) =>{
            const content = prompt('내용을 입력해주세요,',state.data[id].MEMO_CONT);
            if(!content){
                return;
            }
            axios.put("/api/memos/" + id, { contents: content} ).then((res)=>{
                state.data = res.data;
            })

        };

        axios.get("/api/memos").then((res)=>{
            state.data = res.data;
        });
        return { state, add, edit };
    },


}


</script>  
<style lang="scss" scope>
.memo {
    .act{
        text-align: right;
        padding : 10px 10px 5px 5px;
        margin : 5px
    }
    ul {
    border-top: 1px solid #eee;
    list-style: none;
    padding: 0;
    margin: 0;

        li{
            padding :10px 10px;
            margin: 5px;
            border: 1px solid #eee;
            padding: 15px
        }
    }
    #test2{
    margin : 5px 5px 5px 5px
}
}


</style>