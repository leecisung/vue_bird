<template>
<!--중복처리-->
<v-app>
 <!--v-app 안쓰면 vuetify 다 깨짐  -->
    <nav>
        <v-toolbar dark color="green">
            <v-toolbar-title>
                <nuxt-link to="/">NodeBird</nuxt-link>
            </v-toolbar-title>
            <v-spacer></v-spacer>
            <v-toolbar-items>
                <!-- 아래는 input tag와 동일 -->
                <v-text-field label="검색" hide-details prepend-icon="mdi-magnify" :style = "{ display: 'flex', alignItems: 'center' }" />
                    <!-- 링크가 있는 누를 수 있는 버튼 -->
                    <v-btn text nuxt to="/profile" :style = "{ display: 'flex', alignItems: 'center' }">
                        <div>프로필</div>
                    </v-btn>
                    <v-btn text nuxt to="/signup" :style = "{ display: 'flex', alignItems: 'center' }" >
                        <div>회원가입</div>
                    </v-btn>
            </v-toolbar-items>
        </v-toolbar>
    </nav>
    <div>{{name}}</div>
    <v-btn @click="onChangeName">바이바이</v-btn>
    <v-row no-gutters>
        <v-col cols="12" md="4">
           <login-form />
        </v-col>
        <v-col cols="12" md="8">
            <nuxt />
        </v-col>
    </v-row>
</v-app>
</template>

<script>
    import LoginForm from '~/components/LoginForm'; //~ : 소스들의 ROOT 폴더
    export default {
       components: {
        LoginForm,
       },
       computed: {
        name() {
            return this.$store.state.posts.name;
        },
       },
       methods: {
        onChangeName() {
            this.$store.commit('posts/bye')
        }
       }
    }

</script>

<style scoped>
    a {
        display: inline-block;
        text-decoration: none;
        color : inherit;
    }

</style>
