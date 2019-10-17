<template>
  <div class="contact-cont">
    <div class="contact-db-cont">
      <iframe
        src="https://docs.google.com/forms/d/e/1FAIpQLSe2yYlwZTndlaF_rtJ-LZIN-UKGn2CmAV8ZfLeF9W-qxYUtjg/viewform?embedded=true"
        width="600"
        height="1598"
        frameborder="0"
        marginheight="0"
        marginwidth="0"
      >Loading…</iframe>
    </div>
  </div>
</template>

<script>
export default {
  name: "Contact"
};
</script>

<style scoped>
.contact-cont {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
}
.contact-db-cont {
  width: 90vw;
  background-color: white;
  display: flex;
  justify-content: center;
}
@media screen and (max-width: 700px) {
  .contact-db-cont {
    width: 100%;
  }
}
</style>