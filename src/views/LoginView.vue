<template>
    login

    <div v-if="error">{{error}}</div>
    <form @submit.prevent="Login">
        <div>
            <label>email</label>
            <input v-model="email" type="text">
        </div>
        <div>
            <label>password</label>
            <input v-model="password" type="text">
        </div>
        <div>
            <button type="submit">Login</button>
        </div>
    </form>
</template>

<script>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'

export default {
    setup() {
        const email = ref('')
        const password = ref('')
        const error = ref(null)

        const store = useStore()
        const router = useRouter()

        const Login = async ()=>{
            try{
                await store.dispatch('login',{
                    email:email.value,
                    password: password.value
                })
                router.push('/')
            }catch(err){
                error.value = err.message
            }finally{
                email.value = ''
                password.value = ''
            }
        }

        return {
            email, password, Login, error
        }
    }
}
</script>