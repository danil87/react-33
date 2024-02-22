import { Fragment } from "react";
import CardInfo from "./CardInfo";
import './List.css'

function List({ posts }) {
    return (
        <Fragment>
            <h2 className="List__h2">Posts</h2>
            <div className="List__posts">
                {posts.map(post =>
                    <CardInfo key={post.id} title={post.title} body={post.body} />
                )}
            </div>
        </Fragment>
    )
}

export default List;