import { useState } from "react";
import BookmarkContext from "./bookmark-context";


const BookmarkProvider = (props) => {
   const [bookmark, setBookmark] = useState([]);

const handleAddBookmark = (item) => {
    setBookmark((prev) => {
        return [...prev, item]
    })
}

const handleRemoveBookmark = (id) => {
     
}


    const bookmarkContext = {
         bookmarks: bookmark,
         addBookmark: handleAddBookmark,
         removeBookmark: handleRemoveBookmark
    }
    return (
    <BookmarkContext.Provider value={bookmarkContext}>
         {props.children}
    </BookmarkContext.Provider>
    )
}


export default BookmarkProvider;