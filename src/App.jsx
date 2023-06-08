import CardBox from './Components/CardBox';

const App = () => {
    return (
        <div>
            <CardBox
                imageUrl="src/assets/car.jpg"
                title="Lizard"
                description="Chevrolet is an iconic American car brand known.for its reliable, dependable, and affordable vehicles. Founded in 1911, Chevy has become one of the most recognizable car brands in the world."
                linkShare="SHARE"
                linkMore="LEARN MORE"
                link1Url="#"
                link2Url="#"
            />
        </div>
    );
};

export default App;
