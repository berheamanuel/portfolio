import { Link } from "react-router-dom";
import images from "../assets/memebookimage.png";

export default function Portfolio() {
  return (
    <div className="card col">
      <img src={images} className="card-img-top" alt="memebook image" />

      <div className="card-body">
        <h5 className="card-title">Memebook</h5>
        <p className="card-text">
          The application allow users to create and edit profile, post meme on
          their page, comment to other users post as well as edit and delete
          their own post. In future users will be able to like and dislike meme
          posts, get notifications, create AI-generated meme, send and receive
          messages. User must create account to see other users post, comment
          and to post a meme. User authentication will be via session storage.
        </p>
        <a
          role="button"
          tabIndex="0"
          href="https://github.com/dakotawentz/meme-book"
          target="_blank"
          className="btn btn-primary"
        >
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 16 16"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"></path>
          </svg>{" "}
          &nbsp;GitHub
        </a>
      </div>
    </div>
  );
}
