import PropTypes from 'prop-types'

const Bookmark = ({bookmark}) => {
    const { title } =bookmark;
    return (
        <div className='bg-stone-200 p-4 m-4 rounded-xl'>
           <h3>title :{title}</h3>
        </div>
    );
};

Bookmark.PropTypes={
    bookmark :PropTypes.object
}
export default Bookmark;