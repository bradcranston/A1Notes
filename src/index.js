
window.loadNotes = (json) => {
const app = Vue.createApp({
  data() {
      return {
          notes: JSON.parse(json)
      };
  },
  computed: {
      pierNotes() {
          return this.notes.filter(note => note.Type === 'Pier').sort((a, b) => a.Pier - b.Pier);
      },
      generalNotes() {
          return this.notes.filter(note => note.Type !== 'Pier');
      }
  }
});

app.mount('#app');

}