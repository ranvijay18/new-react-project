import React from "react";


const BookmarkContext = React.createContext({
    bookmarks: [],
    addBookmark: (item) => {},
    removeBookmark: (id) => {},
})

export default BookmarkContext;