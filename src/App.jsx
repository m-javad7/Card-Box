import CardBox from './Components/CardBox';

const App = () => {
    const handleButtonClick = () => {
        console.log('Button clicked!');
    };

    return (
        <div>
            <CardBox
                imageUrl="src/assets/car.jpg"
                title="Card Title"
                description="This is a description of the card."
                buttonText="Click Me"
                onButtonClick={handleButtonClick}
            />
        </div>
    );
};

export default App;
