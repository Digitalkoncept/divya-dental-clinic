import React from "react";

export default function CommentBox() {
  return (
    <div className="comment-respond">
      <div className="form-respond">
        <h1>Leave a Reply</h1>
        <form>
          <div className="row">
            <div className="col">
              <input
                type="text"
                className="form-control"
                placeholder="Your Name"
              />
            </div>
            <div className="col">
              <input
                type="text"
                className="form-control"
                placeholder="Your E-mail"
              />
            </div>
          </div>
          <div>
            <textarea
              className="form-control"
              id="exampleFormControlTextarea1"
              placeholder="Enter comment here..."
              defaultValue={""}
            />
          </div>
          <div className="comment-submit">
            <button type="submit" className="">
              Post Comment
            </button>
          </div>
        </form>
        <div
          className="themesflat-spacer clearfix"
          data-desktop={41}
          data-mobile={30}
          data-smobile={30}
        />
      </div>
    </div>
  );
}
