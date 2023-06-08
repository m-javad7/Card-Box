import CardBoxTitle from './CardBoxTitle';
import CardBoxDescription from './CardBoxDescription';
import CardLink from './CardLink.jsx';
import CardImage from './CardImage.jsx';

const CardBox = ({ imageUrl, title, description, linkShare, link1Url,linkMore, link2Url }) => {
    return (
        <div className="card">
            <div className="card-box">
                <CardImage imageUrl={imageUrl} />
                <CardBoxTitle title={title} />
                <CardBoxDescription description={description} />
                <div className="card-link">
                    <CardLink url={link1Url} text={linkShare}/>
                    <CardLink url={link2Url} text={linkMore}/>
                </div>
            </div>
        </div>
    );
};

export default CardBox;
