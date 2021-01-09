<template>
  <v-container fluid>
    <v-form>
      <v-file-input
        label="Selecione as legendas"
        prepend-icon="mdi-message-text"
        append-outer-icon="mdi-send"
        outlined
        multiple
        chips
        v-model="files"
        @click:append-outer="processSubtitles"
      >
        <!-- pergar os arquivos, para processar -->
      </v-file-input>
    </v-form>
    <div class="pills">
      <Pill
        v-for="word in groupedWords"
        :key="word.name"
        :name="word.name"
        :amount="word.amount"
      />
    </div>
  </v-container>
</template>

<script>
import { ipcRenderer } from "electron";
import Pill from "./Pill";

export default {
  components: { Pill },
  data: function () {
    return {
      files: [],
      groupedWords: [],
    };
  },
  methods: {
    processSubtitles() {
      // acima do electron 6 tem que fazer o tratamento, senão dá erro
      // Files é objeto da DOM e não é serializado em electron acima da versão 6
      try {
        const paths = this.files.map((f) => f.path);
        ipcRenderer.send("process-subtitles", paths);
        console.log(paths);
      } catch (e) {
        console.log(e);
      }

      try {
        ipcRenderer.on("process-subtitles", (event, resp) => {
          this.groupedWords = resp;
        });
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

<style>
.pills {
  display: flex;
  flex-wrap: wrap;
  justify-content: stretch;
}
</style>
