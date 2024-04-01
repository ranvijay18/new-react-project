import { useContext } from 'react';
import './Bookmark.css';
import BookmarkContext from '../store/bookmark-context';

const Bookmark = () => {

    const bookmarkCtx = useContext(BookmarkContext);

    console.log(bookmarkCtx.bookmarks)

  return(
   <div className='mt-5'>
    <h3>All Bookmarks</h3> 
    <ul>
    {bookmarkCtx.bookmarks.map((ele, index) => {
       return <li key={index}>
               {ele.title} : <a href='#'>{ele.url}</a>
               <button className='dlt-btn'>Delete</button>
        </li>
    })}
    </ul>
    
   </div>
  )
}

export default Bookmark;