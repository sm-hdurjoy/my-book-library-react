// Library Imports

// Components/Pages Imports

// Local Styles Import
import "./AddBook.css";

const AddBook = () => {

  // Grab data

  return (
    <div className="add-book-container">
      <div className="add-a-book-header">
        <h2>Add A Book To Your List</h2>
      </div>
      <form className="add-book-form">
        <div>
          <label className="form-label" htmlFor="booktitle">
            Book Title :{" "}
          </label>
          <input
            className="form-input"
            type="text"
            id="booktitle"
            name="booktitle"
            // value={formData.input1}
            // onChange={handleInputChange}
          />
        </div>

        <div>
          <label className="form-label" htmlFor="author">
            Author :
          </label>
          <input
            className="form-input"
            type="text"
            id="author"
            name="author"
            // value={formData.input1}
            // onChange={handleInputChange}
          />
        </div>

        <div>
          <label className="form-label" htmlFor="category">
            Category :
          </label>
          <input
            className="form-input"
            type="text"
            id="category"
            name="category"
            // value={formData.input1}
            // onChange={handleInputChange}
          />
        </div>
        <div>
          <label className="form-label" htmlFor="releaseYear">
            Released Year :{" "}
          </label>
          <input
            className="form-input"
            type="text"
            id="releaseYear"
            name="releaseYear"
            // value={formData.input1}
            // onChange={handleInputChange}
          />
        </div>

        <div>
          <label className="form-label" htmlFor="booksSold">
            Number Of Books Sold :{" "}
          </label>
          <input
            className="form-input"
            type="text"
            id="booksSold"
            name="booksSold"
            // value={formData.input1}
            // onChange={handleInputChange}
          />
        </div>
        <div>
          <label className="form-label" htmlFor="coverURL">
            Cover URL :{" "}
          </label>
          <input
            className="form-input"
            type="text"
            id="coverURL"
            name="coverURL"
            // value={formData.input2}
            // onChange={handleInputChange}
          />
        </div>
        <div>
          <label className="form-label" htmlFor="description">
            Book Description :{" "}
          </label>
          <textarea
            className="form-input"
            id="textarea"
            name="description"
            // value={formData.textarea}
            // onChange={handleInputChange}
          ></textarea>
        </div>

        <button className="add-book-form-submit-btn" type="submit">
          Add Book
        </button>
      </form>
    </div>
  );
};

export default AddBook;
