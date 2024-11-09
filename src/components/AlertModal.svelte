<script>
  export let type = "info";

  import { globalMessage, showAlert } from "../store.js";

  function close() {
    showAlert.set(false)
  }
</script>

{#if $showAlert}
  <div class="modal-overlay" on:click={close}>
    <div class="modal {type}"  on:click|stopPropagation>
      <p class="message">{$globalMessage}</p>
      <button class="close-button" on:click={close}>Закрыть</button>
    </div>
  </div>
{/if}

<style>
  .modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1000;
  }

  .modal {
    background-color: white;
    padding: 20px;
    border-radius: 8px;
    max-width: 400px;
    width: 90%;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
    text-align: center;
  }

  .message {
    font-size: 16px;
    margin-bottom: 20px;
  }

  .error .message {
    color: #d9534f;
  }

  .warning .message {
    color: #f0ad4e;
  }

  .success .message {
    color: #5cb85c;
  }

  .info .message {
    color: #5bc0de;
  }

  .close-button {
    background-color: #333;
    color: white;
    border: none;
    padding: 8px 16px;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.2s;
  }

  .close-button:hover {
    background-color: #555;
  }
</style>
