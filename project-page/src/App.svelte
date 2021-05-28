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
    <InfoCard
      title={fullname}
      contents={[`英文名：${enName}`, `所在地：${where}`]}
    />
  {/each}
</div>

<style>
  @font-face {
    font-family: FiraCode;
    src: url("/graphics-ugly-list/font/FiraCode-Regular.woff2"),
      url("/graphics-ugly-list/font/FiraCode-Regular.woff");
  }

  @font-face {
    font-family: Helvetica;
    src: url("/graphics-ugly-list/font/Helvetica.woff");
  }

  #root {
    font-family: "Helvetica";
    display: flex;
    flex-direction: row;
  }

  .code {
    font-family: "FiraCode";
    border: 1px solid rgb(241, 241, 241);
    border-radius: 0.8rem;
    padding: 0.5rem;
    background-color: rgb(230, 230, 230);
  }

  .title {
    letter-spacing: 1px;
    font-size: 2rem;
    margin: 2rem 0;
  }
</style>
