import CardBoxTitle from './CardBoxTitle';
import CardBoxDescription from './CardBoxDescription';
import CardBoxButton from './CardButton';
import CardImage from './CardImage.jsx';

const CardBox = ({ imageUrl, title, description, buttonText, onButtonClick }) => {
    return (
        <div className="card">
            <div className="card-box">
                <CardImage imageUrl={imageUrl} />
                <CardBoxTitle title={title} />
                <CardBoxDescription description={description} />
                <CardBoxButton buttonText={buttonText} onButtonClick={onButtonClick} />
            </div>
        </div>
    );
};

export default CardBox;
