<script>
  export let onClick;
  export let disabled = false;
</script>

<button on:click={onClick} disabled={disabled}>Отправить</button>

<style>
  button { 
    width: 121px;
    height: 42px;
    gap: 10px;
    border-radius: 50px;
    opacity: 0px;
    text-align: center;
    background-color: rgba(64, 68, 99, 1);
    border: none;
    color: rgba(255, 255, 255, 0.7);
  }
  button:disabled { 
    background-color: rgba(44, 47, 71, 1);
    cursor: not-allowed; 
  }
</style>
