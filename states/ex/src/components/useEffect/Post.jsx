import './Post.css'

function Post({ title, body }) {
    return (
        <>
            <div className='format'>
                <h3>{title}</h3>

                <p>{body}</p>

            </div>


        </>
    )
}

export default Post;