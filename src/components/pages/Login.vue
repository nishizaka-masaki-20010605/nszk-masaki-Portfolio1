<script setup>
  import Email from '../input/Email.vue'
  import Password from '../input/Password.vue'

  import { reactive } from '@vue/reactivity'
  import { useRouter } from "vue-router"
  import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
const data = reactive({
  email: '',
  password: '',
})

const router = useRouter()
const auth = getAuth();
const login = () => {
  signInWithEmailAndPassword(auth, data.email, data.password)
    .then((userCredential) => {
      // alert("ログインに成功しました！") →　削除
      router.push('/');
    })
    .catch((err) => {
      console.log(err)
      alert("正しいログイン情報を入力してください")
    });
}

  </script>

<template>
  <section class="vh-100">
    <div class="container py-5 vh-100">
      <div class="row d-flex justify-content-center align-items-center h-100">
        <div class="row d-flex justify-content-center align-items-center h-100">
          <div class="card shadow-2-strong">
            <div class="card-body p-5 text-center bg-light">

              <h3 class="mb-5">Login</h3>

               <!-- ここに Emailタグ を追加 -->
               <!-- idとtitleをpropsで渡すように変更 -->
               <Email id="email-address" title="EmailAddress" v-model="data.email" />
               <Password id="password" title="password" v-model="data.password" />

              <!-- テンプレのEmailシステム -->

              <!-- <div class="form-outline mb-4">
                <input type="email" id="email" class="form-control form-control-lg" />
                <label class="form-label" for="email">Email</label>
              </div> -->

              <!-- <div class="form-outline mb-4">
                <input type="password" id="password" class="form-control form-control-lg" />
                <label class="form-label" for="password">Password</label>
              </div> -->
              <button class="btn btn-outline-primary btn-lg btn-block" type="submit" @click="login">Login</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.card.shadow-2-strong {
  border-radius: 1rem;
}
</style>