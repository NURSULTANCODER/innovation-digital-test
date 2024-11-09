<script>
  import InputField from './InputField.svelte';
  import Checkbox from './Checkbox.svelte';
  import SubmitButton from './SubmitButton.svelte';
  import { globalMessage, showAlert } from "../store.js";

  

  let name = $state("");
  let company =  $state("");
  let email =  $state("");
  let phone =  $state("");
  let subject =  $state("");
  let message =  $state("");
  let consent = $state(false);
  let emailValid = $state(true);
  let phoneValid = $state(true);

 

  function isValidEmail(email) {
    const emailPattern = /^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/;
    return emailPattern.test(email);
  }

  function isValidPhone(phone) {
    const phonePattern = /^[0-9]+$/; 
    return phonePattern.test(phone);
  }

  function handleSubmit() {
    if (!name || !company || !email || !message || !consent) {
      globalMessage.set("Пожалуйста, заполните все обязательные поля и подтвердите согласие.");
      showAlert.set(true)
      return;
    }
    if(!isValidEmail(email)) {
      emailValid = false
    }
    if(!isValidPhone(phone)) {
      phoneValid = false
    }
    if(!isValidPhone(phone) || !isValidEmail(email)) {
      return true
    }
    globalMessage.set("Форма успешно отправлена!");
    showAlert.set(true)
    setTimeout(() => {
      showAlert.set(false)
    }, 3000)
  }
  function checboxToggle() {
    console.log();
    
    consent = !consent
  }
</script>

<form>
  <div class="form-title">
    <h2 class="form-title__title">For business enquiries please use the form below</h2>
    <p class="formform-title__description">*Required</p>
  </div>

  <InputField label="Name" required bind:value={name} />
  <InputField label="Company" required bind:value={company} />
  <InputField label="E-mail" required type="email" bind:value={email} valid={emailValid} />
  <InputField label="Phone" bind:value={phone} valid={phoneValid} />
  <InputField label="Subject" bind:value={subject} />
  <InputField label="Message" required bind:value={message} />
  <Checkbox label="I accept Terms and Privacy Policy" bind:checked={consent} onToggle={checboxToggle} />
  <SubmitButton onClick={handleSubmit} disabled={!name || !company || !email || !message || !consent} />
</form>

<style>
  form {
    display: flex; 
    flex-direction: column; 
    align-items: center;
    width: 300px; 
    background-color: rgba(23, 25, 41, 1);
    border-radius: 27px;
    padding: 40px 45px;
    color: rgba(121, 126, 163, 1);
  }
  
  .form-title {
    display: flex;
    align-items: center;
    flex-direction: column;
  }
  .form-title__title {
    color: #fff;
    font-size: 18px;
    font-weight: 400;
    line-height: 21.6px;
    text-align: center;
    text-underline-position: from-font;
    text-decoration-skip-ink: none;
    margin: 0;
    width: 238px;
  }
  .form-description {
    padding-top: 11px;
    font-size: 15px;
    font-weight: 300;
    line-height: 18px;
    text-align: center;
    text-underline-position: from-font;
    text-decoration-skip-ink: none;
  }
</style>
