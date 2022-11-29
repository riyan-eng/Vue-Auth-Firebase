<template>
    <div>
        <h1>This is an {{            user.data            }} page</h1>
        <div>
            <button @click.prevent="signOut">Logout</button>
        </div>
    </div>
</template>

<script>
import { auth } from '@/firebaseConfig'
import { computed } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'

export default {
    setup() {
        const store = useStore()
        const router = useRouter()

        auth.onAuthStateChanged(user => {
            store.dispatch('fetchUser', user)
        })

        const user = computed(() => {
            return store.getters.user
        })

        const signOut = async () => {
            await store.dispatch('logOut')
            router.push('/login')
        }

        return {
            user, signOut
        }
    }
}
</script>