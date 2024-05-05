import PropTypes from 'prop-types';
import { FaBookmark } from 'react-icons/fa';
const Blog = ({ blog ,handleAddToBookmark }) => {
 const {title, cover,author,
    author_img, reading_time, posted_date,hashtags} =blog;
    return (
        <div className='mb-20'>
            <img className='w-full' src={cover} alt={`Cover Picture of ${title}`} />
            <div className='flex justify-between'>
                <div className='flex'>
                    <img className='w-14' src={author_img} alt="" />
                    <div className='ml-6'>
                        <h3 className='text-3xl'>{author}</h3>
                        <p>{posted_date}</p>
                    </div>
                </div>
                <div>
                    <span>{reading_time} min read</span>
                    <button
                    onClick={() => handleAddToBookmark(blog)}
                    className=' ml-2 text-2xl text-red-800'><FaBookmark></FaBookmark></button>
                </div>

            </div>
            <h1 className='text-4xl'>{title}</h1>
            <p>
                {
                    hashtags.map((hash,idx) => <span key={idx}><a href="">#{hash}</a></span> )
                }
            </p>
           
        </div>
    );
};

Blog.propTypes ={
    blog: PropTypes.object.isRequired,
    handleAddToBookmark:PropTypes.func
}

export default Blog;