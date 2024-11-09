<script>
  export let label;
  export let type = "text";
  export let required = false;
  export let value = "";
  export let onInput = () => {};

  let touched = false;

  function handleBlur() {
    touched = true;
  }

  function isInvalid() {
    return required && touched && !value;
  }
</script>

<div class="input-field">
  <label>{label}{#if required} *{/if}</label>
  <input
    type={type}
    bind:value
    on:input={() => onInput(value)}
    on:blur={handleBlur}
    class:is-invalid={isInvalid()}
  />
  {#if isInvalid()}
    <p class="error">Поле {label} обязательно для заполнения</p>
  {/if}
</div>

<style>
  .input-field { 
    margin-bottom: 10px; 
    display: flex;
    flex-direction: column;
    width: 100%;
    position: relative;
  }
  .input-field input {
    border: none;
    border-bottom: 1px solid rgba(63, 67, 99, 1);
    background-color: transparent;
    padding: 5px 0;
    color: #fff;
    width: 100%;
    position: relative;
  }
  .input-field label {
    position: relative;
    font-size: 15px;
    line-height: 18px;
  }
  .input-field input:focus {
    border-bottom: 1px solid #fff;
    outline: none;
    /* padding-bottom: 10px; */
  }
  input:focus ~ label {
    color: #fff;
  }
  .is-invalid { 
    border-color: red; 
  }
  .error { 
    color: red; 
    font-size: 12px; 
  }
</style>
