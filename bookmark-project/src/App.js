import Bookmark from "./components/Bookmark";
import BookmarkProvider from "./store/BookmarkProvider";
import Example from "./UI/Modal";


function App() {

  return (
    <BookmarkProvider>
      <Example/>
      <Bookmark/>
    </BookmarkProvider>
  );
}

export default App;
