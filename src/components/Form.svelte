<script>
  import InputField from './InputField.svelte';
  import Checkbox from './Checkbox.svelte';
  import SubmitButton from './SubmitButton.svelte';

  let name = "";
  let company = "";
  let email = "";
  let phone = "";
  let subject = "";
  let message = "";
  let consent = $state(false);

  function handleSubmit() {
    if (!name || !company || !email || !message || !consent) {
      alert("Пожалуйста, заполните все обязательные поля и подтвердите согласие.");
      return;
    }
    alert("Форма успешно отправлена!");
  }
  function checboxToggle() {
    console.log();
    
    consent = !consent
  }
</script>

<form on:submit|preventDefault={handleSubmit}>
  <div class="form-title">
    <h2 class="form-title__title">For business enquiries please use the form below</h2>
    <p class="formform-title__description">*Required</p>
  </div>

  <InputField label="Name" required bind:value={name} />
  <InputField label="Company" required bind:value={company} />
  <InputField label="E-mail" required type="email" bind:value={email} />
  <InputField label="Phone" bind:value={phone} />
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
