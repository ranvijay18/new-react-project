import { useContext, useRef, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import BookmarkContext from '../store/bookmark-context';

function Example() {
  const [show, setShow] = useState(false);

  const titleRef = useRef();
  const urlRef = useRef();
 
 const bookmarkCtx = useContext(BookmarkContext);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    setShow(false)

    const obj = {
        title: titleRef.current.value,
        url : urlRef.current.value
    }
    
    bookmarkCtx.addBookmark(obj);
  } 

  return (
    <>
    <div  className="text-center">
    <h1>Bookmark Website</h1>
    <Button className='text-center' variant="primary" onClick={handleShow}>
        Add
      </Button>
    </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Bookmark</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter title"
                autoFocus
                ref={titleRef}
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
            >
              <Form.Label>Website URL</Form.Label>
              <Form.Control 
              type="text"
              placeholder="Enter title"
                autoFocus 
                ref={urlRef}
                />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button type='submit' variant="primary" onClick={handleSubmit}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Example;