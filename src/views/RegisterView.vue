<template>
    <div v-if="error">{{error}}</div>
    <form>
        <div>
            <label>Name</label>
            <input v-model="name" type="text" placeholder="Input name">
        </div>
        <div>
            <label>Email</label>
            <input v-model="email" type="text" placeholder="Input email">
        </div>
        <div>
            <label>Password</label>
            <input v-model="password" type="text" placeholder="Input password">
        </div>
        <button type="submit" @click.prevent="Register">Regist</button>
    </form>
</template>
<script>
import { ref } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'

export default {
    setup() {
        const name = ref('')
        const email = ref('')
        const password = ref('')
        const error = ref(null)

        const store = useStore()
        const router = useRouter()

        const Register = async () => {
            try {
                await store.dispatch('register', {
                    email: email.value,
                    name: name.value,
                    password: password.value
                })
                router.push('/')
                // console.log(email.value)
                
            } catch (err) {
                error.value = err.message
            } finally{
                name.value = ''
                email.value = ''
                password.value = ''
            }
        }

        return {
            name, email, password, Register, error
        }
    }
}
</script>