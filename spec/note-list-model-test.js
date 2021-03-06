(function testCreateNote() {
  var noteList = new NoteList();
  assert.isTrue(noteList.createNote('Hello').getText() === 'Hello');
})();

(function testGetNote() {
  var noteList = new NoteList();
  noteList.createNote('Hello');
  noteList.createNote('Hi');
  assert.isTrue(noteList.returnNotes().length === 2);
  console.log(noteList.returnNotes()[0] === "Hello")
  assert.isTrue(noteList.returnNotes()[0].getText() === 'Hello');
})();