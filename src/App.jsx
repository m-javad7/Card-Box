import CardBox from './Components/CardBox';

const App = () => {
    const handleButtonClick = () => {
        console.log('Button clicked!');
    };

    return (
        <div>
            <CardBox
                imageUrl="src/assets/car.jpg"
                title="Lizard"
                description="Chevrolet is an iconic American car brand known.for its reliable, dependable, and affordable vehicles. Founded in 1911, Chevy has become one of the most recognizable car brands in the"
                buttonText="Click Me"
                onButtonClick={handleButtonClick}
            />
        </div>
    );
};

export default App;
