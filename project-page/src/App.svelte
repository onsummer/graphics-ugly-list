<script>
  import { Styles } from "sveltestrap";
  import { data as companyData } from "./data/companies.js";
  import InfoCard from "./components/InfoCard.svelte";
</script>

<Styles />

<div class="title">
  <span class="code">vec(1.0, 1.0, 1.0, 1.0)</span> will light up everyone.
</div>
<div id="root">
  {#each companyData as { fullname, enName, where }}
    <InfoCard title={fullname} contents={[`英文名：${enName}`, `所在地：${where}`]}/>
  {/each}
</div>

<style>
  #root {
    display: flex;
    flex-direction: row;
  }

  .code {
    border: 1px solid rgb(241, 241, 241);
    border-radius: .8rem;
    padding: 0.5rem;
    background-color: rgb(230, 230, 230);
  }

  .title {
    font-size: 2rem;
    margin: 2rem 0;
  }
</style>
