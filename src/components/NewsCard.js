import moment from 'moment-timezone';

const NewsCard = ({title, source, publishedAt,description,urlToImage, url}) => {
    if(!urlToImage) return;

    const utcDate = {publishedAt};
    const publishedDate = moment.utc(utcDate).tz('Asia/Jakarta').format('YYYY-MM-DD');

    return (
        <div className="bg-[#d3d3d34d] hover:bg-gray-200 hover:scale-105 w-72 m-3 p-2 h-72 overflow-hidden shadow-lg relative">
            <img src={urlToImage} className="h-28 flex m-auto z-10" alt="img not found"/>
            <h3 className="p-1 font-bold text-[#2D3A46]">{title}</h3>
            <div className='flex'>
                <p className="text-xs font-serif p-1">{source.name}</p> 
                <p className='text-xs flex justify-center items-center'> ⚫</p>
                <p className='text-xs font-serif p-1'>{publishedDate}</p>
            </div>
            <p className="p-1 text-xs">{description}</p>
            <a href={url} target='_blank'><button className="bg-cyan-600 p-1 rounded-md text-white  font-semibold m-1 absolute bottom-1 left-1 z-50 cursor-pointer">Read More</button></a>
        </div>
    )
}

export default NewsCard;