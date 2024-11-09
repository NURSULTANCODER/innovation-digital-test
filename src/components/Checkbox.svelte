<script>
  export let checked = false;
  export let onToggle = () => {};
</script>

<div class="conset">
  <div class="checkbox-container" role="button" on:click={onToggle} on:keydown={(event) => {
    if (event.key === "Enter" || event.key === " ") {
      onToggle();
    }
  }}
  tabindex="0">
    <input type="checkbox"  bind:checked={checked} id="custom-checkbox" class="checkbox" />
    <label for="custom-checkbox" role="button" on:click={onToggle} class="custom-checkbox"></label>
  </div>
<label>I accept <a href="#top">Terms and Privacy Policy</a></label>
</div>

<style>
  .conset { 
    margin-bottom: 10px; 
    display: flex;
    align-items: center;
    gap: 10px;
  }
  a {
    color: rgba(121, 126, 163, 1);
    text-decoration: underline;
  }
  .checkbox-container {
    display: inline-block;
    cursor: pointer;
  }

  .checkbox {
    display: none;
  }

  .custom-checkbox {
    width: 20px;
    height: 20px;
    border: 2px solid rgba(63, 67, 99, 1);
    border-radius: 4px;
    display: inline-block;
    position: relative;
    background-color: rgba(23, 25, 41, 1);
    transition: all 0.3s;
  }

  .checkbox:checked + .custom-checkbox {
    background-color: rgba(63, 67, 99, 1);
    border-color: rgba(63, 67, 99, 1);
  }

  .checkbox:checked + .custom-checkbox::after {
    content: "";
    position: absolute;
    top: 2px;
    left: 6px;
    width: 6px;
    height: 12px;
    border: solid white;
    border-width: 0 2px 2px 0;
    transform: rotate(45deg);
  }

  /* Стили при наведении */
  .custom-checkbox:hover {
    border-color: rgba(143, 148, 184, 0.8);
  }
</style>
