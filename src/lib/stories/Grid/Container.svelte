<script lang="ts">
  import type { Snippet } from 'svelte';

  interface ContainerProps {
    /** Grid contents goes here */
    children?: Snippet;
  }

  const { children }: ContainerProps = $props();
</script>

<div class="Container">
  {#if children}
    {@render children()}
  {/if}
</div>

<style lang="scss">
  .Container {
    padding: 8px;
    border-radius: 10px;
    background-color: #bcbcbc;
    font-family: inherit;
  }
</style>
