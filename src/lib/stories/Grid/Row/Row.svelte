<script lang="ts" module>
  import { type Snippet } from 'svelte';

  export interface GridRowProps {
    /** GridRow contents goes here */
    children?: Snippet;
    /** GridRow ref */
    ref?: HTMLDivElement;
    /** Custom css class */
    class?: string;
  }
</script>

<script lang="ts">
  let {
    children,
    class: className = '',
    ref = $bindable<HTMLDivElement>(),
  }: GridRowProps = $props();
</script>

<div class={['GridRow', className].join(' ')} bind:this={ref}>
  {#if children}
    {@render children()}
  {/if}
</div>

<style lang="scss">
  .GridRow {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    margin: calc(var(--GridRowSpacing) * var(--base-space)) 0;
  }
</style>
