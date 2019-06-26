import React, { Fragment } from "react";
import PostList from "./PostList";
import Form from "./Form";

const BlogDashboard = () => {
  return (
    <Fragment>
      <PostList />
      <Form />
    </Fragment>
  );
};

export default BlogDashboard;
