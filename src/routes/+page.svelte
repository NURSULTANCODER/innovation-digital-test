<script>
  import Form from '../components/Form.svelte';
  import AlertModal from '../components/AlertModal.svelte'
  import { showAlert, alertType } from "../store.js";

 
</script>

<main>
  <h1>Hello</h1>
  <Form />
  <AlertModal 
    visible={showAlert} 
    type={alertType} 
  />
</main>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Playwrite+ES:wght@100..400&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');
  * {
    font-family: "Roboto", sans-serif;
    padding: 0;
    margin: 0;
  }
  main { 
    display: flex; 
    flex-direction: column; 
    align-items: center; 
    background: url('/background.jpg');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    width: 100%;
    height: 100%;
    padding: 80px 0;
  }
  h1 { 
    margin-bottom: 20px; 
    color: #fff;
  }
  @media (max-width: 640px) {
    main {
      padding: 20px 0;
    }
  }
</style>
